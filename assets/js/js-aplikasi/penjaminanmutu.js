// let ctx = document.getElementById('chartjsmutusatpen24')
//             .getContext('2d');
//         let dataValue = {
//             // Labels for each segment of the pie
//             labels: ['2024 (Meningkat)', '2023,2024 (Meningkat)', '2022,2023,2024 (Meningkat)'],
//             // Datasets for the chart
//             datasets: [{
//                 data: [1176,20,15],
//                 // Data points for each segment
//                 backgroundColor: ['rgba(255, 99, 132, 0.8)',
//                     'rgba(75, 192, 192, 0.8)',
//                     'rgba(54, 162, 235, 0.8)'],
//                 borderWidth: 2 // Border width for each segment
//             }]
//         }
//         // Create a new Pie Chart
//         let chartjsmutusatpen24 = new Chart(ctx, {
//             // Specify the chart type
//             type: 'pie',
//             // Provide data for the chart
//             data: dataValue,
//             // Additional options for the chart
//             options: {
//                 responsive: true, // It make the chart responsive
//                 // This plugin will display Title of chart
//                 plugins: {
//                     title: {
//                         display: true,
//                         text: 'Jumlah'
//                     }
//                 },
//                 // Event handler for a click on a chart element
//                 onClick: function (event, elements) {
//                     const clickedElement = elements[0];
//                     const datasetIndex = clickedElement.index;
//                     const label = dataValue.labels[datasetIndex];
//                     const labelValue = dataValue.datasets[0].data[datasetIndex];
 
//                     // Show an alert with information about the clicked segment
//                     alert(`Clicked on: ${label} and it's value is ${labelValue}`);
//                 }
//             }
//         });

        // Get the 2D rendering context of the canvas
        let ctx = document.getElementById('pieChart').getContext('2d');
        let dataValue = {
            // Labels for each segment of the pie
            labels: ['JavaScript',
                'Python',
                'Java',
                'C++',
                'PHP'],
            // Datasets for the chart
            datasets: [{
                data: [40, 35, 25, 17, 18],
                // Data points for each segment
                backgroundColor: ['rgba(255, 99, 132, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 205, 86, 0.8)',
                    'rgba(153, 102, 255, 0.8)'],
                borderWidth: 2 // Border width for each segment
            }]
        }
        // Create a new Pie Chart
        let pieChart = new Chart(ctx, {
            // Specify the chart type
            type: 'pie',
            // Provide data for the chart
            data: dataValue,
            // Additional options for the chart
            options: {
                responsive: true, // It make the chart responsive
                // This plugin will display Title of chart
                plugins: {
                    title: {
                        display: true,
                        text: 'Number of Students Enrolled Course'
                    }
                },
                // Event handler for a click on a chart element
                onClick: function (event, elements) {
                    const clickedElement = elements[0];
                    const datasetIndex = clickedElement.index;
                    const label = dataValue.labels[datasetIndex];
                    const labelValue = dataValue.datasets[0].data[datasetIndex];
 
                    // Show an alert with information about the clicked segment
                    alert(`Clicked on: ${label} and it's value is ${labelValue}`);
                }
            }
        });


