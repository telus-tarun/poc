import axios from "axios";
import React, { useState } from "react";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Users() {
  const queryClient = new QueryClient();
  const { isLoading, error, data } = useQuery(["repoData"], async () =>
    await axios.get("https://www.mecallapi.com/api/users").then((res) => res.data)
  );

  let getDetail = async (id) => {
    let data1;
    await axios
      .get(`https://www.mecallapi.com/api/users/${id}`)
      .then((res) => (data1 = res.data));
    setFname(data1.user.fname);
    setLname(data1.user.lname);
    setUsername(data1.user.username);
    setEmail(data1.user.email);
    handleShow();
  };
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleShow = () => setShow(true);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState("New");
  const [updateId, setUpdateId] = useState();
  const [updateModal, setUpdateModal] = useState("Created");

  //for updating or deleting we use useMutation
  const deleteItem = useMutation(
    async (id) =>
      await axios.delete("https://www.mecallapi.com/api/users/delete/", {
        data: {
          id: id,
        },
      }),
    {
      onSuccess: () => {
        setUpdateModal("deleted")
        setShow1(true);
        queryClient.invalidateQueries(["repoData"]);
      },
    }
  );

  let createUser = useMutation(
    async () =>
      await axios
        .post("https://www.mecallapi.com/api/users/create", {
          fname: fname,
          lname: lname,
          username: username,
          password: "123",
          email: email,
          avatar: "https://www.mecallapi.com/users/cat.png",
        })
        .then(function (response) {
          console.log(response);
        }),
    {
      onSuccess: () => {
        setUpdateModal("created")
        setShow1(true)
        handleClose();
        queryClient.invalidateQueries(["repoData"]);
      },
    }
  );

  let updateUser = useMutation(
    async (id) =>
      await axios.put(`https://www.mecallapi.com/api/users/update`, {
        id: id,
        fname: fname,
        lname: lname,
        username: username,
        email: email,
      }),
    {
      onSuccess: () => {
        setUpdateModal("updated")
        setShow1(true)
        handleClose();
        queryClient.invalidateQueries(["repoData"]);
      },
    }
  );

  if (isLoading) return <h3 style={{textAlign: "center"}}>Loading...</h3>;

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <Button
        variant="primary"
        className="float-end my-2"
        onClick={() => {
          setFname("");
          setLname("");
          setEmail("");
          setUsername("");
          setModal("New");
          handleShow();
        }}
      >
        Create
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modal} User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="First Name"
                value={fname}
                onChange={(e) => {
                  setFname(e.target.value);
                }}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lname}
                onChange={(e) => {
                  setLname(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        {modal === "New" ? (
          <Modal.Footer>
            <Button
              type="submit"
              variant="primary"
              onClick={() => {
                createUser.mutate();
              }}
            >
              Create
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        ) : (
          <Modal.Footer>
            <Button
              type="submit"
              variant="primary"
              onClick={() => {
                updateUser.mutate(updateId);
              }}
            >
              Update
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        )}
      </Modal>
      <Container>
        <Row className="justify-content-start">
          {data.map((data) => {
            return (
              <Col sm="4" className="my-2" key={data.id}>
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
                    <Button size="sm"
                      variant="primary"
                      onClick={() => {
                        setModal("Update");
                        getDetail(data.id);
                        setUpdateId(data.id);
                      }}
                    >
                      Update User
                    </Button>
                    <Button size="sm"
                      variant="danger"
                      style={{ marginLeft: "10px" }}
                      onClick={() => {
                        deleteItem.mutate(data.id);
                      }}
                    >
                      Delete User
                    </Button>
                    <Link key={data.id} to={/users/ + data.id}><Button size="sm"
                      variant="danger"
                      style={{ marginLeft: "10px" }}
                    >View Details
                    </Button></Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>


      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>User {updateModal} sucessfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose1}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
