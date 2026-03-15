interface CardBodyProps {
    children: React.ReactNode
}

export const CardBody = ({ children }: CardBodyProps) => {

    return (
        <div className="card-body">
            { children }
        </div>
    )
}