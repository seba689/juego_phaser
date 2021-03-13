this.h =game.add.sprite(50,150,'h');
this.h1 =game.add.sprite(250,150,'h')
this.h.anchor.setTo(0.5)
this.h1.anchor.setTo(0.5)
this.w =game.add.sprite(160,350,'w');
this.w.anchor.setTo(0.5)


function h(x,y) {
    this.h = game.add.sprite(x,y,'h');
    this.h.anchor.setTo(0.5)
};

function w(x,y) {
    this.w = game.add.sprite(x,y,'w');
    this.w.anchor.setTo(0.5)
};


GameplayManager ={
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; 
    },}

game.state.add('gameplay',GameplayManager);
game.state.start('gameplay');
