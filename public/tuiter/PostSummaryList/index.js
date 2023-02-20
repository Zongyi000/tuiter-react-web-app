import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
           <div style="margin-left: 16px; margin-top: 40px">
           <!-- continue here -->
             ${posts.map((post) => PostSummaryItem(post)).join('')}
           </div>
    `);

}
export default PostSummaryList;