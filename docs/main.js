(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ngx-panels/src/lib/classes/panel-ref.class.ts":
/*!****************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/classes/panel-ref.class.ts ***!
  \****************************************************************/
/*! exports provided: PanelRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelRef", function() { return PanelRef; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var PanelRef = /** @class */ (function () {
    function PanelRef() {
        this.closeEnabledSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](true);
        this.onBeforeClose = function () { return true; };
    }
    PanelRef.prototype.setComponents = function (panelComponentRef, panelContainer) {
        this.panelCmpRef = panelComponentRef;
        this.panelContainer = panelContainer;
    };
    PanelRef.prototype.enableClose = function (canClose) {
        this.closeEnabledSubject.next(canClose);
    };
    PanelRef.prototype.close = function () {
        if (this.closeEnabledSubject.getValue()) {
            var continueClose = this.onBeforeClose();
            if (continueClose) {
                this.panelContainer.startClosingAnimation();
            }
        }
    };
    Object.defineProperty(PanelRef.prototype, "closeEnabled$", {
        get: function () {
            return this.closeEnabledSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    PanelRef.prototype.setData = function (data) {
        this.panelData = data;
    };
    Object.defineProperty(PanelRef.prototype, "data", {
        get: function () {
            return this.panelData;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelRef.prototype, "panelComponentRef", {
        get: function () {
            return this.panelCmpRef;
        },
        enumerable: true,
        configurable: true
    });
    return PanelRef;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/classes/stack.class.ts":
/*!************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/classes/stack.class.ts ***!
  \************************************************************/
/*! exports provided: Stack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stack", function() { return Stack; });
var Stack = /** @class */ (function () {
    function Stack() {
        this.elements = [];
    }
    Stack.prototype.pop = function () {
        return this.elements.pop();
    };
    Stack.prototype.peek = function () {
        return this.elements[this.elements.length - 1];
    };
    Stack.prototype.push = function (element) {
        this.elements.push(element);
    };
    Stack.prototype.size = function () {
        return this.elements.length;
    };
    Stack.prototype.empty = function () {
        this.elements = [];
    };
    Stack.prototype.getAll = function () {
        return this.elements.slice();
    };
    return Stack;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.html":
/*!*************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-panel-body__scroller\">\n    <div class=\"ngx-panel-body__content\" [class.ngx-panel-body__content--auto-padding]=\"autoPadding\">\n        <ng-content></ng-content>\n    </div>\n</div>\n"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.scss":
/*!*************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-grow: 1;\n  overflow-y: auto; }\n\n.ngx-panel-body__content--auto-padding {\n  padding: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWJvZHkvQzpcXGlubm92YXRpb25cXG5neC1wYW5lbHMvcHJvamVjdHNcXG5neC1wYW5lbHNcXHNyY1xcbGliXFxjb21wb25lbnRzXFxwYW5lbC1ib2R5XFxwYW5lbC1ib2R5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBWTtFQUNaLGlCQUFnQixFQUNuQjs7QUFJTztFQUNJLGNBQWEsRUFDaEIiLCJmaWxlIjoicHJvamVjdHMvbmd4LXBhbmVscy9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwtYm9keS9wYW5lbC1ib2R5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG46aG9zdCB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4ubmd4LXBhbmVsLWJvZHkge1xyXG4gICAgJl9fY29udGVudCB7XHJcbiAgICAgICAgJi0tYXV0by1wYWRkaW5nIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.ts":
/*!***********************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.ts ***!
  \***********************************************************************************/
/*! exports provided: PanelBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelBodyComponent", function() { return PanelBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelBodyComponent = /** @class */ (function () {
    function PanelBodyComponent() {
        this.autoPadding = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PanelBodyComponent.prototype, "autoPadding", void 0);
    PanelBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-panel-body',
            template: __webpack_require__(/*! ./panel-body.component.html */ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.html"),
            styles: [__webpack_require__(/*! ./panel-body.component.scss */ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], PanelBodyComponent);
    return PanelBodyComponent;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.html":
/*!***********************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-panel-container__main\"><div #panelContainer class=\"ngx-panel-container__panels\"></div></div>\n"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.scss":
/*!***********************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-panel-container__main {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 20; }\n\n.ngx-panel-container__panels {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: #ffffff;\n  display: flex;\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWNvbnRhaW5lci9DOlxcaW5ub3ZhdGlvblxcbmd4LXBhbmVscy9wcm9qZWN0c1xcbmd4LXBhbmVsc1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXHBhbmVsLWNvbnRhaW5lclxccGFuZWwtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmd4LXBhbmVscy9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwtY29udGFpbmVyL0M6XFxpbm5vdmF0aW9uXFxuZ3gtcGFuZWxzL3Byb2plY3RzXFxuZ3gtcGFuZWxzXFxzcmNcXHN0eWxlc1xcX3V0aWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0k7RUFDSSxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLE9BQU07RUFDTixTQUFRO0VBQ1IsVUFBUztFQUNULFlBQVcsRUFDZDs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sU0FBUTtFQUNSLFVBQVM7RUFDVCxRQUFPO0VBQ1Asb0JDZk87RURnQlAsY0FBYTtFQUNiLHVCQUFzQixFQUN6QiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtcGFuZWxzL3NyYy9saWIvY29tcG9uZW50cy9wYW5lbC1jb250YWluZXIvcGFuZWwtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvdXRpbHMnO1xyXG5cclxuLm5neC1wYW5lbC1jb250YWluZXIge1xyXG4gICAgJl9fbWFpbiB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDIwO1xyXG4gICAgfVxyXG5cclxuICAgICZfX3BhbmVscyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkd2hpdGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG4vLyBWWkMgQ09MT1IgUEFMRVRURVxyXG4vLyBQcmltYXJ5IENvbG9yc1xyXG4kcmVkOiAjZDUyYjFlO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGJsdWU6ICMwMDg4Y2U7XHJcbiRvcmFuZ2U6ICNlZDcwMDA7XHJcbiR5ZWxsb3c6ICNmZmJjM2Q7XHJcbiRncmVlbjogIzAwYWMzZTtcclxuXHJcbi8vIFNlY29uZGFyeSBDb2xvcnNcclxuJGNvb2wtZ3JheTogI2ZhZmFmYTtcclxuJGNvb2wtZ3JheS0xOiAjZjZmNmY2O1xyXG4kY29vbC1ncmF5LTI6ICNmMmYzZjM7XHJcbiRjb29sLWdyYXktMzogI2VjZWNlYztcclxuJGNvb2wtZ3JheS00OiAjZDhkYWRhO1xyXG4kY29vbC1ncmF5LTU6ICNiNWI5Yjk7XHJcbiRjb29sLWdyYXktNjogIzc0NzY3NjtcclxuJGNvb2wtZ3JheS03OiAjNTI1NDU0O1xyXG4kY29vbC1ncmF5LTg6ICMzMzMzMzM7XHJcbiRjb29sLWdyYXktOTogIzFhMWExYTtcclxuXHJcbi8vIFRlcnRpYXJ5IENvbG9yc1xyXG4kcmVkLWh1ZS0xOiAjZmRmNWY0O1xyXG4kcmVkLWh1ZS0yOiAjZTY1YjUxO1xyXG4kcmVkLWh1ZS0zOiAkcmVkO1xyXG4kcmVkLWh1ZS00OiAjYTgyMjE4O1xyXG4kcmVkLWh1ZS01OiAjN2MxOTExO1xyXG5cclxuJGJsdWUtaHVlLTE6ICNmMGZhZmY7XHJcbiRibHVlLWh1ZS0yOiAjNTdjNmZmO1xyXG4kYmx1ZS1odWUtMzogJGJsdWU7XHJcbiRibHVlLWh1ZS00OiAjMDA2NjliO1xyXG4kYmx1ZS1odWUtNTogIzAwNDU2ODtcclxuXHJcbiRvcmFuZ2UtaHVlLTE6ICNmZmY1ZWQ7XHJcbiRvcmFuZ2UtaHVlLTI6ICNmZmI3NzY7XHJcbiRvcmFuZ2UtaHVlLTM6ICRvcmFuZ2U7XHJcbiRvcmFuZ2UtaHVlLTQ6ICNjYjYwMDA7XHJcbiRvcmFuZ2UtaHVlLTU6ICM5ODQ4MDA7XHJcblxyXG4keWVsbG93LWh1ZS0xOiAjZmZmN2U3O1xyXG4keWVsbG93LWh1ZS0yOiAjZmZkMzgxO1xyXG4keWVsbG93LWh1ZS0zOiAkeWVsbG93O1xyXG4keWVsbG93LWh1ZS00OiAjZjhhMjAwO1xyXG4keWVsbG93LWh1ZS01OiAjYzU4MTAwO1xyXG5cclxuJGdyZWVuLWh1ZS0xOiAjZjBmZmY1O1xyXG4kZ3JlZW4taHVlLTI6ICM2YmU0Nzk7XHJcbiRncmVlbi1odWUtMzogJGdyZWVuO1xyXG4kZ3JlZW4taHVlLTQ6ICMwMDhhMzI7XHJcbiRncmVlbi1odWUtNTogIzAwNjgyNjtcclxuXHJcbi8vIHV0aWxpdHkgZnVuY3Rpb25zXHJcbkBtaXhpbiBzZWxlY3RhYmxlKCkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiByZWd1bGFyU2hhZG93KCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgkZ3JleS1odWUtMywwLjM2KTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MWRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDJweCAycHggMCByZ2JhKCRibGFjaywwLjEyKSwgMCAxcHggM3B4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MmRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xNCksIDAgM3B4IDRweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDFweCA1cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3czZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKCRibGFjaywwLjE0KSwgMCAzcHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xMiksIDAgMXB4IDhweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzRkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDRweCA1cHggMCByZ2JhKCRibGFjaywwLjEyKSwgMCAxcHggMTBweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzZkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKCRibGFjaywwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDNweCA1cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3c4ZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxMHB4IDFweCByZ2JhKCRibGFjaywwLjE0KSwgMCAzcHggMTRweCAzcHggcmdiYSgkYmxhY2ssMC4xMiksIDAgNHB4IDVweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzlkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOXB4IDEycHggMXB4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDNweCAxNnB4IDJweCByZ2JhKCRibGFjaywwLjEyKSwgMCA1cHggNnB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MTJkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxN3B4IDJweCByZ2JhKCRibGFjaywwLjE0KSwgMCA1cHggMjJweCA0cHggcmdiYSgkYmxhY2ssMC4xMiksIDAgN3B4IDhweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzE2ZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDE2cHggMjRweCAycHggcmdiYSgkYmxhY2ssMC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoJGJsYWNrLDAuMTIpLCAwIDhweCAxMHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MjRkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKCRibGFjaywwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgkYmxhY2ssMC4xMiksIDAgMTFweCAxNXB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGVycm9yU2hhZG93KCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgkcmVkLCAuMzUpLCAwIDFweCA0cHggMCByZ2JhKCRyZWQsIC41Mik7XHJcbn0iXX0= */"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.ts":
/*!*********************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PanelContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelContainerComponent", function() { return PanelContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_stack_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/stack.class */ "./projects/ngx-panels/src/lib/classes/stack.class.ts");
/* harmony import */ var _services_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/panel.service */ "./projects/ngx-panels/src/lib/services/panel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PanelContainerComponent = /** @class */ (function () {
    function PanelContainerComponent(panelService) {
        this.panelService = panelService;
        this.panels = new _classes_stack_class__WEBPACK_IMPORTED_MODULE_1__["Stack"]();
    }
    PanelContainerComponent.prototype.ngOnInit = function () {
        this.panelService.setContainer(this);
    };
    PanelContainerComponent.prototype.startClosingAnimation = function () {
        var panelRef = this.panels.peek();
        panelRef.panelComponentRef.instance.startCloseAnimation();
    };
    PanelContainerComponent.prototype.destroyTopPanel = function () {
        var panelRef = this.panels.pop();
        panelRef.panelComponentRef.destroy();
    };
    PanelContainerComponent.prototype.addTopPanel = function (panelRef) {
        this.panels.push(panelRef);
        this.viewContainer.insert(panelRef.panelComponentRef.hostView);
    };
    PanelContainerComponent.prototype.destroyAll = function () {
        this.panels.getAll().forEach(function (panel) {
            panel.panelComponentRef.destroy();
        });
        this.panels.empty();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('panelContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], PanelContainerComponent.prototype, "viewContainer", void 0);
    PanelContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-panel-container',
            template: __webpack_require__(/*! ./panel-container.component.html */ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.html"),
            styles: [__webpack_require__(/*! ./panel-container.component.scss */ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_panel_service__WEBPACK_IMPORTED_MODULE_2__["PanelService"]])
    ], PanelContainerComponent);
    return PanelContainerComponent;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.html":
/*!*****************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-panel-footer__main\" [class.ngx-panel-footer__main--auto-padding]=\"autoPadding\">\n    <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.scss":
/*!*****************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-shrink: 0; }\n\n.ngx-panel-footer__main {\n  border-top: 1px solid #d8dada; }\n\n.ngx-panel-footer__main--auto-padding {\n    padding: 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWZvb3Rlci9DOlxcaW5ub3ZhdGlvblxcbmd4LXBhbmVscy9wcm9qZWN0c1xcbmd4LXBhbmVsc1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXHBhbmVsLWZvb3RlclxccGFuZWwtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmd4LXBhbmVscy9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwtZm9vdGVyL0M6XFxpbm5vdmF0aW9uXFxuZ3gtcGFuZWxzL3Byb2plY3RzXFxuZ3gtcGFuZWxzXFxzcmNcXHN0eWxlc1xcX3V0aWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxlQUFjLEVBQ2pCOztBQUdHO0VBQ0ksOEJDTWEsRUREaEI7O0FBSEc7SUFDSSxjQUFhLEVBQ2hCIiwiZmlsZSI6InByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWZvb3Rlci9wYW5lbC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBpbXBvcnQgJy4uLy4uLy4uLy9zdHlsZXMvdXRpbHMnO1xyXG5cclxuOmhvc3Qge1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5uZ3gtcGFuZWwtZm9vdGVyIHtcclxuICAgICZfX21haW4ge1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkY29vbC1ncmF5LTQ7XHJcblxyXG4gICAgICAgICYtLWF1dG8tcGFkZGluZyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG4vLyBWWkMgQ09MT1IgUEFMRVRURVxyXG4vLyBQcmltYXJ5IENvbG9yc1xyXG4kcmVkOiAjZDUyYjFlO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGJsdWU6ICMwMDg4Y2U7XHJcbiRvcmFuZ2U6ICNlZDcwMDA7XHJcbiR5ZWxsb3c6ICNmZmJjM2Q7XHJcbiRncmVlbjogIzAwYWMzZTtcclxuXHJcbi8vIFNlY29uZGFyeSBDb2xvcnNcclxuJGNvb2wtZ3JheTogI2ZhZmFmYTtcclxuJGNvb2wtZ3JheS0xOiAjZjZmNmY2O1xyXG4kY29vbC1ncmF5LTI6ICNmMmYzZjM7XHJcbiRjb29sLWdyYXktMzogI2VjZWNlYztcclxuJGNvb2wtZ3JheS00OiAjZDhkYWRhO1xyXG4kY29vbC1ncmF5LTU6ICNiNWI5Yjk7XHJcbiRjb29sLWdyYXktNjogIzc0NzY3NjtcclxuJGNvb2wtZ3JheS03OiAjNTI1NDU0O1xyXG4kY29vbC1ncmF5LTg6ICMzMzMzMzM7XHJcbiRjb29sLWdyYXktOTogIzFhMWExYTtcclxuXHJcbi8vIFRlcnRpYXJ5IENvbG9yc1xyXG4kcmVkLWh1ZS0xOiAjZmRmNWY0O1xyXG4kcmVkLWh1ZS0yOiAjZTY1YjUxO1xyXG4kcmVkLWh1ZS0zOiAkcmVkO1xyXG4kcmVkLWh1ZS00OiAjYTgyMjE4O1xyXG4kcmVkLWh1ZS01OiAjN2MxOTExO1xyXG5cclxuJGJsdWUtaHVlLTE6ICNmMGZhZmY7XHJcbiRibHVlLWh1ZS0yOiAjNTdjNmZmO1xyXG4kYmx1ZS1odWUtMzogJGJsdWU7XHJcbiRibHVlLWh1ZS00OiAjMDA2NjliO1xyXG4kYmx1ZS1odWUtNTogIzAwNDU2ODtcclxuXHJcbiRvcmFuZ2UtaHVlLTE6ICNmZmY1ZWQ7XHJcbiRvcmFuZ2UtaHVlLTI6ICNmZmI3NzY7XHJcbiRvcmFuZ2UtaHVlLTM6ICRvcmFuZ2U7XHJcbiRvcmFuZ2UtaHVlLTQ6ICNjYjYwMDA7XHJcbiRvcmFuZ2UtaHVlLTU6ICM5ODQ4MDA7XHJcblxyXG4keWVsbG93LWh1ZS0xOiAjZmZmN2U3O1xyXG4keWVsbG93LWh1ZS0yOiAjZmZkMzgxO1xyXG4keWVsbG93LWh1ZS0zOiAkeWVsbG93O1xyXG4keWVsbG93LWh1ZS00OiAjZjhhMjAwO1xyXG4keWVsbG93LWh1ZS01OiAjYzU4MTAwO1xyXG5cclxuJGdyZWVuLWh1ZS0xOiAjZjBmZmY1O1xyXG4kZ3JlZW4taHVlLTI6ICM2YmU0Nzk7XHJcbiRncmVlbi1odWUtMzogJGdyZWVuO1xyXG4kZ3JlZW4taHVlLTQ6ICMwMDhhMzI7XHJcbiRncmVlbi1odWUtNTogIzAwNjgyNjtcclxuXHJcbi8vIHV0aWxpdHkgZnVuY3Rpb25zXHJcbkBtaXhpbiBzZWxlY3RhYmxlKCkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiByZWd1bGFyU2hhZG93KCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgkZ3JleS1odWUtMywwLjM2KTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MWRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDJweCAycHggMCByZ2JhKCRibGFjaywwLjEyKSwgMCAxcHggM3B4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MmRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xNCksIDAgM3B4IDRweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDFweCA1cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3czZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKCRibGFjaywwLjE0KSwgMCAzcHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xMiksIDAgMXB4IDhweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzRkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDRweCA1cHggMCByZ2JhKCRibGFjaywwLjEyKSwgMCAxcHggMTBweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzZkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKCRibGFjaywwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDNweCA1cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3c4ZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxMHB4IDFweCByZ2JhKCRibGFjaywwLjE0KSwgMCAzcHggMTRweCAzcHggcmdiYSgkYmxhY2ssMC4xMiksIDAgNHB4IDVweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzlkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOXB4IDEycHggMXB4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDNweCAxNnB4IDJweCByZ2JhKCRibGFjaywwLjEyKSwgMCA1cHggNnB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MTJkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxN3B4IDJweCByZ2JhKCRibGFjaywwLjE0KSwgMCA1cHggMjJweCA0cHggcmdiYSgkYmxhY2ssMC4xMiksIDAgN3B4IDhweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzE2ZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDE2cHggMjRweCAycHggcmdiYSgkYmxhY2ssMC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoJGJsYWNrLDAuMTIpLCAwIDhweCAxMHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MjRkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKCRibGFjaywwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgkYmxhY2ssMC4xMiksIDAgMTFweCAxNXB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGVycm9yU2hhZG93KCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgkcmVkLCAuMzUpLCAwIDFweCA0cHggMCByZ2JhKCRyZWQsIC41Mik7XHJcbn0iXX0= */"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.ts":
/*!***************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PanelFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelFooterComponent", function() { return PanelFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelFooterComponent = /** @class */ (function () {
    function PanelFooterComponent() {
        this.autoPadding = true;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PanelFooterComponent.prototype, "autoPadding", void 0);
    PanelFooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-panel-footer',
            template: __webpack_require__(/*! ./panel-footer.component.html */ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.html"),
            styles: [__webpack_require__(/*! ./panel-footer.component.scss */ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], PanelFooterComponent);
    return PanelFooterComponent;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.html":
/*!*****************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-panel-header__main\" [class.ngx-panel-header__main--auto-padding]=\"autoPadding\">\n    <div class=\"ngx-panel-header__content\"><ng-content></ng-content></div>\n    <div\n        class=\"ngx-panel-header__close\"\n        [class.ngx-panel-header__close--disabled]=\"!(closeEnabled$ | async)\"\n        (click)=\"onCloseClick()\">\n        <svg width=\"14px\" height=\"14px\" viewBox=\"0 0 14 14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <defs>\n                <polygon id=\"path-1\" points=\"15 2.41 13.59 1 8 6.59 2.41 1 1 2.41 6.59 8 1 13.59 2.41 15 8 9.41 13.59 15 15 13.59 9.41 8\"></polygon>\n            </defs>\n            <g id=\"-\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                <g id=\"Panel/Rigth/Job-Preview\" transform=\"translate(-289.000000, -17.000000)\">\n                    <g id=\"Group-11\" transform=\"translate(0.000000, 16.000000)\">\n                        <g id=\"icons/close/16x16\" transform=\"translate(288.000000, 0.000000)\">\n                            <mask id=\"mask-2\" fill=\"white\">\n                                <use xlink:href=\"#path-1\"></use>\n                            </mask>\n                            <use id=\"Mask\" fill=\"#000000\" fill-rule=\"nonzero\" xlink:href=\"#path-1\"></use>\n                            <g id=\"Primary/Black\" mask=\"url(#mask-2)\" fill=\"#000000\" fill-rule=\"evenodd\">\n                                <g transform=\"translate(-17.000000, -17.000000)\" id=\"Colour_Black-#000000\">\n                                    <polygon points=\"0 0 50 0 50 50 0 50\"></polygon>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n    </div>\n</div>\n"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.scss":
/*!*****************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  flex-shrink: 0; }\n\n.ngx-panel-header__main {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  border-bottom: 1px solid #d8dada; }\n\n.ngx-panel-header__main--auto-padding {\n    padding: 16px; }\n\n.ngx-panel-header__header-content {\n  flex-grow: 1; }\n\n.ngx-panel-header__close {\n  margin-left: auto;\n  cursor: pointer;\n  width: 16px;\n  height: 16px; }\n\n.ngx-panel-header__close--disabled {\n    opacity: 0.3;\n    pointer-events: none;\n    cursor: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWhlYWRlci9DOlxcaW5ub3ZhdGlvblxcbmd4LXBhbmVscy9wcm9qZWN0c1xcbmd4LXBhbmVsc1xcc3JjXFxsaWJcXGNvbXBvbmVudHNcXHBhbmVsLWhlYWRlclxccGFuZWwtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmd4LXBhbmVscy9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwtaGVhZGVyL0M6XFxpbm5vdmF0aW9uXFxuZ3gtcGFuZWxzL3Byb2plY3RzXFxuZ3gtcGFuZWxzXFxzcmNcXHN0eWxlc1xcX3V0aWxzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxlQUFjLEVBQ2pCOztBQUdHO0VBQ0ksY0FBYTtFQUNiLDBCQUF5QjtFQUN6QixvQkFBbUI7RUFDbkIsaUNDR2EsRURFaEI7O0FBSEc7SUFDSSxjQUFhLEVBQ2hCOztBQUdMO0VBQ0ksYUFBWSxFQUNmOztBQUVEO0VBQ0ksa0JBQWlCO0VBQ2pCLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVksRUFPZjs7QUFMRztJQUNJLGFBQVk7SUFDWixxQkFBb0I7SUFDcEIsYUFBWSxFQUNmIiwiZmlsZSI6InByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsLWhlYWRlci9wYW5lbC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy91dGlscyc7XHJcblxyXG46aG9zdCB7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLm5neC1wYW5lbC1oZWFkZXIge1xyXG4gICAgJl9fbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb29sLWdyYXktNDtcclxuXHJcbiAgICAgICAgJi0tYXV0by1wYWRkaW5nIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJl9faGVhZGVyLWNvbnRlbnQge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuXHJcbiAgICAmX19jbG9zZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuXHJcbiAgICAgICAgJi0tZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjM7XHJcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIlxyXG4vLyBWWkMgQ09MT1IgUEFMRVRURVxyXG4vLyBQcmltYXJ5IENvbG9yc1xyXG4kcmVkOiAjZDUyYjFlO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGJsdWU6ICMwMDg4Y2U7XHJcbiRvcmFuZ2U6ICNlZDcwMDA7XHJcbiR5ZWxsb3c6ICNmZmJjM2Q7XHJcbiRncmVlbjogIzAwYWMzZTtcclxuXHJcbi8vIFNlY29uZGFyeSBDb2xvcnNcclxuJGNvb2wtZ3JheTogI2ZhZmFmYTtcclxuJGNvb2wtZ3JheS0xOiAjZjZmNmY2O1xyXG4kY29vbC1ncmF5LTI6ICNmMmYzZjM7XHJcbiRjb29sLWdyYXktMzogI2VjZWNlYztcclxuJGNvb2wtZ3JheS00OiAjZDhkYWRhO1xyXG4kY29vbC1ncmF5LTU6ICNiNWI5Yjk7XHJcbiRjb29sLWdyYXktNjogIzc0NzY3NjtcclxuJGNvb2wtZ3JheS03OiAjNTI1NDU0O1xyXG4kY29vbC1ncmF5LTg6ICMzMzMzMzM7XHJcbiRjb29sLWdyYXktOTogIzFhMWExYTtcclxuXHJcbi8vIFRlcnRpYXJ5IENvbG9yc1xyXG4kcmVkLWh1ZS0xOiAjZmRmNWY0O1xyXG4kcmVkLWh1ZS0yOiAjZTY1YjUxO1xyXG4kcmVkLWh1ZS0zOiAkcmVkO1xyXG4kcmVkLWh1ZS00OiAjYTgyMjE4O1xyXG4kcmVkLWh1ZS01OiAjN2MxOTExO1xyXG5cclxuJGJsdWUtaHVlLTE6ICNmMGZhZmY7XHJcbiRibHVlLWh1ZS0yOiAjNTdjNmZmO1xyXG4kYmx1ZS1odWUtMzogJGJsdWU7XHJcbiRibHVlLWh1ZS00OiAjMDA2NjliO1xyXG4kYmx1ZS1odWUtNTogIzAwNDU2ODtcclxuXHJcbiRvcmFuZ2UtaHVlLTE6ICNmZmY1ZWQ7XHJcbiRvcmFuZ2UtaHVlLTI6ICNmZmI3NzY7XHJcbiRvcmFuZ2UtaHVlLTM6ICRvcmFuZ2U7XHJcbiRvcmFuZ2UtaHVlLTQ6ICNjYjYwMDA7XHJcbiRvcmFuZ2UtaHVlLTU6ICM5ODQ4MDA7XHJcblxyXG4keWVsbG93LWh1ZS0xOiAjZmZmN2U3O1xyXG4keWVsbG93LWh1ZS0yOiAjZmZkMzgxO1xyXG4keWVsbG93LWh1ZS0zOiAkeWVsbG93O1xyXG4keWVsbG93LWh1ZS00OiAjZjhhMjAwO1xyXG4keWVsbG93LWh1ZS01OiAjYzU4MTAwO1xyXG5cclxuJGdyZWVuLWh1ZS0xOiAjZjBmZmY1O1xyXG4kZ3JlZW4taHVlLTI6ICM2YmU0Nzk7XHJcbiRncmVlbi1odWUtMzogJGdyZWVuO1xyXG4kZ3JlZW4taHVlLTQ6ICMwMDhhMzI7XHJcbiRncmVlbi1odWUtNTogIzAwNjgyNjtcclxuXHJcbi8vIHV0aWxpdHkgZnVuY3Rpb25zXHJcbkBtaXhpbiBzZWxlY3RhYmxlKCkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiByZWd1bGFyU2hhZG93KCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgkZ3JleS1odWUtMywwLjM2KTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MWRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDJweCAycHggMCByZ2JhKCRibGFjaywwLjEyKSwgMCAxcHggM3B4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MmRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xNCksIDAgM3B4IDRweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDFweCA1cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3czZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKCRibGFjaywwLjE0KSwgMCAzcHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xMiksIDAgMXB4IDhweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzRkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDRweCA1cHggMCByZ2JhKCRibGFjaywwLjEyKSwgMCAxcHggMTBweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzZkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKCRibGFjaywwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDNweCA1cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3c4ZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxMHB4IDFweCByZ2JhKCRibGFjaywwLjE0KSwgMCAzcHggMTRweCAzcHggcmdiYSgkYmxhY2ssMC4xMiksIDAgNHB4IDVweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzlkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOXB4IDEycHggMXB4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDNweCAxNnB4IDJweCByZ2JhKCRibGFjaywwLjEyKSwgMCA1cHggNnB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MTJkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxN3B4IDJweCByZ2JhKCRibGFjaywwLjE0KSwgMCA1cHggMjJweCA0cHggcmdiYSgkYmxhY2ssMC4xMiksIDAgN3B4IDhweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzE2ZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDE2cHggMjRweCAycHggcmdiYSgkYmxhY2ssMC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoJGJsYWNrLDAuMTIpLCAwIDhweCAxMHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MjRkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKCRibGFjaywwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgkYmxhY2ssMC4xMiksIDAgMTFweCAxNXB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGVycm9yU2hhZG93KCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgkcmVkLCAuMzUpLCAwIDFweCA0cHggMCByZ2JhKCRyZWQsIC41Mik7XHJcbn0iXX0= */"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.ts":
/*!***************************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PanelHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelHeaderComponent", function() { return PanelHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/panel-ref.class */ "./projects/ngx-panels/src/lib/classes/panel-ref.class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelHeaderComponent = /** @class */ (function () {
    function PanelHeaderComponent(panelRef) {
        this.panelRef = panelRef;
        this.autoPadding = true;
    }
    PanelHeaderComponent.prototype.ngOnInit = function () {
        this.closeEnabled$ = this.panelRef.closeEnabled$;
    };
    PanelHeaderComponent.prototype.onCloseClick = function () {
        this.panelRef.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PanelHeaderComponent.prototype, "autoPadding", void 0);
    PanelHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-panel-header',
            template: __webpack_require__(/*! ./panel-header.component.html */ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.html"),
            styles: [__webpack_require__(/*! ./panel-header.component.scss */ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.scss")]
        }),
        __metadata("design:paramtypes", [_classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_1__["PanelRef"]])
    ], PanelHeaderComponent);
    return PanelHeaderComponent;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel/panel.component.html":
/*!***************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel/panel.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-panel__main\" [@panelState]=\"panelState\" (@panelState.done)=\"onAnimationEvent($event)\">\n    <div class=\"ngx-panel__content\" #contentContainer></div>\n</div>\n"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel/panel.component.scss":
/*!***************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel/panel.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ngx-panel__main {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 320px;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14), 0 4px 5px 0 rgba(0, 0, 0, 0.12), 0 1px 10px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  background-color: #ffffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1wYW5lbHMvc3JjL2xpYi9jb21wb25lbnRzL3BhbmVsL0M6XFxpbm5vdmF0aW9uXFxuZ3gtcGFuZWxzL3Byb2plY3RzXFxuZ3gtcGFuZWxzXFxzcmNcXGxpYlxcY29tcG9uZW50c1xccGFuZWxcXHBhbmVsLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmd4LXBhbmVscy9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwvQzpcXGlubm92YXRpb25cXG5neC1wYW5lbHMvcHJvamVjdHNcXG5neC1wYW5lbHNcXHNyY1xcc3R5bGVzXFxfdXRpbHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLSTtFQUNJLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sVUFBUztFQUNULFNBQVE7RUFDUixhQUFZO0VBQ1osb0NBQTJCO1VBQTNCLDRCQUEyQjtFQ2tFL0IsOEdBekVXO0VEU1AsbUJBQWtCO0VBQ2xCLDBCQ1RPLEVEVVYiLCJmaWxlIjoicHJvamVjdHMvbmd4LXBhbmVscy9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy91dGlscyc7XHJcblxyXG4ubmd4LXBhbmVsIHtcclxuICAgICZfX21haW4ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAzMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgQGluY2x1ZGUgaG92ZXJTaGFkb3c0ZHAoKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xyXG4gICAgfVxyXG59XHJcbiIsIlxyXG4vLyBWWkMgQ09MT1IgUEFMRVRURVxyXG4vLyBQcmltYXJ5IENvbG9yc1xyXG4kcmVkOiAjZDUyYjFlO1xyXG4kYmxhY2s6ICMwMDAwMDA7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuJGJsdWU6ICMwMDg4Y2U7XHJcbiRvcmFuZ2U6ICNlZDcwMDA7XHJcbiR5ZWxsb3c6ICNmZmJjM2Q7XHJcbiRncmVlbjogIzAwYWMzZTtcclxuXHJcbi8vIFNlY29uZGFyeSBDb2xvcnNcclxuJGNvb2wtZ3JheTogI2ZhZmFmYTtcclxuJGNvb2wtZ3JheS0xOiAjZjZmNmY2O1xyXG4kY29vbC1ncmF5LTI6ICNmMmYzZjM7XHJcbiRjb29sLWdyYXktMzogI2VjZWNlYztcclxuJGNvb2wtZ3JheS00OiAjZDhkYWRhO1xyXG4kY29vbC1ncmF5LTU6ICNiNWI5Yjk7XHJcbiRjb29sLWdyYXktNjogIzc0NzY3NjtcclxuJGNvb2wtZ3JheS03OiAjNTI1NDU0O1xyXG4kY29vbC1ncmF5LTg6ICMzMzMzMzM7XHJcbiRjb29sLWdyYXktOTogIzFhMWExYTtcclxuXHJcbi8vIFRlcnRpYXJ5IENvbG9yc1xyXG4kcmVkLWh1ZS0xOiAjZmRmNWY0O1xyXG4kcmVkLWh1ZS0yOiAjZTY1YjUxO1xyXG4kcmVkLWh1ZS0zOiAkcmVkO1xyXG4kcmVkLWh1ZS00OiAjYTgyMjE4O1xyXG4kcmVkLWh1ZS01OiAjN2MxOTExO1xyXG5cclxuJGJsdWUtaHVlLTE6ICNmMGZhZmY7XHJcbiRibHVlLWh1ZS0yOiAjNTdjNmZmO1xyXG4kYmx1ZS1odWUtMzogJGJsdWU7XHJcbiRibHVlLWh1ZS00OiAjMDA2NjliO1xyXG4kYmx1ZS1odWUtNTogIzAwNDU2ODtcclxuXHJcbiRvcmFuZ2UtaHVlLTE6ICNmZmY1ZWQ7XHJcbiRvcmFuZ2UtaHVlLTI6ICNmZmI3NzY7XHJcbiRvcmFuZ2UtaHVlLTM6ICRvcmFuZ2U7XHJcbiRvcmFuZ2UtaHVlLTQ6ICNjYjYwMDA7XHJcbiRvcmFuZ2UtaHVlLTU6ICM5ODQ4MDA7XHJcblxyXG4keWVsbG93LWh1ZS0xOiAjZmZmN2U3O1xyXG4keWVsbG93LWh1ZS0yOiAjZmZkMzgxO1xyXG4keWVsbG93LWh1ZS0zOiAkeWVsbG93O1xyXG4keWVsbG93LWh1ZS00OiAjZjhhMjAwO1xyXG4keWVsbG93LWh1ZS01OiAjYzU4MTAwO1xyXG5cclxuJGdyZWVuLWh1ZS0xOiAjZjBmZmY1O1xyXG4kZ3JlZW4taHVlLTI6ICM2YmU0Nzk7XHJcbiRncmVlbi1odWUtMzogJGdyZWVuO1xyXG4kZ3JlZW4taHVlLTQ6ICMwMDhhMzI7XHJcbiRncmVlbi1odWUtNTogIzAwNjgyNjtcclxuXHJcbi8vIHV0aWxpdHkgZnVuY3Rpb25zXHJcbkBtaXhpbiBzZWxlY3RhYmxlKCkge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbkBtaXhpbiByZWd1bGFyU2hhZG93KCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgkZ3JleS1odWUtMywwLjM2KTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MWRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDJweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDJweCAycHggMCByZ2JhKCRibGFjaywwLjEyKSwgMCAxcHggM3B4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MmRwKCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xNCksIDAgM3B4IDRweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDFweCA1cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3czZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCAzcHggMCByZ2JhKCRibGFjaywwLjE0KSwgMCAzcHggNHB4IDAgcmdiYSgkYmxhY2ssMC4xMiksIDAgMXB4IDhweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzRkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoJGJsYWNrLDAuMTQpLCAwIDRweCA1cHggMCByZ2JhKCRibGFjaywwLjEyKSwgMCAxcHggMTBweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzZkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCByZ2JhKCRibGFjaywwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoJGJsYWNrLDAuMTIpLCAwIDNweCA1cHggMCByZ2JhKCRibGFjaywwLjIpO1xyXG59XHJcblxyXG5AbWl4aW4gaG92ZXJTaGFkb3c4ZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAxMHB4IDFweCByZ2JhKCRibGFjaywwLjE0KSwgMCAzcHggMTRweCAzcHggcmdiYSgkYmxhY2ssMC4xMiksIDAgNHB4IDVweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzlkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgOXB4IDEycHggMXB4IHJnYmEoJGJsYWNrLDAuMTQpLCAwIDNweCAxNnB4IDJweCByZ2JhKCRibGFjaywwLjEyKSwgMCA1cHggNnB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MTJkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMTJweCAxN3B4IDJweCByZ2JhKCRibGFjaywwLjE0KSwgMCA1cHggMjJweCA0cHggcmdiYSgkYmxhY2ssMC4xMiksIDAgN3B4IDhweCAwIHJnYmEoJGJsYWNrLDAuMik7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlclNoYWRvdzE2ZHAoKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDE2cHggMjRweCAycHggcmdiYSgkYmxhY2ssMC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoJGJsYWNrLDAuMTIpLCAwIDhweCAxMHB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGhvdmVyU2hhZG93MjRkcCgpIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKCRibGFjaywwLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgkYmxhY2ssMC4xMiksIDAgMTFweCAxNXB4IDAgcmdiYSgkYmxhY2ssMC4yKTtcclxufVxyXG5cclxuQG1peGluIGVycm9yU2hhZG93KCkge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgkcmVkLCAuMzUpLCAwIDFweCA0cHggMCByZ2JhKCRyZWQsIC41Mik7XHJcbn0iXX0= */"

/***/ }),

/***/ "./projects/ngx-panels/src/lib/components/panel/panel.component.ts":
/*!*************************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/components/panel/panel.component.ts ***!
  \*************************************************************************/
/*! exports provided: OPEN, CLOSED, PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN", function() { return OPEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSED", function() { return CLOSED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SLIDE_DURATION = 30000;
var OPEN = 'open';
var CLOSED = 'closed';
var ANIMATION_HIDDEN = {
    transform: 'translateX(100%)'
};
var ANIMATION_VISIBLE = {
    transform: 'translateX(0)'
};
var PanelComponent = /** @class */ (function () {
    function PanelComponent(ref) {
        this.ref = ref;
        this.panelCloseAnimationEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.panelState = OPEN;
    }
    PanelComponent.prototype.onAnimationEvent = function (evt) {
        if (evt.fromState !== 'void' && evt.toState === CLOSED) {
            this.panelCloseAnimationEnd.emit(true);
        }
    };
    PanelComponent.prototype.startCloseAnimation = function () {
        this.panelState = CLOSED;
        this.ref.markForCheck();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], PanelComponent.prototype, "panelCloseAnimationEnd", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"])
    ], PanelComponent.prototype, "contentContainer", void 0);
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./projects/ngx-panels/src/lib/components/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.scss */ "./projects/ngx-panels/src/lib/components/panel/panel.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('panelState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])(CLOSED, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(ANIMATION_HIDDEN)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])(OPEN, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(ANIMATION_VISIBLE)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(OPEN + " => " + CLOSED, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(SLIDE_DURATION)),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(":enter", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(ANIMATION_HIDDEN), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(SLIDE_DURATION, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])(ANIMATION_VISIBLE))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/index.ts":
/*!**********************************************!*\
  !*** ./projects/ngx-panels/src/lib/index.ts ***!
  \**********************************************/
/*! exports provided: PanelModule, PanelStatusService, PanelService, PanelRef, PanelHeaderComponent, PanelBodyComponent, PanelFooterComponent, OPEN, CLOSED, PanelComponent, PanelContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _panel_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.module */ "./projects/ngx-panels/src/lib/panel.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return _panel_module__WEBPACK_IMPORTED_MODULE_0__["PanelModule"]; });

/* harmony import */ var _services_panel_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/panel-status.service */ "./projects/ngx-panels/src/lib/services/panel-status.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelStatusService", function() { return _services_panel_status_service__WEBPACK_IMPORTED_MODULE_1__["PanelStatusService"]; });

/* harmony import */ var _services_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/panel.service */ "./projects/ngx-panels/src/lib/services/panel.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelService", function() { return _services_panel_service__WEBPACK_IMPORTED_MODULE_2__["PanelService"]; });

/* harmony import */ var _classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/panel-ref.class */ "./projects/ngx-panels/src/lib/classes/panel-ref.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelRef", function() { return _classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_3__["PanelRef"]; });

/* harmony import */ var _components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/panel-header/panel-header.component */ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelHeaderComponent", function() { return _components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_4__["PanelHeaderComponent"]; });

/* harmony import */ var _components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/panel-body/panel-body.component */ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelBodyComponent", function() { return _components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_5__["PanelBodyComponent"]; });

/* harmony import */ var _components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/panel-footer/panel-footer.component */ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelFooterComponent", function() { return _components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_6__["PanelFooterComponent"]; });

/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/panel/panel.component */ "./projects/ngx-panels/src/lib/components/panel/panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN", function() { return _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["OPEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLOSED", function() { return _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["CLOSED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["PanelComponent"]; });

/* harmony import */ var _components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/panel-container/panel-container.component */ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelContainerComponent", function() { return _components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_8__["PanelContainerComponent"]; });












/***/ }),

/***/ "./projects/ngx-panels/src/lib/panel.module.ts":
/*!*****************************************************!*\
  !*** ./projects/ngx-panels/src/lib/panel.module.ts ***!
  \*****************************************************/
/*! exports provided: PanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return PanelModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/panel-body/panel-body.component */ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.ts");
/* harmony import */ var _components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/panel-container/panel-container.component */ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.ts");
/* harmony import */ var _components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/panel-footer/panel-footer.component */ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.ts");
/* harmony import */ var _components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/panel-header/panel-header.component */ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.ts");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/panel/panel.component */ "./projects/ngx-panels/src/lib/components/panel/panel.component.ts");
/* harmony import */ var _services_panel_status_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/panel-status.service */ "./projects/ngx-panels/src/lib/services/panel-status.service.ts");
/* harmony import */ var _services_panel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/panel.service */ "./projects/ngx-panels/src/lib/services/panel.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PanelModule = /** @class */ (function () {
    function PanelModule() {
    }
    PanelModule_1 = PanelModule;
    PanelModule.forRoot = function () {
        return {
            ngModule: PanelModule_1,
            providers: [_services_panel_status_service__WEBPACK_IMPORTED_MODULE_7__["PanelStatusService"], _services_panel_service__WEBPACK_IMPORTED_MODULE_8__["PanelService"]]
        };
    };
    var PanelModule_1;
    PanelModule = PanelModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
            declarations: [
                _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_6__["PanelComponent"],
                _components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_3__["PanelContainerComponent"],
                _components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__["PanelHeaderComponent"],
                _components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_2__["PanelBodyComponent"],
                _components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_4__["PanelFooterComponent"]
            ],
            providers: [_services_panel_service__WEBPACK_IMPORTED_MODULE_8__["PanelService"], _services_panel_status_service__WEBPACK_IMPORTED_MODULE_7__["PanelStatusService"]],
            exports: [_components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_3__["PanelContainerComponent"], _components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_5__["PanelHeaderComponent"], _components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_2__["PanelBodyComponent"], _components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_4__["PanelFooterComponent"]]
        })
    ], PanelModule);
    return PanelModule;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/services/panel-status.service.ts":
/*!**********************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/services/panel-status.service.ts ***!
  \**********************************************************************/
/*! exports provided: PanelStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelStatusService", function() { return PanelStatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PanelStatusService = /** @class */ (function () {
    function PanelStatusService() {
        this.size = 0;
        this.panelOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // this method must not be called manually
    PanelStatusService.prototype.increment = function () {
        this.size += 1;
    };
    // this method must not be called manually
    PanelStatusService.prototype.reset = function () {
        this.size = 0;
    };
    // this method must not be called manually
    PanelStatusService.prototype.notifyOpen = function () {
        this.panelOpenSubject.next();
    };
    Object.defineProperty(PanelStatusService.prototype, "isOpen", {
        get: function () {
            return this.size > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelStatusService.prototype, "panelOpen$", {
        get: function () {
            return this.panelOpenSubject.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    PanelStatusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], PanelStatusService);
    return PanelStatusService;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/lib/services/panel.service.ts":
/*!***************************************************************!*\
  !*** ./projects/ngx-panels/src/lib/services/panel.service.ts ***!
  \***************************************************************/
/*! exports provided: PanelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelService", function() { return PanelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/panel-ref.class */ "./projects/ngx-panels/src/lib/classes/panel-ref.class.ts");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/panel/panel.component */ "./projects/ngx-panels/src/lib/components/panel/panel.component.ts");
/* harmony import */ var _panel_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel-status.service */ "./projects/ngx-panels/src/lib/services/panel-status.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PanelService = /** @class */ (function () {
    function PanelService(injector, resolver, panelStatusService) {
        this.injector = injector;
        this.resolver = resolver;
        this.panelStatusService = panelStatusService;
    }
    // this method must not be called manually
    PanelService.prototype.setContainer = function (panelContainer) {
        this.panelContainer = panelContainer;
    };
    PanelService.prototype.openAsRoot = function (content, data) {
        this.closeAll();
        this.panelStatusService.reset();
        this.panelStatusService.increment();
        var panelRef = this.appendPanel(_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"], content, data);
        this.panelStatusService.notifyOpen();
        return panelRef;
    };
    PanelService.prototype.closeAll = function () {
        this.panelStatusService.reset();
        this.panelContainer.destroyAll();
    };
    PanelService.prototype.open = function (content, data) {
        this.panelStatusService.increment();
        var panelRef = this.appendPanel(_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"], content, data);
        if (!this.panelStatusService.isOpen) {
            this.panelStatusService.notifyOpen();
        }
        return panelRef;
    };
    PanelService.prototype.appendPanel = function (panel, content, data) {
        var _this = this;
        // PanelRef is added to the injector so that the Body and the Header can access to it
        // (mainly for calling close action)
        var panelRef = new _classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_1__["PanelRef"]();
        var childInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
            providers: [{ provide: _classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_1__["PanelRef"], useValue: panelRef }],
            parent: this.injector
        });
        var contentFactory = this.resolver.resolveComponentFactory(content);
        var contentComponentRef = contentFactory.create(childInjector);
        var panelComponentFactory = this.resolver.resolveComponentFactory(panel);
        var panelComponentRef = panelComponentFactory.create(this.injector);
        panelRef.setComponents(panelComponentRef, this.panelContainer);
        panelComponentRef.instance.panelCloseAnimationEnd.subscribe(function () {
            _this.panelContainer.destroyTopPanel();
        });
        if (data) {
            panelRef.setData(data);
        }
        panelComponentRef.instance.contentContainer.insert(contentComponentRef.hostView);
        this.panelContainer.addTopPanel(panelRef);
        return panelRef;
    };
    PanelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _panel_status_service__WEBPACK_IMPORTED_MODULE_3__["PanelStatusService"]])
    ], PanelService);
    return PanelService;
}());



/***/ }),

/***/ "./projects/ngx-panels/src/public_api.ts":
/*!***********************************************!*\
  !*** ./projects/ngx-panels/src/public_api.ts ***!
  \***********************************************/
/*! exports provided: PanelModule, PanelStatusService, PanelService, PanelRef, PanelHeaderComponent, PanelBodyComponent, PanelFooterComponent, OPEN, CLOSED, PanelComponent, PanelContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_panel_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/panel.module */ "./projects/ngx-panels/src/lib/panel.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelModule", function() { return _lib_panel_module__WEBPACK_IMPORTED_MODULE_0__["PanelModule"]; });

/* harmony import */ var _lib_services_panel_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/panel-status.service */ "./projects/ngx-panels/src/lib/services/panel-status.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelStatusService", function() { return _lib_services_panel_status_service__WEBPACK_IMPORTED_MODULE_1__["PanelStatusService"]; });

