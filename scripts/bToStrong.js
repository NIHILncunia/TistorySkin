const contentArticle = document.getElementsByClassName('content-article')[0];
const pattern = /(<b\s?)(.+?)(<\/b>)/gi

const btoStrong = () => {
  if (contentArticle !== undefined) {
    contentArticle.innerHTML = contentArticle.innerHTML.replace(pattern, '<strong$2</strong>');
  }
};

btoStrong();