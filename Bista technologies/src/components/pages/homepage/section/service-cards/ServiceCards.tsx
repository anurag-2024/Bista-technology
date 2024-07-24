
type CardsProps = {
    heading: string
    description: string
    imgSrc: string
}
export default function Cards({ heading, description, imgSrc }: CardsProps) {
    return (

        <div className="border-2 border-indigo-700 rounded-lg w-72 shadow-2xl" >
            <div className="p-5">
                <div className="flex justify-center " >
                    <img className="lg:w-36 w-28 border-solid border-2 border-black rounded-full" src={imgSrc} />
                </div>
                <div >
                    <h1 className="lg:text-2xl  text-xl font-semibold pt-3 text-center">{heading}</h1>
                    <p className="lg:text-lg text-center text-md pt-2">{description}</p>
                </div>
            </div>

        </div>
    )
}