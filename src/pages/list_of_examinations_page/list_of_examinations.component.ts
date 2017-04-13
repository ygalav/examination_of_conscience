import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Examination} from "../../app/model/examination";
import {ExaminationService} from "../../app/examination/examination.service";

@Component({
  selector: 'examinations-lists',
  templateUrl: 'list_of_examinations.html'
})
export class ListOfExaminationsPage implements OnInit{

  examinations : Examination[] = [];

  constructor(public navCtrl: NavController, public examinationService: ExaminationService) {

  }

  ngOnInit(): void {
    this.examinations = this.examinationService.getExaminations("uk")
  }
}
