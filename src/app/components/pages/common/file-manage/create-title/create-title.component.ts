import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClientApi} from '../../../../../services/clientapi.service';
import {NotifyService} from '../../../../../services/notify.service';
import {Validate} from '../../../../../services/validate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-file-manage-create-title',
  templateUrl: './create-title.component.html',
  styleUrls: ['./create-title.component.scss']
})
export class FileManageCreateTitleComponent implements OnInit {

  public form: FormGroup;
  public categories = [];
  constructor(
    public api: ClientApi,
    public formBuilder: FormBuilder,
    public notify: NotifyService,
    public validate: Validate,
    public router: Router
  ) { }

  ngOnInit() {
    this.initForm();
    this.api.getFileCategories().subscribe(res => {
      console.log(res);
      this.categories = res;
    })
  }

  initForm() {
    this.form = this.formBuilder.group({
      category: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
    });
  }

  add() {
    if (this.form.valid) {
      this.api.createTitle(this.form.value).subscribe(res => {
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

}
