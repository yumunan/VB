import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prelophome',
  templateUrl: './prelophome.component.html',
  styleUrls: ['./prelophome.component.scss']
})
export class PrelophomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getThisLoan() {
    this.router.navigateByUrl('/prelophome/prelopinput');
  }

}
