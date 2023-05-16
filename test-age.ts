interface User {
    name: string;
    age: number;
}

function canDrive(usr: User){
    console.log("Kierowca:",usr.name);
    
    if(usr.age >= 16){
        console.log("Możesz prowadzić");
    }else{
        console.log("Nie możesz prowadzić");
    }
}

const tom: User = {
    name: "Tom",
    age: 25
}

canDrive(tom);