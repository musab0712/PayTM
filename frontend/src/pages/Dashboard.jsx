import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import UserSection from "../components/UserSection";

export default function Dashboard() {
  return (
    <>
      <AppBar />
      <Balance value={"8000"} />
      <UserSection />
    </>
  );
}
