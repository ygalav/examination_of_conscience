import {Component, OnInit} from "@angular/core";
import { NavController, NavParams } from 'ionic-angular';
import {ExaminationService} from "../../app/examination/examination.service";
import {Examination} from "../../app/model/examination";

@Component({
  templateUrl: 'examination-card-view.html',
  styles: [
    `
    .swiper-slide {
      overflow-y: scroll;
      /*display: block; */ 
    }
    `
  ]
})
export class ExaminationCardView implements OnInit {
  public examination_id_key : String = "examination_id";

  examination : Examination = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public examinationService : ExaminationService,
  ) { }

  ngOnInit(): void {
    const examinationId = this.navParams.get("examination_id");
    this.examinationService.getExamination(examinationId).then(examination => this.examination = examination);
  }
}
