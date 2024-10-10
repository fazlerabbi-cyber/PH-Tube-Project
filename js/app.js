const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error))
}


const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('categories')
    categories.forEach(item => {
        console.log(item);
        const button = document.createElement('button')
        button.classList = 'btn'
        button.innerText = item.category

        categoryContainer.appendChild(button)
    });


}

const cardDemo = {


}


const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then((res) => res.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log(error))
}

const displayVideos = (videos) => {


    const videoContainer = document.getElementById('videos')
    videos.forEach((videos) => {
        console.log(videos);
        const card = document.createElement('div')
        card.classList = "card card-compact"
        card.innerHTML = `
            <figure class = 'h-[220px]'>
    <img
      src="${videos.thumbnail}"
       class ='w-full h-full object-cover'
      alt="Shoes" />
  </figure>
  <div class="px-0 my-3 flex gap-3">
   <div>
    <img class ='w-10 h-10 rounded-full' src= ${videos.authors[0].profile_picture} />
</div>

<div>
    <h2 class='font-bold' >${videos.title}</h2>

    
<div class = 'flex gap-2'>
    <p>${videos.authors[0].profile_name}</p>
    <img class = 'w-6 ' src="https://img.icons8.com/?size=48&id=63760&format=png"/>
</div>
<p></p>
</div>
  </div>
            
            `
        videoContainer.appendChild(card)
    })

}




loadCategories()
loadVideos()