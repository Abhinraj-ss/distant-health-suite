import React from "react";
import { Chart } from "chart.js";
import StreamingPlugin from "chartjs-plugin-streaming";
import { Line } from "react-chartjs-2";
import "chartjs-adapter-luxon";
import './Monitor.css'


Chart.register(StreamingPlugin);

const data={
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: "rgba(28, 125, 240, 0.5)",
      borderColor: "rgb(23, 50, 120)",
      borderDash: [8, 4],
      fill: true,
      cubicInterpolationMode: "monotone",
      data: []
    }
  ]
}

const options={
  scales: {
    x: {
      type: "realtime",
      realtime: {
        delay: 2000,
        onRefresh: (chart) => {
          chart.data.datasets.forEach((dataset) => {
            dataset.data.push({
              x: Date.now(),
              y: Math.random()
            });
          });
        }
      }
    }
  }
}

function LineGraph() {
  return (
      <Line 
      data={data}
      options={options}
    />
    
  )
}

export default LineGraph