/*! finance-1.js | infinite | Css ninja 2020-2021 */
"use strict";function initCharts(){$("*[data-vivus]").each((function(){var t=$(this).attr("id");void 0!==t&&new Vivus(t,{duration:200,dashGap:1,onReady:function(t){t.el.setAttribute("width","250")}})}))}$(document).ready((function(){$("#app-home")&&initCharts()}));