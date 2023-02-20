

const PostItem = (post) => {
    return(`
        <li class="home-center">
            <div class="col-xs-4 follow-avatar">
                <div style="display: flex;flex-direction: row">
                    <img alt="" src=${post.avatarIcon} class="avatar">
                    <div style="margin-left: 6px">
                        <div style="display: flex">
                            <h6>${post.userName}</h6>
                            <img alt="" src="./mark.png" style="width: 16px; height: 16px; margin-left: 6px" class="avatar">
                            <div class="wd-post-user">
                                <div style="font-size:16px">@${post.handle}</div>
                                <i class="fa fa-circle"></i>
                                <span class="wd-tweets">${post.time}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="wd-section">
<!--                    <span class="wd-topic">${post.topic}</span>-->
    

    
                    <h2 class="wd-author-title">${post.title}</h2>
                    
                </div>
                
            </div>
            
            <img alt="" src=${post.image} class="wd-home-center-image" />
            <p>${post.content}</p>
            
            <div style="display: flex; justify-content: space-between">
                 <a class="list-group-item" href="/">
                   <i class="fa fa-comment">${post.comments}</i></a>
                 <a class="list-group-item" href="/">
                   <i class="fa fa-circle">${post.tweets}</i></a>
                 <a class="list-group-item" href="/">
                   <i class="fa fa-heart">${post.likes}</i></a>
                 <a class="list-group-item" href="/">
                   <i class="fa fa-envelope"></i></a>
            <div>
        </li>
    `);
}
export default PostItem;