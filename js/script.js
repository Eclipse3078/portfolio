var typed = new Typed(".typing",{
    strings:["","Web Designer","Web Developer","Graphic Designer","Consultant"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
              removeBackSection();
              for(let j=0; j<totalNavList; j++)
              {
                  if(navList[j].querySelector("a").classList.contains("active"))
                  {
                      addBackSection(j);
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active")
              showSection(this);
              if(window.innerWidth < 1200)
              {
                  asideSectionTogglerBtn();
              }
          })
      }
      function removeBackSection()
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }   
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
      }
      function updateNav(element)
      {
          for(let i=0; i<totalNavList; i++)
          {
              navList[i].querySelector("a").classList.remove("active");
              const target = element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
              {
                navList[i].querySelector("a").classList.add("active");
              }
          }
      }
      document.querySelector(".github").addEventListener("click", function()
      {
          if (confirm("Redirect to Personal Github?")) {
            window.open('https://github.com/Eclipse3078', '_blank');

          } else {
            alert("Redirection to GitHub is cancelled.");
          }
      })
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++ )
                {
                    allSection[i].classList.toggle("open");
                }
            }

const NameError = document.getElementById("nameerror");
const EmailError = document.getElementById("emailerror");
const SubjectError = document.getElementById("subjecterror");
const MessageError = document.getElementById("msgerror");
const submitbtn = document.getElementById("Submit");

function validateName(){
    var name = document.getElementById("ContactName").value;

    if (name.length == 0){
        NameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){

        NameError.innerHTML = "Please write full name";
        return false;
    }
    NameError.innerHTML = "";
    return true;

}
function validateEmail(){
    var email = document.getElementById("ContactEmail").value;
    if (email.length == 0){
        EmailError.innerHTML = "Email is required";
        return false;
    }
    EmailError.innerHTML = "";
    return true;

}

function validateSubject(){
    var subject = document.getElementById("Subject").value;

    if (subject.length == 0){
        SubjectError.innerHTML = "Subject is required";
        return false;
    }
    SubjectError.innerHTML = "";

    return true;

}

function validateMessage(){
    var msg = document.getElementById("Message").value;
    var remain = 30-msg.length;

    if (msg.length == 0){
        MessageError.innerHTML = "Message is required";
        return false;
    }
    if (remain > 0){
        MessageError.innerHTML = "At least " +remain+ " words is required";
        return false;
    }
    MessageError.innerHTML = "";

    return true;

}
if (validateEmail() && validateMessage() && validateName() && validateSubject()){
    document.getElementById("Submitbtn").addEventListener("click", function()
    {
        if (confirm("Submit?")) {
            alert("Submit Successfully.");

        } else {
        alert("Submission is cancelled.");
        }
    })}
