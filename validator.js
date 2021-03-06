
window.onload = function () {
	var bSubmit = document.getElementById('submit');
	var btnLogin = document.getElementById('b-login')
// var name = document.getElementById('name');

// Helper functions
	var isEmailAddress = function(input) {
		var list = input.split("");
		var i= 0;
			for(i; i<list.length; i++){
			if(list[i] === "@"){
	  			return true;
			}
			}
	  	return false;
	};

	var isBeforeToday = function (input){
		var today = new Date();
		var date1 = input;
		
		if (!(typeof date1 === "string")) {
			throw "Enter a correct date format.";
		}
		else if(typeof date1 === 'string'){
			var d = Date.parse(date1); //miliseconds
			if(isNaN(d)){
				// throw "Enter a correct date format.";
				return false;
			}
			else{
				return d < today.getTime();
			}
		}
	};

// older than 18 years old
	var isMinimumAge = function(date){
		var minimumAge = '567648000000';
		var currentDate = Date.parse(new Date());
		var age = Date.parse(date);

		return (currentDate - age) > minimumAge;	
	}

	var isValidDate = function(date) {
		return isBeforeToday(date) && isMinimumAge(date);
	};

	var isEmpty = function(input) {
		var str = input;
		if (str === null) {
			return false;
		}
		var length = str.length;

		for(var i=0; i< length; i++) {
			if(str[i] != " ") {
			  return false;
			}
		}
		return true;
	};

	var isValidPass = function(password) {
		if(isEmpty(password) || password.length < 6) {
			return false
		}
		return true;
	};

	bSubmit.addEventListener('click', function(event) {
		event.preventDefault();
		var name = document.getElementById('name');
		var lname = document.getElementById('lname');
		var uemail = document.getElementById('email');
		var date = document.getElementById('dob');
		var pass = document.getElementById('pass');
		var list = [name, lname];

		for (var i=0; i<list.length; i++) {
			if(list[i].value === '') {
				list[i].className = 'my-invalid';
				list[i].setCustomValidity("Please, fill provide information.");	  	    		
			}else {
			list[i].className = 'my-valid';
			list[i].setCustomValidity('');
			}
		}

		if(isEmailAddress(uemail.value)) {
			uemail.className = "my-valid";
			uemail.setCustomValidity('');
		}else {
			alert(uemail.value);
			uemail.className = "my-invalid";
			uemail.setCustomValidity("Please enter a valid email");
		}

		if(isValidDate(date.value)) {
			date.className = 'my-valid';
			date.setCustomValidity('');
		}else {
			date.setCustomValidity('You have to be at least 18 years old');
			date.className = 'my-invalid';
		}

		if(isValidPass(pass.value)) {
			pass.className = 'my-valid';
			pass.setCustomValidity('');
		}else {
			pass.setCustomValidity("Please enter a password of at least 6 to 8 characters long.");
			pass.className = 'my-invalid';
		}	
	}); 

	btnLogin.addEventListener('click', function(event) {
		event.preventDefault();
		var userName = document.getElementById('u-name');
		var userPass = document.getElementById('u-pass');

		if(isEmpty(userName.value)) {
			userName.className = 'signing-invalid';
			userName.setCustomValidity('Please input your user name');
		} else {
			userName.className = 'signing-valid';
		}

		if(isValidPass(userPass.value)) {
			userPass.className = 'signing-valid';
		}else {
			userPass.className = 'signing-invalid';
			userPass.setCustomValidity('Please enter a password of at least 6 to 8 characters long.')
		}
	});
};