const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

for (let i = 0; i < 10; i++) console.log(random(1000, 9999));
