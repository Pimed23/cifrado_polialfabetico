var Encrypt = require('./encrypt.js');

let encrypt_text = Encrypt.vignere("HERMOSO", "CIELO", 0);
console.log(encrypt_text);

let decrypt_text = Encrypt.decrypt_vignere(encrypt_text, "CIELO", 0);
console.log(decrypt_text);

let auto_encrypt_text = Encrypt.autokey("AUTOCLAVE", "LUNA", 0);
console.log(auto_encrypt_text);

let auto_decrypt_text = Encrypt.decrypt_vignere(auto_encrypt_text, "LUNA", 0);
console.log(auto_decrypt_text);

