import AppFooter from "@/component/shared/AppFooter";
import AppHeader from "@/component/shared/AppHeader";
import Container from "@/component/shared/Container";
import "./globals.css";

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
      <body className="grid grid-cols-10">
        <div className=" col-span-2 ">
          <AppHeader />
        </div>
        <div className=" col-span-8">
          <Container>{children}</Container>
        </div>
        {/* <AppFooter /> */}
      </body>
    </html>
  );
}
