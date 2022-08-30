class RecentCounter {
    constructor() {
        this.queue = []
    }

    ping(t) {
        this.queue.push(t)
        while (this.queue[0] < t - 3000){
            this.queue.shift()
        }

       return this.queue.length

    }
}

const a = new RecentCounter()
console.log(a.ping());
// console.log(a.ping(1));
// console.log(a.ping(100));
// console.log(a.ping(3001));
// console.log(a.ping(3002));

