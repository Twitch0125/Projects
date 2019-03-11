let myTimer;
let turnOff = false;
let myChildren = $('#page').children();

(function(){
    rainLoop();
    placeDrops();
})();

function rainLoop(){
    window.requestAnimationFrame(rainLoop);
    draw();
}

function placeDrops(){
    if(!turnOff){
        let timeRandum = Math.floor((Math.random() * 3000) + 500);
        let randum = Math.floor((Math.random() * 8) + 1);
        for(let i =0; i < randum; i++){
            addDrop();
        }

        myTimer = setTimeout(placeDrops, timeRandum);
    }
}

function addDrop(){
    let dropX = Math.floor((Math.random() * 1000) + 40);
    $("#page").append(`<div class='drop' style='left: ${dropX}px'></div>`);
}

function draw(){
    myChildren = $("page").children();
    $("#page").children().each(function(){
        updateSpot($(this));
    });
}

function updateSpot(thechild){
    let spot = $(thechild).css('top');
    spot = spot.replace('px', '');
    let fix = Number(spot);
    if(fix > 800){
        $(thechild).remove();
    }
    else{
        fix++;
        $(thechild).css("top", (fix + "px"));
    }
}