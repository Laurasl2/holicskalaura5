const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
});

const url = 'https://anilove.p.rapidapi.com/images/random';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'be146bf8edmsh6026b600e2a96acp187223jsne7e88bffce91',
		'x-rapidapi-host': 'anilove.p.rapidapi.com'
	}
};


try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}