import { appState } from "../AppState.js";
import { QuestionController } from "../Controllers/QuestionController.js";
import { Question } from "../Models/question.js";
import { trivia_api } from "./AxiosService.js";


class QuestionService {
  test(){
    console.log('test');
  }
 
  async get_question(){
    const res = await trivia_api.get('api.php?amount=10')
    console.log(res.data);
    const questions = res.data.results.map(q => new Question(q))
    console.log(questions);
    // appState.questions.push(res.data)
  }




}


export const questionService = new QuestionService()