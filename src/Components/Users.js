import React from "react";
import { Container, Row} from "react-bootstrap";
import Cards from "./Cards";
import { useUserData } from "../Hooks/useUserData";
export default function Users() {
  let { isLoading, error, data } = useUserData();

  if (isLoading) return <h3 style={{ textAlign: "center" }}>Loading...</h3>;

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <Container>
        <Row className="justify-content-start">
          {data.map((data) => {
            return <Cards data={data} key={data.id}/>
          })}
        </Row>
      </Container>
    </>
  );
}