import UserInfo from "../components/UserInfo";

export default function ProfilePage () {
    return (<>
        <div className="flex justify-between gap-12">
            <UserInfo className="w-2/3"/>
            <div className="w-1/3 bg-(--secondary)"></div>
        </div>
    </>)
}