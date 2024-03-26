import ButtonWarning from "../components/ButtomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

export default function Signup() {
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-10">
            <Heading title={"Sign Up"} />
            <SubHeading label={"Enter your information to create an account"} />
            <InputBox
              label={"First Name"}
              placeholder={"Enter Your First Name"}
            />
            <InputBox
              label={"Last Name"}
              placeholder={"Enter Your Last Name"}
            />
            <InputBox
              label={"Username"}
              placeholder={"Enter john@example.com"}
            />
            <InputBox label={"Password"} placeholder={"Enter Password"} />
            <div className=" py-3">
              <Button label={"Sign Up"} />
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
