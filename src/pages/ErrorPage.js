import { useRouteError } from "react-router-dom"

export default function ErrorPage() {
    const error = useRouteError();
    return(
        <div>
            <h1>Error status:{error.statusText}</h1>
            <div>Error message: {error.message}</div>
        </div>
    )
}