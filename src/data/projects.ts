// The team's flagship projects. These are SAMPLE projects, not the team's
// own: replace them with the real ones, drop a screenshot of each into
// public/projects/, then set `isSample` to false to drop the "sample" note
// from the section.
//
// Built for 3–5 flagships, in the order they should be shown; every skin
// opens on the first. Credits name crew members exactly as src/data/crew.ts
// spells them, and a name that matches links to that person's card.

/**
 * The domain a project belongs to. The Galaxy Map skin groups the chart
 * into one sector per domain, so keep this list short: four is plenty.
 */
export const sectors = ['Web', 'AI/ML', 'Mobile', 'Hardware'] as const;

export type Sector = (typeof sectors)[number];

export interface Credit {
  name: string;
  /** What they did on this project, e.g. "Backend" */
  part: string;
}

/** A labelled part of the screen, for the Cutaway skin */
export interface Callout {
  /** Where the part is on the screenshot, in % from the left and top */
  x: number;
  y: number;
  label: string;
  note: string;
  /** Who built this part; one of the project's credits */
  by?: string;
}

export interface Project {
  slug: string;
  name: string;
  /** The year it shipped */
  year: string;
  /** Its domain. Sets which sector of the Galaxy Map it sits in. */
  sector: Sector;
  /** One line: what it does */
  summary: string;
  /** One or two sentences: how it works, or how it came to be */
  story: string;
  /** Where it runs, live */
  url: string;
  /**
   * A still of the running app, under public/, e.g. "/projects/rollcall.png".
   * Landscape, ideally 16:10. The Briefing skin traces it and the Cutaway
   * skin labels it, so it should be a real screenshot, not a mockup.
   */
  screen: string;
  /** Describes the screenshot for anyone who can't see it */
  screenAlt: string;
  /**
   * Optional screen recording, e.g. "/projects/rollcall.mp4": 10–20 seconds,
   * muted, cut to loop. Plays where the skin shows the app moving, with
   * `screen` as its first frame.
   */
  recording?: string;
  credits: Credit[];
  /** Three to five, for the Cutaway skin */
  callouts: Callout[];
}

export const isSample = true;

