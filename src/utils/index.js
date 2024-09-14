const sidebar = document.querySelector('.sidebar');
const wrapper = document.querySelector('.wrapper');

function toggleSidebar() {
    wrapper.classList.toggle('open');
}

const toggleButton = document.querySelector('.toggle-btn');
toggleButton.addEventListener('click', toggleSidebar);
