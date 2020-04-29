export default () => {

    class Queue {
        size = 0;
        array = [];

        constructor(size) {
            this.size = size;
        }
        get() {
            return this.size
        }

        push(element) {

            if (typeof(element) === "undefined") {
                console.error("Значение не определено")
            } else if (element.replace(/ +/g, ' ').trim() == "") {
                console.error("пустое значение")
            } else {
                element.push(this.array);
                this.size = this.array.length;

            }

        }
        pull() {

            let element = this.array.pop();
            this.size = this.array.length;
            return element;


        }
        read() {
            return this.array[this.array.legth - 1];
        }
    }
}