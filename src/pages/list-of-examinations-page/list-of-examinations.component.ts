import {Component, EventEmitter, OnInit, Output} from "@angular/core";

import {ModalController, NavController} from "ionic-angular";
import {Examination} from "../../app/model/examination";
import {ExaminationService} from "../../app/examination/examination.service";
import {ExaminationCardView} from "../examination-card-view-page/examination-card-view.component";
import {CreateConfessionModal} from "../../app/modal/create-confession-modal/create-confession.modal";
import {Confession} from "../../app/model/confession";
import {ConfessionService} from "../../app/service/confession.service";
import {DisplayConfessionComponent} from "../display-confession-page/display-confession.component";
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'examinations-lists',
  templateUrl: 'list-of-examinations.html'
})
export class ListOfExaminationsPage implements OnInit {

  examinations : Examination[] = [];
  confession : Confession;
  title : String = 'Іспити сумління';

  @Output() onVoted = new EventEmitter<boolean>();

  constructor(
    public navCtrl: NavController,
    public modalCtrl : ModalController,
    public examinationService: ExaminationService,
    public confessionService : ConfessionService,
    public alertCtrl : AlertController
  ) {

  }

  ngOnInit(): void {

    this.examinationService.getExaminations("uk").then(
      entries =>
      {
        entries.forEach(entry => {
          this.examinationService.getExamination(entry.path).then(examination => this.examinations.push(examination))
        })
      }
    );

    this.confessionService.getActiveConfession().then(confession => {
      this.confession = confession;
    })
  }

  showExamination(examinationId, confession) : void {

    this.promptConfessionPin(confession, () => {
      this.navCtrl.push(ExaminationCardView, {
        examination_id: examinationId,
        confession: confession
      });
    })
  }

  showConfession() : void {
    this.promptConfessionPin(this.confession, () => {
      this.confessionService.getActiveConfession().then(confession => {
        this.confession = confession;
        this.navCtrl.push(DisplayConfessionComponent, {
          confession: confession
        });
      });
    });
  }

  showCreateConfessionModal(examination : Examination) : void {
    let modal = this.modalCtrl.create(CreateConfessionModal, {'examination' : examination});
    modal.onDidDismiss(data => {
      this.confession = data.confession;
    });

    modal.present();
  }

  promptConfessionPin(confession: Confession, handler: () => void) {
    this.alertCtrl.create({
      title: 'Введіть Пін',
      inputs: [
        {
          name: 'pin',
          placeholder: 'Пін',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Закрити',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Логін',
          handler: data => {
            if (confession.pin === data.pin) {
              handler();
            } else {
              this.showInvalidPinAlert();
            }
          }
        }
      ]
    }).present();
  }

  showInvalidPinAlert() {
    this.alertCtrl.create({
      title: 'Не вірний пін',
      subTitle: 'Ви ввели не вірний пін',
      buttons: ['Закрити']
    }).present();
  }
}
