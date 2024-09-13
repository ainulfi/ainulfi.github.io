  // function showTR() {
  //   document.getElementById("demo").innerHTML = "Hello World";
  //   //Get the context of the canvas element we want to select
  //   // var ctx = document.getElementById("myChart").getContext("2d");
  //   // var myNewChart = new Chart(ctx).PolarArea(data);
  // }
  let chart;
  var nol = document.getElementById("TableKosong");
  var tr = document.getElementById("TableTR");
  var tik = document.getElementById("TableTIK");
  var ep = document.getElementById("TableEP");

        if (nol.style.display == "none") {
          tr.style.display = "block";
          tr.style.display = "none";
          tik.style.display = "none";
          ep.style.display = "none";
        } else {
          nol.style.display = "none";
          tr.style.display = "none";
          tik.style.display = "none";
          ep.style.display = "none";
        }

  document.getElementById("showTR").addEventListener("click", function() {
      if (chart) {
        chart.destroy();
      }
      chart = new Chart(document.getElementById('chartbidang'), {
        type: 'pie',
        data: {
          labels: ["Lulus", "Tidak Lulus"],
          datasets: [{
            label: "Data",
            backgroundColor: ["#3ef772","#ff0303"],
            data: [95,5]
          }]
        }
      })
      // var x = document.getElementById("TableTR");
        if (tr.style.display === "none") {
          tr.style.display = "block";
          tik.style.display = "none";
          ep.style.display = "none";
        } else {
          tr.style.display = "block";
          tik.style.display = "none";
          ep.style.display = "none";
        }
  });

  document.getElementById("showTIK").addEventListener("click", function() {
      if (chart) {
        chart.destroy();
      }
      chart = new Chart(document.getElementById('chartbidang'), {
        type: 'pie',
        data: {
          labels: ["Lulus", "Tidak Lulus"],
          datasets: [{
            label: "Data",
            backgroundColor: ["#3ef772","#ff0303"],
            data: [80,20]
          }]
        }
      })
      // var x = document.getElementById("TableTIK");
        if (tik.style.display === "none") {
          tik.style.display = "block";
          tr.style.display = "none";
          ep.style.display = "none";
        } else {
          tik.style.display = "block";
          tr.style.display = "none";
          ep.style.display = "none";
        }
  });

  document.getElementById("showEP").addEventListener("click", function() {
      if (chart) {
        chart.destroy();
      }
      chart = new Chart(document.getElementById('chartbidang'), {
        type: 'pie',
        data: {
          labels: ["Lulus", "Tidak Lulus"],
          datasets: [{
            label: "Data",
            backgroundColor: ["#3ef772","#ff0303"],
            data: [50,50]
          }]
        }
      })
      // var x = document.getElementById("TableEP");
        if (ep.style.display === "none") {
          ep.style.display = "block";
          tik.style.display = "none";
          tr.style.display = "none";
        } else {
          ep.style.display = "block";
          tik.style.display = "none";
          tr.style.display = "none";
        }
  });

  function showTIK() {
    new Chart(document.getElementById('ShowBidPie').getContext('2d'), {
      type: 'pie',
      data: {
        labels: ["Lulus", "Tidak Lulus"],
        datasets: [{
          label: "Data",
          backgroundColor: ["#3ef772","#ff0303"],
          data: [80,20]
        }]
      }
    })
  }

  function showEP() {
    new Chart(document.getElementById('ShowBidPie').getContext('2d'), {
      type: 'pie',
      data: {
        labels: ["Lulus", "Tidak Lulus"],
        datasets: [{
          label: "Data",
          backgroundColor: ["#3ef772","#ff0303"],
          data: [60,40]
        }]
      }
    })
  }


