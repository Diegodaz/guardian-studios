$(window).on('load',function(){
  gsap.to('#loader',1,{y:"-100%"});
  gsap.to('#loader',1,{opacity:0});
  gsap.to('#loader',0,{display:"none",delay:1});
  
  // Mostrar header y navegación
  gsap.to('#header',0,{display:"block",delay:1.2});
  gsap.to('#navigation-content',0,{display:"flex",delay:1.2});

  // Ocultar otras secciones
  gsap.to('#about', 0, { display: "none" });
  gsap.to('#videogame', 0, { display: "none" });
  gsap.to('#final-project', 0, { display: "none" });
  
  // Marcar INICIO como activo
  setTimeout(function() {
    $('#home-link').addClass('active');
  }, 1200);
})

$(function(){
    $('#about-link').on('click',function(e){
      e.preventDefault();
      gsap.to('#header',0,{display:"none"});
      gsap.to('#final-project',0,{display:"none"});
      gsap.to('#videogame',0,{display:"none"});
      gsap.to('#breaker',0,{display:"block"});
      gsap.to('#breaker-two',0,{display:"block",delay:.1});
      gsap.to('#breaker',0,{display:"none",delay:2});
      gsap.to('#breaker-two',0,{display:"none",delay:2});
      gsap.to('#about',0,{display:"block",delay:.7});
      
      $('.nav-link-horizontal').removeClass('active');
      $(this).addClass('active');
    })
    
    $('#sodogan-link').on('click',function(e){
      e.preventDefault();
      gsap.to('#header',0,{display:"none"});
      gsap.to('#about',0,{display:"none"});
      gsap.to('#final-project',0,{display:"none"});
      gsap.to('#breaker',0,{display:"block"});
      gsap.to('#breaker-two',0,{display:"block",delay:.1});
      gsap.to('#breaker',0,{display:"none",delay:2});
      gsap.to('#breaker-two',0,{display:"none",delay:2});
      gsap.to('#videogame',0,{display:"block",delay:.7});
      
      $('.nav-link-horizontal').removeClass('active');
      $(this).addClass('active');
    })
    
    $('#braindash-link').on('click',function(e){
      e.preventDefault();
      gsap.to('#header',0,{display:"none"});
      gsap.to('#about',0,{display:"none"});
      gsap.to('#videogame',0,{display:"none"});
      gsap.to('#breaker',0,{display:"block"});
      gsap.to('#breaker-two',0,{display:"block",delay:.1});
      gsap.to('#breaker',0,{display:"none",delay:2});
      gsap.to('#breaker-two',0,{display:"none",delay:2});
      gsap.to('#final-project',0,{display:"block",delay:.7});
      
      $('.nav-link-horizontal').removeClass('active');
      $(this).addClass('active');
    })
    
    $('#home-link').on('click',function(e){
      e.preventDefault();
      gsap.to('#about',0,{display:"none"});
      gsap.to('#videogame',0,{display:"none"});
      gsap.to('#final-project',0,{display:"none"});
      gsap.to('#breaker',0,{display:"block"});
      gsap.to('#breaker-two',0,{display:"block",delay:.1});
      gsap.to('#breaker',0,{display:"none",delay:2});
      gsap.to('#breaker-two',0,{display:"none",delay:2});
      gsap.to('#header',0,{display:"block",delay:.7});
      
      $('.nav-link-horizontal').removeClass('active');
      $(this).addClass('active');
    })
})

// Texto rotativo
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};