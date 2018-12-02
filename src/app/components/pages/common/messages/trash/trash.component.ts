import { Component, OnInit } from '@angular/core';
import {ClientApi} from '../../../../../services/clientapi.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  public trashList = [];
  constructor(
    public api: ClientApi
  ) { }

  ngOnInit() {
     this.loadData();
  }
  loadData() {
    this.api.getTrashMessage().subscribe(res => {
      this.trashList = res;
    });
  }

  unDelete(i) {

  }
}
