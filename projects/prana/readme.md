Prana is a small self-initiated project I designed for myself. I wanted an app I could flick over to when I wanted to catch a moment's breath, or to play in the background when I need something to ground me. It is based on the yogic principle of pranayama, or controlled breathing, although I should note my deployment of it here is a gross simplification of the techniques and knowledge available in this ancient Indian practice.

Currently, the app is deliberately sparse with minimal options or features. Features I have included in the original release are in alignment with what I personally desired in such an app:

+ hotkey option toggling
+ day/night mode
+ a simple 'About' popup, using the [popup-js library](http://popup.js.org)
+ zen mode

Future releases may include:
+ different techniques (e.g. ladder breath, 4:6 breath);
+ breath counts and/or timer;
+ adaptive menu for mobile/tablet users.

This project was an opportunity for me to play with: 
 + keypress events;
 + jS libraries;
 + CSS animations;
 + popup events;
 + implementing light/dark mode;
 + media queries;
 + toggling views.


---
## Updates
### 20240617
#### Features
 + Added Readme.md file to project
 + Created prana.ico animation ([favicon.cc](http://favicon.cc)).

#### Bugs
 + 'About' popup appears on mouse click but not keystroke
 + 'About' popup 'x' to close does not work (ESC key does work)
 + Hitting 'o' key for zen mode hides footer menu as desired but also switches night/day modes

#### To do:
+ Add favicon
+ Refactor menus + queries for tablet/mobile users
+ Add onclick functionality for different breath types
+ Create animations for other techniques
    + 4:6 breath
    + 5:6 breath
    + box breath
    + ladder breath

### 20240400-30:
+ Added hotkey functionality
+ Added text instructions (in jS popup)
+ Fixed inhale/exhale timing bug
+ Added media query for mobile/tablet breakpoint
+ Added button for about the author/contact details (jS popup)
+ Wrote CSS for dark mode
+ Added jS toggle for dark mode
+ Created animation for breath div (5:5 breath).

---
Prana is a web app by me, Caroline J. Dale (2024).

[caro.rodeo](https://caro.rodeo) | [github](http://github.com/carolinejdale) | [email](mailto:carolinejdale@gmail.com)