(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\n  \n\n</router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/admin.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/admin.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation class=\"pcoded-navbar\" [ngClass]=\"{'navbar-collapsed' : navCollapsed, 'theme-horizontal': this.nextConfig['layout'] === 'horizontal', 'mob-open' : navCollapsedMob}\" (onNavMobCollapse)=\"navMobClick()\"></app-navigation>\n<app-nav-bar class=\"navbar pcoded-header navbar-expand-lg navbar-light\" (onNavCollapse)=\"this.navCollapsed = !this.navCollapsed;\" (onNavHeaderMobCollapse)=\"navMobClick()\"></app-nav-bar>\n<div class=\"pcoded-main-container\">\n  <div class=\"pcoded-wrapper\" [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\n    <div class=\"pcoded-content\">\n      <div class=\"pcoded-inner-content\">\n        <div class=\"main-body\">\n          <div class=\"page-wrapper\">\n            <router-outlet></router-outlet>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-configuration></app-configuration>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/configuration/configuration.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/configuration/configuration.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'; else mainHeader\">\n  <ng-container *ngTemplateOutlet=\"mainHeader\"></ng-container>\n</div>\n<ng-template #mainHeader>\n  <div class=\"m-header\">\n    <a href=\"javascript:\" class=\"mobile-menu\" id=\"mobile-collapse\" (click)=\"navCollapse()\"><span></span></a>\n    <a [routerLink]=\"\" class=\"b-brand\">\n      <img id=\"main-logo\" src=\"assets/images/geowise.png\" alt=\"\" class=\"logo\" *ngIf=\"this.nextConfig.navBrandColor !== 'brand-default' || this.nextConfig.headerBackColor !== 'header-default'\">\n      <img src=\"assets/images/logo-dark.png\" alt=\"\" class=\"logo\" *ngIf=\"this.nextConfig.navBrandColor === 'brand-default' && this.nextConfig.headerBackColor === 'header-default'\">\n      <img src=\"assets/images/logo-icon.png\" alt=\"\" class=\"logo-thumb\">\n    </a>\n    <a class=\"mob-toggler\" [ngClass]=\"{'on' : this.menuClass}\" href=\"javascript:\" (click)=\"toggleMobOption()\"><i class=\"feather icon-more-vertical\"></i></a>\n  </div>\n  <div class=\"collapse navbar-collapse\" [style.display]=\"this.collapseStyle\">\n    <app-nav-left class=\"mr-auto\"></app-nav-left>\n    <app-nav-right class=\"ml-auto\"></app-nav-right>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ul class=\"navbar-nav mr-auto\">\n  <li class=\"nav-item\">\n    <app-nav-search></app-nav-search>\n  </li>\n</ul> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-search\" class=\"main-search open\">\n  <div class=\"input-group\">\n    <input type=\"text\" id=\"m-search\" class=\"form-control\" placeholder=\"Search . . .\" [style.width]=\"'130px'\">\n    <span class=\"input-group-append search-btn btn btn-primary\">\n      <i class=\"feather icon-search input-group-text\"></i>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav ml-auto\">\n  <!-- <li>\n    <div class=\"dropdown\" ngbDropdown placement=\"auto\">\n      <a ngbDropdownToggle href=\"javascript:\" data-toggle=\"dropdown\"><i class=\"icon feather icon-bell\"></i></a>\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right notification\">\n        <div class=\"noti-head\">\n          <h6 class=\"d-inline-block m-b-0\">Notifications</h6>\n          <div class=\"float-right\">\n            <a href=\"javascript:\" class=\"m-r-10\">mark as read</a>\n            <a href=\"javascript:\">clear all</a>\n          </div>\n        </div>\n        <ul class=\"noti-body\">\n          <li class=\"n-title\">\n            <p class=\"m-b-0\">NEW</p>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-1.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>John Doe</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\n                <p>New ticket Added</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"n-title\">\n            <p class=\"m-b-0\">EARLIER</p>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>Joseph William</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\n                <p>Prchace New Theme and make payment</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-3.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>Sara Soudein</strong><span class=\"n-time text-muted\"><i class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\n                <p>currently login</p>\n              </div>\n            </div>\n          </li>\n        </ul>\n        <div class=\"noti-footer\">\n          <a href=\"javascript:\">show all</a>\n        </div>\n      </div>\n    </div>\n  </li> -->\n  <li>\n    <div class=\"dropdown drp-user\" ngbDropdown placement=\"auto\">\n      <a href=\"javascript:\" ngbDropdownToggle data-toggle=\"dropdown\">\n        <i class=\"icon feather icon-user\"></i>\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right profile-notification\" ngbDropdownMenu>\n        <!-- <div class=\"pro-head\">\n          <img src=\"assets/images/user/avatar-1.jpg\" class=\"img-radius\" alt=\"User-Profile-Image\">\n          <span>John Doe</span>\n          <a href=\"javascript:\" class=\"dud-logout\" title=\"Logout\">\n            <i class=\"feather icon-log-out\"></i>\n          </a>\n        </div> -->\n        <ul class=\"pro-body\">\n\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-user\"></i> Profile</a></li>\n          <li><a href=\"javascript:\" class=\"dropdown-item\" (click)=\"logout()\"><i class=\"feather icon-log-out\"></i> Logout</a></li>\n        </ul>\n      </div>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!item.hidden\">\n  <li *ngIf=\"themeLayout === 'horizontal'\" (mouseenter)=\"navCollapse($event)\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\">\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n    </a>\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </li>\n  <li *ngIf=\"themeLayout === 'vertical'\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\" (click)=\"navCollapse($event)\">\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n    </a>\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </li>\n  <ng-template #itemContent>\n      <span class=\"pcoded-micon\" *ngIf=\"item.icon\">\n        <i class=\"{{item.icon}}\"></i>\n      </span>\n      <span class=\"pcoded-mtext\">{{item.title}}\n        <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n          {{item.badge.title}}\n        </span>\n      </span>\n      <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\n        {{item.badge.title}}\n      </span>\n  </ng-template>\n  <ng-template #subMenuContent>\n    <ul class=\"pcoded-submenu\" [routerLinkActive]=\"['active']\">\n      <ng-container *ngFor=\"let item of item.children\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </ng-template>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<perfect-scrollbar *ngIf=\"this.nextConfig['layout'] === 'vertical'\" (clickOutside)=\"navMob()\"   id=\"nav-ps-next\" ngClass=\"next-scroll\" [style.max-width]=\"'300px'\" [style.max-height]=\"'calc(100vh - 60px)'\" [usePSClass]=\"'next'\" [disabled]=\"null\">\n  <div class=\"navbar-content\">\n    <ul class=\"nav pcoded-inner-navbar\" (clickOutside)=\"fireOutClick()\">\n      <ng-container *ngFor=\"let item of navigation\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </div>\n</perfect-scrollbar>\n\n<div *ngIf=\"this.nextConfig['layout'] === 'horizontal'\" #navbarWrapper class=\"navbar-content sidenav-horizontal\" id=\"layout-sidenav\">\n  <a href=\"javascript:\" class=\"sidenav-horizontal-prev\" [ngClass]=\"prevDisabled\" (click)=\"scrollMinus()\"></a>\n  <div  class=\"sidenav-horizontal-wrapper\"><!-- add 14-4 viral -->\n    <ul #navbarContent id=\"side-nav-horizontal\" class=\"nav pcoded-inner-navbar sidenav-inner\" (clickOutside)=\"fireLeave()\" (mouseleave)=\"fireLeave()\">\n      <ng-container *ngFor=\"let item of navigation\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </div>\n  <a href=\"javascript:\" class=\"sidenav-horizontal-next\" [ngClass]=\"nextDisabled\" (click)=\"scrollPlus()\"></a>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!item.hidden\">\r\n  <li class=\"nav-item pcoded-menu-caption\"><label>{{item.title}}</label></li>\r\n  <ng-container *ngFor=\"let item of item.children\">\r\n    <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\r\n    <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\r\n    <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\r\n  </ng-container>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"!item.hidden\">\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && !item.external\" [routerLinkActive]=\"['active']\">\n    <a class=\"nav-link\" [target]=\"item.target ? '_blank' : '_self'\" [routerLink]=\"[item.url]\" (click)=\"closeOtherMenu($event)\">\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\n      <ng-template #directTitle>\n        {{item.title}}\n      </ng-template>\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n    </a>\n  </li>\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && item.external\">\n    <a [target]=\"item.target ? '_blank' : '_self'\" [href]=\"item.url\">\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\n      <ng-template #directTitle>\n        {{item.title}}\n      </ng-template>\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n    </a>\n  </li>\n  <ng-template #itemIcon>\n    <span *ngIf=\"item.icon\" class=\"pcoded-micon\"><i class=\"feather\" [ngClass]=\"item.icon\"></i></span>\n  </ng-template>\n  <ng-template #itemBadge>\n    <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\n      {{item.badge.title}}\n    </span>\n    <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n      {{item.badge.title}}\n    </span>\n  </ng-template>\n</ng-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/navigation.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/admin/navigation/navigation.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-wrapper\" [ngClass]=\"{'container': this.nextConfig.layout === 'horizontal' && this.nextConfig.subLayout === 'horizontal-2'}\">\n  <app-nav-content (onNavMobCollapse)=\"navMobCollapse()\"></app-nav-content>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/auth/auth.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/auth/auth.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/firmware/add-firmware/add-firmware.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/firmware/add-firmware/add-firmware.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- FIRMWARE REGISTRATION FORM -->\n<form\n  [formGroup]=\"firmwareForm\"\n  (ngSubmit)=\"AddFirmware()\"\n  class=\"card p-4 mb-4\"\n>\n  <h4 class=\"mb-4\">Add Firmware</h4>\n\n  <div class=\"row\">\n   \n\n    <div class=\"col-md-4 mb-3\">\n      <label class=\"form-label\">Firmware Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        formControlName=\"firmName\"\n        placeholder=\"Enter Firmware Name\"\n        [ngClass]=\"{'is-invalid': firmwareForm.get('firmName')?.touched && firmwareForm.get('firmName')?.invalid}\"\n      />\n      <div class=\"invalid-feedback\" *ngIf=\"firmwareForm.get('firmName')?.touched\">\n        <div *ngIf=\"firmwareForm.get('firmName')?.hasError('required')\">\n          Firmware Name is required\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-4 mb-3\">\n      <label class=\"form-label\">SW Version</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        formControlName=\"swVersion\"\n        placeholder=\"Enter Software Version\"\n        [ngClass]=\"{'is-invalid': firmwareForm.get('swVersion')?.touched && firmwareForm.get('swVersion')?.invalid}\"\n      />\n      <div class=\"invalid-feedback\" *ngIf=\"firmwareForm.get('swVersion')?.touched\">\n        <div *ngIf=\"firmwareForm.get('swVersion')?.hasError('required')\">\n          Software Version is required\n        </div>\n      </div>\n    </div>\n\n<div class=\"col-md-4 mb-3\">\n  <input type=\"hidden\" name=\"msgtype\" value=\"2\" />\n\n  <label>Firmware File (Click </label>\n  &nbsp;\n  <label style=\"color: blue; text-decoration: underline; cursor: pointer\">\n    <!-- <input\n      type=\"file\"\n      class=\"form-control\"\n      formControlName=\"firmwareFile\"\n      placeholder=\"Select Firmware File\"\n      style=\"display: none\"\n    \n      (change)=\"onFileChange($event)\"\n    /> -->\n   <input\n  type=\"file\"\n  class=\"form-control\"\n  formControlName=\"firmwareFile\"\n  accept=\".gbl,.bin,application/octet-stream\"\n  style=\"display: none\"\n  (change)=\"onFileChange($event)\"\n/>\n\n\n    here\n  </label>\n  &nbsp;\n  <label>to upload)</label>\n\n  <textarea class=\"form-control\" rows=\"1\">{{displayfile}}</textarea>\n</div>\n\n  </div>\n      <div class=\"d-flex justify-content-end mt-4\">\n    <button\n      type=\"submit\"\n      class=\"btn btn-primary px-4\"\n      [disabled]=\"firmwareForm.invalid\"\n    >\n      Save\n    </button>\n  </div>\n</form>\n\n\n\n<!-- Firmware List Table -->\n<div class=\"card mt-4 p-4\">\n  <h4 class=\"mb-3 text-left\">Firmwares</h4>\n\n  <!-- <div class=\"table-responsive\">\n    <table class=\"table table-bordered table-striped table-hover text-center\">\n      <thead style=\"background-color: #101b33; color: white;\">\n        <tr>\n          <th>FWID</th>\n          <th>SW Version</th>\n          <th>Firmware Name</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor=\"let fw of firmwares; let i = index\">\n          <td>{{ fw.fwId }}</td>\n          <td>{{ fw.swVersion }}</td>\n          <td>{{ fw.firmName }}</td>\n          <td>\n            <div class=\"d-flex justify-content-center\">\n              <button class=\"btn btn-sm btn-info mr-1\"\n                      (click)=\"openEditFirmwareModal(editFirmwareModal, fw)\">\n                Edit\n              </button>\n\n              <button class=\"btn btn-sm btn-info mr-1\"\n                      (click)=\"openDeleteFirmwareModal(deleteFirmwareModal, fw)\">\n                Delete\n              </button>\n            </div>\n          </td>\n        </tr>\n\n        <tr *ngIf=\"firmwares.length === 0\">\n          <td colspan=\"4\" class=\"text-muted\">\n            No firmwares found\n          </td>\n        </tr>\n      </tbody>\n     \n    </table>\n\n  \n\n  </div>\n\n     <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalPages > 1\">\n  <nav>\n    <ul class=\"pagination\">\n\n      <li class=\"page-item\" [class.disabled]=\"currentPage === 1\">\n        <a class=\"page-link\" (click)=\"changePage(currentPage - 1)\">Previous</a>\n      </li>\n\n      <li class=\"page-item\"\n          *ngFor=\"let page of [].constructor(totalPages); let i = index\"\n          [class.active]=\"currentPage === i + 1\">\n        <a class=\"page-link\" (click)=\"changePage(i + 1)\">\n          {{ i + 1 }}\n        </a>\n      </li>\n\n      <li class=\"page-item\" [class.disabled]=\"currentPage === totalPages\">\n        <a class=\"page-link\" (click)=\"changePage(currentPage + 1)\">Next</a>\n      </li>\n\n    </ul>\n  </nav>\n</div> -->\n<div class=\"table-responsive\">\n  <table class=\"table table-bordered table-striped table-hover text-center\">\n    <thead style=\"background-color: #101b33; color: white;\">\n      <tr>\n        <th>FWID</th>\n        <th>SW Version</th>\n        <th>Firmware Name</th>\n        <th>Actions</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor=\"let fw of firmwares; let i = index\">\n        <td>{{ fw.fwId }}</td>\n        <td>{{ fw.swVersion }}</td>\n        <td>{{ fw.firmName }}</td>\n      <td class=\"text-center\">\n\n  <!-- Edit -->\n  <i class=\"fa fa-edit text-primary action-icon\"\n     ngbTooltip=\"Edit Firmware\"\n     (click)=\"openEditFirmwareModal(editFirmwareModal, fw)\">\n  </i>\n\n  <!-- Delete -->\n  <i class=\"fa fa-trash text-danger action-icon\"\n     ngbTooltip=\"Delete Firmware\"\n     (click)=\"openDeleteFirmwareModal(deleteFirmwareModal, fw)\">\n  </i>\n\n</td>\n\n      </tr>\n\n      <tr *ngIf=\"firmwares.length === 0\">\n        <td colspan=\"4\" class=\"text-muted\">\n          No firmwares found\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n\n<!-- ✅ PAGINATION TABLE KE BAHAR -->\n<!-- <div class=\"d-flex justify-content-center mt-3\" *ngIf=\"totalPages > 1\">\n  <nav>\n    <ul class=\"pagination\">\n\n      <li class=\"page-item\" [class.disabled]=\"currentPage === 1\">\n        <a class=\"page-link\" (click)=\"changePage(currentPage - 1)\">Previous</a>\n      </li>\n\n      <li class=\"page-item\"\n          *ngFor=\"let page of [].constructor(totalPages); let i = index\"\n          [class.active]=\"currentPage === i + 1\">\n        <a class=\"page-link\" (click)=\"changePage(i + 1)\">\n          {{ i + 1 }}\n        </a>\n      </li>\n\n      <li class=\"page-item\" [class.disabled]=\"currentPage === totalPages\">\n        <a class=\"page-link\" (click)=\"changePage(currentPage + 1)\">Next</a>\n      </li>\n\n    </ul>\n  </nav>\n</div> -->\n\n\n  <!-- Pagination -->\n  <div class=\"d-flex justify-content-between align-items-center mt-3\">\n\n    <button class=\"btn btn-outline-primary btn-sm\"\n            (click)=\"prevPage()\"\n            [disabled]=\"currentPage===1\">\n      Previous\n    </button>\n\n    <span>Page {{currentPage}} of {{totalPages}}</span>\n\n    <button class=\"btn btn-outline-primary btn-sm\"\n            (click)=\"nextPage()\"\n            [disabled]=\"currentPage===totalPages\">\n      Next\n    </button>\n\n  </div>\n\n</div>\n\n\n<!-- EDIT FIRMWARE MODAL -->\n<ng-template #editFirmwareModal let-modal>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Edit Firmware</h5>\n   <button type=\"button\" class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"modal.dismiss()\">\n  <span aria-hidden=\"true\">&times;</span>\n</button>\n  </div>\n\n  <div class=\"modal-body\">\n    <form [formGroup]=\"editFirmwareForm\">\n      <div class=\"mb-3\">\n        <label>FWID</label>\n        <input class=\"form-control\" formControlName=\"fwId\" disabled>\n      </div>\n\n      <div class=\"mb-3\">\n        <label>SW Version</label>\n        <input class=\"form-control\" formControlName=\"swVersion\" disabled>\n      </div>\n\n      <div class=\"mb-3\">\n        <label>Firmware Name</label>\n        <input class=\"form-control\" formControlName=\"firmName\" [ngClass]=\"{'is-invalid': editFirmwareForm.get('firmName')?.invalid && (editFirmwareForm.get('firmName')?.dirty || editFirmwareForm.get('firmName')?.touched)}\"  >\n        <div class=\"invalid-feedback\" *ngIf=\"editFirmwareForm.get('firmName')?.touched\">\n        <div *ngIf=\"editFirmwareForm.get('firmName')?.hasError('required')\">\n          Firmware Name is required\n        </div>\n      </div>\n      </div>\n\n        <!-- <div class=\"mb-3\">\n        <label>Firmware</label>\n        <input class=\"form-control\" formControlName=\"firmwareFile\" disabled>\n      </div> -->\n    </form>\n  </div>\n\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-secondary\" (click)=\"modal.dismiss()\">Cancel</button>\n    <button class=\"btn btn-primary\" [disabled]=\"editFirmwareForm.invalid\" (click)=\"updateFirmware(modal)\">Update</button>\n  </div>\n</ng-template>\n\n<!-- DELETE FIRMWARE MODAL -->\n<ng-template #deleteFirmwareModal let-modal>\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title text-danger\">Confirm Delete</h5>\n      <button type=\"button\" class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"modal.dismiss()\">\n  <span aria-hidden=\"true\">&times;</span>\n</button>\n  </div>\n\n  <div class=\"modal-body\">\n    Are you sure you want to delete this firmware\n    <b><strong>{{ selectedFirmware }}</strong></b>?\n  </div>\n\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-secondary\" (click)=\"modal.dismiss()\">Cancel</button>\n    <button class=\"btn btn-danger\" (click)=\"deleteFirmware(model)\">Delete</button>\n  </div>\n</ng-template>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/group/add-group/add-group.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/group/add-group/add-group.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form\n  (ngSubmit)=\"onSubmit(groupForm)\"\n  #groupForm=\"ngForm\"\n  class=\"card p-4\"\n>\n\n  <h3 class=\"mb-4\">Create Group</h3>\n\n  <!-- Row 1 -->\n  <div class=\"row\">\n\n    <!-- Group Name -->\n    <div class=\"col-md-6 mb-3\">\n      <label class=\"form-label\">Group Name</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"grpName\"\n        [(ngModel)]=\"group.grpName\"\n        required\n        #grpName=\"ngModel\"\n        placeholder=\"Enter Group Name\"\n      />\n      <small class=\"text-danger\" *ngIf=\"grpName.invalid && grpName.touched\">\n        Group Name is required\n      </small>\n    </div>\n\n    <!-- Hardware Version -->\n    <div class=\"col-md-6 mb-3\">\n      <label class=\"form-label\">Hardware Version</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"hwVersion\"\n        [(ngModel)]=\"group.hwVersion\"\n        required\n        #hwVersion=\"ngModel\"\n        placeholder=\"Enter Hardware Version\"\n      />\n      <small class=\"text-danger\" *ngIf=\"hwVersion.invalid && hwVersion.touched\">\n        Hardware Version is required\n      </small>\n    </div>\n\n  </div>\n\n  <!-- Row 2 -->\n  <div class=\"row\">\n\n    <!-- Software Version -->\n    <div class=\"col-md-6 mb-3\">\n      <label class=\"form-label\">Software Version</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        name=\"swVersion\"\n        [(ngModel)]=\"group.swVersion\"\n        required\n        #swVersion=\"ngModel\"\n        placeholder=\"Enter Software Version\"\n      />\n      <small class=\"text-danger\" *ngIf=\"swVersion.invalid && swVersion.touched\">\n        Software Version is required\n      </small>\n    </div>\n\n    <!-- Firmware Dropdown -->\n    <div class=\"col-md-6 mb-3\">\n      <label class=\"form-label\">Firmware</label>\n      <select\n        class=\"form-control\"\n        name=\"fwId\"\n        [(ngModel)]=\"group.fwId\"\n        required\n        #fwId=\"ngModel\"\n      >\n        <option value=\"\">Select Firmware</option>\n        <option *ngFor=\"let f of firmwareList\" [value]=\"f.fwId\">\n          {{ f.firmName }}\n        </option>\n      </select>\n      <small class=\"text-danger\" *ngIf=\"fwId.invalid && fwId.touched\">\n        Firmware is required\n      </small>\n    </div>\n\n  </div>\n\n  <!-- Row 3 -->\n  <div class=\"row\">\n\n    <!-- Setting Dropdown -->\n    <div class=\"col-md-6 mb-3\">\n      <label class=\"form-label\">Setting</label>\n      <select\n        class=\"form-control\"\n        name=\"settingId\"\n        [(ngModel)]=\"group.settingId\"\n        required\n        #settingId=\"ngModel\"\n      >\n        <option value=\"\">Select Setting</option>\n        <option *ngFor=\"let s of settingList\" [value]=\"s.settingId\">\n          {{ s.name }}\n        </option>\n      </select>\n      <small class=\"text-danger\" *ngIf=\"settingId.invalid && settingId.touched\">\n        Setting is required\n      </small>\n    </div>\n\n    <!-- Description -->\n    <div class=\"col-md-6 mb-3\">\n      <label class=\"form-label\">Description</label>\n      <textarea\n        class=\"form-control\"\n        name=\"desc\"\n        [(ngModel)]=\"group.desc\"\n        rows=\"3\"\n        placeholder=\"Enter Description\"\n      ></textarea>\n    </div>\n\n  </div>\n\n  <!-- Submit Button -->\n  <div class=\"d-flex justify-content-end mt-4\">\n    <button\n      type=\"submit\"\n      class=\"btn btn-primary px-4\"\n      [disabled]=\"groupForm.invalid\"\n    >\n      Create Group\n    </button>\n  </div>\n\n</form>\n\n<div class=\"card mt-4 p-4\">\n\n  <h4 class=\"mb-3\">Groups List</h4>\n\n  <div class=\"table-responsive\">\n    <table class=\"table table-bordered table-striped table-hover\">\n\n      <thead style=\"background-color:#101b33;color:white\">\n        <tr>\n          <th>Name</th>\n          <th>Firmware</th>\n          <th>Setting</th>\n          <th>HW Version</th>\n          <th>SW Version</th>\n          <th>Description</th>\n          <th width=\"140\">Actions</th>\n        </tr>\n      </thead>\n\n      <tbody>\n\n        <tr *ngFor=\"let g of groups\">\n\n          <td>{{ g.grpName }}</td>\n          <td>{{ firmwareMap[g.fwId] || '-' }}</td>\n          <td>{{ settingMap[g.settingId] || '-' }}</td>\n          <td>{{ g.hwVersion }}</td>\n          <td>{{ g.swVersion }}</td>\n          <td>{{ g.desc || '-' }}</td>\n\n          <td class=\"text-center\">\n          \n            <!-- Edit -->\n            <i class=\"fa fa-edit text-primary action-icon\" ngbTooltip=\"Edit Group\" (click)=\"openEditModal(editModal, g)\">\n            </i>\n          \n            <!-- Delete -->\n            <i class=\"fa fa-trash text-danger action-icon\" ngbTooltip=\"Delete Group\" (click)=\"openDeleteModal(deleteModal, g)\">\n            </i>\n          \n            <!-- Import -->\n            <i class=\"fa fa-upload text-secondary action-icon\" ngbTooltip=\"Import Devices\"\n              (click)=\"openImportModal(importModal, g)\">\n            </i>\n          \n          </td>\n\n\n        </tr>\n\n        <tr *ngIf=\"groups.length === 0\">\n          <td colspan=\"7\" class=\"text-center text-muted\">\n            No groups found\n          </td>\n        </tr>\n\n      </tbody>\n\n    </table>\n  </div>\n\n  <!-- Pagination -->\n  <div class=\"d-flex justify-content-between align-items-center mt-3\">\n\n    <button class=\"btn btn-outline-primary btn-sm\"\n            (click)=\"prevPage()\"\n            [disabled]=\"currentPage===1\">\n      Previous\n    </button>\n\n    <span>Page {{currentPage}} of {{totalPages}}</span>\n\n    <button class=\"btn btn-outline-primary btn-sm\"\n            (click)=\"nextPage()\"\n            [disabled]=\"currentPage===totalPages\">\n      Next\n    </button>\n\n  </div>\n\n</div>\n\n\n\n<ng-template #editModal let-modal>\n\n  <div class=\"modal-header\">\n    <h5>Edit Group</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n\n    <!-- Name -->\n    <div class=\"mb-3\">\n      <label>Group Name</label>\n      <input class=\"form-control\"\n             [(ngModel)]=\"selectedGroup.grpName\">\n    </div>\n\n    <!-- Firmware -->\n    <div class=\"mb-3\">\n      <label>Firmware</label>\n      <select class=\"form-control\"\n              [(ngModel)]=\"selectedGroup.fwId\">\n        <option *ngFor=\"let f of firmwareList\"\n                [value]=\"f.fwId\">\n          {{f.firmName}} - {{f.swVersion}}\n        </option>\n      </select>\n    </div>\n\n    <!-- Setting -->\n    <div class=\"mb-3\">\n      <label>Setting</label>\n      <select class=\"form-control\"\n              [(ngModel)]=\"selectedGroup.settingId\">\n        <option *ngFor=\"let s of settingList\"\n                [value]=\"s.settingId\">\n          {{s.name}}\n        </option>\n      </select>\n    </div>\n\n    <!-- Description -->\n    <div class=\"mb-3\">\n      <label>Description</label>\n      <textarea class=\"form-control\"\n                [(ngModel)]=\"selectedGroup.desc\">\n      </textarea>\n    </div>\n\n  </div>\n\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-secondary\"\n            (click)=\"modal.dismiss()\">\n      Cancel\n    </button>\n\n    <button class=\"btn btn-primary\"\n            (click)=\"updateGroup(modal)\">\n      Update\n    </button>\n  </div>\n\n</ng-template>\n\n\n\n\n\n<ng-template #deleteModal let-modal>\n\n  <div class=\"modal-header\">\n    <h5 class=\"text-danger\">Confirm Delete</h5>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n    Are you sure you want to delete group\n    <b>{{selectedGroup?.grpName}}</b> ?\n  </div>\n\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-secondary\"\n            (click)=\"modal.dismiss()\">\n      Cancel\n    </button>\n\n    <button class=\"btn btn-danger\"\n            (click)=\"confirmDelete(modal)\">\n      Delete\n    </button>\n  </div>\n\n</ng-template>\n\n<ng-template #importModal let-modal>\n\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Device Import</h5>\n    \n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n\n  <div class=\"modal-body\">\n\n    <label class=\"form-label\">\n      Devices (Paste IMEIs separated by space or line break)\n    </label>\n\n    <textarea\n      class=\"form-control\"\n      rows=\"6\"\n      [(ngModel)]=\"imeiInput\"\n      placeholder=\"Enter IMEIs here\">\n    </textarea>\n\n  </div>\n\n  <div class=\"modal-footer\">\n\n    <button class=\"btn btn-primary\"\n            (click)=\"importDevices(modal)\">\n      Import\n    </button>\n\n    <button class=\"btn btn-secondary\"\n            (click)=\"modal.dismiss()\">\n      Cancel\n    </button>\n\n\n  </div>\n\n</ng-template>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/setting/add-setting/add-setting.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/setting/add-setting/add-setting.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"create(form)\" class=\"card p-4\">\n\n    <h4 class=\"mb-4\">Create Setting</h4>\n\n    <!-- ================= BASIC ================= -->\n\n    <h5 class=\"mb-3\">Basic Settings</h5>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-4 mb-3\">\n            <label class=\"form-label\">Setting Name *</label>\n            <input class=\"form-control\" name=\"name\" [(ngModel)]=\"setting.name\" required>\n        </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <label class=\"form-label\">Breadcrumb Distance *</label>\n            <input type=\"number\" class=\"form-control\" name=\"breadcrumb\" [(ngModel)]=\"setting.breadcrumb\" required>\n        </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <label class=\"form-label\">Heartbeat Interval *</label>\n            <input type=\"number\" class=\"form-control\" name=\"hbt\" [(ngModel)]=\"setting.hbt\" required>\n        </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <label class=\"form-label\">Battery Heartbeat *</label>\n            <input type=\"number\" class=\"form-control\" name=\"btHbt\" [(ngModel)]=\"setting.btHbt\" required>\n        </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <label class=\"form-label\">Stop Threshold *</label>\n            <input type=\"number\" class=\"form-control\" name=\"stop\" [(ngModel)]=\"setting.stop\" required>\n        </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <label class=\"form-label\">Sleep Interval *</label>\n            <input type=\"number\" class=\"form-control\" name=\"sleep\" [(ngModel)]=\"setting.sleep\" required>\n        </div>\n\n    </div>\n\n    <hr class=\"my-4\">\n\n    <!-- ================= MOVE TRIGGER ================= -->\n\n    <h5 class=\"mb-3\">Move Trigger</h5>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-4 mb-3\">\n            <label class=\"form-label\">Minimum Speed (km/h)</label>\n            <input type=\"number\" class=\"form-control\" name=\"minSpeed\" [(ngModel)]=\"setting.moveTrigger.minSpeedKph\">\n        </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <label class=\"form-label\">Speed Count</label>\n            <input type=\"number\" class=\"form-control\" name=\"speedCount\" [(ngModel)]=\"setting.moveTrigger.speedCount\">\n        </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <label class=\"form-label\">Minimum Distance (meters)</label>\n            <input type=\"number\" class=\"form-control\" name=\"minDist\" [(ngModel)]=\"setting.moveTrigger.minDistanceM\">\n        </div>\n\n    </div>\n\n    <hr class=\"my-4\">\n\n    <!-- ================= RESET TIMEOUTS ================= -->\n\n    <h5 class=\"mb-3\">Reset Timeouts *</h5>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-4 mb-3\">\n            <label class=\"form-label\">Device Timeout (sec)</label>\n            <input type=\"number\" class=\"form-control\" name=\"deviceTimeout\"\n                [(ngModel)]=\"setting.resetTimeouts.deviceTimeout\" required>\n        </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <label class=\"form-label\">GPS Timeout (sec)</label>\n            <input type=\"number\" class=\"form-control\" name=\"gpsTimeout\" [(ngModel)]=\"setting.resetTimeouts.gpsTimeout\"\n                required>\n        </div>\n\n        <div class=\"col-md-4 mb-3\">\n            <label class=\"form-label\">Cellular Timeout (sec)</label>\n            <input type=\"number\" class=\"form-control\" name=\"cellTimeout\"\n                [(ngModel)]=\"setting.resetTimeouts.cellularTimeout\" required>\n        </div>\n\n    </div>\n\n    <hr class=\"my-4\">\n\n    <!-- ================= QUALITY FILTER ================= -->\n\n    <h5 class=\"mb-3\">Quality Filter</h5>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-3 mb-3\">\n            <label class=\"form-label\">Minimum Satellites</label>\n            <input type=\"number\" class=\"form-control\" name=\"sat\" [(ngModel)]=\"setting.qualityFilters.minSatellite\">\n        </div>\n\n        <div class=\"col-md-3 mb-3\">\n            <label class=\"form-label\">Stop HAC</label>\n            <input type=\"number\" class=\"form-control\" name=\"stopHac\" [(ngModel)]=\"setting.qualityFilters.stopHac\">\n        </div>\n\n        <div class=\"col-md-3 mb-3\">\n            <label class=\"form-label\">Move HAC</label>\n            <input type=\"number\" class=\"form-control\" name=\"moveHac\" [(ngModel)]=\"setting.qualityFilters.moveHac\">\n        </div>\n\n        <div class=\"col-md-3 mb-3\">\n            <label class=\"form-label\">GSM RSSI</label>\n            <input type=\"number\" class=\"form-control\" name=\"rssi\" [(ngModel)]=\"setting.qualityFilters.gsmRssi\">\n        </div>\n\n    </div>\n\n    <hr class=\"my-4\">\n\n    <!-- ================= DASHBOARD SERVER ================= -->\n\n    <h5 class=\"mb-3\">Dashboard Server</h5>\n\n    <div class=\"row\">\n\n        <div class=\"col-md-6 mb-3\">\n            <label class=\"form-label\">Server IP Address</label>\n            <input class=\"form-control\" name=\"ip\" [(ngModel)]=\"setting.dashboardServer.ip\">\n        </div>\n\n        <div class=\"col-md-6 mb-3\">\n            <label class=\"form-label\">Server Port</label>\n            <input type=\"number\" class=\"form-control\" name=\"port\" [(ngModel)]=\"setting.dashboardServer.port\">\n        </div>\n\n    </div>\n\n    <hr class=\"my-4\">\n\n    <!-- ================= AT COMMANDS ================= -->\n\n    <h5 class=\"mb-3\">AT Commands</h5>\n\n    <div class=\"mb-3\">\n\n        <label class=\"form-label\">\n            Commands (comma or space separated)\n        </label>\n\n        <textarea class=\"form-control\" rows=\"3\" name=\"commands\" [(ngModel)]=\"setting.atCommands\"\n            placeholder=\"AT+CGATT=1, AT+CSQ, AT+CREG?\">\n</textarea>\n\n        <small class=\"text-muted\">\n            Example: AT+CGATT=1, AT+CSQ, AT+CREG?\n        </small>\n\n    </div>\n\n    <!-- ================= SUBMIT ================= -->\n\n    <div class=\"text-end mt-4\">\n\n        <button class=\"btn btn-primary px-4\" [disabled]=\"form.invalid\">\n            Create Setting\n        </button>\n\n    </div>\n\n</form>\n\n\n\n<div class=\"card mt-4 p-4\">\n\n    <h4>Settings List</h4>\n\n    <table class=\"table table-bordered mt-3\">\n\n        <thead style=\"background:#101b33;color:white\">\n            <tr>\n                <th>Name</th>\n                <th>Breadcrumb</th>\n                <th>HBT</th>\n                <th>Stop</th>\n                <th>Sleep</th>\n                <th>Action</th>\n            </tr>\n        </thead>\n\n        <tbody>\n\n            <tr *ngFor=\"let s of settings\">\n\n                <td>{{s.name}}</td>\n                <td>{{s.breadcrumb}}</td>\n                <td>{{s.hbt}}</td>\n                <td>{{s.stop}}</td>\n                <td>{{s.sleep}}</td>\n\n                <td class=\"text-center\">\n\n                    <i class=\"fa fa-edit text-primary action-icon\" ngbTooltip=\"Edit\"\n                        (click)=\"openEdit(editModal,s)\"></i>\n\n                    <i class=\"fa fa-trash text-danger action-icon\" ngbTooltip=\"Delete\"\n                        (click)=\"openDelete(deleteModal,s)\"></i>\n\n                </td>\n\n            </tr>\n\n            <tr *ngIf=\"settings.length==0\">\n                <td colspan=\"6\" class=\"text-center text-muted\">No data</td>\n            </tr>\n\n        </tbody>\n\n    </table>\n    <div class=\"d-flex justify-content-between align-items-center mt-3\">\n\n        <!-- LEFT -->\n        <div>\n            <button class=\"btn btn-outline-primary btn-sm\" (click)=\"changePage(currentPage-1)\"\n                [disabled]=\"currentPage==1\">\n                Previous\n            </button>\n        </div>\n\n        <!-- CENTER -->\n        <div>\n            Page {{currentPage}} of {{totalPages}}\n        </div>\n\n        <!-- RIGHT -->\n        <div>\n            <button class=\"btn btn-outline-primary btn-sm\" (click)=\"changePage(currentPage+1)\"\n                [disabled]=\"currentPage==totalPages\">\n                Next\n            </button>\n        </div>\n\n    </div>\n\n\n</div>\n\n\n\n<ng-template #editModal let-modal>\n\n    <div class=\"modal-header\">\n        <h5>Edit Setting</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n\n        <!-- ================= NAME (EDITABLE) ================= -->\n\n        <div class=\"mb-3\">\n            <label class=\"form-label\">Setting Name</label>\n            <input class=\"form-control\" [(ngModel)]=\"selected.name\">\n        </div>\n\n        <hr>\n\n        <!-- ================= BASIC ================= -->\n\n        <h6 class=\"mt-3\">Basic</h6>\n\n        <div class=\"row\">\n\n            <div class=\"col-md-4 mb-3\">\n                <label>Breadcrumb</label>\n                <input class=\"form-control\" [value]=\"selected.breadcrumb\" disabled>\n            </div>\n\n            <div class=\"col-md-4 mb-3\">\n                <label>Heartbeat</label>\n                <input class=\"form-control\" [value]=\"selected.hbt\" disabled>\n            </div>\n\n            <div class=\"col-md-4 mb-3\">\n                <label>Battery HBT</label>\n                <input class=\"form-control\" [value]=\"selected.btHbt\" disabled>\n            </div>\n\n            <div class=\"col-md-4 mb-3\">\n                <label>Stop</label>\n                <input class=\"form-control\" [value]=\"selected.stop\" disabled>\n            </div>\n\n            <div class=\"col-md-4 mb-3\">\n                <label>Sleep</label>\n                <input class=\"form-control\" [value]=\"selected.sleep\" disabled>\n            </div>\n\n        </div>\n\n        <hr>\n\n        <!-- ================= MOVE TRIGGER ================= -->\n\n        <h6>Move Trigger</h6>\n\n        <div class=\"row\">\n\n            <div class=\"col-md-4 mb-3\">\n                <label>Min Speed</label>\n                <input class=\"form-control\" [value]=\"selected.moveTrigger?.minSpeedKph\" disabled>\n            </div>\n\n            <div class=\"col-md-4 mb-3\">\n                <label>Speed Count</label>\n                <input class=\"form-control\" [value]=\"selected.moveTrigger?.speedCount\" disabled>\n            </div>\n\n            <div class=\"col-md-4 mb-3\">\n                <label>Min Distance</label>\n                <input class=\"form-control\" [value]=\"selected.moveTrigger?.minDistanceM\" disabled>\n            </div>\n\n        </div>\n\n        <hr>\n\n        <!-- ================= RESET ================= -->\n\n        <h6>Reset Timeouts</h6>\n\n        <div class=\"row\">\n\n            <div class=\"col-md-4 mb-3\">\n                <label>Device Timeout</label>\n                <input class=\"form-control\" [value]=\"selected.resetTimeouts?.deviceTimeout\" disabled>\n            </div>\n\n            <div class=\"col-md-4 mb-3\">\n                <label>GPS Timeout</label>\n                <input class=\"form-control\" [value]=\"selected.resetTimeouts?.gpsTimeout\" disabled>\n            </div>\n\n            <div class=\"col-md-4 mb-3\">\n                <label>Cell Timeout</label>\n                <input class=\"form-control\" [value]=\"selected.resetTimeouts?.cellularTimeout\" disabled>\n            </div>\n\n        </div>\n\n        <hr>\n\n        <!-- ================= SERVER ================= -->\n\n        <h6>Dashboard Server</h6>\n\n        <div class=\"row\">\n\n            <div class=\"col-md-6 mb-3\">\n                <label>IP</label>\n                <input class=\"form-control\" [value]=\"selected.dashboardServer?.ip\" disabled>\n            </div>\n\n            <div class=\"col-md-6 mb-3\">\n                <label>Port</label>\n                <input class=\"form-control\" [value]=\"selected.dashboardServer?.port\" disabled>\n            </div>\n\n        </div>\n\n        <hr>\n\n        <!-- ================= AT COMMANDS ================= -->\n\n        <h6>AT Commands</h6>\n\n        <textarea class=\"form-control\" rows=\"3\" [value]=\"selected.atCommands?.join(', ')\" disabled>\n</textarea>\n\n    </div>\n\n    <div class=\"modal-footer\">\n\n        <button class=\"btn btn-secondary\" (click)=\"modal.dismiss()\">Cancel</button>\n\n        <button class=\"btn btn-primary\" (click)=\"update(modal)\">\n            Update Name\n        </button>\n\n    </div>\n\n</ng-template>\n\n\n\n\n<ng-template #deleteModal let-modal>\n\n    <div class=\"modal-header\">\n        <h5 class=\"text-danger\">Delete Setting</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n\n    <div class=\"modal-body\">\n        Delete <b>{{selected?.name}}</b> ?\n    </div>\n\n    <div class=\"modal-footer\">\n        <button class=\"btn btn-secondary\" (click)=\"modal.dismiss()\">Cancel</button>\n        <button class=\"btn btn-danger\" (click)=\"delete(modal)\">Delete</button>\n    </div>\n\n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/theme/layout/user/add-user/add-user.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/theme/layout/user/add-user/add-user.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (ngSubmit)=\"submit(form)\" class=\"card p-4\">\n\n    <h4 class=\"mb-4\">Add User</h4>\n\n    <div class=\"row\">\n\n        <!-- NAME -->\n        <div class=\"col-md-6 mb-3\">\n            <label class=\"form-label\">Full Name *</label>\n            <input class=\"form-control\" name=\"name\" [(ngModel)]=\"user.name\" required>\n        </div>\n\n        <!-- EMAIL -->\n        <div class=\"col-md-6 mb-3\">\n            <label class=\"form-label\">Email *</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"user.email\" required email>\n        </div>\n\n        <!-- PASSWORD -->\n        <div class=\"col-md-6 mb-3\">\n            <label class=\"form-label\">Password *</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"user.password\" required\n                minlength=\"6\">\n\n            <small class=\"text-danger\" *ngIf=\"form.submitted && form.controls.password?.errors?.minlength\">\n                Password must be at least 6 characters\n            </small>\n        </div>\n\n        <!-- PHONE -->\n        <div class=\"col-md-6 mb-3\">\n            <label class=\"form-label\">Phone *</label>\n            <input class=\"form-control\" name=\"phone\" [(ngModel)]=\"user.phone\" required pattern=\"^[0-9]{10}$\">\n\n            <small class=\"text-danger\" *ngIf=\"form.submitted && form.controls.phone?.invalid\">\n                Enter valid 10 digit number\n            </small>\n        </div>\n\n        <!-- TIMEZONE -->\n        <div class=\"col-md-6 mb-3\">\n            <label class=\"form-label\">Timezone *</label>\n\n            <select class=\"form-control\" name=\"timezone\" [(ngModel)]=\"user.timezone\" required>\n\n                <option value=\"\">Select Timezone</option>\n\n                <option *ngFor=\"let t of timezones\" [value]=\"t\">\n                    {{t}}\n                </option>\n\n            </select>\n        </div>\n\n        <!-- ROLE -->\n        <div class=\"col-md-6 mb-3\">\n            <label class=\"form-label d-block\">Role</label>\n\n            <div class=\"form-check\">\n\n                <input class=\"form-check-input\" type=\"checkbox\" name=\"role\" [(ngModel)]=\"user.role\" id=\"roleCheck\">\n\n                <label class=\"form-check-label\" for=\"roleCheck\">\n                    Master User\n                </label>\n\n            </div>\n\n            <small class=\"text-muted\">\n                Checked = Master user, Unchecked = Normal user\n            </small>\n\n        </div>\n\n\n    </div>\n\n    <!-- SUBMIT -->\n    <div class=\"text-end mt-4\">\n        <button class=\"btn btn-primary px-4\" [disabled]=\"form.invalid\">\n            Create User\n        </button>\n    </div>\n\n</form>"

/***/ }),

