import WhoToFollowListItem from "./WhoToFollowListItem.js";
import WhoArray from "./who.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->
             ${WhoArray.map((whoItem) => WhoToFollowListItem(whoItem)).join('')}

           </ul>
    `);
}


export default WhoToFollowList;