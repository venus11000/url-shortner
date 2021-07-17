import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { clickShortUrls, createShortUrl, getShortUrls } from "../../core/shortUrl";
import UrlShortnerForm from "../UrlShortnerForm";
import CustomTable from "../Table";
import "./style.css";

const UrlShortner = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUrls();
    }, []);

    const getUrls = async () => {
        let data = await getShortUrls();

        setData(data || []);
    }

    const shortten = async (url) => {
        console.log(url);
        const data = {
            url: url
        }
        let response = await createShortUrl(data);
    }
    return (
        <div>
            <Typography className="header" variant="h4">URL Shortner</Typography>
            <UrlShortnerForm shortten={shortten} />
        </div>
    );
}

export default UrlShortner;