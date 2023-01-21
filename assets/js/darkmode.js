const btn = document.querySelector(".btn-toggle");

imgDarkMode = (mode) => {
  const imgChange = document.querySelectorAll(".img-darkMode");
  if (mode == "dark") {
    imgChange.forEach(element => {
      let saveSrc = element.src
      saveSrc = saveSrc.split(/(light|dark)/)
      saveSrc[1] = "dark";
      saveSrc = saveSrc.join('')
      element.src = saveSrc
      if (element.tagName == 'LOTTIE-PLAYER') {
       /*  console.log('ver:', element)
        element.load(saveSrc); */
      }
      //console.log("ver aqui", saveSrc)
    });
  } else {
    imgChange.forEach(element => {
      let saveSrc = element.src
      saveSrc = saveSrc.split(/(light|dark)/);
      saveSrc[1] = "light";
      saveSrc = saveSrc.join('');
      element.src = saveSrc;
      if (element.tagName == 'LOTTIE-PLAYER') {
        /* console.log('ver dark:', element)
        element.load(saveSrc); */
      }
    });
  }
};
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
  document.getElementById("flexSwitchCheckDefault").checked = true;
  imgDarkMode("dark")
}

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  let theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
    imgDarkMode("dark");
  } else {
    theme = "light";
    imgDarkMode("light");
  }
  localStorage.setItem("theme", theme);
});