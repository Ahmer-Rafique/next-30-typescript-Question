var current_users = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
var new_users = ['Frank', 'Gina', 'alice', 'david', 'Hank'];
var _loop_1 = function (new_user) {
    if (current_users.some(function (user) { return user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("The username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
};
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    _loop_1(new_user);
}
