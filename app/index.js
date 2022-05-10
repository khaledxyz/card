const projectsContainer = document.querySelector('.projects');
const slideshow = document.querySelector('.slideshow');
const overlayElement = document.querySelector('.overlay');

projects.forEach(project => {
    projectsContainer.innerHTML += `
    <div onClick="popup(${project.id})" class="card">
    <img src="${project.img}">

    <ul class="card__menu-links">
        <li><a href=""></a><i class="fa-brands fa-github"></i></li>
        <li><a href=""></a><i class="fa-brands fa-github"></i></li>
        <li><a href=""></a><i class="fa-brands fa-github"></i></li>
        <li><a href=""></a><i class="fa-brands fa-github"></i></li>
    </ul>

    <h4 class="card__project-name">${project.projectName}</h4>

    <div class="card__content">
        <h3>${project.category}</h3>
        <h1>${project.projectName}</h1>
        <p>${project.desciption}</p>
    </div>
    `
});

const popup = (id) => {
    document.querySelector('.overlay').classList.toggle('hidden');
    document.querySelector('.slideshow').classList.toggle('hidden');

    const projectObj = projects.find(project => project.id === id);
    slideshow.innerHTML = `
    <img src="${projectObj.img}" class="slideshow__image">`

}
overlayElement.addEventListener('click', popup)
