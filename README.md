# StudyDecks

Creat and study flashcard decks on StudyDecks! We store your decks locally on your machine for easy access without the hassle of logging in.

**Link to project:** https://hyradar.github.io/StudyDecks

<img src="https://github.com/hyradar/StudyDecks/blob/main/ReadMeImages/StudyDecksMobileDemo.gif" alt="Gif of Study Decks Live Demo" width="50%"/>

## How It's Made:

**Tech used:** HTML, SCSS, JavaScript, Webpack

**HTML:**

HTML is dynamically rendered with Javascript and focuses on using semantic elements to comply with Web Content Accessibility Guidelines.

**SCSS:** 
Responsive design with only **one** media query. Mixins and modules are used to follow the DRY principle and reduce file sizes. I used Andy Bell's CSS [Reset](https://andy-bell.co.uk/a-modern-css-reset/) to reduce browser inconsistencies.

**Javascript:** 

I used the WebStorage API to store user decks locally on their device. For form validation I  implemented the Constraint Validation API to display custom error messages for each form input. Upon successful submission of the form, I convert the input values into a FormData object and send that data to the model to create a Deck object. Additionally, I used a function from the date-fns library to ensure that the chosen due-date for the deck is in the future.

**Webpack**

In this Single Page Application, I used the Model-View-Controller design pattern as the foundation for the project, and implemented the Observer pattern to update other parts of the page when there is new data to display.

**Design Pattern**

In this Single Page Application, I used the Model-View-Controller design pattern as the foundation for the project, and implemented the Observer pattern to update other parts of the page when there is new data to display.

TODO
## Optimizations

This website is responsive with only **one** media query for flexibility and sustainability of the code.

You don't have to include this section but interviewers *love* that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

TODO
## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those *whoa this is awesome* or *fuck yeah I did it!* moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.