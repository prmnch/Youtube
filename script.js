
const grid = document.getElementById('videoGrid');
const searchInput = document.getElementById('searchInput');

function renderVideos(videos) {
    grid.innerHTML = '';
    videos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <video src="\${video.src}" controls></video>
            <h3>\${video.title}</h3>
            <p>\${video.description}</p>
        `;
        grid.appendChild(card);
    });
}

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = videoData.filter(v => v.title.toLowerCase().includes(query));
    renderVideos(filtered);
});

renderVideos(videoData);
