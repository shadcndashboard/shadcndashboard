const Divider = ({ noContainer }: { noContainer?: boolean }) => {
    return (
        <section className={`${noContainer ? "" : "border-y"} border-border overflow-hidden bg-background`}>
            <div className={noContainer ? "" : "container"}>
                <div className={`${noContainer ? "" : "border-x"} border-border h-4 overflow-hidden relative`}>
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: "radial-gradient(circle at center, currentColor 1px, transparent 0)",
                            backgroundSize: "12px 12px",
                            backgroundPosition: "6px 6px",
                            color: "var(--foreground)",
                            opacity: 0.25,
                            maskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)",
                            WebkitMaskImage: "linear-gradient(to right, transparent, black 2%, black 98%, transparent)",
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Divider;
