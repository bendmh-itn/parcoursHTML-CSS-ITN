function addClass(str, element) {
  removeClass("menuSelected");
  element.classList.add("menuSelected");
  removeClass("UAASelected");
  var list = document.getElementsByClassName(str);
  for (let element of list) {
    element.classList.add("UAASelected");
  }
  /*if (str === 0) {
        var list = document.getElementsByClassName("autre");
        
        for (let element of list) {
            element.style.color = "red";
            element.style.fontSize = "1.5em";
        }
    } else {
        var list = document.getElementsByClassName("autre");
        
        for (let element of list) {
            element.style.color = "blueviolet";
            element.style.fontSize = "1em";
        }
    }
    if (str === 1) {
        var list = document.getElementsByClassName("web");
        
        for (let element of list) {
            element.style.color = "red";
            element.style.fontSize = "1.5em";
        }
    } else {
        var list = document.getElementsByClassName("web");
        
        for (let element of list) {
            element.style.color = "blueviolet";
            element.style.fontSize = "1em";
        }
    }
    if (str === 2) {
        var list = document.getElementsByClassName("programmation");
        
        for (let element of list) {
            element.style.color = "red";
            element.style.fontSize = "1.5em";
        }
    } else {
        var list = document.getElementsByClassName("programmation");
        
        for (let element of list) {
            element.style.color = "blueviolet";
            element.style.fontSize = "1em";
        }
    }
    if (str === 3) {
        var list = document.getElementsByClassName("projet");
        
        for (let element of list) {
            element.style.color = "red";
            element.style.fontSize = "1.5em";
        }
    } else {
        var list = document.getElementsByClassName("projet");
        
        for (let element of list) {
            element.style.color = "blueviolet";
            element.style.fontSize = "1em";
        }
    }
    if (str === 4) {
        var list = document.getElementsByClassName("hardware");
        
        for (let element of list) {
            element.style.color = "red";
            element.style.fontSize = "1.5em";
        }
    } else {
        var list = document.getElementsByClassName("hardware");
        
        for (let element of list) {
            element.style.color = "blueviolet";
            element.style.fontSize = "1em";
        }
    }*/
}

function removeClass(nomClasse) {
  let listSelected = document.getElementsByClassName(nomClasse);
  let longueur = listSelected.length;
  for (let i = 0; i < longueur; i++) {
    listSelected[0].classList.toggle(nomClasse);
  }
}

function toogleVisibility(nomClasse) {
  let listSelected = document.getElementsByClassName("visible");
  let longueur = listSelected.length;
  for (let i = 0; i < longueur; i++) {
    listSelected[i].classList.add("hidden");
    listSelected[i].classList.remove("visible");
  }
  let element = document.getElementById(nomClasse);
  element.classList.remove("hidden");
  element.classList.add("visible");
}
