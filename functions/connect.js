import WebSocket from "ws";
export default async function (
    /**
     * Server ID (subdomain)
     * @type {"ffa1" | "ffa2" | "ffa3" | "ffa4" | "ffa5" | "ffa6" | "ffa7" | "ffa8" | "ffa9" | "ffa10"}
     */
    server
) {
    const ws = new WebSocket(`wss://${server}.craftnite.io/s`)
}