import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../style/cardStyle.scss'
import { useDeleteUser } from "../Hooks/useDeleteUser";
export default function Cards({ data }) {

  const { mutate: deleteUser } = useDeleteUser();
  
  return (
    <>
      <Col sm="4" className="my-2">
        <Card
          style={{
            border: "none",
            backgroundColor: "#d3dbe8",
          }}
        >
          <Card.Img variant="top" src={data.avatar} />
          <Card.Body>
            <Card.Title>
              {data.fname} {data.lname}
            </Card.Title>
            <Card.Text>{data.username}</Card.Text>
            <Link to="/update" state={{ data: data.id }}>
              <Button size="sm" className="primary">
                Update User
              </Button>
            </Link>
            <Button
              size="sm" className="danger"
              onClick={() => {
                deleteUser(data.id);
              }}
            >
              Delete User
            </Button>
            <Link key={data.id} to={/users/ + data.id}>
              <Button className="success" size="sm">
                View Details
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
