window.addEventListener('load', () => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const isDarkMode = darkModeMediaQuery.matches;

    const appStoreLogo = document.getElementsByClassName('app-store-logo')
    if (appStoreLogo && isDarkMode) {
        Array.prototype.forEach.call(appStoreLogo, (el) => {
            el.src = "../../public/app_store_logo_dark.svg"
        })
    }

    const params = new URLSearchParams(location.search)
    switch (params.get('from')) {
        case 'gymlogapp':
            const gymlogCard = document.getElementById('appCardGymlog')
            gymlogCard.style.display = 'none'
            break;
        case 'qiitareaderapp':
            const qiitaReaderCard = document.getElementById('appCardQiitaReader')
            qiitaReaderCard.style.display = 'none'
            if (darkModeMediaQuery) {
                document.body.style.backgroundColor = 'black'
            } else {
                document.body.style.backgroundColor = 'white'
            }
            break;
        default:
            break;
    }
})