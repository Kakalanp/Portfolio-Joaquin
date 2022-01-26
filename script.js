const projects = [
  {
    img: 'Images/ProjectScreenshot1.svg',
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['HTML', 'CSS'],
    live: '',
    source: '',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    img: 'Images/ProjectScreenshot2.svg',
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: '',
    source: '',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    img: 'Images/placeholder.png',
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['HTML', 'CSS'],
    live: '',
    source: '',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    img: 'Images/placeholder.png',
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: '',
    source: '',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    img: 'Images/placeholder.png',
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
    live: '',
    source: '',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  {
    img: 'Images/placeholder.png',
    title: 'Multi-Post Stories Gain+Glory',
    tags: ['HTML', 'CSS', 'Ruby on rails'],
    live: '',
    source: '',
    paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
];

function createworks() {
  const works = document.querySelector('div.works');
  projects.map((el, i) => {
    const work = document.createElement('div');
    work.classList.add('card');

    const div1 = document.createElement('div');
    div1.classList.add('screenshot');
    div1.innerHTML = `<img src ="${el.img}" alt = "project ${i}" />`;

    const div2 = document.createElement('div');
    div2.classList.add('info');
    div2.innerHTML = `<h3 class="text">${el.title}</h3> <ul class="languages">${el.tags.map((t) => `<li>${t}</li>`)
      .join('')}</ul> <a class="button"  >See project</a>`;

    work.appendChild(div1);
    work.appendChild(div2);

    works.appendChild(work);

    return null;
  });
}

document.querySelector('.menu').addEventListener('click', () => {
  const menuContainer = document.querySelector('.menu-container');
  menuContainer.style.display = 'flex';

  const closeButton = document.createElement('a');
  closeButton.classList.add('close-button');

  const items = document.querySelectorAll('.menu-container a');
  const itemsArr = Array.from(items);
  itemsArr.unshift(closeButton);
  menuContainer.innerHTML = '';

  itemsArr.map((el) => {
    menuContainer.appendChild(el);
    return null;
  });

  menuContainer.addEventListener('click', () => {
    menuContainer.style.display = 'none';
    closeButton.remove();
  });
});

function createpopups() {
  const button = document.querySelectorAll('.card .button');
  const buttonArr = Array.from(button);
  buttonArr.map((el, i) => {
    el.addEventListener('click', () => {
      const popupContainer = document.createElement('div');
      popupContainer.classList.add('popup-container');

      const popup = document.createElement('div');
      popup.classList.add('popup');

      popupContainer.appendChild(popup);

      const closeButton = document.createElement('a');
      closeButton.classList.add('close-button');
      closeButton.addEventListener('click', () => {
        popupContainer.remove();
      });
      popup.appendChild(closeButton);

      const img = document.createElement('img');
      img.setAttribute('src', projects[i].img);
      popup.appendChild(img);

      const info = document.createElement('div');
      info.classList.add('flexrow');

      const txtinfo = document.createElement('div');
      txtinfo.classList.add('flexcolumn');

      const title = document.createElement('h2');
      title.innerHTML = projects[i].title;
      txtinfo.appendChild(title);

      const tags = document.createElement('ul');
      tags.classList.add('languages');
      projects[i].tags.map((t) => {
        const tag = document.createElement('li');
        tag.innerHTML = t;
        tags.appendChild(tag);
        return null;
      });
      txtinfo.appendChild(tags);

      const seeProjectButton = document.createElement('a');
      seeProjectButton.classList.add('button');
      seeProjectButton.classList.add('see-project-button');
      seeProjectButton.innerHTML = 'See Project';
      info.appendChild(seeProjectButton);

      const seeSourceButton = document.createElement('a');
      seeSourceButton.classList.add('button');
      seeSourceButton.classList.add('see-source-button');
      seeSourceButton.innerHTML = 'See Source';
      info.appendChild(seeSourceButton);

      const paragraph = document.createElement('p');
      paragraph.innerHTML = projects[i].paragraph;
      info.appendChild(paragraph);

      info.appendChild(txtinfo);
      info.appendChild(seeProjectButton);
      info.appendChild(seeSourceButton);
      info.appendChild(paragraph);

      popup.appendChild(info);

      document.querySelector('body').appendChild(popupContainer);
    });
    return null;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createworks();
  createpopups();
});