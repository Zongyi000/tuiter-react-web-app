

const WhoToFollowListItem = (who) => {
    return(`
        <li class="follow-item">
            <div class="col-xs-4 follow-avatar">
                <img src=${who.avatarIcon} class="avatar">
                <div style="margin-left: 6px">
                    <div style="display: flex">
                        <h6>${who.userName}</h6>
                        <img src="./mark.png" style="width: 16px; height: 16px; margin-left: 6px" class="avatar">
                    </div>
                    <div style="font-size:16px">@${who.handle}</div>
                </div>
            </div>
            <button class="btn btn-primary override-button-right">Follow</button>
        </li>
    `);
}
export default WhoToFollowListItem;