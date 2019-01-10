webpackJsonp([11],{

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-calendar',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/calendar/calendar.html"*/'<!--\n  Generated template for the CalendarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!-- <ion-title>Tháng 10, 2018 (69%)</ion-title> -->\n    <ion-title>\n        Tháng 10, 2018 <nav style="color: blue">(69%)</nav>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-calendar #calendar></ion-calendar>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/calendar/calendar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], CalendarPage);
    return CalendarPage;
}());

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-chatting',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/chatting/chatting.html"*/'<!--\n  Generated template for the ChattingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Trò chuyện</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/chatting/chatting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
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
    function HomePage(navCtrl, navParams, afd, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afd = afd;
        this.alertCtrl = alertCtrl;
        this.slides = [
            {
                time: "8:00 Sáng",
                description: "Đã uống",
                image: "assets/imgs/pill.png",
                name: "PENICILIN ..... 100MG",
                number: "Số lượng 1 viên",
                name1: "PENICILIN ..... 100MG",
                number1: "Số lượng 1 viên",
                name2: "PENICILIN ..... 100MG",
                number2: "Số lượng 1 viên",
                name3: "PENICILIN ..... 100MG",
                number3: "Số lượng 1 viên",
                name4: "PENICILIN  ..... 100MG",
                number4: "Số lượng 1 viên",
                name5: "PENICILIN ..... 100MG",
                number5: "Số lượng 1 viên",
                name6: "PENICILIN ..... 100MG",
                number6: "Số lượng 1 viên",
                color: "#0c63f0"
            },
            {
                time: "12:00 Trưa",
                description: "Chưa uống",
                image: "assets/imgs/pill.png",
                color: "#FC231C"
            },
            {
                time: "19:00 Tối",
                description: "Chưa uống",
                image: "assets/imgs/pill.png",
                color: "#FC231C"
            }
        ];
        this.getDataFromFireBase();
    }
    HomePage.prototype.getDataFromFireBase = function () {
    };
    HomePage.prototype.presentConfirm = function () {
        var alert = this.alertCtrl.create({
            title: 'Nhắc uống thuốc',
            message: 'Đã đến giờ uống thuốc! Mời bạn sử dụng thuốc đúng giờ để có hiệu quả tốt nhất.',
            buttons: [
                {
                    text: 'Đánh dấu',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Bỏ qua',
                    handler: function () {
                        console.log('Buy clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
        this.presentConfirm();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header padding style="padding-bottom: 0">\n\n  <ion-navbar style="background: #ffffff; padding: 0">\n    <!-- <ion-title style="background-color: #ffffff">\n      <p>Th 3 22/12/2018</p>\n      <p>Chào buổi sáng sd</p>\n    </ion-title> -->\n    <div>\n      <p>Th 3 22/12/2018</p>\n      <h4>Chào buổi sáng</h4>\n    </div>\n    <div id="home-setting">\n      <i class="fas fa-cog"></i>\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <h4>Liệu trình trong ngày</h4>\n  <ion-scroll scrollX="true" style="width:100%; height:300px" class="pills">\n    <ion-row nowrap>\n      <div *ngFor="let slide of slides" class="pills-item">\n        <ion-card style="width: 180px; background-color: #faf9f9">\n          <ion-card-header>\n            <ion-grid>\n              <ion-row>\n                <ion-col col-3>\n                  <ion-checkbox color="primary" checked="false"></ion-checkbox>\n                </ion-col>\n                <ion-col col-9>\n                  <h1 [innerHTML]="slide.time"></h1>\n                  <h1 [style.color]="slide.color" [innerHTML]="slide.description"></h1>\n                </ion-col>\n              </ion-row>\n            </ion-grid>\n          </ion-card-header>\n          <ion-card-content>\n            <img style="width: 80%; display: block; margin-left: auto; margin-right: auto;" [src]="slide.image" class="slide-image"/>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </ion-row>\n  </ion-scroll> \n\n    <h4>Chi tiết liệu trình</h4>\n    <hr style="background-color: #0c63f0; height: 2px; border: 0;">\n    <ion-scroll scrollY="true"style="width:100%; height:50%" >\n      <div class="pills-details">\n        <div *ngFor="let slide of slides">\n          <div class="pills-details-left">\n            <h6 [innerHTML]="slide.name"></h6>\n            <p [innerHTML]="slide.number"></p>  \n          </div>\n        </div>\n        <div class="pill-details-right" style="display: flex; align-items: center">\n          <i class="fas fa-angle-right" style="font-size: 20px"></i>\n        </div>\n      </div>\n      <div class="pills-details">\n          <div *ngFor="let slide of slides">\n            <div class="pills-details-left">\n              <h6 [innerHTML]="slide.name"></h6>\n              <p [innerHTML]="slide.number"></p>  \n            </div>\n          </div>\n          <div class="pill-details-right" style="display: flex; align-items: center">\n            <i class="fas fa-angle-right" style="font-size: 20px"></i>\n          </div>\n        </div>\n        <div class="pills-details">\n            <div *ngFor="let slide of slides">\n              <div class="pills-details-left">\n                <h6 [innerHTML]="slide.name"></h6>\n                <p [innerHTML]="slide.number"></p>  \n              </div>\n            </div>\n            <div class="pill-details-right" style="display: flex; align-items: center">\n              <i class="fas fa-angle-right" style="font-size: 20px"></i>\n            </div>\n          </div>\n          <div class="pills-details">\n              <div *ngFor="let slide of slides">\n                <div class="pills-details-left">\n                  <h6 [innerHTML]="slide.name"></h6>\n                  <p [innerHTML]="slide.number"></p>  \n                </div>\n              </div>\n              <div class="pill-details-right" style="display: flex; align-items: center">\n                <i class="fas fa-angle-right" style="font-size: 20px"></i>\n              </div>\n            </div>\n            <div class="pills-details">\n                <div *ngFor="let slide of slides">\n                  <div class="pills-details-left">\n                    <h6 [innerHTML]="slide.name"></h6>\n                    <p [innerHTML]="slide.number"></p>  \n                  </div>\n                </div>\n                <div class="pill-details-right" style="display: flex; align-items: center">\n                  <i class="fas fa-angle-right" style="font-size: 20px"></i>\n                </div>\n              </div>\n              <div class="pills-details">\n                  <div *ngFor="let slide of slides">\n                    <div class="pills-details-left">\n                      <h6 [innerHTML]="slide.name"></h6>\n                      <p [innerHTML]="slide.number"></p>  \n                    </div>\n                  </div>\n                  <div class="pill-details-right" style="display: flex; align-items: center">\n                    <i class="fas fa-angle-right" style="font-size: 20px"></i>\n                  </div>\n                </div>\n      <!-- <div *ngFor="let slide of slides">\n          <div class="pills-details-left">\n              <h6 [innerHTML]="slide.name1"></h6>\n              <p [innerHTML]="slide.number1"></p>  \n            </div>\n            <div class="pill-details-right">\n              <i class="fas fa-angle-right"></i>\n            </div>\n      </div>\n      <div *ngFor="let slide of slides">\n          <div class="pills-details-left">\n              <h6 [innerHTML]="slide.name2"></h6>\n              <p [innerHTML]="slide.number2"></p>  \n            </div>\n            <div class="pill-details-right">\n              <i class="fas fa-angle-right"></i>\n            </div>\n      </div>\n      <div *ngFor="let slide of slides">\n          <div class="pills-details-left">\n              <h6 [innerHTML]="slide.name3"></h6>\n              <p [innerHTML]="slide.number3"></p>  \n            </div>\n            <div class="pill-details-right">\n              <i class="fas fa-angle-right"></i>\n            </div>\n      </div>\n      <div *ngFor="let slide of slides">\n          <div class="pills-details-left">\n              <h6 [innerHTML]="slide.name4"></h6>\n              <p [innerHTML]="slide.number4"></p>  \n            </div>\n            <div class="pill-details-right">\n              <i class="fas fa-angle-right"></i>\n            </div>\n      </div>\n      <div *ngFor="let slide of slides">\n          <div class="pills-details-left">\n              <h6 [innerHTML]="slide.name5"></h6>\n              <p [innerHTML]="slide.number5"></p>  \n            </div>\n            <div class="pill-details-right">\n              <i class="fas fa-angle-right"></i>\n            </div>\n      </div>\n      <div *ngFor="let slide of slides">\n          <div class="pills-details-left">\n              <h6 [innerHTML]="slide.name6"></h6>\n              <p [innerHTML]="slide.number6"></p>  \n            </div>\n            <div class="pill-details-right">\n              <i class="fas fa-angle-right"></i>\n            </div>\n      </div> -->\n    </ion-scroll>\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemDetailPage = /** @class */ (function () {
    function ItemDetailPage(navParams) {
        this.navParams = navParams;
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        this.title = this.navParams.get('item').title;
        this.description = this.navParams.get('item').description;
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-item-detail',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/item-detail/item-detail.html"*/'<!--\n  Generated template for the ItemDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{title}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n        <div class="pill-detail-title">\n          <h1>Mô tả</h1>\n        </div>\n      <div class="description">\n        {{description}}\n        Panadol Extra chứa paracetamol là một chất hạ sốt, giảm đau và caffeine là một chất tăng cường tác dụng giảm đau của paracetamol. Panadol Extra có hiệu quả trong điều trị đau nhẹ đến vừa và hạ sốt bao gồm: Đau đầu, đau họng, đau cơ.\n      </div>\n    </ion-card-content>\n    <ion-card-content>\n      <div class="pill-detail-title">\n        <h1>Thành phần</h1>\n      </div>\n      <div class="des1">\n        50 mg Paracetamol, 65mg Caffeine\n      </div>\n    </ion-card-content>\n    <ion-card-content>\n      <div class="pill-detail-title">\n        <h1>Liều dùng</h1>\n      </div>\n      <div class="des">\n        Mỗi lần 1 viên\n      </div>\n    </ion-card-content>\n    <ion-card-content>\n      <div class="pill-detail-title">\n        <h1>Cảnh báo</h1>    \n      </div>\n      <div class="des">\n        Bác sĩ cần cảnh báo bệnh nhân về các dấu hiệu của phản ứng trên da nghiêm trọng như hội chứng Stevens-Johnson (SJS), hội chứng hoại tử da nhiễm độc (TEN) hay hội chứng Lyell, hội chứng ngoại ban mụn mủ toàn thân cấp tính (AGEP). Có sự gia tăng nguy cơ gây hại của paracetamol đối với gan trên những bệnh nhân đang bị các bệnh về gan. Tham khảo ý kiến bác sĩ đối với các bệnh nhân suy gan, suy thận hoặc khi triệu chứng còn dai dẳng. Tránh dùng quá nhiều caffeine (như cà phê, trà và một số đồ uống đóng hộp khác) trong khi đang dùng thuốc này. Để xa tầm tay trẻ em.    \n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/item-detail/item-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-private-profile',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/private-profile/private-profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Thông tin người dùng</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img class="image" style="width: 60%" src="../assets/imgs/signup.png">\n  <ion-list>\n    <ion-item style="padding-left: 0;">\n      <ion-label>Họ Và Tên</ion-label>\n      <ion-input text-right type="text" *ngFor="let item of items">{{item.name}}</ion-input>\n    </ion-item>\n\n\n    <ion-item style="padding-left: 0;">\n      <ion-label>Ngày sinh</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY"></ion-datetime>\n    </ion-item>\n\n    <ion-item style="padding-left: 0;">\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="gender">\n        <ion-option value="m">Nam</ion-option>\n        <ion-option value="f">Nữ</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item style="padding-left: 0;">\n      <ion-label>Số CMND</ion-label>\n      <ion-input text-right type="number"  style="flex-wrap: wrap;"></ion-input>\n    </ion-item>\n\n    <ion-item style="padding-left: 0;">\n      <ion-label>Số điện thoại</ion-label>\n      <ion-input text-right type="number" ></ion-input>\n    </ion-item>\n\n    <ion-item style="padding-left: 0;">\n      <ion-label>Email</ion-label>\n      <ion-input text-right type="email" ></ion-input>\n    </ion-item>\n\n    <ion-item style="padding-left: 0;">\n      <ion-label>Địa chỉ</ion-label>\n      <ion-input text-right type="text" ></ion-input>\n    </ion-item>\n\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/private-profile/private-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], PrivateProfilePage);
    return PrivateProfilePage;
}());

//# sourceMappingURL=private-profile.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(91);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-histories',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/order-histories/order-histories.html"*/'<!--\n  Generated template for the OrderHistoriesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n   <ion-buttons left>\n     <button ion-button icon-only (click)="goProfilePage()">\n       <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n       Quay lại\n     </button>\n   </ion-buttons>\n   <ion-title>Lịch sử giao hàng</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/order-histories/order-histories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], OrderHistoriesPage);
    return OrderHistoriesPage;
}());

//# sourceMappingURL=order-histories.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verify_verify__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(90);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <img class="image" style="width: 60%" src="../assets/imgs/signup.png">\n\n  <ion-list style="margin: 0 5%;">\n\n    <ion-item>\n      <ion-input type="number" placeholder="Nhập số điện thoại" text-center></ion-input>\n    </ion-item>\n\n  </ion-list>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-1 style="margin: 0 0 0 5%;">\n        <p style="text-align: right;"><ion-checkbox color="dark" checked="false"></ion-checkbox></p>\n      </ion-col>\n      <ion-col col-10>\n        <p style="text-align: left;">Tôi đồng ý với các điều khoản và điều kiện</p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div >\n    <p style="margin-top: -3%;"><button ion-button round color="primary" (click)="goVerifyPage()">ĐĂNG KÍ</button></p>\n  </div>\n  <ion-grid style="display: flex; justify-content: center; align-items: center; flex-direction: row;">\n      <p>Bạn đã có tài khoản?</p>\n      <button ion-button clear (click)="goLoginpPage()">Đăng nhập</button>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-verify',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/verify/verify.html"*/'<!--\n  Generated template for the VerifyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content text-center padding class="vertical-align-content">\n  <form>\n    <h3>Nhập mã xác nhận</h3>\n    <p>Chúng tôi đã gửi mã xác nhận đến số điện thoại:<br><b>090 xxx xxxx</b></p>\n\n    <ion-input text-center type=”number” placeholder="Mã xác nhận" ></ion-input>\n    <button block ion-button round color="primary" >Xác nhận</button>\n    <button block ion-button round color="primary" >Gửi lại mã xác nhận</button>\n\n\n  </form>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/verify/verify.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], VerifyPage);
    return VerifyPage;
}());

//# sourceMappingURL=verify.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(90);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n</ion-header>\n\n\n<ion-content class="tutorial-page">\n\n  <ion-slides pager>\n    <ion-slide *ngFor="let slide of slides">\n      <ion-toolbar style="padding-top: 10%;">\n        <ion-buttons end>\n          <button ion-button color="primary" (click)="goLoginPage()">Bỏ qua</button>\n        </ion-buttons>\n      </ion-toolbar>\n      <img style="width: 100%;" [src]="slide.image" class="slide-image"/>\n      <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n      <p [innerHTML]="slide.description"></p>\n      <footer>\n        <div style="position: absolute; bottom: 40px; font-size:80%; left: 0;right: 0;" [innerHTML]="slide.footer"></div>\n      </footer>\n    </ion-slide>\n  <ion-slide>\n      <img src="assets/imgs/logo.png" class="slide-image"/>\n      <h2 class="slide-title">Bạn đã sẵn sàng chưa?</h2>\n      <button ion-button large clear icon-end color="primary" (click)="goLoginPage()">\n        Tiếp tục\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content >\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 176:
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
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calendar/calendar.module": [
		847,
		10
	],
	"../pages/chatting/chatting.module": [
		848,
		9
	],
	"../pages/home/home.module": [
		849,
		8
	],
	"../pages/item-detail/item-detail.module": [
		851,
		7
	],
	"../pages/login/login.module": [
		850,
		6
	],
	"../pages/order-histories/order-histories.module": [
		852,
		5
	],
	"../pages/private-profile/private-profile.module": [
		853,
		4
	],
	"../pages/profile/profile.module": [
		854,
		3
	],
	"../pages/signup/signup.module": [
		855,
		2
	],
	"../pages/verify/verify.module": [
		856,
		1
	],
	"../pages/welcome/welcome.module": [
		857,
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
webpackAsyncContext.id = 221;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treatment_treatment__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chatting_chatting__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendar_calendar__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(91);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Trang chủ" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Liệu trình" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Trò chuyện" tabIcon="ios-chatbubbles-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Lịch" tabIcon="ios-calendar-outline"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Hồ sơ" tabIcon="contacts"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_item_add_item__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_detail_item_detail__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(328);
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
// @IonicPage()
var TreatmentPage = /** @class */ (function () {
    function TreatmentPage(navCtrl, modalCtrl, camera) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.camera = camera;
        this.items = [];
    }
    TreatmentPage.prototype.ionViewDidLoad = function () {
    };
    TreatmentPage.prototype.takePhoto = function () {
        var _this = this;
        var options = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
            alert(err);
        });
    };
    TreatmentPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__add_item_add_item__["a" /* AddItemPage */]);
        addModal.onDidDismiss(function (item) {
            if (item) {
                _this.saveItem(item);
            }
        });
        addModal.present();
    };
    TreatmentPage.prototype.saveItem = function (item) {
        this.items.push(item);
    };
    TreatmentPage.prototype.viewItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__item_detail_item_detail__["a" /* ItemDetailPage */], {
            item: item,
        });
    };
    TreatmentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-treatment',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/treatment/treatment.html"*/'<!--\n  Generated template for the TreatmentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n    Quản lý thuốc\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid  style="display: flex; align-items: center; flex-direction: row;">\n    <button ion-button icon-only (click)="addItem()"><ion-icon name="add-circle"></ion-icon></button>\n\n    <h6 style="margin-top: 1rem; padding-left: 1rem;">Thêm liệu trình</h6>\n  </ion-grid>\n  <ion-grid>\n    <button ion-button (click)="takePhoto()">Chụp đơn thuốc</button>\n    <p align="center"><img src="{{base64Image}}" alt=""></p>\n  </ion-grid>\n\n<hr>\n  <h6>Liệu trình bổ sung</h6>\n  <ion-list class="treatment-list">\n    <ion-item *ngFor="let item of items" (click)="viewItem(item)">{{item.title}}</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/treatment/treatment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], TreatmentPage);
    return TreatmentPage;
}());

