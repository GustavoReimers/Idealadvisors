import {Routes, RouterModule} from '@angular/router';
import {FileManageLayoutComponent} from './layout/layout.component';
import {FileManageHomeComponent} from './home/home.component';
import {FileManageUploadFileComponent} from './upload-file/upload-file.component';
import {FileManageCreateTitleComponent} from './create-title/create-title.component';


export const FileManageRoute: Routes = [
  {
    path: '', component: FileManageLayoutComponent,
    children: [
      {
        path: 'home',
        component: FileManageHomeComponent
      },
      {
        path: 'upload-file',
        component: FileManageUploadFileComponent
      },
      {
        path: 'create-title',
        component: FileManageCreateTitleComponent
      },
    ]
  }
];
