import { Rocket } from 'lucide-react';
import { Link } from 'react-router';

export function NavSecondary() {
    return (
        <div className="-mx-4 border-t border-b border-border px-5 py-5">
            <div className="flex flex-col gap-5">
                {/* Plan info */}
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-4">
                        {/* Header row */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Rocket className="size-5 shrink-0" />
                                <span className="font-medium text-base leading-6 text-foreground">Basic Plan</span>
                            </div>
                            <span className="font-medium text-base leading-6 text-foreground">70%</span>
                        </div>
                        {/* Progress bar */}
                        <div className="w-full h-1.5 rounded-full bg-foreground/10 overflow-hidden">
                            <div className="h-full w-[70%] bg-foreground rounded-full" />
                        </div>
                    </div>
                    {/* Usage text */}
                    <p className="text-sm font-normal leading-5 text-muted-foreground text-center">
                        68/100 monthly limit used
                    </p>
                </div>
                {/* Upgrade button */}
                <Link to={"https://shadcndashboard.dev/pricing"} target='_blank' className="w-full cursor-pointer h-9 flex items-center justify-center bg-foreground text-background hover:bg-foreground/90 rounded-lg text-sm font-medium">
                    Upgrade
                </Link>
            </div>
        </div>
    )
}
