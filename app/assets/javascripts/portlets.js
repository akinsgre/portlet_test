$(function() {
      $.getJSON("portlets/index.json", function(data) {
		    for (i in data) {

			$("#column" + data[i]["col"]).append("<div class='portlet'><div class='portlet-header'>Feeds</div>		<div class='portlet-content'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</div></div>");
		    }
		    $( ".column" ).sortable({
						connectWith: ".column"
					    });

		    $( ".portlet" ).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
			.find( ".portlet-header" )
			.addClass( "ui-widget-header ui-corner-all" )
			.prepend( "<span class='ui-icon ui-icon-minusthick'></span>")
			.end()
			.find( ".portlet-content" );

		    $( ".portlet-header .ui-icon" ).click(function() {
							      $( this ).toggleClass( "ui-icon-minusthick" ).toggleClass( "ui-icon-plusthick" );
							      $( this ).parents( ".portlet:first" ).find( ".portlet-content" ).toggle();
							  });

		    $( ".column" ).disableSelection();
		});

  });