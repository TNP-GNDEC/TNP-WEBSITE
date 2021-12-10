import ReactApexChart from "react-apexcharts";
import React, {useEffect, useState} from "react";
import Axios from "axios";

const PostChart = () => {
  const [mon1, setMon1] = useState('70');
  const [mon2, setMon2] = useState('50');
  const [mon3, setMon3] = useState('30');
  const [mon4, setMon4] = useState('48');
  const [mon5, setMon5] = useState('100');
  const [mon6, setMon6] = useState('90');
  const fetchPostData = async() => {
      await Axios.get(`/postChartData`).then((res) => {
          if(res.data.status === 200){
            setSeries([{data: [res.data.mon1,
              res.data.mon2,
              res.data.mon3,
              res.data.mon4,
              res.data.mon5, 
              res.data.mon6]}]);
          }
          }).catch((error) => {
          console.log(error);
          });
  }


  var x6 = new Date();
  x6.setMonth(x6.getMonth());
  var m6 = x6.toLocaleString('en-us', {month: 'short', year:'numeric'});
  var x5 = new Date();
  x5.setMonth(x5.getMonth()-1);
  var m5 = x5.toLocaleString('en-us', {month: 'short', year:'numeric'});
  var x4 = new Date();
  x4.setMonth(x4.getMonth()-2);
  var m4 = x4.toLocaleString('en-us', {month: 'short', year:'numeric'});
  var x3 = new Date();
  x3.setMonth(x3.getMonth()-3);
  var m3 = x3.toLocaleString('en-us', {month: 'short', year:'numeric'});
  var x2 = new Date();
  x2.setMonth(x2.getMonth()-4);
  var m2 = x2.toLocaleString('en-us', {month: 'short', year:'numeric'});
  var x1 = new Date();
  x1.setMonth(x1.getMonth()-5);
  var m1 = x1.toLocaleString('en-us', {month: 'short', year:'numeric'});

    const [options, setOption] = useState(
        {
            chart: {
              type: 'area'
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'smooth'
            },
            xaxis: {
              name: 'months',
              type: 'string',
              categories: [m1, m2, m3, m4, m5, m6]
            },
        },
    );

    const [series, setSeries] = useState(
        [{
            name: 'posts',
            data: [mon1, mon2, mon3, mon4, mon5, mon6]
        }]
    );

    useEffect(() => { 
        fetchPostData(); 
      }, []);

    return (
    <div id="chart">
        <ReactApexChart options={options} series={series} type="area" height="300px" />
    </div>
    )
}

export default PostChart;