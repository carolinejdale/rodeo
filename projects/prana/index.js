let element = document.body;

// Defining function pranaManu (shows/hides breath style menu)
// function pranaMenu() {
//  element.classList.toggle("breath-mode");
// }

// Defining function toggleDark (toggles day/night mode)
function toggleDark() {
  element.classList.toggle("dark-mode");
}

// Defining toggleZen function (shows/hides footer menu)
function toggleZen() {
  element.classList.toggle("zen-mode");
}

// Defining aboutPopup function
const aboutPopup = new Popup({
  id: "about-popup",
  title: "about this app",
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
  font: "Inconsolata",
  hideOnOutsideClick: true,
  css: `@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@200..900&display=swap');`,
  content: `
      Breathe along with the animation for as long as feels good.
      Please do not continue if it does not feel good.
      I am not a doctor, just a person who likes to observe my breath.
      ---
      A web app by Caroline J. Dale (2024).
      To learn more about me, visit {a-https://caro.rodeo}[caro.rodeo] or {a-mailto:carolinejdale@gmail.com}[email me].
      Press {green bold}[x] or {green bold}[ESC] key to exit.`,
});

// FUNCTIONS TO BE DEFINED
// function coherentBreath() {}
// function ladderBreath() {}
// function fourSixBreath() {}
// function sixSixBreath() {}
// function showOptions() {}
// function about() {}

// DEFINING KEYBOARD SHORTCUTS
// Defining object to track if key is pressed
var isKeyPressed = {
  a: false, // 65
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
    
  if (isKeyPressed["n"]) {
    toggleDark();
    }
      
  if (isKeyPressed["o"]) {
    toggleZen();
  }
  
  if (isKeyPressed["a"]) {
    aboutPopup.show();
  }

  if (isKeyPressed["x"]) {
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

  // Tracking key release
  /*
  if (!isKeyPressed["m"]) {
    footTxtMenu.style.display = "none";
    footTxt.style.display = "inline-block";
  }
  */

  // Showing text indicating when key is released
  /*
  if (!isKeyPressed["m"]) {
  footTxt.style.display = "none";
  footTxtMenu.style.display = "flex";
}
*/