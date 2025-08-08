import One from "./One";
import Two from "./Two";


const Content = () => {
    
    return (
        //   === Main Div === //
        <div className="flex flex-col gap-2 mx-auto mt-10  ">

             {/* === 1st Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Poroducts in Islamabad" />
                <Two />
            </div>

            {/* === 2nd Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Available in Rawalpindi this weekend" />
                <Two />
            </div>

            {/* === 3rd Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Stay in Karachi" />
                <Two />
            </div>

            {/* === 4th Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Available in Murree this weekend" />
                <Two />
            </div>

            {/* === 5th Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Homes in Nathia Gali" />
                <Two />
            </div>

            {/* === 6th Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Available next month in London" />
                <Two />
            </div>

            {/* === 7th Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Places to stay in Dubai" />
                <Two />
            </div>

            {/* === 8th Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Check out homes in Kuala Lumpur" />
                <Two />
            </div>

            {/* === 9th Div === */}
            <div className="flex flex-col gap-2">
                <One heading="Popular homes in Fatih" />
                <Two />
            </div>
        </div>
    )
}

export default Content;
