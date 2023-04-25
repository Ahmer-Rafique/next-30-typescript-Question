function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, modelName: modelName, options: {} };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car.options[key] = value;
    });
    return car;
}
var car = createCar("Tesla", "Model S", colour, "red", autopilot, true);
console.log(car);
