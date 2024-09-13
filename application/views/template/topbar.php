<body>
	<div class="main-wrapper">

		<!-- partial:partials/_navbar.html -->
		<div class="horizontal-menu">
			<nav class="navbar top-navbar">
				<div class="container">
					<div class="navbar-content">
						
						<a href="#" class="navbar-brand">
							<span></span>SINTESA BBPPMPV BMTI
						</a>
						<!-- ///// -->
						<ul class="navbar-nav">
							<li class="nav-item dropdown nav-apps">
								<img src="<?= base_url(); ?>assets/images/bmti.png" style="width: 50px; height: 50px">
								<img src="<?= base_url(); ?>assets/images/kemdikbud.png" style="width: 60px; height: 50px">
								<img src="<?= base_url(); ?>assets/images/vokasi.png" style="width: 70px; height: 50px">
							</li>
							
							<li class="nav-item dropdown nav-apps">
								<a href="#" class="navbar-brand">
								<span></span>|
								</a>

								<a href="#" class="navbar-brand">
								<span><button type="button" class="btn btn-secondary btn-sm"><label id="lblDate" style=" font-weight:bold"></button></span>
								</a>

								<!-- <a class="nav-link dropdown-toggle" href="#" id="appsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i data-feather="grid"  data-toggle="tooltip" data-placement="right" title="Informasi"></i>
								</a> -->
								<!-- <div class="dropdown-menu" aria-labelledby="appsDropdown">
									<div class="dropdown-header d-flex align-items-center justify-content-between">
										<p class="mb-0 font-weight-medium">Layanan Sistem BBPPMPV BMTI</p>
									</div>
									<div class="dropdown-body">
										<div class="d-flex align-items-center apps">
											<a href="https://bbppmpvbmti.kemdikbud.go.id/main/"><i data-feather="globe" class="icon-lg"></i><p>Laman</p></a>
											<a href="https://galeri.kejuruan.id/"><i data-feather="book-open" class="icon-lg"></i><p>GK</p></a>
											<a href="https://sim.galeri.kejuruan.id/"><i data-feather="award" class="icon-lg"></i><p>Simdiklat</p></a>
											<a href="http://118.98.227.172/simpanitia/administrator/login"><i data-feather="package" class="icon-lg"></i><p>Simpanitia</p></a>
										</div>
									</div>
								</div> -->
							</li>
						</ul>
					</div>
				</div>
			</nav>

			<nav class="bottom-navbar">
				<!-- <ul class="nav">
					<li class="nav-item">
						<a class="nav-link" href="<?= base_url(); ?>dashboard">
							<span class="menu-title">Aplikasi</span>
							<i class="link-icon" data-feather="box"></i>
						</a>
					</li>
				</ul> -->
				<div class="container">
					<ul class="nav justify-content-center page-navigation ">
						<li class="nav-item">
							<a class="nav-link" href="<?= base_url(); ?>fastingkom">
								<i class="link-icon mdi mdi-medal"></i>
								<span class="menu-title">Peningkatan Kompetensi</span>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="<?= base_url(); ?>penjaminanmutu">
								<i class="link-icon mdi mdi-trophy"></i>
								<span class="menu-title">Penjaminan Mutu</span>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		<!-- partial -->