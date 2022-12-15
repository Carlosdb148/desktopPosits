$( "button" ).click(function() {
    $( ".desktop" ).append( "<div class='ui-widget-content'>"+ $( ".text" ).val() +"</div>" );
    $( function() {
        $( ".ui-widget-content" ).draggable();
      });
});

