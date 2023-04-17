import React, { useRef, useEffect } from 'react';

import {
  Chart, BarController, BarElement, LinearScale, TimeScale, Tooltip, Legend,
} from 'chart.js';
import 'chartjs-adapter-moment';

// Import utilities
import { tailwindConfig, formatValue } from '../utils/Utils';

Chart.register(BarController, BarElement, LinearScale, TimeScale, Tooltip, Legend);

function BarChart01({
  data,
  width,
  height
}) {

  const canvas = useRef(null);
  const legend = useRef(null);

  useEffect(() => {
    const ctx = canvas.current;
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        layout: {
          padding: {
            top: 12,
            bottom: 16,
            left: 20,
            right: 20,
          },
        },
        scales: {
          y: {
            border: {
              display: false,
            },
            ticks: {
              maxTicksLimit: 5,
            },
          },
          x: {
        
           
            border: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
           
            },
          },
        },
        interaction: {
          intersect: false,
          mode: 'nearest',
        },
        animation: {
          duration: 500,
        },
        maintainAspectRatio: false,
        resizeDelay: 200,
      },
      plugins: [{
        id: 'htmlLegend',
        afterUpdate(c, args, options) {
          const ul = legend.current;
          if (!ul) return;
          // Remove old legend items
          while (ul.firstChild) {
            ul.firstChild.remove();
          }
          // Reuse the built-in legendItems generator
          const items = c.options.plugins.legend.labels.generateLabels(c);
          items.forEach((item) => {
            const li = document.createElement('li');
            li.style.marginRight = tailwindConfig().theme.margin[4];
            // Button element
            const button = document.createElement('button');
            button.style.display = 'inline-flex';
            button.style.alignItems = 'center';
            button.style.opacity = item.hidden ? '.3' : '';
            button.onclick = () => {
              c.setDatasetVisibility(item.datasetIndex, !c.isDatasetVisible(item.datasetIndex));
              c.update();
            };
            // Color box
            const box = document.createElement('span');
            box.style.display = 'block';
            box.style.width = tailwindConfig().theme.width[3];
            box.style.height = tailwindConfig().theme.height[3];
            box.style.borderRadius = tailwindConfig().theme.borderRadius.full;
            box.style.marginRight = tailwindConfig().theme.margin[2];
            box.style.borderWidth = '3px';
            box.style.borderColor = item.fillStyle;
            box.style.pointerEvents = 'none';
          
         
         
            li.appendChild(button);
            button.appendChild(box);
        
          
         
            ul.appendChild(li);
          });
        },
      }],
    });
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <div className="px-5 py-3">
       
      </div>
      <div className="grow">
        <canvas ref={canvas} width={width} height={height}></canvas>
      </div>
    </React.Fragment>
  );
}

export default BarChart01;
