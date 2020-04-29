export default class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    put(item) {
        const last = this.last
        const elem = { next: null, item }
        if (last) {
            last.next = elem;
            this.last = elem;
        } else {
            this.first = elem;
            this.last = elem;
        }
    }
    pick() {
        const elem = this.first;
        if (!elem) return null
        else if (this.last === elem) {
            this.first = null;
            this.last = null;
        } else {
            this.first = elem.next
        }
        return elem.item;
    }



};

//const obj1 = { name: 'Boris' };
//const obj2 = { name: 'Nickola' };
//const obj3 = { name: 'Ivan' };

//const queue = new Queue();
//queue.put(obj1);
//queue.put(obj2);
//queue.put(obj3);

// console.dir(queue.pick())
// console.dir(queue.pick())
// console.dir(queue.pick())