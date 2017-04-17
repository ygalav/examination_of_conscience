import {Injectable} from "@angular/core";
import { Platform } from 'ionic-angular';


@Injectable()
export class ExaminationUrlResolverService {

  constructor(public plt: Platform) { }

  getUrlForSingleExamination(id: string) : string {
    return this.getAssetsPath() + "/examinations/" + id + ".json";

  }

  private getAssetsPath(): string {
    let url = '/assets';
    if(this.plt.is("android")){
      url = "/android_asset/www/assets";
    }
    return url;
  }

}
