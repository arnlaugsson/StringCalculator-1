// kata_steps.js

function Add( numbers ) {
	
	if ( numbers == "" ) {
		return 0; 
	}
	
	if ( numbers.includes(",") ) {
		
		var numberArr = numbers.split(",");
		
		return Sum( numberArr );
	}
	
	else {
		return parseInt( numbers );
	}
}

function Sum( numberArr ) {
	
	var total = 0;
	
	for ( var i = 0; i < numberArr.length; i++ ){
		total += parseInt( numberArr[i] );
	}
	
	return total;
}

module.exports = Add;