import FilterContext from "../FilterContext"

const ConfigurationController = () =>(
    <FilterContext.Consumer>
         {value => {
      const {showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,} = value

        const OnclcikedCheckBox1 = () =>{
            onToggleShowContent()
        }
        const OnclcikedCheckBox2 = () =>{
            onToggleShowLeftNavbar()
        }
        const  OnclcikedCheckBox3 = () =>{
            onToggleShowRightNavbar()
        }
      
    
    return(
    <div className="nav">
        <div className="nav-bar-header">
                <h2>Layout</h2>
      </div>
        <div className="nav-bar">
            <div className="nav-bar-checkBox">
                <div className="link1">
              <input type="checkbox" id="Content" name="layout"  checked={showContent} onClick={OnclcikedCheckBox1}></input>
               <label>Content</label>
               </div>
               <div className="link1">
               <input type="checkbox" id="Content" name="layout" checked={showLeftNavbar} onClick={OnclcikedCheckBox2}></input>
               <label>Left Navbar</label>
               </div>
               <div className="link1">
               <input type="checkbox" id="Content" name="layout" checked={showRightNavbar} onClick={OnclcikedCheckBox3}></input>
               <label>Right Navbar</label>
               </div>
               
            </div>
        </div>
        </div>
    )
         }
        }
    </FilterContext.Consumer>
)


export default ConfigurationController