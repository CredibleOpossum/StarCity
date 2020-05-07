var game = {
    resources = {   //the resources
        stick: 0,
        wheat: 0,
        stone: 0,
    },

    workers = { // the workers
        miner: 0,
        collector: 0,
        farmer: 0,
    },

    resourcesPsecond = { // the resources per second
        stickPs: 0,
        wheatPs: 0,
        stonePs: 0 ,
    },
};

function collectWheat() {
    game.resources.wheat += 1 //Should increase the wheat
    update();
};

function collectStick() {
    game.resources.stick += 1 //Should increase the sticks
    update();
};

function buyMiner() {
    if (game.resources.wheat = 10) {
        game.workers.miner += 1,//should give you a miner
        game.resourcesPsecond.stonePs += 1,
        update();
    }
}

function buycollector() {
    if (game.resources.wheat = 10) {
        if (game.resources.sticks - 10) {
            game.workers.collector += 1, //Should give a collector
            game.resourcesPsecond.stickPs += 1,
            update();
        }
    }
}

function buyfarmer() {
    if (game.resources.wheat = 10) {
        game.workers.farmer += 1, //should give farmer
        game.resourcesPsecond.wheatPs += 1,
        update();
    }
}

setInterval(main, 1000);    //the "main" every second