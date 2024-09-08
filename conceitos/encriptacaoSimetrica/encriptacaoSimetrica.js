import {createCipheriv, randomBytes, createDecipheriv } from 'crypto';

const mensagem = "Demonstração do curso";
const chave = randomBytes(32);
const vi = randomBytes(16); //vetor de inicialização

const cifra = createCipheriv('aes256', chave, vi);

const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');

console.log(`Cifrada: ${mensagemCifrada}`)

// Transmissão  ----------------------- chave, vi, mensagem

// Decifrar mensagem

const decifra = createDecipheriv("aes256", chave, vi);

const menssagemDecifrada = decifra.update(mensagemCifrada, 'hex', 'utf-8') + decifra.final('utf-8')

console.log(`Decifrada: ${menssagemDecifrada.toString('utf-8')}`)