export class Question {
  constructor(data){
    this.type = data.type
    this.question = data.question
    this.difficulty = data.difficulty
    this.correct = data.correct_answer
    this.incorrect = data.incorrect_answers
  }

  get QuestionTemplate() {
return /*html*/ `

<div class="col-12 p-5">
<div class="col-12 fs-3">${this.question}</div>
<div class="col-12">${this.difficulty}</div>
<div class="d-flex flex-row justify-content-center">
  <div class="col-5">${this.correct}</div>
  <div class="col-5">${this.incorrect}</div>
</div>
<div class="d-flex flex-row justify-content-center">
  <div class="col-5">C</div>
  <div class="col-5">D</div>
</div>
</div>
`
  }
}

