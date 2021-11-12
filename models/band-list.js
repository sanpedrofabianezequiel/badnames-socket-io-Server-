const Band = require("./band");


class BandList {

    constructor (){
        this.bands = [
            new Band('Primera banda'),
            new Band('Segunda banda'),
            new Band('Tercera banda')
        ];
    }

    addBand(name){
        const newBand =  new Band(name);
        this.bands.push(newBand);
    }

    removeBand(id){
        this.bands = this.bands.filter( x=>  x.id !== id);
    }

    getBands(){
        return this.bands;
    }
    
    incresaVotes(id){
        this.bands  =  this.bands.map(x=> {
            if( x.id === id){
                x.votes += 1;
            }
            return x;
        })
    }

    changeName(id,newName){
        this.bands  =  this.bands.map(x=> {
            if( x.id === id){
                x.name = newName;
            }
            return x;
        })
    }
}