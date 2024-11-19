import { Nunito } from "next/font/google";
import { Sour_Gummy } from "next/font/google";

const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const sourGummy = Sour_Gummy({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export { nunito, sourGummy };


