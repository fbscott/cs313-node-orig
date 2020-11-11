module.exports = function(operation, operand1, operand2) {
  if (operation == 'a') {
    return parseInt(operand1) + parseInt(operand2);
  } else if (operation == 's') {
    return parseInt(operand1) - parseInt(operand2);
  } else if (operation == 'm') {
    return parseInt(operand1) * parseInt(operand2);
  } else if (operation == 'd') {
    return parseInt(operand1) / parseInt(operand2);
  }
  
  return null;
}
