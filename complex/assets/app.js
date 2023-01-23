let options = {
  chart: {
     type: 'area'
  },
  series: [],
  xaxis: {
     categories: []
  }
}

let chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

let generateData = () => {
   let series = [];
   let categories = [];

   for(let i = 0; i < 7; i++) {
       categories.push('Day ' + i);
       series.push(Math.floor(Math.random() * 100));
   }

   options.series = [{
       name: 'Sales',
       data: series
   }];

   options.xaxis.categories = categories;

   chart.updateOptions(options);
}