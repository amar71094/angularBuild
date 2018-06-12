webpackJsonp(["common"],{

/***/ "./src/app/routes/survey/edit/edit.data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_questionTemplates_question_types_service__ = __webpack_require__("./src/app/shared/questionTemplates/question-types.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__ = __webpack_require__("./src/app/shared/services/services.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_constants_service__ = __webpack_require__("./src/app/routes/survey/edit/edit.constants.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditDataService = (function () {
    function EditDataService(questionTypesService, services, editConstants) {
        this.questionTypesService = questionTypesService;
        this.services = services;
        this.editConstants = editConstants;
        this.selectedQuesType = { type: '' };
        this.addQuestionRelatedData = {
            surId: '',
            pageId: '',
            pageIndex: '',
            addQuesRefId: '',
            addQuesRefIndex: '',
            updateQuesIndex: ''
        };
        this.surveyDesignData = {
            presentAction: '',
            quesNav: 'new',
            displaySidebar: true
        };
        this.tipsEnable = true;
        this.questionTypesJSON = this.questionTypesService.questionTypesJSON;
        this.selectedQuesType.type = Object.keys(this.questionTypesJSON)[0];
    }
    EditDataService.prototype.getSurveyData = function (sId) {
        return this.services.form.getSurveyData(this.sId);
    };
    EditDataService.prototype.getLogicType = function (str) {
        if (str == "compound") {
            return "Delayed Logic";
        }
        else if (str == "protractor") {
            return "Ticket Logic";
        }
        else if (str == "display") {
            return "Display Logic";
        }
        else if (str == "promoter") {
            return "Promoter Logic";
        }
        else if (str == "embed") {
            return "Embedded Logic";
        }
        else if (str == "skip") {
            return "Skip Logic";
        }
        return str;
    };
    EditDataService.prototype.setTipsEnable = function (tipsEnable) {
        this.tipsEnable = tipsEnable;
    };
    EditDataService.prototype.getTipsEnable = function () {
        return this.tipsEnable;
    };
    return EditDataService;
}());
EditDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_questionTemplates_question_types_service__["a" /* QuestionTypesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_questionTemplates_question_types_service__["a" /* QuestionTypesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_services_module__["a" /* SharedServices */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__edit_constants_service__["a" /* EditConstantsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__edit_constants_service__["a" /* EditConstantsService */]) === "function" && _c || Object])
], EditDataService);

