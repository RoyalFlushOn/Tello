class Tello {

    telloInterface;

    constructor(){
        this.telloInterface = new TelloInterface();
    }

    connect(){
        this.telloInterface.start();
        this.command('command');
    }

    poll() {
       //todo: add code to deal with respoce etc, need to confirm what this command does 
    }

    takeoff(){
         var message = new Buffer('')
    }

    command(command){

        var message = new Buffer(command);

        
    }



}