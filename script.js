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

// const createStudentComponent = (name, subject, info) => {
//     return `
//         <div class="student">
//         <h1 class="xx-large">${name}</h1>
//             <section class= "bordered dashed section--padded">${subject}</section>
//             <aside class= "pushRight">${info}</aside>
//         </div>
//     `
// }


// for (let i = 0; i < students.length; i++) {
//     document.querySelector("#container").innerHTML += createStudentComponent(students[i].name, students[i].subject, students[i].info)
//     let studentComponent = document.querySelectorAll(".xx-large")
//     if (students[i].score >= 60) {
//         studentComponent[i].classList.add("passing")
//     } else {
//         studentComponent[i].classList.add("failing")
//     }  
// }







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


// Advanced Challenge: Using createElement for Components

//     The learning objective of this challenge is to move away from using string templates completely, and use the methods of createElement() and appendChild() to create DOM components.

// createElement()

// JavaScript provides the document.createElement() method which creates a virtual DOM element that doesn't exist in the DOM until you add it.
// appendChild()

// The document.appendChild() method will take a virtual DOM element you created and attach it as a child element of another one.
// Usage

// Create an unordered list element
// const list = document.createElement('ul')

// Create a list item for our list
// const listItem = document.createElement('li')
// listItem.className = "president"
// listItem.textContent = "George Bush"

// Put the list item on the unordered list
// list.appendChild(listItem)

// console.log(list)

// When you insert the list object to the DOM, it will generate the following HTML.

//{ <ul>
 //   <li class="president">George Bush</li>
// </ul> *}

// Creating Elements

// Using createElement(), you're going to create a simple list of chat messages that you might have with one of your family members. Maybe it's that wacky aunt that you see every Christmas and Fourth of July.

//     Put an article DOM element in your index.html with the id attribute value of messages.
//     In your JavaScript, use querySelector() to obtain a reference to that article DOM element.
//     Create five (5) section components, each with a class of message, and with the content of your choosing.
//     Using appendChild(), attach each message as a child to the messages element.

// Example output.

/* <article id="messages">
    <section class="message">
        Are we doing fireworks this year?
    </section>
    <section class="message">
        After last year's "tree incident", should we?
    </section>
    <section class="message">
        The fire fighters put it out in like a minute. Wasn't even a real fire.
    </section>
    <section class="message">
        We can set them off in the street.
    </section>
    <section class="message">
        Our neighbors' houses are flammable, too
    </section>
</article> */


// Put an article DOM element in your index.html with the id attribute value of messages.

const messageArticle = document.createElement('article');
messageArticle.id = 'messages';
// console.log(messageArticle);
// In your JavaScript, use querySelector() to obtain a reference to that article DOM element.

// Create five (5) section components, each with a class of message, and with the content of your choosing.
const articleSection = document.createElement('section');
articleSection.text =  "My dog is named Sissy";
messageArticle.appendChild(articleSection);

console.log(messageArticle)
