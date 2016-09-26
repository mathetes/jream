<?php
class Login_Model extends Model {

    public function __construct() {
       parent::__construct();
            $this->db = new Database();
            $this->user = $user;
    }

    public function tst($user) {
        $stm = $this->db->prepare("SELECT * FROM `users` WHERE 1");
        $stm->execute($user);
        return $stm;
    }

    public function run() {
        print_r($this->db);
        $stm = $this->db->prepare("SELECT id FROM users WHERE login = :login AND password = MD5(:password)");
        $stm->execute(array(
           ':login' => $_POST['login'],
           ':password' => $_POST['password']
        ));

        // var_dump($stm); die();
        // $count = $stm->rowCount();
        // if ($count > 0){
        //     //login
        //     Session::init();
        //     Session::set('loggedIn', true);
        //     header('location: ../dashboard.php');
        // } else {
        //     //show an error
        //     header('location: ../login');
        // }
        // print_r($data);
    }
}

// $stm = $this->db->prepare("SELECT id, from users WHERE
//     login = :login AND password = :password");
//
// $stm->execute(array(
// ':login' => $_POST['login'],
// ':password' => $_POST['password']
// ));
