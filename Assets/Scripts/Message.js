// does this deserve its own file?

class Messages {
    static messages = [
        "Cones are cool.",
        "You're cool! No cap.",
        "\"Malware isnt your biggest danger, it's proxies.\" -Lightspeed",
        "#1 cornball",
        "Gorilla Tag is vibe coded.",
        "Java sucks but C# doesnt",
        "My friends would call this site 100% AI.",
        "Guess what: I don't even play Minecraft yet this site has many references to it.",
        "It's Shock O'Clock 🔥",
        "Man, I just wanna play Golden Trophy. RIP Rec Room."
    ]

    static GetMessage() {
        return this.messages[Math.floor(Math.random() * this.messages.length)]
    }
}