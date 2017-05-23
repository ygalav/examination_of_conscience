import {Component} from "@angular/core";
import {ConfessionService} from "../../service/confession.service";
import {NavController, NavParams, ViewController} from "ionic-angular";
import {Examination} from "../../model/examination";
import {Confession} from "../../model/confession";
import {ExaminationCardView} from "../../../pages/examination-card-view-page/examination-card-view.component";
@Component ({
  templateUrl: 'confession-login.html'
})
export class ConfessionLoginModal {
  private CONFESSION_KEY = 'confession';
  private EXAMINATION_ID_KEY = 'examination_id';
  private ACTION_KEY = 'action';

  confession : Confession;
  examination_id : string;
  action : string;


  constructor(
    public viewCtrl : ViewController,
    public navCtrl: NavController,
    public params : NavParams,
    public confessionService : ConfessionService
  )
  {
    this.confession = params.get(this.CONFESSION_KEY);
    this.examination_id = params.get(this.EXAMINATION_ID_KEY);
    this.action = params.get(this.ACTION_KEY);
  }

  login(pin : string) : void {

    //TODO: Pin validation

    if (this.action === 'showExamination') {
      this.navCtrl.push(ExaminationCardView, {
        examination_id: this.examination_id,
        confession: this.confession
      }).then(() => this.viewCtrl.dismiss());

    }
  }

  public dismiss() {
    this.viewCtrl.dismiss()
  }

}
