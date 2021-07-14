import { Component, Input, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import { LureService } from 'src/app/services/lure.service';
import { Lure } from '../lure';

@Component({
  selector: 'app-edit-lure',
  templateUrl: './edit-lure.component.html',
  styleUrls: ['./edit-lure.component.css']
})
export class EditLureComponent implements OnInit {
  @Input()
  lure: Lure = new Lure();
  @Output()
  lureChange = new EventEmitter<Lure>();

  updated: boolean = false;

  constructor(private lureService: LureService) { }

  ngOnInit(): void {
  }

  public updateLure(): void {
    this.lureService.updateLure(this.lure).subscribe(
      (res) => {
        this.lure = res;
        this.updated = true;
        this.lureChange.emit(this.lure);
      },
      (err) => {
        this.updated = false;
        console.error(err);
      }
    );
  }

}
