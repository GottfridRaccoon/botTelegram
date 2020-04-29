export default async function getValue(queue) {
    // переписать парсер в объекты 

    let eventParse = {};

    for (let k in queue) {

        if (typeof(queue[k]) === 'object') {
            //queue = queue[k]
            await getValue(queue[k])


        } else {
            eventParse[k] = await queue[k]
                //console.dir(`k = ${k}   queue = ${queue} quek =${queue[k]}`)

        }
        console.dir('event  value ' + k + " : " + eventParse[k])
    }



}