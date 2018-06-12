webpackJsonp(["survey.themes.module"],{

/***/ "./src/app/routes/survey/edit/survey.themes/device-preview/device-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dp-div\">\n  <div class=\"dp-upper-div\">\n    <span class=\"dp-pnt\">\n      Preview And Test\n    </span>\n    <span class=\"dp-radio\">\n      <input type=\"radio\" name=\"device-preview\" [value]=\"'desktop'\" id=\"dp-radio-desk\" [(ngModel)]=\"devicePreview\" (change)=\"changeDevice()\">\n      <label for=\"dp-radio-desk\">\n        <span class=\"dp-radio-span desk-span\">\n          <span class=\"prev-icon desktop-prev\"></span>\n        </span>\n      </label>\n      <input type=\"radio\" name=\"device-preview\" [value]=\"'tablet'\" id=\"dp-radio-tab\" [(ngModel)]=\"devicePreview\" (change)=\"changeDevice()\">\n      <label for=\"dp-radio-tab\">\n        <span class=\"dp-radio-span tab-span\">\n          <span class=\"prev-icon tablet-prev\"></span>\n        </span>\n      </label>\n      <input type=\"radio\" name=\"device-preview\" [value]=\"'mobile'\" id=\"dp-radio-mob\" [(ngModel)]=\"devicePreview\" (change)=\"changeDevice()\">\n      <label for=\"dp-radio-mob\">\n        <span class=\"dp-radio-span mob-span\">\n          <span class=\"prev-icon mobile-prev\"></span>\n        </span>\n      </label>\n    </span>\n    <span class=\"pull-right\">\n      <a [routerLink]=\"['..']\">\n        <button class=\"btn dp-exit\" type=\"button\">\n          Exit <span>X</span>\n        </button>\n      </a>\n    </span>\n  </div>\n  <div class=\"dp-lower-div\">\n    <div class=\"{{devicePreviewClass}}\">\n      <iframe class=\"{{iframeClass}}\" [src]=\"previewUrl\" name=\"themeIframe\"></iframe>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/device-preview/device-preview.component.scss":
/***/ (function(module, exports) {

module.exports = ".dp-div {\n  margin-left: 80px; }\n  .dp-div .dp-upper-div {\n    background-color: white;\n    height: 52px;\n    padding: 5px 15px; }\n  .dp-div .dp-upper-div .dp-pnt {\n      font-family: 'Helvetica Neue Medium';\n      padding-right: 10px; }\n  .dp-div .dp-upper-div .dp-radio label {\n      background-color: white;\n      border: 1px solid #cecece;\n      margin: 0 2px;\n      height: 42px;\n      width: 45px;\n      padding: 6px;\n      border-radius: 2px;\n      cursor: pointer; }\n  .dp-div .dp-upper-div .dp-radio input[type=radio] {\n      display: none; }\n  .dp-div .dp-upper-div .dp-radio input[type=radio]:checked + label {\n      background-color: #d1d1d1; }\n  .dp-div .dp-upper-div .dp-exit {\n      background-color: white;\n      border: 1px solid #cecece;\n      color: black;\n      font-family: 'Helvetica Neue Medium';\n      font-size: 12px;\n      height: 30px;\n      margin-top: 6px; }\n  .dp-div .dp-upper-div .dp-exit a:hover {\n        text-decoration: none; }\n  .dp-div .dp-upper-div .dp-exit span {\n        padding: 0 5px; }\n  .dp-div .dp-lower-div {\n    background-color: #b2b2b1;\n    min-height: calc(100vh - 105px);\n    text-align: center; }\n  .dp-div .dp-lower-div .iframe-div-mobile {\n      background: url(/assets/images/editSurvey/themes/mobile.png);\n      background-repeat: no-repeat;\n      display: inline-block;\n      height: 1010px;\n      width: 510px;\n      margin: 50px; }\n  .dp-div .dp-lower-div .iframe-div-tablet {\n      background: url(/assets/images/editSurvey/themes/tablet.png);\n      background-repeat: no-repeat;\n      display: inline-block;\n      height: 1260px;\n      width: 900px;\n      margin: 50px; }\n  .dp-div .dp-lower-div .iframe-desktop {\n      border: 0;\n      height: calc(100vh - 110px);\n      width: 100%; }\n  .dp-div .dp-lower-div .iframe-tablet {\n      margin-top: 116px;\n      border: 0;\n      height: 1025px;\n      width: 852px; }\n  .dp-div .dp-lower-div .iframe-mobile {\n      margin-top: 116px;\n      border: 0;\n      height: 815px;\n      width: 420px; }\n  .dp-radio-span.tab-span {\n  margin-left: 5px; }\n  .dp-radio-span.mob-span {\n  margin-left: 6px; }\n  .prev-icon {\n  display: inline-block; }\n  .prev-icon.desktop-prev {\n    background: url(/assets/images/editSurvey/themes/desktop.svg);\n    background-repeat: no-repeat;\n    height: 26px;\n    width: 32px; }\n  .prev-icon.tablet-prev {\n    background: url(/assets/images/editSurvey/themes/tablet.svg);\n    background-repeat: no-repeat;\n    height: 26px;\n    width: 20px; }\n  .prev-icon.mobile-prev {\n    background: url(/assets/images/editSurvey/themes/mobile.svg);\n    background-repeat: no-repeat;\n    height: 26px;\n    width: 17px; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/device-preview/device-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_data_service__ = __webpack_require__("./src/app/routes/survey/edit/edit.data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DevicePreviewComponent = (function () {
    function DevicePreviewComponent(sanitizer, editDataService) {
        this.sanitizer = sanitizer;
        this.editDataService = editDataService;
        this.devicePreview = 'desktop'; //<'desktop', 'tablet', 'mobile'>
        this.devicePreviewClass = 'iframe-div-desktop'; //<'iframe-div-desktop', 'iframe-div-tablet', 'iframe-div-mobile'>
        this.iframeClass = 'deviceIframe';
        this.themeIframe = {
            height: '100%',
            width: '500px'
        };
    }
    DevicePreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.editDataService.surveyDesignData.displaySidebar = true;
        }, 0);
        this.sId = this.editDataService.sId;
        this.previewUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/survey/preview/' + this.sId);
        this.changeDevice();
    };
    DevicePreviewComponent.prototype.changeDevice = function () {
        if (this.devicePreview == 'desktop') {
            this.devicePreviewClass = 'iframe-div-desktop';
            this.iframeClass = 'iframe-desktop';
        }
        else if (this.devicePreview == 'tablet') {
            this.devicePreviewClass = 'iframe-div-tablet';
            this.iframeClass = 'iframe-tablet';
        }
        else if (this.devicePreview == 'mobile') {
            this.devicePreviewClass = 'iframe-div-mobile';
            this.iframeClass = 'iframe-mobile';
        }
    };
    return DevicePreviewComponent;
}());
DevicePreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device-preview',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/device-preview/device-preview.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/device-preview/device-preview.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["DomSanitizer"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__edit_data_service__["a" /* EditDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__edit_data_service__["a" /* EditDataService */]) === "function" && _b || Object])
], DevicePreviewComponent);

var _a, _b;
//# sourceMappingURL=device-preview.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/container-setting/container-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-left-side\">\n  <div class=\"theme-setting-div\">\n    <div>\n      <span class=\"customise-icon\"></span>\n      <span>Customise - </span>\n      <span> {{container.field | titlecase}} {{container.subField | titlecase}}</span>\n    </div>\n    <div class=\"theme-name-container\">\n      {{themeName}}\n    </div>\n    <div [hidden]=\"themeAction.new\">\n      <div [hidden]=\"(!appliedSet.themeSetId || appliedSet.themeSetId == '')\">\n         Set name:\n         <span>{{appliedSet?.themeSetId}}</span>\n      </div>\n    </div>\n    <div [hidden]=\"!(container.field == 'question' && container.subField == 'body')\">\n      <div [hidden]=\"(!appliedSet.themeSetId || appliedSet.themeSetId == '')\">\n        Set Id:\n        <span>{{appliedSet?.themeSetId}}</span>\n        <span class=\"pull-right remove-set-btn\" (click)=\"removeQuestionSet()\">remove</span>\n      </div>\n    </div>\n    <div class=\"theme-setting-inner-div\">\n      <div class=\"theme-contanier\">\n        <div class=\"row theme-row\">\n          <div class=\"col-md-5 col-sm-5 col-xs-5\">\n            <span class=\"theme-label\">Background</span>\n          </div>\n          <div class=\"col-md-7 col-sm-7 col-xs-7\">\n            <theme-background-setting [bgInpData]=\"{\n              'field': container.field,\n              'subField': container.subField,\n              'props': themeSet[container.field][container.subField]\n            }\" (onChangeBgDetails)=\"onChange($event)\">\n            </theme-background-setting>\n          </div>\n        </div>\n        <theme-text-setting [textInpData]=\"{\n          'field': container.field,\n          'subField': container.subField,\n          'props': themeSet[container.field][container.subField]\n        }\" (onChangeTextDetails)=\"onChange($event)\">\n        </theme-text-setting>\n        <div class=\"row theme-row\">\n          <div class=\"col-md-5 col-sm-5 col-xs-5\">\n            <span class=\"theme-label\">Border</span>\n          </div>\n          <div class=\"col-md-7 col-sm-7 col-xs-7\">\n            <theme-border-setting [borderInp]=\"{\n              'field': container.field,\n              'subField': container.subField,\n              'props': themeSet[container.field][container.subField]\n            }\" (onChangeBorderDetails)=\"onChange($event)\">\n            </theme-border-setting>\n          </div>\n        </div>\n        <div class=\"row theme-row\">\n          <div class=\"col-md-5 col-sm-5 col-xs-5\">\n            <span class=\"theme-label\">Padding</span>\n          </div>\n          <div class=\"col-md-7 col-sm-7 col-xs-7\">\n            <theme-slider [progressBarInp]=\"{\n              'config': paddingConfig,\n              'value': themeSet[container.field][container.subField]['padding'],\n              'postSymbol': 'px'\n            }\" (emitProgessValue)=\"setPadding('padding',$event); setPadding('padding-left',$event); setPadding('padding-right',$event); setPadding('padding-top',$event); setPadding('padding-bottom',$event)\">\n            </theme-slider>\n          </div>\n        </div>\n        <div class=\"row theme-row\">\n          <div class=\"col-md-5 col-sm-5 col-xs-5\">\n            <span class=\"theme-label\">Padding Left Horizontal</span>\n          </div>\n          <div class=\"col-md-7 col-sm-7 col-xs-7\">\n            <theme-slider [progressBarInp]=\"{\n              'config': paddingConfigXL,\n              'value': themeSet[container.field][container.subField]['padding-left'],\n              'postSymbol': 'px'\n            }\" (emitProgessValue)=\"setPadding('padding-left',$event)\">\n            </theme-slider>\n          </div>\n        </div>\n        <div class=\"row theme-row\">\n          <div class=\"col-md-5 col-sm-5 col-xs-5\">\n            <span class=\"theme-label\">Padding Right Horizontal</span>\n          </div>\n          <div class=\"col-md-7 col-sm-7 col-xs-7\">\n            <theme-slider [progressBarInp]=\"{\n              'config': paddingConfigXR,\n              'value': themeSet[container.field][container.subField]['padding-right'],\n              'postSymbol': 'px'\n            }\" (emitProgessValue)=\"setPadding('padding-right',$event)\">\n            </theme-slider>\n          </div>\n        </div>\n        <div class=\"row theme-row\">\n          <div class=\"col-md-5 col-sm-5 col-xs-5\">\n            <span class=\"theme-label\">Padding top Vertical</span>\n          </div>\n          <div class=\"col-md-7 col-sm-7 col-xs-7\">\n            <theme-slider [progressBarInp]=\"{\n              'config': paddingConfigYT,\n              'value': themeSet[container.field][container.subField]['padding-top'],\n              'postSymbol': 'px'\n            }\" (emitProgessValue)=\"setPadding('padding-top',$event)\">\n            </theme-slider>\n          </div>\n        </div>\n        <div class=\"row theme-row\">\n          <div class=\"col-md-5 col-sm-5 col-xs-5\">\n            <span class=\"theme-label\">Padding Bottom Vertical</span>\n          </div>\n          <div class=\"col-md-7 col-sm-7 col-xs-7\">\n            <theme-slider [progressBarInp]=\"{\n              'config': paddingConfigYB,\n              'value': themeSet[container.field][container.subField]['padding-bottom'],\n              'postSymbol': 'px'\n            }\" (emitProgessValue)=\"setPadding('padding-bottom',$event)\">\n            </theme-slider>\n          </div>\n        </div>\n\n        <div class=\"row theme-row\" *ngIf=\"container.field !== 'survey' && container.subField === 'body'\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <label><input type=\"checkbox\" [(ngModel)]=\"forAll\" (change)=\"onChangeForAll()\"> For all {{container.field}} {{container.subField}}</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row theme-footer\">\n    <div class=\"col-md-6 col-sm-6 col-xs-6\">\n      <button type=\"button\" class=\"btn theme-save-btn\" (click)=\"updateTheme()\">\n        {{themeAction.new ? 'Save' : 'Update'}}\n      </button>\n    </div>\n    <div class=\"col-md-6 col-sm-6 col-xs-6\">\n      <button type=\"button\" class=\"btn theme-cancel-btn\" (click)=\"cancelCustomisation()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/container-setting/container-setting.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/container-setting/container-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContainerSettingComponent = (function () {
    function ContainerSettingComponent(services, leftPanelService) {
        this.services = services;
        this.leftPanelService = leftPanelService;
        this.paddingConfig = {
            connect: [true, false],
            step: 2,
            range: {
                min: 0,
                max: 48
            }
        };
        this.paddingConfigXL = {
            connect: [true, false],
            step: 2,
            range: {
                min: 0,
                max: 48
            }
        };
        this.paddingConfigXR = {
            connect: [true, false],
            step: 2,
            range: {
                min: 0,
                max: 48
            }
        };
        this.paddingConfigYT = {
            connect: [true, false],
            step: 2,
            range: {
                min: 0,
                max: 48
            }
        };
        this.paddingConfigYB = {
            connect: [true, false],
            step: 2,
            range: {
                min: 0,
                max: 48
            }
        };
        this.forAll = true;
    }
    ContainerSettingComponent.prototype.ngOnInit = function () {
        this.themeName = this.leftPanelService.themeJSON.name;
        this.themeAction = this.leftPanelService.themeSetProperties.action;
        this.appliedSet = {}; // reset appliedSet on init
        if (this.container.field == 'question' || this.container.field == 'page') {
            if (this.themeAction.new) {
                this.forAll = false;
            }
            else {
                this.appliedSet['themeSetId'] = this.leftPanelService.themeSettings.activeElem['themeSetId'];
                if (this.appliedSet['themeSetId']) {
                    this.forAll = false;
                }
            }
            this.themeSet = this.leftPanelService.themeSet;
        }
        else {
            this.themeSet = this.leftPanelService.themeJSON;
        }
        if (!this.themeSet[this.container.field][this.container.subField].fontSize) {
            var fontSize = this.leftPanelService.getExtendedCss(this.container.subField, this.themeSet, 'fontSize', '14px');
            this.themeSet[this.container.field][this.container.subField].setFontSize(fontSize);
        }
        if (!this.themeSet[this.container.field][this.container.subField]['padding-top']) {
            this.themeSet[this.container.field][this.container.subField].setPaddingTop("0px !important");
        }
        if (!this.themeSet[this.container.field][this.container.subField]['padding-bottom']) {
            this.themeSet[this.container.field][this.container.subField].setPaddingBottom("0px !important");
        }
        if (!this.themeSet[this.container.field][this.container.subField]['padding-right']) {
            this.themeSet[this.container.field][this.container.subField].setPaddingRight("0px !important");
        }
        if (!this.themeSet[this.container.field][this.container.subField]['padding-left']) {
            this.themeSet[this.container.field][this.container.subField].setPaddingLeft("0px !important");
        }
        if (!this.themeSet[this.container.field][this.container.subField]['padding']) {
            this.themeSet[this.container.field][this.container.subField].setPadding("0px");
        }
    };
    ContainerSettingComponent.prototype.setPadding = function (type, e) {
        this.onChange({
            'field': this.container.field,
            'subField': this.container.subField,
            'cssProp': type,
            'value': e + 'px'
        });
    };
    ContainerSettingComponent.prototype.onChange = function (event) {
        event['forAll'] = this.forAll;
        this.leftPanelService.callNextOnThemeCompState(event);
    };
    ContainerSettingComponent.prototype.cancelCustomisation = function () {
        this.leftPanelService.onCancelSetting();
        this.leftPanelService.switchToThemeCust();
    };
    ContainerSettingComponent.prototype.onChangeForAll = function () {
        this.leftPanelService.onChangeForAllCheckbox(this.forAll);
    };
    ContainerSettingComponent.prototype.updateTheme = function () {
        var _this = this;
        this.leftPanelService.updateTheme(this.forAll).subscribe(function (data) {
            _this.cancelCustomisation();
        });
    };
    ContainerSettingComponent.prototype.removeQuestionSet = function () {
        var _this = this;
        var id = this.leftPanelService.themeSettings.activeElem.id;
        var quesBody = {
            themeSetId: null
        };
        this.services.resource.updateQuestionData(id, quesBody).subscribe(function (data) {
            _this.services.form.formObj.getQuestionById(id)['themeSetId'] = null;
            _this.leftPanelService.removeSet('question');
            _this.leftPanelService.switchToThemeCust();
        });
    };
    return ContainerSettingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ContainerSettingComponent.prototype, "container", void 0);
ContainerSettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-container-setting',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/container-setting/container-setting.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/container-setting/container-setting.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_services_module__["a" /* SharedServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__left_panel_service__["a" /* LeftPanelService */]) === "function" && _b || Object])
], ContainerSettingComponent);

