// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    const {user} = hook.params;

    hook.data.numbersToChoose = [1,2,3,4,5];
    hook.data.goalNumber = 4;
    hook.data.players = [{
      userId: user._id,
      pairs:[]
    }];
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