//# sourceMappingURL=treatment.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
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
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
// @IonicPage()
var AddItemPage = /** @class */ (function () {
    function AddItemPage(navCtrl, view) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.langForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            "langs": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
    }
    AddItemPage.prototype.doSubmit = function (event) {
        console.log('Submitting form', this.langForm.value);
        event.preventDefault();
    };
    AddItemPage.prototype.initializeItems = function () {
        this.items = [
            {
                'title': 'PENICILIN 100MG',
                'color': '#E63135',
                'description': 'Panadol Extra chứa paracetamol là một chất hạ sốt, giảm đau và caffeine là một chất tăng cường tác dụng giảm đau của paracetamol. Panadol Extra có hiệu quả trong điều trị đau nhẹ đến vừa và hạ sốt bao gồm: Đau đầu, đau họng, đau cơ.',
                'des1': '50 mg Paracetamol, 65mg Caffeine',
                'des2': 'Mỗi lần 1 viên',
                'des3': 'Bác sĩ cần cảnh báo bệnh nhân về các dấu hiệu của phản ứng trên da nghiêm trọng như hội chứng Stevens-Johnson (SJS), hội chứng hoại tử da nhiễm độc (TEN) hay hội chứng Lyell, hội chứng ngoại ban mụn mủ toàn thân cấp tính (AGEP). Có sự gia tăng nguy cơ gây hại của paracetamol đối với gan trên những bệnh nhân đang bị các bệnh về gan. Tham khảo ý kiến bác sĩ đối với các bệnh nhân suy gan, suy thận hoặc khi triệu chứng còn dai dẳng. Tránh dùng quá nhiều caffeine (như cà phê, trà và một số đồ uống đóng hộp khác) trong khi đang dùng thuốc này. Để xa tầm tay trẻ em.'
            },
            {
                'title': 'PANADOL 100MG',
                'color': '#E63135',
                'description': 'Panadol Extra chứa paracetamol là một chất hạ sốt, giảm đau và caffeine là một chất tăng cường tác dụng giảm đau của paracetamol. Panadol Extra có hiệu quả trong điều trị đau nhẹ đến vừa và hạ sốt bao gồm: Đau đầu, đau họng, đau cơ.',
                'des1': '50 mg Paracetamol, 65mg Caffeine',
                'des2': 'Mỗi lần 1 viên',
                'des3': 'Bác sĩ cần cảnh báo bệnh nhân về các dấu hiệu của phản ứng trên da nghiêm trọng như hội chứng Stevens-Johnson (SJS), hội chứng hoại tử da nhiễm độc (TEN) hay hội chứng Lyell, hội chứng ngoại ban mụn mủ toàn thân cấp tính (AGEP). Có sự gia tăng nguy cơ gây hại của paracetamol đối với gan trên những bệnh nhân đang bị các bệnh về gan. Tham khảo ý kiến bác sĩ đối với các bệnh nhân suy gan, suy thận hoặc khi triệu chứng còn dai dẳng. Tránh dùng quá nhiều caffeine (như cà phê, trà và một số đồ uống đóng hộp khác) trong khi đang dùng thuốc này. Để xa tầm tay trẻ em.'
            },
            {
                'title': 'TAFFEL 200MG',
                'color': '#E63135',
                'description': 'Panadol Extra chứa paracetamol là một chất hạ sốt, giảm đau và caffeine là một chất tăng cường tác dụng giảm đau của paracetamol. Panadol Extra có hiệu quả trong điều trị đau nhẹ đến vừa và hạ sốt bao gồm: Đau đầu, đau họng, đau cơ.',
                'des1': '50 mg Paracetamol, 65mg Caffeine',
                'des2': 'Mỗi lần 1 viên',
                'des3': 'Bác sĩ cần cảnh báo bệnh nhân về các dấu hiệu của phản ứng trên da nghiêm trọng như hội chứng Stevens-Johnson (SJS), hội chứng hoại tử da nhiễm độc (TEN) hay hội chứng Lyell, hội chứng ngoại ban mụn mủ toàn thân cấp tính (AGEP). Có sự gia tăng nguy cơ gây hại của paracetamol đối với gan trên những bệnh nhân đang bị các bệnh về gan. Tham khảo ý kiến bác sĩ đối với các bệnh nhân suy gan, suy thận hoặc khi triệu chứng còn dai dẳng. Tránh dùng quá nhiều caffeine (như cà phê, trà và một số đồ uống đóng hộp khác) trong khi đang dùng thuốc này. Để xa tầm tay trẻ em.'
            },
            {
                'title': 'CẢM XUYÊN HƯƠNG 200MG',
                'color': '#E63135',
                'description': 'Panadol Extra chứa paracetamol là một chất hạ sốt, giảm đau và caffeine là một chất tăng cường tác dụng giảm đau của paracetamol. Panadol Extra có hiệu quả trong điều trị đau nhẹ đến vừa và hạ sốt bao gồm: Đau đầu, đau họng, đau cơ.',
                'des1': '50 mg Paracetamol, 65mg Caffeine',
                'des2': 'Mỗi lần 1 viên',
                'des3': 'Bác sĩ cần cảnh báo bệnh nhân về các dấu hiệu của phản ứng trên da nghiêm trọng như hội chứng Stevens-Johnson (SJS), hội chứng hoại tử da nhiễm độc (TEN) hay hội chứng Lyell, hội chứng ngoại ban mụn mủ toàn thân cấp tính (AGEP). Có sự gia tăng nguy cơ gây hại của paracetamol đối với gan trên những bệnh nhân đang bị các bệnh về gan. Tham khảo ý kiến bác sĩ đối với các bệnh nhân suy gan, suy thận hoặc khi triệu chứng còn dai dẳng. Tránh dùng quá nhiều caffeine (như cà phê, trà và một số đồ uống đóng hộp khác) trong khi đang dùng thuốc này. Để xa tầm tay trẻ em.'
            },
            {
                'title': 'SITI 200MG',
                'color': '#E63135',
                'description': 'Panadol Extra chứa paracetamol là một chất hạ sốt, giảm đau và caffeine là một chất tăng cường tác dụng giảm đau của paracetamol. Panadol Extra có hiệu quả trong điều trị đau nhẹ đến vừa và hạ sốt bao gồm: Đau đầu, đau họng, đau cơ.',
                'des1': '50 mg Paracetamol, 65mg Caffeine',
                'des2': 'Mỗi lần 1 viên',
                'des3': 'Bác sĩ cần cảnh báo bệnh nhân về các dấu hiệu của phản ứng trên da nghiêm trọng như hội chứng Stevens-Johnson (SJS), hội chứng hoại tử da nhiễm độc (TEN) hay hội chứng Lyell, hội chứng ngoại ban mụn mủ toàn thân cấp tính (AGEP). Có sự gia tăng nguy cơ gây hại của paracetamol đối với gan trên những bệnh nhân đang bị các bệnh về gan. Tham khảo ý kiến bác sĩ đối với các bệnh nhân suy gan, suy thận hoặc khi triệu chứng còn dai dẳng. Tránh dùng quá nhiều caffeine (như cà phê, trà và một số đồ uống đóng hộp khác) trong khi đang dùng thuốc này. Để xa tầm tay trẻ em.'
            },
        ];
    };
    AddItemPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the ev target
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    AddItemPage.prototype.saveItem = function () {
        var newItem = {
            title: this.title,
            description: this.description,
        };
        this.view.dismiss(newItem);
    };
    AddItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    AddItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-item',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/add-item/add-item.html"*/'<!--\n  Generated template for the AddItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Thêm liệu trình\n    </ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n      </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <form (submit)="doSubmit($event)" [formGroup]="langForm" style="text-align: center">\n  <ion-list radio-group formControlName="langs" [(ngModel)]="title">\n    <ion-item *ngFor="let item of items" style="padding-left: 0">\n      <ion-label style="padding-left: 16px">{{item.title }}</ion-label>\n      <ion-radio value="{{item.title}}"  checked="false" ></ion-radio>\n    </ion-item>\n  </ion-list>\n  <button ion-button color="primary" (click)="saveItem()">Save</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/add-item/add-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], AddItemPage);
    return AddItemPage;
}());