/***/ "./src/app/app-config.ts":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! exports provided: NextConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextConfig", function() { return NextConfig; });
class NextConfig {
}
NextConfig.config = {
    layout: 'vertical',
    subLayout: '',
    collapseMenu: false,
    layoutType: 'dark',
    headerBackColor: 'header-info',
    navBrandColor: 'brand-default',
    rtlLayout: false,
    navFixedLayout: true,
    headerFixedLayout: true,
    boxLayout: false,
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme/layout/admin/admin.component */ "./src/app/theme/layout/admin/admin.component.ts");
/* harmony import */ var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme/layout/auth/auth.component */ "./src/app/theme/layout/auth/auth.component.ts");
/* harmony import */ var _theme_layout_firmware_add_firmware_add_firmware_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/layout/firmware/add-firmware/add-firmware.component */ "./src/app/theme/layout/firmware/add-firmware/add-firmware.component.ts");
/* harmony import */ var _theme_layout_group_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./theme/layout/group/add-group/add-group.component */ "./src/app/theme/layout/group/add-group/add-group.component.ts");
/* harmony import */ var _theme_layout_setting_add_setting_add_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme/layout/setting/add-setting/add-setting.component */ "./src/app/theme/layout/setting/add-setting/add-setting.component.ts");
/* harmony import */ var _theme_layout_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/layout/user/add-user/add-user.component */ "./src/app/theme/layout/user/add-user/add-user.component.ts");
/* harmony import */ var _theme_shared_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme/shared/authguard/auth.guard */ "./src/app/theme/shared/authguard/auth.guard.ts");