$(function() {
  'use strict';

////========statistik penjaminan mutu=========/////
  // const canvas1 = document.getElementById('chartjsmutusatpen24');

  // canvas1.onClick = (evt) => {

  // }

   // Get the 2D rendering context of the canvas

  if($('#chartjsmutusatpen24').length) {
    new Chart($('#chartjsmutusatpen24'), {
      type: 'pie',
      data: {
        labels: ["2024 (Meningkat)", "2023,2024 (Meningkat)", "2022,2023,2024 (Meningkat)"],
        datasets: [{
          label: "Jumlah",
          backgroundColor: ["#05fa36","#0335ff","#07b4ba"],
          data: [1176,20,15]
        }]
      },
      options: {
        responsive: true
      }
    });
  }


  if($('#chartjsmutusatpen23').length) {
    new Chart($('#chartjsmutusatpen23'), {
      type: 'pie',
      data: {
        labels: ["2022,2023 (Perlu Peningkatan)", "2022,2023 (Meningkat)","2023 (Meningkat)","2023 (Perlu Peningkat)"],
        datasets: [{
          label: "Jumlah",
          backgroundColor: ["#f50581","#0cdbf2","#0df505", "#f5051d"],
          data: [15,530,1158,20]
        }]
      }
    });
  }

  if($('#chartjsmutusatpen22').length) {
    new Chart($('#chartjsmutusatpen22'), {
      type: 'pie',
      data: {
        labels: ["2021,2022 (Belum Meningkat)", "2021,2022 (Meningkat)", "2022 (Belum Meningkat)", "2022 (Meningkat)"],
        datasets: [{
          label: "Jumlah",
          backgroundColor: ["#05fa36","#0335ff","#07b4ba"],
          data: [96,61,449,404]
        }]
      }
    });
  }

  if($('#chartjsmutusatpen21').length) {
    new Chart($('#chartjsmutusatpen21'), {
      type: 'pie',
      data: {
        labels: ["Belum Meningkat", "Meningkat"],
        datasets: [{
          label: "Jumlah",
          backgroundColor: ["#05fa36","#07b4ba","#f50505"],
          data: [263,12]
        }]
      }
    });
  }

  if($('#chartjsGroupedPMPIP').length) {
    new Chart($('#chartjsGroupedPMPIP'), {
      type: 'bar',
      data: {
        labels: ["PM2021", "PM2022", "PM2023", "PM2024","PIP2021", "PIP2022", "PIP2023", "PIP2024"],
        datasets: [
          {
            label: "Total Sasaran",
            backgroundColor: "#03a7ff",
            data: [3364,3364,3364,3364,5499,5499,5499,5499]
          }, {
            label: "Terpetakan",
            backgroundColor: "#03ff10",
            data: [275,1010,2188,3364,1728,3715,4579,5499]
          }, {
            label: "Belum Terpetakan",
            backgroundColor: "#ff0303",
            data: [3089,2453,1176,0,3771,1784,920,0]
          }
        ]
      }
    });
  }


  // if($('#chartjsmutusatpen24').length) {
  //   new Chart($('#chartjsmutusatpen24'), {
  //     type: 'pie',
  //     data: {
  //       labels: ["2024 (Meningkat)", "2023,2024 (Meningkat)", "2022,2023,2024 (Meningkat)"],
  //       datasets: [{
  //         label: "Jumlah",
  //         backgroundColor: ["#05fa36","#0335ff","#07b4ba"],
  //         data: [1176,20,15]
  //       }]
  //     }
  //   });
  // }

  if($('#chartjsmutupip23').length) {
    new Chart($('#chartjsmutupip23'), {
      type: 'pie',
      data: {
        labels: ["Meningkat", "Perlu Peningkatan"],
        datasets: [{
          label: "Jumlah",
          backgroundColor: ["#0314ff","#ff0310"],
          data: [846,180]
        }]
      }
    });
  }

  if($('#chartjsmutupip22').length) {
    new Chart($('#chartjsmutupip22'), {
      type: 'pie',
      data: {
        labels: ["Meningkat", "Perlu Peningkatan"],
        datasets: [{
          label: "Jumlah",
          backgroundColor: ["#0314ff","#ff0310"],
          data: [1907,80]
        }]
      }
    });
  }

  if($('#chartjsmutupip21').length) {
    new Chart($('#chartjsmutupip21'), {
      type: 'pie',
      data: {
        labels: ["Meningkat", "Perlu Peningkatan"],
        datasets: [{
          label: "Jumlah",
          backgroundColor: ["#0314ff","#ff0310"],
          data: [1620,108]
        }]
      }
    });
  }

  if($('#chartjsGroupedKinerjaPMPIP').length) {
    new Chart($('#chartjsGroupedKinerjaPMPIP'), {
      type: 'bar',
      data: {
        labels: ["PM2021", "PM2022", "PM2023", "PM2024","PIP2021", "PIP2022", "PIP2023"],
        datasets: [
          {
            label: "Target PK",
            backgroundColor: "#03a7ff",
            data: [68,522,522,909,396,538,538]
          }, {
            label: "Realisasi",
            backgroundColor: "#03ff10",
            data: [275,1010,1723,1211,1728,1987,864]
          }, {
            label: "Prosentase Capaian",
            backgroundColor: "#ff0303",
            data: [404,193,330,133,436,369,1611]
          }
        ]
      }
    });
  }

  //////////////end penjaminan mutu//////////////////////

  

});

