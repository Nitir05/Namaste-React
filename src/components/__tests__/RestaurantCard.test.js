import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurentCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurentCard component with data", () => {
  render(<RestaurantCard resData={MOCK_DATA}/>);

  const name = screen.getByText("Krishnum Restaurant");

  expect(name).toBeInTheDocument();
});
