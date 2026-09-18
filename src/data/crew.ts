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

export const isSample = true;

/** The current crew's year, printed on every card */
export const series = '2026';

export const heads: CrewMember[] = [
  {
    name: 'Prem Dharshan',
    role: 'Director',
    focus: 'Manages the Team',
    photo: '/crew/prem.jpeg'
  },
  {
    name: 'Mithun Karthik',
    role: 'Coordinator',
    focus: 'Reviews every pull request before it ships.',
    photo: '/crew/mithun.jpeg'
  },
  {
    name: 'Ajay H',
    role: 'UI/UX Designer',
    focus: 'Owns how everything the team ships looks and feels.',
    photo: '/crew/ajay.jpeg'
  },
  {
    name: 'Dinesh',
    role: 'Secretary',
    focus: 'Runs the hackathons, workshops and demo days.',
    photo: '/crew/dinesh.webp'
  },
];

export const deputies: CrewMember[] = [
  { name: 'Deployment', role: 'Deputy', focus: 'Front ends and the club site.' },
  { name: 'Jithendra', role: 'Deputy', focus: 'Deploys, servers and the bill.' },
  { name: 'Nithiish SD', role: 'Senior Member', focus: 'Models, datasets and demos.' }
];

export const legacy: PastCrew[] = [
  {
    year: '2025',
    members: [
      { name: 'Arjun Pillai', role: 'Club Head' },
      { name: 'Divya Suresh', role: 'Technical Head' },
      { name: 'Karthik Rao', role: 'Events Head' },
      { name: 'Lakshmi N', role: 'Deputy, Web' },
      { name: 'Sanjay Varma', role: 'Deputy, Design' },
    ],
  },
  {
    year: '2024',
    members: [
      { name: 'Priya Chandran', role: 'Club Head' },
      { name: 'Harish Gopal', role: 'Technical Head' },
      { name: 'Anjali Iyer', role: 'Design Head' },
      { name: 'Manoj Kumar', role: 'Deputy, Events' },
    ],
  },
  {
    year: '2023',
    members: [
      { name: 'Siddharth Nair', role: 'Founder' },
      { name: 'Revathi K', role: 'Founder' },
      { name: 'Aditya Sharma', role: 'Founder' },
    ],
  },
];
