import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Commandment} from "../../model/commandment";
import {ConcreteSin} from "../../model/concrete_sin";
import {ConfessionService} from "../../service/confession.service";
import {Confession} from "../../model/confession";
import {SinViewDto} from "./sin-view.dto";
import {SinSubjectViewDto} from "./sin-subject-view.dto";
@Component({
  templateUrl: 'commandment-view.html',
  selector: 'eoc-commandment-view'
})
export class CommandmentView implements OnInit {

  @Input() commandment : Commandment;
  @Input() confession : Confession;

  @Output() confessionChanged = new EventEmitter<Confession>();

  sins : SinViewDto[] = [];
  subjectViews : SinSubjectViewDto[] = [];

  constructor(public confessionService : ConfessionService){}

  ngOnInit(): void {

    this.commandment.subjects.forEach(
      subject => {
        let subjectView = this.convertSubjectToDto(subject);
        this.subjectViews.push(subjectView);
      }
    );


    //TODO Remove this way
    /*this.commandment.sins.forEach(sin => {
      let sinView = new SinViewDto;
      sinView.sin = sin;

      if (this.confession) {
        sinView.selectedInExamination = this.isSinCheckedInConfession(sin, this.commandment, this.confession);
      }
      this.sins.push(sinView);
    });*/
  }

  private convertSubjectToDto(subject) {
    let subjectView = new SinSubjectViewDto();
    subjectView.name = subject.name;
    subject.sins.forEach(sin => {
      let sinView = this.convertSinToDto(sin);
      subjectView.sinViews.push(sinView)
    });
    return subjectView;
  }

  private convertSinToDto(sin) {
    let sinView = new SinViewDto;
    sinView.sin = sin;

    if (this.confession) {
      sinView.selectedInExamination = this.isSinCheckedInConfession(sin, this.commandment, this.confession);
    }
    return sinView;
  }

  private isSinCheckedInConfession(sin : ConcreteSin, commandment: Commandment, confession : Confession) : boolean {
    if (confession && confession.commandments.length > 0) {
      let commandmentFromConfession = confession.commandments.filter(c => c.number == commandment.number)[0];
      if (commandmentFromConfession) {
        return this.isCommandmentHasASin(commandmentFromConfession, sin)
      }
    }
    return false;
  }

  private isCommandmentHasASin(commandment : Commandment, sin : ConcreteSin) : boolean {
    let result = false;
    if (sin && commandment && commandment.sins) {
      return commandment.sins.filter(aSin => aSin.name === sin.name).length > 0;
    }
    return result;
  }

  toggleCommandment(commandmentFromUI : Commandment, sin : ConcreteSin) {
    let commandments = this.confession.commandments.filter(c => commandmentFromUI.number === c.number);
    let hasCommandmentWithNumber = commandments.length > 0;

    let commandmentFromConfession : Commandment = null;
    if (hasCommandmentWithNumber) {
      commandmentFromConfession = commandments[0];
    } else {
      //create new commandment and copy info to the copy
      commandmentFromConfession = new Commandment;
      commandmentFromConfession.name = commandmentFromUI.name;
      commandmentFromConfession.number = commandmentFromUI.number;
    }

    //If sin is in the confession - then remove
    if (this.isCommandmentHasASin(commandmentFromConfession, sin)) {
      //Remove sin from commandment
      commandmentFromConfession.sins = commandmentFromConfession.sins.filter(aSin => aSin.name !== sin.name);
    }
    else {
      commandmentFromConfession.sins.push(sin);
    }

    //Remove current
    this.confession.commandments =
      this.confession.commandments.filter(c => c.number !== commandmentFromConfession.number);
    //Add new Current
    this.confession.commandments.push(commandmentFromConfession);
    //Save
    this.confessionService.saveConfession(this.confession).then(()=>{})
  }
}
