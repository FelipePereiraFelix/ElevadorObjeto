class Elevador {
    constructor(andarAtual, totalAndares, CapElevador, pessoasElevadorPresente) {

        this.andarAtual = andarAtual;
        this.totalAndares = totalAndares;
        this.CapElevador = CapElevador;
        this.pessoasElevadorPresente = pessoasElevadorPresente;
    }

    elevadorEntrar(quantidadePessoa, quantidadeAtual) {
        if (this.CapElevador + quantidadePessoa > this.CapElevador) {
            var qntElevador = this.CapElevador - quantidadeAtual;
            quantidadePessoa -= qntElevador;
            document.write(`Algumas pessoas entraram e não coube ${quantidadePessoa}`);
        } else {
            document.write("As pessoas entraram");
        }
    }
    elevadorSair(quantidadePessoa) {
        if (this.pessoasElevadorPresente == 0) {
            document.write("Não existe 0 pessoas mano")
        } else {
            this.pessoasElevadorPresente -= quantidadePessoa;
            document.write("<br/> As pessoas sairam");
        }
    }
    elevadorSobe(andarSobe) {
        var andar = this.totalAndares - this.andarAtual;
        if (andarSobe > andar) {
            document.write(`<br/> Você subiu demais, meus parabéns você chegou ao céu :) `);
        } else {
            document.write(`<br/> O andar atual é ${this.andarAtual}, você subiu ${andarSobe} `)
        }
        
    }
    elevadorDesce(andarDesce) {
        var andar = this.andarAtual;
        if (andarDesce > andar) {
            document.write(`<br/> O mermão se ta indo aonde?SE DESCEU DEMAIS BIXO VOLTA AQUI!! `)
        }else{
        document.write(`<br/> Você desceu ${andarDesce} andares.`)
        }
    }
}

var pao = new Elevador(0, 12, 8, 7);
pao.elevadorEntrar(3, 7);
pao.elevadorSair(5);
pao.elevadorSobe(5);
pao.elevadorDesce(5);