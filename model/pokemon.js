class Pokemon{

    constructor(name, stats=[], types = [],sprites){
        this.name = name;
        this.stats = stats;
        this.types = types;
        this.sprites= sprites;
    }

    addStat(name, baseValue){
        const newStat = new Stat(name, baseValue);
        this.stats.push(newStat);
    }

    addType(name, url){
        const newType = new Type(name, url);
        this.types.push(newType);
    }
    
    addSprites(sprites){
        const newSprites = new Sprites(sprites);
        this.sprites.push(newSprites);
    }

}

class Stat{

    constructor(name, baseValue){
        this.name = name;
        this.baseValue = baseValue;
    }
}

class Type{

    constructor(name, url){
        this.name = name;
        this.url = url;
    }
}

class Sprites{
    constructor(sprites){
        this.sprites= sprites;
    }

}