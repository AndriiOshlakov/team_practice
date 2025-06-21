//Допоміжні функції
const THEME_KEY = 'theme'

export function appTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

export function btnTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
}

export function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  appTheme(saved);
}