const fs = require("fs");
const BOOKS1 = require("./data/books1.json");
const BOOKS2 = require("./data/books2.json");
const IMAGES = require("./data/images.json");

const data = [];

const imageScript = () => {
  for (let i = 0; i < BOOKS1.length; i++) {
    let book = BOOKS1[i];

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
};

const addPropertiesToData = () => {
  for (let i = 0; i < BOOKS2.length; i++) {
    const properties = {
      price: Math.round(Math.random() * 100),
      rating: Math.round(Math.random() * 5),
      reviews: Math.round(Math.random() * 500),
    };

    const item = { ...BOOKS2[i], ...properties };
    data.push(item);
  }
};

addPropertiesToData();
fs.writeFileSync("./data/books.json", JSON.stringify(data));
