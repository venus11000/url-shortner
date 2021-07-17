import { useState } from "react";
import { Button, Card, CardContent, TextField } from "@material-ui/core";
import "./style.css";

const UrlShortnerForm = ({ shortten }) => {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");

    const handleChange = (event) => {
        setUrl(event.target.value);
        setError("");
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let response = await shortten(url);
        if (response.error) {
            // setUrl("");
            setError(response.error);
        } else if (!response.error) {
            setUrl("");
        }
    }

    return (
        <form className="form-container">
            <Card className="form-container_wrapper">
                <CardContent className="form-container_fields-container">
                    <TextField
                        id="url"
                        variant="outlined"
                        label="URL"
                        placeholder="Enter URL to Short"
                        fullWidth
                        margin="normal"
                        name="url"
                        onChange={handleChange}
                        value={url}
                        error={error}
                        helperText={error}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Shrink</Button>
                </CardContent>
            </Card>
        </form>
    );
}

export default UrlShortnerForm;