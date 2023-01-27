let radioButtons = document.querySelectorAll("input[name='gender']");
let otherRadioButtons = document.getElementsByName("gender")
let result = document.getElementById("result");

function findSelected() {
    let selected = document.querySelector("input[name='gender']:checked").value;

    result.textContent = `value of selected button: ${selected}`;
    
}

// radioButtons.forEach(radioButton => {
//     radioButton.addEventListener("change", findSelected)
    
// })

function getSelected() {
    var ele = document.getElementsByName('gender');

    for(i=0; i < ele.length; i++) {
        if (ele[i].checked)
        result.innerHTML = ele[i].value;
    }
}