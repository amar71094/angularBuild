webpackJsonp(["take.survey.module"],{

/***/ "./node_modules/ng2-slim-loading-bar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlimLoadingBarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_slim_loading_bar_component__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/src/slim-loading-bar.component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_slim_loading_bar_service__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/src/slim-loading-bar.service.js");
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_slim_loading_bar_service__["b"]; });
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar





var SlimLoadingBarModule = (function () {
    function SlimLoadingBarModule() {
    }
    SlimLoadingBarModule.forRoot = function () {
        return {
            ngModule: SlimLoadingBarModule,
            providers: [__WEBPACK_IMPORTED_MODULE_2__src_slim_loading_bar_service__["b" /* SlimLoadingBarService */]]
        };
    };
    SlimLoadingBarModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [__WEBPACK_IMPORTED_MODULE_1__src_slim_loading_bar_component__["a" /* SlimLoadingBarComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_1__src_slim_loading_bar_component__["a" /* SlimLoadingBarComponent */]],
                    providers: [__WEBPACK_IMPORTED_MODULE_2__src_slim_loading_bar_service__["b" /* SlimLoadingBarService */]]
                },] },
    ];
    /** @nocollapse */
    SlimLoadingBarModule.ctorParameters = function () { return []; };
    return SlimLoadingBarModule;
}());


/***/ }),

/***/ "./node_modules/ng2-slim-loading-bar/src/slim-loading-bar.component.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlimLoadingBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slim_loading_bar_service__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/src/slim-loading-bar.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slim_loading_bar_utils__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/src/slim-loading-bar.utils.js");
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar



/**
 * A Slim Loading Bar component shows message loading progress bar on the top of web page or parent component.
 */
var SlimLoadingBarComponent = (function () {
    function SlimLoadingBarComponent(service) {
        this.service = service;
        this.progress = '0';
        this.color = 'firebrick';
        this.height = '2px';
        this.show = true;
    }
    SlimLoadingBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.events.subscribe(function (event) {
            if (event.type === __WEBPACK_IMPORTED_MODULE_1__slim_loading_bar_service__["a" /* SlimLoadingBarEventType */].PROGRESS && Object(__WEBPACK_IMPORTED_MODULE_2__slim_loading_bar_utils__["a" /* isPresent */])(event.value)) {
                _this.progress = event.value;
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_1__slim_loading_bar_service__["a" /* SlimLoadingBarEventType */].COLOR) {
                _this.color = event.value;
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_1__slim_loading_bar_service__["a" /* SlimLoadingBarEventType */].HEIGHT) {
                _this.height = event.value;
            }
            else if (event.type === __WEBPACK_IMPORTED_MODULE_1__slim_loading_bar_service__["a" /* SlimLoadingBarEventType */].VISIBLE) {
                _this.show = event.value;
            }
        });
    };
    SlimLoadingBarComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'ng2-slim-loading-bar',
                    template: "\n<div class=\"slim-loading-bar\">\n    <div class=\"slim-loading-bar-progress\" [style.width]=\"progress + '%'\" [style.backgroundColor]=\"color\" [style.color]=\"color\"\n        [style.height]=\"height\" [style.opacity]=\"show ? '1' : '0'\"></div>\n</div>"
                },] },
    ];
    /** @nocollapse */
    SlimLoadingBarComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__slim_loading_bar_service__["b" /* SlimLoadingBarService */], },
    ]; };
    SlimLoadingBarComponent.propDecorators = {
        'progress': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'color': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'height': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'show': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return SlimLoadingBarComponent;
}());


/***/ }),

/***/ "./node_modules/ng2-slim-loading-bar/src/slim-loading-bar.service.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlimLoadingBarEventType; });
/* unused harmony export SlimLoadingBarEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SlimLoadingBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slim_loading_bar_utils__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/src/slim-loading-bar.utils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-slim-loading-bar



var SlimLoadingBarEventType;
(function (SlimLoadingBarEventType) {
    SlimLoadingBarEventType[SlimLoadingBarEventType["PROGRESS"] = 0] = "PROGRESS";
    SlimLoadingBarEventType[SlimLoadingBarEventType["HEIGHT"] = 1] = "HEIGHT";
    SlimLoadingBarEventType[SlimLoadingBarEventType["COLOR"] = 2] = "COLOR";
    SlimLoadingBarEventType[SlimLoadingBarEventType["VISIBLE"] = 3] = "VISIBLE";
})(SlimLoadingBarEventType || (SlimLoadingBarEventType = {}));
var SlimLoadingBarEvent = (function () {
    function SlimLoadingBarEvent(type, value) {
        this.type = type;
        this.value = value;
    }
    return SlimLoadingBarEvent;
}());
/**
 * SlimLoadingBar service helps manage Slim Loading bar on the top of screen or parent component
 */
var SlimLoadingBarService = (function () {
    function SlimLoadingBarService() {
        this._progress = 0;
        this._height = '2px';
        this._color = 'firebrick';
        this._visible = true;
        this._intervalCounterId = 0;
        this.interval = 500; // in milliseconds
        this.eventSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.events = this.eventSource.asObservable();
    }
    Object.defineProperty(SlimLoadingBarService.prototype, "progress", {
        get: function () {
            return this._progress;
        },
        set: function (value) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__slim_loading_bar_utils__["a" /* isPresent */])(value)) {
                if (value > 0) {
                    this.visible = true;
                }
                this._progress = value;
                this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.PROGRESS, this._progress));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimLoadingBarService.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__slim_loading_bar_utils__["a" /* isPresent */])(value)) {
                this._height = value;
                this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.HEIGHT, this._height));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimLoadingBarService.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__slim_loading_bar_utils__["a" /* isPresent */])(value)) {
                this._color = value;
                this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.COLOR, this._color));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SlimLoadingBarService.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__slim_loading_bar_utils__["a" /* isPresent */])(value)) {
                this._visible = value;
                this.emitEvent(new SlimLoadingBarEvent(SlimLoadingBarEventType.VISIBLE, this._visible));
            }
        },
        enumerable: true,
        configurable: true
    });
    SlimLoadingBarService.prototype.emitEvent = function (event) {
        if (this.eventSource) {
            // Push up a new event
            this.eventSource.next(event);
        }
    };
    SlimLoadingBarService.prototype.start = function (onCompleted) {
        var _this = this;
        if (onCompleted === void 0) { onCompleted = null; }
        // Stop current timer
        this.stop();
        // Make it visible for sure
        this.visible = true;
        // Run the timer with milliseconds iterval
        this._intervalCounterId = setInterval(function () {
            // Increment the progress and update view component
            _this.progress++;
            // If the progress is 100% - call complete
            if (_this.progress === 100) {
                _this.complete();
            }
        }, this.interval);
    };
    SlimLoadingBarService.prototype.stop = function () {
        if (this._intervalCounterId) {
            clearInterval(this._intervalCounterId);
            this._intervalCounterId = null;
        }
    };
    SlimLoadingBarService.prototype.reset = function () {
        this.stop();
        this.progress = 0;
    };
    SlimLoadingBarService.prototype.complete = function () {
        var _this = this;
        this.progress = 100;
        this.stop();
        setTimeout(function () {
            // Hide it away
            _this.visible = false;
            setTimeout(function () {
                // Drop to 0
                _this.progress = 0;
            }, 250);
        }, 250);
    };
    SlimLoadingBarService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    SlimLoadingBarService.ctorParameters = function () { return []; };
    return SlimLoadingBarService;
}());


/***/ }),

/***/ "./node_modules/ng2-slim-loading-bar/src/slim-loading-bar.utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isPresent;
/**
 * Check and return true if an object not undefined or null
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}


/***/ }),

/***/ "./src/app/routes/take-survey/custom.end.page/custom.end.page.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"(custType != 'end') && !(custType == 'disqua' && custInfo['custDisqua'].type == 2)\">\n  <div class=\"custom-page-div\">\n    <div [ngStyle]=\"surveyTheme?.body\">\n      <div class=\"msg_body\">\n        {{message}}\n      </div>\n      <div style=\"text-align:center;\">\n        <input [ngStyle]=\"pageTheme?.doneBtn\" type=\"Button\" [value]=\"(surveyBody.endBtn)?(surveyBody.endBtn):(surveyBody.done)\" (click)=\"doneClick()\">\n      </div>\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/routes/take-survey/custom.end.page/custom.end.page.component.scss":
/***/ (function(module, exports) {

module.exports = ".custom-page-div {\n  padding: 0px 10px;\n  max-width: 896px;\n  margin: auto;\n  text-align: center; }\n\n.msg_body {\n  padding: 100px 0px; }\n"

/***/ }),

