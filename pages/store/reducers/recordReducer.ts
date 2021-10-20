import { recordAction, recordsIn } from "../../../types/actions/recordType";
const initalState: recordsIn = {
  data: "",
  error: "",
  loading: false,
};
export const recordReducer = (
  state: recordsIn = initalState,
  action: recordAction
) => {
  return state;
};
