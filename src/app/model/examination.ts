import {Commandment} from "./commandment";
export class Examination {
  public id: string;
  public name : string;
  public description: string;
  public commandments: Array<Commandment>;
}
