webpackJsonp([11],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalendarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalendarPage = /** @class */ (function () {
    function CalendarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarPage');
    };
    CalendarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/calendar/calendar.html"*/'<!--\n  Generated template for the CalendarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>calendar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-calendar #calendar></ion-calendar>\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/calendar/calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                time: "8:00",
                description: "Đã uống",
                image: "assets/imgs/pill.png",
                name: "PENICILIN...100MG",
                number: "Số lượng 1 viên",
                name1: "PENICILIN...100MG",
                number1: "Số lượng 1 viên",
                name2: "PENICILIN...100MG",
                number2: "Số lượng 1 viên",
                name3: "PENICILIN...100MG",
                number3: "Số lượng 1 viên",
            },
            {
                time: "12:00",
                description: "Chưa uống",
                image: "assets/imgs/pill.png",
            },
            {
                time: "19:00",
                description: "Chưa uống",
                image: "assets/imgs/pill.png",
            }
        ];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n      <p>Th 3 22/12/2018 </p>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h4>Liệu trình trong ngày</h4>\n    <ion-scroll scrollX="true" style="width:100%; height:300px">\n        <ion-row nowrap  >\n          <div *ngFor="let slide of slides">\n            <ion-card style="width: 180px; background-color: #faf9f9">\n              <ion-card-header>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col col-1>\n                      <ion-checkbox color="primary" checked="false"></ion-checkbox>\n                    </ion-col>\n                    <ion-col col-11 style="text-align: center;">\n                      <h1 [innerHTML]="slide.time"></h1>\n                      <p style="color: #0c63f0;"[innerHTML]="slide.description"></p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card-header>\n              <ion-card-content>\n                <img style="width: 80%; display: block; margin-left: auto; margin-right: auto;" [src]="slide.image" class="slide-image"/>\n              </ion-card-content>\n            </ion-card>\n          </div>\n        </ion-row>\n      </ion-scroll>\n\n    <h4>Chi tiết liệu trình</h4>\n    <hr style="background-color: #0c63f0; height: 2px; border: 0;">\n    <ion-scroll scrollY="true"style="width:100%; height:100%" >\n      <div *ngFor="let slide of slides">\n        <h6 [innerHTML]="slide.name"></h6>\n        <p [innerHTML]="slide.number"></p>\n      </div>\n      <div *ngFor="let slide of slides">\n        <h6 [innerHTML]="slide.name1"></h6>\n        <p [innerHTML]="slide.number1"></p>\n      </div>\n      <div *ngFor="let slide of slides">\n        <h6 [innerHTML]="slide.name2"></h6>\n        <p [innerHTML]="slide.number2"></p>\n      </div>\n      <div *ngFor="let slide of slides">\n        <h6 [innerHTML]="slide.name3"></h6>\n        <p [innerHTML]="slide.number3"></p>\n      </div>\n    </ion-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TreatmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TreatmentPage = /** @class */ (function () {
    function TreatmentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TreatmentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TreatmentPage');
    };
    TreatmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-treatment',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/treatment/treatment.html"*/'<!--\n  Generated template for the TreatmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>treatment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/treatment/treatment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], TreatmentPage);
    return TreatmentPage;
}());

//# sourceMappingURL=treatment.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ChattingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChattingPage = /** @class */ (function () {
    function ChattingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ChattingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChattingPage');
    };
    ChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatting',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/chatting/chatting.html"*/'<!--\n  Generated template for the ChattingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>chatting</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/chatting/chatting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrivateProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivateProfilePage = /** @class */ (function () {
    function PrivateProfilePage(navParams) {
        this.navParams = navParams;
        this.gender = "m";
        this.item = navParams.data.item;
    }
    PrivateProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivateProfilePage');
    };
    PrivateProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-private-profile',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/private-profile/private-profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Hồ sơ  flex-wrapá Nhân</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img style="width: 60%" src="../assets/imgs/signup.png">\n  <ion-list>\n    <ion-item>\n      <ion-label>Họ Và Tên</ion-label>\n      <ion-input text-right type="text" *ngFor="let item of items">{{item.name}}</ion-input>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label>Ngày sinh</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="m">Nam</ion-option>\n        <ion-option value="f">Nữ</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Số CMND</ion-label>\n      <ion-input text-right type="number"  style="flex-wrap: wrap;"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Số điện thoại</ion-label>\n      <ion-input text-right type="number" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Email</ion-label>\n      <ion-input text-right type="email" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Địa chỉ</ion-label>\n      <ion-input text-right type="text" ></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/private-profile/private-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PrivateProfilePage);
    return PrivateProfilePage;
}());

