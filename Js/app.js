/*-------- Toggle Btn --------*/

const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show');
})


/* ------ Link ---------*/

const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele =>ele.classList.remove('active'));
        link.classList.add('active');
    })
})

/*----------- Typewhiter -----------*/

const typeWriter = document.getElementById("typewriter-text");
const text = "Daniela Porras Full-Stack";

typeWriter.innerHTML = text;
typeWriter.style.setProperty("--characters", text.length);

/*------ Dinamismo en los proyectos -------*/

const projectContainer = document.querySelector('.project-container');

projects.forEach(project => {
    projectContainer.innerHTML +=`
    <div class="project-card" data-tags='#all, ${project.tags}'>
    <img src="Assets/${project.image}" alt="proyecto">
        <div class="content">
            <h3 class="project-name">${project.name}</h3>
            <span class="tags">${project.tags}</span>
        </div>
        </div>
    `;
})

/*------- Filters -------*/

const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        let id = filterBtn.getAttribute('id');
        let projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card=> {
            if(card.getAttribute('data-tags').includes(id)){
                card.classList.remove('hide');
            }else {
                card.classList.add('hide');
            }
        })

        filters.forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
    })
})