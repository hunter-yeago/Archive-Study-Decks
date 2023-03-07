<!-- TODO Fix links in Table of Contents
TODO Installation Section - update default info with project info -->

<div align="center">
<a name="readme-top" height="0"></a>
  <a href="https://github.com/hyradar/StudyDecks">
    <img src="https://github.com/hyradar/StudyDecks/blob/main/ReadMeImages/studydeckslogo.svg" alt="Study Decks Logo" width="40%" height="40%">
  </a>

  <p align="center">
    Create and study flashcard decks on StudyDecks! We store your decks locally on your machine for easy access without the hassle of logging in.
    <br />
    <a href="https://github.com/hyradar/StudyDecks"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://hyradar.github.io/StudyDecks">View Demo</a>
    ·
    <a href="https://github.com/hyradar/StudyDecks/issues">Report Bug</a>
    ·
    <a href="https://github.com/hyradar/StudyDecks/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#optimizations">Optimizations</a></li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </li>
  </ol>
</details>

## About this Project

I have a passion for learning languages, especially French. In the future, I'd like to build a full-fledged language-learning app, and I've taken this opportunity during my front-end development journey to build a web-app to both showcase my skills, as well as practice building functionality that I'll use in my future projects.

<div align="center">
    <img src="https://github.com/hyradar/StudyDecks/blob/main/ReadMeImages/StudyDecksMobileDemo.gif" alt="Gif of Study Decks Live Demo" width="70%"/>
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With:

**Tech:** HTML, SCSS, JavaScript, Webpack
**Design:** MVC, Observer, Single Page Application

**HTML:**

HTML is dynamically rendered with Javascript and focuses on using semantic elements to comply with Web Content Accessibility Guidelines.

**SCSS:** 

Responsive design with only **one** media query. Mixins and modules are used to follow the DRY principle and reduce file sizes. I used Andy Bell's CSS [Reset](https://andy-bell.co.uk/a-modern-css-reset/) to reduce browser inconsistencies.

**Javascript:** 

I used the WebStorage API to store user decks locally on their device. For form validation I  implemented the Constraint Validation API to display custom error messages for each form input. Upon successful submission of the form, I convert the input values into a data object using the FormData API and send it to the model to create a Deck object. Additionally, I used a function from the date-fns library to ensure that the chosen due-date for the deck is in the future.

**Webpack**

Stuff about Webpack

**Design Pattern**

In this Single Page Application, I used the Model-View-Controller design pattern as the foundation for the project, and implemented the Observer pattern to update other parts of the page when there is new data to display.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Optimizations

### Responsiveness

This site has **zero** media queries. Rather than rely on several of them for responsiveness, I used other SCSS techniques such as rem/em units as well as scaling functions like clamp() and min() on text sizes and widths so that the site is automatically responsive.

<details>
<summary>Show Gif</summary>
<img src="https://github.com/hyradar/StudyDecks/blob/main/ReadMeImages/studydecksreponsivedesign.gif" alt="Gif of Study Decks Live Demo" width="70%"/>
</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Lessons Learned:

A big part of what I tried to implement into this project is writing cleaner code. I had read Clean Code by Robert Martin, and decided to implement some of his ideas into this project. I also learned how to implement the Observer Pattern with MVC, how to utilize Web APIs to increase functionality of things like Form Validation, as well as new techniques to reduce repetitive code, such as the use of mixins in SCSS.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

Follow the following steps to get this program up and running as a local repository.

### Prerequisites

You will need to have NPM installed on your computer. 
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

DEFAULT TEXT TO REPLACE _Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._
<!-- Do I need them to install external dependencies or services for them to run my program? -->
<!-- I guess so, right? It's not going to install all the loaders such as node-sass from my code -->
<!-- TODO Replace the following link witih my SSH link -->
1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Run the Program
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>