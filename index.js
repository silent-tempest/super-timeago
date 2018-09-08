'use strict';

var ARRAY = [ 60, 60, 24, 7, 365 / 12 / 7, 12 ];

/**
 * @method format
 * @param  {number|Date} date
 * @param  {number|Date} [origin]
 * @param  {function}    locale
 * @return {string}
 * @example
 * var format = require( 'timeago_es3' );
 * var ru     = require( 'timeago_es3/locales/ru' );
 * var string = format( Date.now(), ru ); // -> 'только что'
 */
function format ( date, origin, locale ) {
  var i, j, diff;

  if ( typeof origin === 'function' ) {
    locale = origin;
    origin = new Date().getTime();
  }

  diff = ( date - origin ) / 1000;

  if ( diff <= 0 ) {
    diff = - diff;
    j = 0;
  } else {
    j = 1;
  }

  for ( i = 0; i < ARRAY.length && diff >= ARRAY[ i ]; ++i ) {
    diff /= ARRAY[ i ];
  }

  diff = Math.floor( diff );

  i *= 2;

  if ( diff > 1 ) {
    ++i;
  }

  return locale( diff, i )[ j ].replace( '%s', diff );
}

module.exports = format;
