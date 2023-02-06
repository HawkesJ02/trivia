import { appState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";
import { setHTML } from "../Utils/Writer.js";
import { Pop } from "../Utils/Pop.js";


function _draw_questions(){
  console.log('drawing questions test');
  let template = ' '
  appState.questions.forEach(q => template += q.QuestionTemplate)
  setHTML('app', template)
}
export class QuestionController {
  constructor(){
    console.log('Question controller working!');
    questionService.test()
    questionService.get_question()
    appState.on('questions', _draw_questions)
  }

  async get_question(){
    try {
      await questionService.get_question()
    } catch (error) {
      Pop.error(error)
    }
  }
}