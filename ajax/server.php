<?php
    $id=$_POST['id'];
    $password=$_POST['password'];
    $count=5;
    if($count>0){
        $login = 'exist';
    }
    else{
        $login = 'none';
    }

    echo json_encode(
                array(
                    'result'=>$login,
                )
    );
?>
