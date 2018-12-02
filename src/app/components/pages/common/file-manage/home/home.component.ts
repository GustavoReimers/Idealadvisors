import { Component, OnInit } from '@angular/core';
import {ClientApi} from '../../../../../services/clientapi.service';

@Component({
  selector: 'app-file-manage-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class FileManageHomeComponent implements OnInit {

  public categories = [];
  public subcategories = [];
  public folderList = [];
  public selectedFolders = [];

  public selectedCategory: any;

  constructor(
    public api: ClientApi
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.api.getFileCategories().subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    });

    this.api.getFileFolders().subscribe(res => {
      console.log(res);

      this.folderList = res;
    });
  }

  selectCategory(category) {
    this.selectedCategory = category;

    console.log(category);

    this.selectedFolders = this.folderList.filter(folder => folder.category == category.id);

    console.log(this.selectedFolders);
  }

}
