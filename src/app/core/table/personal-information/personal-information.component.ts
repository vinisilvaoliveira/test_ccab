import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  dataInformation: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.dataInformation = JSON.parse(localStorage.getItem('dataValues'));
    // setTimeout(() => {
    //   localStorage.removeItem('dataValues');
    // }, 1000);
  }

  back() {
    this.route.navigate(['/'])
  }

}
