import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientApi} from '../../../../../services/clientapi.service';
import {NotifyService} from '../../../../../services/notify.service';
import {Validate} from '../../../../../services/validate.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss']
})
export class ComposeComponent implements OnInit {

  public form: FormGroup;
  public recipients = [];
  public files = [];

  constructor(
    public formBuilder: FormBuilder,
    public api: ClientApi,
    public activateRoute: ActivatedRoute,
    public validate: Validate,
    public notify: NotifyService,
    public router: Router
  ) { }

  ngOnInit() {
    this.initForm();

    this.api.getsmsProfileList().subscribe(res => {
      console.log(res);

      this.recipients = res;
    });
  }

  initForm() {
   this.form = this.formBuilder.group({
     recipient: ['', Validators.required],
     subject: ['', Validators.required],
     body: ['', Validators.required],
   });
  }

  sendMessage() {
    if (this.form.valid) {

      this.api.sendCompose(this.form.value).subscribe(res => {
        if (res.success) {
          if (this.files.length > 0) {
            this.sendAttachment(res.id);
            this.notify.showNotification('success', 'sent message successfully');
            this.router.navigate(['/app/messages/inbox']);
          } else {
            this.notify.showNotification('success', 'sent message successfully');
            this.router.navigate(['/app/messages/inbox']);
          }
        }
      });
    } else {
      console.log(this.form.value);
      this.validate.validateAllFormFields(this.form);
    }
  }

  sendAttachment(id) {

    const formData = new FormData();
    const file = this.files[0];

    formData.append('file', file, file.name);
    formData.append('secure_message', id);

    console.log(this.files);
    this.api.createAttachment(formData).subscribe(res => {
      console.log(res);
    });
  }

  fileChangeListener($event) {
    console.log($event.target.files);
    this.files = $event.target.files;
  }
}
