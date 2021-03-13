/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready


const config = {
    type: Phaser.AUTO,
    width: 320,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }

};
var game = new Phaser.Game(config)
var ball;
var hole;
let keyA;
let keyS;
let keyD;
let keyW;

    function preload() {
        this.load.image('screen-bg','img/screen-bg.png');
        this.load.image('h','img/element-h.png');
        this.load.image('w','img/element-w.png');
        this.load.spritesheet('ball','img/ball.png', { frameWidth: 32, frameHeight: 48 });
        this.load.image('hole','img/hole.png');
    }

    function create() { 

        keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        tope = this.physics.add.staticGroup();
        this.add.image(160,240,'screen-bg')
        ball = this.physics.add.sprite(160,400,'ball');
        ball.setCollideWorldBounds(true);
        // this.ball.x = game.width/2;
        // this.ball.y = game.height/2;
        hole = this.physics.add.staticGroup();
        hole.create(160,50,'hole');
        tope.create(50,150,'h');
        tope.create(200,150,'w');
        tope.create(160,350,'w');
        this.physics.add.collider(ball,tope);
        this.physics.add.overlap(ball, hole, finish, null, this);

    }
    
    function update() { 
        if(keyA.isDown) {
            ball.setVelocityX(-160);

        } else if(keyS.isDown) {
            ball.setVelocityY(160);

        } else if(keyD.isDown) {
            ball.setVelocityX(160);

        } else if(keyW.isDown) {
            ball.setVelocityY(-160);

        }
    }
    

    function finish (ball,hole)
    {
        this.physics.pause();
    
        ball.setTint(0xff0000);
        
        ball.disableBody(true,true);
        alert('ganaste')
        gameOver = true;
    }
    