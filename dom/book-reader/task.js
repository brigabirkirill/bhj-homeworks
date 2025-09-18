const fontSize =  document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
arrFontSize = Array.from(fontSize);

arrFontSize.forEach(elem => {
    elem.addEventListener('click', (e) => {
      e.preventDefault();
      fontSize.forEach(elem1 => {
        elem1.classList.remove('font-size_active');
        if (elem.classList.contains('font-size_small')) {
          elem.classList.add('font-size_active');
          book.classList.add('book_fs-small');
          book.classList.remove('book_fs-big');
        } else if (elem.classList.contains('font-size_big')) {
          elem.classList.add('font-size_active');
          book.classList.remove('book_fs-small');
          book.classList.add('book_fs-big');
        } else {
          elem.classList.add('font-size_active');
          book.classList.remove('book_fs-small');
          book.classList.remove('book_fs-big');
        }
      })
    })
  })