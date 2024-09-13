<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Pegawai extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        // $this->load->model("Fastingkom_model");
    }

    public function index()
    {
        $data['title'] = 'Penjaminan Mutu';
        // $data['peserta_provinsi'] = $this->Fastingkom_model->getDataAll();

        $this->load->view('template/header', $data);
        $this->load->view('template/topbar', $data);
        $this->load->view('pegawai_view');
        // $this->load->view('template/modal'); //modal info prov untuk map
        $this->load->view('template/footer', $data);
    }
}
