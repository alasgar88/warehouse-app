import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Spinner,
} from "reactstrap";

const PaginationComponent = ({ func, paginationList, storeName }) => {
  const dispatch = useDispatch();
  console.log(storeName, "storeName");
  var storeObject = useSelector((store) => store[storeName]);
  if (storeObject) {
    var isLoading = storeObject.isLoading;
  }
  const [page, setPage] = useState(1);

  return (
    <Pagination>
      <PaginationItem>
        <PaginationLink
          first
          href='#'
          onClick={() => {
            dispatch(func(1));
            setPage(1);
          }}
        />
      </PaginationItem>
      {page > 1 && (
        <PaginationItem>
          <PaginationLink
            href='#'
            previous
            onClick={() => {
              dispatch(func(page - 1));
              setPage(page - 1);
            }}
          />
        </PaginationItem>
      )}

      {paginationList.map((item, index) => {
        return (
          <PaginationItem active={page === item} key={index}>
            <PaginationLink
              href='#'
              onClick={() => {
                dispatch(func(item));
                setPage(item);
              }}
            >
              {page === item && isLoading ? (
                <Spinner color='light' size='sm'>
                  Loading...
                </Spinner>
              ) : (
                item
              )}
            </PaginationLink>
          </PaginationItem>
        );
      })}
      {page < paginationList.length && (
        <PaginationItem>
          <PaginationLink
            href='#'
            next
            onClick={() => {
              dispatch(func(page + 1));
              setPage(page + 1);
            }}
          />
        </PaginationItem>
      )}
      <PaginationItem>
        <PaginationLink
          href='#'
          last
          onClick={() => {
            dispatch(func(paginationList[paginationList.length - 1]));
            setPage(paginationList.length);
          }}
        />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginationComponent;
