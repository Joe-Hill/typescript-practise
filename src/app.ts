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

console.log(post)