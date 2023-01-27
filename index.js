const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const uid = () =>
  String(
    Date.now().toString(32) +
      Math.random().toString(16)
  ).replace(/\./g, '')



let postHTML = posts.map(post => {
         
return `

    <article>
  
    <section class="geo_section container inverse">
      
        
            <img class="avatar" src="${post.avatar}"/>
            <div>
                <p class="name fw-bold">${post.name}</p>
                <p class="mg-top-0 fs-12">${post.location}</p>
            </div>
      
        </section>

        <section class="post_img_sec container">
          
                <img class="post_img" src="${post.post}"/>
          
        </section>

        <section class="comments container">        
                <div class="icons ">
                    <i id="${uid()}" class="fa-solid fa-heart" ></i>
                    <i class="fa-solid fa-comment"></i>
                    <i class="fa-solid fa-paper-plane"></i>
                </div>
                    <p id="likes" class="fw-bold mg-btm-0 mg-top-0">${post.likes} likes</p>       
                <p class="comment_text mg-top-0"><span class="fw-bold">${post.username }</span> ${post.comment}</p>
        
        </section>


    </article>
    `

}).join(" ")


const mainContent = document.getElementById("main_content")

mainContent.innerHTML = postHTML

let loveIcons = document.querySelectorAll(".fa-heart")
loveIcons = [...loveIcons]


 
function incLikes(id) {
  loveIcons.map(icon => {
      let theNum = icon.parentNode.nextElementSibling.textContent.match(/(\d+)/)[0]
    if(icon.id === id) {
      theNum ++
     return  icon.parentNode.nextElementSibling.innerHTML = `${theNum} likes`
    }
    })
}


loveIcons.map(icon => (
    icon.addEventListener("click", () => incLikes(icon.id) )
))

    
