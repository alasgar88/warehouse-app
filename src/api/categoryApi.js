import axios from "axios";

// get product category
export const getProductCategoryListThunk = async (_, thunkAPI) => {
  try {
    const resp = await axios(
      "http://karfree-001-site1.atempurl.com/api/Categories",
      {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      }
    );
    return resp.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};
