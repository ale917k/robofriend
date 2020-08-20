import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import React from "react";
import Card from "./Card";

describe("Card", () => {
  it("expects to match Snapshot Object", () => {
    const wrapper = shallow(<Card />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
