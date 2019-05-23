import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AutorisationService} from '../../Services/autorisation.service';
import {IonSlide, IonSlides, ToastController} from '@ionic/angular';

@Component({
  selector: 'app-record-add',
  templateUrl: './record-add.page.html',
  styleUrls: ['./record-add.page.scss'],
})
export class RecordAddPage implements OnInit {
dateNow = new Date();
  monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  @ViewChild('mySlider') private slides: IonSlides;
   slidesOpts = {
    slidesPerView: 2,
     centeredSlides: true
  };
  valueInt = 0;
  valueFloat = 0;
  constructor(private autorisationService: AutorisationService, public toastController: ToastController) { }

  ngOnInit() {
  }
  rangeChangeInt(event) {
    this.valueInt = event.detail.value;
  }
  rangeChangeFloat(event) {
    this.valueFloat = event.detail.value;
  }
  goToBoard() {
    this.autorisationService.redirectTo('/main-app/menu');
  }

  next() {
  this.slides.slideNext();
  }

  async save() {
    const toast = await this.toastController.create({
      message: 'Запись сохранена',
      duration: 2000,
      showCloseButton: true,
      closeButtonText: 'Закрыть'
    });
    toast.present();
  }
}
