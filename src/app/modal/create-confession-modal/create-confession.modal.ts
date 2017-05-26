import {Component} from "@angular/core";
import {NavParams, ViewController} from "ionic-angular";
import {Examination} from "../../model/examination";
import {ConfessionService} from "../../service/confession.service";
@Component ({
  templateUrl: 'create-confession.html'
})
export class CreateConfessionModal {

  private EXAMINATION_KEY = 'examination';

  constructor(
    public viewCtrl : ViewController,
    public params : NavParams,
    public confessionService : ConfessionService
  )
  {
    this.examination = params.get(this.EXAMINATION_KEY)
  }
  examination : Examination;
  name = 'Іспит сумління';
  today = new Date;

  public dismiss() {
    this.viewCtrl.dismiss()
  }

  public createConfession(name : string, pin : string) {
    this.confessionService.createConfession(name, pin, this.examination.id).then( (confession) => {
      let data = { 'confession' : confession};
      this.viewCtrl.dismiss(data)
    });
  }
}
