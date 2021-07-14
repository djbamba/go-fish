import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lure',
  templateUrl: './lure.component.html',
  styleUrls: ['./lure.component.css']
})
export class LureComponent implements OnInit {
  private pageTitle:string = "Go Fish - Lures"
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
  }

}
