const cate = document.getElementsByClassName('tt_category');
const span = cate[0].getElementsByTagName('span');

const archive = document.getElementsByClassName('sidebarContent');
const span2 = archive[3].getElementsByTagName('span');

for (let i = 0; i < span.length; i++) {
  const pattern = /[()]/gi;
  const str = span[i].innerHTML;
  const number = str.replace(pattern, '');

  span[i].innerHTML = number;
}

for (let j = 0; j < span2.length; j++) {
  const pattern = /[()]/gi;
  const str = span2[j].innerHTML;
  const number = str.replace(pattern, '');

  span2[j].innerHTML = number;
}