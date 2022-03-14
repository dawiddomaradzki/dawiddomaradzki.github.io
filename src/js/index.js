import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log(
  "Cześć, miło że zajrzałeś 🤠 nazywam się Dawid Domaradzki i zachęcam do zapoznania się z moimi projektami."
);

const list = document.querySelector(".projects-list--js");

fetch("https://api.github.com/users/dawiddomaradzki/repos?sort=updated")
  .then((resp) => resp.json())
  .then((resp) => {
    const repos = resp;
    for (const repo of repos) {
      //   console.log(repo);
      const { description, homepage, html_url, name } = repo;
      if (description) {
        list.innerHTML += `

       <li class="project">
            <div class="project__container">
            <img src="../img/githubpurple.de42a557.svg" alt="github photo">
              <h3 class="project__title">${name}</h3>
              ${
                description
                  ? `<p class="project__description">${description}</p>`
                  : "No description"
              }
              
            </div>
            <div class="project__footer">

            ${
              homepage
                ? `<a class="project__link project__link--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer" title="Demo: ${name}">Demo</a>`
                : ""
            }
              
              <a class="project__link project__link--source" href="${html_url}" target="_blank" rel="nofollow noreferrer"  title="Source code: ${name}">Github</a>
            </div>
          </li>
      `;
      }
    }
  })

  .catch((err) => {
    console.log(err);
  });
