let element = document.body;


// Defining function pranaManu (shows/hides breath style menu)
// function pranaMenu() {
//  element.classList.toggle("breath-mode");
// }

// Defining function toggleDark (toggles day/night mode)
function toggleDark() {
  element.classList.toggle("dark-mode");
}

// Defining function hideOptions (shows/hides all menus and buttons)
function hideOptions() {
  element.classList.toggle("zen-mode");
}

const aboutPopup = new Popup({
  id: "about-popup",
  title: "about this app",
  css: `@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');`,
  font: "Roboto Mono",
  backgroundColor: "#38BB8F",
  content: `
      Breathe along with the animation for as long as feels good.
      Please do not continue if it does not feel good.
      I am not a doctor, I am just a person who likes to observe my breath.
      ---
      A web app by Caroline J. Dale (2024).
      URL: {a-https://caro.rodeo}[caro.rodeo]
      EML: {a-mailto:carolinejdale@gmail.com}{@gmail.com}
      Hit ESC to exit.`
});


// FUNCTIONS TO BE DEFINED
// function coherentBreath() {}
// function ladderBreath() {}
// function fourSixBreath() {}
// function sixSixBreath() {}
// function showOptions() {}
// function about() {}

// CUSTOM KEYBOARD SHORTCUTS
// Defining object to track if key is pressed
var isKeyPressed = {
  a: false,
  m: false, // 109
  n: false, // 110
  o: false, // 111
}

// Adding keyDown and keyUp event handlers
document.onkeydown = (keyDownEvent) => {  
  // Preventing default key actions...
  keyDownEvent.preventDefault();
  // Tracking key down click 
  isKeyPressed[keyDownEvent.key] = true;  

  // Checking custom shortcut
 // if (isKeyPressed["m"]) {
 //   pranaMenu();
 //   } 
    
    if (isKeyPressed["n"]) {
    toggleDark();
    }
      
  if (isKeyPressed["o"]) {
    hideOptions();
  }

  if (isKeyPressed["a"]) {
    aboutPopup();
  }
  };


// Adding keyup event handler
/* document.onkeyup = (keyUpEvent) => {
  // Preventing default key actions...
  keyUpEvent.preventDefault();
}; */

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

document.addEventListener('click', () => {
  aboutPopup.show();
});