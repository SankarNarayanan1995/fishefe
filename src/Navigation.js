import React from 'react';
const Navigation = (props) => {
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src ="https://i.pinimg.com/originals/79/5e/f3/795ef3b8ae82a84dda1200a7213a98ba.jpg" style = {{"max-width":"100px"}}/>
   <div class="container">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">Fish-E</a>
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav text-uppercase ml-auto">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#services">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#portfolio">Fish-E Pedia</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">Fishstagram</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#team">Store</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>);
  }
export default Navigation;