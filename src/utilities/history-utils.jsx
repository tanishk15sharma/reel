import axios from "axios";
import { getToken } from "./helper-utils";

const getHistoryArr = async () => {
  try {
    const { data } = await axios.get("/api/user/history", {
      headers: {
        authorization: getToken(),
      },
    });
    return data.history;
  } catch (err) {
    console.log(err);
  }
};

const addVideoToHistory = async (video, dispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/history",
      { video },
      { headers: { authorization: getToken() } }
    );
    console.log(data);
    dispatch({ type: "ADD_TO_HISTORY", payload: data.history });
  } catch (err) {
    console.log(err);
  }
};

export { getHistoryArr, addVideoToHistory };
