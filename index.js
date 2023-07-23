// let cpf = '705.484.450-52'
// let cpfLimpo = cpf.replace(/\D+/g, '');

// Array.from faz com que eu crie um novo array com algum item


// Função construtora

function ValidaCPF(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function(){
            return cpfEnviado.replace(/\D+/g, '');
        }
    });
}


// Método responsavel por validar o cpf
ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined')  return false;
    if(this.cpfLimpo.length !== 11) return false;    

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);

    return true;
}

ValidaCPF.prototype.criaDigito = function(cpfParcial){
const cpfArray = Array.from(cpfParcial);
console.log(cpfArray);
}



const cpf = new ValidaCPF('705.484.450-52');

console.log(cpf.cpfLimpo)
console.log(cpf.valida());