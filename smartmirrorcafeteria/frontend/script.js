$(document).ready(function () {
    setInterval(updateMenu, 10000);
    updateMenu();
});


var showCountDay = 2;
function updateMenu() {
    $.ajax({
        dataType: "json",
        url: '../modules/smartmirrorcafeteria/assets/getMenue.php'
    }).done(function(data) {
        var now = new Date();
        var currentCount = showCountDay;
        $.each(data, function(k, e){
            var dateOfRow = new Date(k);
            if(dateOfRow.getDay() >= now.getDay() && currentCount > 0){
                $.each(e, function(k1, e1){
                    $("#day-" + dateOfRow.getDay()).show();
                    $("#day-" + dateOfRow.getDay() + " .menu-" + k1 + " .description").text(e1["description"])
                    $("#day-" + dateOfRow.getDay() + " .menu-" + k1 + " .allergens").text(e1["description"])
                    $("#day-" + dateOfRow.getDay() + " .menu-" + k1 + " .price").text(e1["price"])
                });
                currentCount--;
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