var _a, _b;
//# sourceMappingURL=container-setting.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/field-sets/field-sets.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-left-side\">\n  <div class=\"theme-setting-div\">\n    <div>\n      <span class=\"customise-icon\"></span>\n      <span>Customise Set - </span>\n      <span class=\"sets-type\">{{setsInp.subField}} </span>\n    </div>\n    <div class=\"theme-name-container\">\n      {{themeName}}\n    </div>\n    <div class=\"theme-setting-inner-div\">\n      <div class=\"theme-contanier\">\n\n        <div class=\"sets-div\">\n          <div class=\"row sets-row\" *ngFor=\"let setId of setsArr; index as setsIdx\" [ngClass]=\"{'active': activeSetId == setId, 'preview': previewSetId == setId}\" (click)=\"previewSet(setId)\">\n            <div class=\"col-md-7 col-sm-7 col-xs-7 sets-name\">\n              <span>{{setId}}</span>\n              <span [hidden]=\"!(previewSetId == setId)\" class=\"sets-cust-icon\" title=\"Customise\" (click)=\"customiseSet(setId)\"></span>\n              <span class=\"sets-del-span\" title=\"Delete Set\" (click)=\"confirmDelSet(setId, setsIdx, $event)\">\n                <span class=\"sets-del-icon\">\n                </span>\n              </span>\n            </div>\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <div class=\"sets-color-div\" [ngStyle]=\"{'background-color': setsObj[setId]?.body?.backgroundColor}\">\n                <span class=\"color-outer-span\">\n                  <span class=\"color-span\" [ngStyle]=\"{'background-color': setsObj[setId]?.header?.backgroundColor || setsObj[setId]?.title?.backgroundColor}\"></span>\n                  <span class=\"transparent-icon\" [hidden]=\"setsObj[setId]?.header?.backgroundColor || setsObj[setId]?.title?.backgroundColor\"></span>\n                </span>\n                <span class=\"color-outer-span\">\n                  <span class=\"color-span\" [ngStyle]=\"{'background-color': setsObj[setId]?.body?.color}\"></span>\n                  <span class=\"transparent-icon\" [hidden]=\"setsObj[setId]?.body?.color\"></span>\n                </span>\n                <span class=\"color-outer-span\">\n                  <span class=\"color-span\" [ngStyle]=\"{'background-color': setsObj[setId]?.title?.color}\"></span>\n                  <span class=\"transparent-icon\" [hidden]=\"setsObj[setId]?.title?.color\"></span>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <button type=\"button\" class=\"btn new-set-btn\" (click)=\"newSet()\">\n            New Set\n          </button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row theme-footer\">\n    <div class=\"col-md-6 col-sm-6 col-xs-6\">\n      <button type=\"button\" class=\"btn theme-save-btn\" (click)=\"saveSet()\">\n        Apply\n      </button>\n    </div>\n    <div class=\"col-md-6 col-sm-6 col-xs-6\">\n      <button type=\"button\" class=\"btn theme-cancel-btn\" (click)=\"cancelSets()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/field-sets/field-sets.component.scss":
/***/ (function(module, exports) {

module.exports = ".sets-type {\n  text-transform: capitalize; }\n\n.sets-div {\n  margin-top: 5px;\n  background-color: white; }\n\n.sets-div .sets-row {\n    padding: 8px 0;\n    margin: 5px 0;\n    cursor: pointer;\n    position: relative;\n    border: 1px solid #F2F2F2; }\n\n.sets-div .sets-row.active {\n      border-left: 3px solid #5CBB5B; }\n\n.sets-div .sets-row.preview {\n      background-color: #F0F0F0; }\n\n.sets-div .sets-row .sets-name {\n      padding-top: 4px; }\n\n.sets-div .sets-row .sets-cust-icon {\n      background: url(/assets/images/editSurvey/customise.svg);\n      background-repeat: no-repeat;\n      height: 20px;\n      width: 20px;\n      display: inline-block;\n      cursor: pointer;\n      vertical-align: bottom; }\n\n.sets-div .sets-row .sets-del-span {\n      position: absolute;\n      right: -15px;\n      top: 5px;\n      z-index: 99;\n      display: none; }\n\n.sets-div .sets-row .sets-del-icon {\n      background: url(/assets/images/editSurvey/delete.svg);\n      background-repeat: no-repeat;\n      height: 17px;\n      width: 20px;\n      display: inline-block; }\n\n.sets-div .sets-row:hover .sets-del-span {\n      display: inline-block; }\n\n.sets-div .sets-row .sets-color-div {\n      border: 1px solid #d0d0d0;\n      height: 30px;\n      padding-top: 3px;\n      text-align: center; }\n\n.sets-div .sets-row .color-span {\n      display: inline-block;\n      width: 19px;\n      height: 19px;\n      border-radius: 50%;\n      margin: 2px;\n      border: 1px solid rgba(0, 0, 0, 0.1); }\n\n.new-set-btn {\n  color: #5CBB5B;\n  font-family: 'Helvetica Neue Medium';\n  border: 1px dashed #5CBB5B;\n  background-color: white;\n  width: 100%;\n  margin: 40px 0;\n  padding: 10px; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/field-sets/field-sets.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldSetsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
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



var FieldSetsComponent = (function () {
    function FieldSetsComponent(leftPanelService, services) {
        this.leftPanelService = leftPanelService;
        this.services = services;
    }
    FieldSetsComponent.prototype.ngOnInit = function () {
        this.themeName = this.leftPanelService.themeJSON.name;
        if (this.setsInp.subField == 'page') {
            this.setsArr = this.leftPanelService.themeJSON.getPageSetArray();
            this.setsObj = this.leftPanelService.themeJSON.getPageSets();
            this.activeSetId = this.services.form.formObj.getPageById(this.setsInp.id)['themeSetId'];
        }
        else if (this.setsInp.subField == 'question') {
            this.setsArr = this.leftPanelService.themeJSON.getQuestionSetArray();
            this.setsObj = this.leftPanelService.themeJSON.getQuestionSets();
            this.activeSetId = this.services.form.formObj.getQuestionById(this.setsInp.id)['themeSetId'];
        }
        this.previewSetId = this.activeSetId;
    };
    FieldSetsComponent.prototype.confirmDelSet = function (setId, setsIdx, e) {
        var _this = this;
        e.stopPropagation();
        this.services.alert({
            title: '<p class="sweetalert_title">Are you sure you want to delete this set?</p>',
            text: "",
            type: 'warning',
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonClass: 'sweetalert_apply_btn',
            cancelButtonClass: 'sweetalert_cancel_btn',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.deleteSet(setId);
            }
        });
    };
    FieldSetsComponent.prototype.deleteSet = function (setId) {
        var _this = this;
        var delObj = {
            themeId: this.leftPanelService.themeJSON._id,
            field: this.setsInp.subField,
            setId: setId
        };
        if (this.activeSetId == setId) {
            delObj['fieldId'] = this.setsInp.id;
        }
        this.services.resource.deleteThemeSet(delObj).subscribe(function (data) {
            _this.leftPanelService.deleteThemeSet(_this.setsInp, _this.activeSetId, setId);
            // this.leftPanelService.themeJSON.deleteThemeSet(setId);
            // if(this.activeSetId == setId){
            //   if(this.setsInp.subField == 'page'){
            //     this.services.form.formObj.getPageById(this.setsInp.id)['themeSetId'] = null;
            //   }else if(this.setsInp.subField == 'question'){
            //     this.services.form.formObj.getQuestionById(this.setsInp.id)['themeSetId'] = null;
            //   }
            // }
        });
    };
    FieldSetsComponent.prototype.previewSet = function (setId) {
        this.previewSetId = setId;
        this.leftPanelService.previewSet(this.setsInp.subField, setId);
    };
    FieldSetsComponent.prototype.saveSet = function () {
        var _this = this;
        if (this.previewSetId == '') {
            this.services.toastr.error('Please select a Set');
            return false;
        }
        var setObj = {
            themeSetId: this.previewSetId
        };
        if (this.setsInp.subField == 'page') {
            this.services.resource.updatePage(this.setsInp.id, setObj).subscribe(function (data) {
                _this.services.form.formObj.getPageById(_this.setsInp.id)['themeSetId'] = _this.previewSetId;
                _this.activeSetId = _this.previewSetId;
            });
        }
        else if (this.setsInp.subField == 'question') {
            this.services.resource.updateQuestionData(this.setsInp.id, setObj).subscribe(function (data) {
                _this.services.form.formObj.getQuestionById(_this.setsInp.id)['themeSetId'] = _this.previewSetId;
                _this.activeSetId = _this.previewSetId;
            });
        }
        this.cancelSets();
    };
    FieldSetsComponent.prototype.newSet = function () {
        this.leftPanelService.themeSetProperties.action.new = true;
        this.leftPanelService.triggerClickOnField(this.setsInp.subField, this.setsInp.id);
    };
    FieldSetsComponent.prototype.customiseSet = function (setId) {
        if (this.activeSetId != setId) {
            this.services.toastr.warning('Please apply a set before it could be customised');
            return false;
        }
        this.leftPanelService.themeSetProperties.action.new = false;
        this.leftPanelService.triggerClickOnField(this.setsInp.subField, this.setsInp.id);
    };
    FieldSetsComponent.prototype.cancelSets = function () {
        this.leftPanelService.themeSetProperties.action.new = false;
        this.leftPanelService.switchToThemeCust();
    };
    return FieldSetsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FieldSetsComponent.prototype, "setsInp", void 0);
FieldSetsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-field-sets',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/field-sets/field-sets.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/field-sets/field-sets.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */]) === "function" && _b || Object])
], FieldSetsComponent);

var _a, _b;
//# sourceMappingURL=field-sets.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"left-panel-div\" [ngSwitch]=\"themeSettings.presentAction\">\n  <div *ngSwitchCase=\"themeSettings.allActions.themesList\">\n    <theme-themes-list (onThemeApply)=\"onThemeApply.emit($event)\"></theme-themes-list>\n  </div>\n  <div *ngSwitchCase=\"themeSettings.allActions.themeCustomisation\">\n    <theme-customisation></theme-customisation>\n  </div>\n  <div *ngSwitchCase=\"themeSettings.allActions.surveySetting\">\n    <theme-survey-setting></theme-survey-setting>\n  </div>\n  <div *ngSwitchCase=\"themeSettings.allActions.pageSetting\">\n    <theme-page-setting></theme-page-setting>\n  </div>\n  <div *ngSwitchCase=\"themeSettings.allActions.containerSetting\">\n    <theme-container-setting [container]=\"themeSettings.activeElem\"></theme-container-setting>\n  </div>\n  <div *ngSwitchCase=\"themeSettings.allActions.titleSetting\">\n    <theme-title-setting [titleInp]=\"themeSettings.activeElem\"></theme-title-setting>\n  </div>\n  <div *ngSwitchCase=\"themeSettings.allActions.fieldSets\">\n    <theme-field-sets [setsInp]=\"themeSettings.activeElem\"></theme-field-sets>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss":
/***/ (function(module, exports) {

module.exports = ".left-panel-div {\n  height: 100%;\n  background-color: #fafafa; }\n\n.theme-left-side {\n  height: calc(100vh - 125px);\n  overflow-y: auto; }\n\n.theme-setting-div {\n  padding: 10px 20px;\n  background-color: #fafafa; }\n\n.theme-setting-div .theme-setting-inner-div {\n    border: 1px solid #E9E7E7;\n    padding: 20px;\n    background-color: white; }\n\n.customise-icon {\n  background: url(/assets/images/editSurvey/themes/back-revert.svg);\n  background-repeat: no-repeat;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  vertical-align: bottom; }\n\n.theme-row {\n  padding-top: 10px; }\n\n.theme-contanier {\n  margin-bottom: 20px; }\n\n.theme-heading {\n  font-family: \"Helvetica Neue Medium\";\n  margin-bottom: 20px; }\n\n.theme-heading .theme-heading-text {\n    vertical-align: top;\n    padding-left: 5px; }\n\n.theme-label {\n  font-size: 12px;\n  color: #858585; }\n\n.cp-border {\n  padding: 4px 5px;\n  border: 1px solid #D8D8D8;\n  border-radius: 2px;\n  display: inline-block; }\n\n.theme-sel-inp {\n  width: calc(100% - 38px);\n  height: 30px;\n  background-color: white;\n  font-size: 12px;\n  border: 1px solid #D8D8D8;\n  border-radius: 2px;\n  padding: 0 5px;\n  padding-right: 26px;\n  background: url(/assets/images/editSurvey/dropdown-arrow.svg) no-repeat white;\n  background-size: 14px;\n  background-position: right 10px center;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none; }\n\n.add-img-btn {\n  border: 1px solid #D8D8D8;\n  width: calc(100% - 38px);\n  height: 30px;\n  padding: 5px;\n  background-color: white;\n  font-size: 12px;\n  border-radius: 2px;\n  vertical-align: top; }\n\n.theme-custom-rd-cb-grp {\n  border: 1px solid #2392ED;\n  display: table;\n  font-size: 12px;\n  width: 100%;\n  table-layout: fixed; }\n\n.theme-custom-rd-cb-grp .theme-custom-rd-cb-lbl {\n    padding: 6px;\n    display: table-cell;\n    text-align: center;\n    cursor: pointer;\n    font-weight: 500; }\n\n.theme-custom-rd-cb-grp .theme-custom-rd-cb-lbl input[type=radio],\n    .theme-custom-rd-cb-grp .theme-custom-rd-cb-lbl input[type=checkbox] {\n      display: none; }\n\n.theme-custom-rd-cb-grp .theme-custom-rd-cb-lbl:not(:last-child) {\n      border-right: 1px solid #2392ED; }\n\n.theme-custom-rd-cb-grp .theme-custom-rd-cb-lbl.active {\n      color: white;\n      background-color: #2392ED; }\n\n.theme-footer {\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  padding: 15px;\n  width: 100%;\n  -webkit-box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.06);\n          box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.06); }\n\n.theme-save-btn {\n  background-color: #1B97E0;\n  width: 100%;\n  color: white;\n  font-family: 'Helvetica Neue Medium'; }\n\n.theme-cancel-btn {\n  background-color: white;\n  width: 100%;\n  color: #1B97E0;\n  border: 1px solid #1B97E0;\n  font-family: 'Helvetica Neue Medium'; }\n\n.theme-input-text {\n  padding: 0 5px;\n  height: 30px;\n  border-radius: 4px;\n  border: 1px solid #F2F2F2;\n  width: 100%; }\n\n.theme-name-container {\n  padding: 10px 0;\n  font-family: 'Helvetica Neue Medium'; }\n\n.remove-set-btn {\n  color: red;\n  font-family: 'Helvetica Neue Medium';\n  font-size: 12px;\n  cursor: pointer; }\n\n.color-outer-span {\n  position: relative;\n  display: inline-block; }\n\n.transparent-icon {\n  background: url(/assets/images/editSurvey/themes/transparent.svg);\n  background-repeat: no-repeat;\n  display: inline-block;\n  height: 20px;\n  width: 20px;\n  position: absolute;\n  top: 1px;\n  left: 1px; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LeftPanelComponent = (function () {
    function LeftPanelComponent(leftPanelService) {
        this.leftPanelService = leftPanelService;
        this.onThemeApply = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LeftPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeSettings = this.leftPanelService.themeSettings;
        setTimeout(function () {
            _this.themeSettings.presentAction = 'themes-list';
            _this.leftPanelService.checkEventBinding();
        }, 1);
    };
    return LeftPanelComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], LeftPanelComponent.prototype, "onThemeApply", void 0);
LeftPanelComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-left-panel',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */]) === "function" && _b || Object])
], LeftPanelComponent);

