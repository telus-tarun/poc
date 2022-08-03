import React, { useEffect, useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import { useSetState } from "react-use";
import { useUpdateUser } from "../Hooks/useUpdateUser";
import { DetailApi } from "../Services/DetailApi";

export default function UpdateUser() {
  const [load, setLoad] = useState(false)
  const location = useLocation();
  const [state, setState] = useSetState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "123",
    avatar: "https://www.mecallapi.com/users/cat.png",
  });
  
  useEffect(() => {
    let getDetail = async (id) => {
        let data1 = await DetailApi(id);
          setState({
            fname: data1.fname,
            lname: data1.lname,
            username: data1.username,
            email: data1.email,
          });
          setLoad(true)
      };
      getDetail(location.state.data);
  },[location.state.data, setState]);

  const { mutate: updateUser } = useUpdateUser(location.state.data);

  return (
    <>
      {!load? <h3 style={{ textAlign: "center" }}>Loading...</h3> : 
      <><h3 style={{ textAlign: "center" }}>Update User</h3>
      <div>
        <Card className="mx-auto" style={{ width: "20rem", marginTop: "10px", border: "none"  }}>
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
            <Button className="float-center success" onClick={()=>{updateUser(state)}}>Update</Button>
            <Link to="/">
        <Button className="my-2 danger" type="submit" variant="primary">
          Cancel
        </Button>
      </Link>
          </Form>
        </Card>
      </div></>
      }
    </>
  );
}
