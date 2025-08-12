class Comment {
    public id: number;
    public userId: number;
    public content: string;
    public replies: Comment[];

    constructor(id: number, userId: number, content: string) {
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.replies = [];
    }

    public addReply(reply: Comment): void {
        this.replies.push(reply);
    }
}

class Post {
    private static nextId = 1;
    private static store = new Map<number, Post>();

    public static getById(id: number): Post | undefined {
        return this.store.get(id);
    }

    public id: number;
    public likes: number[];
    public comments: Comment[];
    public userId: number;
    public content: string;

    constructor(userId: number, content: string) {
        this.id = Post.nextId++;
        this.likes = [];
        this.comments = [];
        this.userId = userId;
        this.content = content;
        Post.store.set(this.id, this);
    }

    public addLike(userId: number): void {
        if (!this.likes.includes(userId)) this.likes.push(userId);
    }

    public addComment(comment: Comment): void {
        this.comments.push(comment);
    }
}

class User {
    public id: number;
    public posts: Post[];
    public followers: User[];

    constructor(id: number) {
        this.id = id;
        this.posts = [];
        this.followers = [];
    }

    public createPost(content: string): void {
        const post = new Post(this.id, content);
        this.posts.push(post);
    }

    public comment(postId: number, commentContent: string): void {
        const post = Post.getById(postId);
        if (post) {
            const cmt = new Comment(post.comments.length + 1, this.id, commentContent);
            post.addComment(cmt);
        }
    }

    public follow(user: User): void {
        if (!this.followers.includes(user) && user !== this) this.followers.push(user);
    }

    public likePost(postId: number): void {
        const post = Post.getById(postId);
        if (post) post.addLike(this.id);
    }

    public viewFeed(): void {
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
