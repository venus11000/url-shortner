import { useState } from "react";
import { Button, Card, CardContent, TextField } from "@material-ui/core";
import "./style.css";

const UrlShortnerForm = ({ shortten }) => {
    const [url, setUrl] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        url && shortten(url);
        setUrl("");
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
                        // helperText="Full width!"
                        fullWidth
                        margin="normal"
                        name="url"
                        onChange={(event) => setUrl(event.target.value)}
                        value={url}
                    />
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Shrink</Button>
                </CardContent>
            </Card>
        </form>
    );
}

export default UrlShortnerForm;