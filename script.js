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

const button = document.querySelectorAll('.card .button')

const buttonArr = Array.from(button);

buttonArr.map((el) => {
  el.addEventListener('click', () => {
    const popup =  document.createElement('div');
    const popupObj = {};
    popupObj.img = '/Images/ProjectPopup.svg';
    popupObj.title = 'Keeping track of hundreds of components';
    popupObj.tags = ['HTML','CSS','JavaScript','Ruby on rails'];
    popupObj.paragraph = 'lorem ipsum'

    const img = document.createElement('img');
    img.setAttribute('src', popupObj.img);
    const title = document.createElement('h2');
    title.innerHTML = popupObj.title;
    const tags = document.createElement('ul')
    popupObj.tags.map((t) => {
      const tag = document.createElement('li');
      tag.innerHTML = t;
      tags.appendChild(tag);
    })

    popup.appendChild(img);
    popup.appendChild(title);
    popup.appendChild(tags);
    console.log(popup);
  })
})