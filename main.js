var Encrypt = require('./encrypt.js');

let encrypt_text = Encrypt.vignere("HERMOSO", "CIELO", 0);
console.log(encrypt_text);

let decrypt_text = Encrypt.decrypt_vignere(encrypt_text, "CIELO", 0);
console.log(decrypt_text);

