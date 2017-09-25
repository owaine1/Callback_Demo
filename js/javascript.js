console.log('loaded');

function logstuff(data) {
  console.log('Inside logstuff');
  console.log(data);
}

function getInput(user, callback) {
  console.log('options are: ');
  console.log(user);
  console.log('callback is: ');
  console.log(callback);

  allUserData.push(user);
  callback(allUserData);
}
getInput({
  user: 'bill'
}, logstuff)
getInput({
  user: 'bob'
}, logstuff)
getInput({
  user: 'bertie'
}, logstuff)
