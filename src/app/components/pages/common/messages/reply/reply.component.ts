import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {ClientApi} from '../../../../../services/clientapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Validate} from '../../../../../services/validate.service';
import {NotifyService} from '../../../../../services/notify.service';
import {until} from 'selenium-webdriver';
import elementIsDisabled = until.elementIsDisabled;
import {DISABLED} from '@angular/forms/src/model';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.scss']
})
export class ReplyComponent implements OnInit, OnDestroy {
  public reply: any;
  public form: FormGroup;
  private sub: any;
  private paramId: any;
  public files = [];
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
      if (params.paramId) {
        this.paramId = params.paramId;
        console.log(this.paramId);
        this.loadData();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  initForm() {

    this.form = this.formBuilder.group({
      recipient: ['', Validators.required],
      subject: ['', Validators.required],
      body: ['', Validators.required],
    });

  }
  loadData() {
    this.api.getMessageDetail(this.paramId).subscribe(res => {
      this.reply = res;
      console.log(this.reply);
      this.form.controls['recipient'].setValue(this.reply.sender.id);
      this.form.controls['subject'].setValue('Re : ' + this.reply.subject);
      this.form.controls['body'].setValue(this.reply.sender.user.first_name + ' ' + this.reply.sender.user.last_name + ' wrote :\n> ' + this.reply.body);
      // this.reply.reply_to = 10;
    });
  }
  sendMessage() {
    if (this.form.valid) {
      this.form.value.reply_to = 10;
      this.api.sendReplyCompose(this.form.value).subscribe(res => {
        if (res.success) {
          if (this.files.length > 0) {
            this.sendAttachment(res.id);
            this.notify.showNotification('success', 'sent  reply-message successfully');
            this.router.navigate(['/app/messages/inbox']);
          } else {
            this.notify.showNotification('success', 'sent  reply-message successfully');
            this.router.navigate(['/app/messages/inbox']);
          }
        }
      });
    } else {
      console.log(this.form.value);
      this.validate.validateAllFormFields(this.form);
    }
  }
  fileChangeListener($event) {
    console.log($event.target.files);
    this.files = $event.target.files;
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

}
