import React, { useEffect, useState } from "react";

const accessToken = localStorage.getItem("AcessKey");
const tokenExpirationTime = Date.now() + 60 * 1000;
if (tokenExpirationTime < Date.now()) {
  console.log("Token has expired");
} else {
  console.log("Token is still valid");
}

const FetchLiked = async () => {
  try {
    const payLoad = {
      url: "https://api.spotify.com/v1/me",
      method: "GET",
      headers: {
        Authorization: `Bearer  ${accessToken}`,
      },
    };
    const response = await fetch(payLoad.url, payLoad);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error getting name", error);
  }
};

export { FetchLiked };
