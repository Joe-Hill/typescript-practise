"use strict";
/**
 * typescript
 */
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Unpulished"] = 0] = "Unpulished";
    PostStatus[PostStatus["Published"] = 1] = "Published";
    PostStatus[PostStatus["Draft"] = 2] = "Draft";
})(PostStatus || (PostStatus = {}));
var post = {
    title: 'One Day',
    // content: 'foo lalala',
    status: PostStatus.Draft,
};
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
