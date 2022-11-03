import React from 'react'

const FilterContext = React.createContext({
    onToggleShowContent : false,
    onToggleShowLeftNavbar : false,
    onToggleShowRightNavbar : false,
    
    OnclickedBox: () => {},
   
})

export default FilterContext