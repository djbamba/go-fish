import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalInfo } from 'src/app/components/shared/modal/modal-info';
import { ModalComponent } from 'src/app/components/shared/modal/modal.component';
import { Lure } from '../lure';
import { LureType } from '../lure-type';

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

  get lureTypes(): [string, LureType][] {
    return Object.entries(LureType);
  }

  constructor(
    private _activeModal: NgbActiveModal,
    private _modalComp: ModalComponent
  ) {}

  ngOnInit(): void {
    this._initModalInfo();
    this._resolveLureType();
  }

  public updateLureReq(): void {
    console.debug('EditLureComponent.updateLureReq: %o', this._lureForm.value);
    this._updateLure = <Lure>this._lureForm.value;
    this._updateLure.id = this.currLure.id;
    this.editLureReq.emit(this._updateLure);
    this._activeModal.close('submitted');
  }

  public closeModal(): void {
    this._activeModal.dismiss('edit close-cross click');
  }

  private _initModalInfo(): void {
    const modalInfo: ModalInfo = {
      reasonCallback: (reason) => console.debug('edit-lure reason: %o', reason),
      resultCallback: (result) => console.debug('edit-lure result: %o', result),
    };
    this._modalComp.modalInfo = modalInfo;
  }

  private _resolveLureType(): void {
    for (let types of Object.entries(LureType)) {
      if (this.currLure.type === types[0]) this.currLure.type = types[1];
    }
  }
}
