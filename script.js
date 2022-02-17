const time = Date.now();
const today = new Date(time);
const greetingTime = new Date(time).getHours();
const greetingTitle = document.querySelector("h2");
const todaysDate = document.getElementById("date");
const quote = document.querySelector("blockquote");
const author = document.getElementById("author");
let greeting;

const headers = new Headers();
headers.set("X-Content-Type-Options", "nosniff");

const url = "https://quotes.rest/qod?language=en";

if (greetingTime < 12) greeting = "Good Morning! Your Quote of the Day:";
else if (greetingTime >= 12 && greetingTime <= 17)
  greeting = "Good Afternoon! Your Quote of the Day:";
else if (greetingTime >= 17 && greetingTime <= 24)
  greeting = "Good Evening! Your Quote of the Day:";

greetingTitle.textContent = greeting;
todaysDate.textContent = today.toDateString();

const getApi = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  quote.textContent = `"${data.contents.quotes[0].quote}"`;
  author.textContent = data.contents.quotes[0].author;
};
getApi(url);

console.log(
  "Good day my dev friend that inspects this! This API may take awhile to load in, so stay patient! I should add a rotating loading spinner huh?? <--- TODO"
);
