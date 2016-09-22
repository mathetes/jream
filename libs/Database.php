<?php
class Database extends PDO {

    public function __construct() {
        // print_r (DB_HOST . '<br />');
        // print_r (DB_NAME . '<br />');
        // print_r (DB_USER . '<br />');
        // print_r (DB_PASS . '<br />');
        parent::__construct(DB_TYPE . ':host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASS);

    }
}

 ?>
