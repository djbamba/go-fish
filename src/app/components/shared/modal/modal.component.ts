import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ModalInfo } from './modal-info';

@Component({
  selector: 'app-modal',
  template: '',
})
/**
 * Dynamic modal content
 */
export class ModalComponent implements OnInit {
  private _modalRef!: NgbModalRef;

  public get modalRef(): NgbModalRef {
    return this._modalRef;
  }

  private _modalInfo!: ModalInfo;

  public get modalInfo(): ModalInfo {
    return this._modalInfo;
  }

  public set modalInfo(v: ModalInfo) {
    this._modalInfo = v;
  }

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  public open(content: any): void {
    this._modalRef = this.modalService.open(content);
    this._modalRef.result.then(
      (result) => this._modalInfo.resultCallback?.(result),
      (reason) => this._modalInfo.reasonCallback?.(reason)
    );
  }
}
