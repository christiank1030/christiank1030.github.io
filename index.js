const projectLink = document.getElementById('projectLink')
const movieNight = document.getElementById('movieNight')

const keylogger = document.getElementById('keylogger')
const keyloggerColl = document.getElementById('keyloggerColl')

const movieNightColl = document.getElementById('movieNightColl')

const rat = document.getElementById('rat')
const ratColl = document.getElementById('ratColl')


const scrollpos = window.scrollY;
const wh = window.innerHeight-50; 

const projectAnimation = () => {
        movieNight.classList.remove('project')
        movieNight.classList.add('project2')

        keylogger.classList.remove('project')
        keylogger.classList.add('project2')

        rat.classList.remove('project')
        rat.classList.add('project2')
}

const movieNightCollapsible = () => {
        if(movieNightColl.innerHTML === '') {
                movieNightColl.innerHTML = `<p class="projectDescription">
        If you're as indecisive as me, finding a movie to 
        watch can take longer than actually watching the movie! That's why I created 
        movie night. When you land on the home page, you start by setting a couple  of 
        filters. Movie Night will then display a random movie for you that meets 
        all of your filters! If you are interested in the movie but want to save it for 
        a later time, you'll be able to add it to a watchlist
    </p>
    <video controls src="./images/demoVideo.mp4"></video>
    <div class="techContainer">
        <p class="techList">Node.js</p>
        <p class="techList">HTML</p>
        <p class="techList">CSS</p>
        <p class="techList">SQL</p>
        <p class="techList">Sequelize</p>
        <p class="techList">Express</p>
        <p class="techList">Cors</p>
    </div>
    <div>
        <a class="projectLink" href="https://github.com/christiank1030/movieNight.git" target="_blank">GitHub Repository</a>
    </div>`
        } else {
                movieNightColl.innerHTML = ''
        }
}

const keyloggerCollapsible = () => {
        if(keyloggerColl.innerHTML === '') {
                keyloggerColl.innerHTML = `<p class="projectDescription">
                With this python script you will be able to record and save the keystrokes of whatever machine you deploy it on.
                The user has the option of saving the keystroke logs as a txt file in the directory that the script was run from, or recieving them via email. The logs 
                will also contain the date and time recorded, and there is a chunk of code that will allow you to determine how often 
                the keystroke reports are sent.
            </p>
            <video controls src="./images/keyloggerDemo.mp4"></video>
            <div class="techContainer" id="keyloggerTech">
                <p class="techList" id="keyloggerTechList">Python</p>
                <p class="techList" id="keyloggerTechList">MIME</p>
                <p class="techList" id="keyloggerTechList">smtplib</p>
            </div>
            <div>
                <a class="projectLink" href="https://github.com/christiank1030/pythonKeylogger.git" target="_blank">GitHub Repository</a>
            </div>`
        } else {
                keyloggerColl.innerHTML = ''
        }
}

const ratCollapsibe = () => {
        if(ratColl.innerHTML === '') {
                ratColl.innerHTML = `<p class="projectDescription">
                This remote access trojan, or RAT, allows the user to remotely connect and control the command line of their 
                target machine. Able to run commands on the target from your terminal, as well as see the command output. 
            </p>
            <video controls src="./images/ratDemo.mp4"></video>
            <div class="techContainer" id="keyloggerTech">
                <p class="techList" id="keyloggerTechList">Python</p>
                <p class="techList" id="keyloggerTechList">Socket</p>
            </div>
            <div>
                <a class="projectLink" href="https://github.com/christiank1030/rat" target="_blank">GitHub Repository</a>
            </div>`
        } else {
                ratColl.innerHTML = ''
        }
}


projectLink.addEventListener('click', projectAnimation)
movieNight.addEventListener('click', movieNightCollapsible)
keylogger.addEventListener('click', keyloggerCollapsible)
rat.addEventListener('click', ratCollapsibe)