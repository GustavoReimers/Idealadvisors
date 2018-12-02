import { Component, OnInit, OnDestroy } from '@angular/core';
import {ClientApi} from '../../../../../services/clientapi.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NotifyService} from '../../../../../services/notify.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, OnDestroy {
  private sub: any;
  private paramId;
  public detailData: any;
  constructor(
    public api: ClientApi,
    private activateRoute: ActivatedRoute,
    public router: Router,
    public notify: NotifyService
  ) { }

  ngOnInit() {
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
  loadData() {
  this.api.getMessageDetail(this.paramId).subscribe(res => {
       this.detailData = res;
       console.log(this.detailData);
    });
  }
  public deleteMessage(id) {
    this.api.deleteInboxMessage(id, {status: 30}).subscribe(res => {
      if (res.success) {
        console.log(res);
        this.notify.showNotification('success', 'removed successfully');
        this.detailData['status'] = 30;
        this.router.navigate(['/app/messages/inbox']);
      }
    });

  }
}
