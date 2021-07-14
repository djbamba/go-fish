import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 private pageTitle:string = 'Go Fish - Home';
  
  constructor(private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.pageTitle);
  }

}
