const costPrice = document.querySelector(".costPrice");
const numberOfApples = document.querySelector(".numberOfApples");
const packetSize = document.querySelector(".packetSize");
const requidProfit = document.querySelector(".requidProfit");
const calculateBtn = document.querySelector(".calculate");
const errorTxt1 = document.querySelector(".errorTxt1");
const errorTxt2 = document.querySelector(".errorTxt2");
const errorTxt3 = document.querySelector(".errorTxt3");
const errorTxt4 = document.querySelector(".errorTxt4");


const factoryFunction = apple();




function apple() {
   
    // const calculate = document.querySelector('.calculate');

    errorTxt1.innerHTML = factoryFunction.costPerApple(costPrice,)
    errorTxt2.innerHTML = factoryFunction.costPricePerapple(numberOfApples.value, numberOfApples.value)
    errorTxt3.innerHTML = factoryFunction.numberOfPackets(costPrice.value, packetSize.value)
    errorTxt4.innerHTML = factoryFunction.packet(numberOfApples.value, packetSize.value)

    errorTxt1.innerHTML =firstNumber1


    


}
    

calculateBtn.addEventListener("click", apple)

