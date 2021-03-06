import { SellerServiceService } from './../seller-services/seller-service.service';
import { Menu } from './../Models/Menu';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  menu: Menu[];
  sellerEmail: string;

  constructor(private formBuilder:FormBuilder, private route: Router, private sellerServiceService: SellerServiceService) { }

  ngOnInit(): void {
    this.sellerEmail =JSON.parse(sessionStorage.getItem('seller')).email;
    this.getSellerMenu();
  }

  getSellerMenu(){
    this.sellerServiceService.getSellerMenu(this.sellerEmail).subscribe(
      response=>this.menu=response
    )
  }

}
