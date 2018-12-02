import { Component, OnInit } from '@angular/core';
import { ClientApi} from '../../../../../services/clientapi.service';
import {Router} from '@angular/router';
import {NotifyService} from '../../../../../services/notify.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {
  public messageList = [];
  public c: boolean;
  constructor(
    public api: ClientApi,
    public router: Router,
    public notify: NotifyService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {

    this.api.getMessageList().subscribe(res => {
      this.messageList = res;
      console.log(this.messageList);
    });
  }

  public deleteMessage(index) {
    this.c = confirm('Are you sure you want to delete this?');
    if ( this.c === true ) {
    this.api.deleteInboxMessage(this.messageList[index]['id'], {status: 30}).subscribe(res => {
        if (res.success) {
          console.log(this.messageList[index]['id']);
          this.notify.showNotification('success', 'removed successfully');
          this.messageList[index]['status'] = 30;
        }
    });
    }
  }
}
