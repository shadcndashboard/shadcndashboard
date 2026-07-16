import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BuyNowCard = () => {
    return (
        <div className="rounded-sm bg-primary/5 py-6 mx-2 flex flex-col justify-center items-center gap-3  whitespace-nowrap hide-menu">
            {/* IMAGE */}
            <div>
                <Image
                    src="/images/backgrounds/sidebarbuynow.svg"
                    alt="buy-now"
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
                <Link href="#" className="text-primary">Download</Link>
            </Button>
        </div>
    );
};

export default BuyNowCard;
