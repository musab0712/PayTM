import { useEffect, useState } from "react";
import User from "./User";
import axios from "axios";

export default function UserSection() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter)
      .then((response) => setUsers(response.data.user));
  }, [filter]);

  return (
    <>
      <div className="px-8">
        <div className="font-bold mt-6 text-lg">Users</div>
        <div className="my-2">
          <input
            onChange={(e) => setFilter(e.target.value)}
            type="text"
            placeholder="Search users..."
            className="w-full px-2 py-1 border rounded border-slate-200"
          ></input>
        </div>
        <div>
          {users.map((user) => (
            <User user={user} />
          ))}
        </div>
      </div>
    </>
  );
}
