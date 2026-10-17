// Library content — deep dives, funnels, and built-with-Pro data
// transcribed from the authenticated library (free tier), captured 2026-10-17.

export const libraryStats = [
  { label: "Deep dives", n: 6 },
  { label: "Funnels", n: 15 },
  { label: "Pages", n: 192 },
  { label: "Sections", n: 1350 },
  { label: "Built with Pro", n: 28 },
];

export const industries = [
  "All industries",
  "Trades",
  "Local service",
  "Professional services",
  "Software",
  "Online store",
  "Courses and info",
  "Coaching",
  "Agency",
];

export const deepDives = [
  {
    slug: "keystone-roofing",
    badge: "THIS WEEK",
    name: "Keystone Roofing's one-minute roof inspection, built with Pro (sample business)",
    kind: "Local service",
    blurb:
      "Where every roofer offers a free inspection, win on the one promise nobody makes: a reply in a minute.",
    steps: ["1 PAGE", "2 PAGE", "3 PAGE", "4 BOOKING"],
    free: true,
  },
  {
    slug: "dowjanes-webinar",
    name: "Dow Janes' free money class",
    kind: "Course or coaching",
    blurb: "The funnel sells showing up, then makes the replay's deadline the offer's deadline.",
  },
  {
    slug: "graza-trio",
    name: "Graza's trio",
    kind: "Product",
    blurb: "Three bottles as the everyday answer, priced to make one bottle look like the mistake.",
  },
  {
    slug: "guitar-challenge",
    name: "Tony Polecastro's 5-Day Guitar Challenge",
    kind: "Course or coaching",
    blurb:
      "A free challenge with a fixed start day that leads to a paid course, for adults who have tried the skill before and quit.",
  },
  {
    slug: "prose-quiz",
    name: "Prose's quiz",
    kind: "Software",
    blurb: "A quiz that prescribes, then sells the prescription as a subscription.",
  },
  {
    slug: "shetty-masterclass",
    name: "Shetty's masterclass",
    kind: "Course or coaching",
    blurb: "The webinar funnel with the certification promise, followed into the emails.",
  },
];

export const funnels = [
  { slug: "keystone-roofing", name: "Keystone Roofing", kind: "Local service", pattern: "Bookonline", steps: 9, seen: 8, free: true },
  { slug: "dowjanes-webinar", name: "Dow Janes", kind: "Course or coaching", pattern: "Two step webinar", steps: 6, seen: 4 },
  { slug: "graza-trio", name: "Graza", kind: "Product", pattern: "Sampler", steps: 5, seen: 5 },
  { slug: "guitar-challenge", name: "Tony Polecastro", kind: "Course or coaching", pattern: "Challenge", steps: 8, seen: 6 },
  { slug: "prose-quiz", name: "Prose", kind: "Software", pattern: "Quiz", steps: 6, seen: 6 },
  { slug: "shetty-masterclass", name: "Shetty", kind: "Course or coaching", pattern: "Webinar", steps: 7, seen: 5 },
];

export type FunnelStep = {
  num: number;
  label: string;
  thought?: string;
  seen: boolean;
  detail?: string;
};

export const funnelDetail: Record<
  string,
  {
    name: string;
    kind: string;
    pattern: string;
    stepsMeta: string;
    blurb: string;
    brief:
      | string
      | null;
    steps: FunnelStep[];
    arrows: string[];
    locked?: boolean;
    ads?: { headline: string; body: string; kind: string; running: string; cta: string }[];
  }
