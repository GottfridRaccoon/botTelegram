   import child_process from 'child_process';
   import config from "config"
   const signal = config.get("signal.value")
       //import process from "process"


   export default class Process {


       constructor(processId) {
           this.processId = processId;
           // this.processValue = processValue;
           this.readsignal
       }


       // async returnSignal(item) {
       //   this.readsignal = await item
       //    console.dir(item)
       //  }

       killProcess(item) {
           //  const item = this.command; 
           process.kill(item);
           console.log(`proces [${item}] has been killed`);
       }
       setSignalProcess(item) { // задает сигнал процессу каждые  милисекунд

           setInterval(() => {
               //  returnSignal(item)
               this.readsignal = item
                   // this.readsignal.write(item)
                   //this.readsignal = new Buffer(item.toString(), "utf-8")
                   //   process.stdout.write(this.processId, )
                   //this.readsignal = process.send(this.processId)



           }, signal)
       }
       getSignalProcess(item) {

           let interval = setInterval(killSignal, signal * 1.5)

           function killSignal() {

               // let read = process.stdin.read()
               if (typeof this.processId == "undefined") {
                   clearInterval(interval)
                   console.dir(this.readsignal)
                   console.error(`ERR : The process ${item} killed, timing is out`)
                   return process.kill(item)

                   // console.dir("unfefined " + idProcess)
                   // console.dir("unfefined " + readsignal)


               } else {
                   console.log("Procss is live")
                       //this.processId = undefined
                       // console.dir("n unfefined " + idProcess)
               }
           }



           //stdout - подключить к дочерним процессам
           // stdin - ядру 



       }

   }