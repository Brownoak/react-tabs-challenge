import TabContents from "../TabContents";

type Props = {
    data: any;
};
export default function Tab2({ data }: Props) {
    return <TabContents data={data} title="Title 2" />;
}
