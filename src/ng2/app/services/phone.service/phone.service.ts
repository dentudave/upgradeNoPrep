import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IPhoneData } from "../../interfaces/IPhoneData";

declare var angular: angular.IAngularStatic;
import { downgradeInjectable } from '@angular/upgrade/static';

@Injectable()
export class Phone {
  constructor(private http: HttpClient) { }
  query(): Observable<IPhoneData[]> {
    return this.http.get<IPhoneData[]>(`phones/phones.json`);
  }
  get(id: string): Observable<IPhoneData> {
    return this.http.get<IPhoneData>(`phones/${id}.json`);
  }
}

angular.module('core.phone')
  .factory('phone', downgradeInjectable(Phone));
