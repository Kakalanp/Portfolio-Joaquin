const projects = [
  {
    img: './Images/ProjectSS/To-do list.png',
    title: 'To-Do List',
    tags: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    live: 'https://kakalanp.github.io/TO-DO-list/dist/',
    source: 'https://github.com/Kakalanp/TO-DO-list',
    paragraph: 'This is a To-do list that you can use to organize your activities of the day, it has the option to add new tasks, clear the ones completed, editing and deleting the tasks.',
  },
  {
    img: './Images/ProjectSS/tip-calculator.jpeg',
    title: 'Tip Calculator',
    tags: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    live: 'https://kakalanp.github.io/Tip-calculator/dist',
    source: 'https://github.com/Kakalanp/Tip-calculator',
    paragraph: 'This is a calculator for paying a bill; using HTML, CSS, JavaScript, and Webpack; you can divide a bill and a percental tip with many people.',
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
  projects.forEach((el, i) => {
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

  itemsArr.forEach((el) => {
    menuContainer.appendChild(el);
  });

  menuContainer.addEventListener('click', () => {
    menuContainer.style.display = 'none';
    closeButton.remove();
  });
});

function createpopups() {
  const button = document.querySelectorAll('.card .button');
  const buttonArr = Array.from(button);
  buttonArr.forEach((el, i) => {
    el.addEventListener('click', () => {
      const popupContainer = document.createElement('div');
      popupContainer.classList.add('popup-container');

      const popup = document.createElement('div');
      popup.classList.add('popup');

      popupContainer.appendChild(popup);
      popupContainer.addEventListener('click', (e) => {
        if (e.target === popupContainer) {
          popupContainer.remove();
        }
      });

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
      projects[i].tags.forEach((t) => {
        const tag = document.createElement('li');
        tag.innerHTML = t;
        tags.appendChild(tag);
      });
      txtinfo.appendChild(tags);
      info.appendChild(txtinfo);

      const seeProjectButton = document.createElement('a');
      seeProjectButton.setAttribute('href', projects[i].live);
      seeProjectButton.setAttribute('target', '_blank');
      seeProjectButton.classList.add('button');
      seeProjectButton.classList.add('see-live-button');
      seeProjectButton.innerHTML = 'See live';
      info.appendChild(seeProjectButton);

      const seeSourceButton = document.createElement('a');
      seeSourceButton.setAttribute('href', projects[i].source);
      seeSourceButton.setAttribute('target', '_blank');
      seeSourceButton.classList.add('button');
      seeSourceButton.classList.add('see-source-button');
      seeSourceButton.innerHTML = 'See Source';
      info.appendChild(seeSourceButton);

      const paragraph = document.createElement('p');
      paragraph.innerHTML = projects[i].paragraph;
      info.appendChild(paragraph);

      popup.appendChild(info);

      document.querySelector('body').appendChild(popupContainer);
    });
  });

  const allTags = document.querySelectorAll('.languages li');
  allTags.forEach((el) => {
    el.addEventListener('click', () => {
      allTags.forEach((tag) => {
        tag.classList.remove('tag-active');
        if (tag.innerHTML === el.innerHTML) {
          tag.classList.add('tag-active');
        }
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  createworks();
  createpopups();
});

const form = document.getElementsByTagName('form')[0];
const nameBox = document.getElementById('name');
const emailBox = document.getElementById('email');
const messageBox = document.getElementById('message');
const submitButton = document.getElementById('submitButton');
const mayuspattern = /[A-Z]/g;

let userInfo = { name: '', email: '', message: '' };
if (localStorage.userInfo !== undefined) {
  userInfo = JSON.parse(localStorage.userInfo);
  nameBox.value = (userInfo.name ? userInfo.name : '');
  emailBox.value = (userInfo.email ? userInfo.email : '');
  messageBox.value = (userInfo.message ? userInfo.message : '');
}

nameBox.addEventListener('input', () => {
  userInfo.name = nameBox.value;
  localStorage.userInfo = JSON.stringify(userInfo);
});

emailBox.addEventListener('input', () => {
  userInfo.email = emailBox.value;
  localStorage.userInfo = JSON.stringify(userInfo);
});

messageBox.addEventListener('input', () => {
  userInfo.message = messageBox.value;
  localStorage.userInfo = JSON.stringify(userInfo);
});

function showError(text) {
  const errormessage = document.querySelector('.error-message');
  errormessage.innerHTML = text;
  errormessage.style.opacity = 1;
}

function formValidation() {
  let checks = 0;
  if (nameBox.validity.valueMissing === false) {
    checks += 1;
    if (nameBox.classList.contains('error')) {
      nameBox.classList.remove('error');
    }
    nameBox.style.border = '3px solid #36b37f';
  } else { nameBox.classList.add('error'); showError('Please enter your name'); }

  if (emailBox.validity.valueMissing === false) {
    if (emailBox.validity.typeMismatch === false) {
      if (!mayuspattern.test(emailBox.value)) {
        checks += 1;
        if (emailBox.classList.contains('error')) {
          emailBox.classList.remove('error');
        }
        emailBox.style.border = '3px solid #36b37f';
      } else { emailBox.classList.add('error'); showError('Your email address should be written in lowercase.'); }
    } else { emailBox.classList.add('error'); showError('Your email address is not valid'); }
  } else { emailBox.classList.add('error'); showError('Please enter your email adress.'); }

  return checks;
}

submitButton.addEventListener('click', () => {
  if (formValidation() >= 2) form.submit();
});