const routes = [
    {
        path: '',
        redirectTo: 'auth/signin',
        pathMatch: 'full'
    },
    // 🔐 Auth routes (Login first)
    {
        path: 'auth',
        component: _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_4__["AuthComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | demo-pages-authentication-authentication-module */ "demo-pages-authentication-authentication-module").then(__webpack_require__.bind(null, /*! ./demo/pages/authentication/authentication.module */ "./src/app/demo/pages/authentication/authentication.module.ts"))
            .then(m => m.AuthenticationModule)
    },
    {
        path: '',
        component: _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
        canActivate: [_theme_shared_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        canActivateChild: [_theme_shared_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]],
        children: [
            {
                path: 'device',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-layout-device-device-module */ "theme-layout-device-device-module").then(__webpack_require__.bind(null, /*! ./theme/layout/device/device.module */ "./src/app/theme/layout/device/device.module.ts")).then(module => module.DeviceModule),
                canLoad: [_theme_shared_authguard_auth_guard__WEBPACK_IMPORTED_MODULE_9__["AuthGuard"]]
            },
            {
                path: 'transfer',
                loadChildren: () => __webpack_require__.e(/*! import() | theme-layout-transfer-transfer-module */ "theme-layout-transfer-transfer-module").then(__webpack_require__.bind(null, /*! ./theme/layout/transfer/transfer.module */ "./src/app/theme/layout/transfer/transfer.module.ts")).then(module => module.TransferModule)
            },
            {
                path: 'firmware',
                component: _theme_layout_firmware_add_firmware_add_firmware_component__WEBPACK_IMPORTED_MODULE_5__["AddFirmwareComponent"]
            },
            {
                path: 'group',
                component: _theme_layout_group_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_6__["AddGroupComponent"]
            },
            {
                path: 'setting',
                component: _theme_layout_setting_add_setting_add_setting_component__WEBPACK_IMPORTED_MODULE_7__["AddSettingComponent"]
            },
            {
                path: 'user',
                component: _theme_layout_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_8__["AddUserComponent"]
            },
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme/shared/shared.module */ "./src/app/theme/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme/layout/admin/admin.component */ "./src/app/theme/layout/admin/admin.component.ts");
/* harmony import */ var _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/layout/auth/auth.component */ "./src/app/theme/layout/auth/auth.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme/layout/admin/navigation/navigation.component */ "./src/app/theme/layout/admin/navigation/navigation.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-content.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-group/nav-group.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
/* harmony import */ var _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./theme/layout/admin/navigation/nav-content/nav-item/nav-item.component */ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-bar.component */ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-left/nav-left.component */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts");
/* harmony import */ var _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./theme/layout/admin/nav-bar/nav-right/nav-right.component */ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts");
/* harmony import */ var _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./theme/shared/full-screen/toggle-full-screen */ "./src/app/theme/shared/full-screen/toggle-full-screen.ts");
/* harmony import */ var _theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./theme/layout/admin/navigation/navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! css-animator */ "./node_modules/css-animator/index.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _theme_layout_firmware_add_firmware_add_firmware_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./theme/layout/firmware/add-firmware/add-firmware.component */ "./src/app/theme/layout/firmware/add-firmware/add-firmware.component.ts");
/* harmony import */ var _theme_layout_group_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./theme/layout/group/add-group/add-group.component */ "./src/app/theme/layout/group/add-group/add-group.component.ts");
/* harmony import */ var _theme_layout_setting_add_setting_add_setting_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./theme/layout/setting/add-setting/add-setting.component */ "./src/app/theme/layout/setting/add-setting/add-setting.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm2015/ng2-file-upload.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _theme_shared_interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./theme/shared/interceptors/jwt-interceptor.service */ "./src/app/theme/shared/interceptors/jwt-interceptor.service.ts");
/* harmony import */ var _theme_layout_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./theme/layout/user/add-user/add-user.component */ "./src/app/theme/layout/user/add-user/add-user.component.ts");
/* harmony import */ var _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./theme/layout/admin/configuration/configuration.component */ "./src/app/theme/layout/admin/configuration/configuration.component.ts");



















