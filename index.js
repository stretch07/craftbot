import connect from "./functions/connect"
import sendChat from "./functions/sendChat"

export default class Craftbot {
    constructor(){
        // uh nothing yet
    }
    async connect(server) {
        this.SOCKET = await connect(server)
    }
    async sendChat(msg) {
        this.SOCKET.send(await sendChat(msg))
    }
}