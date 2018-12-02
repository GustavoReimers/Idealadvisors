/**
 * Created by Alex on 5/21/2018.
 */
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FileManageRoute} from './file-manage.routing';
import {CommonModule} from '@angular/common';
import {FileManageLayoutComponent} from './layout/layout.component';
import {FileManageHomeComponent} from './home/home.component';
import {FileManageUploadFileComponent} from './upload-file/upload-file.component';
import {FileManageCreateTitleComponent} from './create-title/create-title.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(FileManageRoute),
  ],
  entryComponents: [

  ],
  declarations: [
    FileManageLayoutComponent,
    FileManageHomeComponent,
    FileManageUploadFileComponent,
    FileManageCreateTitleComponent,
  ],
  exports: [

  ],
  providers: [],
})
export class FileManageModule {

}
