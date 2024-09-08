import { generateKeyPairSync } from 'crypto'


const {privateKey, publicKey } = generateKeyPairSync('rsa',
    {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
)

//console.log(`Chave Pública: \n${publicKey}`)
//console.log(`Chave Privada: \n${privateKey}`)

import { publicEncrypt, privateDecrypt } from 'crypto'

const dadosCriptografados = publicEncrypt( 
    publicKey,
    Buffer.from("Mensagem super secreta")
)

console.log(`Dados Criptografados: \n${dadosCriptografados.toString('hex')}`)

// ------------------------ Transmissão ------------------------

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
)

console.log(`Dados Decifrados: \n${dadosDecifrados.toString('utf-8')}`)