/* Menu Items */
















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _theme_layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
            _theme_layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_8__["AuthComponent"],
            _theme_layout_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
            _theme_layout_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_10__["NavContentComponent"],
            _theme_layout_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_11__["NavGroupComponent"],
            _theme_layout_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_12__["NavCollapseComponent"],
            _theme_layout_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_13__["NavItemComponent"],
            _theme_layout_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
            _theme_layout_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_15__["NavLeftComponent"],
            _theme_layout_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_16__["NavSearchComponent"],
            _theme_layout_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_17__["NavRightComponent"],
            _theme_shared_full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_18__["ToggleFullScreenDirective"],
            _theme_layout_firmware_add_firmware_add_firmware_component__WEBPACK_IMPORTED_MODULE_22__["AddFirmwareComponent"],
            _theme_layout_group_add_group_add_group_component__WEBPACK_IMPORTED_MODULE_23__["AddGroupComponent"],
            _theme_layout_setting_add_setting_add_setting_component__WEBPACK_IMPORTED_MODULE_24__["AddSettingComponent"],
            _theme_layout_user_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_30__["AddUserComponent"],
            _theme_layout_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_31__["ConfigurationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbTabsetModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModalModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_26__["ToastrModule"].forRoot({
                timeOut: 5000,
                // extendedTimeOut: 1000,
                positionClass: 'toast-top-right',
                //  positionClass: 'toast-top-full-width',
                closeButton: true,
                // progressBar: true,
                // preventDuplicates: true,
                // newestOnTop: true,
                tapToDismiss: true,
                // enableHtml: false  
                iconClasses: {
                    error: 'toast-error',
                    info: 'toast-info',
                    success: 'toast-success',
                    warning: 'toast-warning'
                }
            }),
            ng2_file_upload__WEBPACK_IMPORTED_MODULE_27__["FileUploadModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_28__["NgSelectModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModule"]
        ],
        providers: [_theme_layout_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_19__["NavigationItem"], css_animator__WEBPACK_IMPORTED_MODULE_21__["AnimationService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HTTP_INTERCEPTORS"],
                useClass: _theme_shared_interceptors_jwt_interceptor_service__WEBPACK_IMPORTED_MODULE_29__["JwtInterceptorService"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/theme/layout/admin/admin.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/theme/layout/admin/admin.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/layout/admin/admin.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/admin/admin.component.ts ***!
  \*******************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let AdminComponent = class AdminComponent {
    constructor(zone, location) {
        this.zone = zone;
        this.location = location;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
        let currentURL = this.location.path();
        const baseHerf = this.location['_baseHref'];
        if (baseHerf) {
            currentURL = baseHerf + this.location.path();
        }
        this.windowWidth = window.innerWidth;
        if (currentURL === baseHerf + '/layout/collapse-menu'
            || currentURL === baseHerf + '/layout/box'
            || (this.windowWidth >= 992 && this.windowWidth <= 1024)) {
            this.nextConfig.collapseMenu = true;
        }
        this.navCollapsed = (this.windowWidth >= 992) ? this.nextConfig.collapseMenu : false;
        this.navCollapsedMob = false;
    }
    ngOnInit() {
        if (this.windowWidth < 992) {
            this.nextConfig.layout = 'vertical';
            setTimeout(() => {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-next').style.maxHeight = '100%'; // 100% amit
            }, 500);
        }
    }
    navMobClick() {
        if (this.windowWidth < 992) {
            if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
                this.navCollapsedMob = !this.navCollapsedMob;
                setTimeout(() => {
                    this.navCollapsedMob = !this.navCollapsedMob;
                }, 100);
            }
            else {
                this.navCollapsedMob = !this.navCollapsedMob;
            }
        }
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/theme/layout/admin/admin.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], AdminComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/configuration/configuration.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/layout/admin/configuration/configuration.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none;\n}\n\nbody.next-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03);\n}\n\nbody.next-dark .menu-styler h1,\nbody.next-dark .menu-styler h2,\nbody.next-dark .menu-styler h3,\nbody.next-dark .menu-styler h4,\nbody.next-dark .menu-styler h5,\nbody.next-dark .menu-styler p,\nbody.next-dark .menu-styler h6 {\n  color: #222;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plbmV4MTUvRG9jdW1lbnRzL0plbmV4X1Byb2plY3QvR2Vvd2lzZV9hcHAvc3JjL2FwcC90aGVtZS9sYXlvdXQvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9sYXlvdXQvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRE1JO0VBQ0UsbUNBQUE7QUNITjs7QURLSTs7Ozs7OztFQU9FLFdBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zdHlsZXIge1xyXG4gIC5uYXYtcGlsbHMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG59XHJcbmJvZHkubmV4dC1kYXJre1xyXG4gIC5tZW51LXN0eWxlcntcclxuICAgIC50YWItY29udGVudHtcclxuICAgICAgYmFja2dyb3VuZDpyZ2JhKDQsIDE2OSwgMjQ1LCAwLjAzKTtcclxuICAgIH1cclxuICAgIGgxLFxyXG4gICAgaDIsXHJcbiAgICBoMyxcclxuICAgIGg0LFxyXG4gICAgaDUsXHJcbiAgICBwLFxyXG4gICAgaDZ7XHJcbiAgICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIubWVudS1zdHlsZXIgLm5hdi1waWxscyB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIC50YWItY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNCwgMTY5LCAyNDUsIDAuMDMpO1xufVxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIGgxLFxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIGgyLFxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIGgzLFxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIGg0LFxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIGg1LFxuYm9keS5uZXh0LWRhcmsgLm1lbnUtc3R5bGVyIHAsXG5ib2R5Lm5leHQtZGFyayAubWVudS1zdHlsZXIgaDYge1xuICBjb2xvcjogIzIyMjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/layout/admin/configuration/configuration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/configuration/configuration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let ConfigurationComponent = class ConfigurationComponent {
    constructor(zone, location) {
        this.zone = zone;
        this.location = location;
        this.scroll = () => {
            if (this.headerFixedLayout === false) {
                document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh)';
                const el = document.querySelector('.pcoded-navbar.menupos-fixed');
                const scrollPosition = window.pageYOffset;
                if (scrollPosition > 60) {
                    el.style.position = 'fixed';
                    el.style.transition = 'none';
                    el.style.marginTop = '0';
                }
                else {
                    el.style.position = 'absolute';
                    el.style.marginTop = '60px';
                }
            }
            else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
                document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
            }
        };
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
        this.setThemeLayout();
    }
    ngOnInit() {
        this.styleSelectorToggle = false;
        this.layoutType = this.nextConfig.layoutType;
        this.setLayout(this.layoutType);
        this.headerBackgroundColor = this.nextConfig.headerBackColor;
        this.brandBackgroundColor = this.nextConfig.navBrandColor;
        this.setHeaderBackground(this.headerBackgroundColor);
        this.setBrandBackground(this.brandBackgroundColor);
        this.rtlLayout = this.nextConfig.rtlLayout;
        this.changeRtlLayout(this.rtlLayout);
        this.menuFixedLayout = this.nextConfig.navFixedLayout;
        if (this.nextConfig.layout === 'vertical') {
            this.changeMenuFixedLayout(this.menuFixedLayout);
        }
        this.headerFixedLayout = this.nextConfig.headerFixedLayout;
        this.changeHeaderFixedLayout(this.headerFixedLayout);
        this.boxLayout = this.nextConfig.boxLayout;
        this.changeBoxLayout(this.boxLayout);
    }
    setThemeLayout() {
        let currentURL = this.location.path();
        const baseHref = this.location['_baseHref'];
        if (baseHref) {
            currentURL = baseHref + this.location.path();
        }
        switch (currentURL) {
            case baseHref + '/layout/static':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/fixed':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = true;
                break;
            case baseHref + '/layout/nav-fixed':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/collapse-menu':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.collapseMenu = true;
                break;
            case baseHref + '/layout/vertical-rtl':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.rtlLayout = true;
                break;
            case baseHref + '/layout/horizontal':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/horizontal-l2':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.subLayout = 'horizontal-2';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/horizontal-rtl':
                this.nextConfig.layout = 'horizontal';
                this.nextConfig.subLayout = 'horizontal-2';
                this.nextConfig.navFixedLayout = false;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.rtlLayout = true;
                break;
            case baseHref + '/layout/box':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.boxLayout = true;
                this.nextConfig.headerFixedLayout = false;
                this.nextConfig.collapseMenu = true;
                break;
            case baseHref + '/layout/light':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'menu-light';
                this.nextConfig.headerBackColor = 'header-default';
                break;
            case baseHref + '/layout/dark':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'dark';
                this.nextConfig.headerBackColor = 'header-blue';
                break;
            case baseHref + '/layout/nav-color':
                this.nextConfig.layout = 'vertical';
                this.nextConfig.layoutType = 'menu-light';
                this.nextConfig.headerBackColor = 'header-info';
                this.nextConfig.navBrandColor = 'brand-info';
                this.nextConfig.navFixedLayout = true;
                this.nextConfig.headerFixedLayout = true;
                break;
            default:
                break;
        }
    }
    setHeaderBackColor(color) {
        this.headerBackColor = color;
        document.querySelector('body').style.background = color;
    }
    // change main layout
    setLayout(layout) {
        this.isConfig = true;
        this.setBrandBackground(this.nextConfig.navBrandColor);
        document.querySelector('.pcoded-navbar').classList.remove('menu-light');
        document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
        document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
        document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
        document.querySelector('body').classList.remove('next-dark');
        this.layoutType = layout;
        if (layout === 'menu-light') {
            this.setBrandBackground(this.brandBackgroundColor);
            document.querySelector('.pcoded-navbar').classList.add(layout);
        }
        if (layout === 'dark') {
            document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
            document.querySelector('.pcoded-navbar').classList.add('brand-dark');
            this.setBrandBackground('brand-blue');
            this.setHeaderBackground('header-blue');
            document.querySelector('body').classList.add('next-dark');
        }
        if (layout === 'reset') {
            this.reset();
        }
    }
    reset() {
        document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
        this.ngOnInit();
    }
    setRtlLayout(e) {
        const flag = !!(e.target.checked);
        this.changeRtlLayout(flag);
    }
    changeRtlLayout(flag) {
        if (flag) {
            document.querySelector('body').classList.add('next-rtl');
        }
        else {
            document.querySelector('body').classList.remove('next-rtl');
        }
    }
    setMenuFixedLayout(e) {
        const flag = !!(e.target.checked);
        this.changeMenuFixedLayout(flag);
    }
    changeMenuFixedLayout(flag) {
        setTimeout(() => {
            if (flag) {
                document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
                document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');
                if (this.nextConfig.layout === 'vertical') {
                    document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
                }
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
            }
            else {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');
                if (this.nextConfig.layout === 'vertical') {
                    document.querySelector('#nav-ps-next').style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
                }
                if (this.nextConfig.layout === 'vertical') {
                    window.removeEventListener('scroll', this.scroll, true);
                }
            }
        }, 100);
    }
    setHeaderFixedLayout(e) {
        const flag = !!(e.target.checked);
        this.changeHeaderFixedLayout(flag);
    }
    changeHeaderFixedLayout(flag) {
        if (flag) {
            document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
        }
        else {
            document.querySelector('.pcoded-header').classList.remove('headerpos-fixed');
            // static
            if (this.nextConfig.layout === 'vertical' && this.menuFixedLayout) {
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
            }
            else {
                window.removeEventListener('scroll', this.scroll, true);
            }
        }
    }
    setBoxLayout(e) {
        const flag = !!(e.target.checked);
        this.changeBoxLayout(flag);
    }
    changeBoxLayout(flag) {
        if (flag) {
            document.querySelector('body').classList.add('container');
            document.querySelector('body').classList.add('box-layout');
        }
        else {
            document.querySelector('body').classList.remove('box-layout');
            document.querySelector('body').classList.remove('container');
        }
    }
    setHeaderBackground(background) {
        this.headerBackgroundColor = background;
        this.nextConfig.headerBackColor = background;
        document.querySelector('.pcoded-header').classList.remove('header-blue');
        document.querySelector('.pcoded-header').classList.remove('header-red');
        document.querySelector('.pcoded-header').classList.remove('header-purple');
        document.querySelector('.pcoded-header').classList.remove('header-info');
        document.querySelector('.pcoded-header').classList.remove('header-dark');
        if (background !== 'header-default') {
            document.querySelector('.pcoded-header').classList.add(background);
        }
    }
    setBrandBackground(background) {
        this.brandBackgroundColor = background;
        this.nextConfig.navBrandColor = background;
        document.querySelector('.pcoded-header').classList.remove('brand-blue');
        document.querySelector('.pcoded-header').classList.remove('brand-red');
        document.querySelector('.pcoded-header').classList.remove('brand-purple');
        document.querySelector('.pcoded-header').classList.remove('brand-info');
        document.querySelector('.pcoded-header').classList.remove('brand-dark');
        document.querySelector('.pcoded-header').classList.remove('brand-default');
        document.querySelector('.pcoded-header').classList.add(background);
    }
};
ConfigurationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuration',
        template: __webpack_require__(/*! raw-loader!./configuration.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/configuration/configuration.component.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./configuration.component.scss */ "./src/app/theme/layout/admin/configuration/configuration.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], ConfigurationComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".m-header .b-brand .logo {\n  height: 36px;\n  /* Perfect navbar height */\n  width: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plbmV4MTUvRG9jdW1lbnRzL0plbmV4X1Byb2plY3QvR2Vvd2lzZV9hcHAvc3JjL2FwcC90aGVtZS9sYXlvdXQvYWRtaW4vbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90aGVtZS9sYXlvdXQvYWRtaW4vbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUFrQiwwQkFBQTtFQUNsQixXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvbGF5b3V0L2FkbWluL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tLWhlYWRlciAuYi1icmFuZCAubG9nbyB7XG4gIGhlaWdodDogMzZweDsgICAgIC8qIFBlcmZlY3QgbmF2YmFyIGhlaWdodCAqL1xuICB3aWR0aDogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn0iLCIubS1oZWFkZXIgLmItYnJhbmQgLmxvZ28ge1xuICBoZWlnaHQ6IDM2cHg7XG4gIC8qIFBlcmZlY3QgbmF2YmFyIGhlaWdodCAqL1xuICB3aWR0aDogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-config */ "./src/app/app-config.ts");



let NavBarComponent = class NavBarComponent {
    constructor() {
        this.onNavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNavHeaderMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
        this.menuClass = false;
        this.collapseStyle = 'none';
        this.windowWidth = window.innerWidth;
    }
    ngOnInit() { }
    toggleMobOption() {
        this.menuClass = !this.menuClass;
        this.collapseStyle = (this.menuClass) ? 'block' : 'none';
    }
    navCollapse() {
        if (this.windowWidth >= 992) {
            this.onNavCollapse.emit();
        }
        else {
            this.onNavHeaderMobCollapse.emit();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavBarComponent.prototype, "onNavCollapse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavBarComponent.prototype, "onNavHeaderMobCollapse", void 0);
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-bar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavBarComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1sZWZ0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.ts ***!
  \***************************************************************************/
/*! exports provided: NavLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function() { return NavLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavLeftComponent = class NavLeftComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-left',
        template: __webpack_require__(/*! raw-loader!./nav-left.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.html"),
        styles: [__webpack_require__(/*! ./nav-left.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-left.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavLeftComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1zZWFyY2gvbmF2LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NavSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSearchComponent", function() { return NavSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavSearchComponent = class NavSearchComponent {
    constructor() { }
    ngOnInit() { }
};
NavSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-search',
        template: __webpack_require__(/*! raw-loader!./nav-search.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.html"),
        styles: [__webpack_require__(/*! ./nav-search.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavSearchComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9uYXYtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NavRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavRightComponent", function() { return NavRightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NavRightComponent = class NavRightComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/auth/signin']);
    }
};
NavRightComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-right',
        template: __webpack_require__(/*! raw-loader!./nav-right.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.html"),
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
        styles: [__webpack_require__(/*! ./nav-right.component.scss */ "./src/app/theme/layout/admin/nav-bar/nav-right/nav-right.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], NavRightComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb2xsYXBzZS9uYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: NavCollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function() { return NavCollapseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts");





let NavCollapseComponent = class NavCollapseComponent {
    constructor() {
        this.visible = false;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["NextConfig"].config;
        this.themeLayout = this.nextConfig.layout;
    }
    ngOnInit() {
    }
    navCollapse(e) {
        this.visible = !this.visible;
        let parent = e.target;
        if (this.themeLayout === 'vertical') {
            parent = parent.parentElement;
        }
        const sections = document.querySelectorAll('.pcoded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] !== parent) {
                sections[i].classList.remove('pcoded-trigger');
            }
        }
        let firstParent = parent.parentElement;
        let preParent = parent.parentElement.parentElement;
        if (firstParent.classList.contains('pcoded-hasmenu')) {
            do {
                firstParent.classList.add('pcoded-trigger');
                // firstParent.parentElement.classList.toggle('pcoded-trigger');
                firstParent = firstParent.parentElement.parentElement.parentElement;
            } while (firstParent.classList.contains('pcoded-hasmenu'));
        }
        else if (preParent.classList.contains('pcoded-submenu')) {
            do {
                preParent.parentElement.classList.add('pcoded-trigger');
                preParent = preParent.parentElement.parentElement.parentElement;
            } while (preParent.classList.contains('pcoded-submenu'));
        }
        parent.classList.toggle('pcoded-trigger');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"])
], NavCollapseComponent.prototype, "item", void 0);
NavCollapseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-collapse',
        template: __webpack_require__(/*! raw-loader!./nav-collapse.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(-100%)', display: 'block' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(0%)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateY(-100%)' }))
                ])
            ])
        ],
        styles: [__webpack_require__(/*! ./nav-collapse.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavCollapseComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.ts ***!
  \************************************************************************************/
/*! exports provided: NavContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContentComponent", function() { return NavContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let NavContentComponent = class NavContentComponent {
    constructor(nav, zone, location) {
        this.nav = nav;
        this.zone = zone;
        this.location = location;
        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["NextConfig"].config;
        this.windowWidth = window.innerWidth;
        this.navigation = this.nav.get();
        this.prevDisabled = 'disabled';
        this.nextDisabled = '';
        this.scrollWidth = 0;
        this.contentWidth = 0;
    }
    ngOnInit() {
        if (this.windowWidth < 992) {
            this.nextConfig['layout'] = 'vertical';
            setTimeout(() => {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-next').style.maxHeight = '100%';
            }, 500);
        }
    }
    ngAfterViewInit() {
        if (this.nextConfig['layout'] === 'horizontal') {
            this.contentWidth = this.navbarContent.nativeElement.clientWidth;
            this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
        }
    }
    scrollPlus() {
        this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);
        if (this.scrollWidth > (this.contentWidth - this.wrapperWidth)) {
            this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
            this.nextDisabled = 'disabled';
        }
        this.prevDisabled = '';
        if (this.nextConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
        }
        else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
        }
    }
    scrollMinus() {
        this.scrollWidth = this.scrollWidth - this.wrapperWidth;
        if (this.scrollWidth < 0) {
            this.scrollWidth = 0;
            this.prevDisabled = 'disabled';
        }
        this.nextDisabled = '';
        if (this.nextConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
        }
        else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
        }
    }
    fireLeave() {
        const sections = document.querySelectorAll('.pcoded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove('active');
            sections[i].classList.remove('pcoded-trigger');
        }
        let current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent.parentElement.parentElement;
            const last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
                parent.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                last_parent.classList.add('active');
            }
        }
    }
    navMob() {
        if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
            this.onNavMobCollapse.emit();
        }
    }
    fireOutClick() {
        let current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent.parentElement.parentElement;
            const last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    parent.classList.add('pcoded-trigger');
                }
                parent.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    up_parent.classList.add('pcoded-trigger');
                }
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    last_parent.classList.add('pcoded-trigger');
                }
                last_parent.classList.add('active');
            }
        }
    }
};
NavContentComponent.ctorParameters = () => [
    { type: _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavContentComponent.prototype, "onNavMobCollapse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarContent', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], NavContentComponent.prototype, "navbarContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarWrapper', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], NavContentComponent.prototype, "navbarWrapper", void 0);
NavContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-content',
        template: __webpack_require__(/*! raw-loader!./nav-content.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.html"),
        styles: [__webpack_require__(/*! ./nav-content.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-content.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], NavContentComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1ncm91cC9uYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
  \********************************************************************************************/
/*! exports provided: NavGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavGroupComponent", function() { return NavGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts");





let NavGroupComponent = class NavGroupComponent {
    constructor(zone, location) {
        this.zone = zone;
        this.location = location;
        this.layout1 = false;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["NextConfig"].config;
    }
    ngOnInit() {
        // at reload time active and trigger link
        let current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent.parentElement.parentElement;
            const last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    parent.classList.add('pcoded-trigger');
                }
                parent.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    up_parent.classList.add('pcoded-trigger');
                }
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.nextConfig['layout'] === 'vertical') {
                    last_parent.classList.add('pcoded-trigger');
                }
                last_parent.classList.add('active');
            }
        }
    }
};
NavGroupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"])
], NavGroupComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], NavGroupComponent.prototype, "layout1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavGroupComponent.prototype, "activeId", void 0);
NavGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-group',
        template: __webpack_require__(/*! raw-loader!./nav-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.html"),
        styles: [__webpack_require__(/*! ./nav-group.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-group/nav-group.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
], NavGroupComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../navigation */ "./src/app/theme/layout/admin/navigation/navigation.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let NavItemComponent = class NavItemComponent {
    constructor(location) {
        this.location = location;
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["NextConfig"].config;
        this.themeLayout = this.nextConfig['layout'];
    }
    ngOnInit() {
    }
    closeOtherMenu(event) {
        if (this.nextConfig['layout'] === 'vertical') {
            const ele = event.target;
            if (ele !== null && ele !== undefined) {
                const parent = ele.parentElement;
                const up_parent = parent.parentElement.parentElement;
                const last_parent = up_parent.parentElement;
                const sections = document.querySelectorAll('.pcoded-hasmenu');
                for (let i = 0; i < sections.length; i++) {
                    sections[i].classList.remove('active');
                    sections[i].classList.remove('pcoded-trigger');
                }
                if (parent.classList.contains('pcoded-hasmenu')) {
                    parent.classList.add('pcoded-trigger');
                    parent.classList.add('active');
                }
                else if (up_parent.classList.contains('pcoded-hasmenu')) {
                    up_parent.classList.add('pcoded-trigger');
                    up_parent.classList.add('active');
                }
                else if (last_parent.classList.contains('pcoded-hasmenu')) {
                    last_parent.classList.add('pcoded-trigger');
                    last_parent.classList.add('active');
                }
            }
            if ((document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
                document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
            }
        }
        else {
            setTimeout(() => {
                const sections = document.querySelectorAll('.pcoded-hasmenu');
                for (let i = 0; i < sections.length; i++) {
                    sections[i].classList.remove('active');
                    sections[i].classList.remove('pcoded-trigger');
                }
                let current_url = this.location.path();
                if (this.location['_baseHref']) {
                    current_url = this.location['_baseHref'] + this.location.path();
                }
                const link = "a.nav-link[ href='" + current_url + "' ]";
                const ele = document.querySelector(link);
                if (ele !== null && ele !== undefined) {
                    const parent = ele.parentElement;
                    const up_parent = parent.parentElement.parentElement;
                    const last_parent = up_parent.parentElement;
                    if (parent.classList.contains('pcoded-hasmenu')) {
                        parent.classList.add('active');
                    }
                    else if (up_parent.classList.contains('pcoded-hasmenu')) {
                        up_parent.classList.add('active');
                    }
                    else if (last_parent.classList.contains('pcoded-hasmenu')) {
                        last_parent.classList.add('active');
                    }
                }
            }, 500);
        }
    }
};
NavItemComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"])
], NavItemComponent.prototype, "item", void 0);
NavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-item',
        template: __webpack_require__(/*! raw-loader!./nav-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.html"),
        styles: [__webpack_require__(/*! ./nav-item.component.scss */ "./src/app/theme/layout/admin/navigation/nav-content/nav-item/nav-item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
], NavItemComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/navigation.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hZG1pbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/navigation.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.component.ts ***!
  \***********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-config */ "./src/app/app-config.ts");



