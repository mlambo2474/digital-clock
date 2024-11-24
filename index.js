//return element with an id using the getElement by Id method//
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

//we can change our elements dynamically by creating//
 //a function to obtain data from our computer//
function updateClock(){
    //getting hours from our computer using date constructors//
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let ampm = "AM"
// making a logic to create and checking it using If statements//
        if (h > 12) {
            h = h - 12;
            ampm = "PM";

        } 
        h = h < 10? "0" + h : h;
        m = m < 10? "0" + m : m;
        s = s < 10? "0" + s : s;

        hourEl.innerText = h;
        minuteEl.innerText = m;
        secondEl.innerText = s;
        ampmEl.innerText = ampm;

        


        setTimeout(()=>{
            updateClock()
        },1000)
        
  };
  
updateClock();

