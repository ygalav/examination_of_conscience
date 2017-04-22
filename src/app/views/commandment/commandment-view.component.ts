import {Component, Input} from "@angular/core";
import {Commandment} from "../../model/commandment";
@Component({
  templateUrl: 'commandment-view.html',
  selector: 'eoc-commandment-view'
})
export class CommandmentView {

  @Input() commandment : Commandment;

}
