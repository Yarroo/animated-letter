$( function() {
  $( '.type-text' ).each( function() {
    var items = $( this ).text();
    $( this ).empty().teletype( {
      text: $.map( items.split( ';' ), $.trim ),
      typeDelay: 5,
      backDelay: 20,
      cursor: false,
      preserve: true,
      humanise: true,
      loop: 1

    } );
  } );
} );
