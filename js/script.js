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

        //se i dati sono validi
        const basePrice = distanceValue * 0.21; //number
        console.log(basePrice);

        let discount = 0;

        if (ageValue < 18) {
            discount = 20;
        } else if (ageValue > 65) {
            discount = 40;
        }
        console.log("sconto", discount);

        const totalDiscount = (basePrice * discount / 100); //number
        console.log("sconto in €", totalDiscount);

        const finalPrice = basePrice - totalDiscount; //number
        console.log("prezzo finale", finalPrice);

        //OUTPUT
        const resultMessage = `
        <dl>
          <dt>Nome passeggero</dt>
          <dd>${nameValue /* string */}</dd>

          <dt>Prezzo base:</dt>
          <dd>€ ${basePrice.toFixed(2) /* string */}</dd>

          <dt>Sconto:</dt>
          <dd>${discount /* number */} % (€ ${totalDiscount.toFixed(2)})
          </dd>

          <dt>Prezzo finale</dt>
          <dd>€ ${finalPrice.toFixed(2) /* string */}</dd>
        </dl>
`;

        console.log(resultMessage);

        document.getElementById("result").innerHTML = resultMessage;


    } else {
        //nel caso i dati non siano validi
        alert("dati errati");
        console.log("i dati non sono validi");


    }


})

