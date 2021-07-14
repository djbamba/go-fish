import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LureService } from 'src/app/services/lure.service';
import { Lure } from '../lure';

@Component({
  selector: 'app-add-lure',
  templateUrl: './add-lure.component.html',
  styleUrls: ['./add-lure.component.css'],
})
export class AddLureComponent implements OnInit {
  @Input()
  lure: Lure = new Lure();
  @Output()
  lureChange = new EventEmitter<void>();
  submitted: boolean = false;

  constructor(private lureService: LureService, private router:Router) {}

  ngOnInit(): void {}

  public addLure(lureForm : NgForm): void {
    this.lureService.addLure(lureForm.value).subscribe(
      (res) => {
        this.lure = res;
        this.submitted = true;
        this.lureChange.emit();
        lureForm.reset();
      },
      (err) => {
        this.submitted = false;
        console.error(err);
      }
    );
  }
}
