import { shallow } from "enzyme";
import * as React from "react";
import Example from "../Example";

describe("something", () => {
    it("should test something properly", () => {
        const example = shallow(<Example />);
        expect(example.find("h1").text()).toBe("React Starter");
    });
});
