function apple(cost, numberOfApples, packetSize, requidProfit) {
    // var requidProfit = requidProfit
    // var costPrice = costPrice
    var pacentage = (requidProfit / 100) * numberOfApples
    var remaining = numberOfApples - pacentage


    function cost1(cost) {
        return cost
    }

    function ApplesInTheBox(numberOfApples) {

        return numberOfApples
    }

    function packet(packetSize) {

        return packetSize
    }
    function profitExpected(requidProfit) {

        return requidProfit
    }

    function costPerApple(cost, remaining) {

        return cost / remaining
    }

    function costPricePerapple(cost, packetSize) {

        return cost / packetSize
    }
    function numberOfPackets(numberOfApples, packetSize) {

        return numberOfApples / packetSize

    }
    // function rytPrice(){
    //     return cost /
    // }


    return {
        // rytPrice,
        cost1,
        ApplesInTheBox,
        packet,
        profitExpected,
        costPerApple,
        costPricePerapple,
        numberOfPackets,

    }
}
