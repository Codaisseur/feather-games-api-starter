// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomNumArray(min , max) {
  var number;
  var i;
  var numbersToChoose = [];
  for (i = 0; i < 13; i++){
    number = getRandomNum(min, max);
    numbersToChoose.push(number);
  }
  return numbersToChoose;
}

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    const {user} = hook.params;

    hook.data.numbersToChoose = getRandomNumArray(20, 40);
    hook.data.goalNumber = getRandomNum(1, 10);
    hook.data.time = 20;
    hook.data.players = [{
      userId: user._id,
      email: user.email,
    }];
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
