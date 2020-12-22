const nonActiveItem = document.getElementsByClassName('non-active-item');

for (let i = 0; i < nonActiveItem.length; i++) {
  nonActiveItem[i].href = '#';
  nonActiveItem[i].addEventListener('click', (e) => {
    e.preventDefault();
  });
};