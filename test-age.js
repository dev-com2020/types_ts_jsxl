function canDrive(usr) {
    console.log("Kierowca:", usr.name);
    if (usr.age >= 16) {
        console.log("Możesz prowadzić");
    }
    else {
        console.log("Nie możesz prowadzić");
    }
}
var tom = {
    name: "Tom",
    age: 25
};
canDrive(tom);
