import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";
import {Examination} from "../../model/examination";
@Component ({
  templateUrl: 'create-confession.html'
})
export class CreateConfessionModal {
  constructor(public viewCtrl : ViewController) {}

  public dismiss() {
    this.viewCtrl.dismiss()
  }

  public createConfession(name : string, examination : Examination) {
    this.viewCtrl.dismiss()
  }
}
