$(document).ready(function() {
	let currency = document.querySelectorAll('.currency');
	currency.forEach((value) => (value.textContent = change(parseInt(value.textContent))));
});
function change(number) {
	console.log(new Intl.NumberFormat('en-IN').format(number));
	return new Intl.NumberFormat('en-IN').format(number);
}
