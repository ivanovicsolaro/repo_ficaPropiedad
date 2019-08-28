import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slides = [
    {image:'assets/img/single-list-slider/1.jpg'},
    {image:'assets/img/single-list-slider/2.jpg'},
    {image:'assets/img/single-list-slider/3.jpg'},
    {image:'assets/img/single-list-slider/4.jpg'},
    {image:'assets/img/single-list-slider/5.jpg'}
  ];
  itemsPerSlide1 =1;
  itemsPerSlide2 = 4;
  constructor() {}
  slideChangeMessage = '';
  activo:number;
  
  log(event:number){
    this.slideChangeMessage = "Slide actual" + event;
    console.log(this.slideChangeMessage)
  }
  changeByClick(id:number){
      this.activo= id;
  }
  ngOnInit() {
  }
  



}
