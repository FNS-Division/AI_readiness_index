import type { DimensionMeta } from "@/types";

export const dimensionMeta: DimensionMeta[] = [
  {
    key: "Government",
    label: "Policy and governance",
    description:
      "Measures public governance, regulation, institutional readiness and the policy environment for AI development.",
    indicators: [
      "Online Service Index",
      "Regulatory framework for infrastructure sharing",
    ],
    weight: 1 / 3,
    color: "#b9108f",
  },
  {
    key: "Infrastructure",
    label: "Infrastructure",
    description:
      "Measures connectivity, digital infrastructure, affordability and market conditions needed to support AI deployment.",
    indicators: [
      "Active mobile-broadband subscriptions",
      "Mobile-broadband internet traffic",
      "Population coverage by mobile-network technology",
      "Fixed-broadband Internet basket price",
      "Mobile broadband data and voice basket price",
    ],
    weight: 1 / 3,
    color: "#06b812",
  },
  {
    key: "Capacity Building",
    label: "Capacity building",
    description:
      "Measures digital inclusion, internet adoption and the human capital needed to build, adopt and manage AI systems.",
    indicators: [
      "Households with Internet access at home",
      "Individuals using the Internet",
      "AI researchers",
      "Percentage of graduates from STEM programmes",
    ],
    weight: 1 / 3,
    color: "#f59e0b",
  },
];

export const dimensionMetaMap = new Map(
  dimensionMeta.map((dimension) => [dimension.key, dimension])
);
