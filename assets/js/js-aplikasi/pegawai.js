$(function() {
  'use strict';

  //////////////Statistik pegawai////////////
  if($('#chartjsGenderPeg').length) {
    new Chart($('#chartjsGenderPeg'), {
      type: 'doughnut',
      data: {
        labels: ["Laki-Laki", "Perempuan"],
        datasets: [{
          label: "Jumlah Pegawai",
          backgroundColor: ["#1900ff","#ff0026"],
          data: [96,48]
        }]
      },
    });
  }

  if($('#chartjsStatusPeg').length) {
    new Chart($('#chartjsStatusPeg'), {
      type: 'horizontalBar',
      data: {
        labels: ["CPNS", "PNS", "P3K","PPNPN"],
        datasets: [{
          label: "Jumlah Pegawai",
          backgroundColor: ["#ff0026","#ff0026","#ff0026" ,"#ff0026"],
          data: [3,144,5,100]
        }]
      },
    });
  }

  // Bar chart
  if($('#chartjsGolonganPeg').length) {
    new Chart($("#chartjsGolonganPeg"), {
      type: 'bar',
      data: {
        labels: [ "II/a","II/b","II/c","II/d","III/a","III/b",
                  "III/c","III/d","IV/a","IV/b","IV/c","IV/d","IV/e"],
        datasets: [
          {
            label: "Jumlah Pegawai",
            backgroundColor: ["#0da802","#0da802", "#0da802","#0da802","#0da802","#0da802"
                              ,"#0da802","#0da802","#0da802","#0da802","#0da802","#0da802","#0da802"],
            data: [0,2,10,0,16,24,21,34,18,13,4,0,2]
          }
        ]
      }
    });
  }

  // Bar chart
  if($('#chartjsJabatanPeg').length) {
    new Chart($("#chartjsJabatanPeg"), {
      type: 'horizontalBar',
      data: {
        labels: [ "Kepala","Kepala Bagian Tata Usaha","Widyaiswara Utama",
                  "Widyaiswara Madya","Widyaiswara Muda","Widyaiswara Pertama",
                  "Pengembang Teknologi Pembelajaran Madya","Pengembang Teknologi Pembelajaran Muda",
                  "Pengembang Teknologi Pembelajaran Pertama","Widyaprada Muda",
                  "Pranata Keuangan APBN Penyelia","Analis Pengelolaan Keuangan APBN Muda",
                  "Pustakawan Muda","Staf Pelaksana","Pranata Humas Pertama"],
        datasets: [
          {
            label: "Jumlah Pegawai",
            backgroundColor: ["#0da802","#0da802", "#0da802","#0da802","#0da802","#0da802","#0da802","#0da802"
                              ,"#0da802","#0da802","#0da802","#0da802","#0da802","#0da802","#0da802"],
            data: [1,1,2,22,12,2,1,10,3,3,1,2,0,84,1]
          }
        ]
      }
    });
  }

  // Bar chart
  if($('#chartjsPendidikanPeg').length) {
    new Chart($("#chartjsPendidikanPeg"), {
      type: 'bar',
      data: {
        labels: [ "S3","S2","S1","DIV","DIII","SMU","SMK","Profesi"],
        datasets: [
          {
            label: "Jumlah Pegawai",
            backgroundColor: ["#0da802","#0da802", "#0da802","#0da802","#0da802","#0da802"
                              ,"#0da802","#0da802"],
            data: [6,55,36,7,11,23,5,1]
          }
        ]
      }
    });
  }

  // Bar chart
  if($('#chartjsPensiunPeg').length) {
    new Chart($("#chartjsPensiunPeg"), {
      type: 'bar',
      data: {
        labels: [ "2024","2025","2026","2027","2028","2029"],
        datasets: [
          {
            label: "Jumlah Pegawai",
            backgroundColor: ["#0da802","#0da802", "#0da802","#0da802","#0da802","#0da802"],
            data: [10,8,10,10,6,10]
          }
        ]
      }
    });
  }
  ///////end chart pegawai//////////

});

