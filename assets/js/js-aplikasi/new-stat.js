$(function() {
  'use strict';

//////========statistik dashboard depan======///////

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

  // Bar chart
  if($('#chartjsBarGuru').length) {
    new Chart($("#chartjsBarGuru"), {
      type: 'bar',
      data: {
        labels: [ "TIK", "Teknologi Rekayasa", "Energi Pertambangan", "Umum"],
        datasets: [
          {
            label: "Guru SMK per Bidang Keahlian",
            backgroundColor: ["#b1cfec","#7ee5e5","#f77eb9", "#fa4e00" ],
            data: [5604,8691,63,14756 ]
          }
        ]
      },
      options: {
        legend: { display: true },
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
            backgroundColor: ["#b1cfec","#7ee5e5","#f77eb9"],
            data: [2353,3011,27]
          }
        ]
      },
      options: {
        legend: { display: false },
      }
    });
  }

  // Bar chart
  if($('#chartjsGuruProduktif').length) {
    new Chart($("#chartjsGuruProduktif"), {
      type: 'horizontalBar',
      data: {
        labels: [ "Jawa Barat", "Jawa Tengah", 
                  "Lampung", "Banten", "DKI Jakarta", 
                  "Kalimantan Timur", "DI Yogyakarta", 
                  "Bengkulu", "Papua", "Papua Barat", "Kalimantan Utara"],
        datasets: [
          {
            label: "Guru Produktif",
            backgroundColor: ["#006cbd", "#006cbd", 
                              "#006cbd", "#006cbd", "#006cbd", 
                              "#006cbd", "#006cbd", 
                              "#006cbd", "#006cbd", "#006cbd", "#006cbd"],
            data: [5334,4407,1006,901,791,694,600,279,202,86,58]
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

  // Bar chart
  if($('#chartjsGuruUmum').length) {
    new Chart($("#chartjsGuruUmum"), {
      type: 'horizontalBar',
      data: {
        labels: [ "Jawa Barat", "Jawa Tengah", 
                  "Lampung", "Banten", "DKI Jakarta", 
                  "Kalimantan Timur", "DI Yogyakarta", 
                  "Bengkulu", "Papua", "Papua Barat", "Kalimantan Utara"],
        datasets: [
          {
            label: "Guru Umum",
            backgroundColor: ["#fa4e00", "#fa4e00", 
                              "#fa4e00", "#fa4e00", "#fa4e00", 
                              "#fa4e00", "#fa4e00", 
                              "#fa4e00", "#fa4e00", "#fa4e00", "#fa4e00"],
            data: [4891,4367,1247,1131,1051,681,564,351,263,127,83]
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

  // Bar chart
  if($('#chartjsSMKTIK').length) {
    new Chart($("#chartjsSMKTIK"), {
      type: 'horizontalBar',
      data: {
        labels: [ "Tek. Komputer & Jaringan", "Multimedia", 
                  "Sistem Informatika, Jaringan & Aplikasi", "Rekayasa Perangkat Lunak",
                  "Tek. Produksi & Penyiaran Program Radio & Pertelevisian"],
        datasets: [
          {
            label: "SMK",
            backgroundColor: ["#b1cfec", "#b1cfec", 
                              "#b1cfec", "#b1cfec", "#b1cfec"],
            data: [84,35,12,7,3]
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

  // Bar chart
  if($('#chartjsSMKTR').length) {
    new Chart($("#chartjsSMKTR"), {
      type: 'horizontalBar',
      data: {
        labels: [ "Teknik Otomotif Sepeda Motor", "Teknik Otomotif Kendaraan Ringan",
                  "Teknik Elektronika Industri",
                  "Teknik Pemesinan",
                  "Teknik Pengelasan",
                  "Teknik Instalasi Pemanfaatan Tenaga Listrik",
                  "Teknik Instalasi Tenaga Listrik",
                  "Desain Pemodelan dan Informasi Bangunan",
                  "Geologi Pertambangan",
                  "Teknik Elektronika Industri (4 tahun)",
                  "Teknik Gambar Bangunan",
                  "Teknik Otomasi Industri",
                  "Kimia Industri",
                  "Teknik Alat Berat",
                  "Teknik Audio Video",
                  "Teknik Bodi Otomotif",
                  "Teknik Pemboran Minyak dan Gas"],
        datasets: [
          {
            label: "SMK",
            backgroundColor: ["#7ee5e5","#7ee5e5","#7ee5e5","#7ee5e5","#7ee5e5",
                              "#7ee5e5","#7ee5e5","#7ee5e5","#7ee5e5",
                              "#7ee5e5","#7ee5e5","#7ee5e5","#7ee5e5",
                              "#7ee5e5","#7ee5e5","#7ee5e5","#7ee5e5"],
            data: [16,15,4,4,4,3,3,2,2,2,2,2,1,1,1,1,1]
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

  // Bar chart
  if($('#chartjsSMKET').length) {
    new Chart($("#chartjsSMKET"), {
      type: 'horizontalBar',
      data: {
        labels: [ "Geologi Pertambangan",
                  "Tek. Produksi Minyak dan Gas"],
        datasets: [
          {
            label: "SMK",
            backgroundColor: ["#f77eb9", "#f77eb9"],
            data: [1,1]
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
/////=======end========//////

////========statistik fastingkom=========/////

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

  if($('#chartjsTingkatKelulusan').length) {
    new Chart($('#chartjsTingkatKelulusan'), {
      type: 'pie',
      data: {
        labels: ["Lulus", "Tidak Lulus"],
        datasets: [{
          label: "Data",
          backgroundColor: ["#3ef772","#ff0303"],
          data: [95,5]
        }]
      }
    });
  }

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

////========statistik penjaminan mutu=========/////
  
  // Bar chart
  if($('#chartjsPenjaminanMutuperKegiatan').length) {
    new Chart($("#chartjsPenjaminanMutuperKegiatan"), {
      type: 'horizontalBar',
      data: {
        labels: [ "Perencanaan Berbasis Data", "Pelatihan Komite Pembelajaran", 
        "Pendampingan Kampus Mengajar", "Pendampingan Asesmen Nasional", "Pendampingan Kegiatan Sekolah Sehat"],
        datasets: [
          {
            label: "Total SMK",
            backgroundColor: ["#f77eb9","#f77eb9","#f77eb9","#f77eb9","#f77eb9"],
            data: [200,100,55,32,30]
          }
        ]
      },
      options: {
        legend: { display: false },
      }
    });
  }

  // Apex Radialbar chart start
  var options = {
    chart: {
      width: 180,
      height: 180,
      type: "radialBar",
      parentHeightOffset: 0
    },
    colors: ["#f24202", "#f27e02","#2a02f2"],
    grid: {
      borderColor: "rgba(77, 138, 240, .1)",
      padding: {
        top: 10
      }
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL'
          }
        }
      }
    },
    series: [80, 80, 80],
    labels: ["Bengkulu", "Lampung", "Jawa Barat"]
  };
  
  var chartpbd = new ApexCharts(document.querySelector("#apexradialBarPBD"), options);
  
  chartpbd.render();
  
  var chartAreaBoundspbd = chartpbd.w.globals.dom.baseEl.querySelector('.apexcharts-inner').getBoundingClientRect();
  // Apex Radialbar chart end

  // Apex Radialbar chart start
  var options = {
    chart: {
      width: 180,
      height: 180,
      type: "radialBar",
      parentHeightOffset: 0
    },
    colors: ["#f24202", "#f27e02","#2a02f2"],
    grid: {
      borderColor: "rgba(77, 138, 240, .1)",
      padding: {
        top: 10
      }
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL'
          }
        }
      }
    },
    series: [80, 80, 80],
    labels: ["Bengkulu", "Lampung", "Jawa Barat"]
  };
  
  var chartpkp = new ApexCharts(document.querySelector("#apexRadialBarPKP"), options);
  
  chartpkp.render();
  
  var chartAreaBoundspkp = chartpkp.w.globals.dom.baseEl.querySelector('.apexcharts-inner').getBoundingClientRect();
  // Apex Radialbar chart end

  // Apex Radialbar chart start
  var options = {
    chart: {
      width: 180,
      height: 180,
      type: "radialBar",
      parentHeightOffset: 0
    },
    colors: ["#f24202", "#f27e02","#2a02f2"],
    grid: {
      borderColor: "rgba(77, 138, 240, .1)",
      padding: {
        top: 10
      }
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL'
          }
        }
      }
    },
    series: [80, 80, 80],
    labels: ["Bengkulu", "Lampung", "Jawa Barat"]
  };
  
  var chartkm = new ApexCharts(document.querySelector("#apexRadialBarKM"), options);
  
  chartkm.render();
  
  var chartAreaBoundskm = chartkm.w.globals.dom.baseEl.querySelector('.apexcharts-inner').getBoundingClientRect();
  // Apex Radialbar chart end

  // Apex Radialbar chart start
  var options = {
    chart: {
      width: 180,
      height: 180,
      type: "radialBar",
      parentHeightOffset: 0
    },
    colors: ["#f24202", "#f27e02","#2a02f2"],
    grid: {
      borderColor: "rgba(77, 138, 240, .1)",
      padding: {
        top: 10
      }
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL'
          }
        }
      }
    },
    series: [80, 80, 80],
    labels: ["Bengkulu", "Lampung", "Jawa Barat"]
  };
  
  var chartss = new ApexCharts(document.querySelector("#apexRadialBarSS"), options);
  
  chartss.render();
  
  var chartAreaBoundsss = chartss.w.globals.dom.baseEl.querySelector('.apexcharts-inner').getBoundingClientRect();
  // Apex Radialbar chart end

  // Apex Radialbar chart start
  var options = {
    chart: {
      width: 180,
      height: 180,
      type: "radialBar",
      parentHeightOffset: 0
    },
    colors: ["#f24202", "#f27e02","#2a02f2"],
    grid: {
      borderColor: "rgba(77, 138, 240, .1)",
      padding: {
        top: 10
      }
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          total: {
            show: true,
            label: 'TOTAL'
          }
        }
      }
    },
    series: [80, 80, 80],
    labels: ["Bengkulu", "Lampung", "Jawa Barat"]
  };
  
  var chartan = new ApexCharts(document.querySelector("#apexRadialBarAN"), options);
  
  chartan.render();
  
  var chartAreaBoundsan = chartan.w.globals.dom.baseEl.querySelector('.apexcharts-inner').getBoundingClientRect();
  // Apex Radialbar chart end

  if($('#chartjsGroupedPBD').length) {
    new Chart($('#chartjsGroupedPBD'), {
      type: 'bar',
      data: {
        labels: ["Jawa Barat", "Bengkulu", "Lampung"],
        datasets: [
          {
            label: "SMK",
            backgroundColor: "#050aa3",
            data: [250,150,180]
          }, {
            label: "Peserta",
            backgroundColor: "#05a325",
            data: [250,150,180]
          }
        ]
      }
    });
  }

  if($('#chartjsGroupedPKP').length) {
    new Chart($('#chartjsGroupedPKP'), {
      type: 'bar',
      data: {
        labels: ["Jawa Barat", "Bengkulu", "Lampung"],
        datasets: [
          {
            label: "SMK",
            backgroundColor: "#050aa3",
            data: [50,10,10]
          }, {
            label: "Peserta",
            backgroundColor: "#05a325",
            data: [350,70,70]
          }
        ]
      }
    });
  }

  //////////////end penjaminan mutu//////////////////////

  

});

