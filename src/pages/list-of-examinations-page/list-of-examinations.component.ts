import {Component, OnInit} from "@angular/core";

import {ModalController, NavController, NavParams} from "ionic-angular";
import {Examination} from "../../app/model/examination";
import {ExaminationService} from "../../app/examination/examination.service";
import {ExaminationCardView} from "../examination-card-view-page/examination-card-view.component";
import {CreateConfessionModal} from "../../app/modal/create-confession-modal/create-confession.modal"; //TODO: Delete this page

@Component({
  selector: 'examinations-lists',
  templateUrl: 'list-of-examinations.html'
})
export class ListOfExaminationsPage implements OnInit {

  examinations : Examination[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams : NavParams,
    public modalCtrl : ModalController,
    public examinationService: ExaminationService) {

  }

  ngOnInit(): void {
    this.examinations = this.examinationService.getExaminations("uk")
  }

  showExamination(examination) : void {
    this.navCtrl.push(ExaminationCardView, {
      examination_id: examination.id
    });
  }

  showCreateConfessionModal(examination : Examination) : void {
    var modal = this.modalCtrl.create(CreateConfessionModal);
    modal.present();
  }
}
