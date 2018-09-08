/* globals describe, it */

'use strict';

describe( "require('timeago_es3')", function () {
  it( 'works', function () {
    require( '..' ).should.be.a( 'function' );
  } );
} );

describe( 'example', function () {
  it( 'works', function () {
    var format = require( '..' );
    var ru     = require( '../locales/ru' );
    var string = format( Date.now(), ru ); // -> 'только что'
    string.should.equal( 'только что' );
  } );
} );
