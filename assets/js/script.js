'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


fetch('./content.json')
  .then(response => response.json())
  .then(content => {
    // About Section
    document.getElementById('about-title').textContent = content.about.title;

    const aboutText = document.getElementById('about-text');
    content.about.text.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      aboutText.appendChild(p);
    });


    // Services Section
    const servicesList = document.createElement('ul');
    servicesList.className = 'service-list';
    content.about.services.forEach(service => {
      const listItem = document.createElement('li');
      listItem.className = 'service-item';
      listItem.innerHTML = `
        <div class="service-icon-box">
          <img src="${service.icon}" alt="${service.title} icon" width="40">
        </div>
        <div class="service-content-box">
          <h4 class="h4 service-item-title">${service.title}</h4>
          <p class="service-item-text">${service.description}</p>
        </div>
      `;
      servicesList.appendChild(listItem);
    });
    document.getElementById('about-services').appendChild(servicesList);


    // Testimonials Section (Example - adapt as needed for your HTML structure)
    const testimonialsList = document.getElementById('about-testimonials');
    const testimonialsUl = document.createElement('ul');
    testimonialsUl.className = 'testimonials-list has-scrollbar';
    content.about.testimonials.forEach(testimonial => {
        const li = document.createElement('li');
        li.className = 'testimonials-item';
        li.innerHTML = `
          <div class="content-card" data-testimonials-item>
            <figure class="testimonials-avatar-box">
              <img src="${testimonial.avatar}" alt="${testimonial.name}" width="60" data-testimonials-avatar>
            </figure>
            <h4 class="h4 testimonials-item-title" data-testimonials-title>${testimonial.name}</h4>
            <div class="testimonials-text" data-testimonials-text>
              <p>${testimonial.text}</p>
            </div>
          </div>
        `;
        testimonialsUl.appendChild(li);
    });
    testimonialsList.appendChild(testimonialsUl);


    // Clients Section (Example - adapt as needed for your HTML structure)
    const clientsList = document.getElementById('about-clients');
    const clientsUl = document.createElement('ul');
    clientsUl.className = 'clients-list has-scrollbar';
    content.about.clients.forEach(client => {
      const li = document.createElement('li');
      li.className = 'clients-item';
      li.innerHTML = `<a href="${client.url}"><img src="${client.logo}" alt="${client.name}"></a>`;
      clientsUl.appendChild(li);
    });
    clientsList.appendChild(clientsUl);

  })


fetch('./content.json')
  .then(response => response.json())
  .then(content => {
    // ... (About section code from previous response) ...


    // Resume Section
    document.getElementById('resume-title').textContent = content.resume.title;

    function createTimelineList(timelineData, listId) {
        const timelineList = document.getElementById(listId);
        const ol = document.createElement('ol');
        ol.className = 'timeline-list';

        timelineData.forEach(item => {
            const li = document.createElement('li');
            li.className = 'timeline-item';
            li.innerHTML = `
              <h4 class="h4 timeline-item-title">${item.title}</h4>
              <span>${item.date}</span>
              <p class="timeline-text">${item.description}</p>
            `;
            ol.appendChild(li);
        });
        timelineList.appendChild(ol);
    }

    createTimelineList(content.resume.education, 'resume-education');
    createTimelineList(content.resume.experience, 'resume-experience');


    // Skills Section
    const skillsList = document.getElementById('resume-skills');
    const skillsUl = document.createElement('ul');
    skillsUl.className = 'skills-list content-card';
    content.resume.skills.forEach(skill => {
      const li = document.createElement('li');
      li.className = 'skills-item';
      li.innerHTML = `
        <div class="title-wrapper">
          <h5 class="h5">${skill.name}</h5>
          <data value="${skill.value}">${skill.value}%</data>
        </div>
        <div class="skill-progress-bg">
          <div class="skill-progress-fill" style="width: ${skill.value}%;"></div>
        </div>
      `;
      skillsUl.appendChild(li);
    });
    skillsList.appendChild(skillsUl);


  })
  .catch(error => console.error('Error loading content:', error));

// ... existing code ...

