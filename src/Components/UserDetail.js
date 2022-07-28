import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, ListGroup } from "react-bootstrap";

export default function UserDetail() {
  const [data, setData] = useState("");
  let { userId } = useParams();

  useEffect(() => {
    let getDetail = async () => {
      let data = await axios
        .get(`https://www.mecallapi.com/api/users/${userId}`)
        .then((data) => data);
      setData(data);
    };
    getDetail();
  }, [userId]);

  return (
    <>
    <h3 style={{textAlign: "center"}}>User Details</h3>
    <div>{data ?
      <Card
      className="mx-auto"
      style={{ width: "20rem", marginTop: "10px"}}
    >
      <Card.Img variant="top" src={data.data.user.avatar} />
      <Card.Body>
        
      </Card.Body>
      <ListGroup style={{backgroundColor: "#d3dbe8" }} className="list-group-flush">
        <ListGroup.Item style={{backgroundColor: "#d3dbe8" }}>Name : {data.data.user.fname} {data.data.user.lname}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: "#d3dbe8" }}>Username : {data.data.user.username}</ListGroup.Item>
        <ListGroup.Item style={{backgroundColor: "#d3dbe8" }}>Email : {data.data.user.email}</ListGroup.Item>
      </ListGroup>
    </Card>
      : <h3 style={{textAlign: "center"}}>Loading...</h3>}</div>
    </>
  );
}
