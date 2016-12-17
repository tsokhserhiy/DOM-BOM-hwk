//create form

form();

function form() {
  var newForm = document.createElement("form");
  newForm.setAttribute('name', 'login');
  newForm.setAttribute('action', 'google.com');
  newForm.setAttribute('onsubmit', 'return validateForm()');
  document.body.appendChild(newForm);

// create elements of form
  var value = {
    0: "type",
    1: "name",
    2: "placeholder"
  }

  var key = [];
    key[0] = ["text", "age", "Age"];
    key[1] = ["text", "username", "User name"];
    key[2] = ["text", "date", "Date"];
    key[3] = ["submit", "validate", "Validate Me"];

  for (var i = 0; i < key.length; i++) {
    input = document.createElement("input");
    for (var j = 0; j < key[i].length; j++) {
      input.setAttribute(value[j], key[i][j]);
    }
    newForm.appendChild(input);
  }
}

// validation

function validateForm() {

  var validate = true;

  // validation age

  var userAge = document.forms[0].childNodes[0].value;
  if (!userAge.match(/([0-9])/g)) {
    alert ("Your Age is invalid! Age must include only numbers!");
    return validate = false;
  } else if (!userAge.match(/^(\d)*$/g)) {
    alert("Your Age is invalid! Age must include only numbers!");
    return validate = false;
  } else if (userAge.match(/-/)) {
    alert ("Your Age is invalid! Age should be more then  0!");
    return validate = false;
  } else if (userAge.match(/ /)) {
    alert ("Your Age is invalid! Age must include only numbers!");
    return validate = false;
  }

  // validation username

  var userName = document.forms[0].childNodes[1].value;
  if (!userName.match(/^(user_)[\S]*/g)) {
    alert ("Your User Name is invalid! User Name should start from 'user_' and can contain any symbols after!");
    return validate = false;
  }

  // validation date
  var currentDate = moment().format('DD/MM/YYYY');
  var userDate = document.forms[0].childNodes[2].value;
  if (currentDate !== userDate) {
    alert ("Your data is invalid! Please enter today's date. Date should be in format DD/MM/YYYY!");
    return validate = false;
  }

  return validate;
}
