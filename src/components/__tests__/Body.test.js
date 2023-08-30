const { render } = require("@testing-library/react");
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListMock.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Render the data from API call", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
});
