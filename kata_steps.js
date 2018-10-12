// kata_steps.js

function Add( numbers ) {
	
	if ( numbers == "" ) {
		return 0; 
	}
	
	if ( numbers.includes(",") || numbers.includes("\n") ) {
		
		var numberArr = numbers.split(/,|\n/g);	
			
		return Sum( numberArr ); 
	}
	
	else {
		return parseInt( numbers );
	}
}

function check_nega ( numbers ) {
	
	var negativ = numbers.filter(function(num) {
		return num < 0; 
	});
	
	if ( negativ.length > 0 ) {
		throw new Error ( "Negatives Not allowed: " + negativ.join(" , "));
	}
	else {
		return numbers;
	}
	
}

/*function check_nega ( numbers ) {
	
	var negArr = [];
	
	for ( var i = 0; numberArr.length > i; i++ ) {
		if ( parseInt( numberArr[i]) < 0 ){
			negArr = numberArr[i];
		}
	}
	
	if ( negArr.length > 0 ){
		window.alert("Negatives not allowed:" + negArr );
	}
	else {
		return 0;
	}
}*/

function Sum( numberArr ) {
	
	var total = 0;
	
	for ( var i = 0; i < numberArr.length; i++ ){
		if ( numberArr[i] > 0 ){
		
			if ( numberArr[i] <= 1000 ) {
				total += parseInt( numberArr[i] );
			}
		}
		
		else {
			throw "Negatives not allowed: " + numberArr[i];
		}
	}
	
	return total;
}

module.exports = Add;