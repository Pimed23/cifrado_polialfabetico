const fs = require("fs")
const spanishFrequencies = [11.72, 1.49, 3.87, 4.67, 13.72, 0.69, 1.00, 
							 1.18, 5.28, 0.52, 0.11, 5.24, 3.08, 6.83,
							 8.44, 2.89, 1.11, 6.41, 7.20, 4.60, 4.55,
							 1.05, 0.04, 0.14, 1.09, 0.47]

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
	//Spanish frequencytable
	const totalSymbols = 26
	var dictionary = {}
	var table = []
	let sumOfCharacters = 0
	for(let i = 0; i < text.length; i++){
		let symbol = text[i]
		if(!(symbol in dictionary))
			dictionary[symbol] = 1
		else
			dictionary[symbol]++
		sumOfCharacters += 1
	}
	for(let i = 0; i < totalSymbols; i++){
		let charCode = String.fromCharCode(i+ 65)
		if(charCode in dictionary)
			table.push(dictionary[charCode])
		else
			table.push(0)
	}
	//special characters
	let charCode = 'Ñ'
	let index = 15
	if(charCode in dictionary)
		table.push(dictionary[charCode])
	else
		table.push(0)
	let temp = table[table.length - 1]
	for(let i = table.length - 1; i >= index; i--){
		table[i] = table[i-1]		
	}
	table[index-1] = temp
	//converting the frequencies to %
	for(let i = 0; i< table.length; i++){
		table[i] /= sumOfCharacters
		table[i] *= 100
		table[i] = +(table[i].toFixed(2))
	}	
	return table
}

function getSubcryptograms(text,L){
	var subCryptograms = []
	for(let i = 0; i < L; i++){
		let subCryptogram = ''
		for(let j = i; j < text.length; j+= L){
			subCryptogram += text[j]
		}
		subCryptograms.push(subCryptogram)
	}
	return subCryptograms
}

function getKeyCharacter(languageFrequenciesTable, table){
	//getting min, we probably need more than 1
	let minEuclideanDistance = Number.MAX_VALUE
	let previousIndex = 0
	let index = 0
	for(let i = 0; i < languageFrequenciesTable.length - 1; i++){
		let euclideanDistance = 0
		for( let j = 0; j < languageFrequenciesTable.length ; j++){
			let shift = (j + i) % languageFrequenciesTable.length
			euclideanDistance += Math.pow((languageFrequenciesTable[j]-table[shift]),2)
		} 
		euclideanDistance = Math.sqrt(euclideanDistance)
		if( euclideanDistance < minEuclideanDistance){
			minEuclideanDistance = euclideanDistance
			previousIndex = index
			index = i
		}			
	}
	return [index, previousIndex]
}

class Decrypt{
	static kasiski(text){
		let repetitiveTable = findRepetitiveStrings(text)
		let L = MCD(repetitiveTable)
		let subCryptograms = getSubcryptograms(text, L)
		console.log(subCryptograms)
		for(let i =0; i< subCryptograms.length; i++){
			let table = frequencyTable(subCryptograms[i])	
			let possibleKeys = getKeyCharacter(spanishFrequencies, table)	
			console.log(possibleKeys)
		}
		
	}
}

let text = 'LNUDVMUYRMUDVLLPXAFZUEFAIOVWVMUOVMUEVMUEZCUDVSYWCIVCFGUCUNYCGALLGRCYTIJTRNNPJQOPJEMZITYLIAYYKRYEFDUDCAMAVRMZEAMBLEXPJCCQIEHPJTYXVNMLAEZTIMUOFRUFC'

Decrypt.kasiski(text)
