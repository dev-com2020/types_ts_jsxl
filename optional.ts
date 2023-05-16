namespace Optional{
    interface Wheels{
        count?: number;
    }
    interface Vehicle{
        wheels?: Wheels;
}
class Automobile implements Vehicle{
    constructor(public wheels?: Wheels){}
}

const bmw: Automobile | null = new Automobile({count: undefined});

console.log(bmw);
console.log(bmw?.wheels);
console.log(bmw?.wheels?.count);
}   