function displayUserInfo(user) {
    const {
        name,
        age,
        location: { city, country },
        job: { title = "unknown", company = "unknown" } = {},
        contact: { email = "unknown", phone = "unknown" } = {}
    } = user;

    return `${name} is ${age} years old, lives in ${city}, ${country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`;
}
console.log(displayUserInfo({
    name: "Anna",
    age: 30,
    location: { city: "Da Nang", country: "Vietnam" },
    job: { title: "Engineer", company: "ABC Corp" },
    contact: { email: "anna@example.com", phone: "0987654321" }
}));
console.log(displayUserInfo({
    name: "Bob",
    age: 40,
    location: { city: "Hue", country: "Vietnam" }
}));