/* harmony import */ var _lib_services_panel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/panel.service */ "./projects/ngx-panels/src/lib/services/panel.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelService", function() { return _lib_services_panel_service__WEBPACK_IMPORTED_MODULE_2__["PanelService"]; });

/* harmony import */ var _lib_classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/classes/panel-ref.class */ "./projects/ngx-panels/src/lib/classes/panel-ref.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelRef", function() { return _lib_classes_panel_ref_class__WEBPACK_IMPORTED_MODULE_3__["PanelRef"]; });

/* harmony import */ var _lib_components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/components/panel-header/panel-header.component */ "./projects/ngx-panels/src/lib/components/panel-header/panel-header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelHeaderComponent", function() { return _lib_components_panel_header_panel_header_component__WEBPACK_IMPORTED_MODULE_4__["PanelHeaderComponent"]; });

/* harmony import */ var _lib_components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/components/panel-body/panel-body.component */ "./projects/ngx-panels/src/lib/components/panel-body/panel-body.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelBodyComponent", function() { return _lib_components_panel_body_panel_body_component__WEBPACK_IMPORTED_MODULE_5__["PanelBodyComponent"]; });

/* harmony import */ var _lib_components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/components/panel-footer/panel-footer.component */ "./projects/ngx-panels/src/lib/components/panel-footer/panel-footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelFooterComponent", function() { return _lib_components_panel_footer_panel_footer_component__WEBPACK_IMPORTED_MODULE_6__["PanelFooterComponent"]; });

