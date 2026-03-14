interface AvatarProps {
    src?: string,
    alt: string,
    size?: number
}

const Avatar = ({ src, alt, size=50 }: AvatarProps) => {
    
    const initials = alt
        .split(" ")
        .slice(0, 2)
        .map(word => word[0])
        .join("")
    
    return src ? (
        <img 
            src={ src } 
            alt={ alt }
            width={ size }
            height={ size} 
        />
    ) : (
        <div
            style= {{
                width: size,
                height: size,
                borderRadius: "50%",
                background: "#666",
                color: "#f2f2f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            { initials }
        </div>
    )
}

export default Avatar