// Inheritance
// ---------------

class Task {
  constructor(title = '') {
    this.title = title,
    this.isCompleted = false
  }

  completed() {
    this.isCompleted = true;
  }
}

class SubTask extends Task {
  constructor(title) {
    super(title)
  }

  completed() {
    super.completed();
    console.log(`task ${this.title} is completed!`)
  }
}

let task = new Task('Learn ReactJS');
let subTask = new SubTask('Learn ES6');

task.completed();
subTask.completed();

console.log(task);
console.log(subTask);

//class declaration
class Task {};

//class expression
let Task = class Task {};







//