/***/ "./src/app/routes/take-survey/custom.end.page/custom.end.page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomEndPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_take_survey_service__ = __webpack_require__("./src/app/routes/take-survey/services/take.survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_survey_options_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_constants_service__ = __webpack_require__("./src/app/shared/services/constants.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomEndPageComponent = (function () {
    function CustomEndPageComponent(route, router, takeSurvey, optionsServ, services, consServ) {
        this.route = route;
        this.router = router;
        this.takeSurvey = takeSurvey;
        this.optionsServ = optionsServ;
        this.services = services;
        this.consServ = consServ;
        this.message = "";
    }
    CustomEndPageComponent.prototype.ngOnInit = function () {
        this.surveyTheme = this.services.form.formObj.theme.getThemeCssObj().survey;
        this.surveyBody = this.services.form.formObj.getSurvey();
        // console.log("this.surveyTheme",this.surveyTheme)
        this.pageTheme = this.services.form.formObj.getPageFields()[0].getCssObj(this.services.form.formObj.theme);
        // console.log("this.pageTheme",this.pageTheme)
        if (this.custType == "disqua") {
            if (this.custInfo['custDisqua'].type == 0) {
                this.message = this.custInfo['custDisqua'].stMsg;
            }
            else if (this.custInfo['custDisqua'].type == 1) {
                this.message = this.custInfo['custDisqua'].message;
            }
            else if (this.custInfo['custDisqua'].type == 2) {
                try {
                    PageFinish.onPageFinish(this.custInfo['custDisqua'].type);
                }
                catch (error) {
                    console.log("Android call\n", error);
                }
                try {
                    // setupWebViewJavascriptBridge(function(bridge) {
                    //     bridge.callHandler('success', "@IOS success callback");
                    // });
                    webkit.messageHandlers.success.postMessage({
                        "success": true
                    });
                }
                catch (error) {
                    console.log("IOS call\n ", error);
                }
                // console.log("this.custInfo['custDisqua'].url",this.custInfo['custDisqua'].url)
                window.location.href = (!this.custInfo['custDisqua'].url.match(/^[a-zA-Z]+:\/\//)) ? ('http://' + this.custInfo['custDisqua'].url) : this.custInfo['custDisqua'].url;
                throw new Error('Page redirection');
            }
            // set done button redirection based on what we get
        }
        else if (this.custType == "thank") {
            if (this.custInfo['custThx'].type == 0) {
                this.message = this.custInfo['custThx'].stMsg;
            }
            else if (this.custInfo['custThx'].type == 1) {
                this.message = this.custInfo['custThx'].message;
            }
        }
        else if (this.custType == "end") {
            try {
                PageFinish.onPageFinish(this.custInfo['custEnd'].type);
            }
            catch (error) {
                console.log("Android call\n ", error);
            }
            try {
                // setupWebViewJavascriptBridge(function(bridge) {
                //     bridge.callHandler('success', "@IOS success callback");
                // });
                webkit.messageHandlers.success.postMessage({
                    "success": true
                });
            }
            catch (error) {
                console.log("IOS call\n ", error);
            }
            if (this.custInfo['custEnd'].type == 0) {
                window.location.href = this.consServ.apiUrl + this.custInfo['link'];
                throw new Error('Page redirection');
            }
            else if (this.custInfo['custEnd'].type == 1) {
                window.location.href = (!this.custInfo['custEnd'].url.match(/^[a-zA-Z]+:\/\//)) ? ('http://' + this.custInfo['custEnd'].url) : this.custInfo['custEnd'].url;
                throw new Error('Page redirection');
            }
            else if (this.custInfo['custEnd'].type == 2 || this.custInfo['custEnd'].type == 4) {
                window.location.href = (!this.custInfo['custEnd'].stUrl.match(/^[a-zA-Z]+:\/\//)) ? ('http://' + this.custInfo['custEnd'].stUrl) : this.custInfo['custEnd'].stUrl;
                throw new Error('Page redirection');
            }
        }
    };
    CustomEndPageComponent.prototype.doneClick = function () {
        try {
            if (this.custType == "disqua")
                PageFinish.onPageFinish(this.custInfo['custEnd'].type);
            if (this.custType == "thank")
                PageFinish.onPageFinish(this.custInfo['custThx'].type);
        }
        catch (error) {
            console.log("Android call\n", error);
        }
        try {
            // setupWebViewJavascriptBridge(function(bridge) {
            //     bridge.callHandler('success', "@IOS success callback");
            // });
            webkit.messageHandlers.success.postMessage({
                "success": true
            });
        }
        catch (error) {
            console.log("IOS call\n ", error);
        }
        if (this.custType == "disqua") {
            if (this.custInfo['custEnd'].type == 2) {
                window.location.href = "http://survey2connect.com/ThankYou";
                throw new Error('Page redirection');
            }
            else if (this.custInfo['custEnd'].type == 1) {
                window.location.href = (!this.custInfo['custEnd'].url.match(/^[a-zA-Z]+:\/\//)) ? ('http://' + this.custInfo['custEnd'].url) : this.custInfo['custEnd'].url;
                throw new Error('Page redirection');
            }
            else if (this.custInfo['custEnd'].type == 0) {
                window.location.href = window.location.href;
                throw new Error('Page redirection');
            }
        }
        if (this.custType == "thank") {
            if (this.custInfo['custEnd'].type == 0) {
                window.location.href = this.consServ.apiUrl + this.custInfo['link'];
                throw new Error('Page redirection');
            }
            else if (this.custInfo['custEnd'].type == 1) {
                window.location.href = (!this.custInfo['custEnd'].url.match(/^[a-zA-Z]+:\/\//)) ? ('http://' + this.custInfo['custEnd'].url) : this.custInfo['custEnd'].url;
                throw new Error('Page redirection');
            }
            else if (this.custInfo['custEnd'].type == 2) {
                window.location.href = (!this.custInfo['custEnd'].stUrl.match(/^[a-zA-Z]+:\/\//)) ? ('http://' + this.custInfo['custEnd'].stUrl) : this.custInfo['custEnd'].stUrl;
                throw new Error('Page redirection');
            }
        }
    };
    return CustomEndPageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CustomEndPageComponent.prototype, "custInfo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CustomEndPageComponent.prototype, "custType", void 0);
CustomEndPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-custom-end-page',
        template: __webpack_require__("./src/app/routes/take-survey/custom.end.page/custom.end.page.component.html"),
        styles: [__webpack_require__("./src/app/routes/take-survey/custom.end.page/custom.end.page.component.scss"), __webpack_require__("./src/app/routes/take-survey/take.survey.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_take_survey_service__["a" /* TakeSurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_take_survey_service__["a" /* TakeSurveyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_survey_options_service__["a" /* SurveyOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_survey_options_service__["a" /* SurveyOptionsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_services_module__["a" /* SharedServices */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_constants_service__["a" /* ConstantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_constants_service__["a" /* ConstantsService */]) === "function" && _f || Object])
], CustomEndPageComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=custom.end.page.component.js.map

/***/ }),

/***/ "./src/app/routes/take-survey/page/page.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"page\">\n  <div [ngStyle]=\"pageTheme?.body\">\n    <div class=\"s2c-page-header\">\n      <div *ngIf=\"surveyOptions.setting.showPTitle && page\" [ngStyle]=\"pageTheme?.header\">\n        <div [ngStyle]=\"pageTheme?.title\" class=\"page-title break_words\">\n          <p innerHTML=\"{{page.title || ''}}\"></p>\n        </div>\n        <div class=\"page-description break_words\" [ngStyle]=\"pageTheme?.desc\">\n          <p innerHTML=\"{{page.desc || ''}}\"></p>\n        </div>\n      </div>\n      <!-- <div class=\"box\" [@scrollAnimation]=\"state\">\n        <img src=\"https://images.pexels.com/photos/37547/suit-business-man-business-man-37547.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb\">\n      </div> -->\n    </div>\n    <div class=\"page-body\">\n      <div class=\"questions-div\">\n        <div class=\"inner-question-div\" *ngFor=\"let question of page?.formFields;index as Idx\" (click)=\"goToQuestion($event, question._id, Idx)\">\n          <survey-question [question]=\"question\" [nexQId]=\"(page?.formFields[Idx+1]?page?.formFields[Idx+1]._id:'')\" [index]=\"Idx\" [count]=\"qCountObj[question._id]\" [langDirection]=\"langDirection\" (nextPage)=\"nextPage($event)\">\n          </survey-question>\n        </div>\n      </div>\n    </div>\n    <div class=\"page_no\" *ngIf=\"surveyOptions.setting.showPageNumber && innerWidth > 950\">\n      {{surveyOptions.setting.currPageNo}}\n    </div>\n  </div>\n</ng-container>\n"

/***/ }),

/***/ "./src/app/routes/take-survey/page/page.component.scss":
/***/ (function(module, exports) {

module.exports = ".inner-question-div {\n  position: relative; }\n\n.page_no {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/routes/take-survey/page/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_take_survey_service__ = __webpack_require__("./src/app/routes/take-survey/services/take.survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_survey_response_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.response.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_survey_options_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageComponent = (function () {
    function PageComponent(takeSurvey, optionsServ, services, elementRef, responseServ) {
        this.takeSurvey = takeSurvey;
        this.optionsServ = optionsServ;
        this.services = services;
        this.elementRef = elementRef;
        this.responseServ = responseServ;
        this.lastQuesIndex = 0;
        this.page = null;
        this.qCountObj = {};
        this.state = 'hide';
        this.innerWidth = window.innerWidth;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.submitSurvey = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PageComponent.prototype.checkScroll = function (event) {
        this.innerWidth = (event.target.innerWidth) ? event.target.innerWidth : window.innerWidth;
        var componentPosition = this.elementRef.nativeElement.offsetTop;
        var scrollPosition = window.pageYOffset;
        var innerQuestionDiv = this.elementRef.nativeElement.getElementsByClassName('inner-question-div');
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var lastFlag = false;
        if (innerQuestionDiv && innerQuestionDiv.length && ((this.surveyOptions.setting.singleQuesFocusDesktop == 1 && this.innerWidth > 950) || (this.innerWidth <= 950 && this.surveyOptions.setting.singleQuesFocusTabMobile == 1))) {
            for (var i = 0; i < innerQuestionDiv.length; i++) {
                var offsetTop = innerQuestionDiv.item(i).offsetTop - scrollTop;
                var offsetBottom = offsetTop + innerQuestionDiv.item(i).offsetHeight;
                if (offsetTop < 4 * window.innerHeight / 7 && offsetBottom > 3 * window.innerHeight / 7 && this.lastQuesIndex != i) {
                    this.setQuestionStyle(innerQuestionDiv, this.lastQuesIndex, { opacity: .3, 'pointer-events': 'none' });
                    this.setQuestionStyle(innerQuestionDiv, i, { opacity: 1, 'pointer-events': 'auto' });
                    this.lastQuesIndex = i;
                    lastFlag = false;
                    break;
                }
                else if (offsetTop < 0 && innerQuestionDiv.length - 1 == i) {
                    lastFlag = true;
                }
            }
            this.onChange.emit({ "currQIndex": (lastFlag) ? 'last' : this.lastQuesIndex, "totolQs": innerQuestionDiv.length });
            // this.setQuesInFocus(innerQuestionDiv);
            this.elementRef.nativeElement.getElementsByClassName('inner-question-div')[this.lastQuesIndex].focus();
            if (scrollPosition >= componentPosition) {
                this.state = 'show';
            }
            else {
                this.state = 'hide';
            }
        }
        // let currID = document.getElementsByClassName('inner-question-div')[this.lastQuesIndex].getElementsByClassName("question-body overlay")[0]['id'];
        // // if(){
        // let currQfieldType = this.services.form.formObj.getQuestionById(currID).fieldType;
        //
        // if(currQfieldType.family == "matrix"  && currQfieldType.subtype == "ranking" && !lastFlag){
        //   this.disableScroll();
        // }else{
        //   this.enableScroll();
        // }
        // }
    };
    PageComponent.prototype.ngOnInit = function () {
        this.innerWidth = window.innerWidth;
        this.pageInitialisation();
    };
    PageComponent.prototype.ngOnDestroy = function () {
        // if(this.subscription)
        //   this.subscription.unsubscribe();
    };
    PageComponent.prototype.pageInitialisation = function () {
        var _this = this;
        try {
            this.surveyOptions = this.optionsServ.getOptions();
            this.takeSurvey.getPageData().then(function (page) {
                _this.services.form.formObj.removeHiddenQuestions();
                if (page["formFields"] && page["formFields"].length == 0) {
                    _this.pageInitialisation();
                }
                else {
                    _this.page = _this.takeSurvey.translatePage(page) && _this.evalPiping(page);
                    _this.setQuestionNumber();
                    setTimeout(function () {
                        _this.afterGettingPageData();
                    }, 100);
                }
                _this.pageTheme = _this.services.form.formObj.getPageFields()[0].getCssObj(_this.services.form.formObj.theme);
            });
        }
        catch (err) {
            throw err;
        }
    };
    PageComponent.prototype.afterGettingPageData = function () {
        try {
            var innerQuestions = this.elementRef.nativeElement.getElementsByClassName('inner-question-div');
            if (innerQuestions && innerQuestions.length) {
                if ((this.surveyOptions.setting.singleQuesFocusDesktop == 1 && this.innerWidth > 950) || (this.innerWidth <= 950 && this.surveyOptions.setting.singleQuesFocusTabMobile == 1)) {
                    var pageDiv = document.getElementsByClassName('page-body').item(0);
                    var surveyHeader = document.getElementsByClassName('take-survey-header').item(0);
                    var actionButtonLength = document.getElementsByClassName('action-button-scroll').item(0)['offsetHeight'];
                    var surveypageHeaderLength = surveyHeader ? surveyHeader['offsetHeight'] : 0;
                    var pageHeaderLength = document.getElementsByClassName('s2c-page-header').item(0)['offsetHeight'];
                    var mTop = (window.innerHeight - surveypageHeaderLength - pageHeaderLength - innerQuestions.item(0).offsetHeight - actionButtonLength) / 2;
                    console.log("mTop", mTop);
                    // let mTop = (window.innerHeight/2 - (innerQuestions.item(0).offsetHeight/2 + pageHeaderLength + surveypageHeaderLength));
                    // pageDiv['style'].paddingTop = (mTop > 0 ? mTop : 0) + 'px';
                    // if(this.surveyOptions.setting.currPageNo > 1){
                    pageDiv['style'].paddingTop = (mTop > 0 ? mTop : 0) + 'px';
                    // }else{
                    //   pageDiv['style'].paddingTop = '16px';
                    // }
                    var footerLogoLength = (document.getElementsByClassName('logo_footer') && document.getElementsByClassName('logo_footer').item(0)) ? document.getElementsByClassName('logo_footer').item(0)['offsetHeight'] : 0;
                    var footerLogoBotMar = footerLogoLength ? 90 : 0;
                    var mobViewBtnLength = 0;
                    var mbbtnsMarBtn = 0;
                    if (document.getElementsByClassName('survey-page-done') && document.getElementsByClassName('survey-page-done').item(0) && this.innerWidth <= 950) {
                        mobViewBtnLength = document.getElementsByClassName('survey-page-done').item(0)['offsetHeight'];
                        var mbbtns = document.getElementsByClassName('survey-page-done').item(0);
                        mbbtnsMarBtn = window.innerHeight / 2 - footerLogoBotMar - footerLogoLength;
                        mbbtns['style'].marginBottom = mbbtnsMarBtn + "px";
                    }
                    else if (this.innerWidth > 950) {
                        mobViewBtnLength = document.getElementsByClassName('survey-page-footer').item(0)['offsetHeight'];
                        var mbbtns = document.getElementsByClassName('survey-page-footer').item(0);
                        mbbtnsMarBtn = window.innerHeight / 2 - footerLogoBotMar - footerLogoLength;
                        mbbtns['style'].marginBottom = mbbtnsMarBtn + "px";
                    }
                    // console.log("mobViewBtnLength",mobViewBtnLength)
                    // console.log("footerLogoLength",footerLogoLength)
                    // let mBottom = (window.innerHeight/2 - (innerQuestions.item(innerQuestions.length - 1).scrollHeight + actionButtonLength));
                    // pageDiv['style'].paddingBottom = (mBottom > 0 ? mBottom : 0) + (mTop > 0 ? mTop : 0) + 'px';
                    pageDiv['style'].paddingBottom = window.innerHeight - mobViewBtnLength - mbbtnsMarBtn - footerLogoBotMar - footerLogoLength - innerQuestions.item(innerQuestions.length - 1).scrollHeight + 'px';
                    (pageDiv['style'].paddingBottom <= 0) ? (pageDiv['style'].paddingBottom = window.innerHeight - mbbtnsMarBtn - mobViewBtnLength - footerLogoBotMar - footerLogoLength + 'px') : '';
                    this.setQuesInFocus(innerQuestions);
                    this.setQuestionStyle(innerQuestions, this.lastQuesIndex, { opacity: 1, 'pointer-events': 'auto' });
                }
                else {
                    var pageDiv = document.getElementsByClassName('page-body').item(0);
                    pageDiv['style'].paddingTop = '16px';
                    pageDiv['style'].paddingBottom = '16px';
                    if (innerQuestions.length > 1) {
                        for (var i = 0; i < innerQuestions.length; i++) {
                            innerQuestions.item(i)['style'].marginBottom = '48px';
                        }
                    }
                    this.setQuestionStyle(innerQuestions, null, { opacity: 1, 'pointer-events': 'auto' });
                }
                // if(this.surveyOptions.setting.currPageNo > 1){
                //   console.log("HERE",innerQuestions[0].getElementsByClassName("question-body overlay")[0]['id'])
                //   let firstQHeight = innerQuestions[0]['scrollHeight'];
                //   let scrollOffset: number = (window.innerHeight - firstQHeight - document.getElementsByClassName('action-button-scroll').item(0)['offsetHeight'])/2;
                //   this.services.utils.scrollPage(innerQuestions[0].getElementsByClassName("question-body overlay")[0]['id'], scrollOffset);
                // }
            }
        }
        catch (ex) {
            console.error(ex);
        }
    };
    PageComponent.prototype.setQuesInFocus = function (innerQuestions) {
        try {
            var actionButtonLength = document.getElementsByClassName('action-button-scroll').item(0)['offsetHeight'];
            var prevBotMargin = document.getElementsByClassName('page-body').item(0)['style'].paddingTop; // first quest's prev ques bot margin
            if (innerQuestions.length > 1) {
                for (var i = 0; i < innerQuestions.length; i++) {
                    var diff = window.innerHeight - actionButtonLength - innerQuestions.item(i).scrollHeight - prevBotMargin;
                    if (diff > 0) {
                        prevBotMargin = innerQuestions.item(i)['style'].marginBottom = diff + 'px';
                    }
                    else {
                        prevBotMargin = innerQuestions.item(i)['style'].marginBottom = window.innerHeight - ((innerQuestions.item(i).scrollHeight) % (window.innerHeight - actionButtonLength)) + 'px';
                    }
                }
            }
        }
        catch (ex) {
            console.error(ex);
        }
    };
    PageComponent.prototype.setQuestionStyle = function (element, index, style) {
        if (index) {
            var collection = element.item(index) && element.item(index).getElementsByClassName('overlay');
            if (collection.item(0)) {
                for (var key in style) {
                    collection.item(0)['style'][key] = style[key];
                }
            }
        }
        else {
            for (var i = 0; i < element.length; i++) {
                var collection = element.item(i) && element.item(i).getElementsByClassName('overlay');
                if (collection.item(0)) {
                    for (var key in style) {
                        collection.item(0)['style'][key] = style[key];
                    }
                }
            }
        }
    };
    //
    // preventDefault(e) {
    //   e = e || window.event;
    //   if (e.preventDefault)
    //       e.preventDefault();
    //   e.returnValue = false;
    // }
    //
    // disableScroll() {
    //   if (window.addEventListener) // older FF
    //       window.addEventListener('DOMMouseScroll', this.preventDefault, {passive: false});
    //   window.onwheel = this.preventDefault; // modern standard
    //   window.onmousewheel = window.document.onmousewheel = this.preventDefault; // older browsers, IE
    //   window.ontouchmove  = this.preventDefault; // mobile
    //   window.document.body.style['touch-action'] = 'none';
    // }
    //
    // enableScroll() {
    //     if (window.removeEventListener)
    //         window.removeEventListener('DOMMouseScroll', this.preventDefault, {passive: false});
    //     window.onmousewheel = window.document.onmousewheel = null;
    //     window.onwheel = null;
    //     window.ontouchmove = null;
    //     window.document.onkeydown = null;
    //     window.document.body.style['touch-action'] = 'auto';
    // }
    PageComponent.prototype.setQuestionNumber = function () {
        var _this = this;
        var surveyData = this.takeSurvey.getSurveyData();
        var qCount = surveyData['responseBody'].currQuesNum.toString();
        this.page.formFields && this.page.formFields.length && this.page.formFields.forEach(function (question) {
            _this.qCountObj[question._id] = +qCount;
            if (question.fieldType.family != 'statement') {
                qCount++;
            }
            ;
        });
    };
    PageComponent.prototype.goToQuestion = function (event, id, index) {
        if (this.lastQuesIndex != index) {
            event.stopPropagation();
            var currentQHeight = this.elementRef.nativeElement.getElementsByClassName('inner-question-div').item(index).offsetHeight;
            var scrollOffset = (window.innerHeight - currentQHeight) / 2;
            this.services.utils.scrollPage(id, scrollOffset);
        }
    };
    PageComponent.prototype.nextPage = function (event) {
        if (event.key == '1') {
            this.submitSurvey.emit(1);
        }
    };
    PageComponent.prototype.evalPiping = function (page) {
        var response = this.responseServ.getResponseData().responsePage;
        var contact = this.responseServ.getContact();
        if (response.piping) {
            var _loop_1 = function () {
                var objKey = response.piping[i].qId;
                var answerArr = response.piping[i].answer;
                var valueArr = [];
                if (answerArr) {
                    for (var j = 0; j < answerArr.length; j++) {
                        valueArr.push(answerArr[j].text.replace('<p>', '').replace('</p>', ''));
                    }
                    ;
                }
                page.getAllQuestions().forEach(function (q) {
                    if (valueArr.length) {
                        if (q.title.match(/{{[a-f0-9]{24}}}/gi)) {
                            q.title = q.title.replace(new RegExp('{{' + objKey + '}}', 'g'), valueArr.join(', '));
                        }
                        else {
                            q.title = q.title.replace(new RegExp('{{p://' + objKey + '}}', 'g'), valueArr.join(', '));
                        }
                    }
                    else {
                        if (q.title.match(/{{[a-f0-9]{24}}}/gi)) {
                            q.title = q.title.replace(new RegExp('{{' + objKey + '}}', 'g'), '');
                        }
                        else {
                            q.title = q.title.replace(new RegExp('{{p://' + objKey + '}}', 'g'), '');
                        }
                    }
                    var allMatched = q.title.match(/{{(e|c):\/\/.*?}}/gi);
                    allMatched = (allMatched) ? allMatched : [];
                    for (var i_1 = 0; i_1 < allMatched.length; i_1++) {
                        var resValue = response.EmbeddedDataEvaluation(allMatched[i_1], response, contact);
                        if (resValue == null)
                            resValue = '';
                        q.title = q.title.replace(new RegExp(allMatched[i_1], 'g'), resValue);
                    }
                });
            };
            for (var i = 0; i < response.piping.length; i++) {
                _loop_1();
            }
            ;
            page.getAllQuestions().forEach(function (q) {
                if (q.title.match(/{{[a-f0-9]{24}}}/gi)) {
                    q.title = q.title.replace(/{{[a-z0-9]+}}/ig, '');
                }
                else {
                    q.title = q.title.replace(/{{p:\/\/[a-f0-9]{24}}}/ig, '');
                }
            });
        }
        page.getAllQuestions().forEach(function (ques) {
            var allMatched = ques.title.match(/{{(e|c):\/\/.*?}}/gi);
            allMatched = (allMatched) ? allMatched : [];
            for (var i_2 = 0; i_2 < allMatched.length; i_2++) {
                var resValue = response.embeddedDataEvaluation(allMatched[i_2], response, contact);
                if (resValue == null)
                    resValue = '';
                ques.title = ques.title.replace(new RegExp(allMatched[i_2], 'g'), resValue);
            }
            ques.getRowArray().forEach(function (row) {
                var matchInRow = [];
                if (row.text) {
                    matchInRow = row.text.match(/{{(e|c):\/\/.*?}}/gi);
                }
                else if (row.desc) {
                    matchInRow = row.desc.match(/{{(e|c):\/\/.*?}}/gi);
                }
                matchInRow = (matchInRow) ? matchInRow : [];
                for (var i_3 = 0; i_3 < matchInRow.length; i_3++) {
                    var rowVal = response.embeddedDataEvaluation(matchInRow[i_3], response, contact);
                    if (rowVal == null)
                        rowVal = '';
                    if (row.text) {
                        row.text = row.text.replace(new RegExp(matchInRow[i_3], 'g'), rowVal);
                    }
                    else if (row.desc) {
                        row.desc = row.desc.replace(new RegExp(matchInRow[i_3], 'g'), rowVal);
                    }
                }
            });
            ques.getColArray().forEach(function (col) {
                var matchInCol = [];
                matchInCol = col.text.match(/{{(e|c):\/\/.*?}}/gi);
                matchInCol = (matchInCol) ? matchInCol : [];
                for (var i_4 = 0; i_4 < matchInCol.length; i_4++) {
                    var colVal = response.embeddedDataEvaluation(matchInCol[i_4], response, contact);
                    if (colVal == null)
                        colVal = '';
                    col.text = col.text.replace(new RegExp(matchInCol[i_4], 'g'), colVal);
                }
            });
        });
        return page;
    };
    return PageComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PageComponent.prototype, "pageData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageComponent.prototype, "langDirection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], PageComponent.prototype, "onChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], PageComponent.prototype, "submitSurvey", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PageComponent.prototype, "checkScroll", null);
PageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'survey-page',
        template: __webpack_require__("./src/app/routes/take-survey/page/page.component.html"),
        styles: [__webpack_require__("./src/app/routes/take-survey/page/page.component.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('scrollAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: 1,
                    transform: "translateX(0)",
                    height: 'auto'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('hide', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: 0,
                    transform: "translateX(-100%)",
                    height: '0px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('show => hide', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('700ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('hide => show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('700ms ease-in'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_take_survey_service__["a" /* TakeSurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_take_survey_service__["a" /* TakeSurveyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_survey_options_service__["a" /* SurveyOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_survey_options_service__["a" /* SurveyOptionsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_services_module__["a" /* SharedServices */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_survey_response_service__["a" /* SurveyResponseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_survey_response_service__["a" /* SurveyResponseService */]) === "function" && _g || Object])
], PageComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ "./src/app/routes/take-survey/question/question.component.css":
/***/ (function(module, exports) {

module.exports = "::ng-deep .new_ques_text {\n\tmargin-bottom: 15px !important;\n}\n.question-body {\n    display: block;\n}\n.overlay {\n\topacity: .3;\n\tpointer-events: none;\n}\n.req_err_msg{\n\ttext-align: left;\n\tmargin-top: 4px;\n}\n.bt_ts{\n    text-transform: capitalize;\n    border: transparent;\n\t\tpadding: 6px 10px;\n    margin-top: 8px;\n    font-size: 14px;\n    background: transparent;\n    border-radius: 3px;\n}\n"

/***/ }),

/***/ "./src/app/routes/take-survey/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"question-body overlay\" id=\"{{question._id}}\">\n  <div [ngStyle]=\"questionTheme?.body\">\n    <app-question-template [questionData]=\"questionData\" [responseData]=\"responseData\" [themeInp]=\"{'surTheme': surveyTheme, 'quesTheme': questionTheme, 'optTheme': optionTheme}\" (onChange)=\"setAnswerResponse($event)\" [langDirection]=\"langDirection\"></app-question-template>\n  </div>\n  <div [hidden]=\"!(questionData.form.data.data.get('required').value && !responseGot)\" [ngStyle]=\"questionTheme?.body\" class=\"req_err_msg\"><span style=\"color:red !important\">{{questionData.form.data.data.get('reqMsg').value}}</span></div>\n  <div [ngStyle]=\"questionTheme?.body\" style=\"margin-top: 4px;\" *ngIf=\"((isRespComplete && !notShowOkAndDoScroll) || (questionData.form.type.type == 'statement'))\">\n    <button [ngStyle]=\"(pageTheme?.okBtn)?(pageTheme?.okBtn):{'color': bgColor, 'backgroundColor': color}\" class=\"bt_ts\" (click)=\"setAnswerResponse(ev, true)\">{{(questionData.form.type.type == \"statement\")?'Continue':'OK'}}</button>\n  </div>\n  <div *ngIf = \"showPromAmplf\">\n    <div style=\"text-align:left; margin-top: 8px;\">\n      <div style=\"display: inline-block;\">\n        {{promoterAmplf['logic'].shareText}}\n      </div>\n      <!-- google -->\n      <div style=\"display: inline-block; margin-left: 12px;\" *ngIf=\"(npsData.googleUrl != '')\">\n        <a target=\"_blank\" href=\"{{'https://plus.google.com/share?url='+npsData.googleUrl}}\" (click)=\"onGoogleClick();\" [ngStyle]=\"(sharedThroughPromoter.split('|').indexOf('go') != -1)?{'opacity': 0.3, 'pointer-events': 'none'}:''\">\n          <img src=\"assets/images/editSurvey/s2c-img-google-plus64.png\" alt=\"Share on Google+\" title=\"Google\" style=\"max-width: 56px;\">\n        </a>\n      </div>\n      <!-- facebook -->\n      <div style=\"display: inline-block; margin-left: 12px;\" *ngIf=\"(npsData.facebookUrl != '')\">\n        <img src=\"assets/images/editSurvey/s2c-img-facebook64.png\" title=\"Facebook\" (click)=\"onFbClick()\" [ngStyle]=\"(sharedThroughPromoter.split('|').indexOf('fb') != -1)?{'opacity': 0.3, 'pointer-events': 'none', 'max-width': '56px'}:{'max-width': '56px', 'pointer':'cursor'}\">\n      </div>\n      <!-- linkedin -->\n      <div style=\"display: inline-block; margin-left: 12px;\" *ngIf=\"(npsData.linkedinUrl != '')\">\n        <a target=\"_blank\" href=\"{{'https://www.linkedin.com/shareArticle?mini=true&url=' + npsData.linkedinUrl }}\" (click)=\"sharedThroughPromoterAddFunc('li|')\" [ngStyle]=\"(sharedThroughPromoter.split('|').indexOf('li') != -1)?{'opacity': 0.3, 'pointer-events': 'none'}:''\">\n          <img src=\"assets/images/editSurvey/s2c-img-linkedin64.png\" title=\"LinkedIn\" style=\"max-width: 56px;\">\n        </a>\n      </div>\n      <!-- twitter -->\n      <div style=\"display: inline-block; margin-left: 12px;\" *ngIf=\"(npsData.twitterUrl != '')\">\n        <a target=\"_blank\" href=\"{{'https://twitter.com/share?text=' + npsData.twitterMsg + '    ' + npsData.twitterUrl}}\" target=\"_blank\" (click)=\"sharedThroughPromoterAddFunc('tw|')\" [ngStyle]=\"(sharedThroughPromoter.split('|').indexOf('tw') != -1)?{'opacity': 0.3, 'pointer-events': 'none'}:''\">\n          <img src=\"assets/images/editSurvey/s2c-img-twitter64.png\" title=\"Twitter\" style=\"max-width: 56px;\">\n        </a>\n      </div>\n      <!-- whatsapp -->\n      <div style=\"display: inline-block; margin-left: 12px;\" *ngIf=\"(npsData.whatsappUrl != '')\">\n        <a target=\"_blank\" href=\"{{'whatsapp://send?text=' + npsData.whatsappUrl + ' ' + npsData.whatsappMsg}}\" (click)=\"sharedThroughPromoterAddFunc('wh|')\" [ngStyle]=\"(sharedThroughPromoter.split('|').indexOf('wh') != -1)?{'opacity': 0.3, 'pointer-events': 'none'}:''\">\n          <img src=\"assets/images/editSurvey/s2c-img-whatsapp64.png\" title=\"Whatsapp\" style=\"max-width: 56px;\">\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/take-survey/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_questionTemplates_question_types_service__ = __webpack_require__("./src/app/shared/questionTemplates/question-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_survey_options_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_survey_response_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.response.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_take_survey_service__ = __webpack_require__("./src/app/routes/take-survey/services/take.survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_slim_loading_bar__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QuestionComponent = (function () {
    function QuestionComponent(service, takeSurvey, questionTypesService, surveyOptionsServ, responseServ, elementRef, loaderSlimService) {
        this.service = service;
        this.takeSurvey = takeSurvey;
        this.questionTypesService = questionTypesService;
        this.surveyOptionsServ = surveyOptionsServ;
        this.responseServ = responseServ;
        this.elementRef = elementRef;
        this.loaderSlimService = loaderSlimService;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.nextPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.responseGot = true;
        this.isRespComplete = false;
        this.promoterAmplf = {};
        this.showPromAmplf = false;
        this.npsData = {
            facebookUrl: '',
            facebookMsg: '',
            facebookCaption: '',
            facebookID: '',
            googleUrl: '',
            googleID: '',
            googleMsg: '',
            twitterUrl: '',
            twitterMsg: '',
            twitterID: '',
            linkedinMsg: '',
            linkedinUrl: '',
            linkedinID: '',
            whatsappMsg: '',
            whatsappUrl: '',
            whatsappID: ''
        };
        this.sharedThroughPromoter = '';
        this.notShowOkAndDoScroll = false;
        this.lastQuestion = false;
        this.bgColor = "";
        this.color = "";
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
    }
    QuestionComponent.prototype.onResize = function (event) {
        this.innerWidth = (event.target.innerWidth) ? event.target.innerWidth : window.innerWidth;
        this.innerHeight = (event.target.innerHeight) ? event.target.innerHeight : window.innerHeight;
    };
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.questionData = {
            count: this.count,
            form: {
                data: { data: this.questionTypesService.convertQuestion(this.question) },
                type: this.questionTypesService.getQuestionType(this.question['fieldType'].family, this.question['fieldType'].subtype)
            }
        };
        this.surveyOptions = this.surveyOptionsServ.getOptions();
        this.surveyTheme = this.service.form.formObj.theme.getThemeCssObj().survey;
        this.pageTheme = this.service.form.formObj.getPageFields()[0].getCssObj(this.service.form.formObj.theme);
        this.questionTheme = this.service.form.formObj.getQuestionById(this.question['_id']).getCssObj(this.service.form.formObj.theme);
        this.optionTheme = this.service.form.formObj.theme.getOptSettingCss();
        var quesObj = this.service.form.formObj.getQuestionById(this.question['_id']);
        var pageSetId = this.service.form.formObj.getPageByQuestionId(this.question['_id'])['themeSetId'];
        this.color = quesObj.getOptionColor(this.service.form.formObj.theme, pageSetId);
        this.bgColor = quesObj.getOptionBGColor(this.service.form.formObj.theme, pageSetId);
        this.optionTheme['color'] = this.color;
        this.optionTheme['bgColor'] = this.bgColor;
        if (this.responseServ.getResponseData().responsePage.hasOwnProperty('resAObj')) {
            this.responseData = this.responseServ.getResponseData().responsePage.resAObj[this.question['_id']];
            if (this.responseData) {
                this.responseData.forEach(function (item) {
                    _this.sharedThroughPromoter = item.shareType;
                    item.respId = _this.responseServ.getResponseData().responsePage._id;
                });
                console.log("responseData", this.responseData);
                if (this.sharedThroughPromoter != null && typeof this.sharedThroughPromoter != 'undefined' && this.sharedThroughPromoter != "") {
                    this.promoterAmplf['logic'] = this.service.form.formObj.getQuestionById(this.question['_id']).getPromoterLogic();
                    this.showPromAmplf = true;
                    this.getNPSPromAmpflData();
                }
            }
        }
    };
    QuestionComponent.prototype.onFbClick = function () {
        this.sharedThroughPromoterAddFunc('fb|');
        FB.ui({
            method: 'feed',
            display: 'popup',
            link: this.npsData.facebookUrl,
            description: this.npsData.facebookMsg,
            caption: this.npsData.facebookCaption
        }, function (response) {
            if (null != response && undefined != response && typeof response == 'object') {
                this.sharedThroughPromoter += "fa|";
            }
        });
    };
    QuestionComponent.prototype.onGoogleClick = function () {
        this.sharedThroughPromoterAddFunc('go|');
        window.open('https://plus.google.com/share?url=' + this.npsData.googleUrl, "", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
        return false;
    };
    QuestionComponent.prototype.sharedThroughPromoterAddFunc = function (i) {
        this.sharedThroughPromoter += i;
        if (this.ev != null && typeof this.ev != "undefined")
            this.setAnswerResponse(this.ev);
    };
    QuestionComponent.prototype.getNPSPromAmpflData = function () {
        if (this.promoterAmplf['logic'].share && this.promoterAmplf['logic'].shareContent) {
            var arrayOfSelectedShare = this.promoterAmplf['logic'].share.split("|");
            for (var arrayOfSelectedShareIndex = 0; arrayOfSelectedShareIndex < arrayOfSelectedShare.length; arrayOfSelectedShareIndex++) {
                if (arrayOfSelectedShare[arrayOfSelectedShareIndex] == "fa") {
                    for (var urlIndex = 0; urlIndex < this.promoterAmplf['logic'].shareContent.length; urlIndex++) {
                        if (this.promoterAmplf['logic'].shareContent[urlIndex].shareType == "fa") {
                            this.npsData.facebookUrl = this.promoterAmplf['logic'].shareContent[urlIndex].shareUrl;
                            this.npsData.facebookMsg = this.promoterAmplf['logic'].shareContent[urlIndex].shareMsg;
                            this.npsData.facebookCaption = this.promoterAmplf['logic'].shareContent[urlIndex].shareCaption;
                        }
                    }
                    for (var apiIndex = 0; apiIndex < this.promoterAmplf['logic'].apiDoc.length; apiIndex++) {
                        if (this.promoterAmplf['logic'].apiDoc[apiIndex].shareType == "fa") {
                            this.npsData.facebookID = this.promoterAmplf['logic'].apiDoc[apiIndex].appId;
                        }
                    }
                    if (FB) {
                        FB.init({
                            appId: this.npsData.facebookID,
                            version: 'v2.8',
                            xfbml: true
                        });
                    }
                }
                if (arrayOfSelectedShare[arrayOfSelectedShareIndex] == "go") {
                    for (var urlIndex = 0; urlIndex < this.promoterAmplf['logic'].shareContent.length; urlIndex++) {
                        if (this.promoterAmplf['logic'].shareContent[urlIndex].shareType == "go") {
                            this.npsData.googleUrl = this.promoterAmplf['logic'].shareContent[urlIndex].shareUrl;
                            this.npsData.googleMsg = this.promoterAmplf['logic'].shareContent[urlIndex].shareMsg;
                        }
                    }
                    for (var apiIndex = 0; apiIndex < this.promoterAmplf['logic'].apiDoc.length; apiIndex++) {
                        if (this.promoterAmplf['logic'].apiDoc[apiIndex].shareType == "go") {
                            this.npsData.googleID = this.promoterAmplf['logic'].apiDoc[apiIndex].appId;
                        }
                    }
                }
                if (arrayOfSelectedShare[arrayOfSelectedShareIndex] == "tw") {
                    for (var urlIndex = 0; urlIndex < this.promoterAmplf['logic'].shareContent.length; urlIndex++) {
                        if (this.promoterAmplf['logic'].shareContent[urlIndex].shareType == "tw") {
                            this.npsData.twitterUrl = this.promoterAmplf['logic'].shareContent[urlIndex].shareUrl;
                            this.npsData.twitterMsg = this.promoterAmplf['logic'].shareContent[urlIndex].shareMsg;
                        }
                    }
                    for (var apiIndex = 0; apiIndex < this.promoterAmplf['logic'].apiDoc.length; apiIndex++) {
                        if (this.promoterAmplf['logic'].apiDoc[apiIndex].shareType == "tw") {
                            this.npsData.twitterID = this.promoterAmplf['logic'].apiDoc[apiIndex].appId;
                        }
                    }
                }
                if (arrayOfSelectedShare[arrayOfSelectedShareIndex] == "li") {
                    for (var urlIndex = 0; urlIndex < this.promoterAmplf['logic'].shareContent.length; urlIndex++) {
                        if (this.promoterAmplf['logic'].shareContent[urlIndex].shareType == "li") {
                            this.npsData.linkedinUrl = this.promoterAmplf['logic'].shareContent[urlIndex].shareUrl;
                            this.npsData.linkedinMsg = this.promoterAmplf['logic'].shareContent[urlIndex].shareMsg;
                        }
                    }
                    for (var apiIndex = 0; apiIndex < this.promoterAmplf['logic'].apiDoc.length; apiIndex++) {
                        if (this.promoterAmplf['logic'].apiDoc[apiIndex].shareType == "wh") {
                            this.npsData.linkedinID = this.promoterAmplf['logic'].apiDoc[apiIndex].appId;
                        }
                    }
                }
                if (arrayOfSelectedShare[arrayOfSelectedShareIndex] == "wh" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    for (var urlIndex = 0; urlIndex < this.promoterAmplf['logic'].shareContent.length; urlIndex++) {
                        if (this.promoterAmplf['logic'].shareContent[urlIndex].shareType == "wh") {
                            this.npsData.whatsappUrl = this.promoterAmplf['logic'].shareContent[urlIndex].shareUrl;
                            this.npsData.whatsappMsg = this.promoterAmplf['logic'].shareContent[urlIndex].shareMsg;
                        }
                    }
                    for (var apiIndex = 0; apiIndex < this.promoterAmplf['logic'].apiDoc.length; apiIndex++) {
                        if (this.promoterAmplf['logic'].apiDoc[apiIndex].shareType == "wh") {
                            this.npsData.whatsappID = this.promoterAmplf['logic'].apiDoc[apiIndex].appId;
                        }
                    }
                }
            }
        }
    };
    QuestionComponent.prototype.scrollToNextQuestion = function () {
        var _this = this;
        if (this.nexQId && document.getElementsByClassName('inner-question-div')) {
            // console.log(document.getElementsByClassName('inner-question-div')[this.index+1])
            var currentQHeight = document.getElementsByClassName('inner-question-div')[this.index + 1]['offsetHeight'];
            var scrollOffset_1 = -1;
            var actionButtonLength = document.getElementsByClassName('action-button-scroll').item(0)['offsetHeight'];
            // if((window.innerHeight - currentQHeight - actionButtonLength) > 0){
            scrollOffset_1 = (window.innerHeight - currentQHeight) / 2 - actionButtonLength / 2;
            // }
            (scrollOffset_1 < 0) ? (scrollOffset_1 = -1) : '';
            setTimeout(function () {
                _this.service.utils.scrollPage(_this.nexQId, scrollOffset_1);
            }, 10);
        }
        else if (document.getElementById('done_btn')) {
            var currentDone = document.getElementById('done_btn')['offsetHeight'];
            var scrollOffset_2 = (window.innerHeight - currentDone) / 2;
            setTimeout(function () {
                _this.service.utils.scrollPage('done_btn', scrollOffset_2);
            }, 10);
        }
        else if (document.getElementById('next_btn')) {
            var currentDone = document.getElementById('next_btn')['offsetHeight'];
            var scrollOffset_3 = (window.innerHeight - currentDone) / 2;
            setTimeout(function () {
                _this.service.utils.scrollPage('next_btn', scrollOffset_3);
            }, 10);
        }
        else if (document.getElementById('prev_btn')) {
            var currentDone = document.getElementById('prev_btn')['offsetHeight'];
            var scrollOffset_4 = (window.innerHeight - currentDone) / 2;
            setTimeout(function () {
                _this.service.utils.scrollPage('prev_btn', scrollOffset_4);
            }, 10);
        }
    };
    QuestionComponent.prototype.setAnswerResponse = function (event, doScroll) {
        if (doScroll === void 0) { doScroll = false; }
        console.log("AAA", event);
        //event::
        // validPresent: false/true,
        // validated: false/true,
        // addtionalTextPresent: false/true,
        // additionaTextValidationPresent: false/true,
        // additionaTextValidated: false/true,
        // completedResp: false/true,
        console.log(this.questionData.form.data.data.get("_id").value);
        if (this.questionData.form.type.type == "statement") {
            this.responseServ.incrementQProgForStatement(this.questionData.form.data.data.get("_id").value);
            this.scrollToNextQuestion();
            return;
        }
        this.ev = event;
        if (event.ansData[0]) {
            this.promoterAmplf['text'] = this.service.form.formObj.getQuestionById(event.qId).getMarkerIfNPS(event.ansData[0].colId);
            this.promoterAmplf['logic'] = this.service.form.formObj.getQuestionById(event.qId).getPromoterLogic();
        }
        if (this.promoterAmplf['text'] != null && typeof this.promoterAmplf['text'] != "undefined"
            && (this.promoterAmplf['text'].split("-")[0] == '9' || this.promoterAmplf['text'].split("-")[0] == '10')
            && this.promoterAmplf['logic'] != null && typeof this.promoterAmplf['logic'] != "undefined") {
            this.showPromAmplf = true;
            this.getNPSPromAmpflData();
        }
        else {
            this.showPromAmplf = false;
            this.npsData = {
                facebookUrl: '',
                facebookMsg: '',
                facebookCaption: '',
                facebookID: '',
                googleUrl: '',
                googleID: '',
                googleMsg: '',
                twitterUrl: '',
                twitterMsg: '',
                twitterID: '',
                linkedinMsg: '',
                linkedinUrl: '',
                linkedinID: '',
                whatsappMsg: '',
                whatsappUrl: '',
                whatsappID: ''
            };
        }
        if ((this.questionData.form.data.data.get('required').value && !event.completedResp)
            || (event.validPresent && !event.validated)
            || ((event.addtionalTextPresent || (this.questionData.form.type.type == "single-choice" && event.overallAddnTxtPresent))
                && event.additionaTextValidationPresent && !event.additionaTextValidated)) {
            this.isRespComplete = false;
        }
        else {
            this.isRespComplete = true;
        }
        ;
        this.notShowOkAndDoScroll = (this.questionData.form.type.type == "slider"
            || this.questionData.form.type.type == "file"
            || this.questionData.form.type.type == "dropdown"
            ||
                (this.questionData.form.type.type == "nps" && !this.showPromAmplf)
            ||
                (this.questionData.form.type.type == "single-choice")) && !event.addtionalTextPresent
            && event.completedResp;
        this.responseGot = event.completedResp;
        if (event.qId == this.service.form.formObj.getAllQuestions()[this.service.form.formObj.getAllQuestions().length - 1]._id) {
            this.lastQuestion = true;
        }
        else {
            this.lastQuestion = false;
        }
        if (this.questionData.form.data.data.get('required').value && !this.responseGot) {
            document.getElementById(event.qId).getElementsByClassName('req_err_msg')[0]['hidden'] = false;
        }
        else {
            document.getElementById(event.qId).getElementsByClassName('req_err_msg')[0]['hidden'] = true;
        }
        if (this.questionData.form.type.type == "graph-rating" && event.completedResp && !event.addtionalTextPresent)
            this.notShowOkAndDoScroll = true;
        if ((event.addtionalTextPresent || (this.questionData.form.type.type == "single-choice" && event.overallAddnTxtPresent))
            && event.additionaTextValidationPresent && !event.additionaTextValidated) {
            this.takeSurvey.setRequiredQuestionList(event.qId);
        }
        else if (((event.addtionalTextPresent || (this.questionData.form.type.type == "single-choice" && event.overallAddnTxtPresent))
            && event.additionaTextValidationPresent && event.additionaTextValidated)
            || ((event.addtionalTextPresent || (this.questionData.form.type.type == "single-choice" && event.overallAddnTxtPresent))
                && !event.additionaTextValidationPresent)) {
            this.takeSurvey.unsetRequiredQuestionList(event.qId);
        }
        if (event.validPresent && !event.validated) {
            this.takeSurvey.setRequiredQuestionList(event.qId);
        }
        else if (event.validPresent && event.validated) {
            this.takeSurvey.unsetRequiredQuestionList(event.qId);
        }
        if (this.isRespComplete) {
            if (this.sharedThroughPromoter) {
                event.ansData[0].shareType = this.sharedThroughPromoter;
            }
            this.responseServ.setAnswerResponse(event.qId, event.ansData);
            event.fileData && this.responseServ.setResFileData(event.qId, event.fileData.id, event.fileData.file);
            if (this.notShowOkAndDoScroll || doScroll) {
                if (this.lastQuestion && this.surveyOptions && this.surveyOptions.buttonOptions.next) {
                    this.loaderSlimService.start();
                    this.nextPage.emit({ 'key': 1 });
                }
                else {
                    this.scrollToNextQuestion();
                }
            }
        }
        else {
            this.responseServ.setAnswerResponse(event.qId, []);
            if (this.notShowOkAndDoScroll || doScroll) {
                if (this.lastQuestion && this.surveyOptions && this.surveyOptions.buttonOptions.next) {
                    this.loaderSlimService.start();
                    this.nextPage.emit({ 'key': 1 });
                }
                else {
                    this.scrollToNextQuestion();
                }
            }
        }
    };
    return QuestionComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], QuestionComponent.prototype, "question", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], QuestionComponent.prototype, "count", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], QuestionComponent.prototype, "langDirection", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], QuestionComponent.prototype, "index", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], QuestionComponent.prototype, "nexQId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], QuestionComponent.prototype, "onChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], QuestionComponent.prototype, "nextPage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], QuestionComponent.prototype, "onResize", null);
QuestionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'survey-question',
        template: __webpack_require__("./src/app/routes/take-survey/question/question.component.html"),
        styles: [__webpack_require__("./src/app/routes/take-survey/question/question.component.css")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('scrollAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: 1,
                    transform: "translateX(0)",
                    height: 'auto'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('hide', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: 0,
                    transform: "translateX(-100%)",
                    height: '0px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('show => hide', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('700ms ease-out')),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('hide => show', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('700ms ease-in'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__services_take_survey_service__["a" /* TakeSurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_take_survey_service__["a" /* TakeSurveyService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__shared_questionTemplates_question_types_service__["a" /* QuestionTypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_questionTemplates_question_types_service__["a" /* QuestionTypesService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_survey_options_service__["a" /* SurveyOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_survey_options_service__["a" /* SurveyOptionsService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__services_survey_response_service__["a" /* SurveyResponseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_survey_response_service__["a" /* SurveyResponseService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _j || Object])
], QuestionComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ "./src/app/routes/take-survey/services/survey.options.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyOptionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyOptionsService = (function () {
    function SurveyOptionsService(services) {
        this.services = services;
        this.surveyStatus = {
            survey: { value: 'survey' },
            message: { value: 'message' },
            taken: { value: 'taken' }
        };
        this.buttonOptions = {
            next: false,
            previous: false,
            done: false,
            doneThanks: false
        };
        this.collector = {
            exitLink: ''
        };
        this.options = {
            setting: {
                logo: {
                    allignment: "",
                    desc: "",
                    hasLogo: 0,
                    position: "",
                    size: ""
                },
                showTitle: 1,
                showExit: 0,
                showProg: {
                    hasProg: 0,
                    position: 0,
                    format: {
                        showPages: 0
                    }
                },
                id: "",
                showPTitle: 1,
                showPageNumber: 0,
                showQuesNum: 1,
                showPrevBtn: 1,
                showQProgDesktop: 0,
                showQProgMobTab: 0,
                required: 1,
                currPageNo: 1,
                no_of_pages: 1,
                customEndPageType: "",
                customEndPageInfo: {},
                singleQuesFocusTabMobile: 0,
                singleQuesFocusDesktop: 0
            },
            languageOptions: {},
            surveyMessage: '',
            surveyStatus: null,
            buttonOptions: {},
            clickedButton: '1',
            isUpdateResults: false
        };
    }
    SurveyOptionsService.prototype.getOptions = function () {
        return this.options;
    };
    SurveyOptionsService.prototype.setSetting = function (result) {
        if (result['surveyBody']) {
            this.options.setting.id = result['surveyBody']._id;
            this.options.setting.logo = result['surveyBody'].logo;
            this.options.setting.showTitle = result['surveyBody'].showTitle;
            this.options.setting.showQProgDesktop = result['surveyBody'].showQProgDesktop;
            this.options.setting.showQProgMobTab = result['surveyBody'].showQProgMobTab;
            this.options.setting.showExit = result['surveyBody'].showExit;
            this.options.setting.showProg.hasProg = result['surveyBody'].showProg.hasProg;
            this.options.setting.showProg.position = result['surveyBody'].showProg.position;
            this.options.setting.showProg.format.showPages = result['surveyBody'].showProg.format.showPages;
            this.options.setting.showPTitle = result['surveyBody'].showPTitle;
            this.options.setting.showPrevBtn = result['surveyBody'].showPrevBtn;
            this.options.setting.showPageNumber = result['surveyBody'].showPageNumber;
            this.options.setting.showQuesNum = result['surveyBody'].showQuesNum;
            this.options.setting.singleQuesFocusDesktop = result['surveyBody'].singleQuesFocusDesktop;
            this.options.setting.singleQuesFocusTabMobile = result['surveyBody'].singleQuesFocusTabMobile;
            this.options.setting.required = result['surveyBody'].required;
            // console.log("this.options.setting",this.options.setting)
        }
        if (result['responseBody']) {
            this.options.setting.no_of_pages = result['responseBody'].totPages;
            this.options.setting.currPageNo = result['responseBody'].absPageNum;
        }
        var keys = Object.keys(result);
        for (var i in keys) {
            if ((keys[i] == 'thank') || (keys[i] == 'disqua') || (keys[i] == 'end')) {
                this.options.setting.customEndPageType = keys[i];
                if (result[keys[i]].custThx)
                    this.options.setting.customEndPageInfo['custThx'] = result[keys[i]].custThx;
                if (result[keys[i]].custDisqua)
                    this.options.setting.customEndPageInfo['custDisqua'] = result[keys[i]].custDisqua;
                if (result[keys[i]].custEnd)
                    this.options.setting.customEndPageInfo['custEnd'] = result[keys[i]].custEnd;
                this.options.setting.customEndPageInfo['link'] = result[keys[i]].link;
            }
        }
    };
    SurveyOptionsService.prototype.getCollector = function () {
        return this.collector;
    };
    SurveyOptionsService.prototype.setCollector = function (result) {
        this.collector.exitLink = result['collector'].exitLink;
    };
    SurveyOptionsService.prototype.setLanguageOptions = function (res) {
        if (res['langKey']) {
            this.options.languageOptions = {
                lang: res['language'],
                langKey: res['langKey']['langKey'],
                direction: res['langKey']['direction'],
            };
        }
    };
    SurveyOptionsService.prototype.setSurevyMessage = function (msg) {
        if (msg) {
            this.options.surveyMessage = msg;
            this.setSurveyStatus(this.surveyStatus.message.value);
        }
    };
    SurveyOptionsService.prototype.setButtonOption = function (option) {
        this.options.buttonOptions = option;
    };
    SurveyOptionsService.prototype.setSurveyStatus = function (status) {
        this.options.surveyStatus = status;
    };
    SurveyOptionsService.prototype.setClickedButton = function (data) {
        this.options.clickedButton = data;
    };
    SurveyOptionsService.prototype.getClickedButton = function () {
        return this.options.clickedButton;
    };
    SurveyOptionsService.prototype.setIsUpdateResults = function (data) {
        this.options.isUpdateResults = data;
    };
    return SurveyOptionsService;
}());
SurveyOptionsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_services_module__["a" /* SharedServices */]) === "function" && _a || Object])
], SurveyOptionsService);

var _a;
//# sourceMappingURL=survey.options.service.js.map

/***/ }),

/***/ "./src/app/routes/take-survey/services/survey.response.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyResponseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__survey_options_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyResponseService = (function () {
    function SurveyResponseService(services, optionsServ) {
        this.services = services;
        this.optionsServ = optionsServ;
        this.responseData = {
            buttonSwitch: '-1',
            currPLen: 0,
            responsePage: null,
            nextDet: null,
            custEnd: null
        };
        this.collectorJSON = {};
        this.contactJSON = {};
        this.responseFileData = {};
        this.currPageQuesAnswered = 0;
        this.totalQuestionCountMinusCurrPage = 0;
        this.includeDomIntotalQuestionCountMinusCurrPage = true;
        this.report = {};
    }
    SurveyResponseService.prototype.setInitialData = function (data) {
        try {
            if (data["thank"] || data["disqua"] || data["end"]) {
                this.responseData.custEnd = data["thank"] || data["disqua"] || data["end"];
            }
            else if (data["report"]) {
                this.report['data'] = {};
                this.responseData.responsePage = new FormResponse(data["responseBody"]);
                this.responseData.responsePage["resAObj"] = data["responseBody"]["resAObj"] || {};
                this.responseData.nextDet = data['nextDet'];
                this.generateReport(this.report);
            }
            else {
                if (data.hasOwnProperty("totalRemainingQuestions")) {
                    this.totalQuestionCountMinusCurrPage = parseInt(data['totalRemainingQuestions']);
                    for (var i = 0; i < Object.keys(data['responseBody']['pageQuestionLength']).length; i++) {
                        this.totalQuestionCountMinusCurrPage += parseInt(data['responseBody']['pageQuestionLength'][Object.keys(data['responseBody']['pageQuestionLength'])[i]].quesLength);
                    }
                    this.includeDomIntotalQuestionCountMinusCurrPage = true;
                }
                else {
                    this.totalQuestionCountMinusCurrPage = parseInt(data['responseBody']['totalQuesToDisplay']);
                    this.includeDomIntotalQuestionCountMinusCurrPage = false;
                }
                this.responseData.responsePage = new FormResponse(data["responseBody"]);
                this.responseData.responsePage["resAObj"] = data["responseBody"]["resAObj"] || {};
                if (data["collector"]) {
                    this.collectorJSON = data["collector"];
                }
                if (data["contact"]) {
                    this.contactJSON = data["contact"];
                }
                this.responseData.currPLen = data["surveyBody"]["pageFields"][0]["formFields"].length;
                this.responseData.nextDet = data['nextDet'];
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    SurveyResponseService.prototype.getCollector = function () {
        try {
            return this.collectorJSON;
        }
        catch (err) {
            console.log(err);
        }
    };
    SurveyResponseService.prototype.getReportObj = function () {
        return this.report;
    };
    SurveyResponseService.prototype.getContact = function () {
        return this.contactJSON;
    };
    SurveyResponseService.prototype.getResponseData = function () {
        return this.responseData;
    };
    SurveyResponseService.prototype.setButtonSwitch = function (key) {
        this.responseData.buttonSwitch = key;
    };
    SurveyResponseService.prototype.updateQuestionAnsweredCount = function (type) {
        if (type == "add") {
            this.currPageQuesAnswered++;
        }
        else {
            this.currPageQuesAnswered--;
        }
    };
    SurveyResponseService.prototype.incrementQProgForStatement = function (stmtQid) {
        if (!this.stmtArrayList)
            this.stmtArrayList = [];
        if (this.stmtArrayList.indexOf(stmtQid) == -1) {
            this.stmtArrayList.push(stmtQid);
            this.currPageQuesAnswered++;
        }
    };
    SurveyResponseService.prototype.setAnswerResponse = function (qId, ansData) {
        try {
            if (ansData.length) {
                if (!(this.responseData.responsePage.resAObj.hasOwnProperty(qId))) {
                    this.updateQuestionAnsweredCount('add');
                }
                this.responseData.responsePage.resAObj[qId] = ansData;
            }
            else {
                if (this.responseData.responsePage.resAObj.hasOwnProperty(qId)) {
                    this.updateQuestionAnsweredCount('rem');
                }
                delete this.responseData.responsePage.resAObj[qId];
            }
        }
        catch (ex) {
            console.error(ex);
        }
    };
    SurveyResponseService.prototype.setResFileData = function (qId, uploadId, file) {
        var data = this.responseData.responsePage;
        var id = data.surId + '_' + data._id + '_' + qId + '_' + uploadId;
        if (file) {
            this.responseFileData[id] = file;
        }
        else {
            delete this.responseFileData[id];
        }
    };
    SurveyResponseService.prototype.getCurrPageQuesAnswered = function () {
        // console.log("aaa",this.currPageQuesAnswered)
        return this.currPageQuesAnswered;
    };
    SurveyResponseService.prototype.getTotalQuestionCountMinusCurrPage = function () {
        var ret = { count: this.totalQuestionCountMinusCurrPage, includeDom: this.includeDomIntotalQuestionCountMinusCurrPage };
        return ret;
    };
    SurveyResponseService.prototype.setResponseData = function (surveyData) {
        try {
            if (surveyData['surveyBody']) {
                this.services.form.formObj.setResponseCriteria(this.responseData.responsePage);
            }
            this.services.form.formObj.executeLogic(this.responseData, this.getContact());
        }
        catch (ex) {
            console.error(ex, 'error in setting response data');
        }
    };
    SurveyResponseService.prototype.submitSurvey = function () {
        var respFormData = new FormData();
        respFormData.append('data', JSON.stringify(this.responseData));
        for (var id in this.responseFileData) {
            respFormData.append(id, this.responseFileData[id]);
        }
        this.responseFileData = {};
        return this.services.resource.submitSurvey(this.responseData.responsePage._id, respFormData);
    };
    SurveyResponseService.prototype.generateReport = function (report) {
        try {
            var response = this.responseData.responsePage;
            var survey = this.services.form.formObj;
            var id = '', inter = '', pipingObj = {};
            if (survey['reportPage'] && survey['reportPage']['pageContent']) {
                if (response.piping.length > 0) {
                    for (var i = 0; i < response.piping.length; i++) {
                        pipingObj[response.piping[i].qId] = [];
                        for (var j = 0; j < response.piping[i].answer.length; j++) {
                            pipingObj[response.piping[i].qId].push(this.services.utils.getTextOutOfHtml(response.piping[i].answer[j].text));
                        }
                    }
                }
                var criPipedTexts = survey['reportPage']['pageContent'].match(/\$c{[a-f0-9]{24}\}\{\{(p|e|c):\/\/(([a-z0-9]*)|[a-f0-9]{24})\}\}/gi);
                for (var i = 0; criPipedTexts && i < criPipedTexts.length; i++) {
                    if (this.services.form.formObj.getCriteriaById(criPipedTexts[i].match(/[a-f0-9]{24}/gi)[0]) && this.services.form.formObj.getCriteriaById(criPipedTexts[i].match(/[a-f0-9]{24}/gi)[0]).solve(this.getResponseData(), this.getContact(), 1)) {
                        survey.reportPage.pageContent = survey.reportPage.pageContent.replace(criPipedTexts[i].split('{{')[0], '');
                    }
                    else {
                        survey.reportPage.pageContent = survey.reportPage.pageContent.replace(criPipedTexts[i], '');
                    }
                }
                this.parsePipedText({ surveyBody: survey, responseBody: response }, pipingObj);
            }
            else {
                survey.surveyBody.reportPage = {
                    pageContent: '<h3 class="text-center">No report available.</h3><br><br>'
                };
            }
            report.data = survey.reportPage;
            report.data["exportUrl"] = this.getExportURL() + 'v1/export/response/' + response._id + '/report/pdf';
            var body = {
                reportHtml: survey.reportPage.pageContent
            };
            this.services.resource.generateReport(response._id, body).subscribe(function (data) {
                // console.log(data);
            });
        }
        catch (err) {
            console.log(err);
        }
    };
    SurveyResponseService.prototype.parsePipedText = function (obj, pipingObj) {
        var pipedTexts = obj.surveyBody.reportPage.pageContent.match(/{{(e|c|p):\/\/.*?}}/gi);
        for (var i = 0; pipedTexts && i < pipedTexts.length; i++) {
            obj.surveyBody.reportPage.pageContent = this.pipedParser({
                pipedText: pipedTexts[i],
                pipingObj: pipingObj,
                pageContent: obj.surveyBody.reportPage.pageContent,
                responseBody: obj.responseBody
            });
        }
        obj.surveyBody.reportPage.pageContent = obj.surveyBody.reportPage.pageContent.replace((/{{(e|c|p):\/\/.*?}}/gi), '');
        // console.log("Page content",obj.surveyBody.reportPage.pageContent);
    };
    SurveyResponseService.prototype.pipedParser = function (obj) {
        var inter = obj.pipedText.split("://"), id = inter[1].split('}}')[0];
        if (inter[0] == '{{p') {
            if (obj.pipingObj[id]) {
                obj.pageContent = obj.pageContent.replace(new RegExp('{{p://' + id + '}}', 'g'), obj.pipingObj[id].join(', '));
            }
        }
        else if (inter[0] == '{{e' || inter[0] == '{{c') {
            if (obj.responseBody.eData && obj.responseBody.eData[id]) {
                obj.pageContent = obj.pageContent.replace(new RegExp('{{(e|c)://' + id + '}}', 'g'), obj.responseBody.eData[id]);
            }
            else if (this.getContact() && this.getContact()[id]) {
                obj.pageContent = obj.pageContent.replace(new RegExp('{{(e|c)://' + id + '}}', 'g'), this.getContact()[id]);
            }
            else if (this.getContact() && this.getContact().eData && this.getContact().eData[id]) {
                obj.pageContent = obj.pageContent.replace(new RegExp('{{(e|c)://' + id + '}}', 'g'), this.getContact().eData[id][0]["value"]);
            }
        }
        return obj.pageContent;
    };
    SurveyResponseService.prototype.getExportURL = function () {
        var url = '';
        url = document.URL;
        var arr = url.split('/');
        var portUrl = arr[2].split(':');
        url = arr[0] + '//' + portUrl[0] + ':9997/';
        if (/^https/.test(arr[0])) {
            if (/^beta/.test(arr[2])) {
                url = 'https://betaexport.survey2connect.com/';
            }
            else {
                url = 'https://export.survey2connect.com/';
            }
        }
        return url;
    };
    return SurveyResponseService;
}());
SurveyResponseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__survey_options_service__["a" /* SurveyOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__survey_options_service__["a" /* SurveyOptionsService */]) === "function" && _b || Object])
], SurveyResponseService);

var _a, _b;
//# sourceMappingURL=survey.response.service.js.map

/***/ }),

