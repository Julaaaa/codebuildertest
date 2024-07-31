def on_on_chat():
    agent.move(FORWARD, 2)
    agent.move(RIGHT, 1)
    agent.move(LEFT, 1)
    agent.move(UP, 3)
player.on_chat("dance", on_on_chat)

player.say("Hello!")