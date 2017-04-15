import {Injectable} from "@angular/core";


@Injectable()
export class ExaminationUrlResolverService {

  getUrlForSingleExamination(id: string) : string {
    return "/assets/examinations/" + id + ".json";
  }

}
