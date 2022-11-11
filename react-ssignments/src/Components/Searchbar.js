import { BsSearch } from "react-icons/bs";
const SearchBar = (props)=>{
    const{changeSearchInput,enterSearchInput} = props
    const onEnterSearchInput = event => {
        const {enterSearchInput} = props
       
          enterSearchInput()
      
      }
    
      const onChangeSearchInput = event => {
        const {changeSearchInput} = props
        changeSearchInput(event.target.value)
      }
      const {searchInput} = props
    return(
        <div className="search-conatiner">
           <input value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={onChangeSearchInput}
         ></input>
        <button onClick={onEnterSearchInput}><BsSearch color="black"   size="20px"/></button>
        </div>



    )
}
export default SearchBar