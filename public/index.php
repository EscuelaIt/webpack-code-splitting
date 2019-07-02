<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="/css/estilo.css">
</head>
<body>
  <header>
    <div class="superheader">
      <h1>Polymer para sitios web</h1>
      <my-avatar src="https://desarrolloweb.com/archivoimg/general/1629.jpg"></my-avatar>
    </div>
    <my-nav>
      <ul>
        <li><a href="/">Portada</a></li>
        <li><a href="/contactos.php">Contactos</a></li>
        <li><a href="/panel.php">Panel</a></li>
      </ul>
    </my-nav>
  </header>
  
  <p>
    <?php
    echo phpversion();
    ?>
  </p>

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, minima dolorum eveniet ad culpa maxime pariatur laborum reiciendis nesciunt est quia tempore illum repellat beatae aliquam ipsa id voluptates. Enim!</p>
  <p>Unde maxime libero voluptates corrupti ut voluptatum est quod ullam modi blanditiis! Vel suscipit asperiores quas dolorum modi adipisci, voluptatum accusantium illo nulla nihil ipsam quam totam a sint iure?</p>
  <p>Qui accusantium perferendis temporibus laborum, obcaecati explicabo consequuntur tempore beatae enim cupiditate officiis dignissimos maiores.</p>

  <email-link the-email="malvarez@desarrolloweb.com"></email-link>
  
  <script src="/js/webcomponentsjs/webcomponents-loader.js"></script>
  
  <?php
  $servidor_desarrollo = false;
  if($servidor_desarrollo) {
    echo '<script src="http://localhost:9009/scripts/commons.js"></script>';
    echo '<script src="http://localhost:9009/scripts/home.js"></script>';
  } else {
    echo '
    <script type="text/javascript" src="js/commons-es5.js" nomodule>
    </script><script type="module" src="js/commons-es6.js"></script>
    <script type="text/javascript" src="js/home-es5.js" nomodule>
      </script><script type="module" src="js/home-es6.js"></script>
      ';
  }
  ?>
</body>
</html>