import { appState } from "../AppState.js";
import { questionService } from "../Services/QuestionService.js";

export class QuestionController {
  constructor(){
    console.log('Question controller working!');
    questionService.test()
    questionService.get_question()
  }
}