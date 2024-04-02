import { useState } from "react";
import ButtonWarning from "../components/ButtomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import axios from "axios";

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-10">
            <Heading title={"Sign Up"} />
            <SubHeading label={"Enter your information to create an account"} />
            <InputBox
              onChange={(e) => setFirstName(e.target.value)}
              label={"First Name"}
              placeholder={"Enter Your First Name"}
            />
            <InputBox
              onChange={(e) => setLastName(e.target.value)}
              label={"Last Name"}
              placeholder={"Enter Your Last Name"}
            />
            <InputBox
              onChange={(e) => setUsername(e.target.value)}
              label={"Username"}
              placeholder={"Enter john@example.com"}
            />
            <InputBox
              onChange={(e) => setPassword(e.target.value)}
              label={"Password"}
              placeholder={"Enter Password"}
            />
            <div className=" py-3">
              <Button
                onClick={async () => {
                  const response = await axios.post(
                    "http://localhost:3000/api/v1/user/signup",
                    {
                      firstName,
                      lastName,
                      username,
                      password,
                    }
                  );
                  localStorage.setItem("token", response.data.token);
                }}
                label={"Sign Up"}
              />
            </div>
            <ButtonWarning
              label={"Already have an account?"}
              buttonText={"Sign In"}
              to={"/signin"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
