// Define a classe Solo como classe base
class Solo {
    constructor(ph, nutrientes, disponibilidade, materiaOrganica, drenagem) {
      this._ph = ph;
      this._nutrientes = nutrientes;
      this._disponibilidade = disponibilidade;
      this._materiaOrganica = materiaOrganica;
      this._drenagem = drenagem;
    }
  
    // Encapsula o acesso às propriedades da classe
    get ph() {
      return this._ph;
    }
  
    get nutrientes() {
      return this._nutrientes;
    }
  
    get disponibilidade() {
      return this._disponibilidade;
    }
  
    get materiaOrganica() {
      return this._materiaOrganica;
    }
  
    get drenagem() {
      return this._drenagem;
    }
  
    // Define um método para verificar se o solo é fértil
    isFertil() {
      console.log("Método isFertil não implementado.");
    }
  }
  
  // Define uma classe FiloSolo para representar um solo comum
  class FiloSolo extends Solo {
    constructor(ph, nutrientes, disponibilidade, materiaOrganica, drenagem) {
      super(ph, nutrientes, disponibilidade, materiaOrganica, drenagem);
    }
  
    // Implementa o método isFertil da classe base
    isFertil() {
      let resultado = "";
  
      // Verifica se o pH do solo está dentro da faixa desejada (entre 6,0 e 7,0)
      if (this.ph >= 6.0 && this.ph <= 7.0) {
        resultado += "O pH do solo está adequado para o cultivo.\n";
      } else {
        resultado += "O pH do solo não está adequado para o cultivo.\n";
      }
  
      // Verifica se os nutrientes essenciais estão disponíveis em quantidades adequadas
      for (let i = 0; i < this.nutrientes.length; i++) {
        if (this.disponibilidade[i] >= 20) {
          resultado += `A disponibilidade de ${this.nutrientes[i]} no solo está adequada para o cultivo.\n`;
        } else {
          resultado += `A disponibilidade de ${this.nutrientes[i]} no solo não está adequada para o cultivo.\n`;
        }
      }
  
      // Verifica se a quantidade de matéria orgânica no solo é suficiente
      if (this.materiaOrganica >= 3.0) {
        resultado += "A quantidade de matéria orgânica no solo está adequada para o cultivo.\n";
      } else {
        resultado += "A quantidade de matéria orgânica no solo não está adequada para o cultivo.\n";
      }
  
      // Verifica se as condições de drenagem do solo são adequadas
      if (this.drenagem === "boa") {
        resultado += "As condições de drenagem do solo estão adequadas para o cultivo.\n";
      } else {
        resultado += "As condições de drenagem do solo não estão adequadas para o cultivo.\n";
      }
  
      return resultado;
    }
  }
  
  // Define uma classe OutroSolo para representar outro tipo de solo
  class OutroSolo extends Solo {
    constructor(ph, nutrientes, disponibilidade, materiaOrganica, dren)
    };