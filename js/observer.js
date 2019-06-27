const header = document.querySelector("header");
const sectionOne = document.querySelectorAll("section");

const sectionOneOptions = {

    rootMargin: "-120px 0px 0px 0px"

};

const sectionOneObserver = new IntersectionObserver(function(
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.add("nav-scrolled-white");
                header.classList.remove("nav-scrolled")

            } else {

                header.classList.remove("nav-scrolled-white");
                header.classList.add("nav-scrolled");
            }
            console.log(entry.target);

        });
    },
    sectionOneOptions);

sectionOne.forEach(section => {
    sectionOneObserver.observe(section);
});
