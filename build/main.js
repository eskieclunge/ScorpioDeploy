webpackJsonp([6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PredivePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questions_questions__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // Imports various form things
/**
 * Generated class for the PredivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PredivePage = /** @class */ (function () {
    function PredivePage(navCtrl, navParams, 
        // public viewCtrl: ViewController,    // This ensures the page can be imported as a modal
        formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.tncsForm = this.formBuilder.group({
            Accept: [false, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('true')]
        });
    }
    PredivePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PredivePage');
    };
    PredivePage.prototype.goToQuestions = function (event) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__questions_questions__["a" /* QuestionsPage */]);
    };
    PredivePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-predive',template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/predive/predive.html"*/'<ion-header>\n    <ion-navbar color="primary">\n      <button ion-button menuToggle> <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Predive Resources</ion-title> \n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding class="content-background">\n    <h3>Ionic Menu Starter</h3>\n  \n    <p>\n      If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n    </p>\n    \n    <ion-grid>\n      <ion-row>\n        <ion-col col-12 col-lg-6>\n          <form [formGroup]="tncsForm">\n            <ion-item>\n              <ion-label>Have you read the above Terms and Conditions?</ion-label>\n              <ion-checkbox formControlName="Accept" checked="true"></ion-checkbox>\n            </ion-item>\n          </form>\n          <ion-row justify-content-center>\n            <button (click)="goToQuestions($event)" [disabled]="!tncsForm.valid" ion-button secondary>Fill in your <br>predive information</button>\n        </ion-row>\n        </ion-col>\n      </ion-row>\n    <br>\n  \n    \n      <ion-row >\n  \n        <ion-col col-12 col-lg-6>\n          <img  (click)="goToQuestions($event)" src="../../assets/imgs/scorpio.png">\n        </ion-col>\n        \n        <ion-col col-12 col-lg-6>\n          <img src="../../assets/imgs/diver.png">\n        </ion-col>\n  \n      </ion-row>\n      \n      <ion-row align-items-center>\n  \n        <ion-col col-12 col-lg-6>\n            <ion-card >\n              <a href="https://www.tripadvisor.com/Attraction_Review-g150807-d1764082-Reviews-Scorpio_Divers_Tours-Cancun_Yucatan_Peninsula.html">\n                <img src="../../assets/imgs/tripa.gif">\n              </a>\n      \n              <ion-card-content>\n                <ion-card-title color="primary">\n                  Check out our reviews at Trip Advisor\n                </ion-card-title >\n              </ion-card-content>\n            </ion-card>\n        </ion-col>\n        \n        <ion-col col-12 col-lg-6>\n          <img src="../../assets/imgs/diver.png">\n        </ion-col>\n  \n    </ion-row>\n  </ion-grid>\n  </ion-content>'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/predive/predive.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], PredivePage);
    return PredivePage;
}());

//# sourceMappingURL=predive.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { EmailComposer } from '@ionic-native/email-composer';
/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    QuestionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionsPage');
    };
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questions',template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/questions/questions.html"*/'<!--\n  Generated template for the AddcommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">     <!-- Dismissing button and information abouth ow it will look -->\n        <span ion-text color="primary" showWhen="ios">Cancel</span> <!-- Ios Only view - DIFFERENT CANCEL BUTTONS -->\n        <ion-icon name="md-close" showWhen="android, windows"></ion-icon> <!-- Windows and Android Only view -->\n      </button>\n    </ion-buttons>\n    <ion-title>Pre-Dive Questionnaire</ion-title>\n  </ion-toolbar>\n  \n  \n  <ion-content class="content-background" padding style="margin-top: 56px;"> <!-- Extra code added in here so that the content of the modal is seen. -->\n    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeqyBIh4pXXX0y0B66lA_uAxJbpgpK2VD10nEs2tu6W2uOs8Q/viewform?embedded=true" width="640" height="1468" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>\n  \n  </ion-content>'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/questions/questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], QuestionsPage);
    return QuestionsPage;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the ReservePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservePage = /** @class */ (function () {
    function ReservePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReservePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservePage');
    };
    ReservePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reserve',template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/reserve/reserve.html"*/'<!--\n  Generated template for the ReservePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle> <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Reserve Now</ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="content-background" >\n\n  <ion-row>\n    \n    <ion-col col-12 col-lg-6>\n      <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" action="#" onsubmit="if(document.getElementById(\'agree\').checked) { return true; } else { alert(\'Please indicate that you have read and agree to the Terms and Conditions\'); return false; }">\n        <input type="hidden" name="cmd" value="_s-xclick">\n        <input type="hidden" name="hosted_button_id" value="SSD2TMGZAWZV6">\n        <table>\n        <tr><td><input type="hidden" name="on0" value="Trips">Trips</td></tr><tr><td><select name="os0">\n          <option value="Cancun Diving">Cancun Diving £100.00 GBP</option>\n          <option value="Puerto Morelos Diving">Puerto Morelos Diving £120.00 GBP</option>\n          <option value="Whale Sharks">Whale Sharks £180.00 GBP</option>\n        </select> </td></tr>\n        </table>\n        <input type="hidden" name="currency_code" value="GBP">\n        <ion-row padding>\n          <input type="checkbox" name="checkbox" value="check" id="agree" /> I have read and agree to the Terms and Conditions \n        </ion-row>\n        <ion-row padding>\n          <input type="image" src="https://www.paypalobjects.com/en_GB/i/btn/btn_cart_LG.gif" name="submit" alt="PayPal – The safer, easier way to pay online!">\n        </ion-row>\n        <img alt="" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">\n      </form>\n    </ion-col>\n\n    <ion-col col-12 col-lg-6>\n      <img src="../../assets/imgs/cancun.png">\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/reserve/reserve.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ReservePage);
    return ReservePage;
}());