var _a, _b, _c;
//# sourceMappingURL=edit.data.service.js.map

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.edit.component.scss":
/***/ (function(module, exports) {

module.exports = ".left-container {\n  display: inline-block;\n  width: 100%; }\n\n.side_bar_menu {\n  width: 80px;\n  display: inline-block;\n  position: fixed;\n  top: 60px; }\n\n.side_bar_ul {\n  list-style-type: none;\n  padding: 0;\n  background-color: #333A3E;\n  height: calc(100vh - 60px);\n  font-size: 12px;\n  font-family: 'Helvetica Neue Medium';\n  margin-bottom: 0; }\n\n.side_bar_ul > li {\n  text-align: center; }\n\n.side_bar_ul > li.active {\n  background-color: #21272C; }\n\n.side_bar_ul > li:not(:last-child) {\n  border-bottom: 1px solid #5c6772; }\n\n.side_bar_ul > li > a {\n  color: #ADB6BC;\n  width: 100%;\n  display: inline-block;\n  padding: 20px 0;\n  cursor: pointer; }\n\n.side_bar_ul > li > a:hover,\n.side_bar_ul > li > a:focus {\n  text-decoration: none; }\n\n.side_bar_ul > li .side_bar_ques {\n  display: inline-block;\n  background: url(/assets/images/editSurvey/q-deactive.svg);\n  background-repeat: no-repeat; }\n\n.side_bar_ul > li.active .side_bar_ques {\n  display: inline-block;\n  background: url(/assets/images/editSurvey/q.svg);\n  background-repeat: no-repeat; }\n\n.side_bar_ul > li .side_bar_theme {\n  display: inline-block;\n  background: url(/assets/images/editSurvey/theme.svg);\n  background-repeat: no-repeat; }\n\n.side_bar_ul > li.active .side_bar_theme {\n  display: inline-block;\n  background: url(/assets/images/editSurvey/theme-active.svg);\n  background-repeat: no-repeat; }\n\n.side_bar_ul > li .side_bar_settings {\n  display: inline-block;\n  background: url(/assets/images/editSurvey/settings.svg);\n  background-repeat: no-repeat; }\n\n.side_bar_ul > li.active .side_bar_settings {\n  display: inline-block;\n  background: url(/assets/images/editSurvey/settings-active.svg);\n  background-repeat: no-repeat; }\n\n.side_bar_ul > li .side_bar_advance {\n  display: inline-block;\n  background: url(/assets/images/editSurvey/advance.svg);\n  background-repeat: no-repeat; }\n\n.side_bar_ul > li.active .side_bar_advance {\n  display: inline-block;\n  background: url(/assets/images/editSurvey/advance-active.svg);\n  background-repeat: no-repeat; }\n\n.side_bar_ul .side_bar_ul_icons {\n  height: 22px;\n  width: 22px;\n  margin-bottom: 6px; }\n\n.inner-left-container {\n  display: inline-block;\n  vertical-align: top;\n  width: 303px;\n  border-right: 1px solid #C1BDBD;\n  height: calc(100vh - 60px);\n  margin-left: 80px;\n  top: 60px;\n  z-index: 3;\n  position: fixed; }\n\n.inner-left-broad-container {\n  display: inline-block;\n  vertical-align: top;\n  width: 387px;\n  border-right: 1px solid #C1BDBD;\n  height: calc(100vh - 60px);\n  margin-left: -4px;\n  position: fixed;\n  top: 60px;\n  z-index: 3; }\n\n/*-----------------------------------------------------------------------------------------------*/\n\n.tips_heading,\n.survey_flow_heading {\n  background-color: #f2f2f2;\n  padding: 10px 15px; }\n\n.tips_heading .ti-light-bulb {\n  margin-right: 10px;\n  margin-left: 2px; }\n\n.tips_content,\n.survey_flow_content {\n  padding: 15px;\n  overflow-y: auto;\n  height: calc(100vh - 102px); }\n\n.collapse_sur_flow {\n  height: 20px;\n  cursor: pointer; }\n\n.collapse_sur_flow_left {\n  margin-right: 7px;\n  height: 20px;\n  cursor: pointer; }\n\n.tips_div {\n  margin-bottom: 30px; }\n\n.tips_heading_content {\n  padding-bottom: 8px;\n  font-family: 'Helvetica Neue Medium'; }\n\n.tips_subcontent {\n  color: #898888; }\n\n.padding_rgt0 {\n  padding-right: 0; }\n\n.padding_top10 {\n  padding-top: 10px; }\n\n.survey_flow_content .sur_flow_page_ul {\n  list-style-type: none;\n  padding-left: 0; }\n\n.survey_flow_content .sur_flow_ques_ul {\n  list-style-type: none;\n  padding-left: 15px;\n  position: relative; }\n\n.survey_flow_content .sur_flow_page_li .first_pg_span {\n  border: 1px solid #bbb9ba;\n  width: 100%;\n  display: inline-block;\n  padding: 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  margin: 4px 0;\n  font-family: 'Helvetica Neue Medium';\n  position: relative;\n  cursor: pointer; }\n\n.survey_flow_content .sur_flow_page_li .first_pg_span.collapse:before {\n  content: '';\n  background: url(/assets/images/editSurvey/dropdown-arrow.svg);\n  background-repeat: no-repeat;\n  position: absolute;\n  right: -7px;\n  top: 0px;\n  height: 20px;\n  width: 20px;\n  background-size: 50%;\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg); }\n\n.survey_flow_content .sur_flow_page_li .first_pg_span.open:before {\n  content: '';\n  background: url(/assets/images/editSurvey/dropdown-arrow.svg);\n  background-repeat: no-repeat;\n  position: absolute;\n  right: -3px;\n  top: 12px;\n  height: 20px;\n  width: 20px;\n  background-size: 50%; }\n\n.survey_flow_content .sur_flow_page_li .page_num {\n  background-color: #333a3e;\n  color: white;\n  padding: 2px;\n  border-radius: 2px;\n  margin-right: 10px; }\n\n.survey_flow_content .sur_flow_page_li .page_title {\n  font-family: 'Helvetica Neue Bold';\n  vertical-align: middle; }\n\n.survey_flow_content .sur_flow_page_li .total_ques_count {\n  float: right;\n  margin-right: 18px; }\n\n.survey_flow_content .sur_flow_ques_li:last-child {\n  margin-bottom: 6px; }\n\n.survey_flow_content .sur_flow_ques_li {\n  position: relative; }\n\n.survey_flow_content .sur_flow_ques_li .first_ques_span {\n    border: 1px dotted #bbb9ba;\n    width: 100%;\n    display: inline-block;\n    padding: 6px;\n    border-radius: 4px;\n    font-size: 12px;\n    margin: 4px 0;\n    font-family: 'Helvetica Neue Medium';\n    cursor: pointer; }\n\n.survey_flow_content .sur_flow_ques_li .ques_icon {\n    border-right: 1px solid #bbb9ba;\n    padding: 0 6px 0 0;\n    margin-right: 3px; }\n\n.survey_flow_content .sur_flow_ques_li .ques_icon img {\n    height: 18px;\n    width: 26px; }\n\n.survey_flow_content .sur_flow_ques_li .ques_title {\n    vertical-align: middle; }\n\n.survey_flow_content .sur_flow_ques_li .logics_btn {\n    float: right;\n    background-color: #68c169;\n    border-radius: 50%;\n    height: 18px;\n    width: 18px;\n    padding: 0 6px;\n    color: white;\n    font-family: 'Helvetica Neue Bold';\n    cursor: pointer; }\n\n.survey_flow_content .sur_flow_ques_ul > .sur_flow_ques_li:first-child {\n  margin-top: 5px; }\n\n.survey_flow_content .sur_flow_ques_ul > .sur_flow_ques_li:first-child:before {\n  content: '';\n  height: 10px;\n  width: 10px;\n  position: absolute;\n  right: 18px;\n  top: -1px;\n  border-top: 1px dotted #bbb9ba;\n  border-right: 1px dotted #bbb9ba;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  background: white; }\n\n.survey_flow_content .sur_flow_ques_ul .sur_flow_ques_li:not(:first-child):before {\n  content: '';\n  height: 8px;\n  width: 8px;\n  position: absolute;\n  right: 23px;\n  top: -4px;\n  border-right: 1px dotted #bbb9ba;\n  background: white; }\n\n::ng-deep .sur_flow_ques_li .ques_title p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 145px;\n  white-space: nowrap;\n  cursor: pointer; }\n\n::ng-deep .sur_flow_page_li .page_title p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 118px;\n  white-space: nowrap; }\n\n/*------------------------------------------------------------------------------------------------*/\n\n.ques_from {\n  padding: 18px 10px;\n  border-bottom: 1px solid #E8E6E6;\n  text-align: center;\n  text-align: -webkit-center;\n  font-family: 'Helvetica Neue Medium'; }\n\n.ques_nav {\n  border: 1px solid #2392ED;\n  border-radius: 4px;\n  display: table;\n  font-size: 12px;\n  width: 100%; }\n\n.ques_nav > .inner_ques_nav {\n  padding: 9px 11px;\n  display: table-cell;\n  width: 50%;\n  cursor: pointer;\n  font-weight: 500; }\n\n.ques_nav > .inner_ques_nav input[type=radio] {\n  display: none; }\n\n.ques_nav > .inner_ques_nav:not(:last-child) {\n  border-right: 1px solid #2392ED; }\n\n.ques_nav > .inner_ques_nav.active {\n  color: white;\n  background-color: #2392ED; }\n\n.ques_types_div {\n  overflow-y: auto;\n  height: calc(100% - 74px);\n  font-size: 12px;\n  font-family: 'Helvetica Neue Medium'; }\n\n.ques_types_row {\n  border-bottom: 1px solid #E8E6E6;\n  height: 89px;\n  display: table;\n  width: 100%; }\n\n.ques_types {\n  display: table-cell;\n  width: 33%;\n  padding: 0 10px;\n  text-align: center;\n  height: 100%;\n  vertical-align: top;\n  line-height: 16px;\n  cursor: pointer;\n  color: #494949; }\n\n.ques_types:not(:last-child) {\n  border-right: 1px solid #E8E6E6; }\n\n.ques_types:hover {\n  color: #2392ED;\n  -webkit-box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.11);\n          box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.11); }\n\n.ques_type_icon {\n  padding: 15px 0 10px 0; }\n\n.ques_type_icon > img {\n  height: 20px; }\n\n.container-overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 2;\n  background-color: rgba(0, 0, 0, 0.25); }\n\n/*-------------------------------------------------------------------------------------------*/\n\n.custom_input_line {\n  width: 100%;\n  border: 0;\n  border-bottom: 1px solid #bebfbf; }\n\n.custom_checkbox_grp {\n  display: inline-block; }\n\n.custom_checkbox_grp input[type=checkbox] {\n    display: none; }\n\n.custom_checkbox_grp .custom_checkbox_txt {\n    cursor: pointer;\n    font-size: 12px;\n    color: #494949;\n    vertical-align: top;\n    font-weight: 500;\n    font-family: 'Helvetica Neue Medium'; }\n\n.custom_checkbox_grp input[type=checkbox] + .custom_checkbox_txt {\n    padding-left: 20px; }\n\n.custom_checkbox_grp input[type=checkbox] + .custom_checkbox_txt:before {\n    content: '';\n    background: url(/assets/images/editSurvey/uncheck.svg);\n    background-repeat: no-repeat;\n    height: 16px;\n    width: 16px;\n    position: absolute;\n    margin-left: -20px;\n    background-size: 90%; }\n\n.custom_checkbox_grp input[type=checkbox]:checked + .custom_checkbox_txt:before {\n    content: '';\n    background: url(/assets/images/editSurvey/check.svg);\n    background-repeat: no-repeat;\n    height: 16px;\n    width: 16px;\n    position: absolute;\n    margin-left: -20px;\n    background-size: 90%; }\n\n.custom_checkbox_grp input[type=checkbox]:disabled + .custom_checkbox_txt:before {\n    content: '';\n    background: url(/assets/images/editSurvey/disable-uncheck.svg);\n    background-repeat: no-repeat;\n    height: 16px;\n    width: 16px;\n    position: absolute;\n    background-size: 90%; }\n\n.custom_checkbox_grp input[type=checkbox]:checked:disabled + .custom_checkbox_txt:before {\n    content: '';\n    background: url(/assets/images/editSurvey/disable-check.svg);\n    background-repeat: no-repeat;\n    height: 16px;\n    width: 16px;\n    position: absolute;\n    background-size: 90%; }\n\n.custom_checkbox_grp input[type=checkbox]:disabled + .custom_checkbox_txt {\n    cursor: not-allowed; }\n\n.custom_radio_grp {\n  margin-right: 7px;\n  display: inline-block; }\n\n.custom_radio_grp input[type=radio] {\n    display: none; }\n\n.custom_radio_grp .custom_radio_txt {\n    cursor: pointer; }\n\n.custom_radio_grp input[type=radio] + .custom_radio_txt {\n    padding-left: 20px; }\n\n.custom_radio_grp input[type=radio] + .custom_radio_txt:before {\n    content: '';\n    background: url(/assets/images/editSurvey/q-radio.svg);\n    background-repeat: no-repeat;\n    height: 16px;\n    width: 16px;\n    position: absolute;\n    margin-left: -20px;\n    background-size: 90%; }\n\n.custom_radio_grp input[type=radio]:checked + .custom_radio_txt:before {\n    content: '';\n    background: url(/assets/images/editSurvey/radio-active.svg);\n    background-repeat: no-repeat;\n    height: 16px;\n    width: 16px;\n    position: absolute;\n    margin-left: -20px;\n    background-size: 90%; }\n\n.custom_radio_in_checkbox_grp {\n  margin-right: 7px; }\n\n.custom_radio_in_checkbox_grp input[type=checkbox] {\n    display: none; }\n\n.custom_radio_in_checkbox_grp .custom_radio_in_checkbox_txt {\n    margin-left: 20px;\n    cursor: pointer;\n    margin-right: 15px; }\n\n.custom_radio_in_checkbox_grp input[type=checkbox] + .custom_radio_in_checkbox_txt:before {\n    content: '';\n    background: url(/assets/images/editSurvey/q-radio.svg);\n    background-repeat: no-repeat;\n    height: 16px;\n    width: 16px;\n    position: absolute;\n    margin-left: -20px;\n    background-size: 90%; }\n\n.custom_radio_in_checkbox_grp input[type=checkbox]:checked + .custom_radio_in_checkbox_txt:before {\n    content: '';\n    background: url(/assets/images/editSurvey/radio-active.svg);\n    background-repeat: no-repeat;\n    height: 16px;\n    width: 16px;\n    position: absolute;\n    margin-left: -20px;\n    background-size: 90%; }\n\n.switch {\n  position: relative;\n  width: 36px;\n  height: 16px;\n  border-radius: 15px;\n  background-color: #D0D0D0; }\n\n.switch .on_off_custom {\n  display: none; }\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transition: .4s;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  background-color: white;\n  left: 2px;\n  bottom: 2px;\n  -webkit-transition: .4s;\n  transition: .4s; }\n\n.on_off_custom:checked + .slider {\n  background-color: #75B868; }\n\n.on_off_custom:checked + .slider:before {\n  -webkit-transform: translateX(16px);\n  transform: translateX(16px); }\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n.on_off_custom:checked + .slider.round:before {\n  left: 5px; }\n\n.custom_select {\n  width: 100%;\n  height: 33px;\n  background-color: white;\n  border: 1px solid #B3B1B1;\n  border-radius: 4px;\n  font-size: 12px;\n  padding: 4px 8px;\n  background: url(/assets/images/editSurvey/dropdown-arrow.svg) no-repeat white;\n  background-size: 14px;\n  background-position: right 10px center;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.custom_select_line {\n  width: 100%;\n  height: 33px;\n  background-color: white;\n  border: 0;\n  border-bottom: 1px solid #B3B1B1;\n  background: url(/assets/images/editSurvey/dropdown-arrow.svg) no-repeat white;\n  background-size: 14px;\n  background-position: right 10px center;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n\n.custom_select_line:focus {\n  outline: none; }\n\n.custom_textbox {\n  width: 100%;\n  height: 33px;\n  background-color: white;\n  border: 1px solid #B3B1B1;\n  border-radius: 4px;\n  font-size: 12px;\n  padding: 4px 8px; }\n\n.small_custom_input {\n  border: 0;\n  border-bottom: 1px solid #B3B1B1;\n  font-size: 12px; }\n\n.small_custom_input:focus {\n  outline: none; }\n\n/*-----------------------------------------------------------------------------------------------------*/\n\n.advance_options {\n  padding: 9px; }\n\n.advance_btn_div {\n  display: inline-block; }\n\n.advance_btns {\n  height: 114px;\n  padding: 7px;\n  width: 10px;\n  vertical-align: top;\n  width: 124px;\n  border-radius: 4px;\n  border: 1px solid #333a3e;\n  background-color: white;\n  margin: 15px 8px;\n  font-size: 12px;\n  font-family: 'Helvetica Neue Medium'; }\n\n.advance_btns.active {\n  color: white;\n  background-color: #333a3e; }\n\n.rgt-padding {\n  padding: 40px 25px; }\n\n.right-container {\n  display: inline-block;\n  background-color: #e7e7e7;\n  width: calc(100% - 383px);\n  vertical-align: top;\n  margin-left: 383px;\n  position: relative;\n  min-height: calc(100vh - 60px); }\n\n.main_question_area {\n  width: 100%;\n  min-height: calc(100vh - 140px);\n  padding: 0 50px; }\n\n.main_question_area > .action {\n  padding: 40px 5px;\n  text-align: right;\n  font-family: 'Helvetica Neue Medium'; }\n\n.div_with_no_questions {\n  padding: calc(27% - 100px) 10%;\n  background-color: white;\n  min-height: 360px;\n  width: 100%;\n  text-align: center;\n  border-radius: 4px;\n  /* margin-top: calc(calc(100vh - (60px + 360px))/2); */\n  /* margin-left: calc(calc(100% - 750px)/2); */\n  height: calc(80% - 180px); }\n\n.dark_text {\n  color: #4b4b4b;\n  font-size: 16px;\n  font-family: 'Helvetica Neue Medium'; }\n\n.light_text {\n  color: #8d8d8d; }\n\n.first_no_ques_div {\n  /*padding-top: 100px;*/ }\n\n.second_no_ques_div {\n  padding-top: 5px;\n  padding-bottom: 30px; }\n\n.btn_ques_from_scratch {\n  background-color: #37d06a;\n  color: white;\n  width: 230px;\n  padding: 10px 0;\n  margin: 5px;\n  font-size: 12px; }\n\n.btn_ques_from_bank {\n  background-color: white;\n  color: #37d06a;\n  width: 230px;\n  border: 1px solid #37d06a;\n  padding: 10px 0;\n  margin: 5px;\n  font-size: 12px; }\n\n.btn_make_ques_plus {\n  margin-right: 10px; }\n\n::ng-deep .modal-header {\n  border: 0;\n  padding: 15px 15px 5px 15px;\n  font-family: 'Helvetica Neue Medium'; }\n\n::ng-deep .modal-title {\n  padding: 20px 30px 0 30px; }\n\n::ng-deep .modal_sub_title {\n  color: #a5a5a5; }\n\n::ng-deep .modal_inner_body {\n  padding: 10px 30px; }\n\n::ng-deep .modal_btns {\n  text-align: right;\n  margin-top: 25px;\n  margin-bottom: 20px; }\n\n::ng-deep .modal_add_btn {\n  color: white;\n  background-color: #2392ED;\n  padding: 10px 30px;\n  font-family: 'Helvetica Neue Medium';\n  -webkit-box-shadow: -1px 6px 14px 0 rgba(10, 115, 186, 0.46);\n          box-shadow: -1px 6px 14px 0 rgba(10, 115, 186, 0.46); }\n\n::ng-deep .modal_cancel_btn {\n  color: #2392ED;\n  border: 1px solid #2392ED;\n  background-color: white;\n  padding: 10px 30px;\n  margin-right: 6px;\n  font-family: 'Helvetica Neue Medium';\n  -webkit-box-shadow: -1px 6px 14px 0 rgba(199, 199, 199, 0.46);\n          box-shadow: -1px 6px 14px 0 rgba(199, 199, 199, 0.46); }\n\n.tab_radio_inp {\n  border: 1px solid #2392ED;\n  border-radius: 4px;\n  display: table;\n  font-size: 12px;\n  width: 100%;\n  text-align: center;\n  font-family: 'Helvetica Neue Medium'; }\n\n.tab_radio_inp > .inner_tab_radio_inp {\n  padding: 9px 11px;\n  display: table-cell;\n  cursor: pointer;\n  font-weight: 500; }\n\n.tab_radio_inp > .inner_tab_radio_inp input[type=radio] {\n  display: none; }\n\n.tab_radio_inp > .inner_tab_radio_inp:not(:last-child) {\n  border-right: 1px solid #2392ED; }\n\n.tab_radio_inp > .inner_tab_radio_inp.active {\n  color: white;\n  background-color: #2392ED; }\n"

/***/ }),

