export default function Navigation() {
    return (
        <ul className="
        [&_li]:text-sm
        [&_li]:mx-2
        [&_li]:text-neutral-500
        [&_li]:font-medium
        [&_li]:truncate
        overflow-hidden
        hidden
        md:flex
        ">
            <li>Início</li>
            <li>Showcase</li>
            <li>Docs</li>
            <li>Blog</li>
            <li>Analytics</li>
            <li>Templates</li>
            <li>Enterprise</li>
        </ul>
    )
}