import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function SearchBar() {
  return (
    <div>
      <FontAwesomeIcon icon={faSearch} className="cursor-pointer"/>
    </div>
  )
}

export default SearchBar
