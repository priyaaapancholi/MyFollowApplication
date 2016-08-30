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
var users_service_1 = require('./../users.service');
var router_1 = require('@angular/router');
var becomeOwner_component_1 = require('./../EndUser/becomeOwner.component');
var getproducts_component_1 = require('./../EndUser/getproducts.component');
var OwnerComponent = (function () {
    function OwnerComponent() {
    }
    OwnerComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/EndUser/enduser.component.html',
            providers: [users_service_1.UserService],
            directives: [router_1.ROUTER_DIRECTIVES],
            precompile: [becomeOwner_component_1.BecomeOwnerComponent, getproducts_component_1.GetProductsComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], OwnerComponent);
    return OwnerComponent;
}());
exports.OwnerComponent = OwnerComponent;
//# sourceMappingURL=enduser.component.js.map