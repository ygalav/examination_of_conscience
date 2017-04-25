import {Commandment} from "./commandment";
export class Confession {
  public date : Date;
  public name: string;
  public commandments : Commandment[] = [];
  public parent : string;
  public finished : boolean;
}
