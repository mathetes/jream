<?php
  class Index  extends Controller {
   function __construct() {
    parent::__construct();
       $this->model = $this->loadModel('user');
   }


   function index() {
    $this->view->msg = "Так работает msg";
    $this->view->render('index/index');
   }

   function details() {
     $this->view->render('index/index');
   }
}

