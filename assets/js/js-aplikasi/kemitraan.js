$(function() {
  'use strict';

  //////////////Statistik Kemitraan dan Kerjasama////////////
  if($('#chartjsKerjasamaDalamLuar').length) {
    new Chart($('#chartjsKerjasamaDalamLuar'), {
      type: 'doughnut',
      data: {
        labels: ["Dalam Negeri", "Luar Negeri"],
        datasets: [{
          label: "Kemitraan",
          backgroundColor: ["#1900ff","#ff0026"],
          data: [95,5]
        }]
      },
    });
  }

  if($('#chartjsKerjasamaIndustriPemerintahan').length) {
    new Chart($('#chartjsKerjasamaIndustriPemerintahan'), {
      type: 'doughnut',
      data: {
        labels: ["Industri", "Pemerintahan"],
        datasets: [{
          label: "Kemitraan",
          backgroundColor: ["#1900ff","#ff0026"],
          data: [90,10]
        }]
      },
    });
  }

  // Bar chart
  if($('#chartjsKemitraanTahun').length) {
    new Chart($("#chartjsKemitraanTahun"), {
      type: 'horizontalBar',
      data: {
        labels: [ "2021","2022", "2023"],
        datasets: [
          {
            label: "Jumlah",
            backgroundColor: ["#0da802","#0da802", "#0da802"],
            data: [70,16,242]
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        legend: { display: false },
      }
    });
  }
  ///////end chart kemitraan//////////

});

