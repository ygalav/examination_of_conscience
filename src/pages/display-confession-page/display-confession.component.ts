import {Component, OnInit} from "@angular/core";
import {NavParams} from "ionic-angular";
import {Confession} from "../../app/model/confession";

@Component({
  templateUrl: 'display-confession.html'
})
export class DisplayConfessionComponent implements OnInit {

  public static NAV_CONFESSION_KEY = 'confession';

  confession : Confession = null;

  constructor(public navParams : NavParams){}

  ngOnInit(): void {
    this.confession = this.navParams.get(DisplayConfessionComponent.NAV_CONFESSION_KEY);
  }

}
