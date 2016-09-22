<?php

class Help_Model extends Model {

    function __construct() {
        parent::__construct();
        echo "Help_Model";
    }

    public function blah(){
        return 10+10;
    }

}
