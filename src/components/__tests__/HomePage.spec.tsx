jest.mock("../../images/react.png", () => "../images/react.png");

import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import HomePage from "../HomePage";

describe("something", () => {
    it("should test something properly", () => {
        const example = mount(
            <Provider store={ store }>
                <HomePage />
            </Provider>
        );
        expect(example.find("h1").text()).toBe("React Starter");
    });
});
