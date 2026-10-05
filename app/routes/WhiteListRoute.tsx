import WhiteListPage from "~/pages/whiteList/WhiteListPage"



export function meta() {
    return [
        {title: 'Bucket List'},
        {name: "description", content:"Sonhos, experiências e metas que quero realizar"}
    ]
}


export default function WhiteListRoute() {
    return <WhiteListPage />
}