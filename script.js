
function clock() 
  {

    var heure = document.getElementById('hour');
    var min =   document.getElementById('min');
    var sec =   document.getElementById('sec');

    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    heure.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
 }
 
 var interval = setInterval(clock, 1000);
     