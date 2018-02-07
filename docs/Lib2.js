import { Model } from "./Model.js";
import { View } from "./View.js";

export class Lib2 {
  update() {
    const model = new Model();
    cosnt view = new View();
    return `Lib2: ${model.update()} ${view.update()}`;
  }
}

export default Lib2;
