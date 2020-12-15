let input = document.createElement("input");
let button = document.createElement("button");
let buttonAll = document.createElement("button");
let buttonAlea = document.createElement("button");
let buttonSupAll = document.createElement("button");
let buttonSupLast = document.createElement("button");
let array = [];
document.body.append(input);
document.body.append(button);
document.body.append(buttonAll);
document.body.append(buttonAlea);
document.body.append(buttonSupAll);
document.body.append(buttonSupLast);

button.innerHTML = "Ajouter";
buttonAll.innerHTML = "Toutes les valeur";
buttonAlea.innerHTML = "Valeur aléatoire";
buttonSupAll.innerHTML = "Supprimer tout";
buttonSupLast.innerHTML = "Supprimer le dernier";

let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
document.body.append(div3);
document.body.append(div1);
document.body.append(div2);

if(array.length < 10) {
    div1.innerHTML = "Entrez au moins 10 valeurs";
}

button.addEventListener("click", function () {
    let value = input.value;
    array.push(value);

    if(array.length === 10) {
        div1.innerHTML = "Valeur aléatoire: " + array[Math.trunc(Math.random() * array.length)];
        div2.innerHTML = "Valeur 5: " + array[5];
    }

    buttonSupAll.addEventListener("click", function () {
        div1.innerHTML = "Entrez au moins 10 valeurs";
        div2.innerHTML = "";
        div3.innerHTML = "";
        for(let x = 0; x < array.length; x++) {
            array.pop();
        }
    });

    buttonAlea.addEventListener("click", function () {
        div3.innerHTML = "Valeur aléatoire: " + array[Math.trunc(Math.random() * array.length)];
    });

    buttonAll.addEventListener("click", function () {
        div3.innerHTML = "";
        for(let x = 0; x < array.length; x++) {
            div3.innerHTML += x + " - " + array[x] + "<br>";
        }

    });


    buttonSupLast.addEventListener("click", function () {
        array.pop();
    });
});

