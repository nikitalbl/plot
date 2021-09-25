var myPlot = document.getElementById('myDiv');
let rand = Array.from({length: 1001}, () => Math.random() * 1001);
var xy = new Float32Array(rand);

data = [{ xy: xy,  type: 'pointcloud' }];
layout = { };

Plotly.newPlot('myDiv', data, layout);
