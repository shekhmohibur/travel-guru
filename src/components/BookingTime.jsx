const BookingTime = () => {
    return (
        <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col">
                <label className="text-lg font-semibold text-black/50">From</label>
                <input type="date" className="bg-base-300 py-4 px-4 font-bold"/>
            </div>
            <div className="flex flex-col">
                <label className="text-lg font-semibold text-black/50">To</label>
                <input type="date" className="bg-base-300 py-4 px-4 font-bold"/>
            </div>
        </div>
    );
};

export default BookingTime;