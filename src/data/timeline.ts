// Timeline milestones, in order. These are SAMPLE entries, not real
// achievements: replace them with the team's own, then set `isSample` to
// false to drop the "sample" note from the section.

export interface Milestone {
  /** Shown as written, e.g. "Aug 2023" */
  when: string;
  /** Machine-readable date for <time>, e.g. "2023-08" */
  datetime: string;
  title: string;
  text: string;
}

export const isSample = true;

export const milestones: Milestone[] = [
  {
    when: 'Aug 2023',
    datetime: '2023-08',
    title: 'Tech Team founded',
    text: 'A handful of students, one borrowed lab and a whiteboard full of ideas.',
  },
  {
    when: 'Nov 2023',
    datetime: '2023-11',
    title: 'First workshop',
    text: 'An intro to Git for juniors. The room ran out of chairs.',
  },
  {
    when: 'Feb 2024',
    datetime: '2024-02',
    title: '24-hour hackathon',
    text: 'Shipped a campus lost-and-found app before sunrise.',
  },
  {
    when: 'Jul 2024',
    datetime: '2024-07',
    title: 'Open-source sprint',
    text: 'First pull requests merged into projects outside the college.',
  },
  {
    when: 'Dec 2024',
    datetime: '2024-12',
    title: 'Inter-college finals',
    text: 'Reached the final round with a real-time attendance tracker.',
  },
  {
    when: 'Apr 2025',
    datetime: '2025-04',
    title: 'Workshop series',
    text: 'Six weeks of web, cloud and AI sessions, all run by members.',
  },
  {
    when: 'Jan 2026',
    datetime: '2026-01',
    title: 'Campus app launch',
    text: 'The biggest build yet goes live for every department.',
  },
];
