function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        great_magicians.push("".concat(magician, " the Great"));
    }
    return great_magicians;
}
var magicians = ["David Copperfield", "Penn Jillette", "Teller", "Derren Brown"];
var great_magicians = make_great(magicians.slice());
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Great Magicians:");
show_magicians(great_magicians);
