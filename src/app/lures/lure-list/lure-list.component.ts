import { Component, OnInit } from '@angular/core';
import { Lure } from '../lure';
import { LureService } from '../../services/lure.service';

@Component({
  selector: 'app-lure-list',
  templateUrl: './lure-list.component.html',
  styleUrls: ['./lure-list.component.css'],
})
export class LureListComponent implements OnInit {
  lures!: Lure[];

  constructor(private lureService: LureService) {}

  ngOnInit(): void {
    this.lureService.getAll().subscribe((data) => {
      this.lures = data;
    });
  }

  public updateList() {
    this.lureService.getAll().subscribe(
      (res) => {
        this.lures = res;
      },
      (err) => console.error(err)
    );
  }
}
