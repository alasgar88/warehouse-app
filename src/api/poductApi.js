import axios from "axios";

// get product list
export const getProductListThunk = async (_, thunkAPI) => {
  try {
    const resp = await axios(
      "http://karfree-001-site1.atempurl.com/api/Products/GetProducts",
      {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      }
    );
    return resp.data.data.products;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};

// create product
export const createProductThunk = async (product, thunkAPI) => {
  try {
    const resp = await axios.post(
      "http://karfree-001-site1.atempurl.com/api/Products/PostProduct",
      product,
      {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      }
    );
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};
export const deleteProductThunk = async (id, thunkAPI) => {
  try {
    const resp = await axios.delete(
      `http://karfree-001-site1.atempurl.com/api/Products/DeleteProduct/${id}`,
      {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
        },
      }
    );
    return resp.data.data;
  } catch (error) {
    console.log(error, "error");
    return thunkAPI.rejectWithValue(error.response.request.response);
  }
};
