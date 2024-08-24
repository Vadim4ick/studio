"use client"

import { useEffect, useState } from "react"

type MediaQuery = {
  matches: boolean
  media: string
}

type Media = "max" | "min"

const ISSERVER = typeof window === "undefined"

const useMedia = ({
  media,
  number,
}: {
  media: Media
  number: number
}): MediaQuery => {
  const query = `(${media}-width: ${number}px)`

  const [mediaQuery, setMediaQuery] = useState<MediaQuery>({
    matches: !ISSERVER && window.matchMedia(query).matches,
    media: query,
  })

  useEffect(() => {
    const media = window.matchMedia(query)
    const updateMediaQuery = () => {
      setMediaQuery({
        matches: media.matches,
        media: query,
      })
    }
    media.addEventListener("change", updateMediaQuery)
    updateMediaQuery()

    return () => {
      media.removeEventListener("change", updateMediaQuery)
    }
  }, [query])

  return mediaQuery
}

export { useMedia }

// import { useEffect, useState } from "react";

// type MediaQuery = {
//   matches: boolean;
//   media: string;
// };

// const ISSERVER = typeof window === "undefined";

// export const useMedia = (query: string): MediaQuery => {
//   const [mediaQuery, setMediaQuery] = useState<MediaQuery>(() => ({
//     matches: !ISSERVER && window.matchMedia(query).matches,
//     media: query,
//   }));

//   useEffect(() => {
//     const media = window.matchMedia(query);

//     const updateMediaQuery = () => {
//       setMediaQuery({
//         matches: media.matches,
//         media: query,
//       });
//     };

//     media.addEventListener("change", updateMediaQuery);
//     updateMediaQuery();

//     return () => {
//       media.removeEventListener("change", updateMediaQuery);
//     };
//   }, [query]);

//   return mediaQuery;
// };
