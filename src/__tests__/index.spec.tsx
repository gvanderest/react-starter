const ReactDOMMock = {
    render: jest.fn(),
};
jest.mock("react-dom", () => (ReactDOMMock));

import "../index";

describe("index", () => {
    it("should bootstrap the Example application", () => {
        expect(ReactDOMMock.render.mock.calls.length).toBe(1);
    });
});
