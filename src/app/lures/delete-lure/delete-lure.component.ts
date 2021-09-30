import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalInfo } from 'src/app/components/shared/modal/modal-info';
import { ModalComponent } from 'src/app/components/shared/modal/modal.component';
import { Lure } from '../lure';
import { LureType } from '../lure-type';

@Component({
  selector: 'app-delete-lure',
  templateUrl: './delete-lure.component.html',
  styleUrls: ['./delete-lure.component.css'],
})
export class DeleteLureComponent implements OnInit {
  lure!: Lure;
  @Output()
  deleteLureReq = new EventEmitter<string>();

  constructor(
    private _activeModal: NgbActiveModal,
    private _modalComp: ModalComponent
  ) {}

  ngOnInit(): void {
    this._initModalInfo();
    this._resolveLureType();
  }

  deleteLure(): void {
    this.deleteLureReq.emit(this.lure.id);
    this._activeModal.close(`delete called: ${this.lure.id}`);
  }

  private _resolveLureType(): void {
    for (let type of Object.entries(LureType)) {
      if (type[0] === this.lure.type) {
        this.lure.type = type[1];
      }
    }
  }

  private _initModalInfo(): void {
    const modalInfo: ModalInfo = {
      reasonCallback: (reason) =>
        console.debug('delete modal dismissed: ', reason),
      resultCallback: (result) =>
        console.debug('delete modal closed: ', result),
    };
    this._modalComp.modalInfo = modalInfo;
  }
}
