var arr=[
    {dp:"https://i.pinimg.com/736x/1c/72/ba/1c72ba450110575fb8c700b9bd7f44b2.jpg",
        story:"https://c.ndtvimg.com/2025-11/b680gtbk_csk-retentions-ipl-2026_625x300_15_November_25.jpg"},
        {dp:"https://w0.peakpx.com/wallpaper/64/983/HD-wallpaper-rcb-fan-logo-badge-symbol.jpg",
        story:"https://c.ndtvimg.com/2025-11/34v3rd3g_rt_625x300_15_November_25.jpg"},
        {dp:"https://i.pinimg.com/736x/37/cd/d5/37cdd544a025e42fec5202a3d5b095c8.jpg",
        story:"https://c.ndtvimg.com/2025-11/ec0mj7os_mi_625x300_15_November_25.jpg"},
        {dp:"https://i.pinimg.com/736x/d0/84/bb/d084bbf738261c1bdf62f4405ecf126f.jpg",
        story:"https://edata.ndtv.com/feeds/liveblog/9639578/638988282095971771.jpg"},
        {dp:"https://www.postoast.com/wp-content/uploads/2025/06/punjab-kings-ownership.jpg",
        story:"https://c.ndtvimg.com/2025-11/35otlmeo_pbks-retentions-ipl-2026_625x300_15_November_25.jpg"},
        {dp:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/1200px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png",
        story:"https://c.ndtvimg.com/2025-11/j9h784ho_rr-retentions-ipl-2026_625x300_15_November_25.jpg"},

]
var storyiaaan=document.querySelector("#storyiaaan")
var clutter = ""

arr.forEach(function (elem, idx) {
    clutter += 
       ` <div class="story">
            <img id ="${idx}"src="${elem.dp}" alt="">
        </div>`
    
});

storyiaaan.innerHTML = clutter;

storyiaaan.addEventListener("click", function (dets) {
    document.querySelector("#fullscreen").style.display = "block";
    document.querySelector("#fullscreen").style.backgroundImage = 
    `url(${arr[dets.target.id].story})`;
    setTimeout(function () {
    document.querySelector("#fullscreen").style.display = "none";
}, 2000);
});




