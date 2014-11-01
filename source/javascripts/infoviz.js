// MOODS graph
$(function () {
    $('#moods').highcharts({
        chart: {
        },
        colors: ['rgba(53, 32, 59,0.6)', 'rgba(145, 17, 70, 0.6)', 'rgba(255, 150, 0,0.6)'],
        title: {
            text: 'Self-Reported Mental Health'
        },
        subtitle: {
            text: 'in combination with Prescription Compliance'
        },
        xAxis: {
            categories: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'	]
        },
        yAxis: [
        	{ // Primary Axis
	        	min: 1,
		        title: {
			        text: 'Raw mood scores <i>(life satisfaction)</i>'
			    }
	        },
	        { // Secondary yAxis
                gridLineWidth: 0,
                title: {
                    text: 'Compliance Percentages',
                },
                opposite: true
            }
        ],
        tooltip: {
	        enabled: false
        },
        series: [{
            type: 'column',
            name: 'Medication compliance',
            yAxis: 1,
            data: [100,80,100,65,65,50, 100]
        }, {
            type: 'column',
            name: 'Sleep',
            yAxis: 1,
            data: [50,20,30,50,50,30.25,30]
        }, {
            type: 'column',
            name: 'Exercise compliance',
            yAxis: 1,
             data: [100,100,100,100,100,100,100]
        }, {
            type: 'spline',
            name: 'Mood (Life satisfaction scores)',
            color: Highcharts.getOptions().colors[3],
            data: [4,2,2,2,1,1,1],
            marker: {
            	lineWidth: 2,
            	lineColor: Highcharts.getOptions().colors[3],
            	fillColor: 'white'
            }
        }]
    });
});

// SLEEP graph
$(function () {
    $('#sleep').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Self-Reported Sleep'
        },
        colors: ['transparent', '#911146', 'transparent'],
        legend: {
	        enabled: false
        },
        xAxis: {
            categories: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
        },
        yAxis: {
            title: {
                text: 'Sleep Times'
            },
            labels: {
	            formatter: function() {
	            	if (this.value < 6) {
		                return (this.value + 6) + ' PM';
	                }
	                else if (this.value == 6) {
		                return (this.value + 6) + ' AM';
	                }
	                else if (this.value < 18) {
		                return (this.value - 6) + ' AM';
	                }
	                else if (this.value == 18) {
		                return (this.value - 6) + ' PM';
	                }
	                else {
		                return (this.value - 18) + ' PM';
	                }
	            }
	        },
	        tickPositioner: function () {
                var positions = [],
                    tick = Math.floor(this.dataMin),
                    increment = Math.ceil((this.dataMax - this.dataMin) / 6);

                for (; tick - increment <= this.dataMax; tick += increment) {
                    positions.push(tick);
                }
                return positions;
            }
        },
        tooltip: {
	        enabled: false
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
             name: 'awake-before',
             data: [1, 1, 1, 1, 1, 1, 1]
         }, {
             name: 'during',
             data: [10, 10, 10, 11, 12, 15, 16]
         }, {
             name: 'awake-after',
             data: [5, 6, 10, 5, 7, 8, 6]
        }]
    });
});

// EXERCISE graph
$(function () {
    $('#exercise').highcharts({
        chart: {
            type: 'column'
        },
        colors: ['#35203B', '#911146', '#FF9600'],
        title: {
            text: 'Self-Reported Exercise Totals'
        },
        xAxis: {
            categories: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
        },
        yAxis: {
        	max: 65,
            title: {
                text: 'Minutes'
            }
        },
        tooltip: {
	        enabled: false
        },
        series: [{
        	name: 'Exercise per day',
            data: [20.0, 0, 0, 15.5, 5.5, 5.0, 14.0]

        }, {
            type: 'spline',
            name: 'Cumulative exercise (over a week)',
            data: [20.0, 20.0, 20.0, 35.5, 41.0, 46.0, 60.0],
            marker: {
            	lineWidth: 2,
            	lineColor: Highcharts.getOptions().colors[3],
            	fillColor: 'white'
            }
        }]
    });
});

