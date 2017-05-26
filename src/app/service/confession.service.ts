import {Confession} from "../model/confession";
import * as localforage from "localforage";
import {Injectable, OnInit} from "@angular/core";

@Injectable()
export class ConfessionService implements OnInit {

  private CURRENT_CONFESSION_KEY : string = 'current_confession';

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
    return localforage.getItem(this.CURRENT_CONFESSION_KEY).catch(reason => Promise.reject(reason));
  }

  saveConfession(confession : Confession) : Promise<Confession> {
    return localforage.setItem(this.CURRENT_CONFESSION_KEY, confession).catch(reason => Promise.reject(reason))
  }

  closeConfession(confession : Confession) : Promise<void> {
    return localforage.removeItem(this.CURRENT_CONFESSION_KEY);
  }

  createConfession(name : string, pin : string, parentId : string) : Promise<Confession> {
    let confession = new Confession();
    confession.name = name;
    confession.pin = pin;
    confession.parent = parentId;
    return localforage.setItem(this.CURRENT_CONFESSION_KEY, confession).catch(reason => Promise.reject(reason))
  }
}
