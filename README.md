<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Bakery | Home</title>
    <script src="https://kit.fontawesome.com/b4de9e4dfb.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Amarante&family=Teko:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<header id="home">
    <div class="container">
        <div class="hamburger-menu">
            <i class="fas fa-bars toggle"></i>
            <i class="fas fa-times toggle"></i>
        </div>
        <nav class="d-flex align-items-center justify-content-center justify-content-lg-between">
            <a class="navbar-brand" href="index.html">
                <img class="img-fluid" src="images/logo.png" alt="">
            </a>
            <ul class="nav-list text-center p-0">
                <li class="nav-item">
                    <a class="nav-link" href="#home">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#menu">Menu</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#chefs">Our Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="login.html">Join us</a>
                </li>
            </ul>
        </nav>
        <div class="hero-text w-100 text-white px-2 px-sm-0">
            <h1 class="display-4">Welcome</h1>
            <p class="lead mb-4">Baked goods like you never hd before!</p>
            <a class="btn px-5 mr-2" href="#">Explore</a>
            <a class="btn px-5 ml-2" href="#">Find a store</a>
        </div>
    </div>
</header>
<main>
    <section class="about" id="about">
        <div class="container">
            <div class="row align-items-lg-center">
                <div class="col-12 col-md-6 text-center text-md-left" data-aos="fade-right">
                    <div class="section-heading mb-3">
                        <h4>Discover</h4>
                        <h1 class="display-4">Our Story</h1>
                    </div>
                    <p>The numerous bakeries set up by branches of the Mambally family also continue to cater to Malayali taste buds. The more popular stores in this illustrious list include KR Bakes in Ernakulam, Cochin Bakery in Kochi, Shantha Bakery in Thiruvananthapuram, Modern Bakery in Kozhikode, Tops Bakery in Nagercoil and Best Bakery in Kottayam.</p>
                    <a class="btn mt-4 mb-5 mb-md-0" href="abtus.html">Find out more</a>
                </div>
                <div class="col-12 col-md-6" data-aos="fade-left">
                    <img class="img-fluid" src="images/about-img.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
    <section class="menu" id="menu">
        <div class="container">
            <div class="row text-center text-white">
                <div class="col-12 col-md-4 mb-4 mb-md-0"data-aos="fade-left">
                    <div class="shop-info">
                        <i class="far fa-clock mb-3"></i>
                        <h1 class="mb-4">Hours of operation</h1>
                        <p>Mon to Fri: 8:00am - 6:0pm</p>
                        <p>Sat to Sun: 8:00am - 1:00pm</p>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-4 mb-md-0"data-aos="fade-down">
                    <div class="shop-info">
                        <i class="fas fa-map-marked-alt mb-3"></i>
                        <h1 class="mb-4">Location</h1>
                        <address>
                            Palissery, Thalassery <br>
                            Kerala 670103
                        </address>
                    </div>
                </div>
                <div class="col-12 col-md-4 mb-4 mb-md-0"data-aos="fade-right">
                    <div class="shop-info">
                        <i class="fas fa-mobile-alt mb-3"></i>
                        <h1 class="mb-4">Get in touch</h1>
                        <p>Phone #: (800)555-5555</p>
                        <p>Email: contact@bakery.com</p>
                    </div>
                </div>
            </div>
            <hr class="mt-5">
        </div>
        <div class="container-fluid p-0">
            <div class="section-heading my-5 text-center">
                <h4 class="text-white">Our Tasty Food</h4>
                <h1 class="display-4">The Menu</h1>
            </div>
            <!-- Row #1 -->
            <div class="row no-gutters">
                <!-- Column set #1 -->
                <div class="col-12 col-sm-6 col-xl-2 order-sm-1 order-xl-1">
                    <img class="img-fluid" src="images/menu-item-1.jpg" alt="">
                </div>
                <div class="col-12 col-sm-6 col-xl-2 order-sm-2 order-xl-2 point-left">
                    <div class="menu-item-desc">
                        <h6>$10</h6>
                        <h1>The Pastery</h1>
                        <p>This Pastery is amazing!</p>
                        <a href="order.html" class="btn mt-3 d-xl-block">Order Now</a>
                    </div>
                </div>
                <!-- Column set #2 -->
                <div class="col-12 col-sm-6 col-xl-2 order-sm-4 order-xl-3">
                    <img class="img-fluid" src="images/menu-item-2.jpg" alt="">
                </div>
                <div class="col-12 col-sm-6 col-xl-2 order-sm-3 order-xl-4 point-left">
                    <div class="menu-item-desc">
                        <h6>$10</h6>
                        <h1>The Plump Cake</h1>
                        <p>This Plum cake is wow!</p>
                        <a href="order.html" class="btn mt-3 d-xl-block">Order Now</a>
                    </div>
                </div>
                <!-- Column set #3 -->
                <div class="col-12 col-sm-6 col-xl-2 order-sm-5 order-xl-5">
                    <img class="img-fluid" src="images/menu-item-3.jpg" alt="">
                </div>
                <div class="col-12 col-sm-6 col-xl-2 order-sm-6 order-xl-6 point-left">
                    <div class="menu-item-desc">
                        <h6>$10</h6>
                        <h1>The Chocolate Cake</h1>
                        <p>This Chocolate cake is delicious!</p>
                        <a href="order.html" class="btn mt-3 d-xl-block">Order Now</a>
                    </div>
                </div>
            </div>
            <!-- Row #2 -->
            <div class="row no-gutters">
                <!-- Column set #4 -->
                <div class="col-12 col-sm-6 col-xl-2 order-sm-2 order-xl-2">
                    <img class="img-fluid" src="images/menu-item-4.jpg" alt="">
                </div>
                <div class="col-12 col-sm-6 col-xl-2 order-sm-1 order-xl-1 point-right">
                    <div class="menu-item-desc">
                        <h6>$10</h6>
                        <h1>The Blue-berry Cake</h1>
                        <p>This Blue-berry cake is amazing!</p>
                        <a href="order.html" class="btn mt-3 d-xl-block">Order Now</a>
                    </div>
                </div>
                <!-- Column set #5 -->
                <div class="col-12 col-sm-6 col-xl-2 order-sm-3 order-xl-4">
                    <img class="img-fluid" src="images/menu-item-5.jpg" alt="">
                </div>
                <div class="col-12 col-sm-6 col-xl-2 order-sm-5 order-xl-3 point-right ">
                    <div class="menu-item-desc">
                        <h6>$10</h6>
                        <h1>The Muffins</h1>
                        <p>This Muffins are La-Javab!</p>
                        <a href="order.html" class="btn mt-3 d-xl-block">Order Now</a>
                    </div>
                </div>
                <!-- Column set #6 -->
                <div class="col-12 col-sm-6 col-xl-2 order-sm-6 order-xl-6">
                    <img class="img-fluid" src="images/menu-item-6.jpg" alt="">
                </div>
                <div class="col-12 col-sm-6 col-xl-2 order-sm-5 order-xl-5 point-right">
                    <div class="menu-item-desc">
                        <h6>$10</h6>
                        <h1>The Coco-balls</h1>
                        <p>This Coco-balls are mouth-watering!</p>
                        <a href="order.html" class="btn mt-3 d-xl-block">Order Now</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="chefs" id="chefs">
        <div class="container">
            <div class="section-heading my-5 text-center">
                <h4>Meet</h4>
                <h1 class="display-4">Our Chefs</h1>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-12 col-md-4"data-aos="fade-left">
                <img class="img-fluid" src="images/chef-1.png" alt="">
                <div class="card-body">
                    <h1>Olivia Banks</h1>
                    <h6>Pastery Specialist</h6>
                    <p>Olivia is an Expert</p>
                </div>
            </div>
            <div class="col-12 col-md-4"data-aos="fade-right">
                <img class="img-fluid" src="images/chef-2.png" alt="">
                <div class="card-body">
                    <h1>Sara Larson</h1>
                    <h6>Cake Designer</h6>
                    <p>Sara is an great Designer</p>
                </div>
            </div>
            <div class="col-12 col-md-4"data-aos="fade-left">
                <img class="img-fluid" src="images/chef-3.png" alt="">
                <div class="card-body">
                    <h1>James Wonka</h1>
                    <h6>Cup-cake Specialist</h6>
                    <p>Jamesis an Expert</p>
                </div>
            </div>
        </div>
    </section>
  <footer class="text-center py-5">
      &copy; Bakery 2020
      <div class="social-media py-4">
        <a href="#" class="social-icon">
            <i class="fab fa-facebook"></i>
        </a>
        <a href="#" class="social-icon">
            <i class="fab fa-google"></i>
        </a>
        <a href="#" class="social-icon">
            <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="social-icon">
            <i class="fab fa-twitter"></i>
        </a>
    </div>
  </footer>
</main>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script src="main.js" type="text/javascript"></script>
<script src="login.js"></script>
</bodOrder Now
