import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  msg: string = '';

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const mensangem = this.activatedRoute.snapshot.paramMap.get('msg');
    if (mensangem) {
      this.msg = mensangem;
    } else {
      this.msg = '';
    }
  }

}
