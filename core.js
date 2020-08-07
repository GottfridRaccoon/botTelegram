//import telegram from './telegram.js';
//import Query from './link.js';
//let Queue = require('./event_array');
//let Maria = require ('./database.js')
//  Maria()
//import Queue from './event_array.js';
import Queue from './queue.js'
import child_process from 'child_process'
import parse_list from "./parse_list.js"
//запрос из ядра на получение сообщений, 
import Process from "./process_module.js"
//import { serverProc } from "./server_process.js"
import repl from "repl"
const queue = new Queue();
//const process_module = new Process(null, 0)
let processList = []
import config from "config"
const signal = config.get("signal.value")
import net from "net"
const process_module = new Process()

const test_child = child_process.fork('./client_proc.js')
const telegram_child = child_process.fork('./telegram.js');
telegram_child.on('message', code => console.log(`At telegram module : ${code}`));
telegram_child.on('exit', code => `Telegram_process exited. Code : ${code}`);
console.log(`i am a core, my process id is : ${process.pid}`);


const Pids = [telegram_child.pid, test_child.pid]
let Signal = {}
let time



setInterval(() => {
    time = process.hrtime()
}, 100)








class serverProc {
    constructor(valuePid) {
            this.valuePid = valuePid
            console.log(this.valuePid)
        } //Содержит пиды подпроцессов



}

class getSignal extends serverProc {
    constructor(valuePid) {
        super(valuePid) //Наследуется pid модуля

        /*TODO: написать подкласс который будет содержать в себе функцию- генератор*/


    }

    checkSignal() {

        setInterval(() => { //проверка пидов на сигнал
            for (const [key, value] of Object.entries(Signal))
                if (value[0] <= time[0] - (signal / 2)) {
                    // попробовать hrtime
                    //  console.dir(`no signal from ${this.valuePid}`)
                    // process_module.killProcess(this.valuePid)
                    // посылать сигнал ядру про тото тото  раотает или нет
                    console.log(time[0] + " : time \n" + value[0])
                } else {

                    console.dir(`Signal give at ${time[1]}`)
                    console.dir(Signal)
                        // Signal = 0
                }
        }, signal)

    }


}


let signalGet = new getSignal()
signalGet.checkSignal()






const server = net.createServer(conn => {
    conn.setEncoding('utf-8')
    conn.on("data", data => {

        Signal[data] = time
        console.log(Signal)
    })
})
server.setMaxListeners(0)

server.listen(8214)




const prompts = {
    prompt: "=> ",
    kill: "kill => "
}



const replBot = repl.start({
    prompt: `${prompts.prompt} `,
    useColors: true
});



replBot.defineCommand('kill_process',
    //
    kill => {
        repl.start({ prompt: `${prompts.kill}` })
        switch (kill) {
            case ("telegram"):
                //  replBot(prompts.kill)
                process_module.killProcess(telegram_child.pid)


        }
        repl.start({ prompt: `${prompts.prompt}` })

    }
)



//TODO Добавление айди последнего сообщения и записать его в переменную из update