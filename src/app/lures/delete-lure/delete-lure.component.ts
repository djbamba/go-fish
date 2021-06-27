import { Component, Input, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { LureService } from 'src/app/services/lure.service';
import { Lure } from '../lure';

@Component({
  selector: 'app-delete-lure',
  templateUrl: './delete-lure.component.html',
  styleUrls: ['./delete-lure.component.css']
})
export class DeleteLureComponent implements OnInit {
  @Input()
  lure = new Lure();

  constructor(private lureService: LureService) { }

  ngOnInit(): void {
  }

  deleteLure(): void {
    this.lureService.deleteLure(this.lure.id).subscribe(
      res => {console.log(res);
    }
    ,
    err => console.error(err));
  }
}
