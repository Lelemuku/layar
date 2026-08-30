// theme-toggle.js
function toggleTheme(){ isDark=!isDark; setThemeMode(isDark?'dark':'light', document.getElementById(isDark?'btn-dark':'btn-light')); }
window.toggleTheme = toggleTheme;