import { Footer } from "@/layout/Footer";
import { Header } from "@/layout/Header";

export const Shell = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
