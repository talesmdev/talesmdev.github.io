
"use strict";$(document).ready((function(){$(".cards-carousel-inner").slick({dots:!0,arrows:!1,infinite:!0,variableWidth:!0,prevArrow:"<div class='slick-custom is-prev'><i class='fas fa-angle-left'></i></div>",nextArrow:"<div class='slick-custom is-next'><i class='fas fa-angle-right'></i></div>",slidesToShow:2});var e={chart:{type:"area",height:220,foreColor:"#999",stacked:!0,toolbar:{show:!1},dropShadow:{enabled:!0,enabledSeries:[0],top:-2,left:2,blur:5,opacity:.06}},colors:[themeColors.accent,themeColors.orange,themeColors.orange],stroke:{curve:"smooth",width:3},title:{text:"",align:"left"},legend:{position:"top"},dataLabels:{enabled:!1},series:[{name:"Cash Expenses",data:t(0,18)},{name:"Card Expenses",data:t(1,18)}],markers:{size:0,strokeColor:"#fff",strokeWidth:3,strokeOpacity:1,fillOpacity:1,hover:{size:6}},xaxis:{type:"datetime",axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{offsetX:0,offsetY:-5},tooltip:{enabled:!0}},grid:{show:!1,padding:{left:-5,right:5}},tooltip:{x:{format:"dd MMM yyyy"}},legend:{position:"top",horizontalAlign:"left"},fill:{type:"solid",fillOpacity:.7}};function t(e,t){for(var o=[[4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5],[2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2]],s=0,i=[],a=new Date("11 Nov 2020").getTime();s<t;)i.push([a,o[e][s]]),a+=864e5,s++;return i}new ApexCharts(document.querySelector("#timeline-chart"),e).render()}));