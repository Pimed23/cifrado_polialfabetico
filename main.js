const fs = require("fs");
const Encrypt = require('./encrypt.js');

// Ejercicio 11
let data = fs.readFileSync(`./resources/Ejercicio11_text.txt`,'utf-8');
let preprocessed_text_mod27 = Encrypt.preprocessing_mod27(data);
let encrypt_text_mod27 = Encrypt.vignere(preprocessed_text_mod27, "POSITIVO", 0);
fs.writeFileSync('./results/Ejercicio11_mod21.txt', encrypt_text_mod27);

let preprocessed_text_mod191 = Encrypt.preprocessing_mod191(data);
let encrypt_text_mod191 = Encrypt.vignere(preprocessed_text_mod191, "POSITIVO", 1);
fs.writeFileSync('./results/Ejercicio11_mod191.txt', encrypt_text_mod191);

// Ejercicio 15
let data = fs.readFileSync(`./resources/Ejercicio15_text.txt`,'utf-8');
let decrypt_text_mod27 = Encrypt.decrypt_vignere(data, "HIELO", 0);
fs.writeFileSync('./results/Ejercicio15.txt', decrypt_text_mod27);










