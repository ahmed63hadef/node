let init = {
  method: "POST",
  headers: {
    "Content-Type": "Application/json",
  },
  body: JSON.stringify({
    pseudo: "Ahmed Hadef",
    message: "coucou les gens",
  }),
  mode: "cors",
  Credential: "same-origin",
};

document.querySelector("form").addEventListener("submit", () => {
  fetch("http://localhost:3000/post", init).then(() =>
    console.log("data envoyé")
  );
});
