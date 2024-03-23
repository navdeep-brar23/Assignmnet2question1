$(document).ready(function() {
    // Interactions
    $("#draggable").draggable();
    $("#droppable").droppable({
        drop: function(event, ui) {
            $(this)
                .addClass("ui-state-highlight")
                .find("p")
                .html("Dropped!");
        }
    });
    $("#resizable").resizable();
    $("#selectable").selectable();

    // Widgets
    $("#accordion").accordion();
    
    // Autocomplete source array
    var countries = [
        'India',
        'Pakistan',
        'Canada',
        'USA',
        'Dubai',
        'Sri Lanka'
    ];
    
    $("#search").autocomplete({
        source: countries
    });
    
    $("#datepicker").datepicker();
    $("#slider").slider({
        slide: function(event, ui) {
            var opacity = ui.value / 100;
            $(".container").css("opacity", opacity);
        }
    });

     // Effects
    $("#show").click(function() {
        $("#explode, #fade, #color").show("explode", 1000);
    });
    $("#hide").click(function() {
        $("#explode, #fade, #color").hide("explode", 1000);
    });
    $("#explode").click(function() {
        $(this).toggle("explode", 1000);
    });
    $("#fade").click(function() {
        $(this).fadeToggle(1000);
    });
    $("#color").click(function() {
        $(this).animate({ backgroundColor: "#F39814", color: "#FFF" }, 1000);
    });

});
