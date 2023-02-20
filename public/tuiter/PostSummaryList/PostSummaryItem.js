

const PostSummaryItem = (post) => {
    return(`
            <div class="wd-section">
                <span class="wd-topic">${post.topic}</span>
                
                <div class="wd-post-user">
                    <h2 class="wd-author-title">${post.userName}</h2>
                    <i class="fa fa-circle"></i>
                    <span class="wd-tweets">${post.time}</span>
                </div>
                
                <h2 class="wd-author-title">${post.title}</h2>
                <span class="wd-tweets">${post.tweets ? post.tweets : ""}</span>
                <img src=${post.image} class="wd-image" />
            </div>
    `);
}
export default PostSummaryItem;