let section = document.querySelector('section'),
  icons = document.querySelector('.icons');

icons.onClick = () => {
  section.classList.toggle('dark');
};
