var renovable = AmCharts.makeChart("energia-renovable", {
    "theme": "none",
    "type": "serial",
    "dataProvider": [{
        "name": "Solar PV-Residencial",
        "startTime": 160,
        "endTime": 267,
        "color": "#102e3b"
    }, {
        "name": "Solar PV-Industrial",
        "startTime": 81,
        "endTime": 170,
        "color": "#102e3b"
    }, {
        "name": "Solar PV-Gran escala",
        "startTime": 36,
        "endTime": 40,
        "color": "#5e7f94"
    }, {
        "name": "Eólica terrestre",
        "startTime": 32,
        "endTime": 56,
        "color": "#102e3b"
    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "gridAlpha": 0,

    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<b>[[category]]</b><br>starts at [[startTime]]<br>ends at [[endTime]]",
        "colorField": "color",
        "fillAlphas": 1,
        "lineAlpha": 0,
        "openField": "startTime",
        "type": "column",
        "valueField": "endTime",
        "labelText": "[[value]]",
        "showFirstLabel": true

    }, {
        "fillAlphas": 0,
        "lineAlpha": 0,
        "openField": "startTime",
        "type": "column",
        "valueField": "startTime",
        "labelText": "[[startTime]]",
        "labelPosition": "inside",
        "clustered": false
    }],
    "rotate": true,
    "columnWidth": 0.5,
    "categoryField": "name",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 1,
        "gridAlpha": 0,
        "position": "left"
    },
    "export": {
        "enabled": true
    }
});
var convencional = AmCharts.makeChart("energia-convencional", {
    "theme": "none",
    "type": "serial",
    "dataProvider": [{
        "name": "Combustible",
        "startTime": 152,
        "endTime": 206,
        "color": "#102e3b"
    }, {
        "name": "Solar PV-Industrial",
        "startTime": 112,
        "endTime": 189,
        "color": "#102e3b"
    }, {
        "name": "Solar PV-Gran escala",
        "startTime": 60,
        "endTime": 143,
        "color": "#102e3b"
    }, {
        "name": "Eólica terrestre",
        "startTime": 41,
        "endTime": 74,
        "color": "#102e3b"
    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "gridAlpha": 0,

    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<b>[[category]]</b><br>starts at [[startTime]]<br>ends at [[endTime]]",
        "colorField": "color",
        "fillAlphas": 1,
        "lineAlpha": 0,
        "openField": "startTime",
        "type": "column",
        "valueField": "endTime",
        "labelText": "[[value]]",
    }],
    "rotate": true,
    "columnWidth": 0.5,
    "categoryField": "name",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 1,
        "gridAlpha": 0,
        "position": "left"
    },
    "export": {
        "enabled": true
    }
});

var solarvseolica = AmCharts.makeChart("solar-vs-eolica", {
    "theme": "none",
    "type": "serial",
    "legend": {
        "align": "center",
        "position": "bottom",
        "right": -4,
        "color": "gray",
        "textClickEnabled": true
    },
    "colors": ["#102e3b", "#93c842"],
    "dataProvider": [{
        "year": 2009,
        "startTime": 135,
        "endTime": 359,
    }, {
        "year": 2010,

        "startTime": 124,
        "endTime": 248,
    }, {
        "year": 2011,

        "startTime": 71,
        "endTime": 157,
    }, {
        "year": 2012,

        "startTime": 72,
        "endTime": 125,
    }, {
        "year": 2013,

        "startTime": 70,
        "endTime": 98,
    }, {
        "year": 2014,

        "startTime": 59,
        "endTime": 79,
    }, {
        "year": 2015,
        "startTime": 55,
        "endTime": 64,
    }, {
        "year": 2016,
        "startTime": 47,
        "endTime": 55,
    }, {
        "year": 2017,
        "startTime": 45,
        "endTime": 50,
    }, {
        "year": 2018,
        "startTime": 42,
        "endTime": 43,
    }],

    "graphs": [{
        "id": "g1",
        "lineThickness": 2,
        "fillAlphas": 0,
        "lineAlpha": 1,
        "type": "line",
        "valueField": "startTime",
        "labelText": "[[value]]",
        "title": "Eólica terrestre"
    }, {
        "id": "g2",
        "lineThickness": 2,
        "fillAlphas": 0,
        "lineAlpha": 1,
        "type": "line",
        "valueField": "endTime",
        "labelText": "[[value]]",
        "title": "Solar PV"

    }],
    "valueAxes": [{
        "axisAlpha": 0,
        "gridAlpha": 0,
        "labelsEnabled":false

    }],
    "categoryField": "year",

    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 1,
        "gridAlpha": 0,
        "position": "left"
    },


    "export": {
        "enabled": true
    }
});


