import { Box, Typography } from "@mui/material";

type Props = {
    data: any;
    title: string;
};

const TabContents = ({ data, title }: Props) => {
    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, pb: 2 }}>
                {title}
            </Typography>
            <Typography
                variant="h6"
                sx={{ lineHeight: 2.5, textAlign: "justify", fontSize: "0.9rem" }}
            >
                {data}
            </Typography>
        </Box>
    );
};

export default TabContents;
