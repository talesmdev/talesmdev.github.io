"use strict";$(document).ready((function(){var e;e=function(e,i){var t;e.fn.hammer=function(t){return this.each((function(){!function(t,a){var o=e(t);o.data("hammer")||o.data("hammer",new i(o[0],a))}(this,t)}))},i.Manager.prototype.emit=(t=i.Manager.prototype.emit,function(i,a){t.call(this,i,a),e(this.element).trigger({type:i,gesture:a})})},"function"==typeof define&&define.amd?define(["jquery","hammerjs"],e):"object"==typeof exports?e(require("jquery"),require("hammerjs")):e(jQuery,Hammer),$(".sidebar-panel li").on("click",(function(){window.matchMedia("(max-width: 768px)").matches&&window.matchMedia("(orientation:portrait)").matches&&($(this).closest(".sidebar-panel").removeClass("is-active"),$(".infinite-hamburger .icon-box-toggle").removeClass("active"))})),void 0!==window.orientation&&($(".sidebar-panel .inner").each((function(){var e=$(this);new Hammer(this).on("swipeleft",(function(){console.log("Swipe left detected."),e.closest(".sidebar-panel").removeClass("is-active"),$(".infinite-hamburger .icon-box-toggle").removeClass("active")}))})),$(".sidebar-search .inner").each((function(){var e=$(this);new Hammer(this).on("swipeleft",(function(){console.log("Swipe left detected."),e.closest(".sidebar-search").removeClass("is-active"),$(".infinite-hamburger .icon-box-toggle").removeClass("active")}))})),$(".is-messages #conversations-list").each((function(){var e=$(this);new Hammer(this).on("swipeleft",(function(){console.log("Swipe left detected."),e.closest(".is-messages").removeClass("is-active"),$(".infinite-hamburger .icon-box-toggle").removeClass("active")}))})),$(".main-sidebar .sidebar-inner, .view-wrapper").each((function(){$(this);new Hammer(this).on("swiperight",(function(){console.log("Swipe Right detected."),$(".sidebar-panel").addClass("is-active"),$(".infinite-hamburger .icon-box-toggle").addClass("active")}))})),$(".conversation-area .conversation").each((function(){var e=$(this);new Hammer(this).on("swipeleft",(function(){console.log("Swipe left detected."),e.closest(".conversation-area").removeClass("is-active")}))})))}));