var _a, _b;
//# sourceMappingURL=left-panel.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeftPanelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_data_service__ = __webpack_require__("./src/app/routes/survey/edit/edit.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LeftPanelService = (function () {
    function LeftPanelService(services, editDataService) {
        this.services = services;
        this.editDataService = editDataService;
        this.allThemesArr = {
            list: [],
            count: 0
        };
        this.themeComp = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.themeCompState = this.themeComp.asObservable();
        this.optionsComp = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.optionsCompState = this.optionsComp.asObservable();
        this.changesApplied = false;
        this.hoverClass = '.hover-select';
        this.themeSetProperties = {
            action: {
                new: false
            },
            rightSideSetsBtn: {
                display: false
            }
        };
        this.themeSet = {
            page: {},
            question: {}
        };
        this.themeSettings = {
            allActions: {
                themesList: 'themes-list',
                themeCustomisation: 'theme-customisation',
                surveySetting: 'survey-setting',
                pageSetting: 'page-setting',
                containerSetting: 'container-setting',
                titleSetting: 'title-setting',
                fieldSets: 'field-sets'
            },
            presentAction: '',
            activeElem: {
                field: '',
                subField: '',
                id: '',
                themeSetId: ''
            }
        };
        this.previewThemeId = ''; //this is for previewing theme after saving a new theme
        this.viewListMap = {
            'survey-container': this.themeSettings.allActions.surveySetting,
            'survey-header': this.themeSettings.allActions.containerSetting,
            'survey-title': this.themeSettings.allActions.titleSetting,
            'page-container': this.themeSettings.allActions.pageSetting,
            'page-header': this.themeSettings.allActions.containerSetting,
            'page-title': this.themeSettings.allActions.titleSetting,
            'page-desc': this.themeSettings.allActions.titleSetting,
            'question-container': this.themeSettings.allActions.containerSetting,
            'question-title': this.themeSettings.allActions.containerSetting,
            'page-prev-btn': this.themeSettings.allActions.containerSetting,
            'page-next-btn': this.themeSettings.allActions.containerSetting,
            'page-done-btn': this.themeSettings.allActions.containerSetting,
            'page-exit-btn': this.themeSettings.allActions.containerSetting,
            'page-ok-btn': this.themeSettings.allActions.containerSetting,
            'page-sets': this.themeSettings.allActions.fieldSets,
            'question-sets': this.themeSettings.allActions.fieldSets
        };
        this.fontFamList = [
            { text: 'Helvetica', value: 'Helvetica' },
            { text: 'Helvetica Neue', value: 'Helvetica Neue' },
            // {text: 'Times', value: 'Times'},
            { text: 'Times New Roman', value: 'Times New Roman' },
            { text: 'Arial', value: 'Arial' },
            { text: 'Courier New', value: 'Courier New' },
            { text: 'Verdana', value: 'Verdana' },
        ];
        this.borderStyleList = [
            { text: 'Solid', value: 'solid' },
            { text: 'Dotted', value: 'dotted' },
            { text: 'Dashed', value: 'dashed' },
            { text: 'Double', value: 'double' },
            { text: 'Groove', value: 'groove' },
            { text: 'Ridge', value: 'ridge' },
            { text: 'Inset', value: 'inset' },
            { text: 'Outset', value: 'outset' }
        ];
    }
    LeftPanelService.prototype.initThemeData = function (themeData) {
        this.themeJSON = new Theme(themeData);
        this.themeCss = this.themeJSON.getThemeCssObj();
        this.themeJSONCopy = new Theme(this.services.utils.cloneObject(this.themeJSON));
    };
    LeftPanelService.prototype.setThemeSet = function (field, setData) {
        this.themeSet = {
            page: {},
            question: {}
        };
        if (field == 'page' || field == 'question') {
            this.themeSet[field] = setData;
        }
    };
    LeftPanelService.prototype.getThemeSet = function (field) {
        return this.themeSet[field];
    };
    LeftPanelService.prototype.getExtendedCss = function (field, themeData, styleName, defaultValue) {
        var styleValue = defaultValue || '';
        if (field == 'page') {
            styleValue = themeData['survey']['body'][styleName] || styleValue;
        }
        else if (field == 'question') {
            styleValue = themeData['survey']['body'][styleName] || styleValue;
            styleValue = themeData['page']['body'][styleName] || styleValue;
        }
        return styleValue;
    };
    LeftPanelService.prototype.getThemeSetByField = function (field) {
        var themeData = this.themeJSON.getThemeSet(this.themeSettings.activeElem['themeSetId']);
        var setData;
        (field == 'page') && (setData = new PageTheme(themeData));
        (field == 'question') && (setData = new QuestionTheme(themeData));
        return setData;
    };
    LeftPanelService.prototype.setComponent = function (type, id) {
        var _this = this;
        this.themeSettings.presentAction = '';
        this.getElement(type, id);
        this.editDataService.surveyDesignData.displaySidebar = false;
        setTimeout(function () {
            _this.themeSettings.presentAction = _this.viewListMap[type];
        }, 0);
    };
    LeftPanelService.prototype.getElement = function (type, id) {
        switch (type) {
            case 'survey-container': {
                this.themeSettings.activeElem = {
                    field: 'survey',
                    subField: 'body'
                };
                break;
            }
            case 'survey-header': {
                this.themeSettings.activeElem = {
                    field: 'survey',
                    subField: 'header'
                };
                break;
            }
            case 'survey-title': {
                this.themeSettings.activeElem = {
                    field: 'survey',
                    subField: 'title'
                };
                break;
            }
            case 'page-container': {
                this.themeSettings.activeElem = {
                    field: 'page',
                    subField: 'body'
                };
                break;
            }
            case 'page-header': {
                this.themeSettings.activeElem = {
                    field: 'page',
                    subField: 'header'
                };
                break;
            }
            case 'page-title': {
                this.themeSettings.activeElem = {
                    field: 'page',
                    subField: 'title'
                };
                break;
            }
            case 'page-desc': {
                this.themeSettings.activeElem = {
                    field: 'page',
                    subField: 'desc'
                };
                break;
            }
            case 'question-container': {
                this.themeSettings.activeElem = {
                    field: 'question',
                    subField: 'body'
                };
                break;
            }
            case 'question-title': {
                this.themeSettings.activeElem = {
                    field: 'question',
                    subField: 'title'
                };
                break;
            }
            // case 'question-options': {
            //   this.themeSettings.activeElem = {
            //     field: 'question',
            //     subField: 'options'
            //   }
            //   break;
            // }
            case 'page-prev-btn': {
                this.themeSettings.activeElem = {
                    field: 'page',
                    subField: 'prevBtn'
                };
                break;
            }
            case 'page-next-btn': {
                this.themeSettings.activeElem = {
                    field: 'page',
                    subField: 'nextBtn'
                };
                break;
            }
            case 'page-done-btn': {
                this.themeSettings.activeElem = {
                    field: 'page',
                    subField: 'doneBtn'
                };
                break;
            }
            case 'page-exit-btn': {
                this.themeSettings.activeElem = {
                    field: 'page',
                    subField: 'exitBtn'
                };
                break;
            }
            case 'page-ok-btn': {
                this.themeSettings.activeElem = {
                    field: 'page',
                    subField: 'okBtn'
                };
                break;
            }
            case 'page-sets': {
                this.themeSettings.activeElem = {
                    field: 'sets',
                    subField: 'page'
                };
                break;
            }
            case 'question-sets': {
                this.themeSettings.activeElem = {
                    field: 'sets',
                    subField: 'question'
                };
                break;
            }
        }
        var themeSetId = '';
        if (this.themeSettings.activeElem.field == 'page') {
            themeSetId = this.services.form.formObj.getPageById(id).themeSetId;
            !Object.keys(this.themeSet.page).length && (this.themeSet.page = new PageTheme());
        }
        else if (this.themeSettings.activeElem.field == 'question') {
            themeSetId = this.services.form.formObj.getQuestionById(id).themeSetId;
            !Object.keys(this.themeSet.question).length && (this.themeSet.question = new QuestionTheme());
        }
        this.themeSettings.activeElem['id'] = id;
        if (this.themeJSON.ifSetExist(themeSetId)) {
            this.themeSettings.activeElem['themeSetId'] = themeSetId;
            var setData = this.getThemeSetByField(this.themeSettings.activeElem.field);
            this.setThemeSet(this.themeSettings.activeElem.field, setData);
        }
        else {
            this.themeSettings.activeElem['themeSetId'] = '';
            this.setThemeSet(this.themeSettings.activeElem.field, this.themeJSON[this.themeSettings.activeElem.field]);
        }
        // this.themeSettings.activeElem['themeSetId'] = this.themeJSON.ifSetExist(themeSetId) ? themeSetId : '';
        // let setData = this.getThemeSetByField(this.themeSettings.activeElem.field);
        // this.setThemeSet(this.themeSettings.activeElem.field, setData);
    };
    LeftPanelService.prototype.triggerClickOnField = function (type, id) {
        var dataBody = (type == 'page' ? 'page-container' : 'question-container');
        $("div[data-body=" + dataBody + "][data-id=" + id + "]").trigger('click');
    };
    LeftPanelService.prototype.callNextOnThemeCompState = function (event) {
        this.changesApplied = true;
        !event.hasOwnProperty('forAll') && (event['forAll'] = true);
        event['forAll'] && this.updateThemeCssObj(event);
        !event['forAll'] && this.changeThemeSet(event);
        event['id'] = this.themeSettings.activeElem.id;
        this.reflectUIthemeChanges(event);
    };
    LeftPanelService.prototype.buildThemeData = function (themeData) {
        this.initThemeData(themeData);
        if (!themeData) {
            this.services.form.formObj.getPageFields().forEach(function (page) {
                page.themeSetId = "";
                page.getAllQuestions().forEach(function (ques) {
                    ques.themeSetId = "";
                });
            });
            var event = { 'forAll': true };
            this.reflectUIthemeChanges(event);
        }
    };
    LeftPanelService.prototype.setThemeCss = function (data, fieldObj) {
        var ele = fieldObj || this.themeSettings.activeElem;
        this.themeCss[ele.field][ele.subField] = data;
    };
    LeftPanelService.prototype.getThemeCssObj = function () {
        return this.themeCss;
    };
    LeftPanelService.prototype.updateThemeCssObj = function (fieldObj) {
        this.changeThemeSet(fieldObj);
        this.themeJSON[fieldObj.field][fieldObj.subField][fieldObj.cssProp] = fieldObj.value;
        this.setThemeCss(this.themeJSON.updateThemeCssObj(fieldObj.field, fieldObj.subField), fieldObj);
    };
    LeftPanelService.prototype.changeThemeSet = function (event) {
        if (this.themeSet[event.field]) {
            !this.themeSet[event.field][event.subField] && (this.themeSet[event.field][event.subField] = {});
            this.themeSet[event.field][event.subField][event.cssProp] = event.value;
        }
    };
    LeftPanelService.prototype.saveTheme = function (e) {
        var _this = this;
        var themeData = this.services.utils.cloneObject(this.themeJSON);
        return this.services.resource.addTheme(e.libId, e.libType, e.selFolderId, themeData).map(function (data) {
            data.data && _this.initThemeData(data.data);
            _this.previewThemeId = data.data._id;
            // this.themeJSONCopy = new Theme(themeData);
            _this.changesApplied = false;
            return data;
        });
    };
    LeftPanelService.prototype.updateTheme = function (forAll) {
        var _this = this;
        var response;
        if (forAll) {
            var themeJSONData = this.services.utils.cloneObject(this.themeJSON);
            response = this.services.resource.updateTheme(this.themeJSON._id, themeJSONData).map(function (data) {
                data.data && _this.initThemeData(data.data);
                // this.themeJSONCopy = new Theme(data.data);
                _this.changesApplied = false;
                _this.services.form.formObj.theme = new Theme(data.data);
                return data;
            });
        }
        else {
            var setDataObj = this.themeSet[this.themeSettings.activeElem.field] || {};
            var setData = this.services.utils.cloneObject(setDataObj);
            if (!this.themeSettings.activeElem.themeSetId || this.themeSetProperties.action.new) {
                response = this.saveThemeSet(setData);
            }
            else {
                response = this.updateThemeSet(setData);
            }
        }
        return response;
    };
    LeftPanelService.prototype.saveThemeSet = function (setData) {
        var _this = this;
        var ele = this.themeSettings.activeElem;
        return this.services.resource.saveThemeSet(this.themeJSON._id, ele.field, setData, ele.id).map(function (data) {
            (ele.field == 'page') && (_this.themeJSON.addPageSet(data.data.setId, new PageTheme(data.data.theme)));
            (ele.field == 'question') && (_this.themeJSON.addQuestionSet(data.data.setId, new QuestionTheme(data.data.theme)));
            _this.applyNewSetdataOnTheme(data.data.setId, data.data.theme);
        });
    };
    LeftPanelService.prototype.updateThemeSet = function (setData) {
        var _this = this;
        var ele = this.themeSettings.activeElem;
        return this.services.resource.updateThemeSet(this.themeJSON._id, ele.field, ele.themeSetId, setData, ele.id).map(function (data) {
            _this.applyNewSetdataOnTheme(ele.themeSetId, data.data);
        });
    };
    LeftPanelService.prototype.applyNewSetdataOnTheme = function (setId, data) {
        this.changesApplied = false;
        var ele = this.themeSettings.activeElem;
        var currentEle;
        if (ele.field == 'page') {
            currentEle = this.services.form.formObj.getPageById(ele.id);
            this.services.form.formObj.theme.setPageSet(data.pageSet);
        }
        else if (ele.field == 'question') {
            currentEle = this.services.form.formObj.getQuestionById(ele.id);
            this.services.form.formObj.theme.setQuestionSet(data.questionSet);
        }
        currentEle.themeSetId = setId;
        this.initThemeData(data);
    };
    LeftPanelService.prototype.deleteThemeSet = function (setsInp, activeSetId, setId) {
        var event = {
            forAll: true
        };
        this.themeJSON.deleteThemeSet(setId);
        if (activeSetId == setId) {
            if (setsInp.subField == 'page') {
                this.services.form.formObj.getPageById(setsInp.id)['themeSetId'] = null;
            }
            else if (setsInp.subField == 'question') {
                this.services.form.formObj.getQuestionById(setsInp.id)['themeSetId'] = null;
            }
            event['field'] = setsInp.subField;
            event['id'] = setsInp.id;
            event['forAll'] = false;
        }
        this.themeComp.next(event);
    };
    LeftPanelService.prototype.resetToThemeList = function () {
        this.themeSettings.presentAction = 'themes-list';
        this.editDataService.surveyDesignData.displaySidebar = true;
        this.removeHoverClasses();
        this.checkEventBinding();
    };
    LeftPanelService.prototype.switchToThemeCust = function () {
        this.themeSettings.presentAction = 'theme-customisation';
        this.removeHoverClasses();
        this.checkEventBinding();
    };
    LeftPanelService.prototype.checkEventBinding = function (stopBinding) {
        var _this = this;
        $(document).off('mouseover', this.hoverClass);
        $(document).off('click', this.hoverClass);
        this.themeSetProperties.rightSideSetsBtn.display = false;
        if (!stopBinding && this.themeSettings.presentAction != 'themes-list') {
            this.themeSetProperties.rightSideSetsBtn.display = true;
            // for showing border on current hovering element
            $(document).on('mouseover', this.hoverClass, function (e) {
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
                $(_this.hoverClass).removeClass('active');
                $(e.currentTarget).addClass('active');
            });
            $(document).on('click', this.hoverClass, function (e) {
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
                _this.onClickRightPanelEle(e);
            });
        }
    };
    LeftPanelService.prototype.onClickRightPanelEle = function (e) {
        var _this = this;
        var dataId = $(e.currentTarget).attr('data-id');
        var dataBody = $(e.currentTarget).attr('data-body');
        if (this.changesApplied) {
            if (!(this.themeSettings.activeElem.id == dataId && this.themeSettings.activeElem.field == dataBody.split('-')[0])) {
                this.services.alert({
                    title: "<p class=\"sweetalert_title\">Do you want to apply current changes.</p>",
                    type: 'warning',
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonClass: 'sweetalert_apply_btn',
                    cancelButtonClass: 'sweetalert_cancel_btn',
                    confirmButtonText: 'Save Changes',
                    cancelButtonText: 'Revert Changes!'
                }).then(function (result) {
                    if (result.value) {
                        _this.changesApplied = false;
                        $(_this.hoverClass).removeClass('selected');
                        $(e.currentTarget).addClass('selected');
                        _this.setComponent(dataBody, dataId);
                        _this.updateTheme(true).subscribe(function (data) {
                        });
                    }
                    else if (result.dismiss == 'cancel') {
                        _this.onCancelSetting();
                        $(_this.hoverClass).removeClass('selected');
                        $(e.currentTarget).addClass('selected');
                        _this.setComponent(dataBody, dataId);
                    }
                    else {
                    }
                });
                return;
            }
        }
        $(this.hoverClass).removeClass('selected');
        $(e.currentTarget).addClass('selected');
        this.setComponent(dataBody, dataId);
    };
    LeftPanelService.prototype.removeHoverClasses = function () {
        $(this.hoverClass).removeClass('active');
        $(this.hoverClass).removeClass('selected');
    };
    LeftPanelService.prototype.onChangeForAllCheckbox = function (active) {
        // if(!this.changesApplied) {
        //   return;
        // }
        var activeElem = this.themeSettings.activeElem;
        if (!active) {
            this.themeJSON[activeElem.field] = this.getCurrnetElemThemeFromData(this.themeJSONCopy[activeElem.field]);
            this.setThemeCss(this.themeJSON.getStyle(this.themeJSON[activeElem.field][activeElem.subField]));
        }
        else {
            this.themeJSON[activeElem.field] = this.getCurrnetElemThemeFromData(this.themeSet[activeElem.field]);
            this.setThemeCss(this.themeJSON.getStyle(this.themeJSON[activeElem.field][activeElem.subField]));
        }
        var event = this.services.utils.cloneObject(this.themeSettings.activeElem);
        event['forAll'] = true;
        this.reflectUIthemeChanges(event);
        event['forAll'] = false;
        !active && this.reflectUIthemeChanges(event);
    };
    LeftPanelService.prototype.resetThemeOnCurrnetElem = function () {
        if (this.themeSettings.presentAction == 'theme-customisation') {
            this.onCancelCustomise();
            return;
        }
        var activeElem = this.themeSettings.activeElem;
        var themeSetId = activeElem['themeSetId'];
        if (themeSetId) {
            this.themeSet[activeElem.field][activeElem.subField] = this.getCurrnetElemThemeFromData(this.themeJSONCopy.getThemeSet(themeSetId))[activeElem.subField];
        }
        else {
            this.themeJSON[activeElem.field][activeElem.subField] = this.getCurrnetElemThemeFromData(this.themeJSONCopy);
            this.themeCss[activeElem.field][activeElem.subField] = this.themeJSON.getFieldCssObj(this.themeJSON[activeElem.field][activeElem.subField]);
        }
        this.themeJSON[activeElem.field] = this.getCurrnetElemThemeFromData(this.themeJSONCopy[activeElem.field]);
        this.setThemeCss(this.themeJSON.getStyle(this.themeJSON[activeElem.field][activeElem.subField]));
    };
    LeftPanelService.prototype.onCancelSetting = function () {
        this.resetThemeOnCurrnetElem();
        var event = this.services.utils.cloneObject(this.themeSettings.activeElem);
        event['forAll'] = !this.themeSettings.activeElem['themeSetId'];
        this.themeSettings.activeElem = {};
        this.changesApplied = false;
        this.reflectUIthemeChanges(event);
    };
    LeftPanelService.prototype.onCancelCustomise = function () {
        this.initThemeData(this.services.utils.cloneObject(this.themeJSONCopy));
        var event = { forAll: true };
        this.reflectUIthemeChanges(event);
    };
    LeftPanelService.prototype.getCurrnetElemThemeFromData = function (themeData) {
        var result;
        try {
            var initialData = this.services.utils.cloneObject(themeData);
            if (this.themeSettings.activeElem.field == 'page') {
                result = new PageTheme(initialData);
            }
            else if (this.themeSettings.activeElem.field == 'question') {
                result = new QuestionTheme(initialData);
            }
            else if (this.themeSettings.activeElem.field == 'survey') {
                result = new SurveyTheme(initialData);
            }
        }
        catch (ex) {
            throw ex;
        }
        return result;
    };
    LeftPanelService.prototype.previewSet = function (field, setId) {
        this.themeSet[field] = this.themeJSON.getThemeSet(setId);
        this.themeSettings.activeElem.themeSetId = setId;
        this.reflectUIthemeChanges({ 'field': field, 'id': this.themeSettings.activeElem.id });
    };
    LeftPanelService.prototype.removeSet = function (field) {
        this.reflectUIthemeChanges({ 'field': field, 'forAll': true });
    };
    LeftPanelService.prototype.reflectUIthemeChanges = function (event) {
        this.themeComp.next(event);
        this.reflectOptionSettings();
    };
    LeftPanelService.prototype.reflectOptionSettings = function () {
        this.optionsComp.next(this.themeJSON.options);
    };
    return LeftPanelService;
}());
LeftPanelService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_services_module__["a" /* SharedServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__edit_data_service__["a" /* EditDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__edit_data_service__["a" /* EditDataService */]) === "function" && _b || Object])
], LeftPanelService);

var _a, _b;
//# sourceMappingURL=left-panel.service.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/page-setting/page-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-left-side\">\n  <div class=\"theme-setting-div\">\n    <div>\n      <span class=\"customise-icon\"></span>\n      <span>Customise - </span>\n      <span>Page Body</span>\n    </div>\n    <div class=\"theme-name-container\">\n      {{themeName}}\n    </div>\n    <div [hidden]=\"themeAction.new\">\n      <div [hidden]=\"(!appliedSet.themeSetId || appliedSet.themeSetId == '')\">\n         Set name:\n         <span>{{appliedSet?.themeSetId}}</span>\n         <span class=\"pull-right remove-set-btn\" (click)=\"removePageSet()\">Remove</span>\n      </div>\n    </div>\n    <div class=\"theme-setting-inner-div\">\n      <div class=\"theme-contanier\">\n        <div class=\"theme-heading\">\n          <span><img src=\"assets/images/editSurvey/themes/background.svg\" height=\"20\"></span>\n          <span class=\"theme-heading-text\">\n            Background\n          </span>\n        </div>\n        <div>\n          <div class=\"row theme-row\">\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <span class=\"theme-label\">Page</span>\n            </div>\n            <div class=\"col-md-7 col-sm-7 col-xs-7\">\n              <theme-background-setting [bgInpData]=\"{\n                'field': 'page',\n                'subField': 'body',\n                'props': themeSet.page.body\n              }\" (onChangeBgDetails)=\"onChange($event)\">\n              </theme-background-setting>\n            </div>\n          </div>\n          <!-- <div class=\"row theme-row\">\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <span class=\"theme-label\">Questions</span>\n            </div>\n            <div class=\"col-md-7 col-sm-7 col-xs-7\">\n              <theme-background-setting [bgInpData]=\"{\n                'field': 'question',\n                'subField': 'body',\n                'props': themeSet.question.body\n              }\" (onChangeBgDetails)=\"onChange($event)\">\n              </theme-background-setting>\n            </div>\n          </div> -->\n        </div>\n      </div>\n      <div class=\"theme-contanier\">\n        <div class=\"theme-heading\">\n          <span><img src=\"assets/images/editSurvey/themes/text.svg\" height=\"20\"></span>\n          <span class=\"theme-heading-text\">\n            Fonts\n          </span>\n        </div>\n        <div>\n          <theme-text-setting [textInpData]=\"{\n            'field': 'page',\n            'subField': 'body',\n            'props': themeSet.page.body\n          }\" (onChangeTextDetails)=\"onChange($event)\"></theme-text-setting>\n        </div>\n      </div>\n      <div class=\"theme-contanier\">\n        <!-- <div class=\"theme-heading\">\n          <span class=\"theme-heading-text\">\n            Page Settings\n          </span>\n        </div> -->\n        <div>\n          <!-- <div class=\"row theme-row\">\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <span class=\"theme-label\">Page Format</span>\n            </div>\n            <div class=\"col-md-7 col-sm-7 col-xs-7\">\n              <div class=\"theme-custom-rd-cb-grp\">\n                <label class=\"theme-custom-rd-cb-lbl\" [ngClass]=\"{'active': true}\">\n                  <input type=\"radio\" name=\"fontWeight\" value=\"bold\">Portrait\n                </label>\n                <label class=\"theme-custom-rd-cb-lbl\" [ngClass]=\"{'active': false}\">\n                  <input type=\"radio\" name=\"fontWeight\" value=\"italics\">Landscape\n                </label>\n              </div>\n            </div>\n          </div> -->\n          <!-- <div class=\"row theme-row\">\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <span class=\"theme-label\">Page Layout</span>\n            </div>\n            <div class=\"col-md-7 col-sm-7 col-xs-7\">\n              <div class=\"theme-custom-rd-cb-grp\">\n                <label class=\"theme-custom-rd-cb-lbl\">\n                  <input type=\"radio\" name=\"pageLayout\" value=\"left\">\n                  <span class=\"layout-span\">\n                    <span class=\"layout-icon left-top\"></span>\n                    <span [ngClass]=\"{'layout-active': true}\">\n                      <span [ngClass]=\"true ? 'layout-icon left-middle-active' : 'layout-icon left-middle'\"></span>\n                    </span>\n                    <span class=\"layout-icon left-bottom\"></span>\n                  </span>\n                </label>\n                <label class=\"theme-custom-rd-cb-lbl\">\n                  <input type=\"radio\" name=\"pageLayout\" value=\"center\">\n                  <span class=\"layout-span\">\n                    <span class=\"layout-icon center-top\"></span>\n                    <span [ngClass]=\"{'layout-active': false}\">\n                      <span [ngClass]=\"false ? 'layout-icon center-middle-active' : 'layout-icon center-middle'\"></span>\n                    </span>\n                    <span class=\"layout-icon center-bottom\"></span>\n                  </span>\n                </label>\n                <label class=\"theme-custom-rd-cb-lbl\">\n                  <input type=\"radio\" name=\"pageLayout\" value=\"right\">\n                  <span class=\"layout-span\">\n                    <span class=\"layout-icon right-top\"></span>\n                    <span [ngClass]=\"{'layout-active': false}\">\n                      <span [ngClass]=\"false ? 'layout-icon right-middle-active' : 'layout-icon right-middle'\"></span>\n                    </span>\n                    <span class=\"layout-icon right-bottom\"></span>\n                  </span>\n                </label>\n              </div>\n            </div>\n          </div> -->\n          <div class=\"row theme-row\">\n            <div class=\"col-md-12 col-sm-12 col-xs-12\">\n              <label><input type=\"checkbox\" [(ngModel)]=\"forAll\" (change)=\"onChangeForAll()\">For all</label>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row theme-footer\">\n    <div class=\"col-md-6 col-sm-6 col-xs-6\">\n      <button type=\"button\" class=\"btn theme-save-btn\" (click)=\"updateTheme()\">\n        {{themeAction.new ? 'Save' : 'Update'}}\n      </button>\n    </div>\n    <div class=\"col-md-6 col-sm-6 col-xs-6\">\n      <button type=\"button\" class=\"btn theme-cancel-btn\" (click)=\"cancelCustomisation()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/page-setting/page-setting.component.scss":
/***/ (function(module, exports) {

module.exports = ".layout-span {\n  display: inline-block; }\n\n.layout-active {\n  background-color: #2392ED;\n  display: inline-block;\n  border-radius: 2px; }\n\n.layout-icon {\n  height: 17px;\n  width: 15px;\n  display: block;\n  margin-top: 2px; }\n\n.layout-icon.left-top {\n    background: url(\"/assets/images/editSurvey/themes/top-left.svg\");\n    background-repeat: no-repeat; }\n\n.layout-icon.left-middle {\n    background: url(\"/assets/images/editSurvey/themes/left-align.svg\");\n    background-repeat: no-repeat; }\n\n.layout-icon.left-middle-active {\n    background: url(\"/assets/images/editSurvey/themes/left-align-active.svg\");\n    background-repeat: no-repeat; }\n\n.layout-icon.left-bottom {\n    background: url(\"/assets/images/editSurvey/themes/bottom-left.svg\");\n    background-repeat: no-repeat; }\n\n.layout-icon.center-top {\n    background: url(\"/assets/images/editSurvey/themes/top-center.svg\");\n    background-repeat: no-repeat; }\n\n.layout-icon.center-middle {\n    background: url(\"/assets/images/editSurvey/themes/center-align.svg\");\n    background-repeat: no-repeat; }\n\n.layout-icon.center-middle-active {\n    background: url(\"/assets/images/editSurvey/themes/center-align-active.svg\");\n    background-repeat: no-repeat; }\n\n.layout-icon.center-bottom {\n    background: url(\"/assets/images/editSurvey/themes/bottom-center.svg\");\n    background-repeat: no-repeat; }\n\n.layout-icon.right-top {\n    background: url(\"/assets/images/editSurvey/themes/top-right.svg\");\n    background-repeat: no-repeat; }\n\n.layout-icon.right-middle {\n    background: url(\"/assets/images/editSurvey/themes/right-align.svg\");\n    background-repeat: no-repeat; }\n\n.layout-icon.right-middle-active {\n    background: url(\"/assets/images/editSurvey/themes/right-align-active.svg\");\n    background-repeat: no-repeat; }\n\n.layout-icon.right-bottom {\n    background: url(\"/assets/images/editSurvey/themes/bottom-right.svg\");\n    background-repeat: no-repeat; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/page-setting/page-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
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



var PageSettingComponent = (function () {
    function PageSettingComponent(leftPanelService, services) {
        this.leftPanelService = leftPanelService;
        this.services = services;
        this.forAll = true;
    }
    PageSettingComponent.prototype.ngOnInit = function () {
        this.themeName = this.leftPanelService.themeJSON.name;
        this.themeAction = this.leftPanelService.themeSetProperties.action;
        this.appliedSet = {};
        if (this.themeAction.new) {
            this.forAll = false;
            this.leftPanelService.themeSet['page'] = new PageTheme();
        }
        else {
            this.leftPanelService.themeSet['page'] = this.leftPanelService.themeJSON.page;
            this.appliedSet['themeSetId'] = this.leftPanelService.themeSettings.activeElem['themeSetId'];
            if (this.appliedSet['themeSetId']) {
                this.forAll = false;
                var setData = this.services.utils.cloneObject(this.leftPanelService.themeJSON.getPageSetById(this.appliedSet['themeSetId']));
                this.leftPanelService.themeSet['page'] = new PageTheme(setData);
            }
        }
        this.themeSet = !this.forAll ? this.leftPanelService.themeSet : this.leftPanelService.themeJSON;
        // !this.themeSet.page.body.fontSize && (this.themeSet.page.body.setFontSize("14px"));
        !this.themeSet.page.body.fontSize && (this.themeSet.page.body.fontSize = "14px");
    };
    PageSettingComponent.prototype.onChange = function (event) {
        event['forAll'] = this.forAll;
        this.leftPanelService.callNextOnThemeCompState(event);
    };
    PageSettingComponent.prototype.updateTheme = function () {
        var _this = this;
        this.leftPanelService.updateTheme(this.forAll).subscribe(function (data) {
            _this.cancelCustomisation();
        });
    };
    PageSettingComponent.prototype.cancelCustomisation = function () {
        this.leftPanelService.onCancelSetting();
        this.leftPanelService.switchToThemeCust();
    };
    PageSettingComponent.prototype.onChangeForAll = function () {
        this.leftPanelService.onChangeForAllCheckbox(this.forAll);
    };
    PageSettingComponent.prototype.removePageSet = function () {
        var _this = this;
        var id = this.leftPanelService.themeSettings.activeElem.id;
        var pageBody = {
            themeSetId: null
        };
        this.services.resource.updatePage(id, pageBody).subscribe(function (data) {
            _this.services.form.formObj.getPageById(id)['themeSetId'] = null;
            _this.leftPanelService.removeSet('page');
            _this.leftPanelService.switchToThemeCust();
        });
    };
    return PageSettingComponent;
}());
PageSettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-page-setting',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/page-setting/page-setting.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/page-setting/page-setting.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */]) === "function" && _b || Object])
], PageSettingComponent);

