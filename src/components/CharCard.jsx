import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link, useNavigate} from 'react-router-dom';

function CharCard({id, name, image}) {
    const navigate = useNavigate();
    // const [character, setCharacter] = useState({});
    // const {id} = useParams();
    // const {setFavorites, favorites} = useOutletContext();
    
    const shouldRoute = (id) => {
        navigate(`/character/${id}/`);
    };


  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button variant="primary" onClick={() => shouldRoute(id)}>More Info</Button>
        <Button variant="warning" onClick={() => setFavorites([...favorites, {id: id, name: name, image: image}])}>Favorite</Button>
        
      </Card.Body>
    </Card>
  );
}

export default CharCard;