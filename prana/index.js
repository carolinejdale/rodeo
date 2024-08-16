let element = document.body;

// Defining toggleNight function (toggles day/night mode)
function toggleNight() {
  element.classList.toggle("night-mode");
}

// Defining toggleZen function (shows/hides footer menu)
function toggleZen() {
  element.classList.toggle("zen-mode");
}

// Defining aboutPopup function
const aboutPopup = new Popup({
  id: "about-popup",
  title: "about prana",
  fontSizeMultiplier: "0.7",
  backgroundColor: "#474948",
  textColor: "#FFF4D8",
  closeColor: "#FFF4D8",
  titleColor: "#FFF4D8",
  linkColor: "#38BB8F",
  display: "none",
  underlineLinks: true,
  borderRadius: "0px",
  borderColor: "#FFF4D8",
  borderWidth: "1px",
  hideOnOutsideClick: true,
  content: `
      INSTRUCTIONS: Breathe along with the animation for as long as feels good.
      PLEASE NOTE: I am not a doctor, just a person who likes to observe my breath. This app was not designed for clinical purposes; please take responsibility for your own health.
      ---
      (Prana is a web app made in 2024 by me, Caroline J. Dale. To learn more, check out my {a-https://github.com/carolinejdale}[GitHub], visit {a-https://caro.rodeo}[my website] or {a-mailto:carolinejdale@gmail.com}[email me].)
      `,
    font: "Roboto Mono",
    css: `@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');`,
});

// Defining keyboard shortcuts
// Defining object to track if key is pressed
var isKeyPressed = {
  a: false, // 65
  d: false, // 68
  m: false, // 109
  n: false, // 110
  o: false, // 111
  x: false, // 120
}

// Adding keyDown and keyUp event handlers
document.onkeydown = (keyDownEvent) => {  
  // Preventing default key actions
  keyDownEvent.preventDefault();
  // Tracking key down click 
  isKeyPressed[keyDownEvent.key] = true;  
    
  if (isKeyPressed["n"] || isKeyPressed["N"] || isKeyPressed["d"] || isKeyPressed["D"]) {
    toggleNight();
    }
      
  if (isKeyPressed["m"] || isKeyPressed["M"]) {
    toggleZen();
  }
  
  if (isKeyPressed["a"] || isKeyPressed["A"]) {
    aboutPopup.show(); 
  }

  if (isKeyPressed["x"] || isKeyPressed["X"]) {
   aboutPopup.hide();
  }
};

// Adding keyup event handler
 document.onkeyup = (keyUpEvent) => {
  // Preventing default key actions
 keyUpEvent.preventDefault();
 // Tracking keyUp click
 isKeyPressed[keyUpEvent.key] = false;
 };