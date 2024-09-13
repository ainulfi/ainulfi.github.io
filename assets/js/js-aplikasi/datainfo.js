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

});

