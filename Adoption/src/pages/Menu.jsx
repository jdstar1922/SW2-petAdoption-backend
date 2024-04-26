function Menu() {
    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="banner mb-10 shadow-lg">
                <img src="dog-cat.jpg" alt="Banner" className="w-full" />
            </div>
            <div className="flex">
                <div className="w-1/2 pr-3">
                    <h2 className="mb-2 text-xl font-bold text-black">¡Encuentra a tu compañero fiel en un clic! Adopta amor en nuestra app de adopción de perros.</h2>
                    <button className="bg-stone-500 text-white py-2 px-4 rounded-lg">ADOPT NOW!</button>
                </div>
                <div className="flex space-x-4 items-center">
                    <div className="pr-8 max-h-48 overflow-hidden shadow-lg">
                        <img src="dog1.jpg" alt="Image 1" className="h-48" />
                    </div>
                    <div className="pr-8 max-h-48 overflow-hidden shadow-lg">
                        <img src="bunny3.jpg" alt="Image 2" className="h-48" />
                    </div>
                    <div className="pr-18 max-h-48 overflow-hidden shadow-lg">
                        <img src="cat3.jpg" alt="Image 3" className="h-48" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;