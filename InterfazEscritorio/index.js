$( "button" ).click(function() {
    $( ".desktop" ).append( "<div class='ui-widget-content'>"+ $( 'textarea' ).val() +"</div>" );
    $( function() {
        $( ".ui-widget-content" ).draggable();
      });
});