let NavigationComponent = class NavigationComponent {
    constructor() {
        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nextConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["NextConfig"].config;
        this.windowWidth = window.innerWidth;
    }
    ngOnInit() { }
    navMobCollapse() {
        if (this.windowWidth < 992) {
            this.onNavMobCollapse.emit();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NavigationComponent.prototype, "onNavMobCollapse", void 0);
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/admin/navigation/navigation.component.html"),
        styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/theme/layout/admin/navigation/navigation.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NavigationComponent);



/***/ }),

/***/ "./src/app/theme/layout/admin/navigation/navigation.ts":
/*!*************************************************************!*\
  !*** ./src/app/theme/layout/admin/navigation/navigation.ts ***!
  \*************************************************************/
/*! exports provided: NavigationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationItem", function() { return NavigationItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const NavigationItems = [
    {
        id: 'navigation',
        title: 'Navigation',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
            // {
            //   id: 'dashboard',
            //   title: 'Search',
            //   type: 'item',
            //   url: '/dashboard/analytics',
            //   icon: 'feather icon-search'
            // },
            {
                id: 'device',
                title: "Device Management",
                type: 'collapse',
                icon: 'feather icon-cpu',
                children: [
                    {
                        id: 'device',
                        title: 'Add Device',
                        type: 'item',
                        url: '/device/add_device',
                        icon: 'feather icon-plus'
                    },
                    // {
                    //   id:'device_history',
                    //   title: 'Device History',
                    //   type: 'item',
                    //   url: '/device/device_history',
                    //   icon: 'feather icon-history'
                    // },
                    {
                        id: 'device',
                        title: 'Tracking Map',
                        type: 'item',
                        url: '/device/map_view',
                        icon: 'feather icon-map'
                    },
                ]
            },
            //  {
            //   id: 'transfer',
            //   title:"Transfer Management",
            //   type: 'collapse',
            //   icon: 'feather icon-activity',
            //   children:[
            //     {
            //       id:'transfer',
            //       title: 'Transfer',
            //       type: 'item',
            //       url: '/transfer/transfer',
            //       icon: 'feather icon-repeat'
            //     },
            //     {
            //       id:'bulk-transfer',
            //       title: 'Bulk Transfer',
            //       type: 'item',
            //       url: '/transfer/bulk_transfer',
            //       icon: 'feather icon-layers'
            //     },
            //      {
            //       id:'transfer_history',
            //       title: 'Transfer History',
            //       type: 'item',
            //       url: '/transfer/transfer_history',
            //       icon: 'feather icon-clock'
            //     },
            //   ]
            // },
            {
                id: 'firmware',
                title: "Firmware Management",
                type: 'item',
                url: '/firmware',
                icon: 'feather icon-upload'
            },
            {
                id: 'group',
                title: "Group Management",
                type: 'item',
                url: '/group',
                icon: 'feather icon-users'
            },
            {
                id: 'setting',
                title: "Setting Management",
                type: 'item',
                url: '/setting',
                icon: 'feather icon-settings'
            },
            {
                id: 'user',
                title: "Add User",
                type: 'item',
                url: '/user',
                icon: 'feather icon-user-plus'
            },
        ]
    },
];
let NavigationItem = class NavigationItem {
    get() {
        return NavigationItems;
    }
};
NavigationItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NavigationItem);



/***/ }),

