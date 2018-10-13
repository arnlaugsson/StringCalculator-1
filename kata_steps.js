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


function Sum( numberArr ) {
	
	var total = 0;
	
	for ( var i = 0; i < numberArr.length; i++ ){
		
		if ( numberArr[i] > 0 ){
		
			if ( numberArr[i] <= 1000 ) {
					total += parseInt( numberArr[i] );
			}
		}
		
		else {
			throw ( "Negatives not allowed: " + numberArr[i]);
		}
	}
	
	return total;
}

module.exports = Add;