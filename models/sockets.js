const BandList = require("./band-list");


class Sockets {

    constructor(io){
        this.io=io;
        this.bandsList= new BandList();
        this.socketEvents();
    }
    

    socketEvents(){
        this.io.on('connection',(socket)=>{
            console.log('Client Connect');
            socket.emit('current-bands',this.bandsList.getBands());
            socket.on('votar-banda',(id)=>{
                this.bandsList.incresaVotes(id);
                //console.log(this.bandsList.getBands());
                //this.io.emit('current-bands',this.bandList.getBands());
                const values = this.bandsList.getBands();
                this.io.emit('current-bands',values);
            });

            socket.on('borrar-banda',(id)=>{
                this.bandsList.removeBand(id);
                const values = this.bandsList.getBands();
                this.io.emit('current-bands',values);
            })

            socket.on('cambiar-nombre-banda',({id,name})=>{
                this.bandsList.changeName(id,name);
                const values = this.bandsList.getBands();
                this.io.emit('current-bands',values);
            })

            socket.on('crear-banda',({name})=>{
                this.bandsList.addBand(name);
                const values = this.bandsList.getBands();
                this.io.emit('current-bands',values);
            })
        })
    }
}

module.exports = Sockets;