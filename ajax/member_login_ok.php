<?php
if(!isset($_POST['user_id']) || !isset($_POST['user_pw'])) exit;
$user_id = $_POST['user_id'];
$user_pw = $_POST['user_pw'];
$members = array('user1'=>array('pw'=>'pw1', 'name'=>'한놈'),
        'user2'=>array('pw'=>'pw2', 'name'=>'두시기'),
        'user3'=>array('pw'=>'pw3', 'name'=>'석삼'));
 
if(!isset($members[$user_id])) {
        echo "<script>alert('아이디 또는 패스워드가 잘못되었습니다.');history.back();</script>";
        exit;
}
if($members[$user_id]['pw'] != $user_pw) {
        echo "<script>alert('아이디 또는 패스워드가 잘못되었습니다.');history.back();</script>";
        exit;
}
setcookie('user_id',$user_id,time()+3600,'/');
setcookie('user_name',$members[$user_id]['name'],time()+3600,'/');
?>