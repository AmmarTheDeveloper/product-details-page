( function ( $ ) {
    $( document ).ready( function () {

        let zoomWidth;
        let zoomHeight;
        console.log($(window).width() >= 992)
        if($(window).width() >= 992){
            zoomWidth = 400;
            zoomHeight = 400
        }else{
            zoomWidth = 400,
            zoomHeight = "auto"
        }
        console.log(zoomHeight , zoomWidth)

        $( '.xzoom, .xzoom-gallery' ).xzoom( { zoomWidth: zoomWidth,zoomHeight:zoomHeight, tint: '#333', Xoffset: 15 , Yoffset:20} );
    } );
} )( jQuery );