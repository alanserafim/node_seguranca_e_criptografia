import { createHash } from 'crypto';

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex')
}

// let hash = criaHash("uma String Qualquer")
// console.log(hash);

class Usuario {
    constructor (nome, senha){
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autenticaUsuario(nome, senha){
        if (nome === this.nome && this.hash === criaHash(senha)) {
            console.log("Usuário autenticado com sucesso");
            return true
        }
        console.log("Usuário ou senha incorreta")
        return false;
    }
}


const usuario = new Usuario("Alan", "minhaSenha");
console.log(usuario);

// Caso de sucesso
usuario.autenticaUsuario("Alan", "minhaSenha")

// Caso de fracasso
usuario.autenticaUsuario("Alan", "nossaSenha")