$(function() {
  'use strict';

////========statistik fastingkom=========/////

// chart guru umum & produktif
  if($('#chartjsPieGuru').length) {
    new Chart($('#chartjsPieGuru'), {
      type: 'doughnut',
      data: {
        labels: ["Guru Umum", "Guru Produktif"],
        datasets: [{
          label: "Jumlah Guru",
          backgroundColor: ["#0045ff","#d6ff00"],
          data: [14756,14358]
        }]
      },
    });
  }
  ///////end chart guru umum dan proktif//////////

  // chart guru umum & produktif
  if($('#chartjsDoughnutBidang').length) {
    new Chart($('#chartjsDoughnutBidang'), {
      type: 'doughnut',
      data: {
        labels: ["Teknologi Rekayasa", "Teknologi Informasi Komunikasi", "Energi Pertambangan"],
        datasets: [{
          label: "Jumlah Guru",
          backgroundColor: ["#0045ff","#d6ff00", "#ff002f"],
          data: [8691,5604,63]
        }]
      },
    });
  }
  ///////end chart guru umum dan proktif//////////

  // Bar chart
  if($('#chartjsSMKBid').length) {
    new Chart($("#chartjsSMKBid"), {
      type: 'horizontalBar',
      data: {
        labels: [ "Seni Pertunjukan", 
                  "Energi dan Pertambangan",
                  "Perikanan dan Kelautan",
                  "Seni Rupa dan Kriya",
                  "Kemaritiman",
                  "Seni dan Industri Kreatif",
                  "Agribisnis dan Agroteknologi",
                  "Kesehatan",
                  "Pariwisata",
                  "Teknologi Informasi dan Komunikasi",
                  "Bisnis dan Manajemen",
                  "Teknologi Rekayasa",
                  "Umum"],
        datasets: [
          {
            label: "Jumlah Guru",
            backgroundColor: ["#7ee5e5","#7ee5e5","#7ee5e5","#7ee5e5","#7ee5e5",
                              "#7ee5e5","#7ee5e5","#7ee5e5","#7ee5e5",
                              "#7ee5e5","#7ee5e5","#7ee5e5","#7ee5e5"],
            data: [17,61,143,187,244,298,1160,1280,2002,5604,7845,8691,14756]
          }
        ]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        legend: { display: true },
      }
    });
  }

  // Bar chart
  if($('#chartjsPesertaPerTahun').length) {
    new Chart($("#chartjsPesertaPerTahun"), {
      type: 'bar',
      data: {
        labels: [ "2021","2022","2023","2024"],
        datasets: [
          {
            label: "Jumlah Peserta",
            backgroundColor: ["#0da802","#0da802", "#0da802","#0da802"],
            data: [4158,5899,6695,640]
          }
        ]
      }
    });
  }
  ///////end chart pegawai//////////

  /////////////////////=========================================/////////////////

if($('#chartjsGroupedTarget').length) {
    new Chart($('#chartjsGroupedTarget'), {
      type: 'bar',
      data: {
        labels: ["2021", "2022", "2023", "2024"],
        datasets: [
          {
            label: "Target",
            backgroundColor: "#050aa3",
            data: [1900,2000,2500,2400]
          }, {
            label: "Realisasi",
            backgroundColor: "#05a325",
            data: [1900,2000,2500,734]
          }
        ]
      }
    });
  }

  if($('#chartjsPendaftarPeserta').length) {
    new Chart($('#chartjsPendaftarPeserta'), {
      type: 'pie',
      data: {
        labels: ["Pendaftar", "Peserta"],
        datasets: [{
          label: "Data",
          backgroundColor: ["#edac34","#f77eb9"],
          data: [5586,718]
        }]
      }
    });
  }

  // Bar chart
  if($('#chartjsPesertaDiklatperJenis').length) {
    new Chart($("#chartjsPesertaDiklatperJenis"), {
      type: 'horizontalBar',
      data: {
        labels: [ "Kepala Sekolah", "Guru", "Laboran/Teknisi/Administrasi", 
        "Dosen PTV", "Instruktur LKP", "PTK-Komite Pembelajaran"],
        datasets: [
          {
            label: "Total SMK per Bidang Keahlian",
            backgroundColor: ["#f77eb9","#f77eb9","#f77eb9","#f77eb9","#f77eb9","#f77eb9"],
            data: [126,1264,418,71,68,1987]
          }
        ]
      },
      options: {
        legend: { display: false },
      }
    });
  }

  // if($('#chartjsTingkatKelulusan').length) {
  //   new Chart($('#chartjsTingkatKelulusan'), {
  //     type: 'pie',
  //     data: {
  //       labels: ["Lulus", "Tidak Lulus"],
  //       datasets: [{
  //         label: "Data",
  //         backgroundColor: ["#3ef772","#ff0303"],
  //         data: [95,5]
  //       }]
  //     }
  //   });
  // }

  if($('#chartjsGroupedPerbPesertaSudahBelum').length) {
    new Chart($('#chartjsGroupedPerbPesertaSudahBelum'), {
      type: 'horizontalBar',
      data: {
        labels: ["Banten", "Bengkulu", "DI Yogyakarta", "DKI Jakarta",
                  "Jawa Barat", "Jawa Tengah", "Kalimantan Timur", "Kalimantan Utara",
                  "Papua", "Papua Barat",],
        datasets: [
          {
            label: "Belum Diklat",
            backgroundColor: "#050aa3",
            data: [347,250,638,526,2086,5218,266,33,183,75]
          }, {
            label: "Sudah Diklat",
            backgroundColor: "#05a325",
            data: [554,29,56,265,2321,116,334,91,19,11]
          }
        ]
      }
    });
  }

  // Bar chart
  if($('#chartjsBarDataPesertaProgli').length) {
    new Chart($("#chartjsBarDataPesertaProgli"), {
      type: 'horizontalBar',
      data: {
        labels: [ "Teknik Sipil dan Perencanaan", "Teknik Elektronika dan Informatika", "Teknik Otomotif",
                  "Teknik Mesin dan Konversi Energi", "Teknik Ketenagalistrikan",
                  "Teknik Pengelasan dan Fabrikasi Logam", "Teknik Energi Terbarukan",
                  "Manajemen Kependidikan"],
        datasets: [
          {
            label: "Jumlah Peserta",
            backgroundColor: ["#7ee5e5","#7ee5e5","#7ee5e5",
                              "#7ee5e5","#7ee5e5","#7ee5e5",
                              "#7ee5e5","#7ee5e5"],
            data: [29,29,48,22,21,21,36,20]
          }
        ]
      },
      options: {
        legend: { display: false },
      }
    });
  }

  // Bar chart
  if($('#chartjsBarDataDiklatProgli').length) {
    new Chart($("#chartjsBarDataDiklatProgli"), {
      type: 'horizontalBar',
      data: {
        labels: [ "Teknik Sipil dan Perencanaan", "Teknik Elektronika dan Informatika", "Teknik Otomotif",
                  "Teknik Mesin dan Konversi Energi", "Teknik Ketenagalistrikan",
                  "Teknik Pengelasan dan Fabrikasi Logam", "Teknik Energi Terbarukan",
                  "Manajemen Kependidikan"],
        datasets: [
          {
            label: "Jumlah Diklat",
            backgroundColor: ["#f77eb9","#f77eb9","#f77eb9",
                              "#f77eb9","#f77eb9","#f77eb9",
                              "#f77eb9","#f77eb9"],
            data: [29,29,48,22,21,21,36,20]
          }
        ]
      },
      options: {
        legend: { display: false },
      }
    });
  }

  /////=======end========//////

});

