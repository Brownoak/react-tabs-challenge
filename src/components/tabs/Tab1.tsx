import { Box, Typography } from "@mui/material";
import TabContents from "../TabContents";

type Props = {
    data: any;
};
export default function Tab1({ data }: Props) {
    return <TabContents data={data} title="Title 1" />;
}
