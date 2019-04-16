webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-questions',template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/questions/questions.html"*/'<!--\n  Generated template for the AddcommentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n\n    <ion-title>Pre-Dive Questionnaire</ion-title> \n  </ion-navbar>\n</ion-header>\n  \n  \n\n\n\n  <ion-content class="content-background" padding style="margin-top: 56px;"> <!-- Extra code added in here so that the content of the modal is seen. -->\n    \n      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeqyBIh4pXXX0y0B66lA_uAxJbpgpK2VD10nEs2tu6W2uOs8Q/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>\n    \n  </ion-content>'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/questions/questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], QuestionsPage);
    return QuestionsPage;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToursPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-tours',template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/tours/tours.html"*/'<!--\n  Generated template for the ToursPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle> <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tours</ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content class="content-background">\n\n    <ion-row >\n      <ion-col col-12 col-lg-6>\n        <ion-row padding ><h2>Shark Adventures</h2></ion-row>\n        <ion-row>Want to dive with BULLSHARKS?</ion-row>\n          <iframe src="https://www.youtube.com/embed/krXRcSV812E" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>\n      </ion-col>\n      <ion-col col-12 col-lg-6>\n        <ion-row padding ><h2>Whalesharks</h2></ion-row>\n        <ion-row>Come admire the AMAZING whalesharks in Isla Mujeres!</ion-row>\n        <iframe src="https://www.youtube.com/embed/1CbuD0y0yQQ" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>\n      </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/tours/tours.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ToursPage);
    return ToursPage;
}());

