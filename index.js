'use strict';

var ARRAY = [ 60, 60, 24, 7, 365 / 12 / 7, 12 ];

/**
 * @param {number|Date} date
 * @param {number|Date} [now]
 * @param {function} locale
 * @returns {string}
 */
function format ( date, now, locale ) {
  var i, j, diff;

  if ( typeof now === 'function' ) {
    locale = now;
    now = new Date().getTime();
  }

  diff = ( date - now ) / 1000;

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
