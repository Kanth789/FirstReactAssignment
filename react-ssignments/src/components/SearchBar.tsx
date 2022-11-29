import React from "react";
import { BsSearch } from "react-icons/bs";
type SeachbarType = {
  changeSearchInput: (event: string) => void
  enterSearchInput: () => void
  searchInput: string
}
const SearchBar = (props: SeachbarType) => {
  const { changeSearchInput, enterSearchInput } = props
  const onEnterSearchInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { enterSearchInput } = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeSearchInput(event.target.value)
  }
  const { searchInput } = props
  return (
    <div className="search-conatiner">
      <input value={searchInput}
        type="search"
        className="search-input"
        placeholder="Search"
        onChange={onChangeSearchInput}
        onKeyDown={onEnterSearchInput}></input>
      <button className="search-conatiner-icon"><BsSearch color="white" size="17px" /></button>
    </div>
  )
}
export default SearchBar