var _a, _b;
//# sourceMappingURL=page-setting.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/background-setting/background-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <span class=\"cp-border\">\n    <app-color-picker [colorInp]=\"{value: bgInpData.props.backgroundColor}\" (emitColor)=\"setColor($event)\"></app-color-picker>\n  </span>\n  <span>\n    <button type=\"button\" class=\"btn add-img-btn\" (click)=\"openImageModal()\" [hidden]=\"bgInpData.props.backgroundImage\">\n      <span class=\"img-ph-icon\"></span>\n      Add Image\n    </button>\n    <button type=\"button\" class=\"btn add-img-btn\" [hidden]=\"!bgInpData.props.backgroundImage\">\n      <span title=\"{{imgName}}\" (click)=\"openImageModal()\" class=\"title-name\">{{imgName}}</span>\n      <span class=\"remove-image\" (click)=\"removeBgImg()\">X</span>\n    </button>\n  </span>\n</div>\n\n<ng-template #uploadImageModal>\n  <div class=\"modal-header\">\n    <div class=\"modal-title pull-left\">\n      <h4>Upload Image</h4>\n    </div>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"modal_inner_body\">\n      <div class=\"modal_backgrd_img\">\n        <app-image-upload [imgUploadInp]=\"{'cropping': false}\" (onDoneImageSelect)=\"onDoneImageSelect($event)\"></app-image-upload>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/background-setting/background-setting.component.scss":
/***/ (function(module, exports) {

module.exports = ".img-ph-icon {\n  display: inline-block;\n  background: url(/assets/images/editSurvey/themes/image-placeholder.svg);\n  background-repeat: no-repeat;\n  height: 12px;\n  width: 22px; }\n\n.remove-image {\n  color: red;\n  vertical-align: top;\n  padding: 5px; }\n\n.title-name {\n  width: calc(100% - 20px);\n  display: inline-block;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.modal_backgrd_img {\n  height: calc(100vh - 200px);\n  overflow-y: auto;\n  overflow-x: hidden; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/background-setting/background-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackgroundSettingComponent = (function () {
    function BackgroundSettingComponent(modalService) {
        this.modalService = modalService;
        this.onChangeBgDetails = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.regEx = /[\w0-9\-\_]*\.(png|jpg|gif|bmp|svg|jpeg|tiff)/;
    }
    BackgroundSettingComponent.prototype.openModal = function (template, size) {
        this.modalRef = this.modalService.show(template, { class: size });
    };
    BackgroundSettingComponent.prototype.hideModal = function () {
        this.modalRef.hide();
    };
    BackgroundSettingComponent.prototype.ngOnInit = function () {
        this.imgName = (this.bgInpData.props.backgroundImage && this.bgInpData.props.backgroundImage.match(this.regEx)[0]);
    };
    BackgroundSettingComponent.prototype.openImageModal = function () {
        this.openModal(this.uploadImageModal, 'modal-lg');
    };
    BackgroundSettingComponent.prototype.setColor = function (e) {
        this.onChangeBgDetails.emit({
            'field': this.bgInpData.field,
            'subField': this.bgInpData.subField,
            'cssProp': 'backgroundColor',
            'value': e
        });
    };
    BackgroundSettingComponent.prototype.onDoneImageSelect = function (e) {
        this.hideModal();
        if (e) {
            this.onChangeBgDetails.emit({
                'field': this.bgInpData.field,
                'subField': this.bgInpData.subField,
                'cssProp': 'backgroundImage',
                'value': 'url(' + e.url + ')'
            });
            this.imgName = this.bgInpData.props.backgroundImage.match(this.regEx)[0];
        }
    };
    BackgroundSettingComponent.prototype.removeBgImg = function () {
        this.onChangeBgDetails.emit({
            'field': this.bgInpData.field,
            'subField': this.bgInpData.subField,
            'cssProp': 'backgroundImage',
            'value': ''
        });
    };
    return BackgroundSettingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BackgroundSettingComponent.prototype, "bgInpData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], BackgroundSettingComponent.prototype, "onChangeBgDetails", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('uploadImageModal'),
    __metadata("design:type", Object)
], BackgroundSettingComponent.prototype, "uploadImageModal", void 0);
BackgroundSettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-background-setting',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/background-setting/background-setting.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/background-setting/background-setting.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _b || Object])
], BackgroundSettingComponent);

var _a, _b;
//# sourceMappingURL=background-setting.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/border-setting/border-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <span class=\"cp-border\">\n      <app-color-picker [colorInp]=\"{value: borderInp.props.borderColor}\" (emitColor)=\"setColor($event)\"></app-color-picker>\n    </span>\n    <span>\n      <select class=\"theme-sel-inp\" #borderStyleSel [(ngModel)]=\"borderInp.props.borderStyle\" (change)=\"setBorderStyle(borderStyleSel.value)\">\n        <option [value]=\"''\">Select Style</option>\n        <option [value]=\"borderItm.value\" *ngFor=\"let borderItm of borderStyleList\">{{borderItm.text}}</option>\n      </select>\n    </span>\n  </div>\n  <div class=\"border-lower-div\">\n    <theme-slider\n      [progressBarInp]=\"{'config': borderWidthConfig, 'value': borderInp.props.borderWidth, 'postSymbol': 'px'}\"\n      (emitProgessValue)=\"setBorderWidth($event)\">\n    </theme-slider>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/border-setting/border-setting.component.scss":
/***/ (function(module, exports) {

module.exports = ".border-lower-div {\n  margin-top: 4px; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/border-setting/border-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BorderSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BorderSettingComponent = (function () {
    function BorderSettingComponent(lpService) {
        this.lpService = lpService;
        this.onChangeBorderDetails = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.borderWidthConfig = {
            connect: [true, false],
            step: 1,
            range: {
                min: 0,
                max: 20
            }
        };
    }
    BorderSettingComponent.prototype.ngOnInit = function () {
        this.borderStyleList = this.lpService.borderStyleList;
        !this.borderInp.props.borderWidth && (this.borderInp.props['borderWidth'] = '0px');
        !this.borderInp.props.borderStyle && (this.borderInp.props['borderStyle'] = '');
        !this.borderInp.props.borderColor && (this.borderInp.props['borderColor'] = 'rgba(0,0,0,1)');
    };
    BorderSettingComponent.prototype.setColor = function (e) {
        this.onChangeBorderDetails.emit({
            'field': this.borderInp.field,
            'subField': this.borderInp.subField,
            'cssProp': 'borderColor',
            'value': e
        });
    };
    BorderSettingComponent.prototype.setBorderStyle = function (val) {
        this.onChangeBorderDetails.emit({
            'field': this.borderInp.field,
            'subField': this.borderInp.subField,
            'cssProp': 'borderStyle',
            'value': val
        });
    };
    BorderSettingComponent.prototype.setBorderWidth = function (val) {
        this.onChangeBorderDetails.emit({
            'field': this.borderInp.field,
            'subField': this.borderInp.subField,
            'cssProp': 'borderWidth',
            'value': val + 'px'
        });
    };
    return BorderSettingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], BorderSettingComponent.prototype, "borderInp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], BorderSettingComponent.prototype, "onChangeBorderDetails", void 0);
BorderSettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-border-setting',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/border-setting/border-setting.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/border-setting/border-setting.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */]) === "function" && _b || Object])
], BorderSettingComponent);

var _a, _b;
//# sourceMappingURL=border-setting.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/font-setting/font-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <span class=\"cp-border\">\n    <app-color-picker [colorInp]=\"{value: fontInpData.props.color}\" (emitColor)=\"setColor($event)\"></app-color-picker>\n  </span>\n  <span>\n    <select class=\"theme-sel-inp ellipsis\" #fontFamSel [(ngModel)]=\"fontInpData.props.fontFamily\" (change)=\"setFontFam(fontFamSel.value)\">\n      <option [value]=\"''\">Select Font</option>\n      <option [value]=\"fontItm.value\" *ngFor=\"let fontItm of fontFamList\">{{fontItm.text}}</option>\n    </select>\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/font-setting/font-setting.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/font-setting/font-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FontSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FontSettingComponent = (function () {
    function FontSettingComponent(lpService) {
        this.lpService = lpService;
        this.onChangeFontDetails = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fontFamList = [];
    }
    FontSettingComponent.prototype.ngOnInit = function () {
        this.fontFamList = this.lpService.fontFamList;
        !this.fontInpData.props.fontFamily && (this.fontInpData.props.fontFamily = '');
    };
    FontSettingComponent.prototype.setColor = function (e) {
        this.onChangeFontDetails.emit({
            'field': this.fontInpData.field,
            'subField': this.fontInpData.subField,
            'cssProp': 'color',
            'value': e
        });
    };
    FontSettingComponent.prototype.setFontFam = function (val) {
        this.onChangeFontDetails.emit({
            'field': this.fontInpData.field,
            'subField': this.fontInpData.subField,
            'cssProp': 'fontFamily',
            'value': val
        });
    };
    return FontSettingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FontSettingComponent.prototype, "fontInpData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], FontSettingComponent.prototype, "onChangeFontDetails", void 0);
FontSettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-font-setting',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/font-setting/font-setting.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/font-setting/font-setting.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */]) === "function" && _b || Object])
], FontSettingComponent);

