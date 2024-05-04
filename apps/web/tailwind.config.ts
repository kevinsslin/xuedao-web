import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        hero: "#DAE4F0",
        hero2: "#E3E6E9",
        vision: "#E5E7E7",
        vision2: "#EDE8E0",
        mission: "#d76464",
        "gradient-blue-to-purple": "linear-gradient(to left, #ffde59, #ff914d)",
        university: "#ffde59",
        university2: "#ff914d",
        hackathon: "#EFE9DE",
        hackathon2: "#F8EBD6",
        event: "#FBECD4",
        event2: "#FFEBD0",
        partner: "#FFEAD0",
        partner2: "#FEE4D0",
        contributor: "#FEE3D0",
        contributor2: "#FEDED1",
        lastnews: "#FEDDD1",
        lastnews2: "#FEDAD1",
        ig_bgcolor: "#D2E4EB",
        ig_domain_box: "#96B5DD",
        xuedao_pink: "#fb9383",
        xuedao_blue: "#95b5dd",
        xuedao_yellow: "#ffce7e",
        joinus_btn: "#FA9382",
      },
    },
  },
  plugins: [],
};
export default config;
