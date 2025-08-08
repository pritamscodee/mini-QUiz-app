const startbtn = document.getElementById("btn1");
const box1 = document.getElementById("container1")
const box2 = document.getElementById("container2")
const box3 = document.getElementById("container3")
const box4 = document.getElementById("container4")
const options1 = document.querySelectorAll('#options1 .option')
const options2 = document.querySelectorAll(`#options2 .option `)
const options3 = document.querySelectorAll(`#options3 .option `)

const options4 = document.querySelectorAll(`#options4 .option `)

const output = document.getElementById("showresult")

const nxtbtn1 = document.getElementById("btn11")
const nxtbtn2 = document.getElementById("btn12")
const nxtbtn3 = document.getElementById("btn13")
const submitbtn = document.getElementById("lastbtn")

let finalscore = 0;

const correctans = ["A) Python", "D) Pasta", "D) China", "A) Sundar pichai",]






/*Page Load → User Clicks → selectedans1 gets value → User clicks Next → Check Score
                                                                        ↑ Perfect timing!*
                                                                        The assignment happens asynchronously (when user clicks), but your check was happening synchronously (immediately when page loads).*/




startbtn.addEventListener("click", startquiz);
function startquiz() {
    startbtn.style.display = "none"
    setTimeout
        (() => {
            box1.style.display = "block";
        }, 3000)
}





let selectedans1 = null;
options1.forEach((opt) => {

    opt.addEventListener("click", () => {

        options1.forEach((op => {

            op.style.backgroundColor = ""


        }))
        opt.style.backgroundColor = "lightblue"
        selectedans1 = opt.textContent.trim();

    })



})







nxtbtn1.addEventListener("click", nextquestion);

function nextquestion() {

    box1.style.display = "none";

    setTimeout(() => { box2.style.display = "block"; }, 2000)
    if (selectedans1 === correctans[0]) {
    finalscore += 1
    console.log("final score of question 1 is :",finalscore)
}

}



let selectedans2
options2.forEach((opt2) => {

    opt2.addEventListener("click", () => {


        options2.forEach((op2) => {

            op2.style.backgroundColor = ""
        })
        opt2.style.backgroundColor = "lightblue"
        selectedans2 = opt2.textContent.trim();

    })

})




nxtbtn2.addEventListener("click", nextquestion2);

function nextquestion2() {

    box2.style.display = "none";

    box3.style.display = "block"
    if (selectedans2 === correctans[1]) {
    finalscore += 1
     console.log("final score of question 2 is :",finalscore)
}

}









let selectedans3


options3.forEach((opt3) => {

    opt3.addEventListener("click", () => {


        options3.forEach((op3) => {

            op3.style.backgroundColor = ""
        })
        opt3.style.backgroundColor = "lightblue"
        selectedans3 = opt3.textContent.trim();

    })

})







nxtbtn3.addEventListener("click", nextquestion3);

function nextquestion3() {

    box3.style.display = "none";

    box4.style.display = "block"
    if (selectedans3 === correctans[2]) {
    finalscore += 1
     console.log("final score of question 3 is :",finalscore)
}

}



let selectedans4
options4.forEach((opt4) => {

    opt4.addEventListener("click", () => {
        options4.forEach((op4) => {

            op4.style.backgroundColor = ""
        })
        opt4.style.backgroundColor = "lightblue"
        selectedans4 = opt4.textContent.trim();


    })

})






submitbtn.addEventListener("click", submitquiz);
function submitquiz() {


    box4.style.display = "none";
    const endbox = document.getElementById("endbox");
    endbox.style.display = "block";
    if (selectedans4 === correctans[3]) {
    finalscore += 1
}
 console.log( "final score of question 4 is :",finalscore)
    output.innerText = finalscore;


}












