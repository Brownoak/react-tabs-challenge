import TabContents from "../TabContents";

type Props = {
    data: any;
};
export default function Tab3({ data }: Props) {
    return <TabContents data={data} title="Title 3" />;
}
