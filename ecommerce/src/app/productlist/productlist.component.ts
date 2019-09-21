import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';
import { HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  providers: [Product]
  })

 export class ProductlistComponent implements OnInit {
  currentProduct:any
  modal_title :any
  deleteDialog:boolean=false;
  UserToDelete :any
  update :any
  constructor(private router: Router, public product: Product, private productservice:ProductService) { }

  ngOnInit() {
    this.getProductlist();
  }

  addProduct(){
    this.router.navigate(['product'])
  }
   
  showUserlist(){
  this.router.navigate(['userlist'])   
  }

  public productData = <any> {};
  
  getProductlist(){
      debugger
      this.productservice.getProductlist(this.product).subscribe(data => {
      this.productData = data;
      debugger
      this.productData.forEach(element => {
        this.currentProduct=element;
      });
      console.log("Product list",data);
      console.log("CurrentProduct",this.currentProduct);
      });
   }

   deleteProduct() {
        this.productservice.ondelete(this.UserToDelete).subscribe(data => { 
        debugger  
        alert(data);
        this.getProductlist();
      });
    }

   

  deleteProd(data) {
      this.modal_title = "Delete Product";
      this.deleteDialog = true;
      this.UserToDelete = data;
  }

  
  display: boolean = false;

  editList(product) {
    debugger
    this.display = true;
    debugger
    this.currentProduct=product;
   }

  updatelist(currentProduct) {  
     debugger
     this.productservice.updateProduct(currentProduct).subscribe(data => {
      alert();
      debugger
      this.update = data;
    });
  }
  







  }







