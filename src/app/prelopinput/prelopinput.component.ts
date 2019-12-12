import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prelopinput',
  templateUrl: './prelopinput.component.html',
  styleUrls: ['./prelopinput.component.scss']
})
export class PrelopinputComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.router.navigate(['/prelophome/prelopconfirm'], { skipLocationChange: true });
  }

}