//# sourceMappingURL=add-item.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateProfilePage", function() { return PrivateProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            templateUrl: 'private-profile.html',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"]])
    ], PrivateProfilePage);
    return PrivateProfilePage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(838);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_verify_verify__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_treatment_treatment__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_add_item_add_item__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_item_detail_item_detail__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chatting_chatting__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_private_profile_private_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_order_histories_order_histories__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ionic3_calendar_en__ = __webpack_require__(839);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_select_searchable__ = __webpack_require__(845);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2__ = __webpack_require__(846);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var config = {
    apiKey: "AIzaSyCAVfoQiB0y208od2TD4jn2cRy0KCbw0bU",
    authDomain: "mepill-860c1.firebaseapp.com",
    databaseURL: "https://mepill-860c1.firebaseio.com",
    projectId: "mepill-860c1",
    storageBucket: "mepill-860c1.appspot.com",
    messagingSenderId: "266008860312"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_verify_verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_treatment_treatment__["a" /* TreatmentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_private_profile_private_profile__["a" /* PrivateProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_order_histories_order_histories__["a" /* OrderHistoriesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calendar/calendar.module#CalendarPageModule', name: 'CalendarPage', segment: 'calendar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chatting/chatting.module#ChattingPageModule', name: 'ChattingPage', segment: 'chatting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-histories/order-histories.module#OrderHistoriesPageModule', name: 'OrderHistoriesPage', segment: 'order-histories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/private-profile/private-profile.module#PrivateProfilePageModule', name: 'PrivateProfilePage', segment: 'private-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/verify/verify.module#VerifyPageModule', name: 'VerifyPage', segment: 'verify', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20_ionic3_calendar_en__["a" /* CalendarModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_10__pages_add_item_add_item__["a" /* AddItemPage */]),
                __WEBPACK_IMPORTED_MODULE_21_ionic_select_searchable__["SelectSearchableModule"],
                __WEBPACK_IMPORTED_MODULE_24_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2__["AngularFireModule"],
                __WEBPACK_IMPORTED_MODULE_23_angularfire2__["AngularFireModule"].initializeApp(config)
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_verify_verify__["a" /* VerifyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_treatment_treatment__["a" /* TreatmentPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_calendar_calendar__["a" /* CalendarPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_private_profile_private_profile__["a" /* PrivateProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_order_histories_order_histories__["a" /* OrderHistoriesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(165);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 842:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 372,
	"./af.js": 372,
	"./ar": 373,
	"./ar-dz": 374,
	"./ar-dz.js": 374,
	"./ar-kw": 375,
	"./ar-kw.js": 375,
	"./ar-ly": 376,
	"./ar-ly.js": 376,
	"./ar-ma": 377,
	"./ar-ma.js": 377,
	"./ar-sa": 378,
	"./ar-sa.js": 378,
	"./ar-tn": 379,
	"./ar-tn.js": 379,
	"./ar.js": 373,
	"./az": 380,
	"./az.js": 380,
	"./be": 381,
	"./be.js": 381,
	"./bg": 382,
	"./bg.js": 382,
	"./bm": 383,
	"./bm.js": 383,
	"./bn": 384,
	"./bn.js": 384,
	"./bo": 385,
	"./bo.js": 385,
	"./br": 386,
	"./br.js": 386,
	"./bs": 387,
	"./bs.js": 387,
	"./ca": 388,
	"./ca.js": 388,
	"./cs": 389,
	"./cs.js": 389,
	"./cv": 390,
	"./cv.js": 390,
	"./cy": 391,
	"./cy.js": 391,
	"./da": 392,
	"./da.js": 392,
	"./de": 393,
	"./de-at": 394,
	"./de-at.js": 394,
	"./de-ch": 395,
	"./de-ch.js": 395,
	"./de.js": 393,
	"./dv": 396,
	"./dv.js": 396,
	"./el": 397,
	"./el.js": 397,
	"./en-au": 398,
	"./en-au.js": 398,
	"./en-ca": 399,
	"./en-ca.js": 399,
	"./en-gb": 400,
	"./en-gb.js": 400,
	"./en-ie": 401,
	"./en-ie.js": 401,
	"./en-il": 402,
	"./en-il.js": 402,
	"./en-nz": 403,
	"./en-nz.js": 403,
	"./eo": 404,
	"./eo.js": 404,
	"./es": 405,
	"./es-do": 406,
	"./es-do.js": 406,
	"./es-us": 407,
	"./es-us.js": 407,
	"./es.js": 405,
	"./et": 408,
	"./et.js": 408,
	"./eu": 409,
	"./eu.js": 409,
	"./fa": 410,
	"./fa.js": 410,
	"./fi": 411,
	"./fi.js": 411,
	"./fo": 412,
	"./fo.js": 412,
	"./fr": 413,
	"./fr-ca": 414,
	"./fr-ca.js": 414,
	"./fr-ch": 415,
	"./fr-ch.js": 415,
	"./fr.js": 413,
	"./fy": 416,
	"./fy.js": 416,
	"./gd": 417,
	"./gd.js": 417,
	"./gl": 418,
	"./gl.js": 418,
	"./gom-latn": 419,
	"./gom-latn.js": 419,
	"./gu": 420,
	"./gu.js": 420,
	"./he": 421,
	"./he.js": 421,
	"./hi": 422,
	"./hi.js": 422,
	"./hr": 423,
	"./hr.js": 423,
	"./hu": 424,
	"./hu.js": 424,
	"./hy-am": 425,
	"./hy-am.js": 425,
	"./id": 426,
	"./id.js": 426,
	"./is": 427,
	"./is.js": 427,
	"./it": 428,
	"./it.js": 428,
	"./ja": 429,
	"./ja.js": 429,
	"./jv": 430,
	"./jv.js": 430,
	"./ka": 431,
	"./ka.js": 431,
	"./kk": 432,
	"./kk.js": 432,
	"./km": 433,
	"./km.js": 433,
	"./kn": 434,
	"./kn.js": 434,
	"./ko": 435,
	"./ko.js": 435,
	"./ky": 436,
	"./ky.js": 436,
	"./lb": 437,
	"./lb.js": 437,
	"./lo": 438,
	"./lo.js": 438,
	"./lt": 439,
	"./lt.js": 439,
	"./lv": 440,
	"./lv.js": 440,
	"./me": 441,
	"./me.js": 441,
	"./mi": 442,
	"./mi.js": 442,
	"./mk": 443,
	"./mk.js": 443,
	"./ml": 444,
	"./ml.js": 444,
	"./mn": 445,
	"./mn.js": 445,
	"./mr": 446,
	"./mr.js": 446,
	"./ms": 447,
	"./ms-my": 448,
	"./ms-my.js": 448,
	"./ms.js": 447,
	"./mt": 449,
	"./mt.js": 449,
	"./my": 450,
	"./my.js": 450,
	"./nb": 451,
	"./nb.js": 451,
	"./ne": 452,
	"./ne.js": 452,
	"./nl": 453,
	"./nl-be": 454,
	"./nl-be.js": 454,
	"./nl.js": 453,
	"./nn": 455,
	"./nn.js": 455,
	"./pa-in": 456,
	"./pa-in.js": 456,
	"./pl": 457,
	"./pl.js": 457,
	"./pt": 458,
	"./pt-br": 459,
	"./pt-br.js": 459,
	"./pt.js": 458,
	"./ro": 460,
	"./ro.js": 460,
	"./ru": 461,
	"./ru.js": 461,
	"./sd": 462,
	"./sd.js": 462,
	"./se": 463,
	"./se.js": 463,
	"./si": 464,
	"./si.js": 464,
	"./sk": 465,
	"./sk.js": 465,
	"./sl": 466,
	"./sl.js": 466,
	"./sq": 467,
	"./sq.js": 467,
	"./sr": 468,
	"./sr-cyrl": 469,
	"./sr-cyrl.js": 469,
	"./sr.js": 468,
	"./ss": 470,
	"./ss.js": 470,
	"./sv": 471,
	"./sv.js": 471,
	"./sw": 472,
	"./sw.js": 472,
	"./ta": 473,
	"./ta.js": 473,
	"./te": 474,
	"./te.js": 474,
	"./tet": 475,
	"./tet.js": 475,
	"./tg": 476,
	"./tg.js": 476,
	"./th": 477,
	"./th.js": 477,
	"./tl-ph": 478,
	"./tl-ph.js": 478,
	"./tlh": 479,
	"./tlh.js": 479,
	"./tr": 480,
	"./tr.js": 480,
	"./tzl": 481,
	"./tzl.js": 481,
	"./tzm": 482,
	"./tzm-latn": 483,
	"./tzm-latn.js": 483,
	"./tzm.js": 482,
	"./ug-cn": 484,
	"./ug-cn.js": 484,
	"./uk": 485,
	"./uk.js": 485,
	"./ur": 486,
	"./ur.js": 486,
	"./uz": 487,
	"./uz-latn": 488,
	"./uz-latn.js": 488,
	"./uz.js": 487,
	"./vi": 489,
	"./vi.js": 489,
	"./x-pseudo": 490,
	"./x-pseudo.js": 490,
	"./yo": 491,
	"./yo.js": 491,
	"./zh-cn": 492,
	"./zh-cn.js": 492,
	"./zh-hk": 493,
	"./zh-hk.js": 493,
	"./zh-tw": 494,
	"./zh-tw.js": 494
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
webpackContext.id = 842;

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(163);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <img class="image" style="width: 60%" src="../assets/imgs/signup.png">\n\n  <ion-list style="margin: 0 5%;">\n    <ion-item>\n      <ion-icon name="md-person" item-left primary></ion-icon>\n      <ion-input type="text" placeholder="Số điện thoại/ Email" ></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="md-lock" item-left primary></ion-icon>\n      <ion-input type="password" placeholder="Mật khẩu"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <p style="text-align: right; margin-right: 5%;">Quên mật khẩu?</p>\n\n  <div >\n    <p><button ion-button round color="primary" (click)="goTabsPage()">ĐĂNG NHẬP</button></p>\n    <p class="or">Hoặc đăng nhập với</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button block round color="facebook">Facebook</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button block round color="gmail">Gmail</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n  <ion-grid style="display: flex; justify-content: center; align-items: center; flex-direction: row;">\n      <p>Bạn chưa có tài khoản?</p>\n      <button ion-button clear (click)="goSignupPage()">Đăng kí</button>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__private_profile_private_profile__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_histories_order_histories__ = __webpack_require__(162);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile',template:/*ion-inline-start:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Hồ sơ Cá Nhân</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img class="image" style="width: 40%" src="../assets/imgs/signup.png">\n  <button ion-item *ngFor="let item of items" (click)="openNavDetailsPage(item)" icon-start>\n    <h2 style="text-align: center;"><b>{{ item.name }}</b></h2>\n  </button>\n\n  <ion-grid style="text-align: center; margin-top: 15px;">\n      <div>\n        <img class="avatar" style="width: 15%;" src="../assets/imgs/orderNumber.png">\n        <div>Đơn mua hàng: XRNW</div>\n      </div>\n      <div style="font-size: 40%;">\n        <button ion-button clear (click)="goOrderHistoriesPage()">Lịch sử giao hàng</button>\n      </div>\n  </ion-grid>\n\n  <ion-grid style="display:flex; justify-content: center; flex-direction: row; margin-bottom: 25px;">\n    <button style="border: 1px solid white;">\n      <img src="../assets/imgs/waitingforConfirm.png">\n      <div>Chờ xác nhận</div>\n    </button>\n    <button style="border: 1px solid white;">\n      <img src="../assets/imgs/waitingforPills.png">\n      <div>Chờ lấy thuốc</div>\n    </button>\n    <button style="border: 1px solid white;">\n      <img src="../assets/imgs/deliverPills.png">\n      <div>Đang giao thuốc</div>\n    </button>\n    <button style="border: 1px solid white;">\n      <img src="../assets/imgs/delivered.png">\n      <div>Hoàn tất</div>\n    </button>\n  </ion-grid>\n<hr>\n  <ion-grid style="display:flex; align-items:center; justify-content: flex-start ; flex-direction:row;">\n    <img style="margin-right: 2%; width: 7%;" src="../assets/imgs/question.png">\n    <h6 >Trung tâm chăm sóc khách hàng</h6>\n  </ion-grid>\n\n\n\n  <ion-grid style="display:flex ;flex-direction:row; width: 60%;">\n    <button style="border: 1px solid white;">\n      <img src="../assets/imgs/facebook.png">\n      <a href="#">Facebook</a>\n    </button>\n    <button style="border: 1px solid white;">\n      <img src="../assets/imgs/phone.png">\n      <a href="callto:18001090">18001090</a>\n    </button>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/trucnguyen/Documents/GitHub/mePill/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[495]);
//# sourceMappingURL=main.js.map