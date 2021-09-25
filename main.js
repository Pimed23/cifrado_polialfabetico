const fs = require("fs");
const Encrypt = require('./encrypt.js');
const Decrypt = require('./decrypt.js');
// Ejercicio 11
let data_ejercicio11 = fs.readFileSync(`./resources/Ejercicio11_text.txt`,'utf-8');
let preprocessed_text_mod27 = Encrypt.preprocessing_mod27(data_ejercicio11);
let encrypt_text_mod27 = Encrypt.vignere(preprocessed_text_mod27, "POSITIVO", 0);
fs.writeFileSync('./results/Ejercicio11_mod21.txt', encrypt_text_mod27);

let preprocessed_text_mod191 = Encrypt.preprocessing_mod191(data_ejercicio11);
let encrypt_text_mod191 = Encrypt.vignere(preprocessed_text_mod191, "POSITIVO", 1);
fs.writeFileSync('./results/Ejercicio11_mod191.txt', encrypt_text_mod191);


// Ejercicio 14
let data_ejercicio14 = fs.readFileSync(`./resources/Ejercicio11_text.txt`,'utf-8');
let preprocessed_text = Encrypt.preprocessing_mod27(data_ejercicio14);
let encrypt_text_POSITIVO = Encrypt.vignere(preprocessed_text, "POSITIVO", 0);
let encrypt_text_HIELO = Encrypt.vignere(preprocessed_text, "HIELO", 0);
let encrypt_text_MAR = Encrypt.vignere(preprocessed_text, "MAR", 0);

const frecuency_table_POSITIVO = Encrypt.frecuencies(encrypt_text_POSITIVO);
const frecuency_table_HIELO = Encrypt.frecuencies(encrypt_text_HIELO);
const frecuency_table_MAR = Encrypt.frecuencies(encrypt_text_MAR);

let out_POSITIVO = `${encrypt_text_POSITIVO}\n${JSON.stringify(frecuency_table_POSITIVO)}`;
let out_HIELO = `${encrypt_text_HIELO}\n${JSON.stringify(frecuency_table_HIELO)}`;
let out_MAR = `${encrypt_text_MAR}\n${JSON.stringify(frecuency_table_MAR)}`;

fs.writeFileSync('./results/Ejercicio14_POSITIVO.txt', out_POSITIVO);
fs.writeFileSync('./results/Ejercicio14_HIELO.txt', out_HIELO);
fs.writeFileSync('./results/Ejercicio14_MAR.txt', out_MAR);


// Ejercicio 15
let data_ejercicio15 = fs.readFileSync(`./resources/Ejercicio15_text.txt`,'utf-8');
let decrypt_text_mod27 = Encrypt.decrypt_vignere(data_ejercicio15, "HIELO", 0);
fs.writeFileSync('./results/Ejercicio15.txt', decrypt_text_mod27);


// Ejercicio 18
let data_ejercicio18 = fs.readFileSync(`./resources/Ejercicio18_text.txt`,'utf-8');
let decrypt_autokey = Encrypt.decrypt_autokey(data_ejercicio18, "UNODELOSMASGRANDESCRIPTOGRAFOS", 0);
fs.writeFileSync('./results/Ejercicio18_autokey.txt', decrypt_autokey);

// Ejercicio 19
let data_ejercicio19 = fs.readFileSync(`./resources/Ejercicio19_text.txt`,'utf-8');
let keys = Decrypt.kasiski(data_ejercicio19);
console.log(keys)
const decryptedText = keys.map((value)=>{
	return Encrypt.decrypt_vignere(data_ejercicio19, value, 0);
})
console.log(decryptedText[0])
