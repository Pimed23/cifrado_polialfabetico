const fs = require("fs")

function MCD(values){
	const lowestValue = Math.min(...values)
	for(let factor = lowestValue; factor > 1; factor--){
		let isCommonDivisor = true
		for(let i = 0; i < values.length; i++){
			if(values[i] % factor !== 0){
				isCommonDivisor = false; break;
			}
		}
		if(isCommonDivisor)
			return factor
	}
	return 1
}

function findRepetitiveStrings(text){
	var trigrams = {}
	let mcdValues = []
	for(let i = 0; i <= text.length - 6; i++){
		let firstTrigram = text[i] + text[i+1] + text[i+2]
		if(!(firstTrigram in trigrams))
			trigrams[firstTrigram] = []
		for(let j = i + 3; j < text.length - 3; j++){
			let secondTrigram = text[j] + text[j+1] + text[j+2]
			if(firstTrigram === secondTrigram){
				trigrams[firstTrigram].push(j-(i+3)+3) //i+3-j+3 numero de caracteres que separan los trigramas
				break
			}		
		}
	}
	for(let key in trigrams){
		trigrams[key].forEach((value) => {
			mcdValues.push(value)
		})
	}
	return mcdValues
}

function frequencyTable(text){
	var dictionary = {}
	for(let i = 0; i < text.length; i++){
		let symbol = text[i]
		if(!(symbol in dictionary))
			dictionary[symbol] = 1
		else
			dictionary[symbol]++
	}
	console.log(dictionary)
}

function getSubcryptogram(text,L){
	for(let i = 0; i < L; i++){

	}
}
let text = 'LNUDVMUYRMUDVLLPXAFZUEFAIOVWVMUOVMUEVMUEZCUDVSYWCIVCFGUCUNYCGALLGRCYTIJTRNNPJQOPJEMZITYLIAYYKRYEFDUDCAMAVRMZEAMBLEXPJCCQIEHPJTYXVNMLAEZTIMUOFRUFC'

let x = findRepetitiveStrings(text)
let L = MCD(x)
frequencyTable(text)

/*
class Decrypt{
	static kasiski(text){
		
	}
}*/
