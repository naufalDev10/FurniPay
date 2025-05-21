const stats = [
    {
        label: "Products Furniture and Interior",
        value: "250+"
    },
    {
        label: "Furniture Products Sold",
        value: "500+"
    },
    {
        label: "5 Star Review",
        value: "480+"
    },
]

const Stats = () => {
    return (
        <div className="flex justify-center items-center w-full bg-wood py-5 px-[7%]">
            <div className="flex justify-between items-center gap-3 w-full max-w-[1440px] md:gap-0">
                {
                    stats.map((stat, index) => (
                        <div key={index} className="">
                            <h1 className="text-light font-semibold text-2xl">
                                {stat.value}
                            </h1>
                            <p className="text-light text-sm md:text-base">
                                {stat.label}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Stats;