//# sourceMappingURL=tours.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-contact',template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/contact/contact.html"*/'<!--\n  Generated template for the ContactPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary" >\n    <button ion-button menuToggle> \n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contact Us</ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="content-background">\n  \n  <ion-row>\n    <ion-card>\n      <ion-row>\n        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18786.530815933314!2d-86.79542768531084!3d21.14174236272594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4c2e8a62668935%3A0xebed254cb0baf3a4!2sScorpio+Divers!5e0!3m2!1sen!2sau!4v1554458126459!5m2!1sen!2sau" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>\n      </ion-row>\n      <ion-row>\n        <ion-card-title color="primary">\n              Location Information\n        </ion-card-title>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-row>Scorpio Divers Marina, Km 4</ion-row>\n          <ion-row>Pescador Street,</ion-row>\n          <ion-row>Inside: <a href="http://www.hotelsotavento.info">Sotavento Hotel</a></ion-row>\n          <ion-row>Poolside</ion-row>\n        </ion-col>\n\n        <ion-col>\n          <ion-row justify-content-center>Drop us a line and we will get back to you ASAP!</ion-row>\n          <ion-row justify-content-center>(some say we dont sleep)</ion-row>\n          <ion-row justify-content-center><ion-icon name="happy"></ion-icon></ion-row>\n          <ion-row justify-content-center><ion-icon name="call"></ion-icon><a href="tel:5219987349207">: +52 1 998 734 9207</a></ion-row>\n          <ion-row justify-content-center><ion-icon name="call"></ion-icon><a href="https://api.whatsapp.com/send?phone=5219987349207">:WhatsApp Message</a></ion-row>\n          <ion-row justify-content-center><ion-icon name="mail"></ion-icon><a href="mailto:scorpiodivers@gmail.com">scorpiodivers@gmail.com</a></ion-row>\n        </ion-col>\n         \n      </ion-row>  \n    </ion-card>\n  </ion-row>\n\n  <ion-row align-items-center>\n      \n    <ion-col col-12 col-lg-5>\n       \n        <a href="https://www.tripadvisor.com/Attraction_Review-g150807-d1764082-Reviews-Scorpio_Divers_Tours-Cancun_Yucatan_Peninsula.html">\n          <img src="../../assets/imgs/tripa.gif">\n        </a>\n      <ion-card color="primary-pale">\n        <ion-card-content>\n          <ion-card-title color="card-title">\n              <a href="https://www.tripadvisor.com/Attraction_Review-g150807-d1764082-Reviews-Scorpio_Divers_Tours-Cancun_Yucatan_Peninsula.html">\n                Check out our reviews at Trip Advisor\n              </a>\n          </ion-card-title >\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n\n    <ion-col col-12 col-lg-7>\n      <img class="round" src="../../assets/imgs/scorp2.jpg">  \n    \n    </ion-col>\n\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/contact/contact.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScubaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
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
            selector: 'page-scuba',template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/scuba/scuba.html"*/'<!--\n  Generated template for the ScubaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle> <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Scuba</ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="content-background">\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-card justify-content-center color="primary-pale">\n       \n        <ion-card-title color="card-title" padding>The BEST and SAFEST Scuba Diving for you SINCE 2009!</ion-card-title>\n        <ion-card-content class="ion-text-justify" color="card-content">We a lot to offer. From beginners to advance, theres a dive for all</ion-card-content>\n        \n        <ion-row>\n\n          <ion-col col-12 col-lg-6>\n            <ion-row>\n              <ion-col>\n                <ion-icon style="zoom:4.0;" color="green-dark" name=checkmark-circle-outline></ion-icon>\n                <ion-card-title color="card-title">Small Dive Groups</ion-card-title>\n                <ion-card-content color="card-content">ALL of our dive groups are a ratio of 4:1 or less!</ion-card-content>\n              </ion-col>\n\n              <ion-col>\n                <ion-icon style="zoom:4.0;" color="red-dark" name=globe></ion-icon>\n                <ion-card-title color="card-title">Variety of Places</ion-card-title>\n                <ion-card-content color="card-content">From the MUSA to Cozumel. We have 200+ dive sites.</ion-card-content>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n\n          <ion-col col-12 col-lg-6>\n            <ion-row>\n\n              <ion-col>\n                <ion-icon style="zoom:4.0;" color="blue-dark" name=settings></ion-icon>\n                <ion-card-title color="card-title">Professional Crew</ion-card-title>\n                <ion-card-content color="card-content">We just employ the best in the region. All the crew have 4000+ dives in the area at least.</ion-card-content>\n              </ion-col>\n\n              <ion-col>\n                <ion-icon style="zoom:4.0;" color="orange-dark" name=help-buoy></ion-icon>\n                <ion-card-title color="card-title">Safety</ion-card-title>\n                <ion-card-content color="card-content">All our crew are the best. Our main focus is safety for you and your family.</ion-card-content>\n              </ion-col>\n\n            </ion-row>\n          </ion-col>\n\n        </ion-row>\n\n      </ion-card>\n    </ion-row>\n    <ion-row align-items-center>\n\n      <ion-col col-12 col-lg-6>\n        <img src="../../assets/imgs/sdi.png">\n      </ion-col>\n        \n      <ion-col col-12 col-lg-6>\n        <img src="../../assets/imgs/cozumel.png"> To be replaced with information on the type of dive certifications available\n\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n        <ion-card justify-content-center color="primary-pale">\n          <ion-card-title color="card-title" padding>The BEST and SAFEST Scuba Diving for you SINCE 2009!</ion-card-title>\n          <ion-card-content color="card-content">We a lot to offer. From beginners to advance, theres a dive for all</ion-card-content>\n        </ion-card>\n    </ion-row>  \n\n    <ion-row align-items-center>\n\n      <ion-col col-12 col-lg-6>\n        <img src="../../assets/imgs/cancun.png">\n        </ion-col>\n        \n        <ion-col col-12 col-lg-6>\n        <img src="../../assets/imgs/cozumel.png">\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/scuba/scuba.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ScubaPage);
    return ScubaPage;
}());

