import React from "react";
import { useDispatch } from "react-redux";
import { AddBook as AddingNewBook, ADD_BOOK } from "../actions";
interface Props {}

export const AddBook = (props: Props) => {
  const inputRef = React.createRef<HTMLInputElement>();
  const dispatch = useDispatch();
  const AddBookHandler = () => {
    dispatch({
      type: ADD_BOOK,
      payload: {
        author: "nam",
        price: 54,
        title: inputRef.current?.value || "new",
      },
    });
  };
  return (
    <div className="w-full max-w-xs">
      <label>Add New Book</label>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="bookname"
        >
          bookname
        </label>
        <input
          ref={inputRef}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="bookname"
          type="text"
          placeholder="New Book Name"
        />
      </div>
      <button
        onClick={AddBookHandler}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Save
      </button>
    </div>
  );
};