var chart_5 = AmCharts.makeChart("graph-5", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "colors": ["#102e3a", "#00afc9", "#ffe90d"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left",
        "gridAlpha": 0
    },
    "trendLines": [],
    "graphs": [
        {
            // "balloonText": er_operacionales + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": 'Datos históricos',
            "type": "column",
            "valueField": "historicos",
            "labelText": '[[historicos_show]]'
        },
        {
            // "balloonText": er_construcciones + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "lineAlpha": 0.2,
            "title": 'Escenario bajo',
            "type": "column",
            "valueField": "bajo",
            "labelText": '[[bajo_show]]'
        },
        {
            // "balloonText": er_costos_gastos + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-3",
            "lineAlpha": 0.2,
            "title": 'Escenario alto',
            "type": "column",
            "valueField": "alto",
            "labelText": '[[alto_show]]'
        },

    ],
    "guides": [],
    "valueAxes": [
        {
            // "unit": "$",
            "unitPosition": "left",
            "autoGridCount": false,
            "gridCount": 12,
            "position": "left",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "labelsEnabled": false
        }
    ],
    "legend": {
        "align": "center",
        "position": "bottom",
        "right": -4,
        "color": "gray",
        "textClickEnabled": true
    },
    "balloon": {},
    "dataProvider": [
        {
            "year": "2011",
            "historicos": 80,
            "historicos_show": 80,
            "bajo": 0,
            "bajo_show": '',
            "alto": 0,
            "alto_show": '',

        },
        {
            "year": "2013",
            "historicos": 120,
            "historicos_show": 120,
            "bajo": 0,
            "bajo_show": '',
            "alto": 0,
            "alto_show": '',

        },
        {
            "year": "2013",
            "historicos": 160,
            "historicos_show": 160,
            "bajo": 0,
            "bajo_show": '',
            "alto": 0,
            "alto_show": '',

        },
        {
            "year": "2014",
            "historicos": 190,
            "historicos_show": 190,
            "bajo": 0,
            "bajo_show": '',
            "alto": 0,
            "alto_show": '',

        },
        {
            "year": "2015",
            "historicos": 220,
            "historicos_show": 220,
            "bajo": 0,
            "bajo_show": '',
            "alto": 0,
            "alto_show": '',

        },
        {
            "year": "2016",
            "historicos": 310,
            "historicos_show": 310,
            "bajo": 0,
            "bajo_show": '',
            "alto": 0,
            "alto_show": '',

        },
        {
            "year": "2017",
            "historicos": 405,
            "historicos_show": 405,
            "bajo": 0,
            "bajo_show": '',
            "alto": 0,
            "alto_show": '',

        },
        {
            "year": "2018",
            "historicos": 486,
            "historicos_show": 486,
            "bajo": 0,
            "bajo_show": '',
            "alto": 0,
            "alto_show": '',

        },
        {
            "year": "2019",
            "historicos": 643,
            "historicos_show": 643,
            "bajo": 0,
            "bajo_show": '',
            "alto": 0,
            "alto_show": '',

        },
        {
            "year": "2020",
            "historicos": 0,
            "historicos_show": '',
            "bajo": 690,
            "bajo_show": 690,
            "alto": 720,
            "alto_show": 720,

        },
        {
            "year": "2021",
            "historicos": 0,
            "historicos_show": '',
            "bajo": 760,
            "bajo_show": 760,
            "alto": 780,
            "alto_show": 780,

        },
        {
            "year": "2022",
            "historicos": 0,
            "historicos_show": '',
            "bajo": 813,
            "bajo_show": 813,
            "alto": 1271,
            "alto_show": 1271,

        },
    ],
    "export": {
        "enabled": true
    }
});

var chart_6 = AmCharts.makeChart("graph-6", {
    "type": "serial",
    "theme": "light",
    "categoryField": "year",
    "rotate": false,
    "startDuration": 1,
    "colors": ["#60b748", "#00afc9", "#ffe90d"],
    "categoryAxis": {
        "gridPosition": "start",
        "position": "left",
        "gridAlpha": 0
    },
    "trendLines": [],
    "graphs": [
        {
            // "balloonText": er_operacionales + ": $[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "lineAlpha": 0.2,
            "title": 'Datos históricos',
            "type": "column",
            "valueField": "value",
            "labelText": "[[value]]"
        },
    ],
    "guides": [],
    "valueAxes": [
        {
            // "unit": "$",
            "unitPosition": "left",
            "autoGridCount": false,
            "gridCount": 12,
            "position": "left",
            "axisAlpha": 0,
            "gridAlpha": 0,
            "labelsEnabled": false
        }
    ],
    // "legend": {
    //     "align": "center",
    //     "position": "bottom",
    //     "right": -4,
    //     "color": "gray",
    //     "textClickEnabled": true
    // },
    "balloon": {},
    "dataProvider": [
        {
            "year": "2010",
            "value": 4.4,
        },
        {
            "year": "2011",
            "value": 3.6,
        },
        {
            "year": "2013",
            "value": 3.1,
        },
        {
            "year": "2013",
            "value": 2.4,
        },
        {
            "year": "2014",
            "value": 2.2,
        },
        {
            "year": "2015",
            "value": 1.7,
        },
        {
            "year": "2016",
            "value": 1.5,
        },
        {
            "year": "2017",
            "value": 1.4,
        },
        {
            "year": "2018",
            "value": 0.8,
        },
        {
            "year": "2019",
            "value": 0.6,
        },
        {
            "year": "2020",
            "value": 0.5,
        },
    ],
    "export": {
        "enabled": true
    }
});

