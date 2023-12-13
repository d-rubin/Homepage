const NavItem = ({ text }: { text: string }) => {
    const href = `#${text.replace(" ", "-")}`;

    return (
        <span className="group">
            <a className="outline-none text-2xl group-hover:text-orange group-focus-within:text-orange transition-all" href={href}>{text}</a>
            <div className="w-14 border-2 rounded border-transparent group-hover:border-red group-focus-within:border-red transition-all" />
        </span>
    );
}

export default NavItem;