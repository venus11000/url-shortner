import { render, screen } from "@testing-library/react";
import UrlShortnerForm from "./index";

describe('UrlShortnerForm Component', () => {
    it('check Input Field is present', () => {
        render(<UrlShortnerForm/>);
        const inputElement = screen.getByRole("textbox");

        expect(inputElement).toBeInTheDocument();
    });

    it('check submit Button is present', () => {
        render(<UrlShortnerForm/>);
        const buttonElement = screen.getByRole("button");

        expect(buttonElement).toBeInTheDocument();
    });
});