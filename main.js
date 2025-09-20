window.addEventListener('load', () => {
    const input = document.getElementById('search-input');
    const button = document.getElementById('search-button');

    button.addEventListener('click', () => {
        const query = input.value.trim();
        console.log(query);
        if (query) {
            const url = `https://www.google.com/search?q=${query}`;
            window.location.href = url;
        }
    });
});
