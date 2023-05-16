interface Employee {
    name: string;
    id: number;
    isManager: boolean;
    getUniqueId: () => string;
}

const aneta: Employee = {
    name: "Aneta",
    id: 2,
    isManager: false,
    getUniqueId: ():string =>{
        let uniqueId = aneta.name + "-" + aneta.id;
        if(!aneta.isManager){
            return "emp=" + uniqueId;
        }
        return uniqueId;
    }
}


const alex: Employee = {
    name: "Alex",
    id: 1,
    isManager: true,
    getUniqueId: ():string =>{
        let uniqueId = alex.name + "-" + alex.id;
        if(alex.isManager){
            return "manager =" + uniqueId;
        }
        return uniqueId;
    }
}
console.log(aneta.getUniqueId());
console.log(alex.getUniqueId());