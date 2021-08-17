import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lure } from '../lure';
import { LureType } from '../lure-type';

@Component({
  selector: 'app-add-lure',
  templateUrl: './add-lure.component.html',
  styleUrls: ['./add-lure.component.css'],
})
export class AddLureComponent {
  @Output()
  addLureReq = new EventEmitter<NgForm>();
  @ViewChild('lureForm')
  private _lureForm!: NgForm;

  get lureTypes() : LureType[] {
    return Lure.lureTypes();
  }

  public addALure(): void {
    this.addLureReq.emit(this._lureForm);
  }
}
