export default function HomePage() {
    return (<>
        <div className="h-200 flex items-center">
            <div className="">
                <div className="flex flex-col gap-16 w-1/2">
                    <h1 className="text-6xl font-bold">Find Real Estate & Get Your Dream Place</h1>
                    <p className="text-2xl font-light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                        explicabo suscipit cum eius, iure est nulla animi consequatur
                        facilis id pariatur fugit quos laudantium temporibus dolor ea
                        repellat provident impedit!
                    </p>
                    <div className="flex w-200">
                        <div className="w-1/3">
                            <h1 className="text-3xl font-bold">16+</h1>
                            <h2 className="text-xl font-light">Years of Experience</h2>
                        </div>
                        <div className="w-1/3">
                            <h1 className="text-3xl font-bold">200</h1>
                            <h2 className="text-xl font-light">Award Gained</h2>
                        </div>
                        <div className="w-1/3">
                            <h1 className="text-3xl font-bold">2000+</h1>
                            <h2 className="text-xl font-light">Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-full bg-[#fcf5f3]">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    </>)
}