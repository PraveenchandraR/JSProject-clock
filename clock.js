function ClockStart()
{
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    if (hours > 12 && seconds > 0) {
        hours = hours - 12; //conversion of 24 hour clock to 12 hour clock
        let part = document.getElementById("part");
        part.innerHTML = "PM";
    
    }
     

    console.log(hours, minutes, seconds);


    let hrs = document.getElementById("hrs");
    hrs.innerText = hours;
    let min = document.getElementById("min");
    min.innerText = minutes;
    let sec = document.getElementById("sec");
    sec.innerText = seconds;
     

}
setInterval(() => {
    ClockStart();
}, 1000)
//-------------------------------------------------------------



function changeCurrentTimeMessage() {

    var hours = new Date().getHours();

    if (hours >= 6 && hours < 12) {
        document.getElementById("diffont").innerText = "GOOD MORNING!! WAKE UP !!";
    
    }

    else if (hours >= 12 && hours < 16) {
        let diffont = document.getElementById("diffont");
        diffont.innerText = "GOOD AFTERNOON !! TAKE SOME SLEEP";
    }
    else if (hours >= 16 && hours < 19) {
        let diffont = document.getElementById("diffont");
        diffont.innerText = "GOOD EVENING !!";
    }
    else if (hours >= 19 && hours < 24) {
        let diffont = document.getElementById("diffont");
        diffont.innerText = "CLOSE YOUR EYES AND SLEEP";
    }
}changeCurrentTimeMessage();
setInterval(changeCurrentTimeMessage, 1000);
//------------------------------------------------------------------------------------------------------------
//to change the image and text according to the alarm timings
{
    var date = new Date();
    var hours = date.getHours();
   // hours = hours - 12;
   
    var inside1 = document.getElementById('inside1');

    inside1.addEventListener('click', () => {
      
        let dropdowntext = document.getElementById("dropdown");
        let dropdown2Value = document.getElementById("dropdown1");
        let dropdown3Value = document.getElementById("dropdown2");
        let dropdown4Value = document.getElementById("dropdown3");

        console.log(dropdowntext.value);
          //--first we will get the values of alarm options to the below box--- 
        let wake = document.getElementById("wish");
        wake.innerHTML = dropdowntext.options[dropdowntext.selectedIndex].text;
        let lunch = document.getElementById("wish2");
        lunch.innerHTML = dropdown2Value.options[dropdown2Value.selectedIndex].text;
        console.log("lunch.innerhtml", lunch.innerHTML);
        
        let naptime = document.getElementById("wish3");
        naptime.innerHTML = dropdown3Value.options[dropdown3Value.selectedIndex].text;
        let night = document.getElementById("wish4");
        night.innerHTML = dropdown4Value.options[dropdown4Value.selectedIndex].text;
       // wake.innerHTML = dropdowntext.value;
        var img = document.getElementById('img');
       

        if (hours === parseInt(dropdowntext.value)) {
            
            img.src = 'window.png';
            img.style.backgroundSize = "cover";
            let second = document.getElementById("second");
            second.innerText = "LETS HAVE SOME LUNCH";
        }
        else if (hours === parseInt(dropdown2Value.value)) {
            console.log("parseint of lunch dropdown.value", parseInt(dropdown2Value.value))
            img.src = 'party.png';
            let second = document.getElementById("second");
            second.innerText = "LETS HAVE SOME LUNCH";
        }
        else if (hours === parseInt(dropdown3Value.value)) {
            img.src = 'cup.png';
             let second = document.getElementById('second');
        second.innerHTML = "STOP YAWNING, GET SOME TEA..ITS JUST EVENING";
            
        }
        else if (hours === parseInt(dropdown4Value.value)) {
            img.src = 'sleeping.png';
              let second = document.getElementById('second');
        second.innerHTML = "It time to sleep and taake some rest";
        }
    })
}

// let second = document.getElementById('second');
        // second.innerHTML = "GOOD NITGHT!1 SLEEP !!";
//         // let second = document.getElementById("second");
//         // second.innerHTML = "LETS HAVE SOME LUNCH";
//         // let img = document.getElementById("img");
//         // let inside1 = document.getElementById("inside1");
    
//         //         inside1.addEventListener('click', () => {
//         //          img.src = 'party.png';
//         // })
        
      
       
//     }
  
       

//         // let img = document.getElementById("img");
//         // let inside1 = document.getElementById("inside1");
    
//         //inside1.addEventListener('click', () => {
//         //img.src = 'cup.png';
//         //})
//     }
 
        
//         // // let img = document.getElementById("img");
//         // let inside1 = document.getElementById("inside1");
    
//         //inside1.addEventListener('click', () => {
//         //img.src = 'sleeping.png';
//         //})
//     }
// }

// //--------------------------------------------------------



// var button = document.getElementById("inside1");
// var originalText = button.innerHTML;

// button.addEventListener("click", function() {
//     button.innerHTML = "Its Party Time!!";
//     setTimeout(function() {
//         button.innerHTML = originalText;
//     }, 3000);
// });



// function praveen() {
//     var options = document.getElementById("dropdown").value;
// localStorage.setItem("value",options);

//     document.getElementById("wish").innerHTML = localStorage.getItem("value");

// }
// //------------------------------------------------------------------------------
// //to change the right panale;--

// {
//     let date = new Date();

//     let hours = date.getHours();
//     hours = hours - 12;
    
//     var dropdown1 = document.getElementById("dropdown3");
//     let value1 = dropdown1.value;

//       let img = document.getElementById("img");
//     let inside1 = document.getElementById("inside1");
    
//   inside1.addEventListener('click', () => {
//      // if (hours === value1) {
//           let second = document.getElementById("second");
//           second.innerText = "LETS HAVE SOME LUNCH";
      
      
//           img.src = 'party.png';
//       //}
//     })
// }