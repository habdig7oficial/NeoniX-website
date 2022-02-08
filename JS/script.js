document.addEventListener("DOMContentLoaded",function () {

    iso = document.querySelector("#iso")
    usb = document.querySelector("#usb")
    baixar = document.querySelector("#baixar")


    let form = document.querySelector("form");

    
    form.addEventListener("submit", function(event) {
      let data = new FormData(form);
      let type = "";
      let redirect;



      for (const entry of data) {
        type = entry[1];
      };
      /*console.log(type)*/

      if (type == "iso") {
        redirect = window.open("https://linux.org/")
      }

      else if (type == "usb") {
        redirect = window.open("https://illumos.org/")
      } 
      
      else {
          
      }


      event.preventDefault();
    }, false);
    



})