<?php
class Controller {
    function __construct() {
    // echo 'Main Controller <br />';
        $this->view = new View();
        $this->model = new Model();
        $this->db = new Database();
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

// В главном контроллере создаются объекты через функцию loadModel.
// В каждом контроллере передается содержание в соответствующееview через роутинг.
// В моделях описаны методы работы с БД
// Внутри въю созда
