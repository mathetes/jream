<?php
  class User extends Controller {

    function __construct() {
        parent::__construct();
        $this->model = $this->loadModel('user');
    }


    public function index() {
        $this->view->render('user/index');
    }

  }
