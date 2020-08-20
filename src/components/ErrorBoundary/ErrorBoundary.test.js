import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import React from "react";
import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  it("expects to match Snapshot Object", () => {
    const wrapper = shallow(<ErrorBoundary />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("errors if wrapped component throws error", () => {
    const Something = () => null;
    const wrapper = mount(
      <ErrorBoundary>
        <Something />
      </ErrorBoundary>
    );
    const error = new Error("test");

    expect(wrapper.state()).toEqual({ hasErrored: false });
    wrapper.find(Something).simulateError(error);
    expect(wrapper.state()).toEqual({ hasErrored: true });
  });
});
