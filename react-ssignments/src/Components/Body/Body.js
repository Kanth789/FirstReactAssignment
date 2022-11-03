import FilterContext from "../FilterContext"
const Body = () =>(
    < FilterContext.Consumer>
            {value => {
        const {showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,} = value

   

    return(
        <div className="Body-conatiner">
          
           {showLeftNavbar ?  <div className="nav-bar-left">
                <ul>Left NavBar</ul>
                <li>Item1</li>
                <li>Item2</li>
                <li>Item3</li>
                <li>Item4</li>
            </div> : ""}
            {showContent ? <div className="content">
                <h6>Content</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div> : ""}

            {showRightNavbar ? <div className="bar-bar-right">
                <h2>Right Navbar</h2>
                <div className="div-1">Ad 1</div>
                <div className="div-1">Ad 2</div>
            </div> : ""}
        </div>
    )
    }
}
    </FilterContext.Consumer>
)
export default Body