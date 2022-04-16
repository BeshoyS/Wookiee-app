import { useNavigate } from "react-router";
import searchImg from "../../Images/search.png";
// type Props = {}

export default function SearchInput() {

  const navigate = useNavigate();
  
  return (
    <div className="search">
      <img src={searchImg} onClick={()=> navigate('/search')} alt="search-button" />
    </div>
  );
}
