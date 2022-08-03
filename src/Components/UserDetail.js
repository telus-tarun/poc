import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";
import { DetailApi } from "../Services/DetailApi";
import '../style/cardStyle.scss'

export default function UserDetail() {
  const [data, setData] = useState("");
  let { userId } = useParams();

  useEffect(() => {
    let getDetail = async (userId) => {
      setData(await DetailApi(userId));
    };
    getDetail(userId);
  }, [userId]);
  return (
    <>
    <h3 className="heading">User Details</h3>
    <div>{data ?
      <Card
      className="mx-auto"
      style={{ width: "20rem", marginTop: "10px"}}
    >
      <Card.Img variant="top" src={data.avatar} />
      <Card.Body>
        
      </Card.Body>
      <ListGroup style={{backgroundColor: "#d3dbe8" }} className="list-group-flush">
        <ListGroup.Item style={{backgroundColor: "#d3dbe8" }}>Name : {data.fname} {data.lname}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: "#d3dbe8" }}>Username : {data.username}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: "#d3dbe8" }}>Email : {data.email}</ListGroup.Item>
      </ListGroup>
    </Card>
      : <h3 style={{textAlign: "center"}}>Loading...</h3>}</div>
    </>
  );
}
