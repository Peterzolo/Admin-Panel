<div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="links">
          <div className="link-item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="link-item">
            <DarkModeTwoToneIcon
              className="icon"
              // onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="link-item">
            <FullscreenExitTwoToneIcon className="icon" />
          </div>
          <div className="link-item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">10</div>
          </div>
          <div className="link-item">
            <ChatBubbleIcon className="icon" />
            <div className="counter">8</div>
          </div>
          <div className="link-item">
            <ListAltIcon className="icon" />
          </div>
          <div className="link-item">
          <img src={Avatar} alt="" className="avatar" />
          </div>
        </div>