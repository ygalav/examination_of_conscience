import {ConcreteSin} from "./concrete_sin";
import {SinSubject} from "./sin_subject";

export class Commandment {
  public number: number;
  public name : String;
  public description : String;
  public subjects : SinSubject[] = [];
  public sins : ConcreteSin[] = [];
}
