import { Component, OnInit } from '@angular/core';
import {ClientApi} from '../../../../../services/clientapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public loading = false;
  public contactList = [];

  constructor(
    public api: ClientApi,
    public router: Router
  ) { }


  ngOnInit() {
    this.loadData();
  }
  loadData() {
      this.loading = true;
      this.api.getContactList().subscribe(res => {
      this.contactList = res;
      console.log(this.contactList);
      this.loading = false;
    });
  }

}
