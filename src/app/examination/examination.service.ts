import {Injectable} from "@angular/core";
import {Http}    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Examination} from "../model/examination";
import {ExaminationUrlResolverService} from "./examination-url-resolver.service";

@Injectable()
export class ExaminationService {

  constructor(
    private http: Http,
    private examinationUrlResolverService : ExaminationUrlResolverService
  ) { }

  getExaminations(language : String) : Examination[] {
    let examinationOne = new Examination;
    examinationOne.id = "uk_examination_general";
    examinationOne.name = "Загальний іспит сумління";
    let examinationTwo = new Examination;
    examinationTwo.id = "uk_examination_general";
    examinationTwo.name = "Іспит сумління для дітей";
    return [examinationOne, examinationTwo]
  }

  getExamination(id: string) : Promise<Examination> {
    const url : string = this.examinationUrlResolverService.getUrlForSingleExamination(id);
    return this.http.get(url).toPromise().then(response => {
      console.log("Hitting url:" + url);
      console.log("Response:");
      console.log(response.json());
      return response.json() as Examination
    }).catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
