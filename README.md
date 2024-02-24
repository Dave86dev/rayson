
<p align="center">
  <img src="https://i.ibb.co/VQGKcbb/iconrs.png" alt="iconrs" title="iconrs">
</p>

<p align="center">
  fast JSON renderer, key value explorer, typescript interface maker
</p>

## Table of Contents 

- [About](#about)
- [Stack](#stack)
- [Production](#production)
- [Installation](#installation)
- [Development](#development)
- [Author](#author)

## About

It fills me with immense pride and satisfaction to have the opportunity to share "raysonts" with all of you. Delving right into the heart of it, what we have here is a very fast and non-recursive dynamic renderer of external JSON sources fetched from URLs, ingeniously developed using React Vite + TypeScript. This tool stands out not only for its speed but also for its ability to efficiently manage and render nested parts of the data structure, offering you the flexibility to directly expand or collapse these sections as needed.

Adding to its utility, the application boasts a search system. This feature enables you to precisely locate the value of a specific key by inputting its complete path in the search field. However, the feature that arguably steals the spotlight is the application’s innovative functionality to convert objects into TypeScript interfaces. With the mere click of a button, these interfaces can be saved directly to your clipboard, streamlining your development process.

As we look forward, the journey with "raysonts" is far from over. We are actively exploring additional functionalities to enhance this tool further. For the time being, let’s embrace and make the most of the current version of "raysonts"!

<p align="center">
  <img src="https://i.ibb.co/rG7MJ06/Sin-t-tulo.png" alt="Screen 1" title="Screen 1">
</p>

<p align="center">
  <img src="https://s9.gifyu.com/images/SFn8y.gif" alt="gif 1" title="gif 1">
</p>

<p align="center">
  <img src="https://s9.gifyu.com/images/SFnRS.gif" alt="gif 2" title="gif 2">
</p>

## Stack 

<img src="https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"><img src="https://img.shields.io/badge/-Vite-747bff?style=for-the-badge&logo=vite&logoColor=white">

## Production

<div align="center">
    <a href="https://master.d22np947aqqpqb.amplifyapp.com/"><strong>www.raysonts.com</strong></a> 
</div>

## Installation 

If, however, you prefer to install the application locally on your computer, please feel free to follow the steps outlined below. These will guide you through cloning the repository onto your machine and setting up the app to run.

```sh
git clone https://github.com/Dave86dev/raysonts
cd raysonts
npm i
npm run dev
```

## Development


A key principle guiding the development of this application has been the preference for iteration over recursion, ensuring a full commitment to creating a resource-efficient app. This approach enables the processing of large JSON files without compromising our system's speed and efficiency. Recursion is selectively employed for deploying arrays or objects under tightly controlled conditions, employing techniques akin to lazy-loading for optimal performance.

Furthermore, a significant decision during the preliminary analysis phase was the resolve to eschew external libraries, thereby maintaining the application's native integrity. This choice underscores our dedication to leveraging inherent capabilities and ensuring a streamlined, cohesive user experience.


## Author

- **David Ochando Blasco** - Project Developer
  - [GitHub](https://github.com/Dave86dev) - [LinkedIn](https://www.linkedin.com/in/david-ochando-blasco-90b2ba1a/)
