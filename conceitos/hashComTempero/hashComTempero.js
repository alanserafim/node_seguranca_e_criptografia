import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';

function criaHashComTempero(senha){ 
    const tempero = randomBytes(16).toString('hex');
    const senhaHasheada = scryptSync(senha, tempero, 64).toString('hex');

    return `${tempero}:${senhaHasheada}`
}

class Usuario {
    constructor (nome, senha){
        this.nome = nome;
        [this.tempero, this.hash] = criaHashComTempero(senha).split(':')
    }

    autentica(nome, senha){
        if (nome === this.nome ) {
            const testeHash = scryptSync(senha, this.tempero, 64);
            const hashReal = Buffer.from(this.hash, 'hex');
            
            const hashCorrespondem = timingSafeEqual(testeHash, hashReal);
            if(hashCorrespondem){
                console.log("Usuário autenticado com sucesso");
                return true;
            }
        }
        console.log("Usuário ou senha incorreta")
        return false;
    }
}

const al = new Usuario("Alan", "senhaSecreta")
console.log(al)

// caso de sucesso
al.autentica("Alan", "senhaSecreta")

// caso de fracasso
al.autentica("Alan", "senhaPublica")