// Mathematical operations
let numbers = [1, 2, 3, 4];
let squared_numbers = numbers.map(n => Math.pow(n, 2));
// console.log(squared_numbers);





// Closures

function createCounter() {
    let count = 0;
    return function () {
        return ++count;
    };
}

/*
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
*/

function makeCounter(step_size) {
    let count = 0;
    count_function = function () {
        count = count + step_size
        return count
    }
    return count_function 
}

/*
const counter_by_five = makeCounter(step_size = 5);
console.log(counter_by_five());
console.log(counter_by_five());
console.log(counter_by_five());
console.log(counter_by_five());
console.log(counter_by_five());
console.log(counter_by_five());
console.log(counter_by_five());
*/


function createBidirectionalCounter(step_size = 1) {
    let count = 0;
    const increment = function () {
        count = count + step_size
        return count
    }
    const decrement = function () {
        count = count - step_size
        return count
    }
    const reset = function () {
        count = 0
        return count
    }
    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    }
}

const counter = createBidirectionalCounter(step_size = 5);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.decrement());





















