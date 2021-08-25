import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Lure } from '../lure';
import { LureService } from '../../services/lure.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ModalComponent } from 'src/app/components/shared/modal/modal.component';
import { AddLureComponent } from '../add-lure/add-lure.component';
import { EditLureComponent } from '../edit-lure/edit-lure.component';

@Component({
  selector: 'app-lure-list',
  templateUrl: './lure-list.component.html',
  styleUrls: ['./lure-list.component.css'],
})
export class LureListComponent implements OnInit, OnDestroy {
  lures!: Lure[];
  private lureSub!: Subscription;

  @Output()
  lureAction = new EventEmitter<Lure>();

  constructor(private lureService: LureService, private _modalComp : ModalComponent) {}

  ngOnInit(): void {
    this.getLures();
  }

  ngOnDestroy(): void {
    this.lureSub.unsubscribe();
  }

  public invokeAddLureModal(): void {
    this._modalComp.open(AddLureComponent)
    this._modalComp.modalRef.componentInstance.addLureReq.subscribe((lureForm: NgForm) => this._addLure(lureForm))
  }

  private _addLure(lureForm: NgForm): void {
    console.debug('LureList.addLure: %s', JSON.stringify(lureForm.value));
    this.lureService.addLure(<Lure>lureForm.value).subscribe(
      (res) => {
        console.log(res);
        this.lureAction.emit(res);
        this.lures.push(res);
        lureForm.reset();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  public invokeEditLureModal(lure : Lure) : void {
    this._modalComp.open(EditLureComponent);
    this._modalComp.modalRef.componentInstance.currLure = lure
    this._modalComp.modalRef.componentInstance.editLureReq.subscribe((lure: Lure) => {this._updateLure(lure)});
  }

  private _updateLure(lure: Lure): void {
    this.lureService.updateLure(lure).subscribe(
      (res) => {
        let idx = this.lures.findIndex((x) => x.id === lure.id);
        this.lures[idx] = res;
      },
      (err) => {
        console.error(err);
      }
    );
  }

  public removeLure(lureID: string): void {
    this.lureService.deleteLure(lureID).subscribe(
      (res) => {
        console.debug('LureList.removeLure: %o', res);
        this.lures = this.lures.filter((l) => l.id !== lureID);
      },
      (err) => {
        console.error(err);
      }
    );
  }

  public getLures(): void {
    this.lureSub = this.lureService.getAll().subscribe(
      (res) => {
        this.lures = res;
      },
      (err) => console.error(err)
    );
  }

  track(index: any, lure: any) {
    return lure ? lure.id : undefined;
  }
}
