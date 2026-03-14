interface UserInfoProps {
    name: string,
    age: number,
    email: string
}

const UserInfo = ({ name, age, email }: UserInfoProps) => {
    return (
        <p>Name: { name } - Age: { age } - Email: { email }</p>
    )
}

export default UserInfo