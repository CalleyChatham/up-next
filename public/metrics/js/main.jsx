var MyApp = React.createClass({
  render: function() {
    var that = this,
      rows = [];
    var RevenuePerYear = {
      "chart": {
        "caption": "Revenue per Year",
        "xAxisName": "year",
        "yAxisName": "Revenue (In USD)",
        "theme": "carbon"
      },
      "data": [{
        "label": "2017",
        "value": "920000"
      }, {
        "label": "2016",
        "value": "730000"
      }, {
        "label": "2015",
        "value": "680000"
      }, {
        "label": "2014",
        "value": "670000"
      }, {
        "label": "2013",
        "value": "639000"
      }, {
        "label": "2012",
        "value": "590000"
      }]
    };
    var yearChartConfigs = {
      type: "column2d",
      renderAt: "year-revenue",
      width: '100%',
      height: 400,
      dataFormat: "json",
      dataSource: RevenuePerYear
    };
    var monthlyDataSource = {
      chart: {
        "caption": "Monthly Revenue Trend",
        "xAxisName": "Month",
        "yAxisName": "Revenue (In USD)",
        "theme": "carbon"
      },
      data: [{
        "label": "Jan",
        "value": "657000"
      }, {
        "label": "Feb",
        "value": "138000"
      }, {
        "label": "Mar",
        "value": "192000"
      }, {
        "label": "Apr",
        "value": "111000"
      }, {
        "label": "May",
        "value": "438000"
      }, {
        "label": "Jun",
        "value": "292000"
      }, {
        "label": "Jul",
        "value": "365000"
      }, {
        "label": "Aug",
        "value": "649000"
      }, {
        "label": "Sep",
        "value": "746000"
      }, {
        "label": "Oct",
        "value": "803000"
      }, {
        "label": "Nov",
        "value": "876000"
      }, {
        "label": "Dec",
        "value": "730000"
      }]
    };
    var monthlyChartConfigs = {
      type: "spline",
      renderAt: "monthly-revenue",
      width: '100%',
      height: 350,
      dataFormat: "json",
      dataSource: monthlyDataSource
    };
    var productDataSource = {
      chart: {
        "caption": "Split of Revnue by Products",
        "theme": "carbon"
      },
      data: [{
        "label": "Menu Item 1",
        "value": "1460000"
      }, {
        "label": "Menu Item 2",
        "value": "2190000"
      }, {
        "label": "Menu Item 3",
        "value": "1095000"
      }, {
        "label": "Menu Item 4",
        "value": "1095000"
      }, {
        "label": "Menu Item 5",
        "value": "1460000"
      }]
    };
    var productChartConfigs = {
      type: "doughnut2d",
      renderAt: "product-revenue",
      width: '100%',
      height: 350,
      dataFormat: "json",
      dataSource: productDataSource
    };
    return (
      <div>
        <h1 className="main-title">Your Food Truck Revenue Analysis</h1>
        <div id="interactive-dashbaord"></div>
        <div className="chart-row">
          <div id="year-revenue">
            <react_fc.FusionCharts {...yearChartConfigs} />
          </div>
        </div>
        <div className="chart-row">
          <div id="monthly-revenue" className="inline-chart">
            <react_fc.FusionCharts {...monthlyChartConfigs} />
          </div>
          <div id="product-revenue" className="inline-chart">
            <react_fc.FusionCharts {...productChartConfigs} />
          </div>
        </div>
      </div>
    );
  }
});
React.render(
  <MyApp />,
  document.getElementById("dashboard")
);