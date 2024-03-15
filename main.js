
/*
  Biggest Problems for Tomorrow:
  1) The List of Freelaancers is not in under #FreelancersList and instead underneath the <div>
  2) The User Input for Names, Price, and Occupation submit without pressing the Submit button(The submit the form everytime I click the form)
  3) Because of problem 2, the newPerson array sbmits before all areas are filled out resulting in excessive creation of new <ul>
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
    showcaseFreelancers = [freelancers[x].name, " $" + freelancers[x].price, " " + freelancers[x].occupation]
    const newSlot = document.createElement('ul');
    const y = document.createTextNode(showcaseFreelancers)
    newSlot.appendChild(y)
    document.body.appendChild(newSlot)
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
    const y = document.createTextNode(showcaseFreelancers)
    newSlot.appendChild(y)
    document.body.appendChild(newSlot)
  
    i++
  }
}

function calculateAveragePrice() {
  let sum = freelancers.reduce((acc, freelancers) => acc = acc + freelancers.price, 0)
  average = sum / freelancers.length
  return average
}

const showAvg = calculateAveragePrice()
showcaseAvg = document.querySelector('#avgText')
showcaseAvg.innerText = `Average Salary is ${showAvg}`

const form = document.getElementById('form')
form.addEventListener("click", (event) => {
  event.preventDefault();

  const inputName = document.getElementById('name')
  const inputPrice = document.getElementById('price')
  const inputJob = document.getElementById('occupation')

  const newPerson = []
  newPerson["name"]= inputName.value
  newPerson["price"]= parseInt(inputPrice.value)
  newPerson["occupation"]= inputJob.value
  freelancers[freelancers.length] = newPerson
  
  showcaseFreelancers = [freelancers[freelancers.length].name, " $" + freelancers[freelancers.length].price, " " + freelancers[freelancers.length].occupation]
  const newSlot = document.createElement('ul');
  const y = document.createTextNode(showcaseFreelancers)
  newSlot.appendChild(y)
  document.body.appendChild(newSlot)


})

// const newArray = []
// const combine = []

// const enterName = prompt("Enter a Name, Price, and Occupation (Please Seperate by commas)", "Dr. Kuron, 57, astronaut")
// const splitValue = enterName.split(", ");
// splitValue.forEach((enterName) => newArray.push(enterName));

// combine["name"]= newArray[0]
// combine["price"]= parseInt(newArray[1])
// combine["occupation"]= newArray[2]
// freelancers[freelancers.length] = combine
