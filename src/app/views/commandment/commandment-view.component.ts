import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Commandment} from "../../model/commandment";
import {ConcreteSin} from "../../model/concrete_sin";
import {ConfessionService} from "../../service/confession.service";
import {Confession} from "../../model/confession";
@Component({
  templateUrl: 'commandment-view.html',
  selector: 'eoc-commandment-view'
})
export class CommandmentView implements OnInit {

  @Input() commandment : Commandment;
  @Input() confession : Confession;
  @Output() confessionChanged = new EventEmitter<Confession>();

  constructor(public confessionService : ConfessionService){}

  ngOnInit(): void {
    /*this.confessionService.getActiveConfession().then(
      confession => this.confession = confession
    )*/
  }

  toggleCommandment(commandment : Commandment, sin : ConcreteSin) {
    let commandmentCopy = new Commandment;
    commandmentCopy.name = commandment.name;
    commandmentCopy.number = commandment.number;
    commandmentCopy.sins.push(sin);

    this.confession.commandments.push(commandmentCopy);
  }
}
