<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Kemitraan extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        // $this->load->model("Fastingkom_model");
    }

    public function index()
    {
        $data['title'] = 'Fastingkom';
        // $data['peserta_provinsi'] = $this->Fastingkom_model->getDataAll();
        // $data["products"] = $this->product_model->getAll();

        $this->load->view('template/header', $data);
        $this->load->view('template/topbar', $data);
        $this->load->view('kemitraan_view', $data);
        $this->load->view('template/modal'); //modal info prov
        $this->load->view('template/footer');
    }
}
