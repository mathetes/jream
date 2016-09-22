<?php
  class User extends Controller {

    function __construct() {
        parent::__construct();
        $this->model = $this->loadModel('user');
    }


    public function index()
    {
      //print_r($this->view->userList);
        $this->view->render('user/index');
    }

  }
