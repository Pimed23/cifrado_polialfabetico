const fs = require("fs");

class Encrypt {
    
    static vignere(text, key, mode) {

        let encrypt_text = "";
        const vignere_table = {};
        let n_characters = this.#fill_vignere_table(vignere_table, mode);

        for (let i = 0, j = 0; i < text.length; ++i, ++j) {
            if (j === key.length) j = 0;
            let value_text_character = parseInt(vignere_table[text[i]]);
            let value_key_character = parseInt(vignere_table[key[j]]);
            let suma = (value_text_character + value_key_character) % n_characters;
            encrypt_text += this.#get_key(vignere_table, suma.toString());
        }
        
        return encrypt_text;
    }

    static decrypt_vignere(text, key, mode) {

        let decrypt_text = "";
        const vignere_table = {};
        let n_characters = this.#fill_vignere_table(vignere_table, mode);

        for (let i = 0, j = 0; i < text.length; ++i, ++j) {
            if (j === key.length) j = 0;
            let value_text_character = parseInt(vignere_table[text[i]]);
            let value_key_character = parseInt(vignere_table[key[j]]);
            let result = (value_text_character - value_key_character) % n_characters;

            if(result < 0)
                result = n_characters + result;

            decrypt_text += this.#get_key(vignere_table, result.toString());
        }

        return decrypt_text;
    }

    static autokey(text, key, mode) {

        let encrypt_text = "";
        const vignere_table = {};
        let n_characters = this.#fill_vignere_table(vignere_table, mode);
        let new_key = key + text;

        for (let i = 0; i < text.length; ++i) {
            let value_text_character = parseInt(vignere_table[text[i]]);
            let value_key_character = parseInt(vignere_table[new_key[i]]);
            let suma = (value_text_character + value_key_character) % n_characters;
            encrypt_text += this.#get_key(vignere_table, suma.toString());
        }

        return encrypt_text;
    }

    static #fill_vignere_table(table, mode) {

        let filename;
        let n_characters;

        if (mode === 0) {
            filename = "mod27.txt";
            n_characters = 27;

        } else if (mode == 1) {
            filename = "mod191.txt";
            n_characters = 191;

        } else {
            console.log("Modo incorrecto...");
            throw new Error();
        }

        var data = fs.readFileSync(`./alphabet/${filename}`,'utf-8');
        const regular_expresion = /\r?\n/;
        const arr = data.split(regular_expresion);
        
        for(let i = 0; i < arr.length; ++i) {
            let temp = arr[i].split(' ');
            table[temp[0]] = temp[1];
        }

        return n_characters;
    }

    static #get_key(object, value) {
        return Object.keys(object).find(key => object[key] === value);
    }
}

module.exports = Encrypt;