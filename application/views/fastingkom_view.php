
  
    <div class="page-wrapper">

      <div class="page-content">

        <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
          <div>
            <h4 class="mb-3 mb-md-0">Informasi Data Peningkatan Kompetensi</h4>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-xl-12 stretch-card">
            <div class="row flex-grow">
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card text-white bg-info">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="media-body text-left">
                          <h2 class="info">2.455</h2>
                          <span>Total SMK seluruh Wilayah Mitra</span>
                        </div>
                        <div class="align-self-center">
                          <i data-feather="home" class="text-white icon-xxl d-block mx-auto my-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card text-white bg-secondary">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="media-body text-left">
                          <h2 class="danger">29.114</h2>
                          <span>Total Sebaran Guru SMK di Wilayah Mitra</span>
                        </div>
                        <div class="align-self-center">
                          <i data-feather="user-plus" class="text-white icon-xxl d-block mx-auto my-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card text-white bg-success">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="media-body text-left">
                          <h2 class="danger">14.756</h2>
                          <span>Total Guru Produktif SMK di Wilayah Mitra</span>
                        </div>
                        <div class="align-self-center">
                          <i data-feather="cpu" class="text-white icon-xxl d-block mx-auto my-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <div class="card text-white bg-danger">
                  <div class="card-content">
                    <div class="card-body">
                      <div class="media d-flex">
                        <div class="media-body text-left">
                          <h2 class="warning">949</h2>
                          <span>Total Guru yang Meningkat Kompetensinya</span>
                        </div>
                        <div class="align-self-center">
                          <i data-feather="trending-up" class="text-white icon-xxl d-block mx-auto my-2"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- row -->

        <div class="row">
          <div class="col-12 col-xl-12 grid-margin stretch-card">
            <div class="card overflow-hidden">
              <div class="card-body">
                <div class="header">
                  <h4>Peta Sebaran Wilayah Mitra</h4>
                </div>
                <div class="body text-center">
                    <div id="vmap" style="width: 1050px; height: 400px;"></div>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- row -->

        <div class="row">
          <div class="col-12 col-xl-12 grid-margin stretch-card">
            <div class="card card-primary card-tabs">
              <div class="card-header">
                  <h4 class="card-title">Rekap Data</h4>
                <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" id="custom-tabs-one-iu-tab" data-toggle="pill" href="#custom-tabs-one-iu" role="tab" aria-controls="custom-tabs-one-home" aria-selected="true">Informasi Umum
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="custom-tabs-one-bid-tab" data-toggle="pill" href="#custom-tabs-one-bid" role="tab" aria-controls="custom-tabs-one-profile" aria-selected="false">Bidang Keahlian Binaan
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" id="custom-tabs-one-rp-tab" data-toggle="pill" href="#custom-tabs-one-rp" role="tab" aria-controls="custom-tabs-one-messages" aria-selected="false">Rekap Peserta
                  </a>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <div class="tab-content" id="custom-tabs-one-tabContent">
                  <div class="tab-pane fade show active" id="custom-tabs-one-iu" role="tabpanel" aria-labelledby="custom-tabs-one-iu-tab">
                    <h4 class="card-title">Rekap Data Nasional</h4>
                    <div class="row">
                      <div class="col-sm-5">
                        <div>
                          <canvas id="chartjsPieGuru" style="height:300vh; width:220vw"></canvas>
                        </div>
                        <br>
                        <div class="table-responsive">
                          <table class="table table-bordered">
                            <thead>
                              <tr>
                                <th>Jenis Guru</th>
                                <th>Jumlah Guru</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Guru Produktif</td>
                                <td>14.358</td>
                              </tr>
                              <tr>
                                <td>Guru Umum</td>
                                <td>14.756</td>
                              </tr>
                              <tr>
                                <td><b>Total</b></td>
                                <td>29.114</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div><!-- Col -->
                      <div class="col-sm-7">
                        <div><canvas id="chartjsSMKBid" style="height:400vh; width:230vw"></canvas></div>
                      </div> <!-- Col-->
                    </div>
                  </div>
                  <div class="tab-pane fade" id="custom-tabs-one-bid" role="tabpanel" aria-labelledby="custom-tabs-one-bid-tab">
                    <h4 class="card-title">Rekap Data Bidang Keahlian Binaan</h4>
                    <div class="row">
                      <div class="col-sm-4">
                        <div >
                          <canvas id="chartjsDoughnutBidang" style="height:200vh; width:130vw"></canvas>
                        </div>
                        <br>
                        <div class="table-responsive">
                          <table class="table table-bordered">
                            <thead>
                              <tr>
                                <th>Bidang Keahlian</th>
                                <th>Jumlah Guru</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Teknologi Rekayasa</td>
                                <td><button id="showTR" type="button" class="btn btn-info btn-sm" >8.691</button></td>
                              </tr>
                              <tr>
                                <td>Teknologi Informasi Komunikasi</td>
                                <td><button type="button" class="btn btn-info btn-sm" id="showTIK">5.604</button></td>
                              </tr>
                              <tr>
                                <td>Energi Pertambangan</td>
                                <td><button type="button" class="btn btn-info btn-sm" id="showEP">63</button></td>
                              </tr>
                              <tr>
                                <td><b>Total</b></td>
                                <td>14.756</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div><!-- Col -->
                      <div class="col-sm-4">
                        <div>
                          <!-- <p id="demo"></p> -->
                          <canvas id="chartbidang" style="height:220vh; width:150vw"></canvas>
                        </div>
                      </div><!-- Col -->
                      <div class="col-sm-4">
                        <div>
                          <div class="table-responsive" id="TableKosong">

                          </div> <!--table TR end -->
                          <div class="table-responsive" id="TableTR">
                            <h5>DETAIL JUMLAH GURU TEKNOLOGI REKAYASA</h5>
                              <table class="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Jenis Guru</th>
                                    <th>Jumlah Guru</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Guru Produktif</td>
                                    <td>14.358</td>
                                  </tr>
                                  <tr>
                                    <td>Guru Umum</td>
                                    <td>14.756</td>
                                  </tr>
                                  <tr>
                                    <td><b>Total</b></td>
                                    <td>29.114</td>
                                  </tr>
                                </tbody>
                              </table>
                             </div> <!--table TR end -->
                             <div class="table-responsive" id="TableTIK">
                              <h5>DETAIL JUMLAH GURU TEKNOLOGI INFORMASI KOMUNIKASI</h5>
                              <table class="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Jenis Guru</th>
                                    <th>Jumlah Guru</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Guru Produktif</td>
                                    <td>14.358</td>
                                  </tr>
                                  <tr>
                                    <td>Guru Umum</td>
                                    <td>14.756</td>
                                  </tr>
                                  <tr>
                                    <td><b>Total</b></td>
                                    <td>29.114</td>
                                  </tr>
                                </tbody>
                              </table>
                             </div> <!--table TIK end -->
                             <div class="table-responsive" id="TableEP">
                              <h5>DETAIL JUMLAH GURU ENERGI PERTAMBANGAN</h5>
                              <table class="table table-bordered">
                                <thead>
                                  <tr>
                                    <th>Jenis Guru</th>
                                    <th>Jumlah Guru</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Guru Produktif</td>
                                    <td>14.358</td>
                                  </tr>
                                  <tr>
                                    <td>Guru Umum</td>
                                    <td>14.756</td>
                                  </tr>
                                  <tr>
                                    <td><b>Total</b></td>
                                    <td>29.114</td>
                                  </tr>
                                </tbody>
                              </table>
                             </div> <!--table EP end -->
                          </div><!-- Col -->
                        </div>
                      </div> <!-- Col -->
                    </div>
                  <!-- </div> -->
                  <div class="tab-pane fade" id="custom-tabs-one-rp" role="tabpanel" aria-labelledby="custom-tabs-one-rp-tab">
                     <h4 class="card-title">Rekap Data Peningkatan Kompetensi</h4>
                      <div class="col-sm-12">
                        <div class="d-flex justify-content-center">
                          <canvas id="chartjsPesertaPerTahun" style="height:130vh; width:230vw"></canvas>
                        </div>
                        <br>
                        <div class="table-responsive">
                          <table class="table table-bordered">
                            <thead>
                              <tr>
                                <th>No</th>
                                <th>Tahun Kegiatan</th>
                                <th>Jumlah Peserta</th>
                                <!-- <th>Aksi</th> -->
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>2024</td>
                                <td>640</td>
                                <!-- <td><button type="button" class="btn btn-primary btn-icon-text">
                                Detail
                                <i class="btn-icon-append" data-feather="info"></i>
                                </button></td> -->
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>2023</td>
                                <td>6695</td>
                                <!-- <td><button type="button" class="btn btn-primary btn-icon-text">
                                Detail
                                <i class="btn-icon-append" data-feather="info"></i>
                                </button></td> -->
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>2022</td>
                                <td>5899</td>
                                <!-- <td><button type="button" class="btn btn-primary btn-icon-text">
                                Detail
                                <i class="btn-icon-append" data-feather="info"></i>
                                </button></td> -->
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>2021</td>
                                <td>4158</td>
                                <!-- <td><button type="button" class="btn btn-primary btn-icon-text">
                                Detail
                                <i class="btn-icon-append" data-feather="info"></i>
                                </button></td> -->
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div><!-- Col -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> <!-- row -->

        <div class="row">
          <div class="col-lg-7 col-xl-8 grid-margin stretch-card">

          </div>
          <div class="col-lg-5 col-xl-4 grid-margin stretch-card">
            
          </div>
        </div> <!-- row -->

        <div class="row">
          
        </div> <!-- row -->

