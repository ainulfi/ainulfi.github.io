<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Aplikasi extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
    }

    public function index()
    {
        $data['title'] = 'Aplikasi';

        $this->load->view('template/header', $data);
        $this->load->view('template/topbar', $data);
        $this->load->view('aplikasi_view');
        $this->load->view('template/modal'); //modal info prov untuk map
        $this->load->view('template/footer', $data);
    }
}
