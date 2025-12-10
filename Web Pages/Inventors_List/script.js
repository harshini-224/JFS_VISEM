const data = {
dennis: {
img: "images/dennis.jpg",
text: "Dennis Ritchie created the C programming language and co-developed Unix."
},
james: {
img: "images/james.jpg",
text: "James Gosling is the founder and lead designer of Java."
},
guido: {
img: "images/guido.jpg",
text: "Guido van Rossum created Python with a focus on readability."
},
bjarne: {
img: "images/bjarne.jpg",
text: "Bjarne Stroustrup created C++, an extension of the C language."
},
brendan: {
img: "images/brendan.jpg",
text: "Brendan Eich created JavaScript in just 10 days."
},
niklaus: {
img: "images/niklaus.jpg",
text: "Niklaus Wirth created Pascal, Modula, and Oberon."
},
john: {
img: "images/john.jpg",
text: "John McCarthy invented Lisp and coined the term Artificial Intelligence."
},
grace: {
img: "images/grace.jpg",
text: "Grace Hopper developed COBOL and was a pioneer in computer programming."
},
anders: {
img: "images/anders.jpg",
text: "Anders Hejlsberg created Turbo Pascal and led the design of C#."
},
yukihiro: {
img: "images/yukihiro.jpg",
text: "Yukihiro Matsumoto, known as Matz, created the Ruby programming language."
}
};

const select = document.getElementById("inventorSelect");
const infoBox = document.getElementById("infoBox");
const img = document.getElementById("inventorImg");
const text = document.getElementById("inventorText");


select.addEventListener("change", () => {
const value = select.value;
if (value && data[value]) {
img.src = data[value].img;
text.value = data[value].text;
infoBox.style.display = "block";
} else {
infoBox.style.display = "none";
}
});
