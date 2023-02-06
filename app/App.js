import { ValuesController } from "./Controllers/ValuesController.js";
import { QuestionController } from "./Controllers/QuestionController.js";

class App {
  questionsController = new QuestionController();
}

window["app"] = new App();
