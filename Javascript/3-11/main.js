// var myTimer = setInterval(gobang, 1000);
// var tick = 0;

let frames = 0;
gameLoop();

function gameLoop(){
    window.requestAnimationFrame(gameLoop);
    frames++;
    console.log(frames);
    
}


// function gobang(){
//     tick++;
//     if(tick >= 5){
//         clearInterval(myTimer);
//     }
//     console.log('timer dun', tick);
    
// }



// let w;

// function startWorker() {
//   if (typeof Worker == "undefined") {
//     if (typeof w == "undefined") {
//       $(".result").html(
//         "You don't want to use IE. You want to go home and rethink your life"
//       );
//     }
//   } else {
//     w = new Worker("worker.js");
//     w.onmessage = event => {
//       $(".result").html(event.data);
//     };
//   }
// }

// function stopWorker() {
//   w.terminate();
//   w = undefined;
// }
