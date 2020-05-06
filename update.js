function update() {
    ElementById("currentWood").innerText = "Wood: " + game.resources.wood.toFixed(2)
    ElementById("currentWheat").innerText = "Wheat: " + game.resources.wheat.toFixed(2)
}