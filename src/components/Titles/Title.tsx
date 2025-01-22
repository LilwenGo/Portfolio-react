export default function Title({children = 'Missing title'}: {children: string}) {
    return (
        <h1 className="text-accent text-h-l font-heading">{children}</h1>
    );
}