$(function() {
  'use strict';

  // chart guru umum & produktif
  if($('#chartjsPieGuru').length) {
    new Chart($('#chartjsPieGuru'), {
      type: 'pie',
      data: {
        labels: ["Guru Umum", "Guru Produktif"],
        datasets: [{
          label: "Jumlah Guru",
          backgroundColor: ["#0045ff","#d6ff00"],
          data: [2000,1000]
        }]
      }
    });
  }
  ///////end chart guru umum dan proktif//////////

  // Bar chart
  if($('#chartjsBarGuru').length) {
    new Chart($("#chartjsBarGuru"), {
      type: 'bar',
      data: {
        labels: [ "TIK", "Teknologi Rekayasa", "Energi Pertambangan", "TET"],
        datasets: [
          {
            label: "SMK per Bidang Keahlian",
            backgroundColor: ["#b1cfec","#7ee5e5","#66d1d1","#f77eb9"],
            data: [2353,3011,3011,27]
          }
        ]
      },
      options: {
        legend: { display: false },
      }
    });
  }

  // Bar chart
  if($('#chartjsBarBidang').length) {
    new Chart($("#chartjsBarBidang"), {
      type: 'bar',
      data: {
        labels: [ "TIK", "Teknologi Rekayasa", "Energi Pertambangan"],
        datasets: [
          {
            label: "Total SMK per Bidang Keahlian",
            backgroundColor: ["#b1cfec","#7ee5e5","#66d1d1"],
            data: [2353,3011,27]
          }
        ]
      },
      options: {
        legend: { display: false },
      }
    });
  }

});