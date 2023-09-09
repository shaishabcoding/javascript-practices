const randomColor = () => "#" + Math.random().toString(16).slice(2, 8);

for (let i = 0; i < 10; i++) console.log(randomColor());
