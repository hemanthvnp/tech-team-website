// The crew, as a series of trading cards. These are SAMPLE people, not the
// real crew: replace the names, roles and lines with the team's own, drop
// photos into public/crew/ and point `photo` at them, then set `isSample`
// to false to drop the "sample" note from the section.
//
// Holds 3–4 heads and 3–5 deputies; the layout is built for any mix of
// those. Past crews can hold any number of people, newest year first.

export interface CrewMember {
  name: string;
  role: string;
  /** One line on the back of the card */
  focus?: string;
  /**
   * Under public/, e.g. "/crew/aarav.jpg". The current crew's cards take a
   * portrait crop (about 2:3). Past crews are projected as holograms, so
   * give them a cut-out: a PNG of head and shoulders on a transparent
   * background, e.g. "/crew/past/arjun.png".
   */
  photo?: string;
  links?: { label: string; href: string }[];
}

export interface PastCrew {
  /** The year this crew ran the team */
  year: string;
  members: CrewMember[];
}

export const isSample = false;

/** The current crew's year, printed on every card */
export const series = "2026";

export const heads: CrewMember[] = [
  {
    name: "Prem Dharshan",
    role: "Director",
    focus: "Manages the Team",
    photo: "/crew/heads/prem.jpeg",
  },
  {
    name: "Mithun Karthik",
    role: "Coordinator",
    focus: "Reviews every pull request before it ships.",
    photo: "/crew/heads/mithun.jpeg",
  },
  {
    name: "Ajay H",
    role: "Senior Member",
    focus: "Owns how everything the team ships looks and feels.",
    photo: "/crew/heads/ajay.jpeg",
  },
  {
    name: "Dinesh",
    role: "Secretary",
    focus: "Runs the hackathons, workshops and demo days.",
    photo: "/crew/heads/dinesh.webp",
  },
];

export const deputies: CrewMember[] = [
  {
    name: "Hemanth",
    role: "Deputy",
    focus: "Front ends and the club site.",
    photo: "/crew/deputies/hemanth.jpeg",
  },
  {
    name: "Jithendra",
    role: "Deputy",
    focus: "Deploys, servers and the bill.",
    photo: "/crew/deputies/jithu.jpeg",
  },
  {
    name: "Nithiish SD",
    role: "Member",
    focus: "Models, datasets and demos.",
  },
];

/** The page anchor on a current crew member's card, e.g. "crew-ajay-h" */
export const crewId = (name: string) =>
  "crew-" +
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** The card to link a credit to, when the name is on this year's crew */
export const crewHref = (name: string) =>
  [...heads, ...deputies].some((m) => m.name === name)
    ? `#${crewId(name)}`
    : undefined;

export const legacy: PastCrew[] = [
  {
    year: "2025",
    members: [
      { name: "Arjun Pillai", role: "Club Head" },
      { name: "Divya Suresh", role: "Technical Head" },
      { name: "Karthik Rao", role: "Events Head" },
    ],
  },
  {
    year: "2024",
    members: [
      { name: "Rhuban", role: "Coordinator", photo: "/crew/legacy/rhuban.png" },
      { name: "Harish Gopal", role: "Technical Head" },
      { name: "Anjali Iyer", role: "Design Head" },
    ],
  },
  {
    year: "2023",
    members: [
      { name: "Siddharth Nair", role: "Founder" },
      { name: "Revathi K", role: "Founder" },
      { name: "Aditya Sharma", role: "Founder" },
    ],
  },
];
