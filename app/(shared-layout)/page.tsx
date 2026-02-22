import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          @import url('https://fonts.googleapis.com/css2?family=Story+Script&display=swap');
          
          .story-script-regular {
            font-family: "Story Script", sans-serif;
            font-weight: 400;
            font-style: normal;
          }
        `
      }} />

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          background: 'radial-gradient(#4f46e4 20%, transparent 21%, transparent 79%, #4f46e4 80%)',
          backgroundSize: '3em 3em',
          backgroundColor: '#0b0606',
          opacity: 0.4
        }}
      />

      <div className="min-h-screen flex flex-col items-center justify-center px-5 py-10 text-center relative z-10">
        <h1 className="story-script-regular text-foreground text-[clamp(2rem,5vw,3.5rem)] leading-tight tracking-tight mb-5 drop-shadow-md text-center">
          .blogIt. is a place to share thoughts and ideas.
        </h1>
        <h3 className="text-foreground/80 font-semibold text-[clamp(0.9rem,2vw,1.15rem)] tracking-[0.18em] uppercase">
          SIGN UP to start blogging today!
        </h3>
      </div>
    </>
  );
}