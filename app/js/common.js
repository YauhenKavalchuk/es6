// Class
// ---------------

class Task {
  constructor(title = Task.getDefaultTitle(), isCompleted = false) {
    this.title = title,
    this._isCompleted = isCompleted,
    Task.counter += 1
  }

  static getDefaultTitle() {
    return 'Title text';
  }

  completed() {
    this.isCompleted = true;
  }

  get isCompleted() {
    return this._isCompleted === true ? 'task is completed' : 'task is not completed'
  }
}

Task.counter = 0;

let task = new Task('Learn ES6', false);

console.log(task.isCompleted, task._isCompleted);
