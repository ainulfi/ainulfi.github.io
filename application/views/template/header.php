<!DOCTYPE html>
<!--
Template Name: NobleUI - Admin & Dashboard Template
Author: NobleUI
Website: https://www.nobleui.com
Contact: nobleui123@gmail.com
Purchase: https://1.envato.market/nobleui_admin
License: You must have a valid license purchased only from above link or https://themeforest.net/user/nobleui/portfolio/ in order to legally use the theme for your project.
-->
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Dashboard BBPPMPV BMTI</title>
	<!-- core:css -->
	<link rel="stylesheet" href="<?= base_url(); ?>assets/vendors/core/core.css">
	<!-- endinject -->
	<link rel="stylesheet" href="<?= base_url(); ?>assets/vendors/prismjs/themes/prism.css">
  <!-- plugin css for this page -->
	<link rel="stylesheet" href="<?= base_url(); ?>assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css">
	<!-- end plugin css for this page -->
	<!-- maps -->
	<link href="<?= base_url(); ?>assets/dist/jqvmap.css" media="screen" rel="stylesheet" type="text/css">
    <!-- end of maps -->
	<!-- inject:css -->
	<link rel="stylesheet" href="<?= base_url(); ?>assets/vendors/mdi/css/materialdesignicons.min.css">
	<link rel="stylesheet" href="<?= base_url(); ?>assets/fonts/feather-font/css/iconfont.css">
	<link rel="stylesheet" href="<?= base_url(); ?>assets/vendors/flag-icon-css/css/flag-icon.min.css">
	<!-- endinject -->
	<link rel="stylesheet" href="<?= base_url(); ?>assets/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css">
	 <!-- plugin animate -->
	  <link rel="stylesheet" href="<?= base_url(); ?>assets/vendors/owl.carousel/owl.carousel.min.css">
	  <link rel="stylesheet" href="<?= base_url(); ?>assets/vendors/owl.carousel/owl.theme.default.min.css">
	  <link rel="stylesheet" href="<?= base_url(); ?>assets/vendors/animate.css/animate.min.css">
  <!-- Layout styles -->  
	<link rel="stylesheet" href="<?= base_url(); ?>assets/css/demo_5/style.css">
  <!-- End layout styles -->
  	<link rel="shortcut icon" href="<?= base_url(); ?>assets/images/favicon_bmti.png">
  	<!-- time -->
  	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  	<script type="text/javascript">
		$(document).ready(function() {
		ShowDate();
		});
		function ShowDate() {
		var date = new Date(Date.now());
		var year = date.getFullYear();
		var month = date.getMonth();
		var day = date.getDate();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		
		document.getElementById("lblDate").innerHTML = date.toLocaleString('id-ID');
		window.setTimeout("ShowDate()", 1000);
		}
	</script>
	<!-- end time -->
</head>