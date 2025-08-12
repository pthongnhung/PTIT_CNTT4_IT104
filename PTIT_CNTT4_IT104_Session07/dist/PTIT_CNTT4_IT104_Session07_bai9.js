class Comment {
    constructor(id, userId, content) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }
    addReply(reply) {
        this.replies.push(reply);
    }
}
class Post {
    static getById(id) {
        return this.store.get(id);
    }
    constructor(userId, content) {
        this.id = Post.nextId++;
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
        Post.store.set(this.id, this);
    }
    addLike(userId) {
        if (!this.likes.includes(userId))
            this.likes.push(userId);
    }
    addComment(comment) {
        this.comments.push(comment);
    }
}
Post.nextId = 1;
Post.store = new Map();
class User {
    constructor(id) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }
    createPost(content) {
        const post = new Post(this.id, content);
        this.posts.push(post);
    }
    comment(postId, commentContent) {
        const post = Post.getById(postId);
        if (post) {
            const cmt = new Comment(post.comments.length + 1, this.id, commentContent);
            post.addComment(cmt);
        }
    }
    follow(user) {
        if (!this.followers.includes(user) && user !== this)
            this.followers.push(user);
    }
    likePost(postId) {
        const post = Post.getById(postId);
        if (post)
            post.addLike(this.id);
    }
    viewFeed() {
        console.log(`Bảng tin của user ${this.id}:`);
        this.followers.forEach(u => {
            u.posts.forEach(p => console.log(`${p.id} user ${p.userId}: ${p.content}`));
        });
    }
}
// Demo
const A = new User(1);
const B = new User(2);
const C = new User(3);
A.createPost("A: xin chào");
B.createPost("B: hôm nay học dốt quá huhu");
C.createPost("C: Đúng! học dốt thật");
A.follow(B);
A.follow(C);
A.viewFeed();
A.likePost(2);
C.comment(2, "Chuẩn quá B ơi");
console.log(Post.getById(2));
