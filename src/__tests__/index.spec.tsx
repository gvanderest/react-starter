const ReactDOMMock = {
    render: jest.fn(),
};
jest.mock("../images/react.png", () => "../images/react.png");
jest.mock("react-dom", () => (ReactDOMMock));

import "../index";

describe("index", () => {
    it("should bootstrap the Example application", () => {
        expect(ReactDOMMock.render.mock.calls.length).toBe(1);
    });
});
