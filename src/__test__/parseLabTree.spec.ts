import { parseLabTree } from "../lib/parse";

describe("parseLabTree", () => {
  it("components should components", () => {
    const data = ["components"];

    const result = parseLabTree(data);

    const expectedResult = [
      {
        key: "components",
      },
    ];

    expect(result).toEqual(expectedResult);
  });

  it("components/calender should be components, calender", () => {
    const data = ["components/calender"];

    const result = parseLabTree(data);

    const expectedResult = [
      {
        key: "components",
        node: [{ key: "calender" }],
      },
    ];

    expect(result).toEqual(expectedResult);
  });

  it("components, graph should be a components, graph", () => {
    const data = ["components", "graph"];

    const result = parseLabTree(data);

    const expectedResult = [
      {
        key: "components",
      },
      {
        key: "graph",
      },
    ];

    expect(result).toEqual(expectedResult);
  });

  it("components, calender and clock should be a components, calender and clock", () => {
    const data = ["components/calender", "components/clock"];

    const result = parseLabTree(data);

    const expectedResult = [
      {
        key: "components",
        node: [{ key: "calender" }, { key: "clock" }],
      },
    ];

    expect(result).toEqual(expectedResult);
  });

  it("components, calender and clock, graph should be a components, calender and clock, graph", () => {
    const data = [
      "components/calender",
      "components/clock",
      "graph",
      "graph/test",
    ];

    const result = parseLabTree(data);

    const expectedResult = [
      {
        key: "components",
        node: [{ key: "calender" }, { key: "clock" }],
      },
      {
        key: "graph",
        node: [{ key: "test" }],
      },
    ];

    expect(result).toEqual(expectedResult);
  });
});
