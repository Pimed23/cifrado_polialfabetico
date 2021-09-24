# Laboratorio N° 2
# CIFRADO POLIALFABÉTICO
## Integrantes:
> * Flores Herrera, Jefferson
> 
> * Pinto Medina, Brian
> 
> * Paredes Escobedo, Fernanda
## Actividades

### Cifrado de Vigenere
10. Implementar un cifrador de Vignere, donde se pueda seleccionar el módulo, alfabeto módulo 27 o módulo 191 (ASCII), ingresar el texto claro (en archivo o por interface) y genere la cifra resultante

11. Verificar cifrando “Creer que es posible es el paso número uno hacia el éxito. Despertarse y pensar en algo positivo puede cambiar el transcurso de todo el día. No eres lo suficientemente viejo como para no iniciar un nuevo camino hacia tus sueños. Levántate cada mañana creyendo que vas a vivir el mejor día de tu vida”. Usando la clave POSITIVO

12. Verifica el resultado obtenido a partir del cifrador Criptoclásicos v2.1 (http://www.criptored.upm.es/software/sw_m001c.htm ) haciendo las capturas de pantalla respectivas para los módulos 27 y 191

13. Mostrar el resultado de cifrar usando al menos otros dos métodos disponibles (deberá explicar el principio de dicho método de cifrado)

14. Muestre las frecuencias de cada letra del mensaje original usando como claves POSITIVO, HIELO y MAR, compare y concluya sobre la variación de las frecuencias en base a la longitud de la clave. Verifique el resultado usando la aplicación desarrollada en la práctica anterior

15. Desarrolle un algoritmo que encuentre el texto claro si recibió la cifra WPIXHVYYOSRTECSZBEEGHUUFWRWTZGRWUFSRIWESSXVOHAIHOHWWHCWH UZOBOZEAOYBMCRLTEYOTI, y se sabe que ha cifrado con la clave HIELO

16. Usando el software anterior, verifique el resultado, eligiendo el cifrado Vignere con módulo 27

17. Usando matemáticas discretas, descifre manualmente YGVMSSKKOX si la clave fue FORTALEZA en un alfabeto de 27 caracteres

### Cifrado con autoclave

18. Descifre el texto, usando la clave UNODELOSMASGRANDESCRIPTOGRAFOS: XHGDQESDMPKÑDEEDKNGJZPFJSUIFZOLFCINFJCESVZTGBFXCIUDAYNUUDIZY WWZBEYNVQWIVUNKZEPHDODQUZZLBDNDRWTHQSERÑIVMLERCMGIFLSORZXTSDIGLOXQSDJHWVCIWQXQJCKMBPOKMPSKMUVIMNJDNBLCSZHXHNYYUIXDBSOXHZLXWVGDJGXHWLTDWKÑSAQIMZLNBVMLXHUOQQXIQGWGUFTWKZKMOKUDNINSIFJDUOZIJBSVVOWFAIEÑGYOWPSOAP

### Ataque de Kasiski

19. Criptoanalizar el siguiente criptograma mod 27, encontrar la clave y el texto en claro. MAXYHGAVAPUUGZHEGZQOWOBNIPQKRNÑMEXIGONIICUCAWIGCTEAGMNOLRSZJNLWÑAWWIGLDDZSNIZDNBIXGZLAYMXÑCVEKIETMOEOPBEWPTNIXCXUIHMECXLNOCECYXEQPBWUFANIICÑJIKISCZUAILBGSOANKBFWUAYWNSCHLCWYDZHZAQVMPTVGFGPVAJWFVPUOYMXCWERVLQCZWECIFVITUZSNCZUAIKBFMÑALIEGLBSZLQUXÑOHWOCGHNYWÑQKDANZUDIFOIMXNPHNUWQOKLMVBNNKRMKONDPDPNMIKAWOXMEEIVEKGBGSFHVADWPGOYMHOIUEEIPGOLENZBSCHAGKQTZDRÑMÑNWTUZIÑCMÑAXKQUWDLVANNIHLÑCQNWGEHIPGZDTZTÑNWÑEEWFUMGIÑXNTWXNVIXCZOAZSOQUVENDNFWUSZYHGLRACPGGUGIYWHOTRMZUGQQDDZIZFWHVVSHCUGOGIFKBXAXPBOBRDVDUCMVTKGIKDRSZLUQSDVPMXVIVEYMFGTEANIMQLHLGPQOHRYWCFEWFOISNÑPUAYINNÑXNÑPGKWGOILQGAFOILQTAHEIIDWMÑEÑXNEPRCVDQTURSK