//# sourceMappingURL=private-profile.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the OrderHistoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderHistoriesPage = /** @class */ (function () {
    function OrderHistoriesPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.profilePage = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
    }
    OrderHistoriesPage.prototype.goProfilePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    OrderHistoriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderHistoriesPage');
    };
    OrderHistoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-histories',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/order-histories/order-histories.html"*/'<!--\n  Generated template for the OrderHistoriesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n   <ion-buttons left>\n     <button ion-button icon-only (click)="goProfilePage()">\n       <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n       Quay lại\n     </button>\n   </ion-buttons>\n   <ion-title>Lịch sử giao hàng</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/order-histories/order-histories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], OrderHistoriesPage);
    return OrderHistoriesPage;
}());

//# sourceMappingURL=order-histories.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_verify__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.goVerifyPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__verify_verify__["a" /* VerifyPage */]);
    };
    SignupPage.prototype.goLoginpPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <img style="width: 60%" src="../assets/imgs/signup.png">\n\n  <ion-list style="margin: 0 5%;">\n\n    <ion-item>\n      <ion-input type="number" placeholder="Nhập số điện thoại" text-center></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1 style="margin: 0 0 0 5%;">\n        <p style="text-align: right;"><ion-checkbox color="dark" checked="false"></ion-checkbox></p>\n      </ion-col>\n      <ion-col col-10>\n        <p style="text-align: left;">Tôi đồng ý với các điều khoản và điều kiện</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div >\n    <p style="margin-top: -3%;"><button ion-button round color="primary" (click)="goVerifyPage()">ĐĂNG KÍ</button></p>\n  </div>\n  <ion-grid style="display: flex; justify-content: center; align-items: center; flex-direction: row;">\n      <p>Bạn đã có tài khoản?</p>\n      <button ion-button clear (click)="goLoginpPage()">Đăng nhập</button>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VerifyPage = /** @class */ (function () {
    function VerifyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    VerifyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VerifyPage');
    };
    VerifyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verify',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/verify/verify.html"*/'<!--\n  Generated template for the VerifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content center text-center padding>\n  <form>\n    <h4 >Nhập mã xác nhận</h4>\n    <p>Chúng tôi đã gửi mã xác nhận đến số điện thoại:<br><b>090 xxx xxxx</b></p>\n\n    <ion-input text-center type=”number” placeholder="Mã xác nhận" ></ion-input>\n    <button ion-button round color="primary" >Verify</button>\n    <div text-left >\n      <p>Bạn ko nhận được mã xác nhận? </p>\n      <ion-grid style="display: flex; justify-content: left; align-items: center; flex-direction: row;">\n          <p>Chờ một vài phút và </p>\n          <a href="www.google.com"> gửi lại</a>\n      </ion-grid>\n    </div>\n\n\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/verify/verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], VerifyPage);
    return VerifyPage;
}());

