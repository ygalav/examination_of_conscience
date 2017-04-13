import {Injectable} from "@angular/core";
import {Examination} from "../model/examination";

@Injectable()
export class ExaminationService {

  getExaminations(language : String) : Examination[] {
    let examinationOne = new Examination;
    examinationOne.name = "Загальний іспит сумління";
    let examinationTwo = new Examination;
    examinationTwo.name = "Іспит сумління для дітей";
    return [examinationOne, examinationTwo]
  }
}
