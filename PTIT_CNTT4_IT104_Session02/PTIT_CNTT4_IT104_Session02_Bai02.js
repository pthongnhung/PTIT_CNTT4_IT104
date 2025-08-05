let greetingWithWeather = (name, weather) => {
    if (weather == "sunny") {
        console.log(`Chao ${name}! Hom nay troi nang tuyet voi`);
    } else if (weather == "rainy") {
        console.log(`Chao ${name}! Hom nay troi mua`);
    } else {
        console.log(`Chao ${name} hom nay thoi tiet khong xac dinh`);

    }
}
greetingWithWeather("Nguyen An", "sunny");
greetingWithWeather("Le Nam", "rainy");
greetingWithWeather("Tran tam", "cloudy");