/***/ "./src/app/routes/take-survey/services/take.survey.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeSurveyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_options_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_response_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.response.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TakeSurveyService = (function () {
    function TakeSurveyService(services, optionsServ, responseServ) {
        this.services = services;
        this.optionsServ = optionsServ;
        this.responseServ = responseServ;
        this.surveyData = {};
        this.languageData = {};
        this.languageDetails = {};
    }
    TakeSurveyService.prototype.setInitialData = function (data, qParams) {
        this.requiredList = [];
        if (data['langKey']) {
            this.languageData = data['language'];
            this.languageDetails = data['langKey'];
        }
        this.surveyData = data;
        this.responseServ.setInitialData(data);
        // this.services.eData.setIntialData(data, qParams);
        this.setButtonOptions();
    };
    TakeSurveyService.prototype.getSurveyData = function () {
        return this.surveyData;
    };
    TakeSurveyService.prototype.configureSurvey = function (res, url) {
        var collector = this.responseServ.getCollector();
        this.optionsServ.setLanguageOptions(res);
        this.optionsServ.setSurevyMessage(res['msg']);
        if (res['responseBody']) {
            var cookieKey = 'gs' + res['responseBody'].collectId;
            if (this.services.cookie.get(cookieKey) && collector && collector.mulResp == 0 && ([1, 5].indexOf(collector.type) == -1)) {
                this.services.cookie.put(cookieKey, res['responseBody']._id, { 'path': '/' });
            }
            else {
                this.onPageStartForMobile();
                var isEdit = this.isEditForAccOwner(url);
                if (res['responseBody'].resStatus == "1" && ([0, 1].indexOf(collector.type) != -1) && !isEdit) {
                    this.optionsServ.setSurveyStatus(this.optionsServ.surveyStatus.taken.value);
                }
                else {
                    this.optionsServ.setIsUpdateResults(true);
                }
            }
        }
        if (!this.optionsServ.getOptions()['surveyStatus']) {
            this.optionsServ.setSurveyStatus(this.optionsServ.surveyStatus.survey.value);
        }
        if ((res['responseBody'] && res['surveyBody']) || (res["thank"] || res["disqua"] || res["end"])) {
            this.optionsServ.setSetting(res);
        }
        if (res['collector']) {
            this.optionsServ.setCollector(res);
        }
    };
    TakeSurveyService.prototype.getshopperFactProducts = function (queryParams) {
        var products = [];
        var queryParamsString = JSON.stringify(queryParams);
        var regexP = queryParamsString.match(/P_[0-9]+/g);
        var regexQty = queryParamsString.match(/QTY_[0-9]+/g);
        var regexPD = queryParamsString.match(/pD_[0-9]+/g);
        if (regexP != null && regexQty != null && regexPD != null && regexP.length == regexQty.length && regexP.length == regexPD.length) {
            for (var i = 0; i < regexP.length; i++) {
                var tempObj = {};
                tempObj['P'] = queryParams[regexP[i]];
                tempObj['QTY'] = queryParams[regexQty[i]];
                tempObj['pD'] = queryParams[regexPD[i]];
                products.push(tempObj);
            }
        }
        return products;
    };
    TakeSurveyService.prototype.handleshopperFact = function (surveyBody, hasWebGL) {
        if (!hasWebGL) {
            try {
                if (surveyBody['compatibility']['shopperFact']['url']) {
                    // productParameters = this.getshopperFactProducts();
                }
            }
            catch (ex) { }
        }
        else if (hasWebGL == '0') {
            this.services.alert("Browser not supported");
        }
    };
    TakeSurveyService.prototype.getPageData = function () {
        var _this = this;
        this.services.form.formObj.removeHiddenQuestions();
        var response = this.responseServ.getResponseData();
        response.currPLen = this.services.form.formObj.getPageFields()[0].formFields.length;
        var result = this.services.form.formObj.applyDisplayLogic(response, this.responseServ.getContact(), this.optionsServ.getClickedButton());
        if (result["callFlag"] == true || this.services.form.formObj.getPageFields()[0].formFields.length == 0) {
            if ((this.surveyData["nextDet"] && this.surveyData["nextDet"]["nextPId"] == null) || !this.surveyData["nextDet"]) {
                response.buttonSwitch = "2";
            }
            else if (!response.responsePage["resPObj"][this.services.form.formObj.getPageFields()[0]._id].prevPId) {
                response.buttonSwitch = "1";
            }
            return new Promise(function (resolve, reject) {
                _this.responseServ.submitSurvey().subscribe(function (data) {
                    if (data["surveyBody"]) {
                        _this.services.form.setFormData(_this.services.utils.cloneObject(data["surveyBody"]));
                    }
                    _this.setInitialData(_this.services.utils.cloneObject(data));
                    _this.optionsServ.setSetting(data);
                    _this.services.form.formObj.applyDisplayLogic(_this.responseServ.getResponseData(), _this.responseServ.getResponseData().contDet, _this.optionsServ.getClickedButton());
                    if (data.hasOwnProperty('surveyBody') && data.hasOwnProperty('responseBody')) {
                        resolve(_this.services.form.formObj.getPageFields()[0]);
                    }
                });
            });
        }
        else {
            return new Promise(function (resolve, reject) {
                resolve(_this.services.form.formObj.getPageFields()[0]);
            });
        }
    };
    TakeSurveyService.prototype.getRequiredQues = function (qList) {
        try {
            var smQuesId_1 = this.surveyData['responseBody'].smQuesId;
            return qList.filter(function (item) { return !item.isHidden && (smQuesId_1 ? smQuesId_1 != item._id : true); });
        }
        catch (ex) {
            console.error(ex);
            return qList;
        }
    };
    TakeSurveyService.prototype.requiredQuestionList = function () {
        if (!this.requiredList)
            this.requiredList = [];
        for (var i = 0; i < this.services.form.formObj.getPageFields()[0]['formFields'].length; i++) {
            if (this.services.form.formObj.getPageFields()[0]['formFields'][i].required && !this.services.form.formObj.getPageFields()[0]['formFields'][i].isHidden) {
                if (this.requiredList.indexOf(this.services.form.formObj.getPageFields()[0]['formFields'][i]._id) == -1)
                    this.requiredList.push(this.services.form.formObj.getPageFields()[0]['formFields'][i]._id);
            }
        }
        return this.requiredList;
    };
    TakeSurveyService.prototype.setRequiredQuestionList = function (qid) {
        if (this.requiredList && this.requiredList.indexOf(qid) == -1) {
            this.requiredList.push(qid);
        }
        if (!this.requiredList) {
            this.requiredList = [];
        }
    };
    TakeSurveyService.prototype.unsetRequiredQuestionList = function (qid) {
        if (this.requiredList && this.requiredList.indexOf(qid) != -1) {
            var pos = this.requiredList.indexOf(qid);
            if (~pos)
                this.requiredList.splice(pos, 1);
        }
        if (!this.requiredList) {
            this.requiredList = [];
        }
    };
    TakeSurveyService.prototype.isEditForAccOwner = function (url) {
        return url.match(/\/edit\?/) ? true : false;
    };
    TakeSurveyService.prototype.onPageStartForMobile = function () {
        try {
            PageFinish.onPageStart(); //Android specific code
        }
        catch (ex) { }
        try {
            webkit.messageHandlers.onPageStart.postMessage({ "success": true }); //ios specific code
        }
        catch (ex) { }
    };
    TakeSurveyService.prototype.onPageFinishForMobile = function (type) {
        try {
            PageFinish.onPageFinish(type); //Android specific code
        }
        catch (ex) { }
        try {
            webkit.messageHandlers.success.postMessage({ "success": true }); //ios specific code
        }
        catch (ex) { }
    };
    TakeSurveyService.prototype.setButtonOptions = function () {
        var data = this.services.utils.cloneObject(this.optionsServ.buttonOptions);
        if (this.surveyData['nextDet'] && this.surveyData['responseBody']) {
            var nextPId = this.surveyData['nextDet'].nextPId;
            var responseBody = this.surveyData['responseBody'];
            var prevPids = Object.keys(responseBody.resPObj)[0];
            if (nextPId == null && responseBody.resPObj[prevPids].prevPId == null) {
                data.done = true;
            }
            else if (nextPId != null && responseBody.resPObj[prevPids].prevPId == null) {
                data.next = true;
            }
            else if (nextPId != null && responseBody.resPObj[prevPids].prevPId != null) {
                data.next = true;
                data.previous = true;
            }
            else if (nextPId == null && responseBody.resPObj[prevPids].prevPId != null) {
                data.previous = true;
                data.done = true;
            }
        }
        this.optionsServ.setButtonOption(data);
    };
    TakeSurveyService.prototype.submitSurvey = function (key) {
        this.optionsServ.setClickedButton(key);
        this.responseServ.setButtonSwitch(key);
        this.responseServ.setResponseData(this.surveyData);
        return this.responseServ.submitSurvey();
    };
    TakeSurveyService.prototype.getLanguageDirection = function () {
        try {
            return this.languageDetails["direction"];
        }
        catch (err) {
            throw err;
        }
    };
    TakeSurveyService.prototype.getLanguageDetails = function () {
        try {
            return this.languageDetails;
        }
        catch (err) {
            throw err;
        }
    };
    TakeSurveyService.prototype.setLanguageDetails = function (lang) {
        try {
            this.languageDetails = lang;
        }
        catch (err) {
            throw err;
        }
    };
    TakeSurveyService.prototype.getLanguage = function () {
        try {
            return this.languageData;
        }
        catch (err) {
            throw err;
        }
    };
    TakeSurveyService.prototype.translatePage = function (page) {
        try {
            var languageDetails = this.getLanguageDetails();
            var language = this.getLanguage();
            var langKey = languageDetails['langKey'];
            var surId = this.services.form.formObj.getId();
            if (this.surveyData && this.surveyData.hasOwnProperty('surveyBody') && langKey == this.surveyData['surveyBody']['defLang']['langKey']) {
                return new Page(this.surveyData['surveyBody']["pageFields"][0]);
            }
            else {
                if (language && language.hasOwnProperty('langData') && language['langData'].hasOwnProperty(langKey)) {
                    //   alert("1");
                    var lang_1 = language['langData'][langKey];
                    if (lang_1.hasOwnProperty(page.getId()) && lang_1[page.getId()].title) {
                        page.title = lang_1[page.getId()].title;
                    }
                    if (lang_1.hasOwnProperty(page.getId()) && lang_1[page.getId()].desc) {
                        page.desc = lang_1[page.getId()].desc;
                    }
                    page.getAllQuestions().forEach(function (ques) {
                        if (lang_1.hasOwnProperty(ques.getId()) && lang_1[ques.getId()].title) {
                            ques.title = lang_1[ques.getId()].title;
                            if (ques.reqMsg && lang_1[ques.getId()].reqMsg) {
                                ques.reqMsg = lang_1[ques.getId()].reqMsg;
                            }
                        }
                        ques.getRowArray().forEach(function (row) {
                            if (lang_1.hasOwnProperty(row._id) && lang_1[row._id].text) {
                                row.text = lang_1[row.getId()].text;
                            }
                        });
                        ques.getColArray().forEach(function (col) {
                            if (lang_1.hasOwnProperty(col._id) && lang_1[col._id].text) {
                                if (ques.fieldType.family == 'matrix' && ques.fieldType.subtype == 'rating') {
                                    //   console.log("O text \n",col.text);
                                    //   console.log("O text \n",col.text);
                                }
                                col.text = lang_1[col.getId()].text;
                            }
                        });
                    });
                }
                return new Page(page);
            }
        }
        catch (err) {
        }
    };
    return TakeSurveyService;
}());
TakeSurveyService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_services_module__["a" /* SharedServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__survey_options_service__["a" /* SurveyOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__survey_options_service__["a" /* SurveyOptionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__survey_response_service__["a" /* SurveyResponseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__survey_response_service__["a" /* SurveyResponseService */]) === "function" && _c || Object])
], TakeSurveyService);

