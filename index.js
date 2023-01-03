const projectLink = document.getElementById('projectLink')
const movieNight = document.getElementById('movieNight')
const keylogger = document.getElementById('keylogger')



const scrollpos = window.scrollY;
const wh = window.innerHeight-50; 

const projectAnimation = () => {
        movieNight.classList.remove('project')
        movieNight.classList.add('project2')

        keylogger.classList.remove('project')
        keylogger.classList.add('project2')
}

projectLink.addEventListener('click', projectAnimation)