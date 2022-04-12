import { FC } from "react"

interface IBodyProps {
    children: any
}

export const Body: FC<IBodyProps> = ({children}) => {
    return (
        <div className="flex flex-col dark:text-white text-midnight-blue font-p justify-items-center justify-center md:m-auto md:w-4/5 ">
            {children}
        </div>
    )
}