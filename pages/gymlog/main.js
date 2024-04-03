window.addEventListener('load', () => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const isDarkMode = darkModeMediaQuery.matches;

    const logo = document.getElementById('h1Logo')
    const appStoreLogo = document.getElementById('appStoreLogo')
    const xLogo = document.getElementById('xLogo')
    if (logo && isDarkMode) {
        logo.src = "../../public/gymlog/logo_dark.png"
        appStoreLogo.src = "../../public/gymlog/app_store_logo_dark.svg"
        xLogo.src = "../../public/gymlog/x_logo_dark.png"
    }

    const lastUpdatedDate = document.getElementById('lastUpdatedDate')
    if (lastUpdatedDate) {
        lastUpdatedDate.innerText = '最終更新: ' + new Date(document.lastModified).toLocaleString('ja-JP')
    }
})