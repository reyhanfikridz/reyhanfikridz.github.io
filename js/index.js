let theme = localStorage.getItem('reyhan-fikri-theme-style')

if (theme == null) {
	setTheme('light-blue');
} else {
	setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (var i = 0; i < themeDots.length; i++) {
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode;
		setTheme(mode);
	});
}

function setTheme(mode) {
	if (mode == 'light-blue') {
		document.getElementById('theme-style').href = 'css/default.css';
	} else if (mode == 'dark-blue') {
		document.getElementById('theme-style').href = 'css/dark-blue.css';
	} else if (mode =='gray') {
		document.getElementById('theme-style').href = 'css/gray.css';
	}

	localStorage.setItem('reyhan-fikri-theme-style', mode);
}