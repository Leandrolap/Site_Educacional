const imgs = document.querySelectorAll(".slider img");
let currentIndex = 0;
let time = 4000; //Tempo padrão para apresentação de slides automática
const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[index].style.display = "block";
};
defClass(1, 0);

const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length - 1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};
startAutoSlide(); //Inicia o slideshow