var _a, _b, _c;
//# sourceMappingURL=take.survey.service.js.map

/***/ }),

/***/ "./src/app/routes/take-survey/take.preview/take.preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakePreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_take_survey_service__ = __webpack_require__("./src/app/routes/take-survey/services/take.survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_survey_options_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_survey_response_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.response.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_constants_service__ = __webpack_require__("./src/app/shared/services/constants.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TakePreviewComponent = (function () {
    function TakePreviewComponent(route, router, takeSurvey, surveyOptionsServ, responseServ, services, constants, renderer, elem, loaderSlimService) {
        this.route = route;
        this.router = router;
        this.takeSurvey = takeSurvey;
        this.surveyOptionsServ = surveyOptionsServ;
        this.responseServ = responseServ;
        this.services = services;
        this.constants = constants;
        this.renderer = renderer;
        this.elem = elem;
        this.loaderSlimService = loaderSlimService;
        this.exitLink = '';
        this.reqOn = false;
        this.langSelection = false;
        this.languageActiveList = false;
        this.languageMap = {};
        this.showUp = false;
        this.showDown = true;
        this.lowerPanelGo = false;
        this.currQIndex = 0;
        this.hitGoing = false;
        // currPageQuesCount: number = 0;
        this.closedSurvey = false;
        this.introPage = false;
    }
    TakePreviewComponent.prototype.ngOnInit = function () {
        this.langConfig = languageConfig;
        this.report = this.responseServ.getReportObj();
        this.surveyOptions = this.surveyOptionsServ.getOptions();
        this.exitLink = this.surveyOptionsServ.getCollector().exitLink;
        this.respData = this.responseServ.getResponseData();
        if (this.exitLink == "" || typeof this.exitLink == undefined) {
            this.exitLink = "https://survey2connect.com";
        }
        this.getSurvey();
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
    };
    TakePreviewComponent.prototype.onResize = function (event) {
        this.innerWidth = (event.target.innerWidth) ? event.target.innerWidth : window.innerWidth;
        this.innerHeight = (event.target.innerHeight) ? event.target.innerHeight : window.innerHeight;
    };
    TakePreviewComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            var elems = document.getElementsByClassName('imageZoomS2c');
            // console.log("elements",elems)
            for (var i = 0; i < elems.length; i++) {
                // console.log("elems[i]",elems[i])
                elems[i].addEventListener("wheel", function (event) {
                    // console.log("this",this)
                    // console.log("eve",event)
                    // event = window[''] || event; // old IE support
                    var delta = Math.max(-1, Math.min(1, (event['wheelDelta'] || event['detail'])));
                    // console.log("delta",delta)
                    if (delta > 0) {
                        // console.log('mouse wheel up');
                        this.style.width = (parseInt(this.style.width, 10) + 10) + "px";
                        this.style.height = (parseInt(this.style.height, 10) + 10) + "px";
                        this.style['background-size'] = (parseInt(this.style.width, 10) + 10) + "px" + " " + (parseInt(this.style.height, 10) + 10) + "px";
                    }
                    else if (delta < 0) {
                        console.log('mouse wheel down');
                        this.style.width = (parseInt(this.style.width, 10) - 10) + "px";
                        this.style.height = (parseInt(this.style.height, 10) - 10) + "px";
                        this.style['background-size'] = (parseInt(this.style.width, 10) - 10) + "px" + " " + (parseInt(this.style.height, 10) - 10) + "px";
                    }
                    // for IE
                    event.returnValue = false;
                    // for Chrome and Firefox
                    if (event.preventDefault) {
                        event.preventDefault();
                    }
                });
            }
        }, 10000);
    };
    TakePreviewComponent.prototype.scrollToQuestion = function (id) {
        event && event.stopPropagation();
        if (id && document.getElementById(id)) {
            var currentQHeight = document.getElementById(id).offsetHeight;
            // let scrollOffset: number = (window.innerHeight - currentQHeight)/2;
            // this.services.utils.scrollPage(id, scrollOffset);
            // let currentQHeight = document.getElementById(id)['offsetHeight'];
            var scrollOffset = -1;
            var actionButtonLength = this.elem.nativeElement.getElementsByClassName('action-button-scroll').item(0)['offsetHeight'];
            // if((window.innerHeight - currentQHeight - actionButtonLength) > 0){
            scrollOffset = (window.innerHeight - currentQHeight) / 2 - actionButtonLength / 2;
            (scrollOffset < 0) ? (scrollOffset = -1) : '';
            // }
            // console.log("currentQHeight",currentQHeight)
            console.log("scrollOffset", scrollOffset);
            // console.log("id",id)
            this.services.utils.scrollPage(id, scrollOffset);
        }
    };
    TakePreviewComponent.prototype.scrollDown = function () {
        var _this = this;
        event && event.stopPropagation();
        if (document.getElementsByClassName('inner-question-div')[this.currQIndex + 1]) {
            var currentQHeight = this.elem.nativeElement.getElementsByClassName('inner-question-div')[this.currQIndex + 1]['offsetHeight'];
            var id = document.getElementsByClassName('inner-question-div')[this.currQIndex + 1].getElementsByClassName("question-body overlay")[0]['id'];
            var scrollOffset = -1;
            var actionButtonLength = this.elem.nativeElement.getElementsByClassName('action-button-scroll').item(0)['offsetHeight'];
            // if((window.innerHeight - currentQHeight - actionButtonLength) > 0){
            scrollOffset = (window.innerHeight - currentQHeight) / 2 - actionButtonLength / 2;
            (scrollOffset < 0) ? (scrollOffset = -1) : '';
            // }
            // console.log("currentQHeight",currentQHeight)
            console.log("scrollOffset", scrollOffset);
            // console.log("id",id)
            this.services.utils.scrollPage(id, scrollOffset);
        }
        else if (document.getElementById('done_btn')) {
            var currentDone = document.getElementById('done_btn')['offsetHeight'];
            //   console.log("currentDone",currentDone)
            //   console.log("window.innerHeight",window.innerHeight)
            var scrollOffset_1 = (window.innerHeight - currentDone) / 2;
            setTimeout(function () {
                _this.services.utils.scrollPage('done_btn', scrollOffset_1);
                _this.lowerPanelGo = true;
            }, 10);
        }
        else if (document.getElementById('next_btn')) {
            var currentDone = document.getElementById('next_btn')['offsetHeight'];
            //   console.log("currentDone",currentDone)
            //   console.log("window.innerHeight",window.innerHeight)
            var scrollOffset_2 = (window.innerHeight - currentDone) / 2;
            setTimeout(function () {
                _this.services.utils.scrollPage('next_btn', scrollOffset_2);
                _this.lowerPanelGo = true;
            }, 10);
        }
        else if (document.getElementById('prev_btn')) {
            var currentDone = document.getElementById('prev_btn')['offsetHeight'];
            //   console.log("currentDone",currentDone)
            //   console.log("window.innerHeight",window.innerHeight)
            var scrollOffset_3 = (window.innerHeight - currentDone) / 2;
            setTimeout(function () {
                _this.services.utils.scrollPage('prev_btn', scrollOffset_3);
                _this.lowerPanelGo = true;
            }, 10);
        }
    };
    TakePreviewComponent.prototype.scrollUp = function () {
        event && event.stopPropagation();
        // console.log("this.currQIndex",this.currQIndex)
        if (this.lowerPanelGo) {
            var currentQHeight = this.elem.nativeElement.getElementsByClassName('inner-question-div')[this.currQIndex]['offsetHeight'];
            var id = document.getElementsByClassName('inner-question-div')[this.currQIndex].getElementsByClassName("question-body overlay")[0]['id'];
            var scrollOffset = -1;
            var actionButtonLength = this.elem.nativeElement.getElementsByClassName('action-button-scroll').item(0)['offsetHeight'];
            // if((window.innerHeight - currentQHeight - actionButtonLength) > 0){
            scrollOffset = (window.innerHeight - currentQHeight) / 2 - actionButtonLength / 2;
            (scrollOffset < 0) ? (scrollOffset = -1) : '';
            // }
            // console.log("currentQHeight",currentQHeight)
            console.log("scrollOffset", scrollOffset);
            // console.log("id",id)
            this.services.utils.scrollPage(id, scrollOffset);
            this.lowerPanelGo = false;
        }
        else if (document.getElementsByClassName('inner-question-div')[this.currQIndex - 1]) {
            var currentQHeight = this.elem.nativeElement.getElementsByClassName('inner-question-div')[this.currQIndex - 1]['offsetHeight'];
            var id = document.getElementsByClassName('inner-question-div')[this.currQIndex - 1].getElementsByClassName("question-body overlay")[0]['id'];
            var scrollOffset = -1;
            var actionButtonLength = this.elem.nativeElement.getElementsByClassName('action-button-scroll').item(0)['offsetHeight'];
            // if((window.innerHeight - currentQHeight - actionButtonLength) > 0){
            scrollOffset = (window.innerHeight - currentQHeight) / 2 - actionButtonLength / 2;
            (scrollOffset < 0) ? (scrollOffset = -1) : '';
            // }
            // console.log("currentQHeight",currentQHeight)
            // console.log("scrollOffset",scrollOffset)
            // console.log("id",id)
            this.services.utils.scrollPage(id, scrollOffset);
        }
    };
    TakePreviewComponent.prototype.startSurveyFromIntroPage = function () {
        if (this.getSurveyResponse && this.getSurveyResponse.language.length < 1) {
            this.urlPreviewandTakeSurveyHandling(this.getSurveyResponse.default.langKey);
        }
        else {
            this.langHandleData = this.services.utils.cloneObject(this.getSurveyResponse);
            this.langSelection = true;
        }
    };
    TakePreviewComponent.prototype.evaluateExpression = function (expression) {
        try {
            var result = {
                type: "",
                value: "",
                actualValue: expression
            };
            if (!(window.location.href.toString().indexOf('Preview') > -1)) {
                if (/([\d}}\)])(\*|\+|\-|\/)([\d{{])/g.test(expression)) {
                    result.type = 'equation';
                    result.value = expression;
                }
                else {
                    expression = expression.replace('{{', '').replace('}}', '');
                    result.type = expression.split('://')[0];
                    result.value = decodeURIComponent(expression.split('://')[1]);
                }
            }
            return result;
        }
        catch (e) {
            throw e;
        }
    };
    TakePreviewComponent.prototype.filterIntro = function (type) {
        if (type == 't') {
            var allMatched = this.getSurveyResponse['startPage'].title.match(/{{(e|c):\/\/.*?}}/gi);
            allMatched = (allMatched) ? allMatched : [];
            var _loop_1 = function (i) {
                // console.log(allMatched[i])
                var result1 = null;
                var result2 = null;
                var valueDetailsObj = this_1.evaluateExpression(allMatched[i]);
                // console.log("valueDetailsObj",valueDetailsObj)
                var typeOfED = valueDetailsObj.type;
                valueDetailsObj = valueDetailsObj.value;
                var search = window.location.search.substring(1);
                var jsonObjQuery;
                if (search) {
                    jsonObjQuery = JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
                    Object.keys(jsonObjQuery).forEach(function (key) {
                        if (['langKey', 'qId', 'c', 'r', 'cId', 'eId', 'id', 'n'].indexOf(key) > -1) {
                            delete jsonObjQuery[key];
                        }
                    });
                }
                if (this_1.contacts && this_1.contacts.hasOwnProperty('eData') && this_1.contacts.eData[valueDetailsObj]) {
                    result1 = this_1.contacts.eData[valueDetailsObj][0].value;
                }
                else {
                    result1 = (jsonObjQuery && jsonObjQuery.hasOwnProperty(valueDetailsObj)) ? jsonObjQuery[valueDetailsObj] : null;
                }
                if (typeOfED == 'e') {
                    if (this_1.contacts && this_1.contacts.eData && this_1.contacts.eData[valueDetailsObj]) {
                        result2 = this_1.contacts.eData[valueDetailsObj][0].value;
                    }
                    else {
                        result2 = (this_1.contacts && this_1.contacts.hasOwnProperty('eData') && this_1.contacts.eData.hasOwnProperty(valueDetailsObj)) ? this_1.contacts.eData[valueDetailsObj][0].value : null;
                    }
                }
                else if (typeOfED == 'c') {
                    // console.log("this.contacts[valueDetailsObj]",this.contacts[valueDetailsObj])
                    if (this_1.contacts && this_1.contacts.eData && this_1.contacts.eData[valueDetailsObj]) {
                        result2 = this_1.contacts.eData[valueDetailsObj][0].value;
                    }
                    else {
                        result2 = (this_1.contacts && this_1.contacts.hasOwnProperty(valueDetailsObj)) ? this_1.contacts[valueDetailsObj] : null;
                    }
                }
                var resValue = null;
                if (result1)
                    resValue = result1;
                else if (result2)
                    resValue = result2;
                if (resValue == null)
                    resValue = '';
                this_1.getSurveyResponse['startPage'].title = this_1.getSurveyResponse['startPage'].title.replace(new RegExp(allMatched[i], 'g'), resValue);
            };
            var this_1 = this;
            for (var i = 0; i < allMatched.length; i++) {
                _loop_1(i);
            }
        }
        else if (type == "d") {
            var allMatched = this.getSurveyResponse['startPage'].des.match(/{{(e|c):\/\/.*?}}/gi);
            allMatched = (allMatched) ? allMatched : [];
            var _loop_2 = function (i) {
                // console.log(allMatched[i])
                var result1 = null;
                var result2 = null;
                var valueDetailsObj = this_2.evaluateExpression(allMatched[i]);
                // console.log("valueDetailsObj",valueDetailsObj)
                var typeOfED = valueDetailsObj.type;
                valueDetailsObj = valueDetailsObj.value;
                var search = window.location.search.substring(1);
                var jsonObjQuery;
                if (search) {
                    jsonObjQuery = JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
                    Object.keys(jsonObjQuery).forEach(function (key) {
                        if (['langKey', 'qId', 'c', 'r', 'cId', 'eId', 'id', 'n'].indexOf(key) > -1) {
                            delete jsonObjQuery[key];
                        }
                    });
                }
                // console.log("aa",Object.keys(jsonObjQuery))
                if (this_2.contacts && this_2.contacts.hasOwnProperty('eData') && this_2.contacts.eData[valueDetailsObj]) {
                    result1 = this_2.contacts.eData[valueDetailsObj][0].value;
                }
                else {
                    result1 = (jsonObjQuery && jsonObjQuery.hasOwnProperty(valueDetailsObj)) ? jsonObjQuery[valueDetailsObj] : null;
                }
                if (typeOfED == 'e') {
                    if (this_2.contacts && this_2.contacts.eData && this_2.contacts.eData[valueDetailsObj]) {
                        result2 = this_2.contacts.eData[valueDetailsObj][0].value;
                    }
                    else {
                        result2 = (this_2.contacts && this_2.contacts.hasOwnProperty('eData') && this_2.contacts.eData.hasOwnProperty(valueDetailsObj)) ? this_2.contacts.eData[valueDetailsObj][0].value : null;
                    }
                }
                else if (typeOfED == 'c') {
                    // console.log("this.contacts[valueDetailsObj]",this.contacts[valueDetailsObj])
                    if (this_2.contacts && this_2.contacts.eData && this_2.contacts.eData[valueDetailsObj]) {
                        result2 = this_2.contacts.eData[valueDetailsObj][0].value;
                    }
                    else {
                        result2 = (this_2.contacts && this_2.contacts.hasOwnProperty(valueDetailsObj)) ? this_2.contacts[valueDetailsObj] : null;
                    }
                }
                var resValue = null;
                if (result1)
                    resValue = result1;
                else if (result2)
                    resValue = result2;
                if (resValue == null)
                    resValue = '';
                this_2.getSurveyResponse['startPage'].des = this_2.getSurveyResponse['startPage'].des.replace(new RegExp(allMatched[i], 'g'), resValue);
            };
            var this_2 = this;
            for (var i = 0; i < allMatched.length; i++) {
                _loop_2(i);
            }
        }
    };
    TakePreviewComponent.prototype.getSurvey = function () {
        var _this = this;
        var params = this.route.params['value'];
        this.queryParams = this.route.queryParams['value'];
        this.services.resource.getSurvey(params, 'preview', this.queryParams).subscribe(function (surveyData) {
            if (surveyData.hasOwnProperty('startPage')) {
                _this.getSurveyResponse = surveyData;
                if (surveyData.hasOwnProperty('contacts')) {
                    _this.contacts = surveyData.contacts;
                }
                _this.filterIntro('t');
                _this.filterIntro('d');
                _this.introPage = true;
            }
            else if (surveyData.hasOwnProperty('cancelUrl')) {
                if (surveyData.language.length < 1) {
                    _this.urlPreviewandTakeSurveyHandling(surveyData.default.langKey);
                }
                else {
                    _this.langHandleData = _this.services.utils.cloneObject(surveyData);
                    _this.langSelection = true;
                }
            }
            else if (surveyData.hasOwnProperty('msg')) {
                _this.closedSurvey = surveyData.msg ? surveyData.msg : "This survey is currently closed";
            }
            else {
                _this.setSurveyData(surveyData);
                // this.services.form.formObj.removeHiddenQuestions();
                // let qL = this.services.form.formObj.getPageFields()[0].formFields.length;
                _this.showDown = true;
                _this.showUp = false;
                _this.lowerPanelGo = false;
                _this.currQIndex = 0;
                // if(qL == 1){
                //     this.question = {
                //         lastCame: true,
                //         firstCame: true
                //     };
                // }
                // if(this.takeSurvey.getThemeCSSObject()){
                _this.pageCss = _this.services.form.formObj.getPageFields()[0].getCssObj(_this.services.form.formObj.theme);
                _this.surveyCss = _this.services.form.formObj.theme.getThemeCssObj().survey;
                // }
                // console.log("this.surveyCss",this.surveyCss)
                // console.log("this.pageCss",this.pageCss)
                // if(this.services.form.formObj.getPageFields()[0]['themeSetId']){
                //     this.pageCss = this.services.form.formObj.theme.getThemeSet(this.services.form.formObj.getPageFields()[0]['themeSetId']);
                // }
                // console.log("this.surveyCss AFTER",this.surveyCss)
                // console.log("this.pageCss AFTER",this.pageCss)
                // applyTheme(1);
                // getLocation();
                // applySurveyTheme();
            }
        });
    };
    TakePreviewComponent.prototype.scrollUpDown = function (event) {
        (event.currQIndex != 'last') ? (this.currQIndex = event.currQIndex) : '';
        // this.currPageQuesCount = event.totolQs;
        // console.log("event.currQIndex",event.currQIndex);
        // console.log("this.currQIndex",this.currQIndex);
        if ("last" == event.currQIndex) {
            this.lowerPanelGo = true;
            this.showDown = false;
            this.showUp = true;
            // this.question = {
            //   lastCame: true,
            //   firstCame: false
            // };
        }
        else if (event.currQIndex == 0) {
            this.lowerPanelGo = false;
            this.showDown = true;
            this.showUp = false;
        }
        else {
            this.lowerPanelGo = false;
            this.showDown = true;
            this.showUp = true;
        }
    };
    TakePreviewComponent.prototype.setSurveyData = function (data) {
        if (data.surveyBody) {
            this.services.form.setFormData(this.services.utils.cloneObject(data.surveyBody));
            this.surveyBody = this.services.form.formObj.getSurvey();
            this.setLanguageData();
        }
        this.takeSurvey.setInitialData(this.services.utils.cloneObject(data), this.route.queryParams['value']);
        this.takeSurvey.configureSurvey(data, this.router.url);
        this.respData = this.responseServ.getResponseData();
        this.reqOn = false;
        this.langDirection = this.takeSurvey.getLanguageDirection();
        var languageDetails = this.takeSurvey.getLanguageDetails();
        var language = this.takeSurvey.getLanguage();
        var langKey = languageDetails['langKey'];
        var surId = this.services.form.formObj.getId();
        if (language && language.hasOwnProperty('langData') && language['langData'].hasOwnProperty(langKey)) {
            var lang = language['langData'][langKey];
            if (lang.hasOwnProperty(surId) && lang[surId].title) {
                this.surveyBody['title'] = lang[surId].title;
            }
            if (lang.hasOwnProperty(surId) && lang[surId].next) {
                this.surveyBody['next'] = lang[surId].next;
            }
            if (lang.hasOwnProperty(surId) && lang[surId].done) {
                this.surveyBody['done'] = lang[surId].done;
            }
            if (lang.hasOwnProperty(surId) && lang[surId].previous) {
                this.surveyBody['previous'] = lang[surId].previous;
            }
        }
        if (this.surveyBody && this.surveyBody['trackLocation'] == 1) {
            if (this.respData && this.respData.responsePage
                && this.respData.responsePage.geoData && !this.respData.responsePage.geoData.location.coordinates.length) {
                // console.log("geodata",this.respData.responsePage.getId());
                if (navigator.geolocation) {
                    var th_1 = this;
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var lat = position.coords.latitude;
                        var lng = position.coords.longitude;
                        // var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + '%2C' + lon + '&key=AIzaSyCuKel8gEbxybO8lDe1MDG5E3Nx3H4lUNI';
                        // $.getJSON(GEOCODING).done(function(location) {
                        // 	for (var i = 0; i < location.results[0].address_components.length; i++) {
                        // 		for (var j = 0; j < location.results[0].address_components[i].types.length; j++) {
                        // 			if (location.results[0].address_components[i].types[j] == "country") {
                        // 				geoObj["country"] = location.results[0].address_components[i].long_name;
                        // 				geoObj["country_code"] = location.results[0].address_components[i].short_name;
                        // 			} else if (location.results[0].address_components[i].types[j] == "administrative_area_level_1") {
                        // 				geoObj["administrative_area_level_1"] = location.results[0].address_components[i].long_name;
                        // 				geoObj["administrative_area_level_1_code"] = location.results[0].address_components[i].short_name;
                        // 			} else if (location.results[0].address_components[i].types[j] == "locality") {
                        // 				geoObj["locality"] = location.results[0].address_components[i].long_name;
                        // 				geoObj["locality_code"] = location.results[0].address_components[i].short_name;
                        // 			}
                        // 		}
                        // 	}
                        // geoObj["misc"] = location.results[0];
                        // geoObj["gplace_id"] = location.results[0].place_id;
                        // geoObj["formatted_address"] = location.results[0].formatted_address;
                        var geoObj = {};
                        geoObj["lat"] = lat;
                        geoObj["lng"] = lng;
                        geoObj["type"] = "Point";
                        th_1.services.resource.setLocation(th_1.respData.responsePage._id, geoObj).subscribe(function (data) {
                            //   console.log("set",data);
                        });
                    }, this.errorCallback);
                }
            }
        }
    };
    TakePreviewComponent.prototype.handleshopperFact = function (surveyBody) {
        var data = this.takeSurvey.handleshopperFact(surveyBody, this.route.queryParams['value']['hasWebGL']);
        return (this.route.queryParams['value']['hasWebGL'] == '0');
    };
    TakePreviewComponent.prototype.getTotalQuestionCount = function () {
        return this.responseServ.getTotalQuestionCountMinusCurrPage().count + ((this.responseServ.getTotalQuestionCountMinusCurrPage().includeDom && this.respData.responsePage.absPageNum > 1) ? document.getElementsByClassName('inner-question-div').length : 0);
    };
    TakePreviewComponent.prototype.getQuestionProgressPercentage = function () {
        return Math.round(((this.getQuestionAnsweredCount()) / this.getTotalQuestionCount()) * 100) + '%';
    };
    TakePreviewComponent.prototype.getQuestionAnsweredCount = function () {
        return this.responseServ.getCurrPageQuesAnswered();
    };
    TakePreviewComponent.prototype.submitSurvey = function (key) {
        var _this = this;
        this.hitGoing = true;
        // setTimeout(() => {
        this.loaderSlimService.start();
        // }, 10);
        // () => {
        //   console.log('Loading complete');
        // });
        //for(let i = 0; i< 1000; i++){
        //  console.log("Wait",i);
        //}
        var reqFlagOn = true;
        var firstQidReqUnans = "";
        if (this.takeSurvey.requiredQuestionList().length > 0) {
            if (this.responseServ.getResponseData().responsePage.resAObj) {
                var tempFlag = false;
                for (var i = 0; i < this.takeSurvey.requiredQuestionList().length; i++) {
                    if (!this.existsInResAObj(this.takeSurvey.requiredQuestionList()[i], this.responseServ.getResponseData().responsePage.resAObj)) {
                        if (!tempFlag) {
                            firstQidReqUnans = this.takeSurvey.requiredQuestionList()[i];
                            tempFlag = true;
                        }
                        reqFlagOn = false;
                    }
                }
            }
        }
        this.reqOn = !reqFlagOn;
        // reqFlagOn = true; //comment entire line to enable required check!! --- TODO
        if (reqFlagOn || (key == '0')) {
            //   if (this.services.form.formObj.getPageFields().length) {
            //       this.respData.currPLen = this.services.form.formObj.getPageFields()[0].getQuestionsCount();
            //   }
            this.takeSurvey.submitSurvey(key).subscribe(function (surveyData) {
                console.log("surveyData", surveyData);
                _this.setSurveyData(surveyData);
                // this.services.form.formObj.removeHiddenQuestions();
                if (!surveyData.end && !surveyData.thank && !surveyData.enddisqua && surveyData.surveyBody.pageFields[0].formFields[surveyData.surveyBody.pageFields[0].formFields.length - 1]) {
                    // let firstQHeight = surveyData.surveyBody.pageFields[0].formFields[0]['scrollHeight'];
                    // let scrollOffset: number = (window.innerHeight - firstQHeight)/2;
                    // setTimeout(() => {
                    //   this.scrollToQuestion(surveyData.surveyBody.pageFields[0].formFields[surveyData.surveyBody.pageFields[0].formFields.length - 1]._id);
                    // }, 1);
                    window.scrollTo(0, 0);
                }
                else {
                    // setTimeout(() => {
                    // if(surveyData.surveyBody.pageFields[0].formFields[surveyData.surveyBody.pageFields[0].formFields.length - 1])
                    //   this.scrollToQuestion(surveyData.surveyBody.pageFields[0].formFields[surveyData.surveyBody.pageFields[0].formFields.length - 1]._id);
                    // else
                    //   window.scrollTo(0,0);
                    // }, 10);
                }
                // this.setSurveyData(surveyData);
                // this.services.form.formObj.removeHiddenQuestions();
                // this.currPageQuesCount = this.services.form.formObj.getPageFields()[0].formFields.length;
                //console.log("survData",surveyData)
                // console.log("\n\n\nNEXT\n\n\n",this.surveyOptions);
                // console.log("\n\n\ncureent ques num  \n\n\n",this.currPageQuesCount);
                // if(this.currPageQuesCount == 1){
                //   this.question = {
                //     lastCame: true,
                //     firstCame: true
                //   };
                // }else{
                _this.showDown = true;
                _this.showUp = false;
                _this.lowerPanelGo = false;
                _this.currQIndex = 0;
                _this.hitGoing = false;
                setTimeout(function () {
                    _this.loaderSlimService.complete();
                }, 10);
                // }
            });
        }
        else {
            if (firstQidReqUnans) {
                this.scrollToQuestion(firstQidReqUnans);
                if (document.getElementById(firstQidReqUnans).getElementsByClassName('req_err_msg'))
                    document.getElementById(firstQidReqUnans).getElementsByClassName('req_err_msg')[0]['hidden'] = false;
            }
            this.hitGoing = false;
            setTimeout(function () {
                _this.loaderSlimService.complete();
            }, 10);
        }
    };
    TakePreviewComponent.prototype.existsInResAObj = function (qID, resAObj) {
        var exists = false;
        for (var i = 0; i < Object.keys(resAObj).length; i++) {
            if (qID == (Object.keys(resAObj)[i] + "")) {
                exists = true;
            }
        }
        return exists;
    };
    TakePreviewComponent.prototype.goToExitUrl = function () {
        window.location.href = this.exitLink;
    };
    TakePreviewComponent.prototype.getProgressPercentage = function () {
        return Math.round((parseInt(this.respData.responsePage.absPageNum) / parseInt(this.respData.responsePage.totPages)) * 100) + '%';
    };
    TakePreviewComponent.prototype.errorCallback = function (error) {
        if (error.code == error.PERMISSION_DENIED) {
            // pop up dialog asking for location
            try {
                webkit.messageHandlers.locationDeny.postMessage({ "success": true });
            }
            catch (err) { }
        }
    };
    TakePreviewComponent.prototype.urlPreviewandTakeSurveyHandling = function (langKey) {
        var hrefUrl = window.location.href;
        var arrHref = [];
        var checkMark = '?';
        arrHref = hrefUrl.split('');
        if (arrHref.indexOf(checkMark) > 0) {
            window.location.href = window.location.href + '&langKey=' + langKey;
        }
        else {
            window.location.href = window.location.href + '?langKey=' + langKey;
        }
    };
    TakePreviewComponent.prototype.setLanguageData = function () {
        var _this = this;
        this.languageMap = {
            langArr: [],
            langMap: {}
        };
        this.languageMap['langArr'].push(this.surveyBody['defLang']);
        this.surveyBody['language'].forEach(function (a) {
            _this.languageMap.langArr.push(a);
        });
        this.languageMap.langArr.forEach(function (a) {
            a["langCode"] = a.name.substr(0, 2).toUpperCase();
            _this.languageMap.langMap[a.langKey] = a;
        });
    };
    TakePreviewComponent.prototype.changeLanguage = function (lang) {
        var langKey = lang.langKey;
        var response = this.responseServ.getResponseData();
        this.takeSurvey.setLanguageDetails(lang);
        this.langDirection = lang.direction;
        //   console.log("\n\n\nsdfas\n\n",langKey);
        //   console.log("\n\n\sas\n\n",response.responsePage.langKey);
        if (response.responsePage && response.responsePage.langKey == langKey) {
            return;
        }
        else {
            var language = this.takeSurvey.getLanguage();
            var surId = this.services.form.formObj.getId();
            if (language && language.hasOwnProperty('langData') && language['langData'].hasOwnProperty(langKey)) {
                var lang_1 = language['langData'][langKey];
                if (lang_1.hasOwnProperty(surId) && lang_1[surId].title) {
                    this.surveyBody['title'] = lang_1[surId].title;
                }
                if (lang_1.hasOwnProperty(surId) && lang_1[surId].next) {
                    this.surveyBody['next'] = lang_1[surId].next;
                }
                if (lang_1.hasOwnProperty(surId) && lang_1[surId].done) {
                    this.surveyBody['done'] = lang_1[surId].done;
                }
                if (lang_1.hasOwnProperty(surId) && lang_1[surId].previous) {
                    this.surveyBody['previous'] = lang_1[surId].previous;
                }
            }
            else {
                var survey = this.takeSurvey.getSurveyData();
                if (survey.hasOwnProperty('surveyBody')) {
                    this.surveyBody['title'] = survey["surveyBody"].title;
                    this.surveyBody['next'] = survey["surveyBody"].next;
                    this.surveyBody['done'] = survey["surveyBody"].done;
                    this.surveyBody['previous'] = survey["surveyBody"].previous;
                }
            }
            var page = this.takeSurvey.translatePage(this.services.form.formObj.getPageFields()[0]);
            this.services.form.formObj.setPageFields([page]);
            this.surveyBody["pageFields"] = this.services.form.formObj.getPageFields();
        }
        response.responsePage["langKey"] = langKey;
        this.languageActiveList = !this.languageActiveList; // Closing the language selection
    };
    return TakePreviewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TakePreviewComponent.prototype, "onResize", null);
TakePreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-take-preview',
        template: __webpack_require__("./src/app/routes/take-survey/take.survey.component.html"),
        styles: [__webpack_require__("./src/app/routes/take-survey/take.survey.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_take_survey_service__["a" /* TakeSurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_take_survey_service__["a" /* TakeSurveyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_survey_options_service__["a" /* SurveyOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_survey_options_service__["a" /* SurveyOptionsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_survey_response_service__["a" /* SurveyResponseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_survey_response_service__["a" /* SurveyResponseService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_services_module__["a" /* SharedServices */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_constants_service__["a" /* ConstantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_constants_service__["a" /* ConstantsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _k || Object])
], TakePreviewComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=take.preview.component.js.map

/***/ }),

/***/ "./src/app/routes/take-survey/take.survey.component.html":
/***/ (function(module, exports) {

module.exports = "<ng2-slim-loading-bar [color]=\"(surveyCss?.body)?(surveyCss.body.color):'blue'\"></ng2-slim-loading-bar>\n<section class=\"take-survey-div\" *ngIf=\"surveyBody && !report?.data && !introPage && !closedSurvey\" dir=\"{{langDirection}}\" [ngStyle]=\"surveyCss?.body\">\n  <header class=\"take-survey-header\" style=\"min-height:53px\" *ngIf=\"surveyOptions.setting.showTitle || surveyOptions.setting.logo.hasLogo || languageMap.langArr.length > 1\" dir=\"{{langDirection}}\" [ngStyle]=\"surveyCss?.header\" >\n    <div style=\"padding: 5px; max-width: 896px; margin: auto;\">\n      <h1 *ngIf=\"surveyOptions.setting.logo.hasLogo && (surveyOptions.setting.logo.position == 'above')\" class=\"survey-logo\" [ngStyle]=\"{'text-align':surveyOptions.setting.logo.allignment.toLowerCase()}\" dir=\"{{langDirection}}\">\n        <img [src]=\"constants.apiUrl + 'v1/survey/' + surveyOptions.setting.id + '/logo?size=' + surveyOptions.setting.logo.size\" style=\"max-width:100%\">\n        <span dir=\"{{langDirection}}\">{{surveyOptions.setting.logo.desc}}</span>\n      </h1>\n      <div [ngStyle]=\"surveyCss?.title\" dir=\"{{langDirection}}\">\n        <div  [attr.data-id]=\"surveyBody._id\" data-body=\"survey-title\">\n          <div *ngIf=\"surveyOptions.setting.showTitle\" class=\"title-text\" [innerHTML]=\"surveyBody.title\"></div>\n          <div class=\"btn-group language-container\" dropdown [ngClass]=\"langDirection == 'rtl' ? 'pull-left': 'pull-right'\" *ngIf=\"languageMap.langArr.length > 1\">\n            <div dropdownToggle class=\"dropdown-toggle\" style=\"cursor: pointer;\" title=\"Language\">\n              <!-- <img src=\"/assets/images/editSurvey/earth.svg\" class=\"language-selet-image\"> -->\n              <span class=\"current-lang language-selet-image\"> {{ langConfig[respData.responsePage.langKey].NAME }} </span>\n            </div>\n            <ul *dropdownMenu class=\"language-change-list dropdown-menu\" role=\"menu\">\n                <li [ngClass]=\"respData.responsePage.langKey == lng.langKey ? 'current-language-li': ''\" class=\"language-li\" *ngFor=\"let lng of languageMap.langArr\" (click)=\"changeLanguage(lng)\">\n                  <span class=\"current-lang-title\">\n                    {{ langConfig[lng.langKey].NAME }}\n                  </span>\n                </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <h1 *ngIf=\"surveyOptions.setting.logo.hasLogo && (surveyOptions.setting.logo.position == 'below')\" class=\"survey-logo\" [ngStyle]=\"{'text-align':surveyOptions.setting.logo.allignment.toLowerCase()}\" dir=\"{{langDirection}}\">\n        <img [src]=\"constants.apiUrl + 'v1/survey/' + surveyOptions.setting.id + '/logo?size=' + surveyOptions.setting.logo.size\" style=\"max-width:100%\">\n        <span>{{surveyOptions.setting.logo.desc}}</span>\n      </h1>\n      <div [ngClass]=\"langDirection == 'rtl' ? 'pull-left': 'pull-right'\" class=\"page-exit-btn hover-select\" (click)=\"goToExitUrl()\"  [hidden]=\"!surveyOptions.setting.showExit\" dir=\"{{langDirection}}\">\n        <button [ngStyle]=\"pageCss?.exitBtn\" style=\"border-radius: 3px;\" dir=\"{{langDirection}}\">{{surveyBody.exit}}</button>\n      </div>\n    </div>\n  </header>\n  <section *ngIf=\"surveyOptions.setting.customEndPageType != ''\" dir=\"{{langDirection}}\">\n    <app-custom-end-page [custInfo]=\"surveyOptions.setting.customEndPageInfo\" [custType]=\"surveyOptions.setting.customEndPageType\">\n    </app-custom-end-page>\n  </section>\n  <section *ngIf=\"surveyOptions.setting.customEndPageType == ''\" [ngSwitch]=\"surveyOptions.surveyStatus\" dir=\"{{langDirection}}\">\n    <div *ngSwitchCase=\"surveyOptionsServ.surveyStatus.survey.value\" dir=\"{{langDirection}}\">\n      <div class=\"page-div\" dir=\"{{langDirection}}\">\n        <div [hidden]=\"(!surveyOptions.setting.showProg.hasProg || surveyOptions.setting.showProg.position) || (innerWidth <= 950)\" style=\"text-align: center; margin: 16px 0px;\" dir=\"{{langDirection}}\">\n          <span class=\"progress_text\" [style.color]=\"(surveyCss?.progressBar.color)?surveyCss?.progressBar.color:'blue'\" *ngIf=\"surveyOptions.setting.showProg.format.showPages == 1 || surveyOptions.setting.showProg.format.showPages == 2\" dir=\"{{langDirection}}\">{{getProgressPercentage()}} {{langConfig[respData.responsePage.langKey].percentCompleted}} </span>\n          <div class=\"progress\"  [style.width]=\"surveyCss?.progressBar.width?surveyCss?.progressBar.width:'300px'\" style=\"display:inline-block; margin-bottom: 0px;\" dir=\"{{langDirection}}\">\n              <div role=\"progressbar\" [style.height]=\"'100%'\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.backgroundColor]=\"(surveyCss?.progressBar.color)?surveyCss?.progressBar.color:'blue'\" [style.width]=\"getProgressPercentage()\" dir=\"{{langDirection}}\">\n              </div>\n          </div>\n            <div style=\"vertical-align: super;\" class=\"progressPageNo\" *ngIf=\"surveyOptions.setting.showProg.format.showPages == 0 || surveyOptions.setting.showProg.format.showPages == 2\" [ngClass]=\"langDirection == 'rtl' ? 'text_page_rtl' : 'text_page'\" dir=\"{{langDirection}}\" >\n            <span class=\"currentPageNo\" dir=\"{{langDirection}}\">{{respData.responsePage.absPageNum}}</span>/<span class=\"totalPages\" dir=\"{{langDirection}}\">{{respData.responsePage.totPages}}</span> Pages\n          </div>\n        </div>\n        <div class=\"inner-page-div\" *ngFor=\"let page of surveyBody.pageFields; index as page_idx\" dir=\"{{langDirection}}\">\n          <survey-page [pageData]=\"page\" dir=\"{{langDirection}}\" [langDirection]=\"langDirection\" (onChange)=\"scrollUpDown($event)\" (submitSurvey)=\"submitSurvey($event)\"></survey-page>\n          <div class=\"survey-page-footer\" [ngStyle]=\"pageCss?.body\" dir=\"{{langDirection}}\">\n            <div class=\"action-button\" dir=\"{{langDirection}}\" *ngIf=\"innerWidth > 950\">\n              <span id=\"prev_btn\" class=\"page-prev-btn hover-select\" (click)=\"submitSurvey('0')\" *ngIf=\"surveyOptions.buttonOptions.previous && surveyOptions.setting.showPrevBtn\" style=\"display:inline-block;\" [style.opacity]=\"(hitGoing)?'0.3':1\">\n                <button [ngStyle]=\"pageCss?.prevBtn\" style=\"border-radius: 3px;\" [disabled]=\"hitGoing\" dir=\"{{langDirection}}\" >{{surveyBody.previous}}</button>\n              </span>\n              <span id=\"next_btn\" class=\"page-next-btn hover-select\" (click)=\"submitSurvey('1')\" *ngIf=\"surveyOptions.buttonOptions.next\" style=\"display:inline-block;\" [style.opacity]=\"(hitGoing)?'0.3':1\">\n                <button [ngStyle]=\"pageCss?.nextBtn\" style=\"border-radius: 3px;\" [disabled]=\"hitGoing\">{{surveyBody.next}}</button>\n              </span>\n              <span  id=\"done_btn\" class=\"page-done-btn hover-select\" (click)=\"submitSurvey('2')\" *ngIf=\"surveyOptions.buttonOptions.done\" style=\"display:inline-block;\" [style.opacity]=\"(hitGoing)?'0.3':1\">\n                <button [ngStyle]=\"pageCss?.doneBtn\" style=\"border-radius: 3px;\" [disabled]=\"hitGoing\">{{surveyBody.done}}</button>\n              </span>\n              <div style=\"text-align: center; position: relative; bottom: 28px; font-size: 12px;\" *ngIf=\"hitGoing\">\n                <!-- Loading... -->\n              </div>\n            </div>\n            <div [hidden]=\"(!surveyOptions.setting.showProg.hasProg || !surveyOptions.setting.showProg.position) || (innerWidth <= 950)\" class=\"center_left\">\n              <span [style.color]=\"(surveyCss?.progressBar.color)?surveyCss?.progressBar.color:'blue'\" class=\"progress_text\" *ngIf=\"surveyOptions.setting.showProg.format.showPages == 1 || surveyOptions.setting.showProg.format.showPages == 2\">{{getProgressPercentage()}} {{langConfig[respData.responsePage.langKey].percentCompleted}}</span>\n              <div class=\"progress\" [style.width]=\"surveyCss?.progressBar.width?surveyCss?.progressBar.width:'300px'\" style=\"display:inline-block; margin-bottom: 0px;\" dir=\"{{langDirection}}\">\n                  <div role=\"progressbar\" [style.height]=\"'100%'\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.backgroundColor]=\"(surveyCss?.progressBar.color)?surveyCss?.progressBar.color:'blue'\" [style.width]=\"getProgressPercentage()\" dir=\"{{langDirection}}\">\n                  </div>\n              </div>\n                <div style=\"vertical-align: super;\" class=\"progressPageNo\" *ngIf=\"surveyOptions.setting.showProg.format.showPages == 0 || surveyOptions.setting.showProg.format.showPages == 2\" [ngClass]=\"langDirection == 'rtl' ? 'text_page_rtl' : 'text_page'\">\n                <span class=\"currentPageNo\">{{respData.responsePage.absPageNum}}</span>/<span class=\"totalPages\">{{respData.responsePage.totPages}}</span> Pages\n              </div>\n            </div>\n          </div>\n          <div class=\"survey-page-done\" dir=\"{{langDirection}}\" *ngIf=\"innerWidth <= 950\" [ngStyle]=\"pageCss?.body\">\n            <div style=\"text-align: center; position: fixed; bottom: 216px; left: 172px;\" *ngIf=\"hitGoing\">\n              <!-- Loading... -->\n            </div>\n            <span id=\"prev_btn\" class=\"page-prev-btn hover-select\" (click)=\"submitSurvey('0')\" *ngIf=\"surveyOptions.buttonOptions.previous && surveyOptions.setting.showPrevBtn\" style=\"display:inline-block;\" [style.opacity]=\"(hitGoing)?'0.3':1\">\n              <button [ngStyle]=\"pageCss?.prevBtn\" style=\"border-radius: 3px;\" [disabled]=\"hitGoing\" dir=\"{{langDirection}}\">{{surveyBody.previous}}</button>\n            </span>\n            <span id=\"next_btn\" class=\"page-next-btn hover-select\" (click)=\"submitSurvey('1')\" *ngIf=\"surveyOptions.buttonOptions.next\" style=\"display:inline-block;\" [style.opacity]=\"(hitGoing)?'0.3':1\">\n              <button [ngStyle]=\"pageCss?.nextBtn\" style=\"border-radius: 3px;\" [disabled]=\"hitGoing\">{{surveyBody.next}}</button>\n            </span>\n            <span id=\"done_btn\" class=\"page-done-btn hover-select\" (click)=\"submitSurvey('2')\" *ngIf=\"surveyOptions.buttonOptions.done\" dir=\"{{langDirection}}\" [style.opacity]=\"(hitGoing)?'0.3':1\">\n              <button [ngStyle]=\"pageCss?.doneBtn\" style=\"border-radius: 3px;\" dir=\"{{langDirection}}\" [disabled]=\"hitGoing\">{{surveyBody.done}}</button>\n            </span>\n          </div>\n          <div class=\"logo_footer\" *ngIf=\"getProgressPercentage() == '100%'\">\n            <div style=\"border-top: 1px solid #cccaca; width: 40%; margin: auto;\"></div>\n            <span style=\"color: #403e3e; font-size: 11px;\">Powered By</span>\n            <div style=\"margin-top: 16px\">\n              <img src=\"assets/images/s2c-img-mysurvey-logo.png\" height=\"40px\">\n            </div>\n          </div>\n          <div class=\"action-button-scroll\" dir=\"{{langDirection}}\"  [style.backgroundColor]=\"surveyCss?.body?.backgroundColor || 'white'\" [ngStyle]=\"surveyCss?.body\">\n\n              <div dir=\"{{langDirection}}\">\n                <div *ngIf=\"(surveyOptions.setting.showQProgMobTab && innerWidth <= 950) || (surveyOptions.setting.showQProgDesktop && innerWidth > 950)\" class=\"progress_bar\" dir=\"{{langDirection}}\" style=\"display:inline; margin-left: 8px; margin-right: 8px;\">\n                  <span class=\"progress_text progress_question_text\" [style.color]=\"(surveyCss?.progressBar.color)?surveyCss?.progressBar.color:'blue'\">{{getQuestionProgressPercentage()}}   {{langConfig[respData.responsePage.langKey].percentCompleted}} </span>\n                  <div  class=\"progress\"  [ngStyle]=\"surveyCss?.progressBar\" [style.max-width]=\"'calc(100% - 110px)'\" style=\"text-align: center; display:inline-block; margin-bottom: 0px; margin-top: 21px;\" dir=\"{{langDirection}}\">\n                    <div [style.backgroundColor]=\"(surveyCss?.progressBar.color)?surveyCss?.progressBar.color:'blue'\" [style.height]=\"'100%'\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width]=\"getQuestionProgressPercentage()\" dir=\"{{langDirection}}\">\n                    </div>\n                  </div>\n                </div>\n                <!-- <div *ngIf=\"surveyOptions.setting.showQProg\" class=\"progressPageNo\" [ngClass]=\"langDirection == 'rtl' ? 'text_page_rtl' : 'text_page'\" dir=\"{{langDirection}}\">\n                  <span class=\"currentPageNo\" dir=\"{{langDirection}}\">{{getQuestionAnsweredCount()}}</span>\n                  <span [innerHTML]=\"langDirection == 'rtl' ? '\\\\' : '/'\"></span>\n                  <span class=\"totalPages\" dir=\"{{langDirection}}\">{{getTotalQuestionCount()}}</span>\n                  <span class=\"\" [innerHTML]=\"respData.responsePage.langKey == 'arab_gulf' ? 'أجاب' : 'Answered'\"></span>\n                </div> -->\n                <div [ngClass]=\"langDirection == 'rtl'? 'float_right_rtl' : 'float_right'\">\n                  <div [ngClass]=\"showUp ? 'show-up-arrow' : 'show-up-arrow-disabled'\" class=\"button_icon\" [ngStyle]=\"pageCss?.prevBtn\" (click)=\"scrollUp()\">\n                      <span class=\"icon-up-arrow\"></span>\n                  </div>\n                  <div [ngClass]=\"showDown ? 'show-down-arrow' : 'show-down-arrow-disabled'\" class=\"button_icon\" [ngStyle]=\"pageCss?.nextBtn\" (click)=\"scrollDown()\">\n                    <span class=\"icon-drop-icon\"></span>\n                  </div>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"surveyOptionsServ.surveyStatus.message.value\" dir=\"{{langDirection}}\">\n      {{surveyMessage}}\n    </div>\n\n    <div *ngSwitchCase=\"surveyOptionsServ.surveyStatus.taken.value\" dir=\"{{langDirection}}\">\n      {{surveyMessage}}\n    </div>\n  </section>\n</section>\n<section class=\"language-selection\" *ngIf=\"langSelection && langHandleData && !closedSurvey\">\n  <div class=\"col-md-12\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"language-div col-md-6\">\n      <h3 [ngClass]=\"langConfig[langItem].direction == 'rtl'? 'language-question-rtl' : 'language-question'\" *ngFor=\"let langItem of (langConfig | keys)\" dir=\"{{langConfig[langItem].direction}}\"> {{ langConfig[langItem].langQues }} </h3>\n      <ul class=\"language-list\">\n        <li class=\"language-list-item\" *ngIf=\"langHandleData.default\">\n          <label class=\"language-labels\"> <input class=\"language-radio\" type=\"radio\" (click)=\"urlPreviewandTakeSurveyHandling(langHandleData.default.langKey)\"> {{ langConfig[langHandleData.default.langKey].NAME }}</label>\n        </li>\n        <li class=\"language-list-item\" *ngFor=\"let lang of langHandleData.language; index as idx\">\n          <label class=\"language-labels\"> <input class=\"language-radio\" type=\"radio\" (click)=\"urlPreviewandTakeSurveyHandling(lang.langKey)\">{{ langConfig[lang.langKey].NAME }} </label>\n        </li>\n      </ul>\n  </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</section>\n<section *ngIf=\"report?.data && !introPage && !closedSurvey\">\n  <div [innerHTML]=\"report.data.pageContent | safeHtml\">\n  </div>\n  <div class=\"text-center\">\n      <a class=\"btn s2c-btn-primary\" href=\"{{report.data.exportUrl}}\" target=\"_blank\">Download</a>\n      <!-- <button class=\"btn s2c-btn-success\" id=\"email-report\">Email</button>\\ -->\n  </div>\n</section>\n\n<section *ngIf=\"introPage && !closedSurvey\">\n  <div [ngStyle]=\"{'background-size':'cover','background-color': getSurveyResponse['startPage'].backgroundColor, 'background-image': 'url('+getSurveyResponse['startPage'].imageBGSrc+')', 'background-attachment': 'fixed', 'min-height': '100vh'}\">\n    <div></div>\n    <div [ngStyle]=\"{'text-align': getSurveyResponse['startPage'].alignImg}\">\n      <div [ngStyle]=\"getSurveyResponse['startPage'].marginImg\">\n        <img [src]=\"getSurveyResponse['startPage'].imageSrc\">\n      </div>\n    </div>\n    <div style=\"padding: 30px; color: #3A3A3A;\tfont-family: 'Helvetica';\">\n      <div style=\"text-align:center;\">\n        <div [ngStyle]=\"getSurveyResponse['startPage'].marginTitle\">\n          <span [innerHTML]=\"getSurveyResponse['startPage'].title | safeHtml\"></span>\n        </div>\n        <div [ngStyle]=\"getSurveyResponse['startPage'].marginDes\">\n          <span [innerHTML]=\"getSurveyResponse['startPage'].des | safeHtml\"></span>\n        </div>\n        <div [ngStyle]=\"{'text-align': getSurveyResponse['startPage'].alignBtn}\">\n          <div [ngStyle]=\"getSurveyResponse['startPage'].marginBtn\">\n            <button type=\"button\" class=\"btn btn_primary\" [ngStyle]=\"{'color':getSurveyResponse['startPage'].buttonTextColor, 'background-color':getSurveyResponse['startPage'].buttonBGColor, 'border': ((getSurveyResponse['startPage'].borderBtn)?getSurveyResponse['startPage'].borderBtn.width:'0')+'px '+ ((getSurveyResponse['startPage'].borderBtn)?getSurveyResponse['startPage'].borderBtn.type:'none')+' '+((getSurveyResponse['startPage'].borderBtn)?getSurveyResponse['startPage'].borderBtn.color:'')}\" (click)=\"startSurveyFromIntroPage()\">{{getSurveyResponse['startPage'].buttonText}}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section *ngIf=\"closedSurvey\">\n  <div [innerHTML]=\"closedSurvey\" style=\"text-align:center; margin-top: 96px; font-size: 28px; font-weight: 800\"></div>\n  <div style=\"text-align: center;\">\n    <div style=\"border-top: 1px solid #cccaca; width: 40%; margin: auto; margin-bottom: 100px;\"></div>\n    <span style=\"color: #403e3e; font-size: 11px;\">Powered By</span>\n    <div style=\"margin-top: 16px\">\n      <img src=\"assets/images/s2c-img-mysurvey-logo.png\" height=\"40px\">\n    </div>\n  </div>\n</section>\n<!-- {{surveyOptions|json}} -->\n"

/***/ }),

