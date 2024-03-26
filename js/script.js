//TEST
// alert ("ciao");

//MILESTONE 1

// trovo i due bottoni nella pagina
const sendBtnElem = document.getElementById("send-btn"); // object | null
console.log(sendBtnElem);

const stopBtnElem = document.getElementById("stop"); //object | null
console.log(stopBtnElem);


// aggiungo event listener ai bottoni
sendBtnElem.addEventListener("click", function () {

    // raccolta dati
    const nameInputElem = document.getElementById("username"); //object | null
    console.log(nameInputElem);

    const nameValue = nameInputElem.value; //string
    console.log(nameValue);

    const ageInputElem = document.getElementById("userage"); //object | null
    console.log(ageInputElem);

    let ageValue = ageInputElem.value; //string
    console.log(ageValue);

    ageValue = parseInt(ageValue); //number
    console.log(ageInputElem);

    const distanceInputElem = document.getElementById("distance"); //object | null
    console.log(distanceInputElem);

    let distanceValue = distanceInputElem.value; //string
    console.log(distanceValue);

    distanceValue = parseInt(distanceValue); //number
    console.log(distanceInputElem);

    //validazione dei dati
    console.log(isNaN(distanceValue), isNaN(ageValue), distanceValue, ageValue);
    if (isNaN(distanceValue) === false && isNaN(ageValue) === false && distanceValue > 0 && ageValue > 0) {

        //esecuzione logica

        const basePrice = distanceValue * 0.21; //number
        console.log(basePrice);

        //se i dati sono validi
    } else {
        //nel caso i dati non solo i validi
        alert("dati errati");
        console.log("i dati non sono validi");
    }


})

