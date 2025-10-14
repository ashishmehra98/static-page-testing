import React from "react";

type ContainerProps = {
	children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
	return <div className="w-full max-w-screen-2xl mx-auto min-h-screen box-border bg-white">{children}</div>;
};

export default Container;
