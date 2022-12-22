import React from "react";
import { Chart,registerables  } from "chart.js";
import StreamingPlugin from "chartjs-plugin-streaming";
import { Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns'
import './Monitor.css'


Chart.register(StreamingPlugin);
Chart.register(...registerables);



function LineGraph({value}) {
  console.log(value)
  const data={
    datasets: [
      {
        label: "ECG",
        backgroundColor: "rgba(28, 125, 240, 0.5)",
        borderColor: "rgb(23, 50, 120)",
        fill: false,
        data: []
      }
    ]
  }
  
  const options={
    scales: {
      x: {
        type: "realtime",
        realtime: {
          onRefresh: (chart) => {
            chart.data.datasets.forEach((dataset) => {
              dataset.data.push({
                x: Date.now(),
                y: value
              });
            });
          }
        }
      },
      y:{
        max:3500,
        min:0
      }
    }
  }
  return (
      <Line 
      data={data}
      options={options}
    />
    
  )
}

export default LineGraph