//# sourceMappingURL=scuba.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact/contact.module": [
		276,
		4
	],
	"../pages/questions/questions.module": [
		273,
		3
	],
	"../pages/reserve/reserve.module": [
		274,
		2
	],
	"../pages/scuba/scuba.module": [
		277,
		1
	],
	"../pages/tours/tours.module": [
		275,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reserve_reserve__ = __webpack_require__(50);
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
    HomePage.prototype.goToReserve = function (event) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reserve_reserve__["a" /* ReservePage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle> <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About Scorpio</ion-title> \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="content-background" >\n\n  <ion-grid>\n\n    <ion-row align-items-center> <!-- Scuba MUSA -->\n\n      <ion-col col-12 col-lg-6>\n        <img src="../../assets/imgs/scorpio.png">\n      </ion-col>\n\n      <ion-col col-12 col-lg-6 >\n        <ion-card color="primary-pale">\n          <ion-card-title color="card-title" padding>Scuba Diving experts SINCE 2009, Ideal for Beginners and Certified divers! Dive MUSA, Cancun, Cozumel, Cenotes</ion-card-title>\n          <ion-card-content color="card-content" >SAFETY is our main concern. Groups of 4 divers per Instructor, experience a safe and personalized dive. Visit the best sites this area has with the most professional, trainned and Certified staff Mexico offers</ion-card-content>\n        </ion-card>\n      </ion-col>\n      \n      \n\n    </ion-row>\n    \n    <ion-row align-items-center> <!-- Trip advisor -->\n\n      <ion-col col-12 col-lg-6>\n        \n            <a href="https://www.tripadvisor.com/Attraction_Review-g150807-d1764082-Reviews-Scorpio_Divers_Tours-Cancun_Yucatan_Peninsula.html">\n              <img src="../../assets/imgs/tripa.gif">\n            </a>\n          <ion-card color="primary-pale">\n            <ion-card-content>\n              <ion-card-title color="card-title">\n                  <a href="https://www.tripadvisor.com/Attraction_Review-g150807-d1764082-Reviews-Scorpio_Divers_Tours-Cancun_Yucatan_Peninsula.html">\n                    Check out our reviews at Trip Advisor\n                  </a>\n              </ion-card-title >\n            </ion-card-content>\n          </ion-card>\n      </ion-col>\n      \n      <ion-col col-12 col-lg-6>\n        <img src="../../assets/imgs/cozumel.png">\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row padding class="fish-background"> <!-- 8000 happy customers-->\n      <ion-col color="primary-pale">\n        <div>\n            <h2 style="color:white;">8000+ Happy Customers</h2>\n            <h5 style="color:white;">We\'d love for you to be the next one!</h5>\n            <p style="color:white;">\n                Since 2009, we have worked daily to bring you the best scuba diving in the region. Stay in Cancun and dive: Cozumel, Cancun, Cenotes and more! We are amongst the few companies that are certified by the NOM14TUR16 in Mexico.\n            </p>\n            <a href="mailto:scorpiodivers@gmail.com"><button ion-button color="secondary">Ask us a question</button></a>\n            <button (click)="goToReserve($event)"ion-button color="secondary">GO DIVING TODAY</button>\n        </div>\n      </ion-col>\n    </ion-row>\n      \n    <ion-row  padding justify-content-center> <!-- Best and Safest -->\n      <h3>Staff</h3>\n    </ion-row>\n    <ion-row justify-content-center>\n      <h5>Each member has years and thousands of dives to bring you the safest and best the area offers. We work as a Team and believe our divers become our family. We are always here to help you!</h5>\n    </ion-row>\n\n    <ion-row>\n\n    </ion-row>\n\n  \n</ion-grid>\n\n<ion-fab right bottom>\n    <button ion-fab color="accent"><ion-icon name="arrow-dropup"></ion-icon></button>\n    <ion-fab-list side="top">\n      \n      <a href="mailto:scorpiodivers@gmail.com"><button ion-fab class="btn-mail"><ion-icon name="mail"></ion-icon></button></a>\n      <a href="https://www.youtube.com/user/ScorpioDivers"><button ion-fab class="btn-youtube"><ion-icon name="logo-youtube"></ion-icon></button></a>\n      <a href="https://twitter.com/ScorpioDivers"><button ion-fab class="btn-twitter"><ion-icon name="logo-twitter"></ion-icon></button></a>\n      <a href="https://www.facebook.com/ScorpioDivers"><button ion-fab class="btn-facebook"><ion-icon name="logo-facebook"></ion-icon></button></a>\n    </ion-fab-list>\n</ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_scuba_scuba__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tours_tours__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_reserve_reserve__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_questions_questions__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(197);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_questions_questions__["a" /* QuestionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/questions/questions.module#QuestionsPageModule', name: 'QuestionsPage', segment: 'questions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reserve/reserve.module#ReservePageModule', name: 'ReservePage', segment: 'reserve', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tours/tours.module#ToursPageModule', name: 'ToursPage', segment: 'tours', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.module#ContactPageModule', name: 'ContactPage', segment: 'contact', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scuba/scuba.module#ScubaPageModule', name: 'ScubaPage', segment: 'scuba', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_9__pages_questions_questions__["a" /* QuestionsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_scuba_scuba__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tours_tours__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_reserve_reserve__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__ = __webpack_require__(102);
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
            { title: 'Reserve + Excursion Info', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_7__pages_reserve_reserve__["a" /* ReservePage */] },
            { title: 'Contact', icon: 'contact', component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact__["a" /* ContactPage */] },
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__questions_questions__ = __webpack_require__(100);
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
 * Generated class for the ReservePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReservePage = /** @class */ (function () {
    function ReservePage(navCtrl, navParams, 
        // public viewCtrl: ViewController,    // This ensures the page can be imported as a modal
        formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.tncsForm = this.formBuilder.group({
            Accept: [false, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern('true')]
        });
    }
    ReservePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReservePage');
    };
    ReservePage.prototype.goToQuestions = function (event) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__questions_questions__["a" /* QuestionsPage */]);
    };
    ReservePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reserve',template:/*ion-inline-start:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/reserve/reserve.html"*/'<!--\n  Generated template for the ReservePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle> <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Reserve Now</ion-title> \n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n\n      <ion-row > <!-- Blurbs -->\n        <ion-col col-12 col-lg-4 >\n          <ion-card color="primary-pale">\n            <ion-card-title color="card-title" padding>Cancun Blurb</ion-card-title>\n            <ion-card-content color="card-content">SAFETY is our main concern. Groups of 4 divers per Instructor, experience a safe and personalized dive. Visit the best sites this area has with the most professional, trainned and Certified staff Mexico offers</ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-col col-12 col-lg-4 >\n          <ion-card color="primary-pale">\n            <ion-card-title color="card-title" padding>Cozumel Blurb</ion-card-title>\n            <ion-card-content color="card-content">SAFETY is our main concern. Groups of 4 divers per Instructor, experience a safe and personalized dive. Visit the best sites this area has with the most professional, trainned and Certified staff Mexico offers</ion-card-content>\n          </ion-card>\n        </ion-col>\n\n        <ion-col col-12 col-lg-4 >\n          <ion-card color="primary-pale">\n            <ion-card-title color="card-title" padding>Whaleshark Blurb</ion-card-title>\n            <ion-card-content color="card-content">SAFETY is our main concern. Groups of 4 divers per Instructor, experience a safe and personalized dive. Visit the best sites this area has with the most professional, trainned and Certified staff Mexico offers</ion-card-content>\n          </ion-card>\n        </ion-col>\n\n      </ion-row>\n\n      <div> <!-- TnCs Block-->\n        <h3 >Terms and Conditions</h3>\n      \n      \n        <p>\n          Please read these thoroughly, we aren\'t responsible for your ignorance.\n        </p>\n        <ul>\n          <li padding> A PayPal invoice with a deposit for the full amount will be sent via email, if paying via cash, this deposit can be refunded the day of the activity. Until paid reservation cannot be confirmed nor held. Setting up a PayPal account is very easy and takes 5mins.Any payment that is not cash, will enquire on a +5% added fee. Credit Cards accepted via PayPal only, there\'s a +5% added fee. </li>\n          <li padding> Marine Park tax is separate to any package fees and must be paid in cash on the day of the dive separately ($40pesos). If booked a tour/activity with Scorpio Divers, you are subject to pay for the service hired.</li>\n          <li padding> Dive skills: We cannot be held responsible for lack of dive skills, how ever if needed extra attention, private Guiding can be offered or arranged for an extra fee. Please contact us for further details.</li>\n          <li padding> Weather: We are not responsible for the weather. If put of our experience we evaluate the weather conditions and decide it is safe, divers are subject to a full fee. If port is closed or we decide conditions are hazardous, we will reschedule your activities with us. If reschedule is not possible, we will reimburse your deposit.</li>\n          <li padding> Health requirements: By accepting and booking our services you acknowledge you are in a fit form to Scuba Dive. Failure to do so, will enquire in a full payment of package booked and services will not be provided by safety reasons. We will never risk any diver/person. It is requiered: - NO asthma. - NO high blood pressure. If taking any heart medication, this must be accompanied by a Doctors release specific for Scuba Diving of no more than 10 working days. Failure to do so, will enquire in a full payment of package booked and services will not be provided by safety reasons. We will never risk any diver/person.</li>\n          <li padding> Cancelations: Cancelations within a 48hr window are subject to full fee. Private charter cancelations are subject to full fee unless agreed with Jorge Tapia. Deposits are non refundable unless agreed at special individual cases with Jorge Tapia. <br>Cancelation exceptions: If provided a medical receipt from a local authorized doctor or hospital, we will reimburse the money paid for the canceled scheduled activity. Failure to provide so, will enquire in a full fee to be retained by Scorpio Divers.</li>\n          <li padding> Forgotten gear: We are not responsible for any forgotten items. Gear storage: We are not responsible for lost or stolen gear. Please do bring a lock for your bag if storing it with us.</li>\n\n        </ul>\n      </div>\n\n      \n        \n        <h2> Booking Section</h2>\n\n        <ion-col col-12 col-lg-6>\n          <h3 padding>How to Book</h3>\n          <ol>\n            <li padding>\n              A deposit for the excursions that you wish to take is to be sent via paypal using the link below. \n              Please ensure that a deposit is paid for each trip each member of your party wishes to take. \n              If you wish to pay by cash, the deposit will be refunded the day of your activity.\n              Until the deposit is paid reservation cannot be confirmed nor held.\n            </li>\n            <li padding>\n              Please then ensure that each member of your party fills in the predive information questionnaire.\n              This is to ensure we provide you the best service that we can.\n            </li>\n          </ol>\n        </ion-col>\n\n        <ion-item>\n          <ion-label text-wrap>Please click if you accept the above Terms and Conditions to proceed with our booking process.</ion-label>\n          <ion-checkbox color="primary" (click)="isActive = !isActive" [(ngModel)]="tocaccepted"></ion-checkbox>\n        </ion-item>\n      \n     \n\n\n\n      <div *ngIf="tocaccepted">\n        \n        <ion-row align-items-center> <!-- PayPal and Picture -->\n\n         \n\n\n          <ion-col col-12 col-lg-6>  \n              <iframe width="600" height="" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="../assets/mybuttonpage1.htm"></iframe>\n           \n            \n              <h3 style="text-align:left">Step 2</h3>\n              <button  (click)="goToQuestions($event)" ion-button secondary>Fill in your <br>predive information</button>\n            \n          </ion-col>\n      \n          <ion-col col-12 col-lg-6>\n            <img src="../../assets/imgs/cancun.png">\n          </ion-col>\n\n        </ion-row>\n\n        \n        <ion-row> <!-- Have you read? and go to questionaire -->\n          <ion-col col-12 col-lg-6>\n            <ion-row justify-content-center>\n\n            </ion-row>\n          </ion-col>\n        </ion-row>\n        \n      \n      </div>\n      \n      <div>\n        \n          <h2 padding> Excursion Information Section</h2>\n          <h3 padding>Read this page as it will help you with your logistics on the day.</h3>\n  \n          <div>\n              <ul>\n                <li>Cancun dives meeting point is at Marina located inside Hotel SOTAVENTO, km4, behind hotel Calypso, on the lagoon side, in "Pescador" street. </li>\n                <li>Googlemaps has us on the spot. <a href="https://www.google.com.mx/maps/place/Scorpio+Divers/@21.1431699,-86.791 6328,17z/data=!4m2!3m1!1s0x8f4c2e8a62668935:0xebed254cb0baf3a4?hl=en">Google Maps Link</a> </li>\n                <li> Once in Sotavento hotel, walk inside to the pool, crew are waiting :)</li>\n                <li>Meeting time for Cancun morning dives: 8:30am back 1pm (deeper reefs) </li>\n                <li>Meeting time for Cancun afternoon dives: 12:30pm back 4:30pm (shallow reefs)</li>\n                <li>Cancún night dive time confirmed closer to date due to daylight changing here. </li>\n                <li>Cozumel dives include transportation from hotel, pickup 7:20am back 3:30pm.</li>\n                    <br>\n\n                <li>If paying fully via PayPal let us know to update the invoice for the full amounts. <br>\n                    Our contact information can be found on the Contact page.  </li>\n                <li>Please read our TOS for any doubts on refunds.\n                    AMEX, VISA and MasterCard accepted via PayPal, 5% bank fee applies if paying via this method.\n                    USD cash accepted, no extra fees :)</li>\n                <li>We don’t rent dive computers, dives are supervised and guided by our staff.</li>\n \n                <li>Give us a Facebook-Like and get the coolest info!:<br>\n                  <a color="primary-dark"  href="https://www.facebook.com/ScorpioDivers"><img src="../../assets/imgs/scorplogo.png"></a>\n\n                  </li>\n                  <li>  Check amazing pics in our Insta: @ScorpioDivers</li>\n                  <li>Tips are not included in the service BY LAW and are 100% voluntary. Tipping is customary in Mexico when service was of satisfaction.</li>\n                  <li>  WEATHER:<br>\n                    We get asked every time on the weather. Real forecasts are only 5 days prior accurate. Anything further from there is speculation. <br>\n                    Most weather apps show storms and end of worlds, while we have the sun and are out enjoying the ocean. <br>\n                    Here\'s some links that can help have a better view of the weather here. Enjoy! Anything: we will advise ASAP :) <br>                    \n                    <a href="http://www.webcamsdemexico.com/webcam-punta-cancun"> Click here for live Webcams</a>\n                    Marine forecast websites:<br>\n                    <a href="https://www.windguru.cz/72791"> Weather link 1</a> <br>\n                    <a href="https://www.windytv.com/?clouds,21.171,-86.840,9"> Weather Link 2</a></li>\n                    <li>To get here:<br>\n                      <ul>\n                        <li>BUS. $10 mexican Pesos.</li>\n                        <li>Taxi, varies from $12 to $25usd.</li>\n                        <li>Bus: There is only 1 street  in the hotel zone. Kukulkan Boulevard, goes up and down and its measured by Kms. We are in km 4, in a small street lagoon side called "Pescador Street". Behind hotel Calypso.</li>\n                        <li>In high season, the bus can take a bit longer due to many stops, but calculate per 10kms 10/15mins travel time. Taxi is quick and direct, but much more expensive.</li>\n                    </ul>\n                    <li>By booking with us, you accept and acknowledge our TOS and accept you are hiring the services offered by Scorpio Divers and its commercial partners.</li>\n                    <!--<li>Do you log your dives???? Help save some paper and use this awesome App!: <br>\n                      iOS: http://www.iscubatoo.com/ios\n                      Android: http://www.iscubatoo.com/android</li>-->\n                    <li>Cancún Marine Park has a fee of $30pesos per person. This is paid separately and on site. It is a government requirement. Please bring exact cash for this tax, thank you.</li>\n                           \n                    <li>YOU CANNOT DIVE AND FLY THE SAME DAY. After diving you need at least 18hours between getting out of the water and flying. Check your flight times.</li>\n                    <li>Scorpio Divers cannot control the weather. Some dives may get canceled for your safety. We ask of understanding on this as we keep an eye out for you when with us.</li>\n                    <li>Thank you for your patience and we see you soon diving!!</li>\n                    <li>In the case a factura is needed, 16% will be added to it, and we’d need full RFC and use of CDFI as well with all details to elaborate it.</li>\n                    <li>CreditCards accepted via PayPal only . (5% bank fee applies)</li>\n                \n                \n              </ul>\n          </div>\n        \n        </div>\n        \n      <ion-row align-items-center > <!-- Trip and Diver Images -->\n  \n        <ion-col col-12 col-lg-6>\n          <img src="../../assets/imgs/scorpio.png">\n        </ion-col>\n\n        <ion-col col-12 col-lg-6>\n                 \n            <a href="https://www.tripadvisor.com/Attraction_Review-g150807-d1764082-Reviews-Scorpio_Divers_Tours-Cancun_Yucatan_Peninsula.html">\n              <img src="../../assets/imgs/tripa.gif">\n            </a>\n          <ion-card color="primary-pale">\n            <ion-card-content>\n              <ion-card-title color="card-title">\n                  <a href="https://www.tripadvisor.com/Attraction_Review-g150807-d1764082-Reviews-Scorpio_Divers_Tours-Cancun_Yucatan_Peninsula.html">\n                    Check out our reviews at Trip Advisor\n                  </a>\n              </ion-card-title >\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      \n      </ion-row>\n      \n      <!-- Diver Images 2 with trip advisor\n      <ion-row align-items-center> \n    \n        <ion-col col-12 col-lg-6>\n          <img src="../../assets/imgs/diver.png">\n        </ion-col>\n          \n        <ion-col col-12 col-lg-6>\n            <ion-card >\n              <a href="https://www.tripadvisor.com/Attraction_Review-g150807-d1764082-Reviews-Scorpio_Divers_Tours-Cancun_Yucatan_Peninsula.html">\n                <img src="../../assets/imgs/tripa.gif">\n              </a>\n      \n              <ion-card-content>\n                <ion-card-title color="primary">\n                  Check out our reviews at Trip Advisor\n                </ion-card-title >\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n    \n      </ion-row>\n      -->\n      \n  </ion-grid>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/Eskieclunge/Documents/Github/ScorpioDivers/Scorpio/src/pages/reserve/reserve.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], ReservePage);
    return ReservePage;
}());

//# sourceMappingURL=reserve.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map