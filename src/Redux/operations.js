import axios from "axios";
import { fetchInProgress, fetchSuccess, fetchError,} from "./slice";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = () => async dispatch => {
  try {
    dispatch(fetchInProgress());
    const response = await axios.get('/campers');
    dispatch(fetchSuccess(response.data))
  } catch (e) {
    dispatch(fetchError(e.message));
  }
};
