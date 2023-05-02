export default class TruckScene extends Phaser.Scene {
    constructor ()
    {
        super('TruckScene');
        this.isRunning = true;
    }

    preload ()
    {
        this.load.image('bg', './fondo.jpg');
        this.load.image('wheel', './ruedas.png');
        this.load.image('truck', './truck.png');
    }

    create ()
    {
        //  background 
        this.bg = this.add.tileSprite(0, 0, 10617, 1399, 'bg').setOrigin(0);
        this.bg.setScale(0.2); 
        // wheels
        this.wheel1 = this.add.image(347, 245, 'wheel');
        this.wheel2 = this.add.image(387, 245, 'wheel');
        this.wheel3 = this.add.image(427, 245, 'wheel');
        this.wheel4 = this.add.image(545, 245, 'wheel');
        this.wheel5 = this.add.image(642, 245, 'wheel');
        // lista ruedas
        this.lista_ruedas = [this.wheel1, this.wheel2, this.wheel3, this.wheel4, this.wheel5];
        for(let i = 0; i < this.lista_ruedas.length; ++i){
            this.lista_ruedas[i].setScale(0.12).setOrigin(0.5);
        }
        // truck
        this.truck = this.add.image(500 - 340 / 2, 150, 'truck').setOrigin(0); 
        this.truck.setScale(0.12);  
        // tweens
        this.rodar = this.tweens.add({
            angle: 360,
		    targets: this.lista_ruedas,
		    paused: true,
		    flipX: false,
		    yoyo: false,
		    repeat: -1
		});
    }

    update ()
    {
        if (this.isRunning)
        {
            this.bg.tilePositionX += 8;
        }
        this.rodar.play();
    }
}