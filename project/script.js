document.addEventListener("DOMContentLoaded", () => {

    console.log("Проект запущен успешно!");

    // Плавная прокрутка по ссылкам меню
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {

            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    });


    // Анимация появления карточек
    const observer = new IntersectionObserver(
        (entries)=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                }

            });
        },
        {
            threshold:.2
        }
    );


    document
    .querySelectorAll(".card,.stat")
    .forEach(item=>{

        item.classList.add("hidden");

        observer.observe(item);

    });


    // Кнопка действия
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            console.log("Кнопка нажата");

        });

    const form = document.querySelector("form");

if(form){

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Спасибо! Сообщение отправлено.");

});

}

});

});
