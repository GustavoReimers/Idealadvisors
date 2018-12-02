import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientApi} from '../../../../../services/clientapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifyService} from '../../../../../services/notify.service';
import {Validate} from '../../../../../services/validate.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public form: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    public api: ClientApi,
    public activateRoute: ActivatedRoute,
    public validate: Validate,
    public notify: NotifyService,
    public router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {

    this.form = this.formBuilder.group({
      first_name: ['', Validators.required],  /// first name
      last_name: ['', Validators.required],  /// last name
      company: ['', Validators.required],
      password: ['', Validators.required],
      email_addresses: ['', Validators.required],
      email_address: ['', Validators.required],
      // email_address: ['', Validators.required ,  [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      send_english_mailings: [false],
      send_turkish_mailings: [false],
      send_german_mailings: [false],
      send_research_third_parties: [false],
      send_research_ideal: [false],
      send_greetings: [false],
      send_general: [false],
      send_recommendations_bonds: [false],
      send_recommendations_equities: [false],
      send_recommendations_fx: [false],
      send_recommendations_commodities: [false],
      send_recommendations_real_estate: [false],
      send_recommendations_other: [false],
    });
  }
  createContact() {

    if (this.form.valid) {

      const emails = this.form.value.email_addresses.split('\n');
      console.log(emails);
      this.form.value.email_addresses = emails;

      this.api.api_createContact(this.form.value).subscribe(res => {
        if (res.success) {
          this.notify.showNotification('success', 'successfully created');
          this.router.navigate(['/app/contact/list']);
        }
      });
    } else {
      console.log(this.form.value);
      this.validate.validateAllFormFields(this.form);
    }
  }
}
