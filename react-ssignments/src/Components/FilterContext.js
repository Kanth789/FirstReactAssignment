import React from 'react'

const FilterContext = React.createContext({
    showContent : true,
    showLeftNavbar : true,
    showRightNavbar : true,
    
    onToggleShowContent: () => {},
    onToggleShowLeftNavbar:()=>{},
    onToggleShowRightNavbar:() =>{}
   
})

export default FilterContext