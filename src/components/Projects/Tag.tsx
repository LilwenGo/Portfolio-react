export default function Tag({children}: {children: string}) {
    return <span className="block px-2 py-1 box-border min-w-fit border-4 border-solid rounded-xl font-bold text-primary border-primary">{children}</span>;
}