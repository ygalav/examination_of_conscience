import {Commandment} from "./commandment";
import {ExaminationPray} from "./examination_pray";
import {ExaminationSource} from "./examination_source";
export class Examination {
  public id: string;
  public name : string;
  public description: string;
  public commandments: Array<Commandment>;
  public prays : ExaminationPray[];
  public source : ExaminationSource;
}
