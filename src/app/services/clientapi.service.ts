/**
 * Created by ApolloYr on 2/5/2018.
 */
import { Injectable } from '@angular/core';
import { Api } from './api.service';

@Injectable()
export class ClientApi extends Api {

  public login(data) {
    return this.post('/auth/get-token/', data);
  }

  public getUser() {
    return this.get('/ums/user/');
  }

  public changePassword(data) {
    return this.post('/ums/user/update_password/', data);
  }

  public getOrdersList(data) {
    return this.get('/pms/orders/', data);
  }

  public getClientTransactions(id, data) {
    return this.get('/pms/clients/' + id + '/transactions/', data);
  }

  public getClientPortfolio(id, data) {
    return this.get('/pms/clients/' + id + '/portfolio/', data);
  }

  public getClient(id) {
    return this.get('/pms/clients/' + id + '/');
  }

  public getFISList(data) {
    return this.get('/fis/securities/', data);
  }

  public createSecurityOrder(data) {
    return this.post('/pms/orders/', data);
  }

  public createFXOrder(data) {
    return this.post('/pms/orders/', data);
  }

  public getCurrencyList() {
    return this.get('/fis/currencies/');
  }

  public getClientList() {
    return this.get('/pms/clients/');
  }

  public getFxPricing(data) {
    return this.get('/fis/fx_prices/', data);
  }

  public getTransactionsForAllClients(data) {
    return this.get('/pms/transactions/', data);
  }

  public getTransactionsForClient(id, data) {
    return this.get('/pms/clients/' + id + '/transactions/', data);
  }

  public createTransaction(data) {
    return this.post('/pms/transactions/', data);
  }

  public getOrdersForClient(id, data) {
    return this.get('/pms/clients/' + id + '/orders/', data);
  }

  public createOrder(data) {
    return this.post('/pms/orders/', data);
  }

  public getTransaction(id) {
    return this.get('/pms/transactions/' + id);
  }

  public updateTransaction(id, data) {
    return this.put('/pms/transactions/' + id + '/', data);
  }
  public getOrder(orderId) {
    return this.get(`/pms/orders/${orderId}/`);
  }

  public executeOrder(orderId, data) {
    return this.post(`/pms/orders/${orderId}/execute/`, data);
  }

  public getFileCategories() {
    return this.get('/fms/categories/');
  }
  public getFileFolders() {
    return this.get('/fms/folders/');
  }
  public api_createContact(data) {
    console.log(data);
    return this.post('/ctms/contacts/', data);
  }
  public getContactList() {
    return this.get('/ctms/contacts/');
  }
  getUpdateContact(id) {
    return this.get('/ctms/contacts/' + id + '/');
  }
  public putUpdateContact(id, data) {
    return this.put('/ctms/contacts/' + id + '/', data );
  }
  public getMessageList() {
    return this.get('/sms/secure_messages/');
  }
  public sendCompose(data) {
    console.log(data);
    return this.post('/sms/secure_messages/', data);
  }
  public getSentMessageList() {
    return this.get('/sms/secure_messages/sent/');
  }
  public getTrashMessageList() {
    return this.get('');
  }

  public getsmsProfileList() {
    return this.get('/sms/secure_messages/list_profiles/');
  }

  public createAttachment(data) {
    return this.post('/sms/attachments/', data);
  }
  public deleteInboxMessage(id, data) {
    return this.put('/sms/secure_messages/' + id + '/archive/', data);
  }

  public getTrashMessage() {
    return this.get('/sms/secure_messages/archived/');
  }

  public createTitle(data) {
    return this.post('/fms/folders/', data);
  }

  public createFile(data) {
    return this.post('/fms/documents/', data);
  }
  public getMessageDetail(id) {
    return this.get('/sms/secure_messages/' + id + '/');
  }
  public sendReplyCompose(data) {
    console.log(data);
    return this.post('/sms/secure_messages/', data);
  }
}
