import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const arrayOfCompany = useSelector((store) => store.job.content);
  const dispatch = useDispatch();
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
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITES",
                        payload: i,
                      });
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
