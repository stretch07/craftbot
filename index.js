import connect from "./functions/connect.js"
import sendChat from "./functions/sendChat.js"

export default class Craftbot {
    constructor(){
        // uh nothing yet
    }
    async connect(server) {
        console.log("Connecting to " + server)
        this.SOCKET = await connect(server)
        console.log( server + " connection finished")
    }
    async sendChat(msg) {
        this.SOCKET.send(await sendChat(msg))
    }
}

let thing = new Craftbot
await thing.connect("ffa1")
await thing.sendChat("yo")