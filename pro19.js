const countersEL = document.querySelectorAll(".counter")
//this is acually an array of three elements



countersEL.forEach((counterEL) => {
    counterEL.innerText = "0"
    incrementCounter() 
    function incrementCounter() {
     let cur = +counterEL.innerText
     const dataCeil = counterEL.getAttribute("data-ceil")
    
      const increment =  dataCeil / 15 
      cur = Math.floor(cur + increment) 
     
     if (cur < dataCeil) {
        counterEL.innerText = cur
        setTimeout(incrementCounter () , 50)
      }else{
          counterEL.innerText = dataCeil
      }
   
    }
})
