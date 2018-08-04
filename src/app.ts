/**
 * typescript
 */

enum PostStatus {
    Unpulished,
    Published,
    Draft,
}

interface Post {
    title: string;
    content?: string;
    status: PostStatus;
}

let post: Post = {
    title: 'One Day',
    // content: 'foo lalala',
    status: PostStatus.Draft,
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);