import { CarouselSpacing } from "./components/CarouselSpacing"

export default function Storefront() {
    return (
        <div>
            <div className="flex justify-center items-center text-5xl font-bold p-4">Greetings Guest, Let's dress to impress.</div>
            <div className="flex justify-center items-center text-3xl font-bold p-4">Recommended for you →</div>
            <div className="flex justify-center items-center">
                <CarouselSpacing/ >
            </div>
            
        </div>
    )
}