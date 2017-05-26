import {Injectable} from "@angular/core";
import { Platform } from 'ionic-angular';


@Injectable()
export class ExaminationUrlResolverService {

  private EXAMINATIONS_LIST_ENTRIES_FILE_NAME = "examinations.json";

  constructor(public plt: Platform) { }

  getUrlForSingleExamination(id: string) : string {
    return this.getAssetsPath() + "/examinations/" + id + ".json";
  }

  getUrlForExaminationsList() : string {
    return this.getAssetsPath() + "/examinations/" + this.EXAMINATIONS_LIST_ENTRIES_FILE_NAME;
  }

  private getAssetsPath(): string {
    let url = '/assets';
    if(this.plt.is("android")){
      url = "/android_asset/www/assets";
    }
    return url;
  }

}
