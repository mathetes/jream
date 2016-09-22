<?php
class Controller {

    function __construct() {
    //   echo 'Main Controller <br />';
      $this->view = new View();
    }
    public function loadModel($name) {
        $path = 'models/' . $name . '_model.php';
        if (file_exists('$path')) {
            require $path;
            $modelName = $name.'_Model';
            return $this->model = new $modelName();
        }
    }
}
