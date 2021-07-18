import { render, screen } from "@testing-library/react";
import URLShortener from "./index";

describe('URLShortener Component', () => {
    it('check "URL Shortner" is present', () => {
        render(<URLShortener />);
        const headerElement = screen.getByText("URL Shortner", { exact: false });

        expect(headerElement).toBeInTheDocument();
    });
});