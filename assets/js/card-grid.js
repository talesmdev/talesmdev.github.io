/*! cards-grids.js | infinite | Css Ninja 2020-2021 */
"use strict";$(document).ready((function(){if($(".card-grid-v1, .card-grid-v2, .card-grid-v3, .card-grid-v4").length&&$(".infinite-scroll-loader").length){var i=0;$(window).scroll((function(){if($(window).scrollTop()+$(window).height()>$(document).height()-5){var d=$(".card-grid .columns").html();$(".infinite-scroll-loader").addClass("is-active"),i<2?setTimeout((function(){$(".infinite-scroll-loader").removeClass("is-active"),$(".card-grid .columns").append(d),i+=1}),1200):setTimeout((function(){$(".loader, .loader-end").toggleClass("is-hidden")}),1200)}}))}}));