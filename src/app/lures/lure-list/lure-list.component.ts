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

  constructor(private lureService: LureService) {}

  ngOnInit(): void {
    this.getLures();
  }

  ngOnDestroy(): void {
    this.lureSub.unsubscribe();
  }

  public addLure(lureForm: NgForm): void {
    console.debug('LureList.addLure: %s',JSON.stringify(lureForm.value));
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

  public updateLure(lure: Lure): void {
    this.lureService.updateLure(lure).subscribe(
      (res) => {
        let idx = this.lures.findIndex(x => x.id === lure.id)
        this.lures[idx] = res
      },
      (err) => {
        console.error(err);
      }
    );
  }

  public removeLure(lureID: string): void {
    this.lureService.deleteLure(lureID).subscribe(
      (res) => {
        console.debug('LureList.removeLure: %o',res);
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
