const data = {
  dennis: {
    img: "images/dennis.jpg",
    name: "Dennis Ritchie",
    text: "Dennis Ritchie created the C programming language and co-developed Unix."
  },
  james: {
    img: "images/james.jpg",
    name: "James Gosling",
    text: "James Gosling is the founder and lead designer of Java."
  },
  guido: {
    img: "images/guido.jpg",
    name: "Guido van Rossum",
    text: "Guido van Rossum created Python with a focus on readability."
  },
  bjarne: {
    img: "images/bjarne.jpg",
    name: "Bjarne Stroustrup",
    text: "Bjarne Stroustrup created C++, an extension of the C language."
  },
  brendan: {
    img: "images/brendan.jpg",
    name: "Brendan Eich",
    text: "Brendan Eich created JavaScript in just 10 days."
  },
  niklaus: {
    img: "images/niklaus.jpg",
    name: "Niklaus Wirth",
    text: "Niklaus Wirth created Pascal, Modula, and Oberon."
  },
  john: {
    img: "images/john.jpg",
    name: "John McCarthy",
    text: "John McCarthy invented Lisp and coined the term Artificial Intelligence."
  },
  grace: {
    img: "images/grace.jpg",
    name: "Grace Hopper",
    text: "Grace Hopper developed COBOL and was a pioneer in computer programming."
  },
  anders: {
    img: "images/anders.jpg",
    name: "Anders Hejlsberg",
    text: "Anders Hejlsberg created Turbo Pascal and contributed to C#."
  },
  yukihiro: {
    img: "images/yukihiro.jpg",
    name: "Yukihiro Matsumoto",
    text: "Yukihiro Matsumoto created the Ruby programming language."
  }
};

const select = document.getElementById("inventorSelect");
const infoBox = document.getElementById("infoBox");
const img = document.getElementById("inventorImg");
const text = document.getElementById("inventorText");
const nameBox = document.getElementById("inventorName");

select.addEventListener("change", () => {
  const value = select.value;

  if (value && data[value]) {
    img.src = data[value].img;
    nameBox.textContent = data[value].name;
    text.value = data[value].text;
    infoBox.style.display = "flex";
  } else {
    infoBox.style.display = "none";
  }
});

