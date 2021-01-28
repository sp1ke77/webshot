const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");
const section3 = document.getElementById("section3");
const resultImg = document.getElementById("resultImg");
const View = document.getElementById("ViewButton");

const submitBtn = document.getElementById("submitBtn");


const generateWireframe = () => {
  const websiteAdress = document.getElementById("websiteAdress").value;
  const bgColor = document.getElementById("bgColor").value;
  const wireframe =
    "https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=" +
    websiteAdress +
    "&color=" +
    bgColor;
  console.log(wireframe);
  resultImg.src = wireframe;

  section1.style.display = "none";
  section2.style.display = "block";

  View.addEventListener("click", function () {
    window.open(wireframe);
  });
};

const changeView = () => {
  setTimeout(() => {
    section2.style.display = "none";
    section3.style.display = "block";
  }, 6500);
};