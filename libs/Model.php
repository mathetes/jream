<?php
class Model {
    function __construct() {
        $this->db = new Database();
    }
    public function tst() {
        $stm = $this->db->prepare("SELECT * FROM `users` WHERE 1");
        $stm->execute();
    }

}
?>
