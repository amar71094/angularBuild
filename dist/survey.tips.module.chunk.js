webpackJsonp(["survey.tips.module"],{

/***/ "./src/app/routes/survey/edit/survey.tips/survey.tips.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"(!surveyDesignData.displaySidebar ? 'inner-left-broad-container' : 'inner-left-container')\">\n\t<div class=\"side_bar_tips\">\n\t\t<div class=\"tips_heading dark_text\">\n\t\t\t<span><i class=\"ti-light-bulb\"></i>Tips</span>\n\t\t</div>\n\t\t<div class=\"tips_content\">\n\t\t\t<div class=\"tips_div\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 tips_heading_content\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tMake Sure That Every Question is Necessary\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 tips_subcontent\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSome give out a few new surveys per month, other perhaps one or more a week.\n\t\t\t\t\t\t\tTo find you did not quality for a survey.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row padding_top10\" *ngFor=\"let item of [1,2,3]; index as idx\">\n\t\t\t\t\t<div class=\"col-md-3 col-sm-3 tips_heading_content padding_rgt0\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tStep {{idx + 1}}:\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-md-9 col-sm-9 tips_subcontent\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSome give out a few new surveys per month, other perhaps one or more a week.\n\t\t\t\t\t\t\tTo find you did not quality for a survey.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tips_div\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 tips_heading_content\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tKeep it Short and Simple\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 tips_subcontent\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSome give out a few new surveys per month, others perhaps one or more a week. To find you did not qualify\n\t\t\t\t\t\t\tfor a surveycan mean you miss out on any earings for some time.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"tips_div\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 tips_heading_content\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tAvoid Leading and Biased Questions\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-md-12 col-sm-12 tips_subcontent\">\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tSome give out a few new surveys per month, others perhaps one or more a week. To find you did not qualify\n\t\t\t\t\t\t\tfor a surveycan mean you miss out on any earings for some time.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"right-container rgt-padding\">\n\t<div class=\"main_question_area\">\n\t\t<!-- <div class=\"action\"><a>Next</a></div> -->\n\t\t<div class=\"div_with_no_questions\">\n\t\t\t<div class=\"first_no_ques_div dark_text\">\n\t\t\t\t<p>There are no questions for this survey</p>\n\t\t\t</div>\n\t\t\t<div class=\"second_no_ques_div light_text\">\n\t\t\t\t<p>Would you like to create a new question or choose a pre-written template question?</p>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<button class=\"btn btn_ques_from_scratch\" [routerLink]=\"['/survey/design', sid, 'questions']\" (click)=\"addFirstQues()\">\n\t\t\t\t\t<span class=\"btn_make_ques_plus\">+</span><span>QUESTION FROM SCRATCH</span>\n\t\t\t\t</button>\n\t\t\t\t<!-- <button class=\"btn btn_ques_from_bank\"> -->\n\t\t\t\t\t<!-- <span class=\"btn_make_ques_plus\">+</span><span>FROM QUES BANK</span> -->\n\t\t\t\t<!-- </button> -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.tips/survey.tips.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyTipsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_data_service__ = __webpack_require__("./src/app/routes/survey/edit/edit.data.service.ts");
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



var SurveyTipsComponent = (function () {
    function SurveyTipsComponent(editDataService, services) {
        this.editDataService = editDataService;
        this.services = services;
    }
    SurveyTipsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sid = this.editDataService.sId;
        this.surveyDesignData = this.editDataService.surveyDesignData;
        this.services.form.getSurveyData(this.sid).subscribe(function (data) {
        });
        setTimeout(function () {
            _this.surveyDesignData.displaySidebar = false;
        }, 1);
        this.editDataService.setTipsEnable(false);
    };
    SurveyTipsComponent.prototype.addFirstQues = function () {
        this.editDataService.addQuestionRelatedData.pageId = this.services.form.formObj.getPageFields()[0]._id;
        this.editDataService.addQuestionRelatedData.pageIndex = 0;
        this.editDataService.addQuestionRelatedData.addQuesRefId = null;
        this.editDataService.addQuestionRelatedData.addQuesRefIndex = 0;
        this.editDataService.surveyDesignData.presentAction = 'add-question';
    };
    return SurveyTipsComponent;
}());
SurveyTipsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-survey-tips',
        template: __webpack_require__("./src/app/routes/survey/edit/survey.tips/survey.tips.component.html"),
        styles: [__webpack_require__("./src/app/routes/survey/edit/survey.edit.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__edit_data_service__["a" /* EditDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__edit_data_service__["a" /* EditDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */]) === "function" && _b || Object])
], SurveyTipsComponent);

var _a, _b;
//# sourceMappingURL=survey.tips.component.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.tips/survey.tips.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipsModule", function() { return TipsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__survey_tips_component__ = __webpack_require__("./src/app/routes/survey/edit/survey.tips/survey.tips.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var surveyRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__survey_tips_component__["a" /* SurveyTipsComponent */] }
];
var TipsModule = (function () {
    function TipsModule() {
    }
    return TipsModule;
}());
TipsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* RouterModule */].forChild(surveyRoutes)
        ],
        exports: [],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__survey_tips_component__["a" /* SurveyTipsComponent */]
        ],
        providers: []
    })
], TipsModule);

//# sourceMappingURL=survey.tips.module.js.map

/***/ })

});
//# sourceMappingURL=survey.tips.module.chunk.js.map