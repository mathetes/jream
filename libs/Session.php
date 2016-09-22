<?php

class Session {

    public static function init() {
        @session_start();
    }

    public static function set($key, $value) {
        $_SESSION[$key] = $value;
    }
    public static function get() {
    //     if(esset($SESSION[$key]))
    //   return $SESSION[$key];
    }

    public static function destroy() {
        session_destroy();
    }
}
 ?>
