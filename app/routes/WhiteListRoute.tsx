import WhiteListPage from "~/pages/whiteList/WhiteListPage"



export function meta() {
    return [
        {title: 'Lista de Desejos'},
        {name: "description", content:"Confira a lista de desejos e objetivos que eu tenho para o futuro e coisas que eu já realizei"}
    ]
}


export default function WhiteListRoute() {
    return <WhiteListPage />
}