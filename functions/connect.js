import WebSocket from "ws";
function encodeStuff(name, skinId){
    const t = new DataView(new ArrayBuffer(2 + 2 * name.length));
    t.setUint8(0, 1);
    t.setUint8(1, skinId);
    for (let e = 0, i = name.length; e < i; e++) {
      t.setUint16(2 + 2 * e, name.charCodeAt(e), true);
    }
    return t.buffer;
}
export default function (
    /**
     * Server ID (subdomain)
     * @type {"ffa1" | "ffa2" | "ffa3" | "ffa4" | "ffa5" | "ffa6" | "ffa7" | "ffa8" | "ffa9" | "ffa10"}
     */
    server,
    /**
     * Nickname to be connected with. Can be changed mid-game.
     * @type {string}
     */
    nickname,
    /**
     * The IP address is spoofable! Choose an ip address to be connected with.
     * @default "147.23.57.7"
     * @type {string}
     */
    ip = "147.23.57.7",
    /**
     * Skin ID to be connected with. List is at ../types/skins.ts
     * @type {string}
     */
    skin
) {
    return new Promise((resolve, reject) => {
        const ws = new WebSocket(`wss://${server}.craftnite.io/s`)
        ws.on("open", () => {
            //the following is taken from yo.js
            const t = new ArrayBuffer(2)
            const e = new DataView(t);
            e.setUint8(0, 13);
            e.setUint8(1, 26);
            ws.send(e.buffer);

            //more stuff taken from yo.js
            ws.send(encodeStuff(`${nickname}§${ip}`, skin))

            resolve(ws)
        })
    })
}