/***/ "./src/app/theme/layout/auth/auth.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/theme/layout/auth/auth.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/theme/layout/auth/auth.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/theme/layout/auth/auth.component.ts ***!
  \*****************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/auth/auth.component.html"),
        styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/theme/layout/auth/auth.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AuthComponent);



/***/ }),

/***/ "./src/app/theme/layout/firmware/add-firmware/add-firmware.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/theme/layout/firmware/add-firmware/add-firmware.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-icon {\n  cursor: pointer;\n  margin: 0 8px;\n  font-size: 16px;\n}\n\n.was-validated .form-control:invalid,\n.form-control.is-invalid {\n  background-image: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plbmV4MTUvRG9jdW1lbnRzL0plbmV4X1Byb2plY3QvR2Vvd2lzZV9hcHAvc3JjL2FwcC90aGVtZS9sYXlvdXQvZmlybXdhcmUvYWRkLWZpcm13YXJlL2FkZC1maXJtd2FyZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvbGF5b3V0L2Zpcm13YXJlL2FkZC1maXJtd2FyZS9hZGQtZmlybXdhcmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTs7RUFFRSxpQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGhlbWUvbGF5b3V0L2Zpcm13YXJlL2FkZC1maXJtd2FyZS9hZGQtZmlybXdhcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMCA4cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkLFxuLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuIiwiLmFjdGlvbi1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDAgOHB4O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZCxcbi5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/layout/firmware/add-firmware/add-firmware.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/theme/layout/firmware/add-firmware/add-firmware.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddFirmwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFirmwareComponent", function() { return AddFirmwareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_theme_shared_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/theme/shared/services/apis.service */ "./src/app/theme/shared/services/apis.service.ts");
/* harmony import */ var src_app_theme_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/theme/shared/services/toast.service */ "./src/app/theme/shared/services/toast.service.ts");






