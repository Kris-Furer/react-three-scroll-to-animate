import dynamic from "next/dynamic";
const Scene = dynamic(() => import ("./components/Scene"))

export default function Home() {
  return (
    <main className="">
      <h1 className="text-white text-6xl">SCROLL TO FLY</h1>
      <Scene/>

    </main>
  );
}
