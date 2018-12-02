import { Injectable } from '@angular/core';
import { Api } from 'services/api.service';

@Injectable()
export class ProspectApi extends Api {
  public listInformation() {
    return this.get('/prm/prospects/information/');
  }

  public listCompany() {
    return this.get('/prm/companies/');
  }

  public createCompany(data) {
    return this.post('/prm/companies/', data);
  }

  public searchProspect(query) {
    return this.get(`/prm/prospects/?q=${query}`);
  }

  public createPropspect(data) {
    return this.post('/prm/prospects/', data);
  }

  public updatePropspect(id, data) {
    return this.put(`/prm/prospects/${id}/`, data);
  }

  public getProspect(id) {
    return this.get(`/prm/prospects/${id}/`);
  }

  public createCallMemo(data) {
    return this.post('/prm/call_memos/', data);
  }

  public getCompany(id) {
    return this.get(`/prm/companies/${id}/`);
  }

  public updateCompany(id, data) {
    return this.put(`/prm/companies/${id}/`, data);
  }
}
