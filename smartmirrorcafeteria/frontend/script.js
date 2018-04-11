$(document).ready(function () {
    window.setTimeout(updatMmenu(), 10000);
});

var showCurrentDayOnly = true;

function updatMmenu() {
    $.ajax({
        dataType: "json",
        url: '../modules/smartmirrorcafeteria/assets/getMenue.php'
    }).done(function(data) {
        var now = new Date();
        $.each(data, function(k, e){
            var dateOfRow = new Date(k);
            if(showCurrentDayOnly && dateOfRow.getDay() == now.getDay()){
                $.each(e, function(k1, e1){
                    $("#day-" + dateOfRow.getDay()).show();
                    $("#day-" + dateOfRow.getDay() + " .menu-" + k1 + " .description").text(e1["description"])
                    $("#day-" + dateOfRow.getDay() + " .menu-" + k1 + " .allergens").text(e1["description"])
                    $("#day-" + dateOfRow.getDay() + " .menu-" + k1 + " .price").text(e1["price"])
                });
            }
        });
        
//        
        
        
//        result = {};
//                for (var i = 0; i < 4; i++) {
//        result[i + weather_dayOffset] = {};
//                result[i + weather_dayOffset]['min'] = 1000;
//                result[i + weather_dayOffset]['max'] = - 1000;
    });
}
