
/*
  Small problem:
  When creating a new profile while the function addFreelancer() is running will displlay the profile twice on the page
  User can put in empty Price form which will resulte in NaN
*/


const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const freelancerIntervalId = setInterval(addFreelancer, 4000);

function listFirstThreeElements () {
  console.log(freelancers[0])
  console.log(freelancers[1])
  console.log(freelancers[2])

  for (let x = 0; x < 3; x++) {
    const freelancersId = document.getElementById("FreelancersList")

    showcaseFreelancers = [freelancers[x].name, " $" + freelancers[x].price, " " + freelancers[x].occupation]
    const newSlot = document.createElement('ul');
    const addText = document.createTextNode(showcaseFreelancers)
    newSlot.appendChild(addText)
    freelancersId.appendChild(newSlot)
  }
}
listFirstThreeElements()

let i = 3
function addFreelancer() {
  if (i >= freelancers.length) {
    
    clearInterval(freelancerIntervalId)
    calculateAveragePrice()
  }

  else {
    console.log(freelancers[i])
    
    const freelancersId = document.getElementById("FreelancersList")
    //Couldnt use .split to split them up
    const showcaseFreelancers = [freelancers[i].name, " $" + freelancers[i].price, " " + freelancers[i].occupation]
    const newSlot = document.createElement('ul');
    const addText = document.createTextNode(showcaseFreelancers)
    newSlot.appendChild(addText)
    freelancersId.appendChild(newSlot)
  
    i++
  }
}

function calculateAveragePrice() {
  let sum = freelancers.reduce((acc, freelancers) => acc = acc + freelancers.price, 0)
  average = sum / freelancers.length

  //.toFixed rounds it to the hundrenth decimal
  return average.toFixed(2)
}

const showAvg = calculateAveragePrice()
showcaseAvg = document.querySelector('#avgText')
showcaseAvg.innerText = `Average Salary is $${showAvg}`

const button = document.querySelector('button')
button.addEventListener("click", (event) => {
  event.preventDefault();
  
  const inputName = document.getElementById('name')
  const inputPrice = document.getElementById('price')
  const inputJob = document.getElementById('occupation')
  
  //Requires inputName and inputJob to be filled out (Couldn;t figure out how to do inputPrice)
  if (inputName.value == "") {
    console.log("Please Fill out Name Form")
    return
  }

  if (inputJob.value == "") {
    console.log("Please Fill out Occupation Form")
    return
  }
  console.log("Logged")

  const newPerson = []
  newPerson["name"]= inputName.value
  newPerson["price"]= parseInt(inputPrice.value)
  newPerson["occupation"]= inputJob.value
  freelancers[freelancers.length] = newPerson
  
  const freelancersId = document.getElementById("FreelancersList")

  showcaseFreelancers = [freelancers[freelancers.length-1].name, " $" + freelancers[freelancers.length-1].price, " " + freelancers[freelancers.length-1].occupation]
  const newSlot = document.createElement('ul');
  const addText = document.createTextNode(showcaseFreelancers)
  newSlot.appendChild(addText)
  freelancersId.appendChild(newSlot)
  
  calculateAveragePrice()
  const showAvg = calculateAveragePrice()
  showcaseAvg = document.querySelector('#avgText')
  showcaseAvg.innerText = `Average Salary is $${showAvg}`
})
