const NavigationSidebar = () => {
    return(`
       <div class="list-group">
         <a class="list-group-item" href="/">
           <i class="fab fa-twitter"></i></a>
         <a class="list-group-item" href="/">
           <i class="fa fa-home">Home</i></a>
         <a class="list-group-item" href="/">
            <i class="fa fa-hashtag">Explore</i></a>
         <a class="list-group-item" href="/">
           <i class="fa fa-bell">Notifications</i></a>
         <a class="list-group-item" href="/">
           <i class="fa fa-envelope">Messages</i></a>
         <a class="list-group-item" href="/">
           <i class="fa fa-bookmark">Bookmarks</i></a>
         <a class="list-group-item" href="/">
           <i class="fa fa-bars">Lists</i></a>
         <a class="list-group-item" href="/">
           <i class="fa fa-address-card">Profile</i></a>
         <a class="list-group-item" href="/">
           <i class="fa fa-circle">More</i></a>
       </div>
       
       <div class="d-grid mt-2">
         <a href="tweet.html"
            class="btn btn-primary btn-block rounded-pill">
            Tweet
         </a>
       </div>
 `);
}
export default NavigationSidebar;