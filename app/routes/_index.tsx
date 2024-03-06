import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Steps app splash screen" },
    { name: "description", content: "Splash Screen" },
  ];
};

export default function Index() {
  return (
    <div
      className="container [background:var(--blue-gradient)] h-full flex flex-col justify-center align-center"
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <img
        src="logo.svg"
        alt="Hansa app"
        className="h-24"
      />
      <nav className="w-full text-center text-white flex flex-col align-center justify-center">
        <Link className="text-2xl underline mt-6" to="/steps/1">Steps Screen</Link>
        <Link className="text-2xl underline mt-6" to="/progress-indicator">Progress Indicator</Link>
      </nav>
    </div>
  );
}
