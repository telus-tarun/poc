import React from "react";
import { Form, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSetState } from "react-use";
import { useCreateUser } from "../Hooks/useCreateUser";
import '../style/cardStyle.scss'


export default function CreateUser() {
  const [state, setState] = useSetState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "123",
    avatar: "https://www.mecallapi.com/users/cat.png",
  }); 
  const { mutate: createUser } = useCreateUser();


  return (
    <>
      <h3 className="heading">Create User</h3>
      <div>
        <Card className="mx-auto" style={{ width: "20rem", marginTop: "10px", border: "none" }}>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="First Name"
                value={state.fname}
                onChange={(e) => {
                  setState({ fname: e.target.value });
                }}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={state.lname}
                onChange={(e) => {
                  setState({ lname: e.target.value });
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Username"
                value={state.username}
                onChange={(e) => {
                  setState({ username: e.target.value });
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Email"
                value={state.email}
                onChange={(e) => {
                  setState({ email: e.target.value });
                }}
                required
              />
            </Form.Group>
            <Button className="success" onClick={()=>{createUser(state)}}>Create</Button>
            <Link to="/">
        <Button className="my-2 danger" type="submit">
          Cancel
        </Button>
      </Link>
          </Form>
        </Card>
      </div>
    </>
  );
}
