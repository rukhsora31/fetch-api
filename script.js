fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(response => response.json())
      .then(json => renderCards(json))

const renderCards = (posts)  => {
    const wrapper = document.querySelector('.wrapper')
    
    posts.forEach(post => {
        wrapper.innerHTML += `
        <div class="card">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        </div>
        `
    });

}    