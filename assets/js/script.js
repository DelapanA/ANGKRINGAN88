// Animasi pada loading page
window.onload = function() {
    const loader = document.getElementById('loader');
    loader.style.opacity = 0;
    loader.style.visibility = 'hidden';
    setTimeout(function() {
      loader.style.display = 'none';
    }, 1000);
  };
  
  // Animasi pada navbar
  const navbar = document.getElementById('navbar');
  window.onscroll = function() {
    if (window.scrollY > 200) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  };
  
  // Animasi pada gallery
  const gallery = document.getElementById('gallery');
  const galleryItems = gallery.children;
  galleryItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      item.classList.add('animated');
      item.classList.add('zoomIn');
    });
    item.addEventListener('mouseout', function() {
      item.classList.remove('animated');
      item.classList.remove('zoomIn');
    });
  });
  
  // Animasi pada menu
  const menu = document.getElementById('menu');
  const menuItems = menu.children;
  menuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
      item.classList.add('animated');
      item.classList.add('fadeIn');
    });
    item.addEventListener('mouseout', function() {
      item.classList.remove('animated');
      item.classList.remove('fadeIn');
    });
  });
  
  // Animasi pada details
  const details = document.getElementById('details');
  details.addEventListener('mouseover', function() {
    details.classList.add('animated');
    details.classList.add('fadeInUp');
  });
  details.addEventListener('mouseout', function() {
    details.classList.remove('animated');
    details.classList.remove('fadeInUp');
  });