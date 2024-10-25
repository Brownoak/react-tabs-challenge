import { useEffect, useState } from "react";
import { Box, CircularProgress, Tab, Tabs } from "@mui/material";
import { useGetTabsTextQuery } from "./services/TabsSlice";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";
import Tab4 from "./tabs/Tab4";

export default function TabsConfig() {
    let res: any = [];

    const [currTab, setCurrTab] = useState("Tab 1");
    const { data, isLoading, isSuccess } = useGetTabsTextQuery({});
    if (isSuccess) {
        res = data?.contents;
        console.log("data", res);
    }
    const [firstParagraph, setFirstParagraph] = useState("");
    const [secondParagraph, setSecondParagraph] = useState("");
    const [thirdParagraph, setThirdParagraph] = useState("");

    useEffect(() => {
        if (data) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(res, "text/html");

            // Extract paragraphs
            const paragraphs = doc.getElementsByTagName("p");
            if (paragraphs.length > 0)
                setFirstParagraph(paragraphs[0].innerText);
            if (paragraphs.length > 1)
                setSecondParagraph(paragraphs[1].innerText);
            if (paragraphs.length > 2)
                setThirdParagraph(paragraphs[2].innerText);
        }
    }, [data]);

    console.log("First Paragraph:", firstParagraph);
    console.log("Second Paragraph:", secondParagraph);
    console.log("Third Paragraph:", thirdParagraph);

    const PARENT_DETAIL_TABS = [
        {
            value: "Tab 1",
            component: isLoading ? (
                <CircularProgress />
            ) : (
                <Tab1 data={firstParagraph} />
            ),
        },
        {
            value: "Tab 2",
            component: isLoading ? (
                <CircularProgress />
            ) : (
                <Tab2 data={secondParagraph} />
            ),
        },
        {
            value: "Tab 3",
            component: isLoading ? (
                <CircularProgress size={"small"} />
            ) : (
                <Tab3 data={thirdParagraph} />
            ),
        },
        {
            value: "Tab 4",
            component: isLoading ? (
                <CircularProgress />
            ) : (
                <Tab4 data={firstParagraph} />
            ),
        },
    ];

    return (
        <>
            <Tabs
                value={currTab}
                scrollButtons="auto"
                variant="fullWidth"
                allowScrollButtonsMobile
                onChange={(e, value) => setCurrTab(value)}
                // sx={{
                //     mt: 2,
                // }}
            >
                {PARENT_DETAIL_TABS.map((tab) => (
                    <Tab
                        sx={{
                            height: 70,
                            backgroundColor:
                                currTab === tab.value ? "#085c7c" : "#1a1a1a",
                            color:
                                currTab === tab.value
                                    ? "white !important"
                                    : "#878787",
                            borderBottom:
                                currTab === tab.value ? "none" : "none",
                            "&:hover": {
                                backgroundColor:
                                    currTab === tab.value
                                        ? "#085c7c"
                                        : "#272726",
                                color: "white",
                            },
                            textTransform: "none",
                        }}
                        disableRipple
                        key={tab.value}
                        label={tab.value}
                        value={tab.value}
                    />
                ))}
            </Tabs>

            <Box sx={{ mb: 5 }} />
            {isLoading ? (
                <Box
                    display="grid"
                    justifyContent="center"
                    alignItems="center"
                    height="50vh"
                >
                    <CircularProgress />
                </Box>
            ) : (
                PARENT_DETAIL_TABS.map((tab) => {
                    const isMatched = tab.value === currTab;
                    return (
                        isMatched && <Box key={tab.value}>{tab.component}</Box>
                    );
                })
            )}
        </>
    );
}
