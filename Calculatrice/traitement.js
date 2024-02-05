
//
// var s = document.getElementById("somme");

function valider(){

    //recuperation des valeur des id
    let n1 = document.getElementById("nombre1");
    let n2 = document.getElementById("nombre2");
    let n1Value =  parseInt(n1.value)
    let n2Value = parseInt(n2.value)

    //option des calcule
    let opt = document.getElementById("option");

    let resul;

    //Stocker la valeur du resultat
    let resultaVal;
    resultaVal = document.getElementById("resulta");



    //fonciton calculer la somme
    function somme(n1 , n2){
        // resultat
        resul = n1 + n2;
        resultaVal.value = resul
        resul.innerHTML = resul;

        return resul;
    }

    //fonciton calculer la diference
    function diff(n1 , n2){
        // resultat
        resul = n1 - n2;
        resultaVal.value = resul
        resul.innerHTML = resul;
        return resul;
    }

    //fonciton calculer la division
    function div(n1 , n2){
        // resultat
        resul = n1 / n2;
        resultaVal.value = resul
        resul.innerHTML = resul;
        return resul;
    }

    //fonciton calculer le produit
    function prod(n1 , n2){
        // resultat
        resul = n1 * n2;
        resultaVal.value = resul
        resul.innerHTML = resul;
        return resul;
    }


    let optVal = opt.value;
    switch (optVal){

        //somme
        case "somme":
        somme (n1Value , n2Value)
        break;

        //difference
        case "difference":
            diff (n1Value , n2Value)
            break;

         //difference
        case "division":
            div (n1Value , n2Value)
            break;

        //produi
        case "produit":
            prod (n1Value , n2Value)
            break;
    }
}

//fonction conversion binaire
function Valider(){
    let binaire;
    let decimal;
    decimal = document.getElementById("decimal");
    binaire = document.getElementById("binaire");

    //convertir dimal en binaire
    var decVal = decimal.value;
    var convert = parseInt(decVal)
    var dec = convert.toString(2);

    //recupere la valeur
    binaire.value = dec ;
    binaire.innerHTML = dec  //ajouter dans DOM

}



// function puissance de 2
// function puissance2(n, p){
//     return  n ** p ;
// }
//
// var bin = [];   //Stock les valeur du nombre binnaire
// function decimal(tab){
//
//     var tab1 = [];//stock les nouvelle valeur du tableau
//     var j = 0;  //iteration pour le calcule de puissance
//     var some = 0
//     var len = [tab.length - 1]; //la taile  du tableau
//
//     for (var i = len; i >=0 ; i--){
//         tab1.push(tab[i]);
//         var  pow = puissance2(2,j);
//
//
//         // console.log(pow)
//         calcule = tab1[j] * pow;
//         some += calcule
//         j++;
//     }
//
//     console.log(`decimal ${some}`)
//
//     return some;
// }
//
// for (var i = 0 ;  i <4 ; i++){
//     let nombre = prompt(`Entrer ${1} nombre binaire`);
//
//     //convertire le text en chiffre
//     var conver_nombre = parseInt(nombre);
//
//     // ajouter les nombre dans le tableu bin;
//     bin.push(conver_nombre);
//
//     //lire le tableau a partir de la dernier valeur
//     decimal(bin);
// }
// console.log(calcule);






































