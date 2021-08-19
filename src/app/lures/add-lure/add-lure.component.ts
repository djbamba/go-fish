import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalInfo } from 'src/app/components/shared/modal/modal-info';
import { ModalComponent } from 'src/app/components/shared/modal/modal.component';
import { Lure } from '../lure';
import { LureType } from '../lure-type';

@Component({
  selector: 'app-add-lure',
  templateUrl: './add-lure.component.html',
  styleUrls: ['./add-lure.component.css'],
})
export class AddLureComponent implements OnInit {
  @Output()
  addLureReq = new EventEmitter<NgForm>();
  @ViewChild('lureForm')
  private _lureForm!: NgForm;

  get lureTypes() : LureType[] {
    return Lure.lureTypes();
  }

  constructor(private _activeModal : NgbActiveModal, private _modalComp : ModalComponent){}
  
  ngOnInit(): void {
    this.initModalInfo()
  }

  public addALure(): void {
    this.addLureReq.emit(this._lureForm);
    this._activeModal.close('Submitted');
  }

  private _handleResult(res : any): void {
    console.debug('handle result %s', JSON.stringify(res))
  }

  private _handleReason(reason : any): void {
    console.debug('handle reason %s', JSON.stringify(reason))
  }

  private initModalInfo(): void {
    const modalInfo : ModalInfo = {
      resultCallback: this._handleResult,
      reasonCallback: this._handleReason
    }
    this._modalComp.modalInfo = modalInfo;
  }
}
