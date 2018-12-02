import { Component, OnInit } from '@angular/core';
import {ClientApi} from '../../../../../services/clientapi.service';
import {NotifyService} from '../../../../../services/notify.service';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.component.html',
  styleUrls: ['./outbox.component.scss']
})
export class OutboxComponent implements OnInit {

  public sentList = [];
  public c: boolean;
  constructor(
    public api: ClientApi,
    public notify: NotifyService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.api.getSentMessageList().subscribe(res => {
      this.sentList = res;
      console.log(this.sentList);
    });

  }

  public deleteMessage(index) {
    this.c = confirm('Are you sure you want to delete this?');
    if ( this.c === true ) {
    this.api.deleteInboxMessage(this.sentList[index]['id'], {status: 30}).subscribe(res => {
      if (res.success) {
        console.log(this.sentList[index]['id']);
        this.notify.showNotification('success', 'removed successfully');
        this.sentList[index]['status'] = 30;
      }
    });
    }
  }
}