fetch('./content.json')
  .then(response => response.json())
  .then(content => {
    // ... (About and Resume section code from previous responses) ...

    // Portfolio Section
    document.getElementById('portfolio-title').textContent = content.portfolio.title;

    //Create filter list dynamically
    const filterList = document.getElementById('portfolio-filter-list');
    const allButton = document.createElement('li');
    allButton.className = 'filter-item';
    allButton.innerHTML = `<button class="active" data-filter-btn>All</button>`;
    filterList.appendChild(allButton);

    const uniqueCategories = [...new Set(content.portfolio.projects.map(project => project.category))];

    uniqueCategories.forEach(category => {
      const categoryButton = document.createElement('li');
      categoryButton.className = 'filter-item';
      categoryButton.innerHTML = `<button data-filter-btn>${category}</button>`;
      filterList.appendChild(categoryButton);
    });


    //Create project list dynamically
    const projectList = document.getElementById('portfolio-project-list');
    content.portfolio.projects.forEach(project => {
      const projectItem = document.createElement('li');
      projectItem.className = `project-item active ${project.category.toLowerCase().replace(/\s/g, '-')}`; // Add category class for filtering
      projectItem.innerHTML = `
        <a href="${project.url}">
          <figure class="project-img">
            <div class="project-item-icon-box">
              <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${project.image}" alt="${project.title}" loading="lazy">
          </figure>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-category">${project.category}</p>
        </a>
      `;
      projectList.appendChild(projectItem);
    });

  })
  .catch(error => console.error('Error loading content:', error));

// ... existing code ...

fetch('./content.json')
  .then(response => response.json())
  .then(content => {
    // ... (About, Resume, Portfolio section code from previous responses) ...

    // Blog Section
    document.getElementById('blog-title').textContent = content.blog.title;
    const blogPostList = document.getElementById('blog-post-list');
    content.blog.posts.forEach(post => {
      const blogPostItem = document.createElement('li');
      blogPostItem.className = 'blog-post-item';
      blogPostItem.innerHTML = `
        <a href="#">
          <figure class="blog-banner-box">
            <img src="${post.image}" alt="${post.title}" loading="lazy">
          </figure>
          <div class="blog-content">
            <div class="blog-meta">
              <p class="blog-category">${post.category}</p>
              <span class="dot"></span>
              <time datetime="${post.date}">${post.date}</time>
            </div>
            <h3 class="h3 blog-item-title">${post.title}</h3>
            <p class="blog-text">${post.text}</p>
          </div>
        </a>
      `;
      blogPostList.appendChild(blogPostItem);
    });


    // Contact Section
    document.getElementById('contact-title').textContent = content.contact.title;
    document.getElementById('contact-map').innerHTML = `<iframe src="${content.contact.mapEmbed}" width="100%" height="300" loading="lazy"></iframe>`; // Directly insert map embed code

    const contactFormTitle = document.getElementById('contact-form-title');
    contactFormTitle.textContent = content.contact.form.title;

    const contactForm = document.getElementById('contact-form');
    content.contact.form.fields.forEach(field => {
      const inputWrapper = document.createElement('div');
      inputWrapper.className = 'input-wrapper';
      let inputElement;
      if (field.type === 'textarea') {
        inputElement = document.createElement('textarea');
        inputElement.name = field.name;
        inputElement.className = 'form-input';
        inputElement.placeholder = field.placeholder;
        inputElement.required = field.required;
      } else {
        inputElement = document.createElement('input');
        inputElement.type = field.type;
        inputElement.name = field.name;
        inputElement.className = 'form-input';
        inputElement.placeholder = field.placeholder;
        inputElement.required = field.required;
      }
      inputWrapper.appendChild(inputElement);
      contactForm.appendChild(inputWrapper);
    });


    // Add submit button (you might need to adjust styling)
    const submitButton = document.createElement('button');
    submitButton.className = 'form-btn';
    submitButton.type = 'submit';
    submitButton.disabled = true; // Initially disable the button
    submitButton.innerHTML = `<ion-icon name="paper-plane"></ion-icon><span>Send Message</span>`;
    contactForm.appendChild(submitButton);


  })
  .catch(error => console.error('Error loading content:', error));






// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// Add page navigation functionality
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add click event to each navigation link
navigationLinks.forEach(link => {
  link.addEventListener("click", function() {
    // Remove active class from all links
    navigationLinks.forEach(link => link.classList.remove("active"));
    
    // Add active class to clicked link
    this.classList.add("active");

    // Get the page name from the link text
    const pageName = this.textContent.toLowerCase();

    // Hide all pages
    pages.forEach(page => page.classList.remove("active"));

    // Show selected page
    document.querySelector(`[data-page="${pageName}"]`).classList.add("active");
  });
});
