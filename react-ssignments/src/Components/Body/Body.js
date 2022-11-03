const Body = (props) =>{
    const {onToggleShowContent,onToggleShowLeftNavbar,onToggleShowRightNavbar} = props
    return(
        <div className="Body-conatiner">
           {onToggleShowLeftNavbar ?  <div className="nav-bar-left">
                <ul>Left NavBar</ul>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
                <li>Item4</li>
            </div> : ""}
            {onToggleShowContent ? <div className="content">
                <h6>Content</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div> : ""}

            {onToggleShowRightNavbar ? <div className="bar-bar-right">
                <h2>Right Navbar</h2>
                <div className="div-1">Ad 1</div>
                <div className="div-1">Ad 2</div>
            </div> : ""}
        </div>
    )
}
export default Body