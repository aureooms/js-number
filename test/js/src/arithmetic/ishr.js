
test( "ishr" , function ( ) {

	var a , b , i , n , x ;

	n = 10 ;

	for ( i = 0 ; i < n ; ++i ) {

		x = a = Math.floor( Math.random() * Math.pow( 2 , 32 ) ) ;
		b = Math.floor( Math.random() * 32 ) ;

		deepEqual( number.ishr( x , b ) , a >>= b , x + " >>= " + b ) ;

	}

} ) ;