import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromFavouritesAction } from "../redux/antions";

const Favourites = () => {
  const arrayOfCompany = useSelector((store) => store.content);
  const dispatch = useDispatch();
  console.log("ciao", arrayOfCompany);
  return (
    <Container>
      <Row>
        <h2 className="justify-content-center">lista dei preferiti</h2>
        <ListGroup>
          {arrayOfCompany.map((i) => (
            <Col xs={8} key={i}>
              <ListGroup.Item>
                <Link to={`/${i}`}>{i} </Link>
                <Col>
                  <Button
                    onClick={() => {
                      dispatch(removeFromFavouritesAction(i));
                    }}
                  >
                    rimuovi
                  </Button>
                </Col>
              </ListGroup.Item>
            </Col>
          ))}
        </ListGroup>
      </Row>
    </Container>
  );
};
export default Favourites;
