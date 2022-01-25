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

const button = document.querySelectorAll('.card .button');

const buttonArr = Array.from(button);

buttonArr.map((el) => {
  el.addEventListener('click', () => {
    const popupContainer = document.createElement('div');
    popupContainer.classList.add('popup-container');

    const popup = document.createElement('div');
    popup.classList.add('popup');

    popupContainer.appendChild(popup);

    const popupObj = {};
    popupObj.img = '/Images/ProjectPopup.svg';
    popupObj.title = 'Keeping track of hundreds of components';
    popupObj.tags = ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'];
    popupObj.paragraph = 'lorem ipsum';

    const closeButton = document.createElement('span');
    popup.appendChild(closeButton);

    const img = document.createElement('img');
    img.setAttribute('src', popupObj.img);

    const seeProjectButton = document.createElement('a');
    seeProjectButton.classList.add('button');
    seeProjectButton.classList.add('see-project-button');
    seeProjectButton.innerHTML = 'See Project';

    const seeSourceButton = document.createElement('a');
    seeSourceButton.classList.add('button');
    seeSourceButton.classList.add('see-source-button');
    seeSourceButton.innerHTML = 'See Source';

    const title = document.createElement('h2');
    title.innerHTML = popupObj.title;
    const tags = document.createElement('ul');
    popupObj.tags.map((t) => {
      const tag = document.createElement('li');
      tag.innerHTML = t;
      tags.appendChild(tag);
    });

    const paragraph = document.createElement('p');
    paragraph.innerHTML = popupObj.paragraph;

    popup.appendChild(img);
    popup.appendChild(title);
    popup.appendChild(seeProjectButton);
    popup.appendChild(seeSourceButton);
    popup.appendChild(tags);
    popup.appendChild(paragraph);

    document.querySelector('body').appendChild(popupContainer);

    //console.log(popup);
  });
});
