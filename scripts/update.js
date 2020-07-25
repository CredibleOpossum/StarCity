function update() {
	//should give the resources/workers by automation or buttons
	document.getElementById("currentStick").innerText = "Stick: " + game.resources.stick.toFixed(2); //+ ` (${sticks}/s)`;
	sticks = game.resources.stickPs;
	document.getElementById("currentWheat").innerText = "Wheat: " + game.resources.wheat.toFixed(2); //+ ` (${wheats}/s)`;
	wheats = game.resources.wheatPs;
	document.getElementById("currentStone").innerText = "Stone: " + game.resources.stone.toFixed(2); //+ ` (${stones}/s)`;
	stones = game.resources.stonePs;
	document.getElementById("currentMiner").innerText = "Miners: " + game.workers.miner;
	document.getElementById("currentCollector").innerText = "Collectors: " + game.workers.collector;
	document.getElementById("currentFarmers").innerText = "farmers: " + game.workers.farmer;
}

setInterval(update(), 10);
