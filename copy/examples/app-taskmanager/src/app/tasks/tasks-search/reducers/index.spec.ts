import { getDoneFilteredTasks, } from "./index";
import { TASKS_MOCK } from "../../common/models/mocks";

describe('TaskSearch settings selectors', () => {

  describe('getDoneFilteredTasks', () => {
    it('should return all Tasks', () => {
      const tasks = [{...TASKS_MOCK[0], done: true}, {...TASKS_MOCK[1], done: false}];
      expect(getDoneFilteredTasks.projector(tasks, true)).toEqual(tasks);
    });

    it('should return todo tasks, only', () => {
      const tasks = [{...TASKS_MOCK[0], done: true}, {...TASKS_MOCK[1], done: false}];
      expect(getDoneFilteredTasks.projector(tasks, false)).toEqual([{...TASKS_MOCK[1], done: false}]);
    });
  });

});
