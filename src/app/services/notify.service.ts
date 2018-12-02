/**
 * Created by ApolloYr on 1/29/2018.
 */
import {Injectable, ViewContainerRef} from "@angular/core";
import {MessageService} from 'primeng/components/common/messageservice';

@Injectable()
export class NotifyService {

    constructor(
        public messageService: MessageService
    ) {
    }

    showNotification(type, message) {
        this.messageService.add({severity: type, summary: message});
    }


}
