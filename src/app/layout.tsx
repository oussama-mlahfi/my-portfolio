import AppFooter from "@/component/shared/AppFooter";
import AppHeader from "@/component/shared/AppHeader";
import Container from "@/component/shared/Container";
import NavBar from "@/component/shared/NavBar";
import "../globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col">
        <div className=" sticky top-0 z-10 ">
          <AppHeader />
        </div>
        <div className="">{children}</div>
        {/* <AppFooter /> */}
      </body>
    </html>
  );
}
