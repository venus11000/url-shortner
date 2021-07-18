import { render, screen } from "@testing-library/react";
import CustomTable from "./index";

describe('Table Component', () => {
    test('renders Table component', () => {
        render(<CustomTable />);

        const tableElement = screen.getByRole("table");
        expect(tableElement).toBeInTheDocument();
    });

    test('renders Empty Table component', () => {
        render(<CustomTable />);

        const noDataElement = screen.getByText("no data", { exact: false });
        expect(noDataElement).toBeInTheDocument();
    });

    test('renders URLs in Table Component', () => {
        render(<CustomTable data={[{url: "http://test.com/test", shortUrl: "qwerty", clicks: 5}]}/>);

        const someDataRenderedElement = screen.getByText("qwerty", { exact: false });
        expect(someDataRenderedElement).toBeInTheDocument();
    });
});