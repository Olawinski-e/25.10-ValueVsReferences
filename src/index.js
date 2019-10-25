import "./styles.css";

// let price1 = 20.99;
// let price2 = 20.99;
// console.log(price1 === price2) ; // <== true

// let name1 = "Ana";
// let name2 = "Ana";
// console.log(name1 === name2); // <== true

// const book1 = {
//   author: "Charlotte Bronte"
// };
// const book2 = Object.assign({}, book1);

// console.log(book2);
// console.log(book1 === book2);

// book1.author = "Emily Bronte";
// console.log(book1); // <== { author: 'Emily Bronte' }
// console.log(book2); // <== { author: 'Charlotte Bronte' }

// const book1 = {
//   author: "Charlotte Bronte",
//   publishers: [
//     {
//       companyName: "AB"
//     },
//     {
//       companyName: "CD"
//     }
//   ]
// };
// const book3 = Object.assign({}, book1);

// book1.publishers[0] = {
//   companyName: "Super Cool Company"
// };
// book1.author = "Test Test";
// console.log(book3);

// const book1 = {
//   author: "Charlotte Bronte"
// }
// const book4 = {};

// for(let prop in book1){
//   book4[prop] = book1[prop]
// }

// book1.author = "William Shakespeare";
// console.log(book1);
// console.log(book4);

// const book1 = {
//   author: "Charlotte Bronte",
//   publishers: [
//     {
//       companyName: "AB"
//     },
//     {
//       companyName: "CD"
//     }
//   ]
// };

// function cloneObject(object) {
//   let clone = {};
//   for (let prop in object) {
//     if (object[prop] != null && typeof object[prop] === "object") {
//       clone[prop] = cloneObject(object[prop]);
//     } else {
//       clone[prop] = object[prop];
//     }
//   }
//   return clone;
// }

// let book4 = cloneObject(book1);

// book1.publishers[0] = {
//   companyName: "Super Cool Company"
// };
// book1.author = "William Shakespeare";
// console.log(book1);
// console.log(book4);

// const book1 = {
//   author: "Charlotte Bronte",
//   publishers: [
//     {
//       companyName: "AB"
//     },
//     {
//       companyName: "CD"
//     }
//   ]
// };

// const book5 = JSON.parse(JSON.stringify(book1)); // <== create the copy: book5

// book1.publishers[0] = {
//   companyName: "Super Cool Company" // <== change the deep property of the book1
// };
// book1.author = "William Shakespeare"; // change the property of the book1
// console.log(book1);
// console.log(book5);

//-----------------------------------------------------------------------

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
