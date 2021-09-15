import React from "react";
import {
  Form,
  Button,
  Header as SemanticHeader,
  Grid,
  Segment,
} from "semantic-ui-react";

import { Header } from "../../components/Header";

export const RegisterLayout = ({ useForm }) => {
  const { form, onChange, registerValidator } = useForm();

  return (
    <div>
      <Header />

      <Grid centered>
        <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
          <SemanticHeader>Signup Here</SemanticHeader>

          <Segment>
            <Form>
              <Form.Field>
                <Form.Input
                  value={form.username || ""}
                  onChange={onChange}
                  name="username"
                  type="text"
                  placeholder="Username"
                  label="Username"
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  value={form.firstName || ""}
                  onChange={onChange}
                  name="firstName"
                  type="text"
                  placeholder="First Name"
                  label="First Name"
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  value={form.lastName || ""}
                  onChange={onChange}
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  label="Last Name"
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  value={form.email || ""}
                  onChange={onChange}
                  name="email"
                  type="email"
                  placeholder="Email"
                  label="Email"
                />
              </Form.Field>

              <Form.Field>
                <Form.Input
                  value={form.password || ""}
                  onChange={onChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                  label="Password"
                />
              </Form.Field>

              <Button disabled={registerValidator} fluid primary type="submit">
                Submit
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
};
