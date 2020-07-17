//import net from "net"

import net from "net"
import config from "config"
const signal = config.get("signal.value");
let Signal



class serverProc {
    constructor(valuePid) {
        this.ValuePid = valuePid // В конструктор добавить поле signal 
    }
}

// перенести в ядро



class getSignal extends serverProc {
    constructor(valuePid) {
        super(valuePid)

    }
    checkSignal() {
        setInterval(() => {
            if (typeof(Signal) == "undefined" || Signal == 0) {
                console.dir("no signal") // посылать сигнал ядру про тото тото раотает или нет
            } else {
                console.dir(`Signal give at ${Signal}`)
                console.dir(Signal)
                Signal = 0
            }
        }, signal)
    }


}

let signalGet = new getSignal()
signalGet.checkSignal()




const server = net.createServer(conn => {
    //let buff = new Buffer("utf-8")

    conn.setEncoding("utf-8")
        //  process.stdin.resume()



    /* сначала в буффер, потом в пайп 
    погуглить как удалить конеретную запись в пайпе
    */



    conn.on("data", data => {
        Signal = data

        console.log(data)


    })
})
server.listen(8214)


export { serverProc }


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