type Style1 = string;
let font1: Style1 = "aria";

type Style2 = 'italic' | 'bold' | 23;
let font2: Style2 = 'italic';

interface Person {
    first: string;
    last: string;
    [key: string]: any;
}

const person1: Person = {
    first: "Usain",
    last: "Bolt",
    fast: true,
}

const person2: Person = {
    first: "Patrick",
    last: "Niyongabo",
    // fast: "Not really!",
}