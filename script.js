/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px; position:absolute;" />';
  }

  this.moveRight = function() {
    this.left += speed;
    console.log('ok right: ' + this.left);
  }

  this.moveDown = function() {
    this.top += speed;
    console.log('ok down: ' + this.top);
  }

  this.moveLeft = function() {
    this.left -= speed;
    console.log('ok left: ' + this.left);
  }

  this.moveUp = function() {
    this.top -= speed;
    console.log('ok up: ' + this.top);
  }

}

const vi_tri_xuat_phat = 20;

var hero1 = new Hero('unnamed.gif', vi_tri_xuat_phat, 0, 200, 90);
var hero2 = new Hero('unnamed_3.gif', 20, 1150, 200, 90);
var hero3 = new Hero('unnamed_2.gif', 400, 1150, 200, 90);
var hero4 = new Hero('unnamed_1.gif', 0, 0, 200, 90);

function reset() {
  hero1 = new Hero('unnamed.gif', vi_tri_xuat_phat, 0, 200, 90);
  hero2 = new Hero('unnamed_3.gif', 20, 1150, 200, 90);
  hero3 = new Hero('unnamed_2.gif', 400, 1150, 200, 90);
  hero4 = new Hero('unnamed_1.gif', 0, 0, 200, 90);

}

function start(){
  if(hero1.left < window.innerWidth - hero1.size) {
    hero1.moveRight();
      document.getElementById('game').innerHTML = hero1.getHeroElement();
  }
  else if(hero1.left > window.innerWidth - hero1.size) {
    if(hero2.top < window.innerHeight - hero2.size){
      hero2.moveDown();
        document.getElementById('game').innerHTML = hero2.getHeroElement();
    }
  }
  if(hero2.top > window.innerHeight - hero2.size) {
    if(hero3.left < window.innerWidth - hero3.size && hero3.left > 0) {
      hero3.moveLeft();
        document.getElementById('game').innerHTML = hero3.getHeroElement();
    }
  }

  if(hero3.left <= 0) {
    console.log('left ok!. top = ', hero4.top);
    if(hero3.top > 0 && hero4.top <= window.innerHeight - hero4.size) {
      hero4.moveUp();
        document.getElementById('game').innerHTML = hero4.getHeroElement();
    } 

    if (hero4.top <= 0) {
      reset();
    }
  }
  
  
  
  setTimeout(start, 100);
}

start();