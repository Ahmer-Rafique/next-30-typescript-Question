var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placesToVisit = ["Tokyo, Japan", "Barcelona, Spain", "Reykjavik, Iceland", "Cape Town, South Africa", "Rio de Janeiro, Brazil"];
console.log("Original array: ", placesToVisit);
console.log("Alphabetical order: ", __spreadArray([], placesToVisit, true).sort());
console.log("Original array: ", placesToVisit);
console.log("Reverse alphabetical order: ", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Original array: ", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order: ", placesToVisit);
placesToVisit.sort();
console.log("Alphabetical order: ", placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Reverse alphabetical order: ", placesToVisit);