let AddFirmwareComponent = class AddFirmwareComponent {
    constructor(fb, modalService, apiSvc, notification) {
        this.fb = fb;
        this.modalService = modalService;
        this.apiSvc = apiSvc;
        this.notification = notification;
        this.displayfile = '';
        this.id = 0;
        this.currentPage = 1;
        this.itemsPerPage = 10;
        this.totalPages = 0;
        this.totalElements = 0;
        this.limit = 10;
    }
    ngOnInit() {
        this.getAllFirmwares();
        this.firmwareForm = this.fb.group({
            swVersion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firmName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firmwareFile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.editFirmwareForm = this.fb.group({
            fwId: [''],
            swVersion: [''],
            firmName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            firmwareFile: ['']
        });
    }
    // Open edit modal
    openEditFirmwareModal(modal, firmware) {
        console.log('Editing Firmware:', firmware);
        this.selectedFirmwareId = firmware._id;
        // this.selectedFirmware = firmware;
        this.editFirmwareForm.patchValue(firmware);
        this.modalService.open(modal, { centered: true });
    }
    // Update firmware 
    updateFirmware(modal) {
        if (this.editFirmwareForm.invalid) {
            this.editFirmwareForm.markAllAsTouched();
            return;
        }
        console.log('Updated Firmware Data:', this.editFirmwareForm.value, "and id:", this.selectedFirmwareId);
        if (this.editFirmwareForm.valid) {
            this.apiSvc.updateFirmware(this.editFirmwareForm.value, this.selectedFirmwareId).subscribe((res) => {
                if (res.status == true) {
                    this.notification.success(res.message);
                    // const index = this.firmwares.findIndex(fw => fw.fwId === this.editFirmwareForm.value.fwId);
                    // if (index !== -1) {
                    //   this.firmwares[index] = { ...this.editFirmwareForm.value };
                    // }
                    this.getAllFirmwares();
                    this.modalService.dismissAll();
                }
                else {
                    this.notification.error(res.message);
                }
            }, err => {
                console.error('Error updating firmware:', err);
                this.notification.error('Failed to update firmware');
            });
        }
    }
    // // Open delete modal
    openDeleteFirmwareModal(modal, firmware) {
        this.selectedFirmware = firmware.firmName;
        this.selectedFirmwareId = firmware._id;
        this.modalService.open(modal, { centered: true });
    }
    deleteFirmware(model) {
        console.log('Deleting Firmware with ID:', this.selectedFirmwareId);
        this.apiSvc.deleteFirmware(this.selectedFirmwareId).subscribe((res) => {
            console.log('Delete Firmware Response:', res);
            if (res.status == true) {
                this.notification.success(res.message);
                // this.firmwares = this.firmwares.filter(fw => fw._id !== this.selectedFirmwareId);
                this.modalService.dismissAll();
                this.getAllFirmwares();
            }
            else {
                console.error('Error deleting firmware:', res.message);
                this.modalService.dismissAll();
                this.notification.error(res.message);
            }
        });
    }
    onFileSelect(event) {
        if (event.target.files.length > 0) {
            this.selectedFile = event.target.files[0];
            console.log('Selected File:', this.selectedFile.name);
        }
    }
    // onFileChange(event: any) {
    //   if (event.target.files.length > 0) {
    //     this.selectedFile = event.target.files[0];
    //     console.log('Selected File:', this.selectedFile.name);
    //     this.displayfile = this.selectedFile.name;
    //   }
    // }
    onFileChange(event) {
        if (event.target.files.length === 0)
            return;
        const file = event.target.files[0];
        const fileName = file.name.toLowerCase();
        const fileExtension = fileName.split('.').pop();
        const allowedExtensions = ['gbl', 'bin'];
        // 🔒 Extension validation
        if (!allowedExtensions.includes(fileExtension || '')) {
            this.notification.error('Only .gbl and .bin firmware files are allowed.');
            event.target.value = '';
            this.selectedFile = null;
            this.displayfile = '';
            return;
        }
        // const maxSize = 20 * 1024 * 1024;
        // if (file.size > maxSize) {
        //   this.notification.error('File size must be less than 20MB.');
        //   event.target.value = '';
        //   this.selectedFile = null;
        //   this.displayfile = '';
        //   return;
        // }
        this.selectedFile = file;
        console.log('Selected File:', this.selectedFile.name);
        this.firmwareForm.get('firmwareFile').markAsTouched();
        this.displayfile = this.selectedFile.name;
    }
    AddFirmware() {
        console.log("this.firmwareForm.value:", this.firmwareForm.value);
        if (!this.selectedFile) {
            this.notification.warning("Please select firmware file");
            return;
        }
        const formData = new FormData();
        formData.append('swVersion', this.firmwareForm.value.swVersion);
        formData.append('firmName', this.firmwareForm.value.firmName);
        formData.append('firmwareFile', this.selectedFile);
        console.log('Form Data:', formData);
        formData.forEach((value, key) => {
            console.log(key, value);
        });
        this.apiSvc.addFirmware(formData).subscribe((res) => {
            if (res.status == true) {
                this.notification.success(res.message);
                this.firmwareForm.reset();
                this.selectedFile = null;
                this.displayfile = '';
                this.getAllFirmwares();
            }
            else {
                this.notification.error(res.message);
            }
        }, (err) => {
            console.log("Full error response:", err);
            const errorMessage = err.error.message || err.message || "Something went wrong";
            this.notification.error(errorMessage);
        });
    }
    getAllFirmwares(page = 1) {
        this.currentPage = page;
        this.apiSvc.getFirmwares(`?page=${page}&limit=${this.limit}`).subscribe((res) => {
            if (res.status == true) {
                this.firmwares = res.data.firmwares;
                this.totalPages = res.data.totalPages;
                this.currentPage = res.data.currentPage;
                console.log('Firmwares:', this.firmwares);
            }
            else {
                this.notification.error(res.message);
            }
        });
    }
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.getAllFirmwares(this.currentPage + 1);
        }
    }
    prevPage() {
        if (this.currentPage > 1) {
            this.getAllFirmwares(this.currentPage - 1);
        }
    }
};
AddFirmwareComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
    { type: src_app_theme_shared_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] },
    { type: src_app_theme_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }
];
AddFirmwareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-firmware',
        template: __webpack_require__(/*! raw-loader!./add-firmware.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/firmware/add-firmware/add-firmware.component.html"),
        styles: [__webpack_require__(/*! ./add-firmware.component.scss */ "./src/app/theme/layout/firmware/add-firmware/add-firmware.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"], src_app_theme_shared_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], src_app_theme_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
], AddFirmwareComponent);



/***/ }),

/***/ "./src/app/theme/layout/group/add-group/add-group.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/theme/layout/group/add-group/add-group.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-icon {\n  cursor: pointer;\n  font-size: 18px;\n  margin: 0 8px;\n  -webkit-transition: 0.2s;\n  transition: 0.2s;\n}\n\n.action-icon:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plbmV4MTUvRG9jdW1lbnRzL0plbmV4X1Byb2plY3QvR2Vvd2lzZV9hcHAvc3JjL2FwcC90aGVtZS9sYXlvdXQvZ3JvdXAvYWRkLWdyb3VwL2FkZC1ncm91cC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvbGF5b3V0L2dyb3VwL2FkZC1ncm91cC9hZGQtZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtVQUFBLHFCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC90aGVtZS9sYXlvdXQvZ3JvdXAvYWRkLWdyb3VwL2FkZC1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24taWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDAgOHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuXG4uYWN0aW9uLWljb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG4iLCIuYWN0aW9uLWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwIDhweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLmFjdGlvbi1pY29uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/theme/layout/group/add-group/add-group.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/theme/layout/group/add-group/add-group.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupComponent", function() { return AddGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_theme_shared_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/services/apis.service */ "./src/app/theme/shared/services/apis.service.ts");
/* harmony import */ var src_app_theme_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/services/toast.service */ "./src/app/theme/shared/services/toast.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");





let AddGroupComponent = class AddGroupComponent {
    constructor(groupService, toast, modalService) {
        this.groupService = groupService;
        this.toast = toast;
        this.modalService = modalService;
        this.group = {
            grpName: "",
            fwId: "",
            settingId: "",
            hwVersion: "",
            swVersion: "",
            desc: "",
        };
        this.firmwareList = [];
        this.settingList = [];
        this.firmwareMap = {};
        this.settingMap = {};
        this.groups = [];
        this.currentPage = 1;
        this.totalPages = 1;
        this.limit = 10;
        this.selectedGroup = null;
        this.imeiInput = "";
        this.selectedGroupId = "";
    }
    ngOnInit() {
        this.loadFirmwares();
        this.loadSettings();
        this.loadGroups();
    }
    loadFirmwares() {
        this.groupService.getAllFirmwares().subscribe((res) => {
            console.log("Firmware Response:", res.data);
            this.firmwareList = res.data;
            this.firmwareMap = {};
            this.firmwareList.forEach((f) => {
                this.firmwareMap[f.fwId] = f.firmName;
            });
        });
    }
    loadSettings() {
        this.groupService.getAllSettings().subscribe((res) => {
            this.settingList = res.data;
            this.settingMap = {};
            this.settingList.forEach((s) => {
                this.settingMap[s.settingId] = s.name;
            });
        });
    }
    onSubmit(form) {
        if (form.invalid) {
            this.toast.warning("Please fill all required fields");
            return;
        }
        this.groupService.addGroup(this.group).subscribe((res) => {
            this.toast.success(res.message || "Group created successfully");
            // reset model
            this.group = {
                grpName: "",
                fwId: "",
                settingId: "",
                hwVersion: "",
                swVersion: "",
                desc: "",
            };
            // reset form state
            form.resetForm();
        }, (err) => {
            this.toast.error(err && err.error && err.error.message
                ? err.error.message
                : "Failed to create group");
        });
    }
    loadGroups(page = 1) {
        this.groupService
            .getGroups(`?page=${page}&limit=${this.limit}`)
            .subscribe((res) => {
            this.groups = res.data.groups;
            this.totalPages = res.data.totalPages;
            this.currentPage = res.data.currentPage;
        });
    }
    nextPage() {
        if (this.currentPage < this.totalPages) {
            this.loadGroups(this.currentPage + 1);
        }
    }
    prevPage() {
        if (this.currentPage > 1) {
            this.loadGroups(this.currentPage - 1);
        }
    }
    openEditModal(content, group) {
        this.selectedGroup = Object.assign({}, group);
        this.modalService.open(content, { centered: true, size: "lg" });
    }
    updateGroup(modal) {
        this.groupService
            .updateGroup(this.selectedGroup._id, this.selectedGroup)
            .subscribe((res) => {
            this.toast.success(res.message || "Group updated");
            modal.close(); // 👈 this is correct
            this.loadGroups(this.currentPage);
        }, (err) => {
            this.toast.error(err && err.error && err.error.message
                ? err.error.message
                : "Failed to update group");
        });
    }
    openDeleteModal(content, group) {
        this.selectedGroup = group;
        this.modalService.open(content, { centered: true });
    }
    confirmDelete(modal) {
        this.groupService.deleteGroup(this.selectedGroup._id).subscribe((res) => {
            this.toast.success(res.message || "Group deleted");
            modal.close();
            this.loadGroups(this.currentPage);
        }, (err) => {
            this.toast.error(err && err.error && err.error.message
                ? err.error.message
                : "Failed to delete group");
        });
    }
    openImportModal(content, group) {
        this.selectedGroupId = group._id;
        this.imeiInput = "";
        this.modalService.open(content, { centered: true });
    }
    importDevices(modal) {
        if (!this.imeiInput.trim()) {
            this.toast.warning("Please enter IMEI list");
            return;
        }
        const imeis = this.imeiInput
            .split(/\s+/)
            .map((i) => i.trim())
            .filter((i) => i);
        const payload = {
            grpId: this.selectedGroupId,
            imeis: imeis,
        };
        this.groupService.importDevicesToGroup(payload).subscribe((res) => {
            this.toast.success(res.message || "Devices imported");
            if (res.data &&
                res.data.notFoundImeis &&
                res.data.notFoundImeis.length) {
                this.toast.warning(res.data.notFoundImeis.length + " IMEIs not found");
            }
            modal.close();
        }, (err) => {
            this.toast.error("Import failed");
        });
    }
};
AddGroupComponent.ctorParameters = () => [
    { type: src_app_theme_shared_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: src_app_theme_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
AddGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-group",
        template: __webpack_require__(/*! raw-loader!./add-group.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/group/add-group/add-group.component.html"),
        styles: [__webpack_require__(/*! ./add-group.component.scss */ "./src/app/theme/layout/group/add-group/add-group.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_theme_shared_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        src_app_theme_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], AddGroupComponent);



/***/ }),

/***/ "./src/app/theme/layout/setting/add-setting/add-setting.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/theme/layout/setting/add-setting/add-setting.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-icon {\n  cursor: pointer;\n  font-size: 18px;\n  margin: 0 8px;\n}\n\n.action-icon:hover {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n}\n\n/* Chrome, Safari, Edge */\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\n\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2plbmV4MTUvRG9jdW1lbnRzL0plbmV4X1Byb2plY3QvR2Vvd2lzZV9hcHAvc3JjL2FwcC90aGVtZS9sYXlvdXQvc2V0dGluZy9hZGQtc2V0dGluZy9hZGQtc2V0dGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGhlbWUvbGF5b3V0L3NldHRpbmcvYWRkLXNldHRpbmcvYWRkLXNldHRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDQTs7QURDQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUNFQTs7QURDQSx5QkFBQTs7QUFDQTs7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUNFRjs7QURDQSxZQUFBOztBQUNBO0VBQ0UsMEJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC9zZXR0aW5nL2FkZC1zZXR0aW5nL2FkZC1zZXR0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGlvbi1pY29ue1xuY3Vyc29yOnBvaW50ZXI7XG5mb250LXNpemU6MThweDtcbm1hcmdpbjowIDhweDtcbn1cbi5hY3Rpb24taWNvbjpob3ZlcntcbnRyYW5zZm9ybTpzY2FsZSgxLjIpO1xufVxuXG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSAqL1xuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi8qIEZpcmVmb3ggKi9cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuIiwiLmFjdGlvbi1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5hY3Rpb24taWNvbjpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbn1cblxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UgKi9cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKiBGaXJlZm94ICovXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/theme/layout/setting/add-setting/add-setting.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/theme/layout/setting/add-setting/add-setting.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSettingComponent", function() { return AddSettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_theme_shared_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/services/apis.service */ "./src/app/theme/shared/services/apis.service.ts");
/* harmony import */ var src_app_theme_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/services/toast.service */ "./src/app/theme/shared/services/toast.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");





