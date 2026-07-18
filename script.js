const cover = document.getElementById("cover");
const diary = document.querySelector(".diary");

cover.addEventListener("click", () => {

    diary.classList.toggle("open");

});

const pages = document.querySelectorAll(".page");

let currentPage = 0;

function showPage(index){

    pages.forEach(page=>{

        page.classList.remove("active");

    });

    pages[index].classList.add("active");

}

document.querySelectorAll(".next").forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(currentPage < pages.length-1){

            currentPage++;

            showPage(currentPage);

        }

    });

});

document.querySelectorAll(".back").forEach(btn=>{

    btn.addEventListener("click",()=>{

        if(currentPage > 0){

            currentPage--;

            showPage(currentPage);

        }

    });

});