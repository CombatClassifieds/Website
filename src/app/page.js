import Header from "./_header/Header";
import Content from "./_content/Content";
import Footer from "./_footer/Footer";

// "/"
export default function Home() {
  return (
    <main>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: "url('./images/thermalBG.jpeg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <Header />
        <Content />
        <Footer />
      </div>
    </main>
  );
}
