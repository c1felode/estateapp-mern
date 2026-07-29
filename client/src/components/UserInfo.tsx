export default function UserInfo ({className}:{className?: string}) {
    return (<>
        <div className={`${className}`}>
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-light">User information</h2>
                <a href="/id"><button className="py-2 px-4 bg-(--primary)">Update Profile</button></a>
            </div>

            <div className="mt-6 space-y-3">
                <div className="flex gap-4 items-center">
                    <span>Avatar: </span> <div className="max-w-10 max-h-10"><img className="aspect-square object-cover rounded-full w-full h-full" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Avatar" /></div> 
                </div>

                <div className="flex gap-4 items-center">
                    <span>Username: </span> <div className="text-lg font-semibold">John Doe</div>
                </div>

                <div className="flex gap-4 items-center">
                    <span>E-mail: </span> <div className="font-semibold">john@gmail.com</div>
                </div>
            </div>
        </div>
    </>)
}