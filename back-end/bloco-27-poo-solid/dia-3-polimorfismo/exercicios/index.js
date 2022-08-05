"use strict";
class estudantes {
    constructor(matricula, nome, provas, trabalhos) {
        this.matricula = matricula;
        this.nome = nome,
            this.provas = provas,
            this.trabalhos = trabalhos;
    }
    somaNotas() {
        const provas = this.provas.reduce((acc, nota) => acc + nota, 0);
        const trabalhos = this.trabalhos.reduce((acc, nota) => acc + nota, 0);
        return provas + trabalhos;
    }
    mediaNotas() {
        const media = this.somaNotas() / (this.provas.length + this.trabalhos.length);
        return media;
    }
}
const andre = new estudantes('007', 'Andre Felipe', [5, 5, 5, 5], [5, 5]);
console.log(andre);
console.log('A soma das notas é ', andre.somaNotas());
console.log('A média das notas é ', andre.mediaNotas());
