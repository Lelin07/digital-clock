let count = 0;

const id = setInterval(() => {
  const wakt = new Date();

  let hours = wakt.getHours().toString().padStart(2, 0);
  let meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  let randomR = Math.floor(Math.random() * 256);
  let randomG = Math.floor(Math.random() * 256);
  let randomB = Math.floor(Math.random() * 256);

  let randomColor = `rgba(${randomR},${randomG},${randomB}, ${0.15})`;
  const minutes = wakt.getMinutes().toString().padStart(2, 0);
  const seconds = wakt.getSeconds().toString().padStart(2, 0);
  const time = `${hours}:${minutes}:${seconds} ${meridiem}`;

  document.getElementById("clock").textContent = time;
  document.getElementById("clock").style.backgroundColor = randomColor;
  document.getElementById("clock").style.border = `5px solid ${randomColor}`;

  count ++;
  console.log(`Random color ${count} : ${randomColor}`);
}, 1000);
