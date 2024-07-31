player.onChat("move forward", function () {
    agent.move(FORWARD, 1)
})
player.onChat("move right ", function () {
    agent.move(RIGHT, 1)
})
player.onChat("move back", function () {
    agent.move(BACK, 1)
})
player.onChat("move left ", function () {
    agent.move(RIGHT, 1)
})
player.onChat("dance", function () {
    agent.move(FORWARD, 2)
    agent.move(RIGHT, 1)
    agent.move(LEFT, 1)
    agent.move(UP, 3)
})
player.say("Hello!")
