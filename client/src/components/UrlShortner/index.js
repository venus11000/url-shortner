import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { clickShortUrls, createShortUrl, getShortUrls } from "../../core/shortUrl";
import UrlShortnerForm from "../UrlShortnerForm";
import CustomTable from "../Table";
import "./style.css";

const UrlShortner = () => {
    const [data, setData] = useState([]);
    const [fetchData, setFetchData] = useState(false);

    useEffect(() => {
        getUrls();
    }, [fetchData]);

    const getUrls = async () => {
        let data = await getShortUrls();

        setData(data || []);
        setFetchData(false);
    }

    const shortten = async (url) => {
        const data = {
            url: url
        }
        let response = await createShortUrl(data);
        response && setFetchData(true)
    }

    const clickShortUrlsAndUpdate = async (shortUrl) => {
        let response = await clickShortUrls(shortUrl);
        response && setFetchData(true)
    }
    return (
        <div>
            <Typography className="header" variant="h4">URL Shortner</Typography>
            <UrlShortnerForm shortten={shortten} />
            <CustomTable data={data} clickShortUrls={clickShortUrlsAndUpdate} />
        </div>
    );
}

export default UrlShortner;