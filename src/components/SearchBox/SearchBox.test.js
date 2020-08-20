import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import React from "react";
import SearchBox from "./SearchBox";

it("expects to render SearchBox component", () => {
  const wrapper = shallow(<SearchBox />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
