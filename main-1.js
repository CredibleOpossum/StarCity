var game = {
    resources = {
        wood: 0,
        wheat: 0,
    },
};

function collect(resources) {
    game.resources[resource]++; //Should increase the number of the clicked button
    update();
};

setInterval(main, 1000); //the "main" every second