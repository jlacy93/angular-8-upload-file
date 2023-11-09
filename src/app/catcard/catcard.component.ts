import { Component, OnInit } from '@angular/core';
import { CatserviceService } from '../services/cat-service.service';
import { Cat } from '../model/cat';

@Component({
  selector: 'app-catcard',
  templateUrl: './catcard.component.html',
  styleUrls: ['./catcard.component.css']
})
export class CatcardComponent implements OnInit {
  cats: Cat[] = [];
  constructor(private catservice: CatserviceService) {}

  ngOnInit() {
    this.catservice.find().subscribe((data) => {
      this.cats = data;
    });
  }
}
