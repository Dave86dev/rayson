# raYSON 0.4 11/02/2024

Originally, I developed JsonSurfer in JavaScript to read and navigate JSON files. While functional, JsonSurfer lacked the polished UI design I envisioned. Recognizing this, I decided to rebuild the application in React, now focusing on a more sophisticated UI that displays JSON with proper indentation and highlights key-value pairs efficiently. The dynamic search functionality also received an upgrade, allowing for comprehensive file scanning.

To ensure a more robust and strongly typed application, I undertook a refactor to TypeScript. This move significantly enhanced the app's reliability and maintainability, leveraging TypeScript's static typing to improve performance and user experience beyond JsonSurfer's original capabilities. This step forward in development approach showcases my commitment to delivering an intuitive and high-quality application.

But beware! Something bigger, better and specially faster is coming! ;) Stay tuned!

<p align="center">
  <img src="https://i.ibb.co/C8Djpb3/screen1.png" alt="Screen 1" title="Screen 1">
</p>


## Table of Contents 

- [Stack](#stack)
- [Production](#production)
- [Installation](#installation)
- [Functionality / Code Decisions](#functionality)
- [To Improve](#to-improve)
- [Author](#author)


## Stack 

<img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"><img src="https://img.shields.io/badge/-Vite-747bff?style=for-the-badge&logo=vite&logoColor=white">

## Production

<div align="center">
    <a href="https://master.d244ccb955zqzp.amplifyapp.com/"><strong>PRODUCTION LINK</strong></a> 
</div>

## Installation 

If, however, you prefer to install the application locally on your computer, please feel free to follow the steps outlined below. These will guide you through cloning the repository onto your machine and setting up the app to run.

```sh
git clone https://github.com/Dave86dev/rayson
cd rayson
npm i
npm run dev
```

## Functionality

Designed from the ground up with TypeScript, I ensured that my app not only presents data correctly but also enhances user interaction. Notably, as a detail worth mentioning, users can interact with keys displaying 'false' or 'null' values and avoid the confusion of '[object Object]' in the output.

A standout feature of the rendering design approach is the use of a recursive pattern for JSON rendering. This choice, inspired by previous experiences with complex data structures in C++, allows me to handle nested JSON objects and arrays. It aligns perfectly with TypeScript's capabilities, offering a robust solution for presenting and searching through data.

The application separates the rendering and search functionalities to maintain clarity and adhere to the single responsibility principle. Despite the shared principles between the recursive rendering and search functions, their separation ensures the app remains maintainable and scalable.

In essence, this TypeScript-driven approach, coupled with a recursive rendering pattern, delivers a powerful, user-friendly application capable of handling complex JSON structures.

## To improve 

- **10/02/2024 - Improved efficiency for reading properly large JSON files:** As a measure to achieve total optimization, an alternative to the recursive method is already underway, along with a better design, also with the possibility of reading external JSON loaded by the user from the interface. I hope to be able to show you this new application soon. For the moment, both with JsonSurferJs and JsonSurferTS, the goal of establishing the foundations for this new and exciting project has been achieved.

## Author

- **David Ochando Blasco** - Project Developer
  - [GitHub](https://github.com/Dave86dev) - [LinkedIn](https://www.linkedin.com/in/david-ochando-blasco-90b2ba1a/)