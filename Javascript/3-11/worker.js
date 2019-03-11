let i = 0;

function timedCount() {
  i = i + 1;
  postMessage("seconds:" + Math.floor(i/100) + " miliseconds: " + i);

  setTimeout("timedCount()", 10);
}
timedCount();
