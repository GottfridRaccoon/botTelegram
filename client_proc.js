 import net from 'net'
 import config from "config";
 let client = new net.Socket();
 client.setEncoding("utf-8")


 export default class setConnection  {
     constructor(){}

     setConnect(value){

     client.connect(8214, "localhost", () => {

         client.write(value)
             //process.stdin.resume()
         client.end()

     })
     client.on("data", data => console.log(data))
         //client.on("close", () => console.log("connection has been closed"))
     }

 }