export const projects: Project[] = [
  {
    slug: 'rollcall',
    name: 'Rollcall',
    year: '2024',
    sector: 'Web',
    summary: 'Attendance that takes itself: the room checks in from their phones and the register fills in live.',
    story:
      'Built for the inter-college finals and kept running after them. A code on the projector changes every few seconds, so nobody checks in from the canteen.',
    url: 'https://example.com/rollcall',
    screen: '/projects/rollcall.svg',
    screenAlt: 'Rollcall during a live session: a four-digit check-in code, 58 of 64 students checked in, a seat map of the room and the register filling in.',
    credits: [
      { name: 'Prem Dharshan', part: 'Direction' },
      { name: 'Jithendra', part: 'Backend' },
      { name: 'Hemanth', part: 'Front end' },
      { name: 'Ajay H', part: 'Design' },
    ],
    callouts: [
      { x: 26.1, y: 37.5, label: 'Rotating code', note: 'Shown on the projector and changed every few seconds, so a check-in means you are in the room.', by: 'Jithendra' },
      { x: 79.8, y: 56, label: 'Live register', note: 'Names land as students check in. Anyone after the bell is marked late on their own.', by: 'Hemanth' },
      { x: 32.5, y: 88, label: 'Seat map', note: 'Every seat in the room, so the lecturer sees at a glance where the gaps are.', by: 'Ajay H' },
      { x: 92.4, y: 14, label: 'One tap to file', note: 'Ends the session and sends the register to the department.', by: 'Prem Dharshan' },
    ],
  },
  {
    slug: 'backtrack',
    name: 'Backtrack',
    year: '2024',
    sector: 'AI/ML',
    summary: 'The campus lost and found: report what you lost, get matched with what was handed in, collect it from the desk.',
    story:
      'Shipped overnight at a 24-hour hackathon. The security desk photographs every item as it comes in, and each report is checked against them by place and time.',
    url: 'https://example.com/backtrack',
    screen: '/projects/backtrack.svg',
    screenAlt: 'Backtrack showing a possible match for a lost blue steel bottle, above a grid of items handed in this week with where and when each was found.',
    credits: [
      { name: 'Mithun Karthik', part: 'Lead' },
      { name: 'Nithiish SD', part: 'Matching' },
      { name: 'Hemanth', part: 'Front end' },
    ],
    callouts: [
      { x: 21, y: 16.2, label: 'Matching', note: 'A lost report is checked against everything handed in, by where and when.', by: 'Nithiish SD' },
      { x: 34.3, y: 39.7, label: 'Desk photos', note: 'Every item is photographed as it arrives, so owners know it on sight.', by: 'Hemanth' },
      { x: 91.4, y: 4, label: 'Report in a minute', note: 'Three questions: what it was, where you had it, roughly when.', by: 'Mithun Karthik' },
      { x: 8, y: 79, label: 'Search by place', note: 'Filter by where it turned up, not just by what it is.', by: 'Mithun Karthik' },
    ],
  },
  {
    slug: 'token',
    name: 'Token',
    year: '2025',
    sector: 'Mobile',
    summary: 'Canteen pre-orders: order from class, get a token number, walk down when it is called.',
    story:
      'The lunch queue used to eat half the break. Now the kitchen works through orders as they come in, and the board by the counter calls each token when it is ready.',
    url: 'https://example.com/token',
    screen: '/projects/token.svg',
    screenAlt: 'Token’s pickup board: token 047 now serving at counter 2, with the next eight orders and whether each is ready, preparing or queued.',
    credits: [
      { name: 'Dinesh', part: 'Lead' },
      { name: 'Ajay H', part: 'Design' },
      { name: 'Jithendra', part: 'Payments' },
    ],
    callouts: [
      { x: 25.3, y: 41, label: 'Big-number board', note: 'Readable from the back of the canteen, so nobody crowds the counter.', by: 'Ajay H' },
      { x: 90.9, y: 25.5, label: 'Live queue', note: 'Orders move from queued to ready as the kitchen marks them.', by: 'Dinesh' },
      { x: 62.5, y: 92.5, label: 'Sold-out notices', note: 'A dish comes off the menu the moment the kitchen runs out.', by: 'Jithendra' },
    ],
  },
  {
    slug: 'labslot',
    name: 'Labslot',
    year: '2026',
    sector: 'Hardware',
    summary: 'Book a machine in any lab: see which are free right now and take an hour-long slot.',
    story:
      'Final-year projects kept colliding over the same GPU machines. Labslot puts every lab on one floor plan and gives each machine a day of hour-long slots.',
    url: 'https://example.com/labslot',
    screen: '/projects/labslot.svg',
    screenAlt: 'Labslot’s floor plan of Lab 3 with each machine marked free, in use or booked, and a booking panel for PC-14 with the 14:00 slot chosen.',
    credits: [
      { name: 'Mithun Karthik', part: 'Backend' },
      { name: 'Nithiish SD', part: 'Scheduling' },
      { name: 'Prem Dharshan', part: 'Product' },
    ],
    callouts: [
      { x: 40.75, y: 45.4, label: 'Live floor plan', note: 'Every machine in the lab, coloured by whether it is free right now.', by: 'Mithun Karthik' },
      { x: 82.25, y: 62.7, label: 'Hour-long slots', note: 'Clashes are blocked before they happen, not sorted out at the door.', by: 'Nithiish SD' },
      { x: 82.25, y: 85, label: 'Auto-release', note: 'A booking frees itself if nobody signs in within ten minutes.', by: 'Prem Dharshan' },
    ],
  },
];

/** "example.com/rollcall", for showing where a project runs */
export const host = (url: string) => url.replace(/^https?:\/\//, '').replace(/\/$/, '');
