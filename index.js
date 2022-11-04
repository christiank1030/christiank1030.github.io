const projectLink = document.getElementById('projectLink')
const projectPage = document.querySelector('.project')



const scrollpos = window.scrollY;
const wh = window.innerHeight-50; 

const projectAnimation = () => {
        projectPage.classList.remove('project')
        projectPage.classList.add('project2')
}

projectLink.addEventListener('click', projectAnimation)