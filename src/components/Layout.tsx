import { FC } from "react";

interface LayoutProps {
    children?: React.ReactNode;
    isMode?: boolean | string;
}

const Layout: FC<LayoutProps> = ({ children, isMode }) => {
    return (
        <div
            className={`flex w-screen ${isMode ? `bg-black` : `bg-white`}`}
        >
            <div className=" min-h-screen">{children}</div>
        </div>
    );
};

export default Layout;