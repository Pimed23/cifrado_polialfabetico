const fs = require("fs");
const Encrypt = require('./encrypt.js');

// Ejercicio 12
let data = fs.readFileSync(`./resources/Ejercicio12_text.txt`,'utf-8');
let preprocessed_text_mod27 = Encrypt.preprocessing_mod27(data);
let encrypt_text_mod27 = Encrypt.vignere(preprocessed_text_mod27, "POSITIVO", 0);
fs.writeFileSync('./results/Ejercicio12_mod21.txt', encrypt_text_mod27);

let preprocessed_text_mod191 = Encrypt.preprocessing_mod191(data);
let encrypt_text_mod191 = Encrypt.vignere(preprocessed_text_mod191, "POSITIVO", 1);
fs.writeFileSync('./results/Ejercicio12_mod191.txt', encrypt_text_mod191);









