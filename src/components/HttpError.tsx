import Title from "./Title";

export default function HttpError({code, children}: {code: string|number, children: string}) {
    return (
        <div className="w-full h-full min-h-screen flex flex-col justify-center items-center">
            <Title size={1}>{`${code}`}</Title>
            <Title color='primary'>{children}</Title>
        </div>
    )
}