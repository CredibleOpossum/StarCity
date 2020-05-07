function update() {
    //should give the resources/workers by automation or buttons
    getElementById("currentStick").innerText = "Stick: " + game.resources.stick.tofixed(2) + ` (${sticks}/s)`;
    sticks = game.resources.stickPs
    getElementById("currentWheat").innerText = "Wheat: " + game.resources.wheat.tofixed(2) + ` (${wheats}/s)`;
    wheats = game.resources.wheatPs
    getElementById("currentStone").innerText = "Stone: " + game.resources.stone.tofixed(2) + ` (${stones}/s)`;
    stones = game.resources.stonePs
    getElementById("currentMiner").innerText = "Miners: " + game.workers.miner
    getElementById("currentCollector").innerText = "Collectors: " + game.workers.collector
    getElementById("currentFarmer").innerText = "farmers: " + game.workers.farmer
}

setInterval(update(), 10)