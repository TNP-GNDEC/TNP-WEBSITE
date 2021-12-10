import ReactApexChart from "react-apexcharts";
import React, {useEffect, useState} from "react";

const PlacementChart = () => {
    const [options, setOption] = useState(
      {
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            borderRadius: 10,
            dataLabels: {
              position: 'top', // top, center, bottom
            },
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
          offsetY: -20,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        
        xaxis: {
          categories: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"],
          position: 'top',
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            fill: {
              type: 'gradient',
              gradient: {
                colorFrom: '#D8E3F0',
                colorTo: '#BED1E6',
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5,
              }
            }
          },
          tooltip: {
            enabled: true,
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
            formatter: function (val) {
              return val;
            }
          }
        },
      }
    );

    const [series, setSeries] = useState(
      [{
        name: 'PlacedStudentCount',
        data: [283,476,449,242,422,945,267]
      }],
    );

    return (
    <div id="chart">
        <ReactApexChart options={options} series={series} type="bar" height="300px" />
    </div>
    )
}

export default PlacementChart;