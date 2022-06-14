import { Header } from "../organisms/header";
import { Footer } from "../organisms/footer";

export const Layout = (props: any) => {
  const { children } = props;
  console.log("debug");

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
