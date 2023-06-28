import React, { useEffect, useState } from "react";
import "./navbar.css";

let msg = "login";
let Auth = false;
const handleLogin = async (Auth) => {
  const payLoad = new URLSearchParams({
    client_id: "60ea19ab1176473da67682906eeb17be",
    response_type: "code",
    redirect_uri: "http://localhost:5173/callback",
    scope:
      "playlist-read-private user-library-read user-read-email user-read-private playlist-modify-public playlist-modify-private",
  }).toString();

  const loginUrl = `https://accounts.spotify.com/authorize?${payLoad}`;

  window.location.href = loginUrl;
  return Auth;
};

const handle = async () => {
  Auth = false;
  await handleLogin(Auth);
  console.log(Auth);
  setAuth = true;
};

const Navbtn = () => {
  const [Auth, setAuth] = useState(false);
  const handler = async () => {
    const isSuccess = await handleLogin(true); // idk why ur handleLogin function is like this
    setAuth(isSuccess);
  };
  return (
    <div>
      <button onClick={handler} className="login-btn" id="login-btn">
        {Auth ? "Login" : "User X"}
      </button>
    </div>
  );
};

export { Navbtn };
