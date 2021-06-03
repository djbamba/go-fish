import { Component, OnInit } from '@angular/core';
import { LureService } from 'src/app/services/lure.service';
import { Lure } from '../lure';

@Component({
  selector: 'app-add-lure',
  templateUrl: './add-lure.component.html',
  styleUrls: ['./add-lure.component.css'],
})
export class AddLureComponent implements OnInit {
  lure: Lure = new Lure();
  submitted: boolean = false;

  constructor(private lureService: LureService) {}

  ngOnInit(): void {}

  public addLure(): void {
    console.log('addLure() clicked');
  }

  public submitLure(): void {
    this.submitted = true;
    console.log('submitLure() called');
  }
}
