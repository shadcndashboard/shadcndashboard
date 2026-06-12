import { Button } from "src/components/ui/button";
import { Link } from "react-router";
import sidebarbuynow from "@/assets/images/backgrounds/sidebarbuynow.svg";

const BuyNowCard = () => {
    return (
        <div className="rounded-sm bg-primary/5 py-6 mx-2 flex flex-col justify-center items-center gap-3  whitespace-nowrap hide-menu">
            {/* IMAGE */}
            <div>
                <img
                    src={sidebarbuynow}
                    alt="buy-now"
                    className="w-20 h-20"
                    width={80}
                    height={80}
                />
            </div>

            {/* TITLE + SUBTEXT */}
            <div className="text-center">
                <h5 className="text-xl font-semibold">Grab ShadcnAdmin</h5>
                <p className="text-sm text-muted-foreground">Customize your dashboard</p>
            </div>

            {/* BUTTON */}
            <Button variant="secondary">
                <Link to="#" className="text-primary">Download</Link>
            </Button>
        </div>
    );
};

export default BuyNowCard;