/***/ "./src/app/routes/take-survey/take.survey.component.scss":
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'ficomoon';\n  src: url(\"/assets/fonts/fonts-up-down/ficomoon.eot?pw58e2\");\n  src: url(\"/assets/fonts/fonts-up-down/ficomoon.eot?pw58e2#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/fonts-up-down/ficomoon.ttf?pw58e2\") format(\"truetype\"), url(\"/assets/fonts/fonts-up-down/ficomoon.woff?pw58e2\") format(\"woff\"), url(\"/assets/fonts/fonts-up-down/ficomoon.svg?pw58e2#icomoon\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"arrow-\"], [class*=\" arrow-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'ficomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n@font-face {\n  font-family: 'icomoon';\n  src: url(\"/assets/fonts/up-down-arrow-fonts/icomoon.eot?zvn9w\");\n  src: url(\"/assets/fonts/up-down-arrow-fonts/icomoon.eot?zvn9w#iefix\") format(\"embedded-opentype\"), url(\"/assets/fonts/up-down-arrow-fonts/icomoon.ttf?zvn9w\") format(\"truetype\"), url(\"/assets/fonts/up-down-arrow-fonts/icomoon.woff?zvn9w\") format(\"woff\"), url(\"/assets/fonts/up-down-arrow-fonts/icomoon.svg?zvn9w#icomoon\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"icon-\"], [class*=\" icon-\"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: 'icomoon' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.inner-page-div {\n  padding: 0px 10px; }\n\n.progress_text {\n  font-size: 14px;\n  vertical-align: top; }\n\n.progress_question_text {\n  font-size: 12px;\n  vertical-align: top;\n  position: absolute; }\n\n.page-exit-btn {\n  margin-top: 0px;\n  margin-left: 6px;\n  margin-right: 6px;\n  float: right; }\n\n.page-exit-btn button {\n    background-color: transparent;\n    border: 0; }\n\n.page-exit-btn button:focus {\n      outline: none; }\n\n.page-done-btn button {\n  background-color: transparent;\n  border: 0; }\n\n.page-done-btn button:focus {\n    outline: none; }\n\n.survey-page-header {\n  background-color: #73A0D9;\n  min-height: 20px;\n  overflow: hidden; }\n\n.survey-title {\n  font-size: 24px;\n  color: #fff;\n  text-decoration: none;\n  padding: 10px 20px;\n  margin: 0;\n  font-weight: 300;\n  font-style: normal; }\n\n.title-text {\n  word-wrap: break-word;\n  white-space: normal;\n  display: inline-block;\n  width: calc(100% - 60px); }\n\n.page-div {\n  max-width: 896px;\n  margin: auto; }\n\n.bt_ts {\n  text-transform: capitalize;\n  border: 1px solid rgba(0, 0, 0, 0.6);\n  padding: 8px 16px;\n  font-size: 14px;\n  background: transparent;\n  color: #333;\n  border-radius: 3px; }\n\n.arrow-right:before {\n  margin-left: 2.5px;\n  content: '\\E903';\n  font-size: 40px; }\n\n.icon-drop-icon:before {\n  content: \"\\e900\";\n  font-size: 11px;\n  font-weight: 900; }\n\n.icon-up-arrow:before {\n  content: \"\\e901\";\n  font-size: 11px;\n  font-weight: 900; }\n\n.show-up-arrow {\n  pointer-events: all;\n  opacity: 1; }\n\n.show-down-arrow {\n  pointer-events: all;\n  opacity: 1; }\n\n.show-up-arrow-disabled {\n  pointer-events: none;\n  opacity: 0.3; }\n\n.show-down-arrow-disabled {\n  pointer-events: none;\n  opacity: 0.3; }\n\n.arrow-exit:before {\n  margin-left: 2.5px;\n  content: '\\EA14';\n  font-size: 40px; }\n\n.arrow-left:before {\n  margin-left: 2.5px;\n  content: \"\\E901\";\n  font-size: 40px; }\n\n.arrow-done:before {\n  margin-left: 2.5px;\n  content: \"\\EA10\";\n  font-size: 40px; }\n\n.text_page {\n  display: inline-block;\n  margin-left: 16px;\n  font-family: 'Avenir Next';\n  font-size: 12px;\n  line-height: 16px;\n  margin-top: 18px; }\n\n.logo_footer {\n  margin-bottom: 90px;\n  text-align: center; }\n\n.text_page_rtl {\n  display: inline-block;\n  margin-right: 16px;\n  font-family: 'Avenir Next';\n  font-size: 12px;\n  line-height: 16px;\n  margin-top: 18px; }\n\n.button_icon {\n  display: inline-block;\n  cursor: pointer;\n  vertical-align: middle;\n  border-radius: 2px;\n  padding: 6px !important; }\n\n.bt_ts:focus, .bt_ts:hover {\n  background-color: rgba(0, 0, 0, 0.05); }\n\n.float_left {\n  width: 100%;\n  padding: 8px; }\n\n@media (min-width: 950px) {\n    .float_left {\n      text-align: center; } }\n\n@media (max-width: 949px) {\n    .float_left {\n      text-align: left; } }\n\n.float_right {\n  display: inline-block;\n  float: right;\n  margin-left: 16px; }\n\n.float_left_rtl {\n  width: 100%;\n  padding: 8px; }\n\n@media (min-width: 950px) {\n    .float_left_rtl {\n      text-align: center; } }\n\n@media (max-width: 949px) {\n    .float_left_rtl {\n      text-align: right; } }\n\n.float_right_rtl {\n  display: inline-block;\n  float: left;\n  margin-right: 16px; }\n\n.left_float {\n  display: inline-block;\n  float: left; }\n\n@media (min-width: 950px) {\n  .center_left {\n    text-align: center; }\n  .req_over_all {\n    color: red;\n    font-size: 12px;\n    text-align: center;\n    margin-bottom: 8px; }\n  .survey-page-footer {\n    max-width: 896px;\n    margin: auto; }\n    .survey-page-footer .action-button {\n      padding: 30px;\n      text-align: center; }\n      .survey-page-footer .action-button span {\n        display: inline-block; }\n      .survey-page-footer .action-button button {\n        background-color: transparent;\n        border: 0; }\n        .survey-page-footer .action-button button:focus {\n          outline: none; } }\n\n.survey-page-done {\n  text-align: center; }\n\n@media (max-width: 949px) {\n  .center_left {\n    text-align: left;\n    margin-left: 8px; }\n  .req_over_all {\n    color: red;\n    position: fixed;\n    bottom: 34px;\n    right: 8px;\n    z-index: 1;\n    font-size: 12px; } }\n\n.action-button-scroll {\n  -webkit-box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.06);\n          box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.06);\n  position: fixed;\n  bottom: 0px;\n  right: 0px;\n  width: 100%;\n  z-index: 10000;\n  padding: 3px; }\n\n.take-survey-div {\n  height: 100%;\n  min-height: 100vh; }\n\n.survey-logo {\n  margin-top: 0px;\n  margin-bottom: 0px; }\n\n.language-selection {\n  height: 100vh;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.61);\n  font-family: 'Helvetica';\n  color: #4c4c4c; }\n\n.language-selection .language-div {\n    height: auto;\n    padding-top: 1%;\n    min-width: 200px;\n    padding-bottom: 3%;\n    margin-top: 10%;\n    background-color: #ffffff; }\n\n.language-selection .language-question {\n    font-size: 15px;\n    padding: 15px;\n    margin: 0; }\n\n.language-selection .language-question-rtl {\n    font-size: 15px;\n    padding: 15px;\n    margin: 0; }\n\n.language-selection .language-radio {\n    display: none; }\n\n.language-selection .language-labels {\n    padding: 5px 40px 5px 40px;\n    margin: 0;\n    cursor: pointer; }\n\n.language-selection .language-list {\n    list-style-type: none;\n    text-align: center;\n    padding-left: 0px; }\n\n@media (min-width: 394px) {\n    .language-selection .language-list-item {\n      display: inline-block;\n      color: #3b3b3b;\n      border: solid 1px #979797;\n      padding-top: 5px;\n      margin-right: 8px;\n      padding-bottom: 5px;\n      margin-bottom: 5px;\n      min-width: 165px;\n      text-align: center;\n      cursor: pointer; } }\n\n@media (max-width: 393px) {\n    .language-selection .language-list-item {\n      display: inline-block;\n      color: #3b3b3b;\n      border: solid 1px #979797;\n      padding-top: 5px;\n      padding-bottom: 5px;\n      margin-bottom: 5px;\n      min-width: 165px;\n      text-align: center;\n      cursor: pointer; } }\n\n.language-selection .language-list-item:hover {\n    background-color: #3b3b3b;\n    color: #fcfcfc;\n    cursor: pointer; }\n\n.language-container {\n  z-index: 10000;\n  max-width: 60px; }\n\n.language-container .language-placeholder {\n    border-radius: 4px 4px 0 0;\n    background-color: transparent;\n    padding: 5px 7px;\n    font-weight: bold;\n    font-size: 12px;\n    height: 26px;\n    width: 78px;\n    opacity: .9;\n    color: #fff;\n    -webkit-transform: rotate(270deg);\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n    cursor: pointer;\n    text-transform: uppercase;\n    top: -28px;\n    left: -60px;\n    display: inline-block;\n    vertical-align: top; }\n\n.language-container .languages-list {\n    background-color: #fff;\n    display: inline-block;\n    vertical-align: top;\n    width: 0;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    border-radius: 0 0 0 3px;\n    overflow-y: auto;\n    -webkit-box-shadow: -2px 1px 20px 0 rgba(156, 163, 168, 0.5);\n    box-shadow: -2px 1px 20px 0 rgba(156, 163, 168, 0.5); }\n\n.language-container .open-lang-list {\n    display: block;\n    height: auto;\n    width: 180px !important; }\n\n.language-container .close-lang-list {\n    display: none;\n    width: 0px !important; }\n\n.language-container .language-change-list .language-li {\n    text-align: left;\n    color: #777;\n    padding: 10px;\n    border-bottom: solid 1px #CCCCCC;\n    width: 100%;\n    margin-bottom: 2px;\n    cursor: pointer; }\n\n.language-container .language-change-list .language-li:hover {\n    background-color: #f7f7f7; }\n\n.language-container .language-change-list .language-li:last-child {\n    border-bottom: 0; }\n\n.language-container .language-change-list {\n    list-style-type: none;\n    width: 100%;\n    padding: 0;\n    margin: 0; }\n\n.language-container .language-change-list .current-language-li:after {\n    content: '';\n    background-image: url(/assets/images/editSurvey/checked.svg);\n    display: block;\n    width: 20px;\n    height: 20px;\n    background-repeat: no-repeat;\n    float: right; }\n\n.language-container .current-lang-title {\n    text-align: left; }\n\n.language-container .language-selet-image {\n    height: 30px;\n    font-size: 14px;\n    padding: 4px; }\n\n.progress {\n  height: 10px !important; }\n"

/***/ }),

