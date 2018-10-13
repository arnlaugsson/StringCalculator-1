// kata_steps.js

function Add( numbers ) {
	
	if ( numbers == "" ) {
		return 0; 
	}
	
	var deli_char = ( "/" );
	
	if ( numbers.includes(",") || numbers.includes("\n") || numbers.includes(";" ) ) {
		
		var numberArr = numbers.split( /,|\n|;/);
			
		return Sum( numberArr ); 
	}
	
	else {
		return parseInt( numbers );
	}
}


function Sum( numberArr ) {
	
	var total = 0;


	for ( var i = 0; i < numberArr.length; i++ ){
		
		
		if ( numberArr[i] >= 0 || numberArr[i] == "" || numberArr[i] == "//" ){
			
			if ( numberArr[i] == "" ) {
				numberArr[i] = 0;
			}
			
			if ( numberArr[i] == "//" ) {
				numberArr[i] = 0;
			}

			if ( numberArr[i] <= 1000 ) {
					total += parseInt( numberArr[i] );
			}
		}
		
		else {
			
			throw ( "Negatives not allowed: " + numberArr[i] + ", ");
		}
	}
	
	return total;
}

module.exports = Add;