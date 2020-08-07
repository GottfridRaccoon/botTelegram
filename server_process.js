//import net from "net"


import config from "config"
const signal = config.get("signal.value");

import  setConnection  from "./client_proc.js"
let connect  = new setConnection()

setInterval(() => {
    connect.setConnect(process.pid.toString())
}, signal / 2)



//server.on("connection", () => {
//   if (typeof(conn) == "undefined" || 0) {

//     console.dir(this.readsignal)
//       console.error(`ERR : The process ${item} killed, timing is out`)
//      return process.kill(item)

//   } else if (processSignal == 1) {

//      console.log("Procss is live")
//      processSignal = 0
//   }
//})