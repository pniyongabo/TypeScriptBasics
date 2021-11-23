// function pow(x, y) {
//     return Math.pow(x, y);
// }

// pow("2", "3"); // this would fail at runtime

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

printSomething("Hello World!")
printSomething("Hello World!", "Hello Again!")

