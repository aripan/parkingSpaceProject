import jwt from "jsonwebtoken";
import axios from "axios";
import fetch from "node-fetch";

const generateToken = ({ username, password }) => {
  // return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3600" });
  // return jwt.sign({ username, password }, process.env.JWT_SECRET, {
  //   expiresIn: "3600",
  // });
const authAxios=axios.create({
  URL =`https://staging.viot.portal.graphicx.io/api/v1/oauth/token?grant_type=password&username=${username}&password=${password}`,
  headers: {
    Authorization:
      "Basic cF92b2RfcG9ydGFsX2NsaWVudDpkM2tYam9ZWE1FM0xJa3ZkdVNqVmJ3eEN6ckh4dV8=",
    "x-tenantid": "p_vod",
  },
})
  

  const { fetch_res } = await authAxios.post(
    "/login");

  return fetch_res;
};

export default generateToken;
