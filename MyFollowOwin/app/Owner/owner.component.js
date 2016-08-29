"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_1 = require('./../Product/product');
var users_service_1 = require('./../users.service');
var productupdate_1 = require('./../ProductUpdate/productupdate');
var follow_1 = require('./../Follow/follow');
var ng2_imageupload_1 = require('ng2-imageupload');
var OwnerLoginComponent /*implements OnInit*/ = (function () {
    function OwnerLoginComponent /*implements OnInit*/(userService) {
        this.userService = userService;
        this.platforms = product_1.Platform;
        this.addedProduct = false;
        this.allProduct = false;
        this.addProduct = false;
        this.editProduct = false;
        this.deleteProduct = false;
        this.updateProduct = false;
        this.view = false;
        this.following = [];
        this.products = new Array();
        this.product = new product_1.Product();
        this.productUpdate = new productupdate_1.ProductUpdate();
        this.productUpdates = new Array();
        this.follow = new follow_1.Follow();
        this.follows = new Array();
    }
    //ngOnInit() {
    //    this.getProducts();
    //    this.getAllProducts();
    //}
    OwnerLoginComponent /*implements OnInit*/.prototype.getProducts = function () {
        var _this = this;
        this.addedProduct = true /*!this.addedProduct*/;
        this.editProduct = false;
        this.addProduct = false;
        this.allProduct = false;
        this.view = false;
        this.updateProduct = false;
        var displayProduct = this.userService.getProduct()
            .subscribe(function (products) {
            _this.products = products;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.getAllProducts = function () {
        var _this = this;
        this.allProduct = true;
        this.editProduct = false;
        this.addProduct = false;
        this.addedProduct = false;
        this.updateProduct = false;
        var showProduct = this.userService.getAllProduct()
            .subscribe(function (products) {
            _this.allProducts = products;
            _this.followDetails();
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.imageUpload = function (path) {
        this.productUpdate.Media = path.dataURL;
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.viewUpdates = function (productId) {
        var _this = this;
        this.view = true;
        //this.allProduct = false;
        this.editProduct = false;
        this.addProduct = false;
        this.updateProduct = false;
        var viewProductUpdate = this.userService.viewProductUpdates(productId)
            .subscribe(function (productUpdates) {
            _this.productUpdates = productUpdates;
        }, function (err) {
            _this.errorMessage = err;
        });
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.showForm = function () {
        this.addProduct = true;
        this.editProduct = false;
        this.addedProduct = false;
        this.allProduct = false;
        this.updateProduct = false;
        this.view = false;
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.onSubmit = function (product) {
        var _this = this;
        //this.addProduct = false;
        var postProduct = this.userService.setProduct(product)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { _this.addProduct = false; _this.product = new product_1.Product(); });
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.onDelete = function (productId) {
        var _this = this;
        this.deleteProduct = !this.deleteProduct;
        this.editProduct = false;
        this.addProduct = false;
        this.allProduct = false;
        this.view = false;
        return this.userService.deleteProduct(productId)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { _this.getProducts(); });
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.onEdit = function (product) {
        this.product = product;
        this.editProduct = !this.editProduct;
        //this.addedProduct = false;
        this.addProduct = false;
        this.allProduct = false;
        this.updateProduct = false;
        this.view = false;
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.editForm = function (product) {
        var _this = this;
        return this.userService.editProduct(product)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { _this.getProducts(); });
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.followProducts = function (productId) {
        this.following[productId] = true;
        // this.follow.OwnerStatusBit = true;
        var followProduct = this.userService.followProduct(productId)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
        });
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.unfollowProducts = function (productId) {
        this.following[productId] = false;
        this.view = false;
        var unfollowProduct = this.userService.unfollowProduct(productId)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () {
        });
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.followDetails = function () {
        var _this = this;
        this.userService.getFollowStatus()
            .subscribe(function (follow) {
            _this.follows = follow;
        }, function (err) {
            _this.errorMessage = err;
        }, function () {
            for (var _i = 0, _a = _this.follows; _i < _a.length; _i++) {
                var follow = _a[_i];
                _this.following[follow.ProductId] = true;
            }
        });
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.onUpdate = function (productId) {
        this.pid = productId;
        this.updateProduct = !this.updateProduct;
        //this.productUpdate.ProductId = productId;
        this.editProduct = false;
        //this.addedProduct = false;
        this.addProduct = false;
        this.allProduct = false;
        this.view = false;
    };
    OwnerLoginComponent /*implements OnInit*/.prototype.updateForm = function (productUpdate) {
        var _this = this;
        productUpdate.ProductId = this.pid;
        this.userService.updateProduct(productUpdate)
            .subscribe(function (response) { console.log("Success Response" + response); }, function (error) { console.log("Error happened" + error); }, function () { _this.getProducts(); _this.productUpdate = new productupdate_1.ProductUpdate(); });
    };
    OwnerLoginComponent /*implements OnInit*/ = __decorate([
        core_1.Component({
            selector: 'my-owner',
            templateUrl: 'app/Owner/owner.component.html',
            providers: [users_service_1.UserService],
            directives: [ng2_imageupload_1.ImageUpload]
        }), 
        __metadata('design:paramtypes', [users_service_1.UserService])
    ], OwnerLoginComponent /*implements OnInit*/);
    return OwnerLoginComponent /*implements OnInit*/;
}());
exports.OwnerLoginComponent /*implements OnInit*/ = OwnerLoginComponent /*implements OnInit*/;
//# sourceMappingURL=owner.component.js.map