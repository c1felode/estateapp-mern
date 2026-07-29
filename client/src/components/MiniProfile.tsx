export default function MiniProfile () {
    return (
        <div className="flex gap-6 items-center">
            <div className="max-w-10 max-h-10"><img className="aspect-square object-cover rounded-full w-full h-full" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Avatar" /></div>
            <div className="text-base font-medium">John Doe</div>

            <a href="/profile">
                <button className="bg-(--primary) text-lg py-2 px-5 font-medium">Profile</button>
            </a>
        </div>
    )
}