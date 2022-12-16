import React from "react"
import renderer from "react-test-renderer"
import FormPage from "../formPage"
import { render, fireEvent } from "@testing-library/react";

describe("FormPage", () => {

  it("renders correctly", () => {
    const tree = renderer
      .create(<FormPage />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test("should display correct error message", () => {
    const { getByTestId, findByText } = render(<FormPage />);

    getByTestId("submit");

    fireEvent.click(getByTestId("submit"));

    findByText("Name is required.");
    findByText("Phone number is required.");
    findByText("Email address is required.");
  });
});
