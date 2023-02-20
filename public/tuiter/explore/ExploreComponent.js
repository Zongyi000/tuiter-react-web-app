import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="middle-container">
               
               <!-- search field and cog -->
                <div style="margin-bottom: 10px">
                    <div class="search-container">
                        <i class="icon fa fa-search"></i>
                        <input type="text" class="wd-override-search-input" placeholder="Search Twitter" >
                    </div>
        
                    <a href="explore-settings.html" class="wd-link-setting" style="float: right;"><i class="fas fa-cog mr-2"></i></a>
                </div>
                <!-- tabs -->
                <div class="wd-links">
                    <a class="wd-link-active">For You</a>
                    <a class="wd-override-link">Trending</a>
                    <a class="wd-override-link">COVID-19</a>
                    <a class="wd-override-link">News</a>
                    <a class="wd-override-link">Sports</a>
                    <a class="wd-override-link">Entertainment</a>
                </div>
    
               <!-- image with overlaid text -->
               ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;
