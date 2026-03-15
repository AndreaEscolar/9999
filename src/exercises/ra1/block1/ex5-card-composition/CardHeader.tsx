interface CardHeaderProps {
    title: string
    subtitle?: string
}

export const CardHeader = ({ title, subtitle }: CardHeaderProps) => {
    return (
        <div className="card-header">
            <h2>{ title }</h2>
            { subtitle && <p>{ subtitle }</p> }
        </div>
    )
}