> = {
  "guitar-challenge": {
    name: "Tony Polecastro",
    kind: "Course or coaching",
    pattern: "Challenge",
    stepsMeta: "8 steps, 6 seen",
    blurb:
      "A free challenge with a fixed start day that leads to a paid course, for adults who have tried the skill before and quit",
    brief:
      "A free challenge with a fixed start day that leads to a paid course, for adults who have tried the skill before and quit",
    steps: [
      { num: 1, label: "Ad", thought: "Clicks the ad", seen: true },
      { num: 2, label: "Opt-in", thought: "A first name and an email, then \"Yes, Send Me the Challenge\"", seen: true },
      { num: 3, label: "Thank-you page", thought: "\"Click here to watch it now →\"", seen: true },
      { num: 4, label: "Video", seen: true },
      { num: 5, label: "Emails", thought: "Each morning's lesson link, from Day 1", seen: true },
      { num: 6, label: "Delivery", seen: false },
      { num: 7, label: "Sales page", thought: "The buy button", seen: true },
      { num: 8, label: "Checkout", seen: false },
    ],
    arrows: [
      "Thank-you page → Emails: The welcome email, 1 minute 39 seconds later",
      "Emails → Video: \"Watch the Deep Dive Here »\", in emails 1, 2, 3 and 6",
      "Emails → Sales page: The story emails' P.S., then the offer email",
    ],
    ads: [
      {
        headline: "Few Days Left to Join the 5-Day Challenge!",
        body: "There are only a few days left to join my FREE 5-day Guitar Challenge! With just one bite-sized video lesson each day,…",
        kind: "Video",
        running: "482 days running",
        cta: "“Learn more”",
      },
      {
        headline: "Join Free 5-Day Guitar Challenge",
        body: "There are only a few days left to join my FREE 5-day Guitar Challenge! With just one bite-sized video lesson each day,…",
        kind: "Several versions",
        running: "384 days running",
        cta: "“Learn more”",
      },
    ],
  },
  "keystone-roofing": {
    name: "Keystone Roofing",
    kind: "Local service",
    pattern: "Bookonline",
    stepsMeta: "9 steps, 8 seen",
    blurb:
      "A local roofer gets leads from Angi, the website and door hangers, but callbacks are slow and estimates get no follow-up.",
    brief: null,
    steps: [
      { num: 1, label: "The one prompt, written as the owner", thought: "The agent reads the local market", seen: true },
      { num: 2, label: "What the agent read first", thought: "Nine looks to choose from", seen: true },
      { num: 3, label: "The board: nine looks, one pick", thought: "Pick this look, then Build my pages", seen: true },
      { num: 4, label: "Booking", thought: "Start my roof check, for the ones not ready to book", seen: true },
      { num: 5, label: "Quiz", seen: true },
    ],
    arrows: [],
  },
  "dowjanes-webinar": {
    name: "Dow Janes",
    kind: "Course or coaching",
    pattern: "Two step webinar",
    stepsMeta: "6 steps, 4 seen",
    blurb:
      "A free class (webinar) for women learning to manage money, registered in two steps, leading to a paid membership",
    brief: null,
    steps: [
      { num: 1, label: "Ad", thought: "Clicks the ad", seen: true },
      { num: 2, label: "Step one: the email", thought: "The email, then \"Enroll Now\"", seen: true },
      { num: 3, label: "Step two: \"Almost there…\"", thought: "Name, phone and a time, then \"SIGN ME UP!\"", seen: true },
      { num: 4, label: "Webinar", seen: false },
      { num: 5, label: "Emails", thought: "\"[Watch the Replay Before It’s Gone]\"", seen: true },
      { num: 6, label: "Sales page", seen: false },
    ],
    arrows: ["Opt-in → Emails: The email is already on the list"],
    ads: [
      {
        headline: "Free Money Class For Women+ | Build Wealth With Purpose",
        body: "In our FREE masterclass, we’ll show you how to build a money plan that aligns with your goals and helps you grow your…",
        kind: "Video",
        running: "112 days running",
        cta: "“Learn more”",
      },
      {
        headline: "Build Wealth With Purpose | Free Money Class For Women+",
        body: "It’s time to make this year your year of action 🚀 It’s not just about earning more—it’s about learning more, doing…",
        kind: "Video",
        running: "65 days running",
        cta: "“Learn more”",
      },
    ],
  },
};

export const builtSamples = [
  { slug: "hartline", seg: "service", name: "Hartline", note: "A $79 furnace tune-up" },
  { slug: "forge-six", seg: "service", name: "Forge Six", note: "Welding repairs, quoted fast" },
  { slug: "summit-air", seg: "service", name: "Summit Air", note: "A $79 furnace tune-up" },
  { slug: "bluewater-pools", seg: "service", name: "Bluewater Pools", note: "A free pool audit before summer" },
  { slug: "gloss-and-co", seg: "service", name: "Gloss & Co", note: "A $45 first clean" },
  { slug: "lakeview-smile", seg: "service", name: "Lakeview Smile", note: "A free second opinion on any plan" },
  { slug: "keystone-roofing", seg: "service", name: "Keystone Roofing", note: "The free inspection, booked in a minute" },
  { slug: "pawsh-wash", seg: "service", name: "Pawsh Wash", note: "$20 off a first weekday groom" },
  { slug: "hollis-lawn", seg: "service", name: "Hollis Lawn Care", note: "$45 a cut, a photo after every one" },
  { slug: "camera-shy-academy", seg: "course", name: "Camera Shy Academy", note: "A free first lesson" },
  { slug: "full-schedule", seg: "course", name: "Full Schedule", note: "A free seat, then the workshop" },
  { slug: "rise-and-crumb", seg: "product", name: "Rise & Crumb", note: "A $24 baking box" },
  { slug: "sunday-shelf", seg: "product", name: "Sunday Shelf", note: "A $65 holiday gift box" },
  { slug: "thirtyfold", seg: "product", name: "Fortyfold", note: "A $48 sock three-pack" },
  { slug: "stillhour", seg: "product", name: "Stillhour", note: "A $38 candle, twice a year" },
  { slug: "steep-club", seg: "product", name: "Steep Club", note: "$19 a month, first tin free" },
  { slug: "quoteflow", seg: "software", name: "Quoteflow", note: "A free calculator, then 14 days free" },
  { slug: "chairside", seg: "software", name: "Chairside", note: "14 days free, then $39 a month" },
  { slug: "glow-house", seg: "software", name: "Glow House", note: "A free energy score" },
  { slug: "routebell", seg: "agency", name: "Routebell", note: "A free route audit" },
  { slug: "tidybill", seg: "agency", name: "Tidybill", note: "A free cleanup of one invoice" },
];

export const keystoneEmails = {
  title: "Keystone Roofing (sample business), sixteen follow-ups in three tracks",
  kind: "Local service · 16 emails",
  counts: Array.from({ length: 16 }, (_, i) => i + 1),
  tracks: [
    "Expectation", "The close", "How it works", "The close", "Expectation", "How it works",
    "Objections", "How it works", "Proof", "Objections", "The close", "The close",
    "Expectation", "How it works", "The close", "The close",
  ],
  first: {
    label: "1 · DAY 0, 0:00: “FAST REPLY: WE GOT YOUR REQUEST”",
    tags: ["Expectation", "The close"],
    believe: "“Reply fast to every new lead and link to the booking.”",
    move: "Reply fast to every new lead and link to the booking.",
  },
};
