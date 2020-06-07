import React, { useState, FC, FormEventHandler, FormEvent } from "react";
import { IoIosMail, IoMdKey } from "react-icons/io";
import { Input } from "components/ui";
import login from "./Login.module.scss";

const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <section className={login.wrapper}>
      <h1>Log in</h1>
      <form action="post" onSubmit={onSubmit} noValidate>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="you@domain.com"
          className={login.input}
          onChange={({ currentTarget }: FormEvent<HTMLInputElement>): void =>
            setEmail(currentTarget.value)
          }
          required={true}
          icon={<IoIosMail />}
        />
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className={login.input}
          onChange={({ currentTarget }: FormEvent<HTMLInputElement>): void =>
            setPassword(currentTarget.value)
          }
          required={true}
          icon={<IoMdKey />}
        />
        <Input type="submit" value="Log in" />
      </form>
    </section>
  );
};

export default Login;
