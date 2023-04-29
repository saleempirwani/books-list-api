const BOOKS = require("./data/books1.json");
const IMAGES = require("./data/images.json");

const data = [];

for (let i = 0; i < BOOKS.length; i++) {
  let book = BOOKS[i];

  for (let j = 0; j < IMAGES.length; j++) {
    const image = IMAGES[j];
    let image_name = image.slice(image.lastIndexOf("/") + 1, image.length);

    if (book.imageLink === image_name) {
      //   console.log();
      book = { ...book, imageLink: image };
      data.push(book);
    }
  }
}

console.log("first", JSON.stringify(data));