var _a, _b;
//# sourceMappingURL=font-setting.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/progress-bar/progress-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row theme-row\">\n  <div class=\"col-md-5 col-sm-5 col-xs-5\">\n    <span class=\"theme-label\">Progress Bar</span>\n  </div>\n  <div class=\"col-md-7 col-sm-7 col-xs-7\">\n    <div class=\"prog-bar-color\">\n      <span class=\"cp-border\">\n        <app-color-picker [colorInp]=\"{value: progressBarData.props.color}\" (emitColor)=\"setColor($event)\"></app-color-picker>\n      </span>\n    </div>\n    <div>\n      <theme-slider\n        [progressBarInp]=\"{'config': progBarConfig, 'value': progBarValue, 'postSymbol': '%'}\"\n        (emitProgessValue)=\"getProgressValue($event)\">\n      </theme-slider>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/progress-bar/progress-bar.component.scss":
/***/ (function(module, exports) {

module.exports = ".prog-bar-color {\n  margin-bottom: 6px; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/progress-bar/progress-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressBarComponent = (function () {
    function ProgressBarComponent() {
        this.onChangeProgBar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.progBarConfig = {
            connect: [true, false],
            step: 1,
            range: {
                min: 1,
                max: 100
            }
        };
    }
    ProgressBarComponent.prototype.ngOnInit = function () {
        this.progBarValue = this.progressBarData.props.width;
    };
    ProgressBarComponent.prototype.setColor = function (e) {
        this.onChangeProgBar.emit({
            'field': this.progressBarData.field,
            'subField': this.progressBarData.subField,
            'cssProp': 'color',
            'value': e
        });
    };
    ProgressBarComponent.prototype.getProgressValue = function (e) {
        this.progBarValue = e;
        this.onChangeProgBar.emit({
            'field': this.progressBarData.field,
            'subField': this.progressBarData.subField,
            'cssProp': 'width',
            'value': e + '%'
        });
    };
    return ProgressBarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ProgressBarComponent.prototype, "progressBarData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ProgressBarComponent.prototype, "onChangeProgBar", void 0);
ProgressBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-progress-bar',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/progress-bar/progress-bar.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/progress-bar/progress-bar.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProgressBarComponent);

var _a;
//# sourceMappingURL=progress-bar.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/slider/slider.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"custom-theme-slider\">\n  <span class=\"slider-upper-span\">\n    <nouislider [config]=\"progressBarInp.config\" [(ngModel)]=\"value\" (slide)=\"onChangeProgress()\"></nouislider>\n  </span>\n  <span class=\"slider-lower-span\">\n    {{value}}{{progressBarInp?.postSymbol}}\n  </span>\n</span>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/slider/slider.component.scss":
/***/ (function(module, exports) {

module.exports = "::ng-deep .custom-theme-slider {\n  padding: 2px 10px;\n  display: inline-block;\n  width: 100%;\n  border: 1px solid #D8D8D8; }\n  ::ng-deep .custom-theme-slider .slider-upper-span {\n    width: calc(100% - 45px);\n    display: inline-block; }\n  ::ng-deep .custom-theme-slider .slider-lower-span {\n    vertical-align: top;\n    display: inline-block;\n    margin-top: 3px;\n    width: 41px;\n    text-align: right; }\n  ::ng-deep .custom-theme-slider .noUi-horizontal {\n    height: 6px;\n    border-radius: 0; }\n  ::ng-deep .custom-theme-slider .noUi-horizontal .noUi-handle {\n      width: 16px;\n      border-radius: 50%;\n      height: 16px;\n      left: -9px;\n      top: -6px;\n      cursor: pointer; }\n  ::ng-deep .custom-theme-slider .noUi-horizontal .noUi-handle:after, ::ng-deep .custom-theme-slider .noUi-horizontal .noUi-handle:before {\n        content: none; }\n  ::ng-deep .custom-theme-slider .noUi-connect {\n    border-radius: 0;\n    background-color: #1B97E0; }\n  ::ng-deep .custom-theme-slider .noUi-handle.noUi-handle-lower:focus {\n    outline: none; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/slider/slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = (function () {
    function SliderComponent() {
        this.emitProgessValue = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SliderComponent.prototype.ngOnInit = function () {
        this.value = parseInt(this.progressBarInp.value);
    };
    SliderComponent.prototype.onChangeProgress = function () {
        this.emitProgessValue.emit(this.value);
    };
    return SliderComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SliderComponent.prototype, "progressBarInp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], SliderComponent.prototype, "emitProgessValue", void 0);
SliderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-slider',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/slider/slider.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/slider/slider.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);

var _a;
//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/text-align/text-align.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-custom-rd-cb-grp\">\n  <label class=\"theme-custom-rd-cb-lbl\" [ngClass]=\"{'active': textAlignInp.textAlign=='left'}\">\n    <input type=\"checkbox\" name=\"textAlign\" value=\"left\" [checked]=\"textAlignInp.textAlign == 'left'\" (change)=\"onChangeAlignment('left', $event)\">\n    <span class=\"font-align-icon\" [ngClass]=\"(textAlignInp.textAlign=='left' ? 'left-active' : 'left')\"></span>\n  </label>\n  <label class=\"theme-custom-rd-cb-lbl\" [ngClass]=\"{'active': textAlignInp.textAlign=='center'}\">\n    <input type=\"checkbox\" name=\"textAlign\" value=\"center\" [checked]=\"textAlignInp.textAlign == 'center'\" (change)=\"onChangeAlignment('center', $event)\">\n    <span class=\"font-align-icon\" [ngClass]=\"(textAlignInp.textAlign=='center' ? 'center-active' : 'center')\"></span>\n  </label>\n  <label class=\"theme-custom-rd-cb-lbl\" [ngClass]=\"{'active': textAlignInp.textAlign=='right'}\">\n    <input type=\"checkbox\" name=\"textAlign\" value=\"right\" [checked]=\"textAlignInp.textAlign == 'right'\" (change)=\"onChangeAlignment('right', $event)\">\n    <span class=\"font-align-icon\" [ngClass]=\"(textAlignInp.textAlign=='right' ? 'right-active' : 'right')\"></span>\n  </label>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/text-align/text-align.component.scss":
/***/ (function(module, exports) {

module.exports = ".font-align-icon {\n  height: 12px;\n  width: 15px;\n  display: inline-block;\n  margin-top: 2px; }\n  .font-align-icon.left {\n    background: url(\"/assets/images/editSurvey/themes/left-align.svg\");\n    background-repeat: no-repeat; }\n  .font-align-icon.left-active {\n    background: url(\"/assets/images/editSurvey/themes/left-align-active.svg\");\n    background-repeat: no-repeat; }\n  .font-align-icon.center {\n    background: url(\"/assets/images/editSurvey/themes/center-align.svg\");\n    background-repeat: no-repeat; }\n  .font-align-icon.center-active {\n    background: url(\"/assets/images/editSurvey/themes/center-align-active.svg\");\n    background-repeat: no-repeat; }\n  .font-align-icon.right {\n    background: url(\"/assets/images/editSurvey/themes/right-align.svg\");\n    background-repeat: no-repeat; }\n  .font-align-icon.right-active {\n    background: url(\"/assets/images/editSurvey/themes/right-align-active.svg\");\n    background-repeat: no-repeat; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/text-align/text-align.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextAlignComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextAlignComponent = (function () {
    function TextAlignComponent() {
        this.emitTextAlign = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TextAlignComponent.prototype.ngOnInit = function () {
    };
    TextAlignComponent.prototype.onChangeAlignment = function (align, e) {
        this.textAlignInp.textAlign = (e.target.checked) ? align : '';
        this.emitTextAlign.emit(this.textAlignInp.textAlign);
    };
    return TextAlignComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TextAlignComponent.prototype, "textAlignInp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TextAlignComponent.prototype, "emitTextAlign", void 0);
TextAlignComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-text-align',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/text-align/text-align.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/text-align/text-align.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TextAlignComponent);

var _a;
//# sourceMappingURL=text-align.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/text-setting/text-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row theme-row\">\n  <div class=\"col-md-5 col-sm-5 col-xs-5\">\n    <span class=\"theme-label\">Title</span>\n  </div>\n  <div class=\"col-md-7 col-sm-7 col-xs-7\">\n    <theme-font-setting [fontInpData]=\"{\n      'field': textInpData.field,\n      'subField': textInpData.subField,\n      'props': textInpData.props\n    }\" (onChangeFontDetails)=\"getFontDetails($event)\">\n    </theme-font-setting>\n  </div>\n</div>\n<div class=\"row theme-row\">\n  <div class=\"col-md-5 col-sm-5 col-xs-5\">\n    <span class=\"theme-label\">Font Size</span>\n  </div>\n  <div class=\"col-md-7 col-sm-7 col-xs-7\">\n    <theme-slider\n      [progressBarInp]=\"{'config': fontSizeConfig, 'value': textInpData.props.fontSize, 'postSymbol': 'px'}\"\n      (emitProgessValue)=\"getProgressValue($event)\">\n    </theme-slider>\n  </div>\n</div>\n<div class=\"row theme-row\">\n  <div class=\"col-md-5 col-sm-5 col-xs-5\">\n    <span class=\"theme-label\">Font Weight</span>\n  </div>\n  <div class=\"col-md-7 col-sm-7 col-xs-7\">\n    <div class=\"theme-custom-rd-cb-grp\">\n      <label class=\"theme-custom-rd-cb-lbl\" [ngClass]=\"{'active': textInpData.props.fontWeight=='bold'}\">\n        <input type=\"checkbox\" value=\"bold\" [checked]=\"textInpData.props.fontWeight=='bold'\" (change)=\"setStyle($event, 'fontWeight')\">\n        <span class=\"font-weight-icon\" [ngClass]=\"(textInpData.props.fontWeight=='bold' ? 'bold-active' : 'bold')\"></span>\n      </label>\n      <label class=\"theme-custom-rd-cb-lbl\" [ngClass]=\"{'active': textInpData.props.fontStyle=='italic'}\">\n        <input type=\"checkbox\" value=\"italics\" [checked]=\"textInpData.props.fontStyle=='italics'\" (change)=\"setStyle($event, 'fontStyle')\">\n        <span class=\"font-weight-icon\" [ngClass]=\"(textInpData.props.fontStyle=='italic' ? 'italics-active' : 'italics')\"></span>\n      </label>\n      <label class=\"theme-custom-rd-cb-lbl\" [ngClass]=\"{'active': textInpData.props.textDecoration=='underline'}\">\n        <input type=\"checkbox\" value=\"underline\" [checked]=\"textInpData.props.textDecoration=='underline'\" (change)=\"setStyle($event, 'textDecoration')\">\n        <span class=\"font-weight-icon\" [ngClass]=\"(textInpData.props.textDecoration=='underline' ? 'underline-active' : 'underline')\"></span>\n      </label>\n    </div>\n  </div>\n</div>\n<div class=\"row theme-row\">\n  <div class=\"col-md-5 col-sm-5 col-xs-5\">\n    <span class=\"theme-label\">Alignment</span>\n  </div>\n  <div class=\"col-md-7 col-sm-7 col-xs-7\">\n    <theme-text-align\n      [textAlignInp]=\"{'textAlign': textInpData?.props?.textAlign}\"\n      (emitTextAlign)=\"getProgressAlign($event)\">\n    </theme-text-align>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/text-setting/text-setting.component.scss":
/***/ (function(module, exports) {

module.exports = ".font-weight-icon {\n  height: 15px;\n  width: 15px;\n  display: inline-block; }\n  .font-weight-icon.bold {\n    background: url(\"/assets/images/editSurvey/themes/bold.svg\");\n    background-repeat: no-repeat; }\n  .font-weight-icon.bold-active {\n    background: url(\"/assets/images/editSurvey/themes/bold-active.svg\");\n    background-repeat: no-repeat; }\n  .font-weight-icon.italics {\n    background: url(\"/assets/images/editSurvey/themes/italic.svg\");\n    background-repeat: no-repeat; }\n  .font-weight-icon.italics-active {\n    background: url(\"/assets/images/editSurvey/themes/italic-active.svg\");\n    background-repeat: no-repeat; }\n  .font-weight-icon.underline {\n    background: url(\"/assets/images/editSurvey/themes/underline.svg\");\n    background-repeat: no-repeat; }\n  .font-weight-icon.underline-active {\n    background: url(\"/assets/images/editSurvey/themes/underlined-active.svg\");\n    background-repeat: no-repeat; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/shared/text-setting/text-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextSettingComponent = (function () {
    function TextSettingComponent(leftPanelService) {
        this.leftPanelService = leftPanelService;
        this.onChangeTextDetails = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fontSizeConfig = {
            connect: [true, false],
            step: 2,
            range: {
                min: 8,
                max: 48
            }
        };
    }
    TextSettingComponent.prototype.ngOnInit = function () {
    };
    TextSettingComponent.prototype.getFontDetails = function (e) {
        this.onChangeTextDetails.emit({
            'field': this.textInpData.field,
            'subField': this.textInpData.subField,
            'cssProp': e.cssProp,
            'value': e.value
        });
    };
    TextSettingComponent.prototype.getProgressValue = function (e) {
        this.onChangeTextDetails.emit({
            'field': this.textInpData.field,
            'subField': this.textInpData.subField,
            'cssProp': 'fontSize',
            'value': e + 'px'
        });
    };
    TextSettingComponent.prototype.setStyle = function (e, type) {
        var styleVal;
        if (type == 'fontWeight') {
            styleVal = e.target.checked ? 'bold' : 'unset';
        }
        else if (type == 'fontStyle') {
            styleVal = e.target.checked ? 'italic' : 'unset';
        }
        else if (type == 'textDecoration') {
            styleVal = e.target.checked ? 'underline' : 'unset';
        }
        this.onChangeTextDetails.emit({
            'field': this.textInpData.field,
            'subField': this.textInpData.subField,
            'cssProp': type,
            'value': styleVal
        });
    };
    TextSettingComponent.prototype.getProgressAlign = function (e) {
        this.onChangeTextDetails.emit({
            'field': this.textInpData.field,
            'subField': this.textInpData.subField,
            'cssProp': 'textAlign',
            'value': e
        });
    };
    return TextSettingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TextSettingComponent.prototype, "textInpData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], TextSettingComponent.prototype, "onChangeTextDetails", void 0);
TextSettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-text-setting',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/text-setting/text-setting.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/text-setting/text-setting.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */]) === "function" && _b || Object])
], TextSettingComponent);

var _a, _b;
//# sourceMappingURL=text-setting.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/survey-setting/survey-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-left-side\">\n  <div class=\"theme-setting-div\">\n    <div>\n      <span class=\"customise-icon\"></span>\n      <span>Customise - </span>\n      <span>Survey Body</span>\n    </div>\n    <div class=\"theme-name-container\">\n      {{themeName}}\n    </div>\n    <div class=\"theme-setting-inner-div\">\n      <div class=\"theme-contanier\">\n        <div class=\"theme-heading\">\n          <span><img src=\"assets/images/editSurvey/themes/background.svg\" height=\"20\"></span>\n          <span class=\"theme-heading-text\">\n            Background\n          </span>\n        </div>\n        <div>\n          <div class=\"row theme-row\">\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <span class=\"theme-label\">Survey</span>\n            </div>\n            <div class=\"col-md-7 col-sm-7 col-xs-7\">\n              <theme-background-setting [bgInpData]=\"{\n                'field': 'survey',\n                'subField': 'body',\n                'props': themeJSON.survey.body\n              }\" (onChangeBgDetails)=\"onChange($event)\">\n              </theme-background-setting>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"theme-contanier\">\n        <div class=\"theme-heading\">\n          <span><img src=\"assets/images/editSurvey/themes/text.svg\" height=\"20\"></span>\n          <span class=\"theme-heading-text\">\n            Fonts\n          </span>\n        </div>\n        <div>\n          <theme-text-setting [textInpData]=\"{\n            'field': 'survey',\n            'subField': 'body',\n            'props': themeJSON.survey.body\n          }\" (onChangeTextDetails)=\"onChange($event)\">\n          </theme-text-setting>\n        </div>\n      </div>\n      <div class=\"theme-contanier\">\n        <div class=\"theme-heading\">\n          <span><img src=\"assets/images/editSurvey/themes/general.svg\" height=\"20\"></span>\n          <span class=\"theme-heading-text\">\n            Survey Settings\n          </span>\n        </div>\n        <div>\n          <theme-progress-bar [progressBarData]=\"{\n            'field': 'survey',\n            'subField': 'progressBar',\n            'props': themeJSON.survey.progressBar\n          }\" (onChangeProgBar)=\"onChange($event)\">\n          </theme-progress-bar>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row theme-footer\">\n    <div class=\"col-md-6 col-sm-6 col-xs-6\">\n      <button type=\"button\" class=\"btn theme-save-btn\" (click)=\"updateTheme()\">\n        Update\n      </button>\n    </div>\n    <div class=\"col-md-6 col-sm-6 col-xs-6\">\n      <button type=\"button\" class=\"btn theme-cancel-btn\" (click)=\"cancelCustomisation()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/survey-setting/survey-setting.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/survey-setting/survey-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveySettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
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



var SurveySettingComponent = (function () {
    function SurveySettingComponent(leftPanelService, services) {
        this.leftPanelService = leftPanelService;
        this.services = services;
    }
    SurveySettingComponent.prototype.ngOnInit = function () {
        this.themeJSON = this.leftPanelService.themeJSON;
        this.themeName = this.themeJSON.name;
        !this.themeJSON.survey.body.fontSize && (this.themeJSON.survey.body.setFontSize("16px"));
    };
    SurveySettingComponent.prototype.onChange = function (event) {
        this.leftPanelService.callNextOnThemeCompState(event);
    };
    SurveySettingComponent.prototype.updateTheme = function () {
        var _this = this;
        var forAll = true;
        this.leftPanelService.updateTheme(forAll).subscribe(function (data) {
            _this.cancelCustomisation();
        });
    };
    SurveySettingComponent.prototype.cancelCustomisation = function () {
        this.leftPanelService.onCancelCustomise();
        this.leftPanelService.switchToThemeCust();
    };
    return SurveySettingComponent;
}());
SurveySettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-survey-setting',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/survey-setting/survey-setting.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/survey-setting/survey-setting.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__left_panel_left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__left_panel_left_panel_service__["a" /* LeftPanelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */]) === "function" && _b || Object])
], SurveySettingComponent);

var _a, _b;
//# sourceMappingURL=survey-setting.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/theme-customisation/option-settings/option-settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"options-div\">\n  <div class=\"row theme-row\">\n    <div class=\"col-md-5 col-sm-5 col-xs-5\">\n      <span class=\"theme-label\">NPS Color</span>\n    </div>\n    <div class=\"col-md-7 col-sm-7 col-xs-7\">\n      <span class=\"cp-border\">\n        <app-color-picker [colorInp]=\"{value: optionsJSON.nps.detractor.color}\" (emitColor)=\"setNpsColor($event, 'detractor', 'color')\"></app-color-picker>\n      </span>\n      <span class=\"cp-border\">\n        <app-color-picker [colorInp]=\"{value: optionsJSON.nps.passive.color}\" (emitColor)=\"setNpsColor($event, 'passive', 'color')\"></app-color-picker>\n      </span>\n      <span class=\"cp-border\">\n        <app-color-picker [colorInp]=\"{value: optionsJSON.nps.promoter.color}\" (emitColor)=\"setNpsColor($event, 'promoter', 'color')\"></app-color-picker>\n      </span>\n    </div>\n  </div>\n  <div class=\"row theme-row\">\n    <div class=\"col-md-5 col-sm-5 col-xs-5\">\n      <span class=\"theme-label\">NPS Color Font</span>\n    </div>\n    <div class=\"col-md-7 col-sm-7 col-xs-7\">\n      <span class=\"cp-border\">\n        <app-color-picker [colorInp]=\"{value: optionsJSON.nps.detractor.fontColor}\" (emitColor)=\"setNpsColor($event, 'detractor', 'fontColor')\"></app-color-picker>\n      </span>\n      <span class=\"cp-border\">\n        <app-color-picker [colorInp]=\"{value: optionsJSON.nps.passive.fontColor}\" (emitColor)=\"setNpsColor($event, 'passive', 'fontColor')\"></app-color-picker>\n      </span>\n      <span class=\"cp-border\">\n        <app-color-picker [colorInp]=\"{value: optionsJSON.nps.promoter.fontColor}\" (emitColor)=\"setNpsColor($event, 'promoter', 'fontColor')\"></app-color-picker>\n      </span>\n    </div>\n  </div>\n  <div class=\"row theme-row\">\n    <div class=\"col-md-5 col-sm-5 col-xs-5\">\n      <span class=\"theme-label\">NPS No Color</span>\n    </div>\n    <div class=\"col-md-7 col-sm-7 col-xs-7\">\n      <span class=\"cp-border\">\n        <app-color-picker [colorInp]=\"{value: optionsJSON.nps.noColor['0'].color}\" (emitColor)=\"setNpsNoColor($event, 'color')\"></app-color-picker>\n      </span>\n    </div>\n  </div>\n  <div class=\"row theme-row\">\n    <div class=\"col-md-5 col-sm-5 col-xs-5\">\n      <span class=\"theme-label\">NPS No Color Font</span>\n    </div>\n    <div class=\"col-md-7 col-sm-7 col-xs-7\">\n      <span class=\"cp-border\">\n        <app-color-picker [colorInp]=\"{value: optionsJSON.nps.noColor['0'].fontColor}\" (emitColor)=\"setNpsNoColor($event, 'fontColor')\"></app-color-picker>\n      </span>\n    </div>\n  </div>\n  <div class=\"row theme-row\">\n    <div class=\"col-md-5 col-sm-5 col-xs-5\">\n      <span class=\"theme-label\">Input Type</span>\n    </div>\n    <div class=\"col-md-7 col-sm-7 col-xs-7 optRadioBtns\">\n      <input type=\"radio\" name=\"inputType\" [value]=\"'line'\" [(ngModel)]=\"optionsJSON.inputType\" id=\"inpLine\" (change)=\"onChange()\">\n      <label for=\"inpLine\">Line</label>\n      <input type=\"radio\" name=\"inputType\" [value]=\"'box'\" [(ngModel)]=\"optionsJSON.inputType\" id=\"inpBox\" (change)=\"onChange()\">\n      <label for=\"inpBox\">Box</label>\n    </div>\n  </div>\n  <div class=\"row theme-row\">\n    <div class=\"col-md-5 col-sm-5 col-xs-5\">\n      <span class=\"theme-label\">Choice Icons</span>\n    </div>\n    <div class=\"col-md-7 col-sm-7 col-xs-7 optRadioBtns\">\n      <input type=\"radio\" name=\"displayIcons\" [value]=\"true\" [(ngModel)]=\"optionsJSON.displayIcons\" id=\"iconsShow\" (change)=\"onChange()\">\n      <label for=\"iconsShow\">Show</label>\n      <input type=\"radio\" name=\"displayIcons\" [value]=\"false\" [(ngModel)]=\"optionsJSON.displayIcons\" id=\"iconsHide\" (change)=\"onChange()\">\n      <label for=\"iconsHide\">Hide</label>\n    </div>\n  </div>\n  <div class=\"row theme-row\">\n    <div class=\"col-md-5 col-sm-5 col-xs-5\">\n      <span class=\"theme-label\">Graphical Rating Color</span>\n    </div>\n    <div class=\"col-md-7 col-sm-7 col-xs-7\">\n      <span class=\"cp-border\">\n        <app-color-picker [colorInp]=\"{value: optionsJSON.graphRating.color}\" (emitColor)=\"setGraphRatingColor($event)\"></app-color-picker>\n      </span>\n    </div>\n  </div>\n  <div class=\"row theme-row\">\n    <div class=\"col-md-5 col-sm-5 col-xs-5\">\n      <span class=\"theme-label\">Selected Option BackgroundColor</span>\n    </div>\n    <div class=\"col-md-7 col-sm-7 col-xs-7\">\n      <span class=\"cp-border\">\n        <app-color-picker [colorInp]=\"{value: optionsJSON.selectedOpt.backgroundColor}\" (emitColor)=\"setSelectedOpt($event, 'backgroundColor')\"></app-color-picker>\n      </span>\n    </div>\n  </div>\n  <div class=\"row theme-row\">\n    <div class=\"col-md-5 col-sm-5 col-xs-5\">\n      <span class=\"theme-label\">Selected Option Color</span>\n    </div>\n    <div class=\"col-md-7 col-sm-7 col-xs-7\">\n      <span class=\"cp-border\">\n        <app-color-picker [colorInp]=\"{value: optionsJSON.selectedOpt.color}\" (emitColor)=\"setSelectedOpt($event, 'color')\"></app-color-picker>\n      </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/theme-customisation/option-settings/option-settings.component.scss":
/***/ (function(module, exports) {

module.exports = ".options-div {\n  margin-bottom: 150px; }\n\n.optRadioBtns input[type=radio] {\n  display: none; }\n\n.optRadioBtns label {\n  border-radius: 2px;\n  width: 75px;\n  font-weight: 500;\n  font-size: 12px;\n  font-family: 'Helvetica Neue Medium';\n  cursor: pointer;\n  text-align: center;\n  padding: 5px;\n  border: 1px solid #D8D8D8;\n  color: #5f5f5f; }\n\n.optRadioBtns input[type=radio]:checked + label {\n  color: white;\n  background-color: #5f5f5f;\n  border: 1px solid transparent; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/theme-customisation/option-settings/option-settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OptionSettingsComponent = (function () {
    function OptionSettingsComponent(leftPanelService) {
        this.leftPanelService = leftPanelService;
    }
    OptionSettingsComponent.prototype.ngOnInit = function () {
        this.optionsJSON = this.leftPanelService.themeJSON.options;
    };
    OptionSettingsComponent.prototype.setNpsColor = function (e, field, type) {
        this.optionsJSON.nps[field][type] = e;
        this.onChange();
    };
    OptionSettingsComponent.prototype.setNpsNoColor = function (e, type) {
        for (var noColIdx = 0; noColIdx < 11; noColIdx++) {
            this.optionsJSON.nps.noColor[noColIdx][type] = e;
        }
        this.onChange();
    };
    OptionSettingsComponent.prototype.setGraphRatingColor = function (e) {
        this.optionsJSON.graphRating.color = e;
        this.onChange();
    };
    OptionSettingsComponent.prototype.setSelectedOpt = function (e, type) {
        this.optionsJSON.selectedOpt[type] = e;
        this.onChange();
    };
    OptionSettingsComponent.prototype.onChange = function () {
        this.leftPanelService.reflectOptionSettings();
    };
    return OptionSettingsComponent;
}());
OptionSettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-option-settings',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/theme-customisation/option-settings/option-settings.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/theme-customisation/option-settings/option-settings.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */]) === "function" && _a || Object])
], OptionSettingsComponent);

var _a;
//# sourceMappingURL=option-settings.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/theme-customisation/theme-customisation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-left-side\">\n  <div class=\"theme-setting-div\">\n    <div class=\"tc-upper-row\">\n      <span class=\"customise-icon\"></span>\n      <span class=\"cust-test\">Customise - </span>\n      <span>Theme</span>\n    </div>\n    <div class=\"tc-lower-row\">\n      <span class=\"theme-name-inp\">\n        <input class=\"theme-input-text\" type=\"text\" [(ngModel)]=\"themeJSON.name\">\n      </span>\n      <!-- <button class=\"btn del-btn\" type=\"button\"><span class=\"del-img\"></span></button> -->\n    </div>\n    <div class=\"theme-setting-inner-div\">\n      <div class=\"theme-contanier\">\n        <div class=\"theme-heading\">\n          <span><img src=\"assets/images/editSurvey/themes/background.svg\" height=\"20\"></span>\n          <span class=\"theme-heading-text\">\n            Background\n          </span>\n        </div>\n        <div>\n          <div class=\"row theme-row\">\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <span class=\"theme-label\">Survey</span>\n            </div>\n            <div class=\"col-md-7 col-sm-7 col-xs-7\">\n              <theme-background-setting [bgInpData]=\"{\n                'field': 'survey',\n                'subField': 'body',\n                'props': themeJSON.survey.body\n              }\" (onChangeBgDetails)=\"onChange($event)\">\n              </theme-background-setting>\n            </div>\n          </div>\n          <div class=\"row theme-row\">\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <span class=\"theme-label\">Survey Header</span>\n            </div>\n            <div class=\"col-md-7 col-sm-7 col-xs-7\">\n              <theme-background-setting [bgInpData]=\"{\n                'field': 'survey',\n                'subField': 'header',\n                'props': themeJSON.survey.header\n              }\" (onChangeBgDetails)=\"onChange($event)\">\n            </theme-background-setting>\n          </div>\n        </div>\n          <div class=\"row theme-row\">\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <span class=\"theme-label\">Pages</span>\n            </div>\n            <div class=\"col-md-7 col-sm-7 col-xs-7\">\n              <theme-background-setting [bgInpData]=\"{\n                'field': 'page',\n                'subField': 'body',\n                'props': themeJSON.page.body\n              }\" (onChangeBgDetails)=\"onChange($event)\">\n            </theme-background-setting>\n            </div>\n          </div>\n          <div class=\"row theme-row\">\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <span class=\"theme-label\">Questions</span>\n            </div>\n            <div class=\"col-md-7 col-sm-7 col-xs-7\">\n              <theme-background-setting [bgInpData]=\"{\n                'field': 'question',\n                'subField': 'body',\n                'props': themeJSON.question.body\n              }\" (onChangeBgDetails)=\"onChange($event)\">\n            </theme-background-setting>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"theme-contanier\">\n        <div class=\"theme-heading\">\n          <span><img src=\"assets/images/editSurvey/themes/text.svg\" height=\"20\"></span>\n          <span class=\"theme-heading-text\">\n            Fonts\n          </span>\n        </div>\n        <div>\n          <div class=\"row theme-row\">\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <span class=\"theme-label\">Survey</span>\n            </div>\n            <div class=\"col-md-7 col-sm-7 col-xs-7\">\n              <theme-font-setting [fontInpData]=\"{\n                'field': 'survey',\n                'subField': 'body',\n                'props': themeJSON.survey.body\n              }\" (onChangeFontDetails)=\"onChange($event)\">\n            </theme-font-setting>\n            </div>\n          </div>\n          <div class=\"row theme-row\">\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <span class=\"theme-label\">Survey Header</span>\n            </div>\n            <div class=\"col-md-7 col-sm-7 col-xs-7\">\n              <theme-font-setting [fontInpData]=\"{\n                'field': 'survey',\n                'subField': 'header',\n                'props': themeJSON.survey.header\n              }\" (onChangeFontDetails)=\"onChange($event)\">\n            </theme-font-setting>\n            </div>\n          </div>\n          <div class=\"row theme-row\">\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <span class=\"theme-label\">Pages</span>\n            </div>\n            <div class=\"col-md-7 col-sm-7 col-xs-7\">\n              <theme-font-setting [fontInpData]=\"{\n                'field': 'page',\n                'subField': 'body',\n                'props': themeJSON.page.body\n              }\" (onChangeFontDetails)=\"onChange($event)\">\n            </theme-font-setting>\n            </div>\n          </div>\n          <div class=\"row theme-row\">\n            <div class=\"col-md-5 col-sm-5 col-xs-5\">\n              <span class=\"theme-label\">Questions</span>\n            </div>\n            <div class=\"col-md-7 col-sm-7 col-xs-7\">\n              <theme-font-setting [fontInpData]=\"{\n                'field': 'question',\n                'subField': 'body',\n                'props': themeJSON.question.body\n              }\" (onChangeFontDetails)=\"onChange($event)\">\n            </theme-font-setting>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"theme-contanier\">\n        <div class=\"theme-heading\">\n          <span><img src=\"assets/images/editSurvey/themes/general.svg\" height=\"20\"></span>\n          <span class=\"theme-heading-text\">\n            General\n          </span>\n        </div>\n        <!-- <div class=\"row theme-row\">\n          <div class=\"col-md-5 col-sm-5 col-xs-5\">\n            <span class=\"theme-label\">Logo</span>\n          </div>\n          <div class=\"col-md-7 col-sm-7 col-xs-7\">\n            <theme-text-align\n              [textAlignInp]=\"{'textAlign': themeJSON.survey.logo.textAlign}\"\n              (emitTextAlign)=\"setPropertyValue('survey', 'logo', 'textAlign', $event)\">\n            </theme-text-align>\n          </div>\n        </div> -->\n        <theme-progress-bar [progressBarData]=\"{\n          'field': 'survey',\n          'subField': 'progressBar',\n          'props': themeJSON.survey.progressBar\n        }\" (onChangeProgBar)=\"onChange($event)\">\n        </theme-progress-bar>\n        <div class=\"row theme-row\">\n          <div class=\"col-md-5 col-sm-5 col-xs-5\">\n            <span class=\"theme-label\">Required Asterisks</span>\n          </div>\n          <div class=\"col-md-7 col-sm-7 col-xs-7\">\n            <div class=\"row req-ask-row\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                <theme-font-setting [fontInpData]=\"{\n                  'field': 'survey',\n                  'subField': 'requiredAsk',\n                  'props': themeJSON.survey.requiredAsk\n                }\" (onChangeFontDetails)=\"onChange($event)\">\n                </theme-font-setting>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 col-sm-12 col-xs-12\">\n                <theme-slider\n                  [progressBarInp]=\"{'config': fontSizeConfig, 'value': themeJSON.survey.requiredAsk.fontSize, 'postSymbol': 'px'}\"\n                  (emitProgessValue)=\"setPropertyValue('survey', 'requiredAsk', 'fontSize', $event + 'px')\">\n                </theme-slider>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row theme-row\">\n          <div class=\"col-md-5 col-sm-5 col-xs-5\">\n            <span class=\"theme-label\">Button</span>\n          </div>\n          <div class=\"col-md-7 col-sm-7 col-xs-7\">\n            <div class=\"survey-btns-layout-div\">\n              <div class=\"survey-btns-layout\">PREV</div>\n              <div>\n                <theme-font-setting [fontInpData]=\"{\n                  'field': 'page',\n                  'subField': 'prevBtn',\n                  'props': themeJSON.page.prevBtn\n                }\" (onChangeFontDetails)=\"onChange($event)\">\n                </theme-font-setting>\n              </div>\n            </div>\n            <div class=\"survey-btns-layout-div\">\n              <div class=\"survey-btns-layout\">NEXT</div>\n              <div>\n                <theme-font-setting [fontInpData]=\"{\n                  'field': 'page',\n                  'subField': 'nextBtn',\n                  'props': themeJSON.page.nextBtn\n                }\" (onChangeFontDetails)=\"onChange($event)\">\n                </theme-font-setting>\n              </div>\n            </div>\n            <div class=\"survey-btns-layout-div\">\n              <div class=\"survey-btns-layout\">DONE</div>\n              <div>\n                <theme-font-setting [fontInpData]=\"{\n                  'field': 'page',\n                  'subField': 'doneBtn',\n                  'props': themeJSON.page.doneBtn\n                }\" (onChangeFontDetails)=\"onChange($event)\">\n                </theme-font-setting>\n              </div>\n            </div>\n            <div class=\"survey-btns-layout-div\">\n              <div class=\"survey-btns-layout\">EXIT</div>\n              <div>\n                <theme-font-setting [fontInpData]=\"{\n                  'field': 'page',\n                  'subField': 'exitBtn',\n                  'props': themeJSON.page.exitBtn\n                }\" (onChangeFontDetails)=\"onChange($event)\">\n                </theme-font-setting>\n              </div>\n            </div>\n            <div class=\"survey-btns-layout-div\">\n              <div class=\"survey-btns-layout\">OK</div>\n              <div>\n                <theme-font-setting [fontInpData]=\"{\n                  'field': 'page',\n                  'subField': 'okBtn',\n                  'props': themeJSON.page.okBtn\n                }\" (onChangeFontDetails)=\"onChange($event)\">\n                </theme-font-setting>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"theme-contanier\">\n        <div class=\"theme-heading\">\n          <span><img src=\"assets/images/editSurvey/themes/general.svg\" height=\"20\"></span>\n          <span class=\"theme-heading-text\">\n            Miscellaneous\n          </span>\n        </div>\n        <theme-option-settings></theme-option-settings>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row theme-footer\">\n    <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\n      <button type=\"button\" class=\"btn s2c_save_btn margin_right16\" (click)=\"saveOrUpdateTheme()\">\n        {{themeJSON._id ? 'Update' : 'Save'}}\n      </button>\n      <button [hidden]=\"!themeJSON._id\" type=\"button\" class=\"btn s2c_cancel_btn margin_right16\" (click)=\"saveAsTheme()\">\n        Save As\n      </button>\n      <button type=\"button\" class=\"btn\" [ngClass]=\"themeJSON._id ? 's2c_cancel_no_border_btn' : 's2c_cancel_btn'\" (click)=\"cancelCustomisation()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n</div>\n\n<ng-template #selFolderModal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title pull-left\">Select Folder</h4>\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"hideModal()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body save-theme-modal\">\n    <app-libraries [libData]=\"{'type': 'themes', selType: 'folder'}\" (onFolderSelect)=\"saveTheme($event)\"></app-libraries>\n  </div>\n</ng-template>\n\n<div class=\"tc-modal\" [hidden]=\"!saveAsThemeObj.action\">\n  <div class=\"tc-content\">\n    <div class=\"tc-head\">\n      Save Theme As\n      <span class=\"pull-right tc-close-modal\" (click)=\"cancelCopyTheme()\">x</span>\n    </div>\n    <div class=\"tc-body\">\n      <input type=\"text\" class=\"theme-input-text\" #themeCopyInp [(ngModel)]=\"saveAsThemeObj.name\" (keyup)=\"onKeyUpInSavingTheme($event)\">\n    </div>\n    <div class=\"text-right\">\n      <button class=\"btn s2c_cancel_btn\" type=\"button\" (click)=\"cancelCopyTheme()\">Cancel</button>\n      <button class=\"btn s2c_save_btn\" type=\"button\" (click)=\"saveCopyTheme()\">Save</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/theme-customisation/theme-customisation.component.scss":
/***/ (function(module, exports) {

module.exports = ".tc-upper-row .cust-test {\n  font-family: 'Helvetica Neue Medium'; }\n\n.tc-lower-row {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.tc-lower-row .del-btn {\n    height: 30px;\n    background-color: white;\n    border: 1px solid #F2F2F2;\n    float: right;\n    width: 38px; }\n\n.tc-lower-row .del-btn .del-img {\n      background: url(/assets/images/editSurvey/delete.svg);\n      background-repeat: no-repeat;\n      display: inline-block;\n      height: 20px;\n      width: 20px; }\n\n.survey-btns-layout-div {\n  margin-bottom: 15px; }\n\n.survey-btns-layout-div .survey-btns-layout {\n    height: 35px;\n    border: 1px solid #D8D8D8;\n    width: 100%;\n    text-align: center;\n    font-size: 12px;\n    padding: 8px;\n    margin-bottom: 6px; }\n\n.theme-name-inp {\n  display: inline-block;\n  width: 100%; }\n\n.margin_right16 {\n  margin-right: 16px; }\n\n.req-ask-row {\n  margin-bottom: 6px; }\n\n.tc-modal {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 1050;\n  background-color: rgba(121, 119, 120, 0.5); }\n\n.tc-modal .tc-content {\n    background-color: white;\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    padding: 30px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    min-width: 350px; }\n\n.tc-modal .tc-head {\n    font-family: 'Helvetica Neue Medium';\n    padding-bottom: 30px; }\n\n.tc-modal .tc-body {\n    padding-bottom: 50px; }\n\n.tc-modal .theme-input-text {\n    border: 1px solid #b5b5b5; }\n\n.tc-modal .tc-close-modal {\n    cursor: pointer; }\n\n.save-theme-modal {\n  padding: 15px 45px; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/theme-customisation/theme-customisation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeCustomisationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemeCustomisationComponent = (function () {
    function ThemeCustomisationComponent(leftPanelService, services, modalService) {
        this.leftPanelService = leftPanelService;
        this.services = services;
        this.modalService = modalService;
        this.saveAsThemeObj = {
            action: false,
            name: '',
            themeObj: ''
        };
        this.fontSizeConfig = {
            connect: [true, false],
            step: 2,
            range: {
                min: 8,
                max: 48
            }
        };
    }
    ThemeCustomisationComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    };
    ThemeCustomisationComponent.prototype.hideModal = function () {
        this.modalRef.hide();
    };
    ThemeCustomisationComponent.prototype.ngOnInit = function () {
        this.themeJSON = this.leftPanelService.themeJSON;
        !this.themeJSON.survey.requiredAsk.fontSize && (this.themeJSON.survey.requiredAsk.fontSize = '14px');
    };
    ThemeCustomisationComponent.prototype.onChange = function (e) {
        this.leftPanelService.callNextOnThemeCompState(e);
    };
    ThemeCustomisationComponent.prototype.saveOrUpdateTheme = function () {
        if (!this.themeJSON.name || this.themeJSON.name.trim() == '') {
            this.services.toastr.error('Theme Name is Required');
            return false;
        }
        if (this.themeJSON._id) {
            this.updateTheme();
        }
        else {
            this.openModal(this.selFolderModal);
        }
    };
    ThemeCustomisationComponent.prototype.saveTheme = function (e) {
        var _this = this;
        this.hideModal();
        if (this.saveAsThemeObj.action) {
            this.themeJSON.name = this.saveAsThemeObj.name;
            delete this.themeJSON._id;
            delete this.themeJSON.owner;
        }
        this.leftPanelService.saveTheme(e).subscribe(function (data) {
            if (data['data']) {
                _this.leftPanelService.allThemesArr.list.push(data['data']);
                _this.leftPanelService.allThemesArr.count++;
                _this.themeJSON = _this.leftPanelService.themeJSON;
                _this.services.toastr.success('Theme has been saved successfully.', 'Success');
            }
            _this.leftPanelService.resetToThemeList();
        });
    };
    ThemeCustomisationComponent.prototype.updateTheme = function () {
        var _this = this;
        this.leftPanelService.updateTheme(true).subscribe(function (data) {
            var idx = _this.services.utils.findIndex(_this.leftPanelService.allThemesArr.list, '_id', data.data._id);
            _this.leftPanelService.allThemesArr.list.splice(idx, 1, data.data);
            _this.services.toastr.success('Theme has been updated successfully.', 'Success');
            _this.cancelCustomisation();
        });
    };
    ThemeCustomisationComponent.prototype.cancelCustomisation = function () {
        this.leftPanelService.onCancelCustomise();
        this.leftPanelService.resetToThemeList();
    };
    ThemeCustomisationComponent.prototype.setPropertyValue = function (field, subField, cssProp, e) {
        this.onChange({
            'field': field,
            'subField': subField,
            'cssProp': cssProp,
            'value': e
        });
    };
    ThemeCustomisationComponent.prototype.saveAsTheme = function () {
        var _this = this;
        this.saveAsThemeObj.action = true;
        setTimeout(function () {
            _this.themeCopyInp.nativeElement.select();
        }, 0);
        this.saveAsThemeObj.name = this.themeJSON.name + '_copy';
    };
    ThemeCustomisationComponent.prototype.cancelCopyTheme = function () {
        this.saveAsThemeObj.action = false;
        this.saveAsThemeObj.name = '';
    };
    ThemeCustomisationComponent.prototype.saveCopyTheme = function () {
        this.openModal(this.selFolderModal);
    };
    ThemeCustomisationComponent.prototype.onKeyUpInSavingTheme = function (e) {
        if (e.which == 13) {
            this.saveCopyTheme();
        }
    };
    return ThemeCustomisationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('themeCopyInp'),
    __metadata("design:type", Object)
], ThemeCustomisationComponent.prototype, "themeCopyInp", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('selFolderModal'),
    __metadata("design:type", Object)
], ThemeCustomisationComponent.prototype, "selFolderModal", void 0);
ThemeCustomisationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-customisation',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/theme-customisation/theme-customisation.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/theme-customisation/theme-customisation.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]) === "function" && _c || Object])
], ThemeCustomisationComponent);

