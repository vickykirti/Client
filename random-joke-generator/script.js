const container = document.getElementById("container");
const getJokes = document.getElementById("getJokes");

const API_URL = `https://v2.jokeapi.dev/joke/Any?type=single`;

async function getJoke() {
  const res = await fetch(API_URL);
  const data = await res.json();

  container.innerHTML = data.joke;
}

getJoke();

getJokes.addEventListener("click", getJoke);
