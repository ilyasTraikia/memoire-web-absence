import React, { useRef, useEffect } from 'react';

import {
  Chart, BarController, BarElement, LinearScale, TimeScale, Tooltip, Legend,
} from 'chart.js';
import 'chartjs-adapter-moment';


Chart.register(BarController, BarElement, LinearScale, TimeScale, Tooltip, Legend);

function HoriontalBarChart({
  data,
  width,
  height
}) {

  const canvas = useRef(null);
 

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
        type: 'bar',
        data,
        options: {
          layout: {
            padding: 20,
          },
          indexAxis: 'y',
          plugins: {
            legend: {
              display: false,
            },
          },
        }
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default HoriontalBarChart;