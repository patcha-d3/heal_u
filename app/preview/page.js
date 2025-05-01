import MobileNavbar from "@/ui/Bottomnav/Bottomnav";

export default function PreviewPage() {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <div style={{ padding: "20px" }}>
        <h1>Bottom Navigation Preview</h1>
        <p>Scroll down to see the bottom navigation bar</p>
        <div style={{ height: "200vh" }}></div>
      </div>
      <MobileNavbar />
    </div>
  );
} 