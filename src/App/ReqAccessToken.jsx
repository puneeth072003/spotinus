import React, { useEffect } from "react";

const getToken = async () => {
  const client_id = "60ea19ab1176473da67682906eeb17be";
  const client_secret = "ed0a6142965b41a6bb2918019c04cb8b";

  const payLoad = {
    url: "https://accounts.spotify.com/api/token",
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${btoa(`${client_id}:${client_secret}`)}`,
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }).toString(),
  };

  try {
    const response = await fetch(payLoad.url, payLoad);
    const data = await response.json();

    window.access_token = data.access_token;
    console.log("Acess token-->", access_token);
    localStorage.setItem("AcessKey", access_token);
  } catch (error) {
    console.error("Error fetching access token:", error);
  }
};

const ReqAccessToken = () => {
  useEffect(() => {
    getToken();
  }, []);
};

export { ReqAccessToken };
