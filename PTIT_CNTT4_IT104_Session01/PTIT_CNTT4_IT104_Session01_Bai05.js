const response = {
    data: {
        id: 1,
        title: "Destructuring in Javascript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};
const { title,author } = response.data;
const { name: authorName, email: authorEmail } = author;
console.log("Title:", title);
console.log("Author Name:", authorName);
console.log("Author Email:", authorEmail);


