import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  submitted: boolean = false;

  constructor(private lureService: LureService) {}

  ngOnInit(): void {}

  existingLure(): boolean {
    return !!this.lure.id;
  }

  public submitLure(): Lure {
    return this.existingLure() ? this.updateLure() : this.addLure();
  }

  public resetForm(lureForm : NgForm):void {
    this.submitted = false;
    this.lure = new Lure();
    lureForm.reset();
  }

  private addLure(): Lure {
    this.lureService.addLure(this.lure).subscribe(
      (res) => {
        this.lure = res;
        this.submitted = true;
      },
      (err) => console.error(err)
    );

    return this.lure;
  }

  private updateLure(): Lure {
    this.lureService.updateLure(this.lure).subscribe(
      (res) => {
        this.lure = res;
        this.submitted = true;
      },
      (err) => console.error(err)
    );

    return this.lure;
  }
}
