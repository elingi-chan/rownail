window.addEventListener('load', () => {
    const loading = document.getElementById('loading');

    setTimeout(() => {
        loading.classList.add('hide');

        setTimeout(() => {
            loading.style.display = 'none';
        }, 800); // CSSのtransition時間に合わせる

    }, 1500); // ローディング表示時間（ミリ秒）
});