//# sourceMappingURL=reserve.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScubaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the ScubaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScubaPage = /** @class */ (function () {
    function ScubaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ScubaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ScubaPage');
    };
    ScubaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scuba',template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/scuba/scuba.html"*/'<!--\n  Generated template for the ScubaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle> <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Scuba</ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="content-background">\n\n    <ion-grid>\n    <ion-row align-items-center>\n\n      <ion-col col-12 col-lg-6>\n        <img src="../../assets/imgs/sdi.png">\n        </ion-col>\n        \n        <ion-col col-12 col-lg-6>\n        <img src="../../assets/imgs/cozumel.png">\n      </ion-col>\n\n    </ion-row>\n\n\n    <ion-row align-items-center>\n\n      <ion-col col-12 col-lg-6>\n        <img src="../../assets/imgs/cancun.png">\n        </ion-col>\n        \n        <ion-col col-12 col-lg-6>\n        <img src="../../assets/imgs/cozumel.png">\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      Terms of service go in here\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/scuba/scuba.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ScubaPage);
    return ScubaPage;
}());

//# sourceMappingURL=scuba.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToursPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the ToursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ToursPage = /** @class */ (function () {
    function ToursPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ToursPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ToursPage');
    };
    ToursPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tours',template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/tours/tours.html"*/'<!--\n  Generated template for the ToursPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle> <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tours</ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="content-background">\n\n    <ion-row >\n      <ion-col col-12 col-lg-6>\n        <ion-row paddingcolor="primary-light"><h2>Shark Adventures</h2></ion-row>\n        <ion-row>Want to dive with BULLSHARKS?</ion-row>\n          <iframe src="https://www.youtube.com/embed/krXRcSV812E" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>\n      </ion-col>\n      <ion-col col-12 col-lg-6>\n        <ion-row padding><h2>Whalesharks</h2></ion-row>\n        <ion-row>Come admire the AMAZING whalesharks in Isla Mujeres!</ion-row>\n        <iframe src="https://www.youtube.com/embed/1CbuD0y0yQQ" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>\n      </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/tours/tours.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ToursPage);
    return ToursPage;
}());

