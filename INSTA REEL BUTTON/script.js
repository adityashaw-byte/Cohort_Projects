
const reels = [
    {   isMuted: "true",
        username: "midsterpiece",
        likeCount: 14820,
        isLiked: false,
        commentCount: 423,
        shareCount: 92,
        isFollowed: false,
        caption: "Dark mode > light mode. Change my mind.",
        video: "./reel/1.mp4",
        userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "midsterpiece",
        likeCount: 9820,
        isLiked: true,
        commentCount: 184,
        shareCount: 41,
        isFollowed: false,
        caption: "UI tip: Padding is personality. Give your elements some space.",
        video: "./reel/2.mp4",

        userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    },
    {
        username: "midsterpiece",
        likeCount: 22150,
        isLiked: false,
        commentCount: 612,
        shareCount: 138,
        isFollowed: true,
        caption: "When flexbox finally aligns the way you wanted 😭🔥",
        video: "./reel/3.mp4",

        userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
    },
    {
        username: "midsterpiece",
        likeCount: 54200,
        isLiked: false,
        commentCount: 822,
        shareCount: 201,
        isFollowed: false,
        caption: "My solo Bali trip changed everything 🌴",
        video: "./reel/4.mp4",

        userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
        username: "midsterpiece",
        likeCount: 3120,
        isLiked: true,
        commentCount: 102,
        shareCount: 55,
        isFollowed: true,
        caption: "Code. Sleep. Repeat. That’s the cycle.",
        video: "./reel/5.mp4",

        userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
    {
        username: "midsterpiece",
        likeCount: 27450,
        isLiked: false,
        commentCount: 540,
        shareCount: 87,
        isFollowed: true,
        caption: "No gym? No problem. Do this 12-min workout at home.",
        video: "./reel/6.mp4",

        userprofile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
    },
    {
        username: "midsterpiece",
        likeCount: 68000,
        isLiked: true,
        commentCount: 1304,
        shareCount: 412,
        isFollowed: false,
        caption: "You won’t believe this burger exists 🤯🍔",
        video: "./reel/7.mp4",

        userprofile: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
    },
    
];
var allReels = document.querySelector('.all-reels')
function addData(){
    var sum = ''
reels.forEach(function (elem,idx) {
    sum = sum + `<div class="reel">
          <video autoplay loop ${elem.isMuted?"muted":""} src="${elem.video}"></video>
          <div class="bottom">
            <div class="user">
              <img
                src="${elem.userprofile}"
                alt="">
              <h4>${elem.username}</h4>
              <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
            <div id='${elem}' class="like">
              <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`
})
allReels.innerHTML = sum
}
addData()
allReels.addEventListener('click', function(dets){
    if (dets.target.classList.contains('like')) {
        reels[dets.target.id].likeCount++
        addData()
    }
})