var _a, _b, _c;
//# sourceMappingURL=theme-customisation.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/themes-list/themes-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-list\">\n  <div class=\"theme-row tl-uppr-div\">\n    <div class=\"theme-list-view\">\n      <input [value]=\"1\" id=\"tl-default\" type=\"radio\" name=\"tabs\" [(ngModel)]=\"themeType\" (change)=\"themeType = 1;\">\n      <label for=\"tl-default\">Default</label>\n      <input [value]=\"0\" id=\"tl-myTheme\" type=\"radio\" name=\"tabs\" [(ngModel)]=\"themeType\" (change)=\"themeType = 0\">\n      <label for=\"tl-myTheme\">My Themes</label>\n\n      <span>\n        <button type=\"button\" class=\"btn tl-new-btn\" (click)=\"customiseTheme($event)\"><span>+</span>New Theme</button>\n      </span>\n\n      <div class=\"theme-list-container\">\n        <div class=\"theme-row\">\n          <span class=\"search-theme-inp\">\n            <input type=\"text\" class=\"theme-input-text\" [(ngModel)]=\"themeOpt.tName\" placeholder=\"Search Themes...\" (keyup)=\"filterThemes()\">\n          </span>\n          <button type=\"button\" class=\"btn tl-az-btn\" title=\"Sort\" (click)=\"sortThemes()\">{{this.themeOpt.sortOrder == -1 ? 'AZ' : 'ZA'}}</button>\n        </div>\n        <div class=\"tl-div\">\n          <div class=\"row tl-row\" *ngFor=\"let themeItem of themeArr.list | filterTheme: themeType: triggerPipeAgain; index as tlIdx\" [ngClass]=\"{'active': activeThemeId == themeItem._id, 'preview': previewThemeId == themeItem._id}\" (click)=\"previewTheme(themeItem)\">\n            <div class=\"col-md-6 col-sm-6 col-xs-6 tl-name\" [title]=\"themeItem.name\" [ngStyle]=\"{'font-family': themeItem?.survey?.body?.fontFamily}\">\n              <span class=\"theme-name ellipsis\">{{themeItem.name}}</span>\n              <span [hidden]=\"!(previewThemeId == themeItem._id)\" class=\"tl-cust-icon\" title=\"Customise\" (click)=\"customiseTheme($event, themeItem)\"></span>\n              <span [hidden]=\"(themeType == 1)\" class=\"tl-del-span\" title=\"Delete Theme\" (click)=\"delTheme(themeItem, $event)\">\n                <span class=\"tl-del-icon\">\n                </span>\n              </span>\n            </div>\n            <div class=\"col-md-6 col-sm-6 col-xs-6\">\n              <div class=\"tl-color-div\" [ngStyle]=\"{'background-color': themeItem?.survey?.body?.backgroundColor}\">\n                <span class=\"color-outer-span\">\n                  <span class=\"color-span\" [ngStyle]=\"{'background-color': themeItem?.survey?.header?.backgroundColor}\"></span>\n                  <span class=\"transparent-icon\" [hidden]=\"themeItem?.survey?.header?.backgroundColor\"></span>\n                </span>\n                <span class=\"color-outer-span\">\n                  <span class=\"color-span\" [ngStyle]=\"{'background-color': themeItem?.survey?.body?.color}\"></span>\n                  <span class=\"transparent-icon\" [hidden]=\"themeItem?.survey?.body?.color\"></span>\n                </span>\n                <span class=\"color-outer-span\">\n                  <span class=\"color-span\" [ngStyle]=\"{'background-color': themeItem?.page?.body?.backgroundColor}\"></span>\n                  <span class=\"transparent-icon\" [hidden]=\"themeItem?.page?.body?.backgroundColor\"></span>\n                </span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"text-center\" [hidden]=\"themeType == 1 || themeArr?.count == themeArr?.list?.length\">\n          <button type=\"button\" class=\"btn\" (click)=\"loadMore()\">Load More</button>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"tl-footer\">\n  <button type=\"button\" class=\"btn theme-save-btn\" (click)=\"saveThemeToSurvey()\" [disabled]=\"activeThemeId == previewThemeId\">\n    Apply\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/themes-list/themes-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".theme-list-view .theme-list-container {\n  border-top: 1px solid #ccc;\n  padding-top: 15px; }\n\n.theme-list-view input[type=radio] {\n  display: none; }\n\n.theme-list-view label {\n  display: inline-block;\n  margin: 0 0 -1px;\n  padding: 7px 10px;\n  font-size: 12px;\n  font-weight: 500;\n  text-align: center;\n  font-family: 'Helvetica Neue Medium';\n  border: 1px solid transparent; }\n\n.theme-list-view label:hover {\n  color: #2392ED;\n  cursor: pointer; }\n\n.theme-list-view input[type=radio]:checked + label {\n  color: #2392ED;\n  border: 1px solid #ccc;\n  border-top: 3px solid #2392ED;\n  border-bottom: 1px solid #fafafa; }\n\n.theme-list {\n  padding: 12px;\n  padding-bottom: 0; }\n\n.theme-list .tl-new-btn {\n    font-family: \"Helvetica Neue Medium\";\n    color: white;\n    background-color: #5CBB5B;\n    font-size: 12px;\n    float: right;\n    padding: 4px 6px; }\n\n.theme-list .tl-new-btn span {\n      margin-right: 8px; }\n\n.theme-list .search-theme-inp {\n    width: calc(100% - 55px);\n    display: inline-block; }\n\n.theme-list .tl-az-btn {\n    border: 1px solid #E3E3E3;\n    height: 30px;\n    width: 45px;\n    background-color: white;\n    float: right; }\n\n.theme-list .tl-div {\n    border: 1px solid #F2F2F2;\n    margin-top: 5px;\n    background-color: white;\n    overflow-y: auto;\n    max-height: calc(100vh - 250px); }\n\n.theme-list .tl-div .tl-row {\n      padding: 8px 0;\n      margin: 0;\n      cursor: pointer;\n      position: relative; }\n\n.theme-list .tl-div .tl-row:not(:last-child) {\n        border-bottom: 1px solid #F2F2F2; }\n\n.theme-list .tl-div .tl-row.active {\n        border-left: 3px solid #5CBB5B; }\n\n.theme-list .tl-div .tl-row.preview {\n        background-color: #F0F0F0; }\n\n.theme-list .tl-div .tl-row .theme-name {\n        display: inline-block;\n        width: calc(100% - 10px); }\n\n.theme-list .tl-div .tl-row .tl-name {\n        padding-top: 4px; }\n\n.theme-list .tl-div .tl-row .tl-cust-icon {\n        background: url(/assets/images/editSurvey/customise.svg);\n        background-repeat: no-repeat;\n        height: 20px;\n        width: 20px;\n        position: absolute;\n        right: 7px;\n        cursor: pointer; }\n\n.theme-list .tl-div .tl-row .tl-del-span {\n        position: absolute;\n        right: -15px;\n        top: 5px;\n        z-index: 99;\n        display: none; }\n\n.theme-list .tl-div .tl-row .tl-del-icon {\n        background: url(/assets/images/editSurvey/delete.svg);\n        background-repeat: no-repeat;\n        height: 17px;\n        width: 20px;\n        display: inline-block; }\n\n.theme-list .tl-div .tl-row:hover .tl-del-span {\n        display: inline-block; }\n\n.theme-list .tl-div .tl-row .tl-color-div {\n        border: 1px solid #d0d0d0;\n        height: 30px;\n        padding-top: 3px;\n        text-align: center;\n        margin-right: -4px; }\n\n.theme-list .tl-div .tl-row .color-span {\n        display: inline-block;\n        width: 19px;\n        height: 19px;\n        border-radius: 50%;\n        margin: 2px;\n        border: 1px solid rgba(0, 0, 0, 0.1); }\n\n.tl-footer {\n  position: absolute;\n  bottom: 0;\n  background-color: white;\n  padding: 15px;\n  width: 100%;\n  -webkit-box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.06);\n          box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.06); }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/themes-list/themes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ThemesListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterTheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_data_service__ = __webpack_require__("./src/app/routes/survey/edit/edit.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ThemesListComponent = (function () {
    function ThemesListComponent(editDataService, leftPanelService, services) {
        this.editDataService = editDataService;
        this.leftPanelService = leftPanelService;
        this.services = services;
        this.onThemeApply = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.triggerPipeAgain = false;
        this.themeOpt = {
            skip: 0,
            limit: 100000,
            sortParam: 'created',
            sortOrder: 1,
            tName: '',
        };
    }
    ThemesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.themeArr = this.leftPanelService.allThemesArr;
        if (!this.leftPanelService.allThemesArr.list.length) {
            this.filterThemes();
        }
        this.subscription = this.services.form.getSurveyData(this.editDataService.sId).subscribe(function (data) {
            if (!data)
                return;
            if (_this.services.form.formObj.theme) {
                _this.activeThemeId = _this.services.form.formObj.theme._id;
                if (_this.leftPanelService.previewThemeId) {
                    _this.previewThemeId = _this.leftPanelService.previewThemeId;
                    _this.leftPanelService.previewThemeId = '';
                }
                else {
                    _this.previewThemeId = _this.services.form.formObj.theme._id;
                }
                _this.themeType = !!_this.services.form.formObj.theme.default ? 1 : 0;
            }
            else {
                // set default theme id
            }
            _this.applyThemeToSurvey(_this.previewThemeId);
        });
    };
    ThemesListComponent.prototype.customiseTheme = function (e, themeItem) {
        e.stopPropagation();
        if (themeItem && this.services.form.formObj.theme._id != this.previewThemeId) {
            this.services.toastr.warning('Please apply the theme before it could be customised');
            return false;
        }
        var themeData = themeItem ? this.services.utils.cloneObject(themeItem) : undefined;
        themeData && (themeData = this.updateForDefaultTheme(themeData));
        this.leftPanelService.buildThemeData(themeData);
        this.leftPanelService.themeSettings.presentAction = 'theme-customisation';
        this.editDataService.surveyDesignData.displaySidebar = false;
        if (!themeItem || themeItem.default) {
            this.leftPanelService.checkEventBinding(true);
        }
        else {
            this.leftPanelService.checkEventBinding();
        }
        !themeItem && this.onThemeApply.emit('');
    };
    ThemesListComponent.prototype.updateForDefaultTheme = function (themeData) {
        if (themeData.default) {
            themeData.themeParent = themeData._id;
            delete themeData._id;
            themeData.default = false;
            themeData.name = themeData.name + '_copy';
        }
        return themeData;
    };
    ThemesListComponent.prototype.previewTheme = function (themeData) {
        this.previewThemeId = themeData._id;
        // this.themeData = themeData;
        this.applyThemeToSurvey(themeData._id);
    };
    ThemesListComponent.prototype.saveThemeToSurvey = function () {
        var _this = this;
        var sId = this.services.form.formObj._id;
        var themeData = {
            theme: this.previewThemeId
        };
        this.services.resource.updateSurveyData(sId, themeData).subscribe(function (data) {
            _this.activeThemeId = _this.previewThemeId;
            _this.applyThemeToSurvey(_this.activeThemeId);
            _this.services.form.formObj['theme'] = new Theme(_this.themeData);
            _this.services.toastr.success('Theme has been applied successfully.');
        });
    };
    ThemesListComponent.prototype.applyThemeToSurvey = function (themeId) {
        var _this = this;
        if (themeId) {
            this.services.resource.getThemeById(themeId).subscribe(function (data) {
                _this.themeData = data.data;
                _this.leftPanelService.buildThemeData(data.data);
                _this.onThemeApply.emit(data.data._id);
                var idx = _this.services.utils.findIndex(_this.themeArr.list, '_id', data.data._id);
                if (idx == -1) {
                    _this.themeArr.list.splice(0, 0, data.data);
                    _this.triggerPipeAgain = !_this.triggerPipeAgain;
                }
            });
        }
        else {
            this.leftPanelService.buildThemeData();
        }
    };
    ThemesListComponent.prototype.delTheme = function (theme, e) {
        var _this = this;
        e.stopPropagation();
        this.services.alert({
            title: '<p class="sweetalert_title">Are you sure you want to delete this theme?</p>',
            text: "",
            type: 'warning',
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonClass: 'sweetalert_apply_btn',
            cancelButtonClass: 'sweetalert_cancel_btn',
            confirmButtonText: 'Yes, delete it!'
        }).then(function (result) {
            if (result.value) {
                _this.deleteTheme(theme);
            }
        });
    };
    ThemesListComponent.prototype.deleteTheme = function (theme) {
        var _this = this;
        var themeId = theme._id;
        var replaceTheme = null;
        if (themeId == this.activeThemeId) {
            if (theme.themeParent) {
                replaceTheme = theme.themeParent;
            }
            else {
                replaceTheme = this.themeArr.list.filter(function (theme) { return theme.default; })[0]._id;
            }
        }
        this.services.resource.deleteTheme(themeId, replaceTheme).subscribe(function (data) {
            var idx = _this.services.utils.findIndex(_this.themeArr.list, '_id', themeId);
            _this.themeArr.list.splice(idx, 1);
            _this.themeArr.count--;
            _this.triggerPipeAgain = !_this.triggerPipeAgain; //changing inputs of pipe to trigger it again
            _this.services.toastr.success('Theme has been deleted successfully.', 'Success');
            if (replaceTheme) {
                _this.getNewTheme(replaceTheme);
            }
        });
    };
    ThemesListComponent.prototype.getNewTheme = function (replaceThemeId) {
        var _this = this;
        this.services.resource.getThemeById(replaceThemeId).subscribe(function (data) {
            _this.services.form.formObj.theme = new Theme(data.data);
            _this.activeThemeId = replaceThemeId;
            _this.previewThemeId = _this.activeThemeId;
            _this.themeType = !!_this.services.form.formObj.theme.default ? 1 : 0;
            _this.applyThemeToSurvey(_this.activeThemeId);
        });
    };
    ThemesListComponent.prototype.filterThemes = function () {
        var _this = this;
        this.services.resource.getAllThemes(this.themeOpt).subscribe(function (data) {
            if (data && data.data) {
                _this.leftPanelService.allThemesArr.list = data.data.list;
                _this.leftPanelService.allThemesArr.count = data.data.total;
            }
            ;
        });
    };
    ThemesListComponent.prototype.sortThemes = function () {
        this.themeOpt.sortParam = 'name';
        this.themeOpt.sortOrder = (this.themeOpt.sortOrder == 1) ? -1 : 1;
        this.filterThemes();
    };
    // loadMore(){
    //   this.themeOpt.skip++;
    //   this.themeOpt.default = false;
    //   this.services.resource.getAllThemes(this.themeOpt).subscribe((data) => {
    //     if(data && data.data){
    //       this.leftPanelService.allThemesArr.list.concat(data.data.list);
    //       this.leftPanelService.allThemesArr.count = data.data.total;
    //       this.triggerPipeAgain = !this.triggerPipeAgain;
    //     };
    //   });
    // }
    ThemesListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ThemesListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], ThemesListComponent.prototype, "onThemeApply", void 0);
ThemesListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-themes-list',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/themes-list/themes-list.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/themes-list/themes-list.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__edit_data_service__["a" /* EditDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__edit_data_service__["a" /* EditDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_services_module__["a" /* SharedServices */]) === "function" && _d || Object])
], ThemesListComponent);

var FilterTheme = (function () {
    function FilterTheme() {
    }
    FilterTheme.prototype.transform = function (themeArr, isDefault, triggerPipeAgain) {
        var filteredThemeArr = themeArr.filter(function (item) {
            return !!item.default == !!isDefault;
        });
        return filteredThemeArr;
    };
    return FilterTheme;
}());
FilterTheme = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'filterTheme'
    })
], FilterTheme);

var _a, _b, _c, _d;
//# sourceMappingURL=themes-list.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/title-setting/title-setting.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/title-setting/title-setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-left-side\">\n  <div class=\"theme-setting-div\">\n    <div>\n      <span class=\"customise-icon\"></span>\n      <span>Customise - </span>\n      <span>{{titleInp.field | titlecase}} {{titleInp.subField | titlecase}}</span>\n    </div>\n    <div class=\"theme-name-container\">\n      {{themeName}}\n    </div>\n    <div [hidden]=\"(!appliedSet.themeSetId || appliedSet.themeSetId == '')\">\n       Set name:\n       <span>{{appliedSet?.themeSetId}}</span>\n    </div>\n    <div class=\"theme-setting-inner-div\">\n      <div class=\"theme-contanier\">\n        <theme-text-setting [textInpData]=\"{\n          'field': titleInp.field,\n          'subField': titleInp.subField,\n          'props': themeSet[titleInp.field][titleInp.subField]\n        }\" (onChangeTextDetails)=\"onChange($event)\">\n        </theme-text-setting>\n        <div class=\"row theme-row\" *ngIf=\"titleInp.field !== 'survey' && titleInp.subField === 'body'\">\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <label><input type=\"checkbox\" [(ngModel)]=\"forAll\">For all</label>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row theme-footer\">\n    <div class=\"col-md-6 col-sm-6 col-xs-6\">\n      <button type=\"button\" class=\"btn theme-save-btn\" (click)=\"updateTheme()\">\n        Update\n      </button>\n    </div>\n    <div class=\"col-md-6 col-sm-6 col-xs-6\">\n      <button type=\"button\" class=\"btn theme-cancel-btn\" (click)=\"cancelCustomisation()\">\n        Cancel\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/left-panel/title-setting/title-setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleSettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TitleSettingComponent = (function () {
    function TitleSettingComponent(leftPanelService) {
        this.leftPanelService = leftPanelService;
        this.appliedSet = {};
        this.forAll = true;
    }
    TitleSettingComponent.prototype.ngOnInit = function () {
        this.themeName = this.leftPanelService.themeJSON.name;
        if (this.titleInp.field == 'question' || this.titleInp.field == 'page') {
            this.appliedSet.themeSetId = this.leftPanelService.themeSettings.activeElem['themeSetId'];
            if (this.appliedSet.themeSetId) {
                this.forAll = false;
            }
            this.themeSet = this.leftPanelService.themeSet;
        }
        else {
            this.themeSet = this.leftPanelService.themeJSON;
        }
        if (!this.themeSet[this.titleInp.field][this.titleInp.subField].fontSize) {
            var fontSize = this.leftPanelService.getExtendedCss(this.titleInp.subField, this.themeSet, 'fontSize', '14px');
            this.themeSet[this.titleInp.field][this.titleInp.subField].setFontSize(fontSize);
        }
        //  !this.themeSet[this.titleInp.field][this.titleInp.subField].fontSize && (this.themeSet[this.titleInp.field][this.titleInp.subField].setFontSize("14px"));
    };
    TitleSettingComponent.prototype.onChange = function (event) {
        event['forAll'] = this.forAll;
        this.leftPanelService.callNextOnThemeCompState(event);
    };
    TitleSettingComponent.prototype.updateTheme = function () {
        var _this = this;
        this.leftPanelService.updateTheme(this.forAll).subscribe(function (data) {
            _this.cancelCustomisation();
        });
    };
    TitleSettingComponent.prototype.cancelCustomisation = function () {
        this.leftPanelService.onCancelSetting();
        this.leftPanelService.switchToThemeCust();
    };
    return TitleSettingComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TitleSettingComponent.prototype, "titleInp", void 0);
TitleSettingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-title-setting',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/title-setting/title-setting.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/title-setting/title-setting.component.css"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__left_panel_service__["a" /* LeftPanelService */]) === "function" && _a || Object])
], TitleSettingComponent);

var _a;
//# sourceMappingURL=title-setting.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/survey.themes.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"(!surveyDesignData.displaySidebar ? 'inner-left-broad-container' : 'inner-left-container')\">\n  <theme-left-panel (onThemeApply)=\"applyTheme($event)\"></theme-left-panel>\n</div>\n<div class=\"right-container theme-container break_words\">\n  <theme-survey-list [themeId]=\"themeId\"></theme-survey-list>\n</div>\n<!-- <span class=\"preview-btn-span\" [hidden]=\"(setsBtn.display)\">\n  <a [routerLink]=\"['preview']\">\n    <button type=\"button\" class=\"btn preview-btn\">\n      Preview\n    </button>\n  </a>\n</span> -->\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/survey.themes.component.scss":
/***/ (function(module, exports) {

module.exports = ".right-container {\n  padding: 0; }\n\n.preview-btn-span {\n  position: fixed;\n  z-index: 100;\n  right: 12px;\n  top: 70px; }\n\n.preview-btn {\n  background-color: rgba(255, 255, 255, 0.6);\n  color: black;\n  font-size: 12px;\n  -webkit-box-shadow: -2px 2px 7px 0px rgba(108, 108, 108, 0.5);\n          box-shadow: -2px 2px 7px 0px rgba(108, 108, 108, 0.5); }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/survey.themes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyThemesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_data_service__ = __webpack_require__("./src/app/routes/survey/edit/edit.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__left_panel_left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyThemesComponent = (function () {
    function SurveyThemesComponent(editDataService, lpService) {
        this.editDataService = editDataService;
        this.lpService = lpService;
    }
    SurveyThemesComponent.prototype.ngOnInit = function () {
        this.surveyDesignData = this.editDataService.surveyDesignData;
        this.setsBtn = this.lpService.themeSetProperties.rightSideSetsBtn;
    };
    SurveyThemesComponent.prototype.applyTheme = function (event) {
        this.themeId = event;
    };
    return SurveyThemesComponent;
}());
SurveyThemesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-survey-themes',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/survey.themes.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.edit.component.scss"), __webpack_require__("./src/app/routes/survey/edit/survey.themes/survey.themes.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__edit_data_service__["a" /* EditDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__edit_data_service__["a" /* EditDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__left_panel_left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__left_panel_left_panel_service__["a" /* LeftPanelService */]) === "function" && _b || Object])
], SurveyThemesComponent);

