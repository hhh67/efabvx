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
            if (isDarkMode) {
                document.body.style.backgroundColor = 'black'
            } else {
                document.body.style.backgroundColor = 'white'
            }
            break;
        case 'moonpfase':
            const moonPfaseCard = document.getElementById('appCardMoonPfase')
            moonPfaseCard.style.display = 'none'
        default:
            break;
    }

    const gumi = document.getElementById('gumi');
    setTimeout(() => {
        gumi.style.left = '0'; // 左からの位置を変更して表示
    }, 2000);

    gumi.addEventListener('click', () => {
        gumi.style.transition = 'left 0.5s linear'
        gumi.style.left = '-200px'
        setTimeout(() => {
            gumi.style.transition = 'left 5s linear'
            gumi.style.left = '0';
        }, 3000)
    })
})