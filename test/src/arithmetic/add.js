import test from 'ava' ;
import * as number from '../../../src' ;

test ( "add" , t => {

	const one = function ( a , b ) {
		t.is ( number . add ( a , b ) , a + b , a + " + " + b ) ;
	} ;

	const n = 10 ;

	for ( let i = 0 ; i < n ; ++i ) {

		const a = Math . random ( ) ;
		const b = Math . random ( ) ;

		one ( a , b ) ;

	}

	one (  Infinity ,  Infinity ) ;
	one (  Infinity ,         0 ) ;
	one (         0 ,  Infinity ) ;
	one ( -Infinity , -Infinity ) ;
	one ( -Infinity ,         0 ) ;
	one (         0 , -Infinity ) ;

	t.truthy ( isNaN( number.add( -Infinity ,  Infinity ) ) , '-Infinity + Infinity' ) ;
	t.truthy ( isNaN( number.add(  Infinity , -Infinity ) ) , 'Infinity + -Infinity' ) ;

} ) ;