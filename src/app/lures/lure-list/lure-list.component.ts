import { Component, OnDestroy, OnInit } from '@angular/core';
import { Lure } from '../lure';
import { LureService } from '../../services/lure.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-lure-list',
  templateUrl: './lure-list.component.html',
  styleUrls: ['./lure-list.component.css'],
})
export class LureListComponent implements OnInit, OnDestroy {
  lures!: Lure[];
  private lureSub!: Subscription;

  constructor(private lureService: LureService) {}

  ngOnInit(): void {
    this.getLures();
  }

  ngOnDestroy(): void {
    this.lureSub.unsubscribe();
  }

  public removeLure(lureID: string): void {
    this.lures = this.lures.filter((l) => l.id !== lureID);
  }

  public getLures(): void {
    this.lureSub = this.lureService.getAll().subscribe(
      (res) => {
        this.lures = res;
      },
      (err) => console.error(err)
    );
  }
}
