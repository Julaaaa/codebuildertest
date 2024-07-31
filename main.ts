player.onChat("dance", function () {
    agent.move(FORWARD, 2)
    agent.move(RIGHT, 1)
    agent.move(LEFT, 1)
    agent.move(UP, 3)
})
player.say("Hello!")
