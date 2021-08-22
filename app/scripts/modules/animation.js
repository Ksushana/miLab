// let ys = [-10, 1, 3, 5, 8, 8, 10, 11, 11, 11, 11, 11, 12, 13, 16, 19, 20, 30];

// const minY = ys[0]
// const maxY = ys[ys.length - 1]
// const v0 = 0.1;
// const deltaV = 0.002;

// const particles = ys.map(y => {
//   return {
//     y: y,
//     v: (Math.random() - 0.5) * v0
//   };
// });


// const data = [{
//   y: particles.map(p => p.y),
//   boxpoints: "all",
//   jitter: 0.5,
//   pointpos: 0,
//   type: 'box',
//   marker: {
//     size: 55
//   }

// }];

// const layout = {
//     xaxis: {
//       showgrid: false,
//       zeroline: false,
//     },
//     yaxis: {
//       showgrid: false,
//       zeroline: false,
//     },
// }

// function randomize(p) {
//   p.v = p.v + (Math.random() - 0.5) * deltaV;
//   p.y = p.y + p.v;
//   if (p.y < minY) {
//     p.v = Math.abs(p.v);
//   }
//   if (p.y > maxY) {
//     p.v = -Math.abs(p.v);
//   }
// }

// const duration = 0;

// Plotly.newPlot('myDiv', data, layout);

// function animate() {
//   particles.forEach(randomize);

//   Plotly.animate('myDiv', {
//     data: [{
//       y: particles.map(p => p.y),
//     }],
//     traces: [0],
//     layout: {}
//   }, {
//     transition: {
//       duration,
//     },
//     frame: {
//       duration
//     }
//   });

//   requestAnimationFrame(animate);
// }

// animate();