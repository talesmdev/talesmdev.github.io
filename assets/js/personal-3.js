/*! personal-3.js | INFINITECRED | Css ninja 2020-2021 */
"use strict";
$(document).ready((function() {
	var o = {
		series: [{
			name: "Interviews",
			data: [31, 40, 28, 51, 42, 109, 100]
		}],
		chart: {
			height: 200,
			type: "area",
			toolbar: {
				show: !1
			}
		},
		colors: [themeColors.accent, themeColors.info, themeColors.orange],
		title: {
			text: "Interviews",
			align: "left"
		},
		legend: {
			position: "top"
		},
		dataLabels: {
			enabled: !1
		},
		stroke: {
			width: [2, 2, 2],
			curve: "smooth"
		},
		xaxis: {
			type: "datetime",
			categories: ["2020-09-19T00:00:00.000Z", "2020-09-20T01:30:00.000Z", "2020-09-21T02:30:00.000Z", "2020-09-22T03:30:00.000Z", "2020-09-23T04:30:00.000Z", "2020-09-24T05:30:00.000Z", "2020-09-25T06:30:00.000Z"]
		},
		tooltip: {
			x: {
				format: "dd/MM/yy HH:mm"
			}
		}
	};
	new ApexCharts(document.querySelector("#interviews-chart"), o).render()
}));