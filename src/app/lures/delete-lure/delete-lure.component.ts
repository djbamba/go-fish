import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LureService } from 'src/app/services/lure.service';
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
  lureChange = new EventEmitter<void>();

  constructor(private lureService: LureService) {}

  ngOnInit(): void {}

  deleteLure(): void {
    this.lureService.deleteLure(this.lure.id).subscribe(
      (res) => {
        console.log(res);
        this.lureChange.emit();
      },
      (err) => {
        console.error(err)
      }
    );
  }
}
