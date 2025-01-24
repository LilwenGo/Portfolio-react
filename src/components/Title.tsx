export default function Title({size = 2, color = 'accent', children = 'Missing title'}: {size?: number, color?: string, children: string}) {
    const classes = `title-${color} title`;
    switch(size) {
        case 1:
            return <h1 className={`${classes} text-h-l`}>{children}</h1>;
        case 2:
            return <h2 className={`${classes} text-h-m`}>{children}</h2>;
        default:
            return <h3 className={`${classes} text-h-s`}>{children}</h3>;
    }
}