/* harmony import */ var _lib_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/components/panel/panel.component */ "./projects/ngx-panels/src/lib/components/panel/panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OPEN", function() { return _lib_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["OPEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLOSED", function() { return _lib_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["CLOSED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return _lib_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_7__["PanelComponent"]; });

/* harmony import */ var _lib_components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/components/panel-container/panel-container.component */ "./projects/ngx-panels/src/lib/components/panel-container/panel-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelContainerComponent", function() { return _lib_components_panel_container_panel_container_component__WEBPACK_IMPORTED_MODULE_8__["PanelContainerComponent"]; });

/*
 * Public API Surface of ngx-panels
 */











/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-root__container\">\n  <div class=\"app-root__navbar\">\n    <div class=\"app-root__title\">\n      <img class=\"app-root__angular-logo\" src=\"../assets/angular.svg\" />\n      <div>ngx-panels: Panel bots to the rescue!</div>\n    </div>\n  </div>\n  <div class=\"app-root__body\">\n    <div class=\"app-root__list-title\">Robots</div>\n    <div class=\"app-root__robot-list\">\n      <div *ngFor=\"let robot of robots\" class=\"app-root__robot\">\n        <div>\n          <img class=\"app-root__icon\" src=\"../assets/robot.svg\" />\n          {{ robot.name }}\n        </div>\n\n        <button class=\"app-root__button\" (click)=\"open(robot)\">\n          Details\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n<ngx-panel-container></ngx-panel-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: block;\n  overflow: hidden; }\n\n.app-root__container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%; }\n\n.app-root__body {\n  height: 100%;\n  padding: 30px; }\n\n.app-root__navbar {\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  height: 60px;\n  background-color: #26547c;\n  color: white;\n  font-size: 24px; }\n\n.app-root__button {\n  padding-top: 20px;\n  cursor: pointer;\n  padding: 5px;\n  background-color: white;\n  border: 1px solid #26547c; }\n\n.app-root__robot-list {\n  padding: 20px;\n  width: 200px;\n  display: flex;\n  flex-direction: column; }\n\n.app-root__robot {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding: 5px; }\n\n.app-root__footer {\n  height: 25px;\n  background-color: #26547c; }\n\n.app-root__icon {\n  width: 20px; }\n\n.app-root__angular-logo {\n  width: 48px;\n  margin-right: 8px; }\n\n.app-root__title {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center; }\n\n.app-root__list-title {\n  font-size: 24px;\n  padding: 5px 20px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXGlubm92YXRpb25cXG5neC1wYW5lbHMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsYUFBWTtFQUNaLGVBQWM7RUFDZCxpQkFBZ0IsRUFDbkI7O0FBRUM7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLCtCQUE4QjtFQUM5QixhQUFZLEVBQ2I7O0FBQ0Q7RUFDRSxhQUFZO0VBQ1osY0FBYSxFQUNkOztBQUNEO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2IsYUFBWTtFQUNaLDBCQUF5QjtFQUN6QixhQUFZO0VBQ1osZ0JBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixhQUFZO0VBQ1osd0JBQXVCO0VBQ3ZCLDBCQUF5QixFQUMxQjs7QUFDRDtFQUNFLGNBQWE7RUFDYixhQUFZO0VBQ1osY0FBYTtFQUNiLHVCQUFzQixFQUN2Qjs7QUFDRDtFQUNFLGNBQWE7RUFDYixvQkFBbUI7RUFDbkIsK0JBQThCO0VBQzlCLGFBQVksRUFDYjs7QUFDRDtFQUNFLGFBQVk7RUFDWiwwQkFBeUIsRUFDMUI7O0FBQ0Q7RUFDRSxZQUFXLEVBQ1o7O0FBQ0Q7RUFDRSxZQUFXO0VBQ1gsa0JBQWlCLEVBQ2xCOztBQUNEO0VBQ0UsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3BCOztBQUNEO0VBQ0UsZ0JBQWU7RUFDZixrQkFBaUI7RUFDakIsa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmFwcC1yb290IHtcclxuICAmX19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gICZfX2JvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9XHJcbiAgJl9fbmF2YmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjU0N2M7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG4gICZfX2J1dHRvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI2NTQ3YztcclxuICB9XHJcbiAgJl9fcm9ib3QtbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gICZfX3JvYm90IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuICAmX19mb290ZXIge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2NTQ3YztcclxuICB9XHJcbiAgJl9faWNvbiB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICB9XHJcbiAgJl9fYW5ndWxhci1sb2dvIHtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gICZfX3RpdGxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAmX19saXN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ngx_panels_src_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ngx-panels/src/lib */ "./projects/ngx-panels/src/lib/index.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(panelService) {
        this.panelService = panelService;
        this.robots = [
            { id: 1, name: 'Ufo Robot', avatar: 'https://robohash.org/uforobot', power: 3, statement: '' },
            { id: 2, name: 'Zoran Power', avatar: 'https://robohash.org/zoranpower', power: 4, statement: '' },
            { id: 3, name: 'Zin Jen', avatar: 'https://robohash.org/zinjen', power: 5, statement: '' },
            { id: 4, name: 'Mortadella', avatar: 'https://robohash.org/mortadella', power: 6, statement: '' },
            { id: 5, name: 'Paolo Bot', avatar: 'https://robohash.org/paolobot', power: 9, statement: '' }
        ];
    }
    AppComponent.prototype.open = function (robot) {
        this.panelService.openAsRoot(_test_test_component__WEBPACK_IMPORTED_MODULE_2__["TestComponent"], robot);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [projects_ngx_panels_src_lib__WEBPACK_IMPORTED_MODULE_1__["PanelService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_panels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-panels */ "./projects/ngx-panels/src/public_api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_5__["TestComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], ngx_panels__WEBPACK_IMPORTED_MODULE_3__["PanelModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]],
            providers: [],
            entryComponents: [_test_test_component__WEBPACK_IMPORTED_MODULE_5__["TestComponent"], ngx_panels__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"], ngx_panels__WEBPACK_IMPORTED_MODULE_3__["PanelContainerComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <ngx-panel-header class=\"header\">\n        <div>Robot Details</div>\n    </ngx-panel-header>\n    <ngx-panel-body>\n        <div class=\"holder\">\n            <div class=\"title\">Robot</div>\n            <img class=\"avatar\" [src]=\"avatar\" alt=\"{{name}}\">\n            <div class=\"name\">{{name}}</div>\n            <div class=\"power-bar\">\n                <div class=\"power-title\">Power</div>\n                <!-- <svg *ngFor=\"let i of [].constructor(power)\" class=\"power\" -->\n                    <!-- xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M13.404 23h-2.808l-.96-2h4.728l-.96 2zm-8.323-7.365c-1.218 1.202-2.081 3.377-2.081 5.696 0 .884.127 1.789.405 2.669.255-1.837 1.122-3.2 3.162-3.773-.634-1.402-1.154-2.949-1.486-4.592zm13.83-.01c-.371 1.772-.92 3.333-1.477 4.602 2.039.573 2.906 1.936 3.161 3.773.278-.88.405-1.785.405-2.67 0-2.324-.867-4.504-2.089-5.705zm-6.926-15.625c-7.076 6.157-5.909 14.779-3.324 20h6.685c2.59-5.483 3.765-13.883-3.361-20zm.015 14c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm0-4c-1.104 0-2-.896-2-2s.896-2 2-2 2 .896 2 2-.896 2-2 2z\"/></svg> -->\n                <svg *ngFor=\"let i of [].constructor(power)\" class=\"power\" style=\"fill: #FF6663\"\n                    xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M8.011 6.215c-1.711-.009-3.86.918-5.499 2.557-.625.625-1.176 1.355-1.601 2.174 1.479-1.119 3.057-1.47 4.903-.434.544-1.437 1.27-2.9 2.197-4.297zm9.785 9.773c-1.516.991-3.007 1.706-4.297 2.21 1.036 1.848.686 3.424-.434 4.902.819-.424 1.549-.975 2.175-1.602 1.644-1.642 2.572-3.796 2.556-5.51zm6.152-15.946c-.412-.028-.816-.042-1.213-.042-8.602 0-13.498 6.558-15.28 11.833l4.728 4.729c5.428-1.946 11.817-6.661 11.817-15.172 0-.439-.017-.888-.052-1.348zm-9.888 9.91c-.391-.391-.391-1.023 0-1.414s1.023-.391 1.414 0 .391 1.023 0 1.414-1.024.39-1.414 0zm2.828-2.828c-.781-.78-.781-2.047 0-2.828s2.048-.781 2.828 0c.781.781.781 2.047 0 2.828s-2.047.781-2.828 0zm-14.919 12.454l-.906-.906 5.208-5.188.906.906-5.208 5.188zm4.979 1.857l-.906-.906 3.636-3.664.906.906-3.636 3.664zm-6.042 2.565l-.906-.906 6.448-6.438.906.906-6.448 6.438z\"/></svg>\n            </div>\n            <button class=\"button\" (click)=\"onSpeak()\">Say something</button>\n        </div>\n    </ngx-panel-body>\n    <ngx-panel-footer class=\"footer\">\n        <div class=\"footer-bar\">\n            <button class=\"button\" (click)=\"onClick()\">Close me!</button>\n        </div>\n    </ngx-panel-footer>\n</div>"

/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  font-family: Arial, Helvetica, sans-serif; }\n\n.main {\n  height: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.holder {\n  display: flex;\n  align-items: center;\n  flex-direction: column; }\n\n.header {\n  font-weight: bold;\n  font-size: 20px;\n  background: #E0FF4F; }\n\n.footer {\n  background: #E0FF4F; }\n\n.footer-bar {\n  display: flex;\n  justify-content: center; }\n\n.title {\n  font-size: 20px;\n  margin-bottom: 16px; }\n\n.avatar {\n  border-radius: 50%;\n  border: 1px solid #ccc;\n  width: 200px;\n  height: 200px; }\n\n.name {\n  padding: 8px 0 32px;\n  font-weight: bold;\n  font-size: 20px; }\n\n.button {\n  background: #26547C;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  padding: 8px;\n  font-weight: bold;\n  text-transform: uppercase; }\n\n.button:hover {\n    cursor: pointer; }\n\n.power-bar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 32px; }\n\n.power-title {\n  margin-right: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC9DOlxcaW5ub3ZhdGlvblxcbmd4LXBhbmVscy9zcmNcXGFwcFxcdGVzdFxcdGVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBDQUF5QyxFQUM1Qzs7QUFFRDtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix1QkFBc0IsRUFDekI7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsZ0JBQWU7RUFDZixvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxjQUFhO0VBQ2Isd0JBQXVCLEVBQzFCOztBQUVEO0VBQ0ksZ0JBQWU7RUFDZixvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIsdUJBQXNCO0VBQ3RCLGFBQVk7RUFDWixjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksb0JBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLG9CQUFtQjtFQUNuQixhQUFZO0VBQ1osYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLDBCQUF5QixFQUk1Qjs7QUFYRDtJQVNRLGdCQUFlLEVBQ2xCOztBQUdMO0VBQ0ksY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsb0JBQW1CLEVBQ3RCOztBQUVEO0VBQ0ksa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdGVzdC90ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5ob2xkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0UwRkY0RjtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTBGRjRGO1xyXG59XHJcblxyXG4uZm9vdGVyLWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBwYWRkaW5nOiA4cHggMCAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDogIzI2NTQ3QztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnBvd2VyLWJhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuLnBvd2VyLXRpdGxlIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var projects_ngx_panels_src_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/ngx-panels/src/lib */ "./projects/ngx-panels/src/lib/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = /** @class */ (function () {
    function TestComponent(panelRef) {
        this.panelRef = panelRef;
    }
    TestComponent.prototype.ngOnInit = function () {
        this.name = this.panelRef.data.name;
        this.avatar = this.panelRef.data.avatar;
        this.power = this.panelRef.data.power;
        this.statement = "Hi! I'm " + this.name + ". How can I help you?";
    };
    TestComponent.prototype.onClick = function () {
        this.panelRef.close();
    };
    TestComponent.prototype.onSpeak = function () {
        alert(this.statement);
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")]
        }),
        __metadata("design:paramtypes", [projects_ngx_panels_src_lib__WEBPACK_IMPORTED_MODULE_1__["PanelRef"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\innovation\ngx-panels\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map