function generateBook(value) {
  value.preventDefault();
  let bookBox = document.querySelector(".book");

  new Typewriter(".book", {
    strings: "The best genre is horror",
    autoStart: true,
    cursor: " ",
    delay: 15,
  });
}

let bookFormElement = document.querySelector("#book-form");
bookFormElement.addEventListener("submit", generateBook);
