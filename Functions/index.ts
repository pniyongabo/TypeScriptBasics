// function pow(x, y) {
//     return Math.pow(x, y);
// }

// pow("2", "3"); // this would fail at run-time

function pow(x: number, y: number): string {
    return Math.pow(x, y).toString();
}

pow(2, 3);

function printSomething(z: string, w?: string): void { 
    console.log(z);
    if (w !== undefined) {
        console.log(w)
    }
}

printSomething("hello World!")
printSomething("hello World!", "Hello Again!")

