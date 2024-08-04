window.addEventListener('load', () => {
    const lastUpdatedDate = document.getElementById('lastUpdatedDate')
    if (lastUpdatedDate) {
        lastUpdatedDate.innerText = '最終更新: ' + new Date(document.lastModified).toLocaleString('ja-JP')
    }
})