function displayBook(response) {
  new Typewriter("#book", {
    strings: response.data.answer,
    autoStart: true,
    cursor: " ",
    delay: 15,
  });
}

function generateBook(value) {
  value.preventDefault();
  let userInstruct = document.querySelector("#user-instructions");
  let apiKey = "edf069311acf2bebo10f4bbbc53249t3";
  let prompt = `Generate a book recommendation from ${userInstruct.value}`;
  let context =
    "You are a knowledgeable book reader, and love books from lots of different genres. You are aiming to educate people all over the world about books. Therefore, when the user types in a genre, please respond with a book recommendation, with 100 words about why they should read it. Put the book title with a mobile responsive book emoji in a left-aligned <h2> tag before you go onto why the reader should read it. Insert <p> </p> after every three sentences. Please be polite and concise. Sign off as BookBot AI with a mobile responsive book emoji with a four space indent and in <b></b>. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let bookElement = document.querySelector("#book");
  bookElement.classList.remove("hidden");
  bookElement.innerHTML = `<span class ="blink">⌛<b>BookBot AI</b> is finding you the right book from the <b>${userInstruct.value}</b> genre...📚⌛</span`;
  axios.get(apiUrl).then(displayBook);
}
let bookFormElement = document.querySelector("#book-form");
bookFormElement.addEventListener("submit", generateBook);