var _a, _b;
//# sourceMappingURL=survey.themes.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/survey.themes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesModule", function() { return ThemesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_themes_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/survey.themes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_survey_list_theme_survey_list_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-survey-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__theme_survey_list_theme_page_list_theme_page_list_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-page-list/theme-page-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__theme_survey_list_theme_question_list_theme_question_list_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-question-list/theme-question-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__left_panel_left_panel_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__left_panel_theme_customisation_theme_customisation_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/theme-customisation/theme-customisation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__left_panel_page_setting_page_setting_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/page-setting/page-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__left_panel_container_setting_container_setting_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/container-setting/container-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__left_panel_shared_text_setting_text_setting_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/text-setting/text-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__left_panel_themes_list_themes_list_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/themes-list/themes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__left_panel_shared_background_setting_background_setting_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/background-setting/background-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__left_panel_shared_font_setting_font_setting_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/font-setting/font-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__left_panel_shared_progress_bar_progress_bar_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/progress-bar/progress-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__left_panel_survey_setting_survey_setting_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/survey-setting/survey-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__left_panel_title_setting_title_setting_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/title-setting/title-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__left_panel_shared_slider_slider_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/slider/slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__left_panel_shared_text_align_text_align_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/text-align/text-align.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__left_panel_shared_border_setting_border_setting_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/shared/border-setting/border-setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__device_preview_device_preview_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/device-preview/device-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__left_panel_field_sets_field_sets_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/field-sets/field-sets.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__left_panel_theme_customisation_option_settings_option_settings_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/theme-customisation/option-settings/option-settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__left_panel_left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__theme_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/theme.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var surveyRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__survey_themes_component__["a" /* SurveyThemesComponent */] },
    { path: 'preview', component: __WEBPACK_IMPORTED_MODULE_21__device_preview_device_preview_component__["a" /* DevicePreviewComponent */] }
];
var ThemesModule = (function () {
    function ThemesModule() {
    }
    return ThemesModule;
}());
ThemesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(surveyRoutes)
        ],
        exports: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__survey_themes_component__["a" /* SurveyThemesComponent */],
            __WEBPACK_IMPORTED_MODULE_4__theme_survey_list_theme_survey_list_component__["a" /* ThemeSurveyListComponent */],
            __WEBPACK_IMPORTED_MODULE_5__theme_survey_list_theme_page_list_theme_page_list_component__["a" /* ThemePageListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__theme_survey_list_theme_question_list_theme_question_list_component__["a" /* ThemeQuestionListComponent */],
            __WEBPACK_IMPORTED_MODULE_4__theme_survey_list_theme_survey_list_component__["a" /* ThemeSurveyListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__left_panel_left_panel_component__["a" /* LeftPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_8__left_panel_theme_customisation_theme_customisation_component__["a" /* ThemeCustomisationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__left_panel_page_setting_page_setting_component__["a" /* PageSettingComponent */],
            __WEBPACK_IMPORTED_MODULE_10__left_panel_container_setting_container_setting_component__["a" /* ContainerSettingComponent */],
            __WEBPACK_IMPORTED_MODULE_11__left_panel_shared_text_setting_text_setting_component__["a" /* TextSettingComponent */],
            __WEBPACK_IMPORTED_MODULE_12__left_panel_themes_list_themes_list_component__["b" /* ThemesListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__left_panel_themes_list_themes_list_component__["a" /* FilterTheme */],
            __WEBPACK_IMPORTED_MODULE_13__left_panel_shared_background_setting_background_setting_component__["a" /* BackgroundSettingComponent */],
            __WEBPACK_IMPORTED_MODULE_14__left_panel_shared_font_setting_font_setting_component__["a" /* FontSettingComponent */],
            __WEBPACK_IMPORTED_MODULE_15__left_panel_shared_progress_bar_progress_bar_component__["a" /* ProgressBarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__left_panel_survey_setting_survey_setting_component__["a" /* SurveySettingComponent */],
            __WEBPACK_IMPORTED_MODULE_17__left_panel_title_setting_title_setting_component__["a" /* TitleSettingComponent */],
            __WEBPACK_IMPORTED_MODULE_18__left_panel_shared_slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__left_panel_shared_text_align_text_align_component__["a" /* TextAlignComponent */],
            __WEBPACK_IMPORTED_MODULE_20__left_panel_shared_border_setting_border_setting_component__["a" /* BorderSettingComponent */],
            __WEBPACK_IMPORTED_MODULE_21__device_preview_device_preview_component__["a" /* DevicePreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_22__left_panel_field_sets_field_sets_component__["a" /* FieldSetsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__left_panel_theme_customisation_option_settings_option_settings_component__["a" /* OptionSettingsComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_25__theme_service__["a" /* ThemeService */],
            __WEBPACK_IMPORTED_MODULE_24__left_panel_left_panel_service__["a" /* LeftPanelService */]
        ]
    })
], ThemesModule);

//# sourceMappingURL=survey.themes.module.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-page-list/theme-page-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-div\" [ngStyle]=\"pageTheme?.body\">\n  <div class=\"survey-page-container hover-select\" [attr.data-id]=\"pageData._id\" data-body=\"page-container\">\n    <div [hidden]=\"!(setsBtn.display)\">\n      <button type=\"button\" class=\"btn page-sets-btn\" (click)=\"showPageSets(pageData._id, $event)\">Page sets</button>\n    </div>\n    <div class=\"survey-page-header hover-select\" [attr.data-id]=\"pageData._id\" data-body=\"page-header\">\n      <div [ngStyle]=\"pageTheme?.header\">\n        <div class=\"page_num_div\" [hidden]=\"!formObj.showPageNumber\">\n          <span class=\"survey-page-no hover-select\" [attr.data-id]=\"pageData._id\" data-body=\"page-no\">\n            Page {{pageData.count}}\n          </span>\n        </div>\n        <div [hidden]=\"!formObj.showPTitle\">\n          <div [ngStyle]=\"pageTheme?.title\">\n            <div class=\"survey-page-title hover-select\" [hidden]=\"!pageData.title\" [attr.data-id]=\"pageData._id\" data-body=\"page-title\">\n              <p [innerHTML]=\"pageData.title || ''\"></p>\n            </div>\n          </div>\n          <div  [ngStyle]=\"pageTheme?.desc\">\n            <div class=\"survey-page-desc hover-select\" [hidden]=\"!pageData.desc\" [attr.data-id]=\"pageData._id\" data-body=\"page-desc\">\n              <p [innerHTML]=\"pageData.desc || ''\"></p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div [hidden]=\"!(formObj.showProg.hasProg && !formObj.showProg.position)\">\n      <div class=\"progress-bar-div\" [ngStyle]=\"themeJSON?.survey?.progressBar\">\n        <app-progress-bar [inpData]=\"{count: pageData.count, totalPages: formObj.pageFields.length, 'format': formObj.showProg.format}\" [color]=\"themeJSON?.survey?.progressBar?.color\"></app-progress-bar>\n      </div>\n    </div>\n    <div class=\"survey-page-body\">\n      <div *ngFor=\"let question of pageData.ques;\">\n        <theme-question-list [count]=\"question.count\" [questionId]=\"question._id\" [themeId]=\"themeId\"></theme-question-list>\n      </div>\n    </div>\n    <div class=\"survey-page-footer\">\n      <div [hidden]=\"!(formObj.showProg.hasProg && formObj.showProg.position)\">\n        <div class=\"progress-bar-div\" [ngStyle]=\"themeJSON?.survey?.progressBar\">\n          <app-progress-bar [inpData]=\"{count: pageData.count, totalPages: formObj.pageFields.length, 'format': formObj.showProg.format}\" [color]=\"themeJSON?.survey?.progressBar?.color\"></app-progress-bar>\n        </div>\n      </div>\n      <div class=\"action-button\">\n        <div>\n          <span class=\"page-ok-btn hover-select\" [attr.data-id]=\"pageData._id\" data-body=\"page-ok-btn\">\n            <button [ngStyle]=\"pageTheme?.okBtn\">OK</button>\n          </span>\n        </div>\n        <div class=\"text-center\">\n          <span class=\"page-prev-btn hover-select\" [attr.data-id]=\"pageData._id\" data-body=\"page-prev-btn\">\n            <button [ngStyle]=\"pageTheme?.prevBtn\">{{formObj.previous}}</button>\n          </span>\n          <span class=\"page-next-btn hover-select\" [attr.data-id]=\"pageData._id\" data-body=\"page-next-btn\">\n            <button [ngStyle]=\"pageTheme?.nextBtn\">{{formObj.next}}</button>\n          </span>\n          <span class=\"page-done-btn hover-select\" [attr.data-id]=\"pageData._id\" data-body=\"page-done-btn\">\n            <button [ngStyle]=\"pageTheme?.doneBtn\">{{formObj.done}}</button>\n          </span>\n          <span class=\"page-exit-btn hover-select\" [attr.data-id]=\"pageData._id\" data-body=\"page-exit-btn\">\n            <button [ngStyle]=\"pageTheme?.exitBtn\">{{formObj.exit || 'Exit'}}</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-page-list/theme-page-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".survey-page-container {\n  padding: 0 10px;\n  position: relative;\n  margin: 25px 10px 0 10px; }\n  .survey-page-container .survey-page-header {\n    padding: 10px 0;\n    margin-bottom: 15px; }\n  .survey-page-container .survey-page-footer {\n    margin-bottom: 10px; }\n  .survey-page-container .survey-page-footer .action-button {\n      padding: 20px 0; }\n  .survey-page-container .survey-page-footer .action-button span {\n        display: inline-block; }\n  .survey-page-container .survey-page-footer .action-button button {\n        background-color: transparent;\n        border: 0; }\n  .survey-page-container .survey-page-footer .action-button button:focus {\n          outline: none; }\n  .page-sets-btn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: black;\n  font-size: 12px;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 5px;\n  -webkit-box-shadow: -2px 2px 7px 0px rgba(108, 108, 108, 0.5);\n          box-shadow: -2px 2px 7px 0px rgba(108, 108, 108, 0.5); }\n  .page-prev-btn > button, .page-next-btn > button, .page-done-btn > button, .page-exit-btn > button {\n  border-radius: 3px; }\n  .progress-bar-div {\n  margin: auto; }\n  .page-div {\n  margin: 20px 10px;\n  border-radius: 4px; }\n  .page_num_div {\n  text-align: center;\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-page-list/theme-page-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemePageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
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



var ThemePageListComponent = (function () {
    function ThemePageListComponent(lpService, services) {
        this.lpService = lpService;
        this.services = services;
    }
    ThemePageListComponent.prototype.ngOnInit = function () {
        this.formObj = this.services.form.formObj;
        var allPagesAndQues = this.services.form.getAllPagesAndQuestions();
        this.pageData = allPagesAndQues['data'][this.pageObj._id];
        this.applyTheme();
        this.setsBtn = this.lpService.themeSetProperties.rightSideSetsBtn;
    };
    ThemePageListComponent.prototype.ngOnChanges = function (changes) {
        if (this.lpService.getThemeCssObj()) {
            this.themeJSON = this.lpService.themeJSON;
            var pageThemeObj = this.lpService.themeJSON.page;
            if (this.pageObj.themeSetId) {
                // if(this.services.form.formObj.theme.pageSet && this.services.form.formObj.theme.pageSet[this.pageObj.themeSetId]) {
                // let pageSetTheme = this.services.form.formObj.theme.pageSet[this.pageObj.themeSetId];
                if (this.lpService.themeJSON.ifSetExist(this.pageObj.themeSetId)) {
                    var pageSetTheme = this.lpService.themeJSON.getThemeSet(this.pageObj.themeSetId);
                    pageThemeObj = this.services.utils.extendObject(pageThemeObj, new PageTheme(pageSetTheme));
                }
            }
            this.pageTheme = this.services.form.formObj.theme.getFieldCssObj(pageThemeObj);
        }
    };
    ThemePageListComponent.prototype.applyTheme = function () {
        var _this = this;
        this.lpService.themeCompState.subscribe(function (data) {
            if (!data)
                return;
            _this.themeJSON = _this.lpService.themeJSON;
            if (data.field && 'page' !== data.field) {
                return;
            }
            var themeSetId = _this.services.form.formObj.getPageById(_this.pageObj._id).themeSetId;
            var setExists = _this.lpService.themeJSON.ifSetExist(themeSetId);
            if (data.forAll && !setExists) {
                _this.pageTheme = _this.lpService.getThemeCssObj().page;
            }
            else if (data.id == _this.pageObj._id) {
                _this.pageTheme = _this.lpService.themeSet[data.field];
            }
        });
    };
    ThemePageListComponent.prototype.showPageSets = function (id, e) {
        e.stopPropagation();
        this.lpService.setComponent('page-sets', id);
    };
    return ThemePageListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ThemePageListComponent.prototype, "themeId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ThemePageListComponent.prototype, "pageObj", void 0);
ThemePageListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-page-list',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-page-list/theme-page-list.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-page-list/theme-page-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__left_panel_left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__left_panel_left_panel_service__["a" /* LeftPanelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */]) === "function" && _b || Object])
], ThemePageListComponent);

var _a, _b;
//# sourceMappingURL=theme-page-list.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-question-list/theme-question-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-question-container hover-select\" [attr.data-id]=\"questionId\" data-body=\"question-container\">\n  <div [hidden]=\"!(setsBtn.display)\">\n    <button type=\"button\" class=\"btn ques-sets-btn\" (click)=\"showQuesSets(questionId, $event)\">Question sets</button>\n  </div>\n  <div [ngStyle]=\"questionTheme?.body\">\n    <app-question-template [questionData]=\"{'count': count, 'form': formData}\" [themeInp]=\"{'surTheme': surveyTheme, 'quesTheme': questionTheme, 'optTheme': optionTheme}\"></app-question-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-question-list/theme-question-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".theme-question-container {\n  margin-bottom: 30px;\n  position: relative; }\n\n.ques-sets-btn {\n  position: absolute;\n  right: 0;\n  top: 0;\n  color: black;\n  font-size: 12px;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding: 5px;\n  -webkit-box-shadow: -2px 2px 7px 0px rgba(108, 108, 108, 0.5);\n          box-shadow: -2px 2px 7px 0px rgba(108, 108, 108, 0.5); }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-question-list/theme-question-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeQuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__left_panel_left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
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



var ThemeQuestionListComponent = (function () {
    function ThemeQuestionListComponent(lpService, services) {
        this.lpService = lpService;
        this.services = services;
    }
    ThemeQuestionListComponent.prototype.ngOnInit = function () {
        this.formData = this.services.form.allQuestionsInFormGroup[this.questionId];
        this.applyTheme();
        this.applyOptSettings();
        this.setsBtn = this.lpService.themeSetProperties.rightSideSetsBtn;
    };
    ThemeQuestionListComponent.prototype.ngOnChanges = function (changes) {
        if (this.lpService.getThemeCssObj()) {
            var questionThemeObj = this.lpService.themeJSON.question;
            var quesObj = this.services.form.formObj.getQuestionById(this.questionId);
            if (quesObj.themeSetId) {
                // if(this.services.form.formObj.theme.questionSet && this.services.form.formObj.theme.questionSet[quesObj.themeSetId]) {
                //   let questionSetTheme = this.services.form.formObj.theme.questionSet[quesObj.themeSetId];
                if (this.lpService.themeJSON.ifSetExist(quesObj.themeSetId)) {
                    var questionSetTheme = this.lpService.themeJSON.getThemeSet(quesObj.themeSetId);
                    questionThemeObj = this.services.utils.extendObject(questionThemeObj, new QuestionTheme(questionSetTheme));
                }
            }
            this.questionTheme = this.services.form.formObj.theme.getFieldCssObj(questionThemeObj);
            this.surveyTheme = this.lpService.getThemeCssObj().survey;
            this.lpService.reflectOptionSettings();
        }
    };
    ThemeQuestionListComponent.prototype.applyTheme = function () {
        var _this = this;
        this.lpService.themeCompState.subscribe(function (data) {
            if (!data)
                return;
            if (data.field && data.subField && data.field == 'survey' && data.subField == 'requiredAsk') {
                _this.surveyTheme = _this.lpService.getThemeCssObj().survey;
            }
            else if (data.field && 'question' === data.field) {
                var ques = _this.services.form.formObj.getQuestionById(_this.questionId);
                var setExists = _this.lpService.themeJSON.ifSetExist(ques.themeSetId);
                if (data.forAll && !setExists) {
                    _this.questionTheme = _this.lpService.getThemeCssObj().question;
                }
                else if (data.id == _this.questionId) {
                    _this.questionTheme = _this.lpService.themeSet[data.field];
                }
            }
        });
    };
    ThemeQuestionListComponent.prototype.applyOptSettings = function () {
        var _this = this;
        this.lpService.optionsCompState.subscribe(function (data) {
            if (!data)
                return;
            _this.optionTheme = _this.lpService.themeJSON.getOptSettingCss();
            var quesObj = _this.services.form.formObj.getQuestionById(_this.questionId);
            var pageSetId = _this.services.form.formObj.getPageByQuestionId(_this.questionId)['themeSetId'];
            var color = quesObj.getOptionColor(_this.lpService.themeJSON, pageSetId);
            _this.optionTheme['color'] = color;
            // let bgColor: string =  quesObj.getOptionBGColor(this.lpService.themeJSON, pageSetId);
            // this.optionTheme['bgColor'] = bgColor;
        });
    };
    ThemeQuestionListComponent.prototype.showQuesSets = function (id, e) {
        e.stopPropagation();
        this.lpService.setComponent('question-sets', id);
    };
    return ThemeQuestionListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ThemeQuestionListComponent.prototype, "themeId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ThemeQuestionListComponent.prototype, "count", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ThemeQuestionListComponent.prototype, "questionId", void 0);
ThemeQuestionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-question-list',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-question-list/theme-question-list.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-question-list/theme-question-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__left_panel_left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__left_panel_left_panel_service__["a" /* LeftPanelService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */]) === "function" && _b || Object])
], ThemeQuestionListComponent);

var _a, _b;
//# sourceMappingURL=theme-question-list.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-survey-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"surveyData\">\n  <div class=\"hover-select\" [attr.data-id]=\"surveyData._id\" data-body=\"survey-container\">\n    <div class=\"survey-container\" [ngStyle]=\"themeCss?.survey?.body\">\n      <div [ngStyle]=\"themeCss?.survey?.header\" class=\"boxed-container\">\n        <div class=\"survey-header hover-select\" [attr.data-id]=\"surveyData._id\" data-body=\"survey-header\">\n          <div class=\"theme-max-len\" *ngIf=\"surveyData.logo?.hasLogo == 1 && surveyData.logo?.position == 'above'\" [ngStyle]=\"themeCss?.survey?.logo || {'text-align': surveyData.logo?.allignment}\">\n            <img [src]=\"logoDetails?.src\" class=\"img-responsive display-inline survey-logo-img\" [attr.data-id]=\"surveyData._id\" data-body=\"survey-logo-img\">\n          </div>\n          <div class=\"theme-max-len\" [ngStyle]=\"themeCss?.survey?.title\">\n            <div class=\"survey-title hover-select\" [hidden]=\"!surveyData.showTitle\" [attr.data-id]=\"surveyData._id\" data-body=\"survey-title\">\n              <span class=\"title-text\" [innerHTML]=\"surveyData.title\"></span>\n            </div>\n          </div>\n          <div class=\"theme-max-len\" *ngIf=\"surveyData.logo?.hasLogo == 1 && surveyData.logo?.position == 'below'\" [style.text-align]=\"surveyData.logo?.allignment\">\n            <img [src]=\"logoDetails?.src\" class=\"img-responsive display-inline survey-logo-img\" [attr.data-id]=\"surveyData._id\" data-body=\"survey-logo-img\">\n          </div>\n        </div>\n      </div>\n      <div class=\"theme-max-len survey-body boxed-container\">\n        <div *ngFor=\"let pageObj of surveyData.pageFields; index as page_idx\">\n          <theme-page-list [pageObj]=\"pageObj\" [themeId]=\"themeId\"></theme-page-list>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-survey-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".survey-container {\n  min-height: calc(100vh - 64px); }\n  .survey-container .survey-header {\n    padding: 10px; }\n  .survey-container .survey-header .survey-logo {\n      max-width: none; }\n  .survey-container .survey-header .survey-title .title-text {\n      word-wrap: break-word;\n      white-space: normal;\n      display: block; }\n  ::ng-deep .theme-container .hover-select {\n  border: 2px dashed transparent; }\n  ::ng-deep .theme-container .hover-select.active {\n  border-color: #9e9e9e; }\n  ::ng-deep .theme-container .hover-select.selected {\n  border-color: #555; }\n  .theme-max-len {\n  max-width: 896px;\n  margin: auto; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-survey-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeSurveyListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_data_service__ = __webpack_require__("./src/app/routes/survey/edit/edit.data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__left_panel_left_panel_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.themes/left-panel/left-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__survey_main_list_logo_service__ = __webpack_require__("./src/app/routes/survey/edit/survey.main-list/logo.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ThemeSurveyListComponent = (function () {
    function ThemeSurveyListComponent(services, editDataService, lpService, logoService) {
        this.services = services;
        this.editDataService = editDataService;
        this.lpService = lpService;
        this.logoService = logoService;
    }
    ThemeSurveyListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sid = this.editDataService.sId;
        this.logoDetails = this.logoService.logoDetails;
        this.services.form.getSurveyData(sid).subscribe(function (data) {
            if (!data)
                return;
            _this.surveyData = _this.services.form.formObj;
            _this.logoService.setLogoOnLoad(sid, _this.surveyData);
        });
        this.lpService.themeCompState.subscribe(function (data) {
            if (!data)
                return;
            if (data.field && 'survey' !== data.field) {
                return;
            }
            _this.themeCss = _this.lpService.getThemeCssObj();
        });
    };
    ThemeSurveyListComponent.prototype.ngOnChanges = function (changes) {
        this.themeCss = this.lpService.getThemeCssObj();
    };
    return ThemeSurveyListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ThemeSurveyListComponent.prototype, "themeId", void 0);
ThemeSurveyListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'theme-survey-list',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-survey-list.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.themes/theme-survey-list/theme-survey-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__edit_data_service__["a" /* EditDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__edit_data_service__["a" /* EditDataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__left_panel_left_panel_service__["a" /* LeftPanelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__left_panel_left_panel_service__["a" /* LeftPanelService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__survey_main_list_logo_service__["a" /* LogoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__survey_main_list_logo_service__["a" /* LogoService */]) === "function" && _d || Object])
], ThemeSurveyListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=theme-survey-list.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.themes/theme.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThemeService = (function () {
    function ThemeService() {
    }
    return ThemeService;
}());
ThemeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ThemeService);

//# sourceMappingURL=theme.service.js.map

/***/ })

});
//# sourceMappingURL=survey.themes.module.chunk.js.map