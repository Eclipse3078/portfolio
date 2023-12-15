const dayNight = document.querySelector(".day-night");
const alternateStyles = document.querySelectorAll(".alternate-style");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark"))
    {
        document.documentElement.style.setProperty("--skin-color", "#00FFFF")
    }else{
        document.documentElement.style.setProperty("--skin-color", "#ec1839")

    }
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");

    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon");


    }
})




