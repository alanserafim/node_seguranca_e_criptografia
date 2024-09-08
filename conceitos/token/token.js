import jwt from "jsonwebtoken";

const chaveSecreta = "ChaveSuperSecreta";

const token = jwt.sign(
    {
        apelido: "ans",
        curso: "segurança e node.js"
    }, chaveSecreta
);

console.log(`\nToken: \n${token}`)

const tokenDecodificado = jwt.verify(token, chaveSecreta);
console.log(`\nToken decodificado: \n${JSON.stringify(tokenDecodificado)}`)