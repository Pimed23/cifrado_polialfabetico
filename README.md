# Laboratorio N° 2
# CIFRADO POLIALFABÉTICO
## Integrantes:
> * Flores Herrera, Jefferson
> 
> * Pinto Medina, Brian
> 
> * Paredes Escobedo, Fernanda
## Actividades

### Cifrado de Vigenère
10. Implementar un cifrador de Vigenère, donde se pueda seleccionar el módulo, alfabeto módulo 27 o módulo 191 (ASCII), ingresar el texto claro (en archivo o por interface) y genere la cifra resultante
> Implementación de Vigenère
```js
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
```  
> Implementación del módulo 27
```js
static preprocessing_mod27(text) {

        let preprocessed_text = "";
        
        for (let i = 0; i < text.length; ++i) {
            if(text[i] === 'Á' ||  text[i] === 'á')
                preprocessed_text += 'A';

            else if(text[i] === 'É' ||  text[i] === 'é')
                preprocessed_text += 'E';
            
            else if(text[i] === 'Í' ||  text[i] === 'í')
                preprocessed_text += 'I';
            
            else if(text[i] === 'Ó' ||  text[i] === 'ó')
                preprocessed_text += 'O';
            
            else if(text[i] === 'Ú' ||  text[i] === 'ú')
                preprocessed_text += 'U';
            
            else if(text[i] === 'Ñ' ||  text[i] === 'ñ')
                preprocessed_text += 'Ñ';
            
            else if(text[i] < 'A' || text[i] > 'z' || (text[i] > 'Z' && text[i] < 'a'))
                continue;

            else if(text[i] >= 'a')
                preprocessed_text += String.fromCharCode((text[i].charCodeAt(0) - 32));
            
            else
                preprocessed_text += text[i];
        }

        return preprocessed_text;
    }
```
> Implementación del módulo 191
```js
static preprocessing_mod191(text) {

        let preprocessed_text = "";

        for (let i = 0; i < text.length; ++i) {
            if(text[i] < '!' || text[i] > 'ÿ')
                continue;
            
            else
                preprocessed_text += text[i];
        }

        return preprocessed_text;
    } 
```
***
11. Verificar cifrando “Creer que es posible es el paso número uno hacia el éxito. Despertarse y pensar en algo positivo puede cambiar el transcurso de todo el día. No eres lo suficientemente viejo como para no iniciar un nuevo camino hacia tus sueños. Levántate cada mañana creyendo que vas a vivir el mejor día de tu vida”. Usando la clave POSITIVO
> El texto a claro se encuentra en: https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/resources/Ejercicio11_text.txt
> 
> El resultado cifrando con el módulo 27 se encuentra en: https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio11_mod21.txt y es el siguiente: 
> ```txt
>RGWMLYPSTHIWMPWZTSLMEXVHEBNTXZKJCDZIVPVSASPPNWYSIEWZNINHTNIMGAVGTBSSZWLDIWMPOWLJTRWKTTWWPGWSNZVBIQNZMWYSJDVWXSYWPBHMLMÑZEHNNBKDSCIWTXUOSLWWQIKKAEESZTUKWCWUPTZPBCJWDIKVAXBHOTKD JJLAÑMJDIZWDTUOOJSUIWIHODOFIVZZNTBVWKCZKPHSDBDDGTZEMCWNRXOVMNCQWSO
>```
> 
> El resultado cifrando con el módulo 191 se encuentra en: https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio11_mod191.txt y es el siguiente: 
```txt
rÀ·­Å¹Ê³´ÁÂ·Æ±·º´³Å­¿¸¶Á¾¼Mµ¸ºÄÃ½½º©¶±¶³»8Ê±Ç·cr´ÁÂ­Å¼¶ÀÂ³Ë¸¸¶È¯Á³À©¿¯Ä¾¾Á»¼¼¾Ä¾Ä³¶­¶©Â°¸¯Ä­¿¼Ç¯½Áµ½Å»Ä²´ÂÁ¬Â­Á²=¯`vÂ­Ç³ÂºÁ»È®¾±¸³À¼¸µº¼Ã³È±¸²Ä±¾»Á¸´º¶¼¾·À±¶±¶ÀÄ¼À½¸¾Ä °»»¶Â°¶±¸¯Æ½Æ»Ê³A½ÅV‘­Ë0½Â³¼¸«¶²°»³:´¶¶±Á³Ë­Á¬Ä¿Ä³È©Æ©Ë·Å·Ä­¿µº¸¾À¶6´¬ºÂÄÄ»¬´Jc
```
***
12. Verifica el resultado obtenido a partir del cifrador Criptoclásicos v2.1 (http://www.criptored.upm.es/software/sw_m001c.htm ) haciendo las capturas de pantalla respectivas para los módulos 27 y 191
> Resultado con el módulo 27:
> 
>![alt text](https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio12_mod27.PNG)
> 
> Resultado con el módulo 191: 
> 
> ![alt text](https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio12_mod191.PNG)
***
13. Mostrar el resultado de cifrar usando al menos otros dos métodos disponibles (deberá explicar el principio de dicho método de cifrado)
> **Beaufort**: El cifrado de Beaufort se basa en el cuadrado de Beaufort, que es esencialmente el mismo que un cuadrado de Vigenère pero en orden inverso, comenzando con la letra "Z" en la primera fila, donde la primera fila y la última columna tienen el mismo propósito. Para cifrar, primero se elije el carácter de texto sin formato de la fila superior del cuadro; se llama a esta columna P. En segundo lugar, se baja la columna P hasta la letra clave correspondiente K. Finalmente, se mueve directamente a la izquierda desde la letra clave hasta el borde izquierdo del cuadro, el cifrado de texto cifrado del texto plano P con la clave K estará allí. Por ejemplo, si se encripta el carácter de texto sin formato "d" con la clave "m", los pasos serían:
> 1. Busar la columna con "d" en la parte superior,
> 2. Viajar por esa columna para encontrar la clave "m",
> 3. Viajar al borde izquierdo del cuadro para encontrar la letra del texto cifrado ("J" en este caso).
>Para descifrar, el proceso se invierte. El cifrado de Beaufort es un cifrado recíproco, es decir, los algoritmos de descifrado y cifrado son los mismos.
>
>El resultado con este método es: 
>
>![alt text](https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio13_Beaufort.PNG)

>**Clave Continua**: El método de cifrado One Time Pad es un cifrado de flujo adicional binario, donde se genera un flujo de claves aleatorias reales y luego se combina con el texto en claro para su cifrado o con el texto cifrado para su descifrado a través de una adición “OR-exclusiva” (XOR). Se puede demostrar que un esquema de cifrado de flujo es inviolable si se cumplen las siguientes condiciones previas:
> 1. La clave debe ser tan larga como el texto en claro.
> 2. La clave debe ser realmente aleatoria.
> 3. La clave debe utilizarse solo una vez.
> 
> Las claves del One Time Pad se utilizan en pares. Cada usuario guarda una copia de la clave y las claves se distribuyen de un modo seguro antes del cifrado.  La confidencialidad y autenticidad de las claves One Time Pad están garantizadas a través de una protección continua durante su distribución y almacenaje. Esto garantiza que los intrusos no puedan hacer un uso incorrecto de la clave.
> 
> * Para cifrar datos de texto en claro, el remitente utiliza una cadena de clave que tiene la misma longitud que el texto en claro. La clave se utiliza mezclando (através del cifrado XOR) bit por bit, siempre un bit de la clave con un bit del texto en claro para crear un bit de texto cifrado.
> * A continuación, el texto cifrado se envía al destinatario.
> * Por parte del destinatario, el mensaje codificado está mezclado (a través del cifrado XOR) con la copia duplicada de la clave de utilización única y se ha restaurado el texto en claro.
> * Tanto la clave del remitente como la del destinatario se destruyen automáticamente una vez se han utilizado, para garantizar que no se pueda volver a aplicar la misma clave.
>
>El resultado con este método es: 
>
>![alt text](https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio13_ClaveContinua.PNG)
***
14. Muestre las frecuencias de cada letra del mensaje original usando como claves POSITIVO, HIELO y MAR, compare y concluya sobre la variación de las frecuencias en base a la longitud de la clave. Verifique el resultado usando la aplicación desarrollada en la práctica anterior
> El algoritmo que calcula las frecuencias es:
```js
static frecuencies(text) {

  const frecuency_table = {};
  const ordered_frecuency_table = {};

  for (let i = 0; i < text.length; ++i) {
    if(frecuency_table[text[i]] !== undefined)
      frecuency_table[text[i]]++;

    else
      frecuency_table[text[i]] = 1;
   }

   Object.keys(frecuency_table).sort().forEach(function(key) {
   ordered_frecuency_table[key] = frecuency_table[key];
   });

   return ordered_frecuency_table;
}
```
> Las frecuencias con la clave POSITIVO se encuentra en https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio14_POSITIVO.txt y son las siguientes:
> 
```txt
{"A":5,"B":9,"C":7,"D":12,"E":7,"F":1,"G":5,"H":8,"I":14,"J":8,"K":10,"L":7,"M":11,"N":12,"O":10,"P":11,"Q":3,"R":3,"S":16,"T":15,"U":5,"V":10,"W":26,"X":6,"Y":4,"Z":15,"Ñ":2}
```
>
> Las frecuencias con la clave HIELO se encuentra en https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio14_HIELO.txt y son las siguientes:
> 
```txt
{"A":6,"B":9,"C":10,"D":14,"E":6,"F":3,"G":8,"H":7,"I":23,"J":5,"K":6,"L":20,"M":11,"N":2,"O":16,"P":7,"Q":7,"R":7,"S":16,"T":8,"U":2,"V":10,"W":15,"X":9,"Y":5,"Z":10}
```
>
> Las frecuencias con la clave MAR se encuentra en https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio14_MAR.txt y son las siguientes:
> 
```txt
{"A":21,"B":2,"C":5,"D":12,"E":29,"F":4,"G":13,"H":2,"I":10,"J":6,"K":4,"L":11,"M":13,"N":7,"O":9,"P":15,"Q":1,"R":16,"S":11,"T":14,"U":4,"V":17,"W":2,"X":3,"Y":3,"Z":3,"Ñ":5}
```
> 
> A continuación se observa una tabla en la que se muestra la comparación de las frecuencias de cada letra con las diferentes claves:
> 
> ![Frecuencias](https://github.com/Pimed23/cifrado_polialfabetico/blob/develop/results/Ejercicio14_frecuencias.PNG)
***
15. Desarrolle un algoritmo que encuentre el texto claro si recibió la cifra WPIXHVYYOSRTECSZBEEGHUUFWRWTZGRWUFSRIWESSXVOHAIHOHWWHCWH UZOBOZEAOYBMCRLTEYOTI, y se sabe que ha cifrado con la clave HIELO
> El algoritmo es: 
```js
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
```
>
> El texto claro que se encontró está en: https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio15.txt y es el siguiente:
> 
> ```txt
> PIENSOQUEELMARESTATRANQUILOPORLOQUELASTEMPRESTADESPODRIANVENIRAPARTIRDEMAÑANA
> ```
***
16. Usando el software anterior, verifique el resultado, eligiendo el cifrado Vignere con módulo 27
>El resultado se encuentra en: https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio16.PNG y es el siguiente:
>
> ![alt text](https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio13_ClaveContinua.PNG)
***
17. Usando matemáticas discretas, descifre manualmente YGVMSSKKOX si la clave fue FORTALEZA en un alfabeto de 27 caracteres
> El resultado se encuentra en https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio17.PNG y es el siguiente: 
>
>![alt text](https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio17.PNG)
***
### Cifrado con autoclave

18. Descifre el texto, usando la clave UNODELOSMASGRANDESCRIPTOGRAFOS: XHGDQESDMPKÑDEEDKNGJZPFJSUIFZOLFCINFJCESVZTGBFXCIUDAYNUUDIZY WWZBEYNVQWIVUNKZEPHDODQUZZLBDNDRWTHQSERÑIVMLERCMGIFLSORZXTSDIGLOXQSDJHWVCIWQXQJCKMBPOKMPSKMUVIMNJDNBLCSZHXHNYYUIXDBSOXHZLXWVGDJGXHWLTDWKÑSAQIMZLNBVMLXHUOQQXIQGWGUFTWKZKMOKUDNINSIFJDUOZIJBSVVOWFAIEÑGYOWPSOAP
> El algoritmo empleado es:
> 
> Implementación de Autoclave
```js
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
```
> Implementación de la desencriptación de autoclave:
```js
static decrypt_autokey(text, key, mode) {

  let decrypt_text = "";
  const vignere_table = {};
  let n_characters = this.#fill_vignere_table(vignere_table, mode);
  let new_key = key;

  for (let i = 0; i < text.length; ++i) {
    let value_text_character = parseInt(vignere_table[text[i]]);
    let value_key_character = parseInt(vignere_table[new_key[i]]);
    let result = (value_text_character - value_key_character) % n_characters;

    if(result < 0)
      result = n_characters + result;

    let letter = this.#get_key(vignere_table, result.toString());
    new_key += letter;
    decrypt_text += this.#get_key(vignere_table, result.toString());
  }

  return decrypt_text;
}
```
> El texto descifrado se encuentra en https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio18_autokey.txt y es el siguiente:
```txt
DURANTELAPRIMERAGUERRAMUNDIALWILLIAMFREDERICKFRIEDMANSIRVIOCOMOTENIENTEENLAUNIDADDECRIPTOLOGIADELAFUERZAEXPEDICIONARIAESTADOUNIDENSEDISTINGUIENDOSEPORSUSTRABAJOSYPROEZASENELANALISISDECODIGOSENEMIGOSINVIOLABLESPORLOCUALRECIBIOELRECONOCIMIENTODELGOBIERNOESTADOUNIDENSE
```
>
> Usando el software obtenemos el mismo resultado:
> 
> ![alt text](https://github.com/Pimed23/cifrado_polialfabetico/blob/develop-vignere/results/Ejercicio18_comparision.PNG)
***
### Ataque de Kasiski

19. Criptoanalizar el siguiente criptograma mod 27, encontrar la clave y el texto en claro. MAXYHGAVAPUUGZHEGZQOWOBNIPQKRNÑMEXIGONIICUCAWIGCTEAGMNOLRSZJNLWÑAWWIGLDDZSNIZDNBIXGZLAYMXÑCVEKIETMOEOPBEWPTNIXCXUIHMECXLNOCECYXEQPBWUFANIICÑJIKISCZUAILBGSOANKBFWUAYWNSCHLCWYDZHZAQVMPTVGFGPVAJWFVPUOYMXCWERVLQCZWECIFVITUZSNCZUAIKBFMÑALIEGLBSZLQUXÑOHWOCGHNYWÑQKDANZUDIFOIMXNPHNUWQOKLMVBNNKRMKONDPDPNMIKAWOXMEEIVEKGBGSFHVADWPGOYMHOIUEEIPGOLENZBSCHAGKQTZDRÑMÑNWTUZIÑCMÑAXKQUWDLVANNIHLÑCQNWGEHIPGZDTZTÑNWÑEEWFUMGIÑXNTWXNVIXCZOAZSOQUVENDNFWUSZYHGLRACPGGUGIYWHOTRMZUGQQDDZIZFWHVVSHCUGOGIFKBXAXPBOBRDVDUCMVTKGIKDRSZLUQSDVPMXVIVEYMFGTEANIMQLHLGPQOHRYWCFEWFOISNÑPUAYINNÑXNÑPGKWGOILQGAFOILQTAHEIIDWMÑEÑXNEPRCVDQTURSK
> La implementación es:
> 
```js
static kasiski(text){
	let repetitiveTable = findRepetitiveStrings(text)
	let L = MCD(repetitiveTable)
	let subCryptograms = getSubcryptograms(text, L)
	let keys = getKeys(subCryptograms)
	return keys
}
```
>
> La clave encontrada es:
```txt
DAVINCI
```
> Nuestro algoritmo encuentra más de una posible clave:
> ![alt text](https://github.com/Pimed23/cifrado_polialfabetico/blob/main/results/kasiskiKeysEjercicio19.PNG)
> El texto claro es el siguiente:
>
```txt
JACQUESSAUNIEREELRENOMBRADOCONSERVADORAVANZABATAMBALEANDOSEBAJOLABOVEDADELAGRANGALERIADELMUSEOARREMETIOCONTRALAPRIMERAPINTURAQUEVIOUNCARAVAGGIOAGARRANDOELMARCODORADOAQUELHOMBREDESETENTAYSEISAÑOSTIRODELAOBRADEARTEHASTAQUELAARRANCODELAPAREDYSEDESPLOMOCAYENDOBOCAARRIBACONELLIENZOENCIMATALCOMOHABIAPREVISTOCERCASEOYOELCHASQUIDODEUNAREJADEHIERROQUEALCERRARSEBLOQUEABAELACCESOALASALAELSUELODEMADERATEMBLOLEJOSSEDISPAROUNAALARMAELCONSERVADORSEQUEDOAHITENDIDOUNMOMENTOJADEANDOEVALUANDOLASITUACIONTODAVIAESTOYVIVOSEDIOLAVUELTASEDESEMBARAZODELLIENZOYBUSCOCONLAMIRADAALGUNSITIODONDEESCONDERSEENAQUELESPACIOCAVERNOSO
```
>Nuestro resultado mostrado es:
>![alt text](https://github.com/Pimed23/cifrado_polialfabetico/blob/main/results/kasiskiTextoClaroEjercicio19.PNG)
>Comprobamos el resultado usando un software tercero obteniendo el mismo resultado:
>![alt text](https://github.com/Pimed23/cifrado_polialfabetico/blob/main/results/resultadoSoftwareEjercicio19.PNG)
