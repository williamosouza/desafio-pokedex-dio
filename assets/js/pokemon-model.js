class Pokemon {
    name;
    Number;
    type;
    types = [];
    statsName;
    statsNames = [];
    statsBase;
    statsBases = [];
    photo;

}

//criei a classe para armazenar os parametros e atualizar conforme a demanda de botões e possível input,
//alterando e atualizando o offset consigo controlar alguns funcionamentos dentro da lógica que consigo criar sozinho até o momento.

class parametros {

    constructor(maxRecords, minimum, limit, offset){
        this.maxRecords = maxRecords;
        this.minimum = minimum;
        this.limit = limit;
        this.offset = offset;
}

set setOffset(refreshOff){
    this.offset = refreshOff
}

}
