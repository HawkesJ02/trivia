export class Question {
  constructor(data){
    this.difficulty = data.difficulty
    this.correct = data.correct_answer
  }


  get QuestionTemplate() {
return /*html*/ `
<div>${this.difficulty}</div>
`
  }
}

