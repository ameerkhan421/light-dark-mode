  const toggleSwitch = document.querySelector('input[type="checkbox"]');
  const nav = document.getElementById('nav');
  const toggleIcon = document.getElementById('toggle-icon');
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');
  const textBox = document.getElementById('text-box'); 

// dark mode style
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    console.log(toggleIcon.children);
}

// switch theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme','dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
}

// event listener
toggleSwitch.addEventListener('change', switchTheme);