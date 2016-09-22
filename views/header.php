<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Jream MVC</title>
    <link rel="stylesheet" href="<?php echo URL; ?>/public/css/default.css" media="screen" title="no title">
</head>
<body>
    <?php Session::init(); ?>
    <div id="wrapper">
        <div id="header">
            <br>
            <a href="<?php echo URL; ?>/index">Index</a>
            <a href="<?php echo URL; ?>/help">Help</a>
            <?php if (Session::get('loggedIn') == true): ?>
            <a href="<?php echo URL; ?>dashboard/logout">Logout</a>
        <?php else: ?>
            <a href="<?php echo URL; ?>/login">Login</a>
        <?php endif; ?>
        </div>
        <div id="content">
