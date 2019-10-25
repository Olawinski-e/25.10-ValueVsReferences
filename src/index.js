import "./styles.css";

// let price1 = 20.99;
// let price2 = 20.99;
// console.log(price1 === price2) ; // <== true

// let name1 = "Ana";
// let name2 = "Ana";
// console.log(name1 === name2); // <== true

const book1 = {
  author: "Charlotte Bronte"
};

const book2 = Object.assign({}, book1);

console.log(book2); // <== { author: "Charlotte Bronte" }
console.log(book1 === book2); // <== false

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
