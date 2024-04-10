const { adverbs } = require("./data")

function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const divs = document.querySelectorAll("div")
  divs.forEach(div => {div.classList.add("widget")})

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const qodQuote = document.createElement("div")
  const randomNum = Math.floor(Math.random()*quotes.length)
  qodQuote.textContent = quotes[randomNum].quote
  const qodAuthor = document.createElement("div")
  qodAuthor.textContent = `${quotes[randomNum].author} in ${quotes[randomNum].date || "an unknown date"}`
  // if (quotes[randomNum].date === null) {
  //   qodAuthor.textContent += " in an unknown date"
  // } else {
    // qodAuthor.textContent += ` in ${quotes[randomNum].date}`
  // }
  const qod = document.querySelector(".quoteoftheday")
  qod.appendChild(qodQuote)
  qodQuote.insertAdjacentElement("afterend", qodAuthor)

  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const corpSpeak = document.querySelector(".corporatespeak")
  const corpSpeakParagraph = document.createElement("p")
  const randomNoun1 = nouns[Math.floor(Math.random()*nouns.length)]
  const randomNoun2 = nouns[Math.floor(Math.random()*nouns.length)]
  const randomVerb1 = verbs[Math.floor(Math.random()*verbs.length)]
  const randomVerb2 = verbs[Math.floor(Math.random()*verbs.length)]
  const randomAdverb1 = adverbs[Math.floor(Math.random()*adverbs.length)]
  const randomAdverb2 = adverbs[Math.floor(Math.random()*adverbs.length)]
  corpSpeakParagraph.textContent = `We need to ${randomVerb1} our ${randomNoun1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNoun2} ${randomAdverb2}.`
  corpSpeak.appendChild(corpSpeakParagraph)

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countDownClass = document.querySelector(".countdown")
  const countDownText = document.createElement("p")
  countDownClass.appendChild(countDownText)
  
  let countDownCount = 5
  let strCountDown = `T-minus ${countDownCount}...`
  countDownText.textContent = strCountDown

  myInterval = setInterval(() => {
    countDownCount--
    if (countDownCount > 0) {
      strCountDown = `T-minus ${countDownCount}...`
    } else {
      strCountDown = "Liftoff! 🚀"
      clearInterval(myInterval)
    }
    countDownText.textContent = strCountDown
  }, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here
  const person = people[Math.floor(Math.random()*people.length)]
  const friendsClass = document.querySelector(".friends")
  const yob = person.dateOfBirth.split("-")[0]
  // const yob = person.dateOfBirth.slice(0, 4)
  let friendsText = `${person.fname} ${person.lname} was born in ${yob} `

  function getPersonFromID(id) {
    const friend = people.find(friend => friend.id === id)
    return `${friend.fname} ${friend.lname}`
  }

  let friendStr = ""
  if (person.friends.length === 0) {
    friendsText += "and has no friends."
  } else if (person.friends.length === 1) {
    friendStr = getPersonFromID(person.friends[0])
    friendsText += `and is friends with ${friendStr}.`
  } else {
    for (let i=0; i<person.friends.length; i++) {
      friendStr = getPersonFromID(person.friends[i])
      if (i===0) {
        friendsText += `and is friends with ${friendStr}`
      } else if (i===1 && i<person.friends.length-1) {
        friendsText += `, ${friendStr}`
      } else {
        friendsText += ` and ${friendStr}.`
      }
    }
  }
  const personDescription = document.createElement("p")
  personDescription.textContent = friendsText
  friendsClass.appendChild(personDescription)
  

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here
  const widgetElement = document.querySelectorAll(".widget").forEach((widgetElement, index) => {
    widgetElement.setAttribute("tabindex", index + 1)
    // widgetElement.setAttribute("tabindex", index + 1 + "")
    // widgetElement.setAttribute("tabindex", String(index + 1))
  })

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
