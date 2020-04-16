// document.querySelector(".className").innerHTML += `String`


//fat arrow
//const printStudentToDOM = (name, subject, info) => {body of function}






// Practice: Student Components

//     Create a new project sub-directory in your workspace/javascript directory.
//     Paste the array of student objects above into your JavaScript file.
//     Copy the createStudentComponent function into your code.
//     Add the following styles to your CSS. 


const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
];

const createStudentComponent = (name, subject, info) => {
    return `
        <div class="student">
        <h1 class="xx-large">${name}</h1>
            <section class= "bordered dashed section--padded">${subject}</section>
            <aside class= "pushRight">${info}</aside>
        </div>
    `
}


for (let i = 0; i < students.length; i++) {
    document.querySelector("#container").innerHTML += createStudentComponent(students[i].name, students[i].subject, students[i].info)
    let studentComponent = document.querySelectorAll(".xx-large")
    if (students[i].score >= 60) {
        studentComponent[i].classList.add("passing")
    } else {
        studentComponent[i].classList.add("failing")
    }  
}







// Practice: One Object to Rule Them All

// Instead of defining four arguments for the createStudentComponent function, and then passing the individual properties when it is invoked, refactor the function to accept the entire object as a single argument.

// Then refactor your string interpolation code to use the object properties.

// const createStudentComponent = (object) => {
//     return `
//         <div class="student">
//         <h1 class="xx-large ">${object.name}</h1>
//             <section class= "bordered dashed section--padded">${object.subject}</section>
//             <aside class= "pushRight">${object.info}</aside>
//         </div>
//     `
// }


// for (let i = 0; i < students.length; i++) {
//     document.querySelector("#container").innerHTML += createStudentComponent(students[i])
//     let studentComponent = document.querySelectorAll(".xx-large")
//     if (students[i].score >= 60) {
//         studentComponent[i].classList.add("passing")
//     } else {
//         studentComponent[i].classList.add("failing")
//     }  

// }







// Challenge: Composition of Smaller Components

// Write functions that build the sub-components of the larger student component.

//     h1
//     section
//     aside

// Invoke those functions inside the createStudentComponent function to build the parent <div>.


// const createTag = (tag, insideTagString) => {
//     return `
//         <${tag}>${insideTagString}</${tag}>
//     `
// }

// const createStudentComponent = (object) => {
//     return `
//         <div class="student">
//         ${createTag("h1", object.name)}
//         ${createTag("section", object.subject)}
//         ${createTag("aside", object.info)}
//         </div>
//     `
// }




// const createTag = (tag, insideTagString, classVar) => {
//     return `
//         <${tag} class="${classVar}">${insideTagString}</${tag}>
//     `
// }

// const createStudentComponent = (object) => {
//         return `
//             <div class="student">
//             ${createTag("h1", object.name, "xx-large passing")}
//             ${createTag("section", object.subject, "bordered dashed section--padded")}
//             ${createTag("aside", object.info, "pushRight")}
//             </div>
//         `
//     }

//     console.log(createStudentComponent(students[1]))