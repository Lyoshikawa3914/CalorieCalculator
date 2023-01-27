const overlay = document.getElementById('overlay');

// the container variables
const errorContainer = document.getElementById("error");
const questionContainer = document.getElementById("question");
const resultsContainer = document.getElementById("results")

// the ids for each input in 'containerA' in html
const inputAge = document.getElementById("ageInput");
const inputWeight = document.getElementById("weightInput");
const inputHeight = document.getElementById("heightInput");

let selection = document.querySelector("select");

const radioInput = document.getElementsByName("gender");
const radioButtons = document.querySelectorAll("input[name = 'gender']");

// the buttons in 'containerA'
const submitBtn = document.getElementById("submit")
const clearBtn = document.getElementById("clear")

// output that will get data from the input tags
const outputLose = document.getElementById("lose");
const outputMaintain = document.getElementById("maintain");
const outputGain = document.getElementById("gain");

radioButtons.forEach(radioButton => {
    radioButton.addEventListener("change", getRadioValue)
})

function submitFunction() {
    // this will happen if user enters a non int or a textfield is empty
    if ((inputAge.value == '') || (isNaN(inputAge.value)) ||
    (inputWeight.value == '') || (isNaN(inputWeight.value)) ||
    (inputHeight.value == '') || (isNaN(inputHeight.value))
    ) {
        errorContainer.classList.add('active');
        overlay.classList.add('active');
    }
    
    // this will happen if user doesn't select an activity from dropdown bar
    else if (getSelectedValue() == 'select')
     {
        errorContainer.classList.add('active');
        overlay.classList.add('active');
    }

    // this will happen if user does not click on radio buttons
    else if (radioInput[0].checked == false && radioInput[1].checked == false)
     {
        errorContainer.classList.add('active');
        overlay.classList.add('active');
    }
    
    // the calculations
    else {
        if (getRadioValue() == "male") {
            var bmr = bmrMale(Number(inputWeight.value), Number(inputHeight.value), Number(inputAge.value));
            
            
            let result = harrisBen(Math.ceil(bmr), getSelectedValue());

            outputLose.innerHTML = Math.ceil(result) - 500;

            outputMaintain.innerHTML = Math.ceil(result);

            outputGain.innerHTML = Math.ceil(result) + 500;
        }
        else if (getRadioValue() == "female") {
            var bmr = bmrFemale(Number(inputWeight.value), Number(inputHeight.value), Number(inputAge.value));
            
            
            let result = harrisBen(Math.ceil(bmr), getSelectedValue());

            outputLose.innerHTML = Math.ceil(result) - 500;

            outputMaintain.innerHTML = Math.ceil(result);

            outputGain.innerHTML = Math.ceil(result) + 500;
        }
        
        
       

        resultsContainer.classList.add("active");
        overlay.classList.add('active');
    }
} 

function closeResultsPopup() {
    resultsContainer.classList.remove("active");
    overlay.classList.remove("active");
}

function closeErrorPopup() {
    errorContainer.classList.remove("active");
    overlay.classList.remove("active");
}

// this will open the question pop up if user clicks on the '?' button
function questionPopup() {
    questionContainer.classList.add('active')
    overlay.classList.add('active')
    
}
// this will close the question pop up when user clicks the 'X' button
function closeQuestionPopup() {
    questionContainer.classList.remove('active')
    overlay.classList.remove('active')
}

function getSelectedValue() {
    return selection.options[selection.selectedIndex].value;
}

function getRadioChecked() {
    return radioInput.document.querySelector('input[type="radio"]:checked');
}
function getRadioValue() {

    var ele = document.getElementsByName('gender');
    for(i=0; i < ele.length; i++) {
        if (ele[i].checked)
        return ele[i].value;
    }
}

function resultOutput() {
    outputGain.innerHTML = inputAge.value;
}

// function will clear input from textfields
function clearInput() {
    inputWeight.value = ''
    inputAge.value = ''
    inputHeight.value = ''
    
}

//BMR: basal metabolic rate: amount of energy (in the form of calories) that the body needs to function
// if at rest for 24 hours

function bmrMale(kg, cm, age) {
    return  66.5 + (13.75 * kg) + (5.003 * cm) - (6.75 * age);
    

}

function bmrFemale(kg, cm, age) {
    var result = 655.1 + (9.563 * kg) + (1.850 * cm) - (4.676 * age);
    return result
}

//harris-benedict equation
function harrisBen(bmr, activity) {
    if (activity == "sedentary") {
        return bmr * 1.2;
    }
    else if (activity == "moderate") {
        return bmr * 1.55;
    }
    else if (activity == "active") {
        return bmr * 1.725;
    }
    else {
        return bmr * 1.9;
    }
    
}



clearBtn.addEventListener('click', clearInput);

