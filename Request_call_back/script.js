
var modal = document.getElementById("popup-modal");
var btn = document.getElementById("open-btn");
var span = document.getElementsByClassName("close")[0];
// 
// btn.onclick = function () {
//     modal.style.display = "block";
// }
span.onclick = function () {
    modal.style.display = "none";
}
// 
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$("#open-btn").click(()=>{
    $("#heading").html("Aditya Birla Health Insurance Company Limited")
    $("#popup-modal").css("display", "block")
    $("#addeddiv").css("display","none")

})
$("#open-btn1").click(()=>{
    $("#heading").html("Aditya Birla Sun Life AMC Limited")
    $("#popup-modal").css("display", "block")
    $("#addeddiv").css("display","none")


})
$("#open-btn2").click(()=>{
    $("#heading").html("Aditya Birla Money Limited")
    $("#popup-modal").css("display", "block")
    $("#addeddiv").css("display","none")
})
$("#open-btn3").click(()=>{
    $("#heading").html("Aditya Birla Housing Finance Limited")
    $("#popup-modal").css("display", "block")
    $("#addeddiv").css("display","none")

    appendText()
    // // var input = "<input/>";        // Create text with
    // $(".modalContainer #email-div").append(<input/>);
    
})
$("#open-btn4").click(()=>{
    $("#heading").html("Aditya Birla Sun Life Insurance Company Limited")
    $("#popup-modal").css("display", "block")
    $("#addeddiv").css("display","none")
})
$("#open-btn5").click(()=>{
    $("#heading").html("Aditya Birla Finance Limited")
    $("#popup-modal").css("display", "block")
    $("#addeddiv").css("display","none")
    appendText()
})

function appendText() {
    var input = `<div id="addeddiv">
    <label for="city" id="addedspan" class="city">
    Select city
    </label>
    <select id="addedinput">
        <option class="city-option">Mumbai</option>
        <option class="city-option">Bangalore</option>
        <option class="city-option">Pune</option>
        <option class="city-option">Hyderabad</option>
        <option class="city-option">Chennai</option>
        <option class="city-option">Delhi</option>
        <optionclass="city-option">Ahmedabad</option>
        <option class="city-option">Patna</option>
        <option class="city-option">Lucknow</option>
        <option class="city-option">Guwhati</option>
        <option class="city-option">Mangalore</option>
    </select>
    </div>`;        // Create text with HTML
    $(".modalContainer #email-div").append(input);   // Append new elements
  }



  

// var otpBtn = document.getElementsByClassName("otp_btn");
// var input = document.getElementsByClassName("mobile_input");

// if(input===""){
//     otpBtn.disabled = true;
// }else{
//     otpBtn.disabled = false;
// }
    

$('#contact').on("input",checkValue)
function checkValue(e) {
    // var input = document.getElementById('contact');
    // alert("name",input);
    console.log(typeof e.target.value);
    let mobileNum = e.target.value.split("+91 |")[1]
    
if(mobileNum.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){
$('#otp_button').css("background-color","#c7222a");
}else{
    $('#otp_button').css("background-color","grey") 
}
  }

$("#callback").click(()=>{$("#heading").html("aditiya birla")})


// $("p#44.test").css("background-color", "yellow");