import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IPhoneData } from "../../interfaces/IPhoneData";

import * as angular from "angular";

import { downgradeInjectable } from '@angular/upgrade/static';

@Injectable()
export class Phone {
  constructor(private http: HttpClient) { }
  query(): Promise<IPhoneData[]> {
    return this.http.get<IPhoneData[]>(`ng1/phones/phones.json`).toPromise();
  }
  get(id: string): Promise<IPhoneData> {
    return this.http.get<IPhoneData>(`phones/${id}.json`).toPromise();
  }
}

angular.module('core.phone')
  .factory('Phone', downgradeInjectable(Phone) as any);
