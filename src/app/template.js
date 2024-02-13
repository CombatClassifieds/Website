import Header from "./_header/Header";
import Content from "./_content/Content";
import Footer from "./_footer/Footer";

// "/"
export default function Template({ children }) {
  return (
    <main>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: "url('/images/thermalBG.jpeg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Header />
        <Content>{children}</Content>
        <Footer />
      </div>
    </main>
  );
}
