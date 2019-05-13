import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-record-add',
  templateUrl: './record-add.page.html',
  styleUrls: ['./record-add.page.scss'],
})
export class RecordAddPage implements OnInit {
dateNow = new Date();
  monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
   slidesOpts = {
    slidesPerView: 2,
     centeredSlides: true
  };
  valueInt = 0;
  valueFloat = 0;
  constructor() { }

  ngOnInit() {
  }
  rangeChangeInt(event) {
    this.valueInt = event.detail.value;
  }
  rangeChangeFloat(event) {
    this.valueFloat = event.detail.value;
  }
}
