const passwordBox = document.getElementById("password");
const $length = 15;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+~|{}[/]<>-=;:',.?`";

const allChars = upperCase + lowerCase + number + symbol;

// funkcja generująca hasło
function createPassword() {
	let password = "";

	password += upperCase[Math.floor(Math.random() * upperCase.length)];
	password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
	password += number[Math.floor(Math.random() * number.length)];
	password += symbol[Math.floor(Math.random() * symbol.length)];

	while ($length > password.length) {
		password += allChars[Math.floor(Math.random() * allChars.length)];
	}
	passwordBox.value = password;
	document.getElementById("password").classList.remove("color-active");
	// document.getElementById("password").style.removeProperty("color");
}

// funkcja kopiująca hasło
function copyPassword() {
	// passwordBox.select();
	// document.execCommand("copy");
	if (passwordBox.value !== "") {
		navigator.clipboard.writeText(passwordBox.value);
		console.log("Hasło zostało wygenerowane i skopiowane pomyślnie.");
		document.getElementById("password").classList.add("color-active");
		// document.getElementById("password").style.setProperty("color", "red");
		// passwordBox.value = "";
	} else {
		document.getElementById("password").placeholder = "Wygeneruj hasło 🗝";
		console.log("Hasło nie zostało wygenerowane !");
		// alert("Hasło nie zostało wygenerowane !");
	}
}

// funkcja resetująca input
function reset() {
	passwordBox.value = "";
	document.getElementById("password").placeholder = "Hasło";
	console.log("Input został wyczyszczony.");
}