//# sourceMappingURL=tours.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact/contact.module": [
		274,
		5
	],
	"../pages/predive/predive.module": [
		275,
		4
	],
	"../pages/questions/questions.module": [
		276,
		3
	],
	"../pages/reserve/reserve.module": [
		277,
		2
	],
	"../pages/scuba/scuba.module": [
		278,
		1
	],
	"../pages/tours/tours.module": [
		279,
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
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle> <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Scorpio</ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="content-background">\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n  <br>\n\n  <ion-grid>\n    <ion-row >\n\n      <ion-col col-12 col-lg-6>\n        <img src="../../assets/imgs/scorpio.png">\n      </ion-col>\n      \n      <ion-col col-12 col-lg-6>\n        <img src="../../assets/imgs/diver.png">\n      </ion-col>\n\n    </ion-row>\n    \n    <ion-row align-items-center>\n\n      <ion-col col-12 col-lg-6>\n          <ion-card >\n            <a href="https://www.tripadvisor.com/Attraction_Review-g150807-d1764082-Reviews-Scorpio_Divers_Tours-Cancun_Yucatan_Peninsula.html">\n              <img src="../../assets/imgs/tripa.gif">\n            </a>\n    \n            <ion-card-content>\n              <ion-card-title color="primary">\n                Check out our reviews at Trip Advisor\n              </ion-card-title >\n            </ion-card-content>\n          </ion-card>\n      </ion-col>\n      \n      <ion-col col-12 col-lg-6>\n        <img src="../../assets/imgs/diver.png">\n      </ion-col>\n\n  </ion-row>\n</ion-grid>\n\n<ion-fab right bottom>\n    <button ion-fab color="accent"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      \n      <a href="mailto:scorpiodivers@gmail.com"><button ion-fab class="btn-mail"><ion-icon name="mail"></ion-icon></button></a>\n      <a href="https://www.youtube.com/user/ScorpioDivers"><button ion-fab class="btn-youtube"><ion-icon name="logo-youtube"></ion-icon></button></a>\n      <a href="https://twitter.com/ScorpioDivers"><button ion-fab class="btn-twitter"><ion-icon name="logo-twitter"></ion-icon></button></a>\n      <a href="https://www.facebook.com/ScorpioDivers"><button ion-fab class="btn-facebook"><ion-icon name="logo-facebook"></ion-icon></button></a>\n    </ion-fab-list>\n</ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_scuba_scuba__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tours_tours__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_reserve_reserve__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_predive_predive__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_questions_questions__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Master






// Detail



// import { EmailComposer } from '@ionic-native/email-composer';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_scuba_scuba__["a" /* ScubaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tours_tours__["a" /* ToursPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_reserve_reserve__["a" /* ReservePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_predive_predive__["a" /* PredivePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_questions_questions__["a" /* QuestionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/predive/predive.module#PredivePageModule', name: 'PredivePage', segment: 'predive', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questions/questions.module#QuestionsPageModule', name: 'QuestionsPage', segment: 'questions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserve/reserve.module#ReservePageModule', name: 'ReservePage', segment: 'reserve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scuba/scuba.module#ScubaPageModule', name: 'ScubaPage', segment: 'scuba', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tours/tours.module#ToursPageModule', name: 'ToursPage', segment: 'tours', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_scuba_scuba__["a" /* ScubaPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tours_tours__["a" /* ToursPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_reserve_reserve__["a" /* ReservePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_predive_predive__["a" /* PredivePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_questions_questions__["a" /* QuestionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_scuba_scuba__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tours_tours__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_reserve_reserve__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_predive_predive__ = __webpack_require__(100);
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
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'About', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Scuba', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_5__pages_scuba_scuba__["a" /* ScubaPage */] },
            { title: 'Tours', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_6__pages_tours_tours__["a" /* ToursPage */] },
            { title: 'Reserve', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_7__pages_reserve_reserve__["a" /* ReservePage */] },
            { title: 'Contact', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */] },
            { title: 'Predive Resources', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_9__pages_predive_predive__["a" /* PredivePage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/app/app.html"*/'<ion-split-pane>\n\n  <ion-menu [content]="content">\n    <!--\n    <ion-header>\n      <ion-toolbar color="primary-dark">\n        <ion-title>Scorpio Divers</ion-title> </ion-toolbar>\n    </ion-header>\n    -->\n\n    <ion-content class="background-pale" >\n      <ion-list >\n        \n        <ion-list-header color="primary-light" text-wrap>\n          <ion-row>\n          \n            <img src="assets/imgs/ScorpLogo.png" />\n        \n          </ion-row>\n        </ion-list-header>\n\n        <button color="primary-pale" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon [name]="p.icon" item-left></ion-icon>\n          {{p.title}} \n        </button>\n        \n        <img src="../assets/imgs/turtle.jpg" class="menu-image">\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
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
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <button ion-button menuToggle> \n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact Us</ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="content-background">\n  \n  <ion-row>\n    <ion-card>\n      <ion-row>\n        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18786.530815933314!2d-86.79542768531084!3d21.14174236272594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2e8a62668935%3A0xebed254cb0baf3a4!2sScorpio+Divers!5e0!3m2!1sen!2sau!4v1554458126459!5m2!1sen!2sau" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>\n      </ion-row>\n      <ion-row>\n        <ion-card-title color="primary">\n              Location Information\n        </ion-card-title>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-row>Scorpio Divers Marina, Km 4</ion-row>\n          <ion-row>Pescador Street, </ion-row>\n          <ion-row>Inside: <a href="http://www.hotelsotavento.info">Sotavento Hotel</a></ion-row>\n          <ion-row>Poolside</ion-row>\n        </ion-col>\n\n        <ion-col>\n          <ion-row justify-content-center>Drop us a line and we will get back to you ASAP!</ion-row>\n          <ion-row justify-content-center>(some say we dont sleep)</ion-row>\n          <ion-row justify-content-center><ion-icon name="happy"></ion-icon></ion-row>\n          <ion-row justify-content-center><ion-icon name="call"></ion-icon><a href="tel:5219987349207">: +52 1 998 734 9207</a></ion-row>\n          <ion-row justify-content-center><ion-icon name="call"></ion-icon><a href="https://api.whatsapp.com/send?phone=5219987349207">:WhatsApp Message</a></ion-row>\n          <ion-row justify-content-center><ion-icon name="mail"></ion-icon><a href="mailto:scorpiodivers@gmail.com">scorpiodivers@gmail.com</a></ion-row>\n        </ion-col>\n         \n      </ion-row>  \n    </ion-card>\n  </ion-row>\n\n  <ion-row align-items-center>\n      \n    <ion-col col-12 col-lg-5>\n      <ion-card >\n        <a href="https://www.tripadvisor.com/Attraction_Review-g150807-d1764082-Reviews-Scorpio_Divers_Tours-Cancun_Yucatan_Peninsula.html">\n          <img src="../../assets/imgs/tripa.gif">\n        </a>\n\n        <ion-card-content>\n          <ion-card-title color="primary">\n            Check out our reviews at Trip Advisor\n          </ion-card-title >\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col col-12 col-lg-7>\n      <img class="round" src="../../assets/imgs/scorp2.jpg">  \n    \n    </ion-col>\n\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map