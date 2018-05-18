<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Generate Serial Number</title>
  </head>
  <style media="screen">
    body{
      margin: 0;
      padding: 0;
    }
    main{
      background-color: #999;
      text-align: center;
      padding: 20px;
      margin: 10vh auto;
      width: 300px;
      height: 100px;
      border-radius: 10px;
    }
    hr{
      width: 200px;
      margin: 0 auto;
      margin-top: -20px;
      margin-bottom: 20px;
    }
    span{
      background-color: #333;
      width: 200px;
      border-radius: 3px;
      padding: 10px;
      font-size: 20px;
      color: #fff;
    }
  </style>
  <body>

    <main>
      <h3>Refresh untuk Generate</h3>
      <hr>
      <span id="serial">

        <?php

        $tokens   = 'abcdefghijklmnopqrstuvwxyz0123456789';
        $serial   = '';
        for($i=0;$i<4;$i++){
          for($j=0;$j<4;$j++){
            $serial .= $tokens[rand(0,35)];
          }
          if ($i<3) {
            $serial .= '-' ;
          }
        }
        echo $serial;
        ?>
      </span>

    </main>

</body>
</html>
