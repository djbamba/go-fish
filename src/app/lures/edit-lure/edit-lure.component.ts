import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lure } from '../lure';

@Component({
  selector: 'app-edit-lure',
  templateUrl: './edit-lure.component.html',
  styleUrls: ['./edit-lure.component.css'],
})
export class EditLureComponent implements OnInit {
  @Input()
  currLure!: Lure;
  private _updateLure!: Lure;
  @Output()
  editLureReq = new EventEmitter<Lure>();
  @ViewChild(NgForm)
  private _lureForm!: NgForm;

  ngOnInit(): void {}

  public updateLureReq(): void {
    console.debug('EditLureComponent.updateLureReq: %o', this._lureForm.value);
    this._updateLure = <Lure>this._lureForm.value;
    this._updateLure.id = this.currLure.id;
    this.editLureReq.emit(this._updateLure);
  }
}
