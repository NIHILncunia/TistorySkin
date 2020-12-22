const contentArticle = document.getElementsByClassName('content-article')[0];
const pattern = /(<b\s?)(.+?)(<\/b>)/gi

contentArticle.innerHTML = contentArticle.innerHTML.replace(pattern, '<strong$2</strong>');