var nbClickVerso = 0;
var nbClickRecto = 0;
function agrandir(elt){
  var elem = document.getElementById(elt);
  if(elem === document.getElementById('verso')){
    nbClickVerso++;
    if(nbClickVerso%2 != 0){
      elem.style.transform = "scale(2, 2)";
      elem.style.top = "0px";
      elem.style.left = "0px";
      elem.style.right = "0px";
      elem.style.bottom = "0px";
      elem.style.position = "absolute";
      elem.style.zIndex = 1;
    }
    else if (nbClickVerso%2 == 0) {
      elem.style.transform = "scale(1, 1)";
      elem.style.top = "0%";
      elem.style.left = "30%";
      elem.style.right = "0";
      elem.style.bottom = "0";
      elem.style.position = "absolute";
      elem.style.zIndex = 0;
    }
  }
  else if(elem == document.getElementById('recto')){
    nbClickRecto++;
    if(nbClickRecto%2 != 0){
      elem.style.transform = "scale(2, 2)";
      elem.style.top = "0px";
      elem.style.left = "0px";
      elem.style.right = "0px";
      elem.style.bottom = "0px";
      elem.style.position = "absolute";
      elem.style.zIndex = 1;
    }
    else if (nbClickRecto%2 == 0) {
      document.getElementById('verso').style.visibility = "visible";
      elem.style.transform = "scale(1, 1)";
      elem.style.top = "20%";
      elem.style.left = "-30%";
      elem.style.right = "0";
      elem.style.bottom = "0";
      elem.style.position = "absolute";
      elem.style.zIndex = 0;
    }
  }
}
