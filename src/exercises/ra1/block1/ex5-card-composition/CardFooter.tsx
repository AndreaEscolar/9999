interface CardFooterProps {
    children?: React.ReactNode
}

export const CardFooter = ({ children }: CardFooterProps) => {

    return (
        <div className="card-footer">
            { children }
        </div>
    )
}