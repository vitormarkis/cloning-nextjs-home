export default function Navigation() {
    return (
        <ul className="flex 
        [&_li]:text-sm
        [&_li]:mx-2
        [&_li]:text-neutral-500
        [&_li]:font-medium
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