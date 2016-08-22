﻿import {Component, /*OnInit*/} from '@angular/core';
import { Product, Platform}from './../Product/product';  
import { UserService }from './../users.service'; 

@Component({
    selector: 'my-owner',
    templateUrl: 'app/Owner/owner.component.html',
    providers: [UserService]
})



export class OwnerLoginComponent /*implements OnInit*/{
    platforms = Platform;
    products: Array<Product>;
    allProducts: Array<Product>;
    product: Product;
    errorMessage: string;
    constructor(private userservice: UserService) {
        this.products = new Array<Product>();
        this.product = new Product();
    }

    //ngOnInit() {
    //    this.getProducts();
    //    this.getAllProducts();
    //}

    addedProduct: boolean = false;
    getProducts() {
        this.addedProduct = !this.addedProduct;
        this.editProduct = false;
        this.addProduct = false;
        this.allProduct = false;
        var displayProduct = this.userservice.getProduct()
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });

        return displayProduct;
    }

    allProduct: boolean = false;
    getAllProducts() {
        this.allProduct = true;
        this.editProduct = false;
        this.addProduct = false;
        this.addedProduct = false;
        var showProduct = this.userservice.getAllProduct()
            .subscribe((products) => {
                this.allProducts = products
            }, err => {
                this.errorMessage = err;
            });

        return showProduct;
    }


    
    


    onSubmit(product: Product) {
        this.addProduct = false;
        var postProduct = this.userservice.setProduct(this.product)
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });

    }


    onDelete(product: Product) {

        return this.userservice.deleteProduct(product)
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });

        
    }



    onEdit(product: Product) {

        return this.userservice.editProduct(product)
            .subscribe((products) => {
                this.products = products
            }, err => {
                this.errorMessage = err;
            });


    }






    addProduct: boolean = false;
    showForm(): void {
        this.addProduct = !this.addProduct;
        this.editProduct = false;
        this.addedProduct = false;
        this.allProduct = false;
    }

    //addedProduct: boolean = false;
    //showProduct(): void {
    //    this.addedProduct = !this.addedProduct;
    //    this.editProduct = false;
    //    this.addProduct = false;
    //    this.allProduct = false;
    //}


    editProduct: boolean = false;
    editForm(product: Product): void {
        this.product = product;
        this.editProduct = !this.editProduct;
        //this.addedProduct = false;
        this.addProduct = false;
        this.allProduct = false;
    }


    //allProduct: boolean = false;
    //showAllProduct(): void {
    //    this.allProduct = !this.allProduct;
    //    this.editProduct = false;
    //    this.addProduct = false;
    //    this.addedProduct = false;
    //}
 

    //allProduct: boolean = false;
    //showAllProduct():void {
    //    this.allProduct = !this.allProduct;
    //    this.editProduct = false;
    //    this.addProduct = false;
    //    this.addedProduct = false;
    //    //this.getAllProducts();
    //}

    following: any[] = [];
    followProducts(product: Product) {
        this.following[product.Id] = true;
        var followProduct = this.userservice.followProduct(product)
            .subscribe((products) => {
                this.products = products;
                this.getAllProducts();
            }, err => {
                this.errorMessage = err;
            });
        

    }






    unfollowProducts(product: Product) {
        this.following[product.Id] = false;
        var unfollowProduct = this.userservice.unfollowProduct(product)
            .subscribe((products) => {
                this.products = products;
                this.getAllProducts();
            }, err => {
                this.errorMessage = err;
            });
         

    }



}