/***/ "./src/app/routes/take-survey/take.survey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_take_survey_service__ = __webpack_require__("./src/app/routes/take-survey/services/take.survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_survey_options_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_survey_response_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.response.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_constants_service__ = __webpack_require__("./src/app/shared/services/constants.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TakeSurveyComponent = (function () {
    function TakeSurveyComponent(route, router, takeSurvey, surveyOptionsServ, responseServ, services, constants, renderer, elem, loaderSlimService) {
        this.route = route;
        this.router = router;
        this.takeSurvey = takeSurvey;
        this.surveyOptionsServ = surveyOptionsServ;
        this.responseServ = responseServ;
        this.services = services;
        this.constants = constants;
        this.renderer = renderer;
        this.elem = elem;
        this.loaderSlimService = loaderSlimService;
        this.exitLink = '';
        this.reqOn = false;
        this.langSelection = false;
        this.languageActiveList = false;
        this.languageMap = {};
        this.showUp = false;
        this.showDown = true;
        this.lowerPanelGo = false;
        this.currQIndex = 0;
        this.hitGoing = false;
        // currPageQuesCount: number = 0;
        this.closedSurvey = false;
        this.introPage = false;
    }
    TakeSurveyComponent.prototype.ngOnInit = function () {
        this.langConfig = languageConfig;
        this.report = this.responseServ.getReportObj();
        this.surveyOptions = this.surveyOptionsServ.getOptions();
        this.exitLink = this.surveyOptionsServ.getCollector().exitLink;
        this.respData = this.responseServ.getResponseData();
        if (this.exitLink == "" || typeof this.exitLink == undefined) {
            this.exitLink = "https://survey2connect.com";
        }
        this.getSurvey();
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
    };
    TakeSurveyComponent.prototype.onResize = function (event) {
        this.innerWidth = (event.target.innerWidth) ? event.target.innerWidth : window.innerWidth;
        this.innerHeight = (event.target.innerHeight) ? event.target.innerHeight : window.innerHeight;
    };
    TakeSurveyComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            var elems = document.getElementsByClassName('imageZoomS2c');
            // console.log("elements",elems)
            for (var i = 0; i < elems.length; i++) {
                // console.log("elems[i]",elems[i])
                elems[i].addEventListener("wheel", function (event) {
                    // console.log("this",this)
                    // console.log("eve",event)
                    // event = window[''] || event; // old IE support
                    var delta = Math.max(-1, Math.min(1, (event['wheelDelta'] || event['detail'])));
                    // console.log("delta",delta)
                    if (delta > 0) {
                        // console.log('mouse wheel up');
                        this.style.width = (parseInt(this.style.width, 10) + 10) + "px";
                        this.style.height = (parseInt(this.style.height, 10) + 10) + "px";
                        this.style['background-size'] = (parseInt(this.style.width, 10) + 10) + "px" + " " + (parseInt(this.style.height, 10) + 10) + "px";
                    }
                    else if (delta < 0) {
                        console.log('mouse wheel down');
                        this.style.width = (parseInt(this.style.width, 10) - 10) + "px";
                        this.style.height = (parseInt(this.style.height, 10) - 10) + "px";
                        this.style['background-size'] = (parseInt(this.style.width, 10) - 10) + "px" + " " + (parseInt(this.style.height, 10) - 10) + "px";
                    }
                    // for IE
                    event.returnValue = false;
                    // for Chrome and Firefox
                    if (event.preventDefault) {
                        event.preventDefault();
                    }
                });
            }
        }, 10000);
    };
    TakeSurveyComponent.prototype.scrollToQuestion = function (id) {
        event && event.stopPropagation();
        if (id && document.getElementById(id)) {
            var currentQHeight = document.getElementById(id).offsetHeight;
            // let scrollOffset: number = (window.innerHeight - currentQHeight)/2;
            // this.services.utils.scrollPage(id, scrollOffset);
            // let currentQHeight = document.getElementById(id)['offsetHeight'];
            var scrollOffset = -1;
            var actionButtonLength = this.elem.nativeElement.getElementsByClassName('action-button-scroll').item(0)['offsetHeight'];
            // if((window.innerHeight - currentQHeight - actionButtonLength) > 0){
            scrollOffset = (window.innerHeight - currentQHeight) / 2 - actionButtonLength / 2;
            (scrollOffset < 0) ? (scrollOffset = -1) : '';
            // }
            // console.log("currentQHeight",currentQHeight)
            console.log("scrollOffset", scrollOffset);
            // console.log("id",id)
            this.services.utils.scrollPage(id, scrollOffset);
        }
    };
    TakeSurveyComponent.prototype.scrollDown = function () {
        var _this = this;
        event && event.stopPropagation();
        if (document.getElementsByClassName('inner-question-div')[this.currQIndex + 1]) {
            var currentQHeight = this.elem.nativeElement.getElementsByClassName('inner-question-div')[this.currQIndex + 1]['offsetHeight'];
            var id = document.getElementsByClassName('inner-question-div')[this.currQIndex + 1].getElementsByClassName("question-body overlay")[0]['id'];
            var scrollOffset = -1;
            var actionButtonLength = this.elem.nativeElement.getElementsByClassName('action-button-scroll').item(0)['offsetHeight'];
            // if((window.innerHeight - currentQHeight - actionButtonLength) > 0){
            scrollOffset = (window.innerHeight - currentQHeight) / 2 - actionButtonLength / 2;
            (scrollOffset < 0) ? (scrollOffset = -1) : '';
            // }
            // console.log("currentQHeight",currentQHeight)
            console.log("scrollOffset", scrollOffset);
            // console.log("id",id)
            this.services.utils.scrollPage(id, scrollOffset);
        }
        else if (document.getElementById('done_btn')) {
            var currentDone = document.getElementById('done_btn')['offsetHeight'];
            //   console.log("currentDone",currentDone)
            //   console.log("window.innerHeight",window.innerHeight)
            var scrollOffset_1 = (window.innerHeight - currentDone) / 2;
            setTimeout(function () {
                _this.services.utils.scrollPage('done_btn', scrollOffset_1);
                _this.lowerPanelGo = true;
            }, 10);
        }
        else if (document.getElementById('next_btn')) {
            var currentDone = document.getElementById('next_btn')['offsetHeight'];
            //   console.log("currentDone",currentDone)
            //   console.log("window.innerHeight",window.innerHeight)
            var scrollOffset_2 = (window.innerHeight - currentDone) / 2;
            setTimeout(function () {
                _this.services.utils.scrollPage('next_btn', scrollOffset_2);
                _this.lowerPanelGo = true;
            }, 10);
        }
        else if (document.getElementById('prev_btn')) {
            var currentDone = document.getElementById('prev_btn')['offsetHeight'];
            //   console.log("currentDone",currentDone)
            //   console.log("window.innerHeight",window.innerHeight)
            var scrollOffset_3 = (window.innerHeight - currentDone) / 2;
            setTimeout(function () {
                _this.services.utils.scrollPage('prev_btn', scrollOffset_3);
                _this.lowerPanelGo = true;
            }, 10);
        }
    };
    TakeSurveyComponent.prototype.scrollUp = function () {
        event && event.stopPropagation();
        // console.log("this.currQIndex",this.currQIndex)
        if (this.lowerPanelGo) {
            var currentQHeight = this.elem.nativeElement.getElementsByClassName('inner-question-div')[this.currQIndex]['offsetHeight'];
            var id = document.getElementsByClassName('inner-question-div')[this.currQIndex].getElementsByClassName("question-body overlay")[0]['id'];
            var scrollOffset = -1;
            var actionButtonLength = this.elem.nativeElement.getElementsByClassName('action-button-scroll').item(0)['offsetHeight'];
            // if((window.innerHeight - currentQHeight - actionButtonLength) > 0){
            scrollOffset = (window.innerHeight - currentQHeight) / 2 - actionButtonLength / 2;
            (scrollOffset < 0) ? (scrollOffset = -1) : '';
            // }
            // console.log("currentQHeight",currentQHeight)
            console.log("scrollOffset", scrollOffset);
            // console.log("id",id)
            this.services.utils.scrollPage(id, scrollOffset);
            this.lowerPanelGo = false;
        }
        else if (document.getElementsByClassName('inner-question-div')[this.currQIndex - 1]) {
            var currentQHeight = this.elem.nativeElement.getElementsByClassName('inner-question-div')[this.currQIndex - 1]['offsetHeight'];
            var id = document.getElementsByClassName('inner-question-div')[this.currQIndex - 1].getElementsByClassName("question-body overlay")[0]['id'];
            var scrollOffset = -1;
            var actionButtonLength = this.elem.nativeElement.getElementsByClassName('action-button-scroll').item(0)['offsetHeight'];
            // if((window.innerHeight - currentQHeight - actionButtonLength) > 0){
            scrollOffset = (window.innerHeight - currentQHeight) / 2 - actionButtonLength / 2;
            (scrollOffset < 0) ? (scrollOffset = -1) : '';
            // }
            // console.log("currentQHeight",currentQHeight)
            // console.log("scrollOffset",scrollOffset)
            // console.log("id",id)
            this.services.utils.scrollPage(id, scrollOffset);
        }
    };
    TakeSurveyComponent.prototype.startSurveyFromIntroPage = function () {
        if (this.getSurveyResponse && this.getSurveyResponse.language.length < 1) {
            this.urlPreviewandTakeSurveyHandling(this.getSurveyResponse.default.langKey);
        }
        else {
            this.langHandleData = this.services.utils.cloneObject(this.getSurveyResponse);
            this.langSelection = true;
        }
    };
    TakeSurveyComponent.prototype.evaluateExpression = function (expression) {
        try {
            var result = {
                type: "",
                value: "",
                actualValue: expression
            };
            if (!(window.location.href.toString().indexOf('Preview') > -1)) {
                if (/([\d}}\)])(\*|\+|\-|\/)([\d{{])/g.test(expression)) {
                    result.type = 'equation';
                    result.value = expression;
                }
                else {
                    expression = expression.replace('{{', '').replace('}}', '');
                    result.type = expression.split('://')[0];
                    result.value = decodeURIComponent(expression.split('://')[1]);
                }
            }
            return result;
        }
        catch (e) {
            throw e;
        }
    };
    TakeSurveyComponent.prototype.filterIntro = function (type) {
        if (type == 't') {
            var allMatched = this.getSurveyResponse['startPage'].title.match(/{{(e|c):\/\/.*?}}/gi);
            allMatched = (allMatched) ? allMatched : [];
            var _loop_1 = function (i) {
                // console.log(allMatched[i])
                var result1 = null;
                var result2 = null;
                var valueDetailsObj = this_1.evaluateExpression(allMatched[i]);
                // console.log("valueDetailsObj",valueDetailsObj)
                var typeOfED = valueDetailsObj.type;
                valueDetailsObj = valueDetailsObj.value;
                var search = window.location.search.substring(1);
                var jsonObjQuery;
                if (search) {
                    jsonObjQuery = JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
                    Object.keys(jsonObjQuery).forEach(function (key) {
                        if (['langKey', 'qId', 'c', 'r', 'cId', 'eId', 'id', 'n'].indexOf(key) > -1) {
                            delete jsonObjQuery[key];
                        }
                    });
                }
                if (this_1.contacts && this_1.contacts.hasOwnProperty('eData') && this_1.contacts.eData[valueDetailsObj]) {
                    result1 = this_1.contacts.eData[valueDetailsObj][0].value;
                }
                else {
                    result1 = (jsonObjQuery && jsonObjQuery.hasOwnProperty(valueDetailsObj)) ? jsonObjQuery[valueDetailsObj] : null;
                }
                if (typeOfED == 'e') {
                    if (this_1.contacts && this_1.contacts.eData && this_1.contacts.eData[valueDetailsObj]) {
                        result2 = this_1.contacts.eData[valueDetailsObj][0].value;
                    }
                    else {
                        result2 = (this_1.contacts && this_1.contacts.hasOwnProperty('eData') && this_1.contacts.eData.hasOwnProperty(valueDetailsObj)) ? this_1.contacts.eData[valueDetailsObj][0].value : null;
                    }
                }
                else if (typeOfED == 'c') {
                    // console.log("this.contacts[valueDetailsObj]",this.contacts[valueDetailsObj])
                    if (this_1.contacts && this_1.contacts.eData && this_1.contacts.eData[valueDetailsObj]) {
                        result2 = this_1.contacts.eData[valueDetailsObj][0].value;
                    }
                    else {
                        result2 = (this_1.contacts && this_1.contacts.hasOwnProperty(valueDetailsObj)) ? this_1.contacts[valueDetailsObj] : null;
                    }
                }
                var resValue = null;
                if (result1)
                    resValue = result1;
                else if (result2)
                    resValue = result2;
                if (resValue == null)
                    resValue = '';
                this_1.getSurveyResponse['startPage'].title = this_1.getSurveyResponse['startPage'].title.replace(new RegExp(allMatched[i], 'g'), resValue);
            };
            var this_1 = this;
            for (var i = 0; i < allMatched.length; i++) {
                _loop_1(i);
            }
        }
        else if (type == "d") {
            var allMatched = this.getSurveyResponse['startPage'].des.match(/{{(e|c):\/\/.*?}}/gi);
            allMatched = (allMatched) ? allMatched : [];
            var _loop_2 = function (i) {
                // console.log(allMatched[i])
                var result1 = null;
                var result2 = null;
                var valueDetailsObj = this_2.evaluateExpression(allMatched[i]);
                // console.log("valueDetailsObj",valueDetailsObj)
                var typeOfED = valueDetailsObj.type;
                valueDetailsObj = valueDetailsObj.value;
                var search = window.location.search.substring(1);
                var jsonObjQuery;
                if (search) {
                    jsonObjQuery = JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
                    Object.keys(jsonObjQuery).forEach(function (key) {
                        if (['langKey', 'qId', 'c', 'r', 'cId', 'eId', 'id', 'n'].indexOf(key) > -1) {
                            delete jsonObjQuery[key];
                        }
                    });
                }
                // console.log("aa",Object.keys(jsonObjQuery))
                if (this_2.contacts && this_2.contacts.hasOwnProperty('eData') && this_2.contacts.eData[valueDetailsObj]) {
                    result1 = this_2.contacts.eData[valueDetailsObj][0].value;
                }
                else {
                    result1 = (jsonObjQuery && jsonObjQuery.hasOwnProperty(valueDetailsObj)) ? jsonObjQuery[valueDetailsObj] : null;
                }
                if (typeOfED == 'e') {
                    if (this_2.contacts && this_2.contacts.eData && this_2.contacts.eData[valueDetailsObj]) {
                        result2 = this_2.contacts.eData[valueDetailsObj][0].value;
                    }
                    else {
                        result2 = (this_2.contacts && this_2.contacts.hasOwnProperty('eData') && this_2.contacts.eData.hasOwnProperty(valueDetailsObj)) ? this_2.contacts.eData[valueDetailsObj][0].value : null;
                    }
                }
                else if (typeOfED == 'c') {
                    // console.log("this.contacts[valueDetailsObj]",this.contacts[valueDetailsObj])
                    if (this_2.contacts && this_2.contacts.eData && this_2.contacts.eData[valueDetailsObj]) {
                        result2 = this_2.contacts.eData[valueDetailsObj][0].value;
                    }
                    else {
                        result2 = (this_2.contacts && this_2.contacts.hasOwnProperty(valueDetailsObj)) ? this_2.contacts[valueDetailsObj] : null;
                    }
                }
                var resValue = null;
                if (result1)
                    resValue = result1;
                else if (result2)
                    resValue = result2;
                if (resValue == null)
                    resValue = '';
                this_2.getSurveyResponse['startPage'].des = this_2.getSurveyResponse['startPage'].des.replace(new RegExp(allMatched[i], 'g'), resValue);
            };
            var this_2 = this;
            for (var i = 0; i < allMatched.length; i++) {
                _loop_2(i);
            }
        }
    };
    TakeSurveyComponent.prototype.getSurvey = function () {
        var _this = this;
        var params = this.route.params['value'];
        this.queryParams = this.route.queryParams['value'];
        this.services.resource.getSurvey(params, 'take', this.queryParams).subscribe(function (surveyData) {
            if (surveyData.hasOwnProperty('startPage')) {
                _this.getSurveyResponse = surveyData;
                if (surveyData.hasOwnProperty('contacts')) {
                    _this.contacts = surveyData.contacts;
                }
                _this.filterIntro('t');
                _this.filterIntro('d');
                _this.introPage = true;
            }
            else if (surveyData.hasOwnProperty('cancelUrl')) {
                if (surveyData.language.length < 1) {
                    _this.urlPreviewandTakeSurveyHandling(surveyData.default.langKey);
                }
                else {
                    _this.langHandleData = _this.services.utils.cloneObject(surveyData);
                    _this.langSelection = true;
                }
            }
            else if (surveyData.hasOwnProperty('msg')) {
                _this.closedSurvey = surveyData.msg ? surveyData.msg : "This survey is currently closed";
            }
            else {
                _this.setSurveyData(surveyData);
                // this.services.form.formObj.removeHiddenQuestions();
                // let qL = this.services.form.formObj.getPageFields()[0].formFields.length;
                _this.showDown = true;
                _this.showUp = false;
                _this.lowerPanelGo = false;
                _this.currQIndex = 0;
                // if(qL == 1){
                //     this.question = {
                //         lastCame: true,
                //         firstCame: true
                //     };
                // }
                // if(this.takeSurvey.getThemeCSSObject()){
                _this.pageCss = _this.services.form.formObj.getPageFields()[0].getCssObj(_this.services.form.formObj.theme);
                _this.surveyCss = _this.services.form.formObj.theme.getThemeCssObj().survey;
                // }
                // console.log("this.surveyCss",this.surveyCss)
                // console.log("this.pageCss",this.pageCss)
                // if(this.services.form.formObj.getPageFields()[0]['themeSetId']){
                //     this.pageCss = this.services.form.formObj.theme.getThemeSet(this.services.form.formObj.getPageFields()[0]['themeSetId']);
                // }
                // console.log("this.surveyCss AFTER",this.surveyCss)
                // console.log("this.pageCss AFTER",this.pageCss)
                // applyTheme(1);
                // getLocation();
                // applySurveyTheme();
            }
        });
    };
    TakeSurveyComponent.prototype.scrollUpDown = function (event) {
        (event.currQIndex != 'last') ? (this.currQIndex = event.currQIndex) : '';
        // this.currPageQuesCount = event.totolQs;
        // console.log("event.currQIndex",event.currQIndex);
        // console.log("this.currQIndex",this.currQIndex);
        if ("last" == event.currQIndex) {
            this.lowerPanelGo = true;
            this.showDown = false;
            this.showUp = true;
            // this.question = {
            //   lastCame: true,
            //   firstCame: false
            // };
        }
        else if (event.currQIndex == 0) {
            this.lowerPanelGo = false;
            this.showDown = true;
            this.showUp = false;
        }
        else {
            this.lowerPanelGo = false;
            this.showDown = true;
            this.showUp = true;
        }
    };
    TakeSurveyComponent.prototype.setSurveyData = function (data) {
        if (data.surveyBody) {
            this.services.form.setFormData(this.services.utils.cloneObject(data.surveyBody));
            this.surveyBody = this.services.form.formObj.getSurvey();
            this.setLanguageData();
        }
        this.takeSurvey.setInitialData(this.services.utils.cloneObject(data), this.route.queryParams['value']);
        this.takeSurvey.configureSurvey(data, this.router.url);
        this.respData = this.responseServ.getResponseData();
        this.reqOn = false;
        this.langDirection = this.takeSurvey.getLanguageDirection();
        var languageDetails = this.takeSurvey.getLanguageDetails();
        var language = this.takeSurvey.getLanguage();
        var langKey = languageDetails['langKey'];
        var surId = this.services.form.formObj.getId();
        if (language && language.hasOwnProperty('langData') && language['langData'].hasOwnProperty(langKey)) {
            var lang = language['langData'][langKey];
            if (lang.hasOwnProperty(surId) && lang[surId].title) {
                this.surveyBody['title'] = lang[surId].title;
            }
            if (lang.hasOwnProperty(surId) && lang[surId].next) {
                this.surveyBody['next'] = lang[surId].next;
            }
            if (lang.hasOwnProperty(surId) && lang[surId].done) {
                this.surveyBody['done'] = lang[surId].done;
            }
            if (lang.hasOwnProperty(surId) && lang[surId].previous) {
                this.surveyBody['previous'] = lang[surId].previous;
            }
        }
        if (this.surveyBody && this.surveyBody['trackLocation'] == 1) {
            if (this.respData && this.respData.responsePage
                && this.respData.responsePage.geoData && !this.respData.responsePage.geoData.location.coordinates.length) {
                // console.log("geodata",this.respData.responsePage.getId());
                if (navigator.geolocation) {
                    var th_1 = this;
                    navigator.geolocation.getCurrentPosition(function (position) {
                        var lat = position.coords.latitude;
                        var lng = position.coords.longitude;
                        // var GEOCODING = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + '%2C' + lon + '&key=AIzaSyCuKel8gEbxybO8lDe1MDG5E3Nx3H4lUNI';
                        // $.getJSON(GEOCODING).done(function(location) {
                        // 	for (var i = 0; i < location.results[0].address_components.length; i++) {
                        // 		for (var j = 0; j < location.results[0].address_components[i].types.length; j++) {
                        // 			if (location.results[0].address_components[i].types[j] == "country") {
                        // 				geoObj["country"] = location.results[0].address_components[i].long_name;
                        // 				geoObj["country_code"] = location.results[0].address_components[i].short_name;
                        // 			} else if (location.results[0].address_components[i].types[j] == "administrative_area_level_1") {
                        // 				geoObj["administrative_area_level_1"] = location.results[0].address_components[i].long_name;
                        // 				geoObj["administrative_area_level_1_code"] = location.results[0].address_components[i].short_name;
                        // 			} else if (location.results[0].address_components[i].types[j] == "locality") {
                        // 				geoObj["locality"] = location.results[0].address_components[i].long_name;
                        // 				geoObj["locality_code"] = location.results[0].address_components[i].short_name;
                        // 			}
                        // 		}
                        // 	}
                        // geoObj["misc"] = location.results[0];
                        // geoObj["gplace_id"] = location.results[0].place_id;
                        // geoObj["formatted_address"] = location.results[0].formatted_address;
                        var geoObj = {};
                        geoObj["lat"] = lat;
                        geoObj["lng"] = lng;
                        geoObj["type"] = "Point";
                        th_1.services.resource.setLocation(th_1.respData.responsePage._id, geoObj).subscribe(function (data) {
                            //   console.log("set",data);
                        });
                    }, this.errorCallback);
                }
            }
        }
    };
    TakeSurveyComponent.prototype.handleshopperFact = function (surveyBody) {
        var data = this.takeSurvey.handleshopperFact(surveyBody, this.route.queryParams['value']['hasWebGL']);
        return (this.route.queryParams['value']['hasWebGL'] == '0');
    };
    TakeSurveyComponent.prototype.getTotalQuestionCount = function () {
        return this.responseServ.getTotalQuestionCountMinusCurrPage().count + ((this.responseServ.getTotalQuestionCountMinusCurrPage().includeDom && this.respData.responsePage.absPageNum > 1) ? document.getElementsByClassName('inner-question-div').length : 0);
    };
    TakeSurveyComponent.prototype.getQuestionProgressPercentage = function () {
        return Math.round(((this.getQuestionAnsweredCount()) / this.getTotalQuestionCount()) * 100) + '%';
    };
    TakeSurveyComponent.prototype.getQuestionAnsweredCount = function () {
        return this.responseServ.getCurrPageQuesAnswered();
    };
    TakeSurveyComponent.prototype.submitSurvey = function (key) {
        var _this = this;
        this.hitGoing = true;
        // setTimeout(() => {
        this.loaderSlimService.start();
        // }, 10);
        // () => {
        //   console.log('Loading complete');
        // });
        //for(let i = 0; i< 1000; i++){
        //  console.log("Wait",i);
        //}
        var reqFlagOn = true;
        var firstQidReqUnans = "";
        if (this.takeSurvey.requiredQuestionList().length > 0) {
            if (this.responseServ.getResponseData().responsePage.resAObj) {
                var tempFlag = false;
                for (var i = 0; i < this.takeSurvey.requiredQuestionList().length; i++) {
                    if (!this.existsInResAObj(this.takeSurvey.requiredQuestionList()[i], this.responseServ.getResponseData().responsePage.resAObj)) {
                        if (!tempFlag) {
                            firstQidReqUnans = this.takeSurvey.requiredQuestionList()[i];
                            tempFlag = true;
                        }
                        reqFlagOn = false;
                    }
                }
            }
        }
        this.reqOn = !reqFlagOn;
        // reqFlagOn = true; //comment entire line to enable required check!! --- TODO
        if (reqFlagOn || (key == '0')) {
            //   if (this.services.form.formObj.getPageFields().length) {
            //       this.respData.currPLen = this.services.form.formObj.getPageFields()[0].getQuestionsCount();
            //   }
            this.takeSurvey.submitSurvey(key).subscribe(function (surveyData) {
                console.log("surveyData", surveyData);
                _this.setSurveyData(surveyData);
                // this.services.form.formObj.removeHiddenQuestions();
                if (!surveyData.end && !surveyData.thank && !surveyData.enddisqua && surveyData.surveyBody.pageFields[0].formFields[surveyData.surveyBody.pageFields[0].formFields.length - 1]) {
                    // let firstQHeight = surveyData.surveyBody.pageFields[0].formFields[0]['scrollHeight'];
                    // let scrollOffset: number = (window.innerHeight - firstQHeight)/2;
                    // setTimeout(() => {
                    //   this.scrollToQuestion(surveyData.surveyBody.pageFields[0].formFields[surveyData.surveyBody.pageFields[0].formFields.length - 1]._id);
                    // }, 1);
                    window.scrollTo(0, 0);
                }
                else {
                    // setTimeout(() => {
                    // if(surveyData.surveyBody.pageFields[0].formFields[surveyData.surveyBody.pageFields[0].formFields.length - 1])
                    //   this.scrollToQuestion(surveyData.surveyBody.pageFields[0].formFields[surveyData.surveyBody.pageFields[0].formFields.length - 1]._id);
                    // else
                    //   window.scrollTo(0,0);
                    // }, 10);
                }
                // this.setSurveyData(surveyData);
                // this.services.form.formObj.removeHiddenQuestions();
                // this.currPageQuesCount = this.services.form.formObj.getPageFields()[0].formFields.length;
                //console.log("survData",surveyData)
                // console.log("\n\n\nNEXT\n\n\n",this.surveyOptions);
                // console.log("\n\n\ncureent ques num  \n\n\n",this.currPageQuesCount);
                // if(this.currPageQuesCount == 1){
                //   this.question = {
                //     lastCame: true,
                //     firstCame: true
                //   };
                // }else{
                _this.showDown = true;
                _this.showUp = false;
                _this.lowerPanelGo = false;
                _this.currQIndex = 0;
                _this.hitGoing = false;
                setTimeout(function () {
                    _this.loaderSlimService.complete();
                }, 10);
                // }
            });
        }
        else {
            if (firstQidReqUnans) {
                this.scrollToQuestion(firstQidReqUnans);
                if (document.getElementById(firstQidReqUnans).getElementsByClassName('req_err_msg'))
                    document.getElementById(firstQidReqUnans).getElementsByClassName('req_err_msg')[0]['hidden'] = false;
            }
            this.hitGoing = false;
            setTimeout(function () {
                _this.loaderSlimService.complete();
            }, 10);
        }
    };
    TakeSurveyComponent.prototype.existsInResAObj = function (qID, resAObj) {
        var exists = false;
        for (var i = 0; i < Object.keys(resAObj).length; i++) {
            if (qID == (Object.keys(resAObj)[i] + "")) {
                exists = true;
            }
        }
        return exists;
    };
    TakeSurveyComponent.prototype.goToExitUrl = function () {
        window.location.href = this.exitLink;
    };
    TakeSurveyComponent.prototype.getProgressPercentage = function () {
        return Math.round((parseInt(this.respData.responsePage.absPageNum) / parseInt(this.respData.responsePage.totPages)) * 100) + '%';
    };
    TakeSurveyComponent.prototype.errorCallback = function (error) {
        if (error.code == error.PERMISSION_DENIED) {
            // pop up dialog asking for location
            try {
                webkit.messageHandlers.locationDeny.postMessage({ "success": true });
            }
            catch (err) { }
        }
    };
    TakeSurveyComponent.prototype.urlPreviewandTakeSurveyHandling = function (langKey) {
        var hrefUrl = window.location.href;
        var arrHref = [];
        var checkMark = '?';
        arrHref = hrefUrl.split('');
        if (arrHref.indexOf(checkMark) > 0) {
            window.location.href = window.location.href + '&langKey=' + langKey;
        }
        else {
            window.location.href = window.location.href + '?langKey=' + langKey;
        }
    };
    TakeSurveyComponent.prototype.setLanguageData = function () {
        var _this = this;
        this.languageMap = {
            langArr: [],
            langMap: {}
        };
        this.languageMap['langArr'].push(this.surveyBody['defLang']);
        this.surveyBody['language'].forEach(function (a) {
            _this.languageMap.langArr.push(a);
        });
        this.languageMap.langArr.forEach(function (a) {
            a["langCode"] = a.name.substr(0, 2).toUpperCase();
            _this.languageMap.langMap[a.langKey] = a;
        });
    };
    TakeSurveyComponent.prototype.changeLanguage = function (lang) {
        var langKey = lang.langKey;
        var response = this.responseServ.getResponseData();
        this.takeSurvey.setLanguageDetails(lang);
        this.langDirection = lang.direction;
        //   console.log("\n\n\nsdfas\n\n",langKey);
        //   console.log("\n\n\sas\n\n",response.responsePage.langKey);
        if (response.responsePage && response.responsePage.langKey == langKey) {
            return;
        }
        else {
            var language = this.takeSurvey.getLanguage();
            var surId = this.services.form.formObj.getId();
            if (language && language.hasOwnProperty('langData') && language['langData'].hasOwnProperty(langKey)) {
                var lang_1 = language['langData'][langKey];
                if (lang_1.hasOwnProperty(surId) && lang_1[surId].title) {
                    this.surveyBody['title'] = lang_1[surId].title;
                }
                if (lang_1.hasOwnProperty(surId) && lang_1[surId].next) {
                    this.surveyBody['next'] = lang_1[surId].next;
                }
                if (lang_1.hasOwnProperty(surId) && lang_1[surId].done) {
                    this.surveyBody['done'] = lang_1[surId].done;
                }
                if (lang_1.hasOwnProperty(surId) && lang_1[surId].previous) {
                    this.surveyBody['previous'] = lang_1[surId].previous;
                }
            }
            else {
                var survey = this.takeSurvey.getSurveyData();
                if (survey.hasOwnProperty('surveyBody')) {
                    this.surveyBody['title'] = survey["surveyBody"].title;
                    this.surveyBody['next'] = survey["surveyBody"].next;
                    this.surveyBody['done'] = survey["surveyBody"].done;
                    this.surveyBody['previous'] = survey["surveyBody"].previous;
                }
            }
            var page = this.takeSurvey.translatePage(this.services.form.formObj.getPageFields()[0]);
            this.services.form.formObj.setPageFields([page]);
            this.surveyBody["pageFields"] = this.services.form.formObj.getPageFields();
        }
        response.responsePage["langKey"] = langKey;
        this.languageActiveList = !this.languageActiveList; // Closing the language selection
    };
    return TakeSurveyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TakeSurveyComponent.prototype, "onResize", null);
TakeSurveyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-take-survey',
        template: __webpack_require__("./src/app/routes/take-survey/take.survey.component.html"),
        styles: [__webpack_require__("./src/app/routes/take-survey/take.survey.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_take_survey_service__["a" /* TakeSurveyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_take_survey_service__["a" /* TakeSurveyService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_survey_options_service__["a" /* SurveyOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_survey_options_service__["a" /* SurveyOptionsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_survey_response_service__["a" /* SurveyResponseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_survey_response_service__["a" /* SurveyResponseService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_services_services_module__["a" /* SharedServices */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_constants_service__["a" /* ConstantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_constants_service__["a" /* ConstantsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _k || Object])
], TakeSurveyComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=take.survey.component.js.map

/***/ }),

/***/ "./src/app/routes/take-survey/take.survey.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeSurveyModule", function() { return TakeSurveyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__take_survey_routes_module__ = __webpack_require__("./src/app/routes/take-survey/take.survey.routes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__take_preview_take_preview_component__ = __webpack_require__("./src/app/routes/take-survey/take.preview/take.preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__take_survey_component__ = __webpack_require__("./src/app/routes/take-survey/take.survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_page_component__ = __webpack_require__("./src/app/routes/take-survey/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__question_question_component__ = __webpack_require__("./src/app/routes/take-survey/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_take_survey_service__ = __webpack_require__("./src/app/routes/take-survey/services/take.survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_survey_options_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.options.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_survey_response_service__ = __webpack_require__("./src/app/routes/take-survey/services/survey.response.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__survey_edit_edit_data_service__ = __webpack_require__("./src/app/routes/survey/edit/edit.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__survey_edit_edit_constants_service__ = __webpack_require__("./src/app/routes/survey/edit/edit.constants.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__custom_end_page_custom_end_page_component__ = __webpack_require__("./src/app/routes/take-survey/custom.end.page/custom.end.page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var TakeSurveyModule = (function () {
    function TakeSurveyModule() {
    }
    return TakeSurveyModule;
}());
TakeSurveyModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__take_survey_routes_module__["a" /* TakeSurveyRoutesModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot()
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__take_preview_take_preview_component__["a" /* TakePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_7__take_survey_component__["a" /* TakeSurveyComponent */],
            __WEBPACK_IMPORTED_MODULE_8__page_page_component__["a" /* PageComponent */],
            __WEBPACK_IMPORTED_MODULE_9__question_question_component__["a" /* QuestionComponent */],
            __WEBPACK_IMPORTED_MODULE_15__custom_end_page_custom_end_page_component__["a" /* CustomEndPageComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_take_survey_service__["a" /* TakeSurveyService */],
            __WEBPACK_IMPORTED_MODULE_11__services_survey_options_service__["a" /* SurveyOptionsService */],
            __WEBPACK_IMPORTED_MODULE_12__services_survey_response_service__["a" /* SurveyResponseService */],
            __WEBPACK_IMPORTED_MODULE_13__survey_edit_edit_data_service__["a" /* EditDataService */],
            __WEBPACK_IMPORTED_MODULE_14__survey_edit_edit_constants_service__["a" /* EditConstantsService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]
        ]
    })
], TakeSurveyModule);

//# sourceMappingURL=take.survey.module.js.map

/***/ }),

/***/ "./src/app/routes/take-survey/take.survey.routes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeSurveyRoutesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__take_survey_component__ = __webpack_require__("./src/app/routes/take-survey/take.survey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__take_preview_take_preview_component__ = __webpack_require__("./src/app/routes/take-survey/take.preview/take.preview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var surveyRoutes = [
    {
        path: 'survey/preview/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__take_preview_take_preview_component__["a" /* TakePreviewComponent */],
    },
    {
        path: ':key/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__take_survey_component__["a" /* TakeSurveyComponent */],
    }
];
var TakeSurveyRoutesModule = (function () {
    function TakeSurveyRoutesModule() {
    }
    return TakeSurveyRoutesModule;
}());
TakeSurveyRoutesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */].forChild(surveyRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouterModule */]
        ]
    })
], TakeSurveyRoutesModule);

//# sourceMappingURL=take.survey.routes.module.js.map

/***/ })

});
//# sourceMappingURL=take.survey.module.chunk.js.map