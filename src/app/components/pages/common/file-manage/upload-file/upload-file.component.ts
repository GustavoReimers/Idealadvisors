import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientApi} from '../../../../../services/clientapi.service';
import {NotifyService} from '../../../../../services/notify.service';
import {Validate} from '../../../../../services/validate.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-file-manage-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class FileManageUploadFileComponent implements OnInit {

  public form: FormGroup;
  public titles = [];
  public files = [];

  constructor(
    public api: ClientApi,
    public formBuilder: FormBuilder,
    public notify: NotifyService,
    public validate: Validate,
    public router: Router
  ) { }

  ngOnInit() {
    this.initForm();
    this.api.getFileFolders().subscribe(res => {
      console.log(res);
      this.titles = res;
    })
  }

  initForm() {
    this.form = this.formBuilder.group({
      folder: ['', Validators.required],
      name: ['', Validators.required],
      file: [null, Validators.required],
      description: [''],
    });
  }

  add() {
    if (this.form.valid) {

      const formData = new FormData();
      const file = this.files[0];

      formData.append('file', file, file.name);
      for (let key in this.form.value) {
        if (key != 'file') {
          formData.append(key, this.form.value[key]);
        }
      }

      console.log(formData);

      this.api.createFile(formData).subscribe(res => {
        console.log(res);
        if (res.success) {
          this.notify.showNotification('success', 'successfully created');
          this.router.navigate(['/app/file-management/home']);
        }
      })
    } else {
      this.validate.validateAllFormFields(this.form);
    }
  }

  cancel() {
    this.router.navigate(['/app/file-management/home'])
  }

  fileChangeListener($event) {
    console.log($event.target.files);
    this.files = $event.target.files;
  }

}
