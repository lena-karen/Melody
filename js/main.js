$(document).ready(function () {
    var currentFloor = 2;
    var currentFlat = 1;
    var counterUp = $(".counter-up");
    var counterDown = $(".counter-down");
    var modalWindow = $(".modal");
    var floorPath = $(".home-image path");
    var flatPath = $(".flats path");
    var showFloorBtn = $(".button-store");
    var modalCounter = $(".modal-counter");
    var closeBtn = $(".modal-close-btn");
    var flatItem = $(".flat-link");

    floorPath.on('click', function(){
        modalWindow.toggleClass("modal-open");
        uscurrentFloor = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2, useGrouping: false});
        modalCounter.text(uscurrentFloor);
    });

    showFloorBtn.on('click', function(){
        modalWindow.toggleClass("modal-open");
        uscurrentFloor = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2, useGrouping: false});
        modalCounter.text(uscurrentFloor);
    });

    closeBtn.on('click', function(){
        modalWindow.removeClass("modal-open");
    });

    floorPath.on('mouseover', function(){
        currentFloor = $(this).attr("data-floor");
        $(".counter").text(currentFloor);
        floorPath.removeClass("current-floor");
    });

    flatPath.on('mouseover', function(){
        currentFlat = $(this).attr("data-flat-id");
        flatItem.removeClass("current");
        flatPath.removeClass("current-flat")
        $('[data-flat = ' + currentFlat +']').toggleClass("current");
    });

    flatItem.on("mouseover", function(){
        currentFlat = $(this).attr("data-flat");
        flatItem.removeClass("current");
        flatPath.removeClass("current-flat");
        $('[data-flat-id = ' + currentFlat +']').toggleClass("current-flat");
    });

    counterUp.on('click', function(){
        if (currentFloor < 18){
            currentFloor++;
            uscurrentFloor = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(uscurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor = ${uscurrentFloor}]`).toggleClass("current-floor");
        }

    });
    counterDown.on('click', function(){
        if (currentFloor > 2){
            currentFloor--;
            uscurrentFloor = currentFloor.toLocaleString("en-Us", {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(uscurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor = ${uscurrentFloor}]`).toggleClass("current-floor");
        }

    });
});