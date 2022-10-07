import React, { useState, useEffect } from "react";
import "./create-product.css";
import { Form, FormGroup, Label, Input, Button, Row } from "reactstrap";
import { toast } from "react-toastify";
import { InfoModal } from "../../../../componenets";
import { createProduct } from "../../../../features/product/productSlice";
import { getProductCategoryList } from "../../../../features/category/categorySlice";
import { useDispatch, useSelector } from "react-redux";

const CreateWareHouse = () => {
  const dispatch = useDispatch();
  const { productCategoryList } = useSelector((store) => store.category);
  const [modalOpen, setModalOpen] = useState(false);
  const [mainCategoryList, setMainCategoryList] = useState([]);
  const [subCategoryList, setSubCategoryList] = useState("");
  const [productData, setProductData] = useState({
    Name: "",
    buyPrice: "",
    sellPrice: "",
    Description: "",
    CategoryId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    let name = e.target.name;

    // set main category name
    if (name === "CategoryId") {
      const { Name } = mainCategoryList.filter(
        (mainCategory) => mainCategory.Id === parseInt(value)
      )[0];
      // create subcategory list
      const subCategoryList = mainCategoryList.map((mainCategory) => {
        if (mainCategory.Name === Name) {
          return mainCategory.SubCat;
        }
      });
      setSubCategoryList(
        subCategoryList[0] ? subCategoryList[0] : subCategoryList[1]
      );
    }

    if (e.target.name === "CategoryId2") {
      name = "CategoryId";
    }
    setProductData((oldValue) => {
      return { ...oldValue, [name]: value };
    });
  };

  console.log(productData);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !productData.Name ||
      !productData.buyPrice ||
      // !productData.sellPrice ||
      !productData.Description ||
      !productData.CategoryId
    ) {
      toast.error("empty values");
      return;
    } else if (productData.Name.length < 5) {
      toast.error("Product name length less than 5 character");
      return;
    }

    // sent function ,data,and text to info modal to execute
    setModalOpen(true);
  };

  // get product category list
  useEffect(() => {
    dispatch(getProductCategoryList());
  }, []);

  // create main category list
  useEffect(() => {
    const mainCategoryList = Object.values(productCategoryList);
    setMainCategoryList(mainCategoryList);
  }, [productCategoryList]);

  // create sub category list
  useEffect(() => {
    if (mainCategoryList.length > 0) {
      const { Name } = productCategoryList[0];

      // create subcategory list
      const subCategoryList = mainCategoryList.map((mainCategory) => {
        if (mainCategory.Name === Name) {
          return mainCategory.SubCat;
        }
      });
      setSubCategoryList(
        subCategoryList[0] ? subCategoryList[0] : subCategoryList[1]
      );
    }
    return;
  }, [mainCategoryList]);

  return (
    <div className='create-user-container'>
      <InfoModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        func={createProduct}
        data={productData}
        text='Confirm to create product'
      />
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='name'>Product name</Label>
          <Input
            id='name'
            name='Name'
            placeholder='Enter product name'
            type='text'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='category'>Category</Label>
          <Input
            className='mb-3'
            type='select'
            id='category'
            name='CategoryId'
            placeholder='select category'
            onChange={handleChange}
          >
            {mainCategoryList &&
              mainCategoryList.map((item) => {
                return (
                  <option key={item.Id} value={item.Id}>
                    {item.Name}
                  </option>
                );
              })}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='category2'>Sub Category</Label>
          <Input
            className='mb-3'
            type='select'
            id='category2'
            name='CategoryId2'
            placeholder='select category'
            onChange={handleChange}
          >
            {subCategoryList &&
              subCategoryList.map((item) => {
                return (
                  <option key={item.Id} value={item.Id}>
                    {item.Name}
                  </option>
                );
              })}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for='description'>Description</Label>
          <Input
            id='description'
            name='Description'
            type='textarea'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='buy'>Buy price</Label>
          <Input
            id='buy'
            name='buyPrice'
            placeholder='Enter buy price'
            type='text'
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for='sell'>Sell price</Label>
          <Input
            id='sell'
            name='sellPrice'
            placeholder='Enter sell price'
            type='text'
            onChange={handleChange}
          />
        </FormGroup>
        <Button>Create Product</Button>
      </Form>
    </div>
  );
};

export default CreateWareHouse;
