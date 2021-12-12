$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    $(".home-image path").on('mouseover', function(){
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
        $(".home-image path").removeClass("current-floor");
    });
    counterUp.on('click', function(){
        if (currentFloor < 18){
            currentFloor++;
            uscurrentFloor = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(uscurrentFloor);
            $(".home-image path").removeClass("current-floor");
            $(`[data-floor = ${uscurrentFloor}]`).toggleClass("current-floor");
        }

    });
    counterDown.on('click', function(){
        if (currentFloor > 2){
            currentFloor--;
            uscurrentFloor = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(uscurrentFloor);
            $(".home-image path").removeClass("current-floor");
            $(`[data-floor = ${uscurrentFloor}]`).toggleClass("current-floor");
        }

    });
});