export default function Paragraph({size = 1, className, children = 'Missing title'}: {size?: number, className?: string, children: string}) {
    if(size === 1) {
        return <p className={`text-p-m text-primary m-0 ${className}`}>{children}</p>
    } else {
        return <p className={`text-p-s text-primary m-0 ${className}`}>{children}</p>
    }
}