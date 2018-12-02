import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {ClientApi} from '../../../../../services/clientapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Validate} from '../../../../../services/validate.service';
import {NotifyService} from '../../../../../services/notify.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit, OnDestroy {


  public contact; /// it is not list
  public form: FormGroup;
  private sub: any;
  private contactId;

  constructor(
    public api: ClientApi,
    private activateRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public notify: NotifyService,
    public validate: Validate,
    public router: Router
  ) { }
  ngOnInit() {
    this.initForm();
    this.sub = this.activateRoute.params.subscribe(params => {
      if (params.contactId) {
        this.contactId = params.contactId;
        console.log(this.contactId);
        this.loadData();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
  loadData() {
    this.api.getUpdateContact(this.contactId).subscribe(res => {
      this.contact = res;
      console.log(this.contact);
      this.form.controls['first_name'].setValue(this.contact.first_name);
      this.form.controls['last_name'].setValue(this.contact.last_name);
      this.form.controls['email_addresses'].setValue(this.contact.email_address_list.join('\n'));
      this.form.controls['email_address'].setValue(this.contact.generated_internal_email);
      this.form.controls['company'].setValue(this.contact.company);
      this.form.controls['password'].setValue(this.contact.password);
      this.form.controls['send_english_mailings'].setValue(this.contact.send_english_mailings);
      this.form.controls['send_german_mailings'].setValue(this.contact.send_german_mailings);
      this.form.controls['send_turkish_mailings'].setValue(this.contact.send_turkish_mailings);
      this.form.controls['send_research_third_parties'].setValue(this.contact.send_research_third_parties);
      this.form.controls['send_research_ideal'].setValue(this.contact.send_research_ideal);
      this.form.controls['send_greetings'].setValue(this.contact.send_greetings);
      this.form.controls['send_general'].setValue(this.contact.send_general);
      this.form.controls['send_recommendations_equities'].setValue(this.contact.send_recommendations_equities);
      this.form.controls['send_recommendations_fx'].setValue(this.contact.send_recommendations_fx);
      this.form.controls['send_recommendations_commodities'].setValue(this.contact.send_recommendations_commodities);
      this.form.controls['send_recommendations_real_estate'].setValue(this.contact.send_recommendations_real_estate);
      this.form.controls['send_recommendations_other'].setValue(this.contact.send_recommendations_other);
    });
  }
  updateContact() {

    if (this.form.valid) {

      let emails = this.form.value.email_addresses.split('\n');
      console.log(emails);
      this.form.value.email_addresses = emails;

      this.api.putUpdateContact(this.contactId, this.form.value).subscribe(res => {
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
