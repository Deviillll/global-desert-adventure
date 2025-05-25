// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const ScrollVideo = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     gsap.to(containerRef.current, {
//       width: "100vw",
//       height: "100vh",
//       ease: "power2.out",
//       duration: 3,
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "0% 70%",
//         end: "60% 40%",
        
//         scrub: true,
//         markers: true, // Enable markers for debugging
//       },
//     });
//   }, [containerRef]);

//   return (
//     <div className="h-[140vh]  flex flex-col items-center justify-center">
//       {/* Spacer above to scroll */}
      

//       <div
//         ref={containerRef}
//         className="w-[500px] h-[500px] bg-black overflow-hidden transition-all "
//       >
//         <iframe
//   src="https://www.youtube.com/embed/RgGQy2bU_OQ?autoplay=1&mute=1&controls=0&loop=1&playlist=RgGQy2bU_OQ"
//   title="YouTube video player"
//   frameBorder="0"
//   allow="autoplay; encrypted-media"
//   allowFullScreen
  
//   className="w-full h-full"
// />

//       </div>
//     </div>
//   );
// };

// export default ScrollVideo;


"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollVideo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const iframeRef = useRef<HTMLDivElement>(null);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    // Dynamically add YouTube Iframe API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    // YouTube API calls this when it's ready
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player("yt-player", {
        events: {
          onReady: () => setIsPlayerReady(true),
        },
      });
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !isPlayerReady) return;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top center",
      end: "bottom top",
      scrub: true,
      
      onEnter: () => playerRef.current?.playVideo(),
      onLeaveBack: () => playerRef.current?.pauseVideo(),
      onLeave: () => playerRef.current?.pauseVideo(),
    });

    gsap.to(containerRef.current, {
      width: "105vw",
      height: "100vh",
      ease: "power3.inOut",
      duration: 3,
      scrollTrigger: {
        trigger: containerRef.current,
       start: "0% 70%",
       end: "60% 40%",
        scrub: true,
      },
    });
  }, [isPlayerReady]);

  return (
    <div className="h-[140vh] hidden items-center justify-center md:flex  flex-col">
  
      <div
        ref={containerRef}
        className="w-[500px] h-[500px]  overflow-hidden transition-all duration-500"
      >
        <div ref={iframeRef} className="w-full h-full">
          <iframe
            id="yt-player"
            src="https://www.youtube.com/embed/RgGQy2bU_OQ?enablejsapi=1&controls=0&mute=1&autoplay=1"
            title="YouTube video"
            frameBorder="0"
            allow="autoplay; encrypted-media; mute=1"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ScrollVideo;
