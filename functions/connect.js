import WebSocket from "ws";
export default function (
    /**
     * Server ID (subdomain)
     * @type {"ffa1" | "ffa2" | "ffa3" | "ffa4" | "ffa5" | "ffa6" | "ffa7" | "ffa8" | "ffa9" | "ffa10"}
     */
    server
) {
    return new Promise((resolve, reject) => {
        const ws = new WebSocket(`wss://${server}.craftnite.io/s`)
        ws.on("open", () => {
            resolve(ws)
        })
    })
}