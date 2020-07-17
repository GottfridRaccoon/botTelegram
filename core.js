//import telegram from './telegram.js';
//import Query from './link.js';
//let Queue = require('./event_array');
//let Maria = require ('./database.js')
//  Maria()
//import Queue from './event_array.js';
import Queue from './queue.js'
import child_process from 'child_process'
//import parse_list from "./parse_list.js"
//запрос из ядра на получение сообщений, 
//import process from "./process_module.js"
import { serverProc } from "./server_process.js"
import repl from "repl"
const queue = new Queue();
//const process_module = new Process(null, 0)
let processList = []
import config from "config"
const signal = config.get("signal.value")
    //let Process = new process()
    //let app = new App();
    //console.dir(app.messages)
    //Query();
    //setInterval(() => {
    //if (app.messages != undefined) {
    //   queue.put(app.messages)
    //   console.log(queue.pick())
    //}
    //}, 2000)


//   parse_list(app.messages)


// console.dir(queue.pick())

const telegram_child = child_process.fork('./telegram.js');
telegram_child.on('message', code => console.log(`At telegram module : ${code}`));
telegram_child.on('exit', code => `Telegram_process exited. Code : ${code}`);
console.log(`i am a core, my process id is : ${process.pid}`);


new serverProc(telegram_child.pid)

//Process.getSignalProcess(telegram_child.pid)



//process_module.killProcess(telegram_child.pid)


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