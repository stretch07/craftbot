export default async function (
    /**
     * message to be sent
     * @type {string}
     */
    msg,
) {
    //see craftnite.io/yo.js (code taken from there)
    let data = new DataView(new ArrayBuffer(1 + 2 * msg.length));
    data.setUint8(0, 27);
    for (let e = 0, i = msg.length; e < i; e++) {
        data.setUint16(1 + 2 * e, msg.charCodeAt(e), !0);
    }
    return data.buffer
}