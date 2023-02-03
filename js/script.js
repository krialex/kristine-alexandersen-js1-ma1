// question 1  
const cat = {
      complain: function() {
        console.log("Meow!");
      }
}
cat.complain();
   

// question 2
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";


// question 3
heading.style.fontSize = "2em";


// question 4
const headingClass = heading.classList;
headingClass.add("subheading");


// question 5
const paragraph = document.querySelectorAll("p");

for (let i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "red";
}


// question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p class="backgroundColor">New paragraph</p>`;

document.querySelector(".backgroundColor").style.background = "yellow";


// question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function loopList(list) { 
    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}
loopList(cats);
   

// question 8
const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
    let html = "";
    
    for(let i = 0; i < cats.length; i++) {
        if(!cats[i].age) {
            cats[i].age = "Age unknown";
        }
        html += `<div>
                    <h5>Name: ${cats[i].name}</h5>
                    <p>Age: ${cats[i].age}</p>
                </div>`;
    }
   
return html;
}

catContainer.innerHTML = createCats(cats); 