let AddSettingComponent = class AddSettingComponent {
    constructor(api, toast, modalService) {
        this.api = api;
        this.toast = toast;
        this.modalService = modalService;
        this.settings = [];
        this.selected = null;
        this.currentPage = 1;
        this.totalPages = 1;
        this.limit = 10;
        this.setting = {
            name: "",
            breadcrumb: "",
            hbt: "",
            btHbt: "",
            stop: "",
            sleep: "",
            moveTrigger: {
                minSpeedKph: "",
                speedCount: "",
                minDistanceM: "",
            },
            resetTimeouts: {
                deviceTimeout: "",
                gpsTimeout: "",
                cellularTimeout: "",
            },
            qualityFilters: {
                minSatellite: "",
                stopHac: "",
                moveHac: "",
                gsmRssi: "",
            },
            dashboardServer: {
                ip: "",
                port: "",
            },
            atCommands: "",
        };
    }
    ngOnInit() {
        this.loadSettings(1);
    }
    loadSettings(page = 1) {
        this.currentPage = page;
        this.api.getSettings(this.currentPage, this.limit).subscribe((res) => {
            this.settings = res.data.settings;
            this.totalPages = res.data.totalPages;
        });
    }
    create(form) {
        if (form.invalid) {
            this.toast.warning("Fill all required fields");
            return;
        }
        let payload = Object.assign({}, this.setting);
        if (payload.atCommands) {
            payload.atCommands = this.setting.atCommands
                .split(/[,\s]+/)
                .map((x) => x.trim())
                .filter((x) => x);
        }
        this.api.addSetting(payload).subscribe((res) => {
            this.toast.success(res.message);
            form.resetForm();
            this.loadSettings();
        }, (err) => {
            this.toast.error(err && err.error && err.error.message
                ? err.error.message
                : "Failed to create setting");
        });
    }
    openEdit(m, s) {
        this.selected = Object.assign({}, s);
        this.modalService.open(m, { centered: true });
    }
    update(modal) {
        this.api
            .updateSetting(this.selected._id, {
            name: this.selected.name,
        })
            .subscribe((res) => {
            this.toast.success(res.message);
            modal.close();
            this.loadSettings();
        }, (err) => {
            this.toast.error(err && err.error && err.error.message
                ? err.error.message
                : "Failed to update setting");
        });
    }
    openDelete(m, s) {
        this.selected = s;
        this.modalService.open(m, { centered: true });
    }
    delete(modal) {
        this.api.deleteSetting(this.selected._id).subscribe((res) => {
            this.toast.success(res.message);
            modal.close();
            this.loadSettings();
        }, (err) => {
            modal.close();
            this.toast.error(err && err.error && err.error.message
                ? err.error.message
                : "Failed to delete setting");
        });
    }
    changePage(p) {
        if (p < 1 || p > this.totalPages)
            return;
        this.currentPage = p;
        this.loadSettings(p);
    }
};
AddSettingComponent.ctorParameters = () => [
    { type: src_app_theme_shared_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: src_app_theme_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
AddSettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-setting",
        template: __webpack_require__(/*! raw-loader!./add-setting.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/setting/add-setting/add-setting.component.html"),
        styles: [__webpack_require__(/*! ./add-setting.component.scss */ "./src/app/theme/layout/setting/add-setting/add-setting.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_theme_shared_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        src_app_theme_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
], AddSettingComponent);



/***/ }),

/***/ "./src/app/theme/layout/user/add-user/add-user.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/theme/layout/user/add-user/add-user.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoZW1lL2xheW91dC91c2VyL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/theme/layout/user/add-user/add-user.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/theme/layout/user/add-user/add-user.component.ts ***!
  \******************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_theme_shared_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/theme/shared/services/apis.service */ "./src/app/theme/shared/services/apis.service.ts");
/* harmony import */ var src_app_theme_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/theme/shared/services/toast.service */ "./src/app/theme/shared/services/toast.service.ts");




let AddUserComponent = class AddUserComponent {
    constructor(api, toast) {
        this.api = api;
        this.toast = toast;
        this.user = {
            name: "",
            email: "",
            password: "",
            phone: "",
            timezone: "",
            role: false,
        };
        this.timezones = [
            "Asia/Kolkata",
            "UTC",
            "America/New_York",
            "Europe/London",
            "Asia/Dubai",
            "Asia/Singapore",
            "Australia/Sydney",
        ];
    }
    ngOnInit() { }
    submit(form) {
        if (form.invalid) {
            this.toast.warning("Please fill all required fields correctly");
            return;
        }
        const payload = Object.assign({}, this.user, { role: this.user.role ? "master" : "user" });
        this.api.signup(payload).subscribe((res) => {
            this.toast.success(res.message || "User created");
            form.resetForm();
        }, (err) => {
            this.toast.error(err && err.error && err.error.message
                ? err.error.message
                : "Failed to create user");
        });
    }
};
AddUserComponent.ctorParameters = () => [
    { type: src_app_theme_shared_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: src_app_theme_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }
];
AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-add-user",
        template: __webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/theme/layout/user/add-user/add-user.component.html"),
        styles: [__webpack_require__(/*! ./add-user.component.scss */ "./src/app/theme/layout/user/add-user/add-user.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_theme_shared_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        src_app_theme_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]])
], AddUserComponent);



/***/ }),

/***/ "./src/app/theme/shared/authguard/auth.guard.ts":
/*!******************************************************!*\
  !*** ./src/app/theme/shared/authguard/auth.guard.ts ***!
  \******************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    checkLogin() {
        const token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        this.router.navigate(['/auth/signin']);
        return false;
    }
    canActivate() {
        console.log("AuthGuard: Checking authentication for route activation.");
        return this.checkLogin();
    }
    canActivateChild() {
        return this.checkLogin();
    }
    canLoad(route, segments) {
        return this.checkLogin();
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/theme/shared/full-screen/toggle-full-screen.ts":
/*!****************************************************************!*\
  !*** ./src/app/theme/shared/full-screen/toggle-full-screen.ts ***!
  \****************************************************************/
/*! exports provided: ToggleFullScreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function() { return ToggleFullScreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



let ToggleFullScreenDirective = class ToggleFullScreenDirective {
    constructor(elements) {
        this.elements = elements;
    }
    onClick() {
        /*if (screenfull.enabled) {
          (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-maximize');
          (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-minimize');
          screenfull.toggle();
        }*/
        if (isScreenFull(screenfull__WEBPACK_IMPORTED_MODULE_2__)) {
            if (screenfull__WEBPACK_IMPORTED_MODULE_2__["isFullscreen"]) {
                screenfull__WEBPACK_IMPORTED_MODULE_2__["exit"]();
            }
            else {
                screenfull__WEBPACK_IMPORTED_MODULE_2__["request"]();
            }
        }
    }
};
ToggleFullScreenDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ToggleFullScreenDirective.prototype, "onClick", null);
ToggleFullScreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appToggleFullScreen]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ToggleFullScreenDirective);

function isScreenFull(sf) {
    return sf.isFullscreen;
}


/***/ }),

/***/ "./src/app/theme/shared/interceptors/jwt-interceptor.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/theme/shared/interceptors/jwt-interceptor.service.ts ***!
  \**********************************************************************/
/*! exports provided: JwtInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptorService", function() { return JwtInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let JwtInterceptorService = class JwtInterceptorService {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        const token = localStorage.getItem('token');
        console.log("getting token from - ", token);
        if (token) {
            const auth_req = req.clone({
                setHeaders: {
                    Authorization: token
                }
            });
            return next.handle(auth_req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(error => {
                console.error('HTTP error occurred:', error);
                if (error.status === 401) {
                    localStorage.removeItem('token');
                    this.router.navigate(['/auth/signin']);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
            }));
        }
        return next.handle(req);
    }
};
JwtInterceptorService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
JwtInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], JwtInterceptorService);



/***/ }),

/***/ "./src/app/theme/shared/services/apis.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/theme/shared/services/apis.service.ts ***!
  \*******************************************************/
/*! exports provided: ApisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApisService", function() { return ApisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ApisService = class ApisService {
    constructor(http) {
        this.http = http;
    }
    // Auth Module
    login(credentials) {
        return this.http.post("/api/auth/signin", credentials);
    }
    signup(data) {
        return this.http.post("/api/auth/signup", data);
    }
    // Device Module
    getDevices(query = "") {
        return this.http.get("/api/device" + query);
    }
    addDevice(device) {
        return this.http.post("/api/device", device);
    }
    updateDevice(device) {
        return this.http.put(`/api/device`, device);
    }
    deleteDevice(id) {
        return this.http.delete(`/api/device/${id}`);
    }
    getDeviceHistory(imei) {
        return this.http.get("/api/device/history" + "?imei=" + imei);
    }
    //   getDeviceHistory(imei: string, from?: string, to?: string) {
    //   let url = `/api/device/history?imei=${imei}`;
    //   if (from && to) {
    //     url += `&from=${from}&to=${to}`;
    //   }
    //   return this.http.get(url);
    // }
    // Group Module
    getGroups(query = "") {
        return this.http.get("/api/groups" + query);
    }
    getGrps() {
        return this.http.get(`/api/groups`);
    }
    addGroup(group) {
        return this.http.post("/api/groups", group);
    }
    updateGroup(id, group) {
        return this.http.put(`/api/groups/${id}`, group);
    }
    deleteGroup(id) {
        return this.http.delete(`/api/groups/${id}`);
    }
    importDevicesToGroup(data) {
        return this.http.post("/api/groups/import", data);
    }
    getDevicesByGroup(grpId) {
        return this.http.get(`/api/groups/device/${grpId}`);
    }
    // Firmware Module
    addFirmware(firmware) {
        console.log("Adding Firmware:", firmware);
        return this.http.post("/api/firmware", firmware);
    }
    getFirmwares(query = "") {
        return this.http.get(`/api/firmware${query}`);
    }
    updateFirmware(firmware, id) {
        console.log("Updating Firmware:", firmware);
        return this.http.put(`/api/firmware/${id}`, firmware);
    }
    deleteFirmware(id) {
        console.log("Deleting Firmware with ID:", id);
        return this.http.delete(`/api/firmware/${id}`);
    }
    getAllFirmwares() {
        return this.http.get(`/api/firmware`);
    }
    // Settings Module
    getSettings(page = 1, limit = 10) {
        return this.http.get(`/api/settings?page=${page}&limit=${limit}`);
    }
    getAllSettings() {
        return this.http.get("/api/settings");
    }
    addSetting(data) {
        return this.http.post("/api/settings", data);
    }
    updateSetting(id, data) {
        return this.http.put(`/api/settings/${id}`, data);
    }
    deleteSetting(id) {
        return this.http.delete(`/api/settings/${id}`);
    }
};
ApisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApisService);



/***/ }),

/***/ "./src/app/theme/shared/services/toast.service.ts":
/*!********************************************************!*\
  !*** ./src/app/theme/shared/services/toast.service.ts ***!
  \********************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");



let ToastService = class ToastService {
    constructor(notify) {
        this.notify = notify;
    }
    success(message) {
        console.log('Success:', message);
        this.notify.success(message);
    }
    error(message) {
        this.notify.error(message);
    }
    warning(message) {
        this.notify.warning(message);
    }
    info(message) {
        this.notify.info(message);
    }
};
ToastService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
], ToastService);



/***/ }),

/***/ "./src/app/theme/shared/shared.module.ts":
/*!***********************************************!*\
  !*** ./src/app/theme/shared/shared.module.ts ***!
  \***********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_5__);






const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        declarations: [],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            },
        ]
    })
], SharedModule);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jenex15/Documents/Jenex_Project/Geowise_app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map