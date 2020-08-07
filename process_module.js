import config from "config"
const signal = config.get("signal.value")
    //import process from "process"






export default class Process {


    constructor() {



    }


    /// readproxy = new Proxy(this.readsignal, this.handler)


    // async returnSignal(item) {
    //   this.readsignal = await item
    //    console.dir(item)
    //  }

    killProcess(item) {
            //  const item = this.command; 
            process.kill(item);
            console.log(`proces [${item}] has been killed`);
        }
        //  set read(item) {
        //    this.readsignal = item
        // }





    // sett = setInterval(this.setSignalProcess, signal)
    // serSignalProcess = setInterval(this.setSignalProcess, signal);





}



// clearInterval(interval)




//  }
//  this.killSignal()


//  setTimeout(getSignalProcess, 3000000);


class subProcess extends Process {


    processId
    mainProcessId
    constructor(mainProcessId, processValue) {
        super(processValue)
        this.mainProcessId = mainProcessId

    }

    setSignalProcess(value) { // задает сигнал процессу каждые  милисекунд

        // this.readsignal = new Buffer(String(item))
        this.processId = value
        console.dir(value)


    }



}
class mainProcess extends Process {
    constructor(processValue) {
        super(processValue)
    }


    getSignalProcess(item) { // item есть pid  дочернего процесса

        //    let interval = setInterval(killSignal.bind(this), signal * 3)



        /*каждые n миллисекунд проверяет наличие сигнала
            если сигнал прнисутствует, то обнляет сигнал.
            В противном случае убивает процесс
        */

        if (this.processConst == 0) {

            console.dir(this.readsignal)
            console.error(`ERR : The process ${item} killed, timing is out`)
            return process.kill(item)

        } else if (this.processConst == 1) {

            console.log("Procss is live")
            this.processConst = 0
        }
    }
}