import {Injectable} from "@angular/core";
import {Http}    from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Examination} from "../model/examination";
import {ExaminationUrlResolverService} from "./examination-url-resolver.service";
import {ExaminationsListEntry} from "../model/examinations_list_entry";

@Injectable()
export class ExaminationService {


  constructor(
    private http: Http,
    private examinationUrlResolverService : ExaminationUrlResolverService
  ) { }

  getExaminations(language : String) : Promise<ExaminationsListEntry[]> {
    const url = this.examinationUrlResolverService.getUrlForExaminationsList();
    return this.http.get(url).toPromise().then(response => {
      console.log("Hitting url:" + url);
      console.log("Response:");
      console.log(response.json());
      return response.json() as ExaminationsListEntry[]
    }).then(entries => {
      return entries.filter(entry => entry.language === language)
    })
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
    alert('An error occurred' + error);
    return Promise.reject(error.message || error);
  }
}
