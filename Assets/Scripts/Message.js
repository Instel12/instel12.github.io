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
        "Man, I just wanna play Golden Trophy. RIP Rec Room.",
        "\"Follow all your dreams and when you reach them, celebrate. That's the only way to truly make a hater suffocate.\""
    ]

    static GetMessage() { // this is overengineered but all well
        const last = localStorage.getItem("LastMessage") || "";
        let newMsg = this.messages[Math.floor(Math.random() * this.messages.length)];

        while (newMsg == last) {
            newMsg = this.messages[Math.floor(Math.random() * this.messages.length)];
        }

        localStorage.setItem("LastMessage", newMsg);
        return newMsg;
    }
}