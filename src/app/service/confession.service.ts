import {Confession} from "../model/confession";
import * as localforage from "localforage";
import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class ConfessionService implements OnInit {


  ngOnInit(): void {
    localforage.config({
      driver      : localforage.WEBSQL, // Force WebSQL; same as using setDriver()
      name        : 'examinationOfConscience',
      version     : '1.0',
      size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
      storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
      description : 'some description'
    });


  }

  getActiveConfession() : Promise<Confession> {
    return localforage.getItem('confession').catch(reason => Promise.reject(reason));
  }

  saveConfession(confession : Confession) : Promise<Confession> {
    return localforage.setItem('confession', confession).catch(reason => Promise.reject(reason))
  }
}
