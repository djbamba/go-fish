import {
  Component,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LureService } from 'src/app/services/lure.service';
import { Lure } from '../lure';
import { LureType } from '../lure-type';

@Component({
  selector: 'app-add-lure',
  templateUrl: './add-lure.component.html',
  styleUrls: ['./add-lure.component.css'],
})
export class AddLureComponent implements OnChanges {
  @Output()
  addLureReq = new EventEmitter<NgForm>();
  @ViewChild('lureForm')
  private _lureForm!: NgForm;

  get lureTypes() : LureType[] {
    return Lure.lureTypes();
  }

  constructor(private lureService: LureService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('ngOnChanges: %s',JSON.stringify(changes));
    console.debug('AddLure onChanges: %s', JSON.stringify(changes));
    console.debug('AddLure onChanges: %s', this._lureForm?.status);
  }

  public addALure(): void {
    this.addLureReq.emit(this._lureForm);
  }
}
