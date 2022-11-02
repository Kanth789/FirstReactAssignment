const SearchBar = (props)=>{
    const{changeSearchInput,enterSearchInput} = props
    const onEnterSearchInput = event => {
        const {enterSearchInput} = props
        if (event.key === 'Enter') {
          enterSearchInput()
        }
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
          onKeyDown={onEnterSearchInput}></input>
        </div>
    )
}
export default SearchBar