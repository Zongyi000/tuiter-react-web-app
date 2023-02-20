import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
           <div style="margin-left: 16px; margin-top: 40px">
           <!-- continue here -->
             ${posts.map((post) => PostItem(post)).join('')}
           </div>
    `);

}
export default PostList;