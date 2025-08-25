// query selector dom
const container = document.querySelector('#container')
const content = document.querySelector('.content')

// create element
const question = document.createElement('h2')
const options = document.createElement('ul')
const next = document.createElement('button')

// inisiasi variabel
let score = 0
let indexQuiz = 0
let isAgain = false

// varibel yang menampung quiz
const quizes = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Jupiter', 'Mars', 'Venus', 'Saturn'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is 2 + 2?',
    options: ['3', '4', '5', '6'],
    correctAnswer: '4',
  },
  {
    question: 'Who painted the Mona Lisa?',
    options: ['Van Gogh', 'Da Vinci', 'Picasso', 'Monet'],
    correctAnswer: 'Da Vinci',
  },
  {
    question: 'Which is the largest ocean?',
    options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    correctAnswer: 'Pacific',
  },
]

// event handler yang ada click yang ada di dalam element content
content.addEventListener('click', e => {
  // ambil semua element li
  const list = content.querySelectorAll('li')
  // jika target adalah li
  if (e.target.tagName == 'LI') {
    // jika nilainya sama dengan jawabannya quiz
    if (e.target.textContent == quizes[indexQuiz].correctAnswer) {
      e.target.classList.add('true')
      score += 1
      // jika tidak
    } else {
      e.target.classList.add('false')
    }
    // next quiz
    list.forEach(li => {
      if (li.textContent == quizes[indexQuiz].correctAnswer) {
        li.classList.add('true')
      }
      li.classList.remove('option')
      li.style.pointerEvents = 'none'
    })
    indexQuiz += 1
    // hapus kelas hidden
    next.classList.remove('hidden')

    // jika target adalah button dan isAgain
  } else if (e.target.tagName === 'BUTTON' && isAgain) {
    next.textContent = 'Next'
    indexQuiz = 0
    score = 0
    getDataQuiz()
  } else if (e.target.tagName == 'BUTTON') {
    if (quizes.length > indexQuiz) {
      getDataQuiz()
    } else {
      // ubah text
      next.textContent = 'Play Again'
      content.removeChild(options)
      question.textContent = `You scored ${score} out of ${quizes.length}`
      isAgain = true
    }
    // hapus semua list setiap next quiz
    list.forEach(li => {
      li.remove()
    })
  }
})

function getDataQuiz() {
  // inisiasi
  isAgain = false
  question.textContent = quizes[indexQuiz].question
  next.textContent = 'Next'
  next.classList.add('hidden')

  content.appendChild(question)
  content.appendChild(options)
  content.appendChild(next)

  quizes[indexQuiz].options.forEach((_, index) => {
    const li = document.createElement('LI')
    li.textContent = quizes[indexQuiz].options[index]
    li.classList.add('option')
    li.style.pointerEvents = 'auto'
    li.classList.remove('true', 'false')
    options.appendChild(li)
  })
  next.classList.add('hidden')
}

getDataQuiz()
