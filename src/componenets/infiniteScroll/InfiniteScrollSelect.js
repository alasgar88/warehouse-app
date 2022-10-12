import React, { useEffect, useState, useRef } from "react";
import "./infinite-scroll.css";
import { FormGroup, Label, Input, Spinner } from "reactstrap";
import { useDispatch, unwrap } from "react-redux";

const InfiniteScroll = ({
  getDataObject,
  dataListName,
  setFormData,
  inputFieldName,
  inputFieldLabel,
}) => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  //
  const [showContainer, setShowContainer] = useState(false);
  const [inputData, setInputData] = useState("");
  const [height, setHeight] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [lastData, setLastData] = useState(false);
  const ref = useRef();
  //

  console.log(lastData, "lastdata");
  // console.log(productList, "productList");
  // scroll handler
  const scrollHandler = (e) => {
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    if (scrollHeight - (scrollTop + height) <= 20) {
      console.log(scrollHeight - (scrollTop + height));
      setPage((oldData) => oldData + 1);
    }
    // console.log(e.target.scrollTop, "scrollTop");
    // console.log(e.target.scrollHeight, "scrollHeight");
    // console.log(height, "etarget");
  };

  // scroll event
  useEffect(() => {
    height && ref?.current?.addEventListener("scroll", scrollHandler);
    return () =>
      height && ref?.current?.removeEventListener("scroll", scrollHandler);
  }, [height]);

  // find container height
  useEffect(() => {
    setHeight(ref?.current?.clientHeight);
  }, [showContainer]);

  // handle focus
  const handleFocus = () => {
    setShowContainer(true);
  };

  // handle blur
  const handleBlur = () => {
    setTimeout(() => {
      setShowContainer(false);
    }, 100);
  };

  // get data
  useEffect(() => {
    if (!lastData && !isLoading) {
      setIsLoading(true);
      dispatch(getDataObject(page))
        .unwrap()
        .then((data) => {
          setIsLoading(false);
          console.log(data[dataListName].length);
          if (data[dataListName].length === 0) setLastData(true);

          setData((oldData) => {
            return [...oldData, ...data[dataListName]];
          });

          // setData(data.products);
        });
    }
  }, [page]);
  return (
    <>
      <FormGroup>
        <Label for='sell'>{inputFieldLabel}</Label>
        <Input
          id='sell'
          name='sellPrice'
          placeholder='Enter sell price'
          type='text'
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete='off'
          defaultValue={inputData}
        />
      </FormGroup>
      {/* {showContainer && ( */}
      <div className='data-list-container'>
        <ul
          className={`data-list ${showContainer ? "show" : "null"}`}
          ref={ref}
        >
          {data.map((item, index) => {
            return (
              <li
                className='data-item'
                key={index}
                onClick={() => {
                  setInputData(item.name);
                  setFormData((oldFormData) => {
                    return {
                      ...oldFormData,
                      [inputFieldName]: item.id,
                    };
                  });
                  setShowContainer(false);
                }}
              >
                {item.name}
              </li>
            );
          })}
          {isLoading && (
            <li className='spinner-container'>
              <Spinner
                color='primary'
                style={{
                  height: "1.5rem",
                  width: "1.5rem",
                }}
              >
                Loading...
              </Spinner>
            </li>
          )}
        </ul>
      </div>
      {/* )} */}
    </>
  );
};

export default InfiniteScroll;
