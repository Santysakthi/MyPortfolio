//-------------------about me script---------------------------------
function opens(name) { 
    var skill = document.getElementById("skill");
    var exp = document.getElementById("exp");
    var edu = document.getElementById("edu");
    
        if (name == 'skill') {
            skill.style.display = "block"
            edu.style.display = "none";
            exp.style.display = "none";
        } else if (name == 'exp') {
            skill.style.display = "none";
            exp.style.display = "block";
            edu.style.display = "none";
        } else if (name == 'edu') {
            skill.style.display = "none";
            exp.style.display = "none";
            edu.style.display = "block";
        }
    }
 //---------------------showmore script-----------------------------   
 
 function morecont(){
    var showmore = document.querySelector(".showmore");
    var more = document.querySelector(".more")
    var less = document.querySelector(".less")
    showmore.style.display ="block";
    more.style.display ="none"
    less.style.display ="flex"
}

function lesscont(){
    var showmore = document.querySelector(".showmore");
    var less = document.querySelector(".less")
    var more = document.querySelector(".more")
    more.style.display ="flex"
    showmore.style.display ="none";
    less.style.display ="none"
}
//-------------------------side-nav-bar--------------------
document.addEventListener("DOMContentLoaded", function () 
{
    var sidenavbar = document.querySelector(".side-navbar");
    function opennav() {
        sidenavbar.style.left = "0";
    }

    var xmark = document.querySelector(".xmark");
    xmark.addEventListener("click", function ()
    {
        sidenavbar.style.left = "-50%";
    });
    window.opennav = opennav;
});
//------------sendbutton----------------------------

document.addEventListener('DOMContentLoaded', function () {
    const scriptURL = "https://script.google.com/macros/s/AKfycbxfUZj9BIb_N0DdB0wN_JmYvzSjFc3IIgBLxYIPucy2V54TYT-aj0LIeFz4oD7HK8OW/exec";
    const form = document.forms['submit-to-google-sheet'];
  
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => console.log('Success!', response))
          alert("Response Sent")
          .catch(error => console.error('Error!', error.message));
      });
    } else {
      console.error('Form not found');
    }
  });
