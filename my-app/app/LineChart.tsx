'use client'
import React from 'react'
import ReactECharts from 'echarts-for-react';
const LineChart = () => {
   const option = {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
      };
  return (
    <div className=' rounded-lg bg-slate-950 w-[500px] ml-40 mr-6 border border-white'>
        <ReactECharts option={option}></ReactECharts>
    </div>
  )
}

export default LineChart