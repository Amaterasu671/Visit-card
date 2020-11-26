var nbClickVerso = 0;
var nbClickRecto = 0;

function agrandir(elt){
  var elem = document.getElementById(elt);
  if(elem === document.getElementById('verso')){
    nbClickVerso++;
    if(nbClickVerso%2 != 0)
      RemettrePlace('0%', '0%', '0%', '0%', 'absolute', 1,'scale(2, 2)', elem);
    else if (nbClickVerso%2 == 0) {
      elem.style.transform = "scale(1, 1)";
      RemettrePlace('0%', '30%', '0%', '0%', 'absolute', 0,'scale(1, 1)', elem);
    }
  }
  else if(elem == document.getElementById('recto')){
    nbClickRecto++;
    if(nbClickRecto%2 != 0)
      RemettrePlace('0%', '0%', '0%', '0%', 'absolute', 1,'scale(2, 2)', elem);
    else if (nbClickRecto%2 == 0) {
      elem.style.transform = "scale(1, 1)";
      RemettrePlace('20%', '-30%', '0%', '0%', 'absolute', 0, 'scale(1, 1)', elem);
    }
  }
}

function RemettrePlace(top, left, right, bottom, position, zIndex,transform, element){
  element.style.transform = transform;
  element.style.top = top;
  element.style.left = left;
  element.style.right = right;
  element.style.bottom = bottom;
  element.style.position = position;
  element.style.zIndex = zIndex;
}
