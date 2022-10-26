import React, { useEffect, useState, useRef, useCallback } from "react";
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
  const [requestDate, setRequestData] = useState([1]);
  const [page, setPage] = useState(1);
  //
  const [showContainer, setShowContainer] = useState(false);
  const [inputData, setInputData] = useState("");
  const [height, setHeight] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // const [lastData, setLastData] = useState(false);
  const ref = useRef();
  //
  console.log(page, "page");

  // scroll handler
  const scrollHandler = useCallback(
    (e) => {
      const scrollHeight = e.target.scrollHeight;
      const scrollTop = e.target.scrollTop;
      console.log(scrollHeight - (scrollTop + height));

      if (scrollHeight - (scrollTop + height) <= 20) {
        setPage((oldData) => oldData + 1);
      }
    },
    [height]
  );

  // scroll event
  useEffect(() => {
    height && ref?.current?.addEventListener("scroll", scrollHandler);
    return () =>
      height && ref?.current?.removeEventListener("scroll", scrollHandler);
  }, [height, scrollHandler]);

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
    if (requestDate.length > 0) {
      setIsLoading(true);
      dispatch(getDataObject(page))
        .unwrap()
        .then((data) => {
          setIsLoading(false);
          setRequestData(data[dataListName]);
          setData((oldData) => {
            return [...oldData, ...data[dataListName]];
          });
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
          // placeholder='Enter sell price'
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
