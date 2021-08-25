import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lure } from '../lure';

@Component({
  selector: 'app-delete-lure',
  templateUrl: './delete-lure.component.html',
  styleUrls: ['./delete-lure.component.css'],
})
export class DeleteLureComponent implements OnInit {
  @Input()
  lure = new Lure();
  @Output()
  deleteLureReq = new EventEmitter<string>();

  ngOnInit(): void {}

  deleteLure(): void {
    this.deleteLureReq.emit(this.lure.id);
  }
}