/***/ "./src/app/routes/survey/edit/survey.main-list/logo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoService; });
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


var LogoService = (function () {
    function LogoService(services) {
        this.services = services;
        this.logoDetails = {
            src: ''
        };
    }
    LogoService.prototype.setLogoOnLoad = function (sid, formObj, size) {
        if (formObj.logo.hasLogo) {
            this.logoDetails.src = this.services.constants.apiUrl + 'v1/survey/' + sid + '/logo?size=' + (size || formObj.logo.size) + '&t=' + new Date().getTime();
        }
    };
    LogoService.prototype.removeLogo = function (sid, formObj) {
        this.services.resource.removeLogo(sid).subscribe(function (data) {
            formObj.logo.hasLogo = 0;
        });
    };
    LogoService.prototype.logoUploadChange = function (sid, file, formObj) {
        var _this = this;
        var logoSrc = '';
        var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
        var ext = file.name.split('.').pop().toLowerCase();
        if (fileExtension.indexOf(ext) == -1) {
            this.services.alert({
                title: '<p class="sweetalert_title">Only formats are allowed : ' + fileExtension.join(',') + '</p>',
                text: "",
                type: 'warning',
            });
            return;
        }
        var bytesInMB = file.size / (1024 * 1024);
        if (bytesInMB > 1) {
            this.services.alert({
                title: '<p class="sweetalert_title">File size should be less than 1 MB</p>',
                text: "",
                type: 'warning',
            });
            return;
        }
        var resData = new FormData();
        resData.append('profile', file);
        this.services.resource.addLogo(sid, resData).subscribe(function (data) {
            logoSrc = window.location.protocol + '//' + window.location.hostname + ':9995/v1/survey/' + sid + '/logo?size=' + formObj.logo.size + '&t=' + new Date().getTime();
            formObj.logo.hasLogo = 1;
            _this.logoDetails.src = logoSrc;
        });
    };
    return LogoService;
}());
LogoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_services_module__["a" /* SharedServices */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_services_module__["a" /* SharedServices */]) === "function" && _a || Object])
], LogoService);

var _a;
//# sourceMappingURL=logo.service.js.map

/***/ })

});
//# sourceMappingURL=common.chunk.js.map