import { Link } from "react-router-dom"

export default function ErrorPage() {
    return <section>
        <h2>Page not found</h2>
        <Link to="/">Return</Link>
    </section>
}