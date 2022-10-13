function addClass(str) {
    removeClass();
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

function removeClass() {
    let listSelected = document.getElementsByClassName("UAASelected");
    let longueur = listSelected.length;
    for (let i = 0; i < longueur; i++) {
        listSelected[0].classList.toggle("UAASelected");
    }
}