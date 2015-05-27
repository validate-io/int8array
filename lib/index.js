'use strict';

// FUNCTIONS //

var isStr = Object.prototype.toString;


// IS INT8ARRAY //

/**
* FUNCTION: isInt8Array( value )
*	Validates if a value is an Int8Array.
*
* @param {*} value - value to validate
* @returns {Boolean} boolean indicating if a value is an Int8Array
*/
function isInt8Array( value ) {
	return isStr.call( value ) === '[object Int8Array]';
} // end FUNCTION isInt8Array()


// EXPORTS //

module.exports = isInt8Array;
