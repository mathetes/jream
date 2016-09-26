<?php
error_reporting (E_ALL);

require 'libs/Bootstrap.php';
require 'libs/Controller.php';
require 'libs/Model.php';
require 'libs/View.php';
require 'libs/Database.php';
require 'libs/Session.php';
require 'config/paths.php';
require 'config/database.php';

$app = new Bootstrap();

// + Создаем класс
class ShopProduct {

// Объявляем переменные
        public $title               = "Стандартный товар";
        public $producerMainName    = "Фамилия автора";
        public $producerFirstName   = "Имя автора";
        public $price               = 0;

//Создание объекта Модели
    function __construct ($title, $firstName, $mainName, $price) {
            $this->title = $title;
            $this->producerFirstName = $firstName;
            $this->producerMainName = $mainName;
            $this->price = $price;
        }

// Метод функции
        function getProducer() {
            return "{$this->producerFirstName}".
                   " {$this->producerMainName}";
        }
    }

// Вызов функции
$product1 = new ShopProduct ("Собачье сердце", "Михаил", "Булгаков", 5.99);

print "Автор: ".$product1->getProducer()."\n";
