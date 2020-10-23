let theme = localStorage.getItem('reyhan-fikri-theme-style')

if (theme == null) {
	setTheme('light-blue');
} else {
	setTheme(theme);
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