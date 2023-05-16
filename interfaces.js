var aneta = {
    name: "Aneta",
    id: 2,
    isManager: false,
    getUniqueId: function () {
        var uniqueId = aneta.name + "-" + aneta.id;
        if (!aneta.isManager) {
            return "emp=" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(aneta.getUniqueId());
var alex = {
    name: "Alex",
    id: 1,
    isManager: true,
    getUniqueId: function () {
        var uniqueId = alex.name + "-" + alex.id;
        if (alex.isManager) {
            return "manager =" + uniqueId;
        }
        return uniqueId;
    }
};
console.log(aneta.getUniqueId());
console.log(alex.getUniqueId());
