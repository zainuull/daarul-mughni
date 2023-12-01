'use client';

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BitcoinChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  // Declare data outside useEffect
  const data = {
    labels: ['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05'],
    datasets: [
      {
        label: 'Close Price',
        data: [35000, 35500, 36000, 35500, 37000],
        borderColor: 'blue',
        fill: false,
        pointRadius: 5,
      },
    ],
  };

  useEffect(() => {
    const period = 3;
    const smaData = calculateSMA(data.datasets[0].data, period);

    data.datasets.push({
      label: `SMA-${period}`,
      data: smaData,
      borderColor: 'orange',
      // borderDash: [5, 5],
      fill: false,
      pointRadius: 5,
    });

    if (chartRef.current) {
      const existingChart = Chart.getChart(chartRef.current);
      if (existingChart) {
        existingChart.destroy();
      }
    }

    const ctx = chartRef.current?.getContext('2d');
    if (ctx) {
      const myChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
            },
          },
        },
      });
    }

    function calculateSMA(data: number[], period: number): number[] {
      const smaData: number[] = [];
      for (let i = 0; i < data.length; i++) {
        if (i < period - 1) {
          smaData.push(null);
        } else {
          const sum = data.slice(i - period + 1, i + 1).reduce((acc, val) => acc + val, 0);
          const average = sum / period;
          smaData.push(average);
        }
      }
      return smaData;
    }
  }, []);

  return <canvas id="bitcoinChart" width="800" height="400" ref={chartRef}></canvas>;
};

export default BitcoinChart;
