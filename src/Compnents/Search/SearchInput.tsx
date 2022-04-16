import { useNavigate } from "react-router";
import search from '../../Images/search.png'

// type Props = {}

export default function SearchInput() {

  const navigate = useNavigate();
  
  return (
    <div className="search">
      <img src={search} onClick={()=> navigate('/search')} alt="search-button" />
    </div>
  );
}
