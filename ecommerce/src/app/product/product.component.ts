import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { Router } from '@angular/router';
import { ProductService } from '../shared/index';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [Product]
})
export class ProductComponent implements OnInit {
  
   imageUrl:string = "/assets/image/default.jpeg";
   fileToUpload: File = null

  constructor(private toastr: ToastrService,private router: Router, public product: Product, private productservice: ProductService) { }

  ngOnInit() {
  }

  addproduct() {
    console.log("in product")
    console.log(this.product)

    this.productservice.addproduct(this.product).subscribe(data => {
      debugger
      alert();
      this.showSuccess();
      this.gotolist();
      console.log("product add working fine");
    })
    
  }

  showSuccess() {
    
    this.toastr.success('Product Added successfully' );
  }

  gotolist() {
    this.router.navigate(['productlist'])

  }
  public uplaod = <any>{};
  handleFileInput (file : FileList){
   this.fileToUpload=file.item(0);
   
   var reader = new FileReader();
   reader.onload = (event:any)  =>{
     debugger
     this.imageUrl =event.target.result;
     this.uplaod=event.target.result;
debugger
     this.productservice.uploadImage(event.target.result).subscribe( data =>{
      debugger
     });
   } 
   reader.readAsDataURL(this.fileToUpload)

  } 





}