//# sourceMappingURL=verify.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.slides = [
            {
                title: "",
                description: "",
                image: "assets/imgs/logo.png",
                footer: "Bản quyền thuộc về công ty TNHH MePill Pharmacy",
            },
            {
                title: "Tư vấn trực tiếp từ  Dược sỹ",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "assets/imgs/welcome1.png",
                footer: ""
            },
            {
                title: "Nhắc nhở uống thuốc đúng giờ",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/imgs/welcome2.png",
                footer: ""
            },
            {
                title: "Theo dõi tình hình sức khỏe từ xa",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/imgs/welcome3.png",
                footer: ""
            },
            {
                title: "Vận chuyển thuốc tận tay",
                description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "assets/imgs/welcome4.png",
                footer: ""
            }
        ];
    }
    WelcomePage.prototype.goLoginPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar style="padding-top: 10%;">\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="goLoginPage()">Bỏ qua</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img style="width: 100%;" [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n      <footer>\n        <div style="position: absolute; bottom: 40px; font-size:80%; left: 0;right: 0;" [innerHTML]="slide.footer"></div>\n      </footer>\n    </ion-slide>\n  <ion-slide>\n      <img src="assets/imgs/logo.png" class="slide-image"/>\n      <h2 class="slide-title">Bạn đã sẵn sàng chưa?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="goLoginPage()">\n        Tiếp tục\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content >\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		410,
		10
	],
	"../pages/chatting/chatting.module": [
		416,
		9
	],
	"../pages/home/home.module": [
		411,
		8
	],
	"../pages/login/login.module": [
		412,
		7
	],
	"../pages/order-histories/order-histories.module": [
		413,
		6
	],
	"../pages/private-profile/private-profile.module": [
		414,
		5
	],
	"../pages/profile/profile.module": [
		415,
		4
	],
	"../pages/signup/signup.module": [
		417,
		3
	],
	"../pages/treatment/treatment.module": [
		418,
		2
	],
	"../pages/verify/verify.module": [
		420,
		1
	],
	"../pages/welcome/welcome.module": [
		419,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treatment_treatment__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatting_chatting__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_calendar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__treatment_treatment__["a" /* TreatmentPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__chatting_chatting__["a" /* ChattingPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__calendar_calendar__["a" /* CalendarPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Trang chủ" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Liệu trình" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Trò chuyện" tabIcon="ios-chatbubbles-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Lịch" tabIcon="ios-calendar-outline"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Hồ sơ" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateProfilePage", function() { return PrivateProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);


var PrivateProfilePage = /** @class */ (function () {
    function PrivateProfilePage(navParams) {
        this.item = navParams.data.item;
    }
    PrivateProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            templateUrl: 'private-profile.html',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]])
    ], PrivateProfilePage);
    return PrivateProfilePage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_verify_verify__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_treatment_treatment__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_calendar_calendar__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_private_profile_private_profile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_order_histories_order_histories__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ionic3_calendar_en__ = __webpack_require__(404);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_verify_verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_treatment_treatment__["a" /* TreatmentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_private_profile_private_profile__["a" /* PrivateProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_order_histories_order_histories__["a" /* OrderHistoriesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-histories/order-histories.module#OrderHistoriesPageModule', name: 'OrderHistoriesPage', segment: 'order-histories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/private-profile/private-profile.module#PrivateProfilePageModule', name: 'PrivateProfilePage', segment: 'private-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatting/chatting.module#ChattingPageModule', name: 'ChattingPage', segment: 'chatting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/treatment/treatment.module#TreatmentPageModule', name: 'TreatmentPage', segment: 'treatment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify/verify.module#VerifyPageModule', name: 'VerifyPage', segment: 'verify', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_18_ionic3_calendar_en__["a" /* CalendarModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_verify_verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_treatment_treatment__["a" /* TreatmentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_private_profile_private_profile__["a" /* PrivateProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_order_histories_order_histories__["a" /* OrderHistoriesPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 207,
	"./af.js": 207,
	"./ar": 208,
	"./ar-dz": 209,
	"./ar-dz.js": 209,
	"./ar-kw": 210,
	"./ar-kw.js": 210,
	"./ar-ly": 211,
	"./ar-ly.js": 211,
	"./ar-ma": 212,
	"./ar-ma.js": 212,
	"./ar-sa": 213,
	"./ar-sa.js": 213,
	"./ar-tn": 214,
	"./ar-tn.js": 214,
	"./ar.js": 208,
	"./az": 215,
	"./az.js": 215,
	"./be": 216,
	"./be.js": 216,
	"./bg": 217,
	"./bg.js": 217,
	"./bm": 218,
	"./bm.js": 218,
	"./bn": 219,
	"./bn.js": 219,
	"./bo": 220,
	"./bo.js": 220,
	"./br": 221,
	"./br.js": 221,
	"./bs": 222,
	"./bs.js": 222,
	"./ca": 223,
	"./ca.js": 223,
	"./cs": 224,
	"./cs.js": 224,
	"./cv": 225,
	"./cv.js": 225,
	"./cy": 226,
	"./cy.js": 226,
	"./da": 227,
	"./da.js": 227,
	"./de": 228,
	"./de-at": 229,
	"./de-at.js": 229,
	"./de-ch": 230,
	"./de-ch.js": 230,
	"./de.js": 228,
	"./dv": 231,
	"./dv.js": 231,
	"./el": 232,
	"./el.js": 232,
	"./en-au": 233,
	"./en-au.js": 233,
	"./en-ca": 234,
	"./en-ca.js": 234,
	"./en-gb": 235,
	"./en-gb.js": 235,
	"./en-ie": 236,
	"./en-ie.js": 236,
	"./en-il": 237,
	"./en-il.js": 237,
	"./en-nz": 238,
	"./en-nz.js": 238,
	"./eo": 239,
	"./eo.js": 239,
	"./es": 240,
	"./es-do": 241,
	"./es-do.js": 241,
	"./es-us": 242,
	"./es-us.js": 242,
	"./es.js": 240,
	"./et": 243,
	"./et.js": 243,
	"./eu": 244,
	"./eu.js": 244,
	"./fa": 245,
	"./fa.js": 245,
	"./fi": 246,
	"./fi.js": 246,
	"./fo": 247,
	"./fo.js": 247,
	"./fr": 248,
	"./fr-ca": 249,
	"./fr-ca.js": 249,
	"./fr-ch": 250,
	"./fr-ch.js": 250,
	"./fr.js": 248,
	"./fy": 251,
	"./fy.js": 251,
	"./gd": 252,
	"./gd.js": 252,
	"./gl": 253,
	"./gl.js": 253,
	"./gom-latn": 254,
	"./gom-latn.js": 254,
	"./gu": 255,
	"./gu.js": 255,
	"./he": 256,
	"./he.js": 256,
	"./hi": 257,
	"./hi.js": 257,
	"./hr": 258,
	"./hr.js": 258,
	"./hu": 259,
	"./hu.js": 259,
	"./hy-am": 260,
	"./hy-am.js": 260,
	"./id": 261,
	"./id.js": 261,
	"./is": 262,
	"./is.js": 262,
	"./it": 263,
	"./it.js": 263,
	"./ja": 264,
	"./ja.js": 264,
	"./jv": 265,
	"./jv.js": 265,
	"./ka": 266,
	"./ka.js": 266,
	"./kk": 267,
	"./kk.js": 267,
	"./km": 268,
	"./km.js": 268,
	"./kn": 269,
	"./kn.js": 269,
	"./ko": 270,
	"./ko.js": 270,
	"./ky": 271,
	"./ky.js": 271,
	"./lb": 272,
	"./lb.js": 272,
	"./lo": 273,
	"./lo.js": 273,
	"./lt": 274,
	"./lt.js": 274,
	"./lv": 275,
	"./lv.js": 275,
	"./me": 276,
	"./me.js": 276,
	"./mi": 277,
	"./mi.js": 277,
	"./mk": 278,
	"./mk.js": 278,
	"./ml": 279,
	"./ml.js": 279,
	"./mn": 280,
	"./mn.js": 280,
	"./mr": 281,
	"./mr.js": 281,
	"./ms": 282,
	"./ms-my": 283,
	"./ms-my.js": 283,
	"./ms.js": 282,
	"./mt": 284,
	"./mt.js": 284,
	"./my": 285,
	"./my.js": 285,
	"./nb": 286,
	"./nb.js": 286,
	"./ne": 287,
	"./ne.js": 287,
	"./nl": 288,
	"./nl-be": 289,
	"./nl-be.js": 289,
	"./nl.js": 288,
	"./nn": 290,
	"./nn.js": 290,
	"./pa-in": 291,
	"./pa-in.js": 291,
	"./pl": 292,
	"./pl.js": 292,
	"./pt": 293,
	"./pt-br": 294,
	"./pt-br.js": 294,
	"./pt.js": 293,
	"./ro": 295,
	"./ro.js": 295,
	"./ru": 296,
	"./ru.js": 296,
	"./sd": 297,
	"./sd.js": 297,
	"./se": 298,
	"./se.js": 298,
	"./si": 299,
	"./si.js": 299,
	"./sk": 300,
	"./sk.js": 300,
	"./sl": 301,
	"./sl.js": 301,
	"./sq": 302,
	"./sq.js": 302,
	"./sr": 303,
	"./sr-cyrl": 304,
	"./sr-cyrl.js": 304,
	"./sr.js": 303,
	"./ss": 305,
	"./ss.js": 305,
	"./sv": 306,
	"./sv.js": 306,
	"./sw": 307,
	"./sw.js": 307,
	"./ta": 308,
	"./ta.js": 308,
	"./te": 309,
	"./te.js": 309,
	"./tet": 310,
	"./tet.js": 310,
	"./tg": 311,
	"./tg.js": 311,
	"./th": 312,
	"./th.js": 312,
	"./tl-ph": 313,
	"./tl-ph.js": 313,
	"./tlh": 314,
	"./tlh.js": 314,
	"./tr": 315,
	"./tr.js": 315,
	"./tzl": 316,
	"./tzl.js": 316,
	"./tzm": 317,
	"./tzm-latn": 318,
	"./tzm-latn.js": 318,
	"./tzm.js": 317,
	"./ug-cn": 319,
	"./ug-cn.js": 319,
	"./uk": 320,
	"./uk.js": 320,
	"./ur": 321,
	"./ur.js": 321,
	"./uz": 322,
	"./uz-latn": 323,
	"./uz-latn.js": 323,
	"./uz.js": 322,
	"./vi": 324,
	"./vi.js": 324,
	"./x-pseudo": 325,
	"./x-pseudo.js": 325,
	"./yo": 326,
	"./yo.js": 326,
	"./zh-cn": 327,
	"./zh-cn.js": 327,
	"./zh-hk": 328,
	"./zh-hk.js": 328,
	"./zh-tw": 329,
	"./zh-tw.js": 329
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 407;

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.goTabsPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage.prototype.goSignupPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <img style="width: 60%" src="../assets/imgs/signup.png">\n\n  <ion-list style="margin: 0 5%;">\n    <ion-item>\n      <ion-icon name="md-person" item-left primary></ion-icon>\n      <ion-input type="text" placeholder="Số điện thoại/ Email" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-lock" item-left primary></ion-icon>\n      <ion-input type="password" placeholder="Mật khẩu"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <p style="text-align: right; margin-right: 5%;">Quên mật khẩu?</p>\n\n  <div >\n    <p><button ion-button round color="primary" (click)="goTabsPage()">ĐĂNG NHẬP</button></p>\n    <p class="or">Hoặc đăng nhập với</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button block round color="facebook">Facebook</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button block round color="gmail">Gmail</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n  <ion-grid style="display: flex; justify-content: center; align-items: center; flex-direction: row;">\n      <p>Bạn chưa có tài khoản?</p>\n      <button ion-button clear (click)="goSignupPage()">Đăng kí</button>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__private_profile_private_profile__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_histories_order_histories__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.privateprofilePage = __WEBPACK_IMPORTED_MODULE_2__private_profile_private_profile__["a" /* PrivateProfilePage */];
        this.orderhistoriesPage = __WEBPACK_IMPORTED_MODULE_3__order_histories_order_histories__["a" /* OrderHistoriesPage */];
        this.items = [];
        this.items = [
            {
                'name': 'Nguyen Thi Thanh Truc',
                'phone': '0449214167',
                'color': '#E63135'
            },
        ];
    }
    ProfilePage.prototype.openNavDetailsPage = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__private_profile_private_profile__["a" /* PrivateProfilePage */], { item: item });
    };
    ProfilePage.prototype.goPrivateProfilePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__private_profile_private_profile__["a" /* PrivateProfilePage */]);
    };
    ProfilePage.prototype.goOrderHistoriesPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__order_histories_order_histories__["a" /* OrderHistoriesPage */]);
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Hồ sơ Cá Nhân</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img class="avatar" style="width: 40%" src="../assets/imgs/signup.png">\n  <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)" icon-start>\n    <h2 style="text-align: center;"><b>{{ item.name }}</b></h2>\n  </button>\n\n  <ion-grid style="display: flex; justify-content: center; align-items: center; flex-direction: row;">\n      <ion-col col-6><img class="avatar" style="width: 30%;" src="../assets/imgs/orderNumber.png">Đơn mua hang: XRNW</ion-col>\n      <ion-col col-6 style="font-size: 40%;"><button ion-button clear (click)="goOrderHistoriesPage()">Xem lịch sử giao hàng</button></ion-col>\n\n  </ion-grid>\n\n  <ion-grid style="display:flex; justify-content: center; align-items: center; flex-direction: row;">\n    <button><img src="../assets/imgs/waitingforConfirm.png">Chờ xác nhận</button>\n    <button><img src="../assets/imgs/waitingforPills.png">Chờ lấy thuốc</button>\n    <button><img src="../assets/imgs/deliverPills.png">Đang giao thuốc</button>\n    <button><img src="../assets/imgs/delivered.png">Hoàn tất</button>\n  </ion-grid>\n<hr>\n  <ion-grid style="display:flex; align-items:center; justify-content: flex-start ; flex-direction:row;">\n    <img style="margin-right: 2%; width: 7%;" src="../assets/imgs/question.png">\n    <h6 >Trung tâm chăm sóc khách hàng</h6>\n  </ion-grid>\n\n\n\n  <ion-grid style="display:flex ;flex-direction:row; width: 60%;">\n    <button><img src="../assets/imgs/facebook.png"> </button>\n    <button><img src="../assets/imgs/phone.png"><a href="callto:18001090">18001090</a></button>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[330]);
//# sourceMappingURL=main.js.map