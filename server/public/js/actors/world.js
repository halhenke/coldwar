/*global Actors:true, Actor:true, Vec3:true, VecR:true, hex2rgb:true */
/*jshint browser:true */
/*jshint strict:false */
/*jshint latedef:false */

Actors.World = function(opts){

  var self = this;

  if(!opts){
    opts = {};
  }

  this.opts = opts.opts;

  this.max_x = opts.max_x || 1600;
  this.max_y = opts.max_y || 900;
  this.max_z = opts.max_z || 200;

  this.max = Math.min(this.max_x, this.max_y);

  this.unit_speed = this.max * 0.0025;

  if(opts.speed_factor){
    this.unit_speed *= opts.speed_factor;
  }

  this.show_vectors = opts.show_vectors || false;

  this.flash = 0;

  this.play = function(sound){
    if(this.opts.sounds === 0){
      return;
    }
    // disabled
    return;
    self.sounds[sound].play();
  }

};

Actors.World.prototype.update = function(delta){
  if(this.flash>0){
    this.flash --;
  }
};

Actors.World.prototype.paint = function(view){
  view.ctx.strokeStyle= 'rgba(255, 255, 255, 0.2)';
  view.ctx.lineWidth = 1;
  view.ctx.beginPath();
  view.ctx.strokeRect(16, 16, this.max_x - 32, this.max_y - 32);
  view.ctx.stroke();
};
