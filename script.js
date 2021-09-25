let myPlot1 = document.getElementById('plot1');
let myPlot2 = document.getElementById('plot2');
let rand1 = Array.from({length: 1001}, () => Math.random() * 1001);
let rand2 = Array.from({length: 50000001}, () => Math.random() * 50000001);
let xy = new Float32Array(rand1);
let xy2 = new Float32Array(rand2);

data = [{ xy: xy, type: 'pointcloud' }];
data2 = [{ xy: xy2, type: 'pointcloud' }];
layout = { };

Plotly.newPlot('plot1', data, layout);
Plotly.newPlot('plot2', data2, layout);

