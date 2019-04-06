const DR = {
  canvas: null,
  ctx: null,
  w: null,
  w2: null,
  h: null,
  h2: null,
  frameCounter: null,
  frameID: null,
  backgrounds: null,
  currentBackground: null,
  roulettes: null,
  currentRoulette: null,
  setFullScreen(){
    this.w = window.innerWidth;
    this.h = window.innerHeight;
    this.w2 = this.w/2;
    this.h2 = this.h/2;
    this.canvas.width = this.w;
    this.canvas.height = this.h;
  },
  move(){
    this.roulettes[this.currentRoulette].move();
  },
  draw(){
    this.backgrounds[this.currentBackground].draw();
    this.roulettes[this.currentRoulette].draw();
  },
  animationLoop(){
    this.frameID = requestAnimationFrame(this.animationLoop.bind(this));
    this.frameCounter++;
    this.move();
    this.draw();
  },
  init(){
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
    this.setFullScreen();
    window.onresize = this.setFullScreen.bind(this);
    this.backgrounds = [new this.Background('hsl(0, 0%, 10%)')];
    this.currentBackground = 0;
    this.roulettes = [new this.Roulette(6)];
    this.currentRoulette = 0;
    this.animationLoop();
  },

};