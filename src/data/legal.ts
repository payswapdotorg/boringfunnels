// Legal pages — transcribed faithfully from boringfunnels.com (captured 2026-10-17).
// Updated October 7, 2026 per the site.

export type LegalSection = { h?: string; paras: string[]; list?: string[] };

export const legalPages: Record<
  "privacy" | "terms" | "refunds" | "removal",
  { title: string; updated: string; intro: string; sections: LegalSection[] }
> = {
  privacy: {
    title: "Privacy",
    updated: "Updated October 7, 2026",
    intro: "What we keep, who processes it for us, and how to have it deleted.",
    sections: [
      {
        h: "What we keep",
        paras: [
          "Your email address: to sign you in, to send your receipt, and to send the weekly study. The weekly study email has a one-click unsubscribe link. Any other addresses you add to your account are kept too, so a purchase made with one of them opens your account.",
          "Your purchase: through Stripe. We never see or store your card. Stripe keeps the payment details and tells us what was bought and when.",
          "Sign-in records: when you sign in, and the access your coding agent is given through the library’s sign-in, so we can keep your account safe.",
          "Kit downloads: when your agent downloads the kit, which version, the internet (IP) address it came from and the software that asked, for the same reason.",
          "Your free study: on a free account, which study you opened each week.",
          "Requests and ratings from your agent: if your agent tells us a page the library lacks, or rates a page it used, we keep the sentence it sent, with your account, to decide what the library adds next.",
          "Support messages you send us.",
          "How the site is used: pages visited, buttons pressed, errors the site runs into and recordings of how pages are scrolled and clicked, through PostHog, so we can see what helps, what confuses and what breaks. Recordings never keep what you type, and email addresses are hidden. Once you sign in, this (with your earlier visits on that browser) and whether a purchase went through, its plan and its price are filed under a scrambled (hashed) account number, never your name or email.",
          "How your agent uses the library: for each call, which library tool, when, how long it took, whether it worked, the name of the agent app, and the short labels it passed, such as the kind of business, what it sells, the funnel step or the study it opened. It’s filed under a scrambled (hashed) account number, not your name or email. We never record your files, your pages or your plain-words searches.",
        ],
      },
      {
        h: "What stays on your computer",
        paras: [
          "The kit runs in your project, on your computer, through your coding agent. What your agent reads and writes there (your site, your copy, your customer lists) never comes to us.",
        ],
      },
    ],
  },
  terms: {
    title: "Terms",
    updated: "Updated October 7, 2026",
    intro: "What you’re buying, what you may do with it, and what we don’t promise.",
    sections: [
      {
        h: "What you’re buying",
        paras: [
          "boringfunnels is a library of real marketing funnels, taken apart step by step, and a kit your coding agent uses to build funnels for your business or your clients.",
          "Pro comes as access through your account: the web library; the library inside your agent (the MCP); the kit your agent sets up in your project. It renews each month or each year, as you chose, until you cancel, which you can do anytime from Account → Purchases. You keep access to the end of the month or year you paid for.",
          "A free account opens one study a week in the web library and gets the weekly study email. These terms cover it too, apart from the parts about paying.",
        ],
      },
      {
        h: "The license",
        paras: [
          "One person, or one company of any size. Use our work, the studies, the analysis and the kit, for your own business and for client work, and charge whatever you charge. You own what you build with it, apart from anything in it that belongs to someone else.",
          "Don’t resell or share the kit or the library itself, and don’t put them in a course, a members area or a swipe file other people buy.",
          "If you cancel, the kit already in your projects and everything you built stay yours to use. The library, the weekly studies and the kit’s updates stop at the end of the month or year you paid for.",
          "After a refund, the license to the kit ends: delete it, and any library material you saved, from your projects. What you built stays yours.",
        ],
      },
      {
        h: "What the library is",
        paras: [
          "The library shows how real businesses market themselves: their ads, pages and emails, as we observed them on the dates shown, taken apart for study. It is commentary and education, and it is independent: the businesses and people in it aren’t affiliated with us and don’t endorse boringfunnels unless we say so. Their material stays theirs. We don’t claim their results.",
          "Use the moves, never their words, brands, logos, photos, testimonials or likeness, and never present them as backing you. The license above covers our work, not theirs: it gives you no rights in their pictures, copy or marks.",
        ],
      },
    ],
  },
  refunds: {
    title: "Refunds",
    updated: "Updated October 7, 2026",
    intro: "Charged by mistake? We refund it straight away.",
    sections: [
      {
        h: "Mistakes",
        paras: [
          "Charged twice, or charged by mistake? Write to help@boringfunnels.com from the email you bought with and we refund it straight away.",
          "Otherwise Pro isn’t refundable once bought: the kit and the library reach your projects the moment you buy. Have a look first: a free account opens one study a week in the web library.",
        ],
      },
      {
        h: "Cancelling",
        paras: [
          "Cancel anytime from Account → Purchases. Nothing more is charged, and you keep access to the end of the month or year you paid for. The kit already in your projects, and everything you built, stay yours.",
        ],
      },
      {
        h: "After a refund",
        paras: [
          "A refund ends access to the library, the weekly studies and the kit’s updates, and the license to the kit itself: delete it, and any library material you saved, from your projects. What you built stays yours (see the terms).",
          "Nothing here limits a right the law where you live gives you.",
        ],
      },
    ],
  },
  removal: {
    title: "Removal requests",
    updated: "Updated October 7, 2026",
    intro:
      "If you, your work or your brand appear in the library, and you want it corrected or taken down.",
    sections: [
      {
        h: "What the library holds",
        paras: [
          "Real businesses’ ads, pages and emails, as we observed them on the dates shown, taken apart for study and commentary. We capture them ourselves; emails come from signing up with inboxes we control. The businesses and people in it aren’t affiliated with boringfunnels and don’t endorse it, and their material stays theirs.",
        ],
      },
      {
        h: "What you can ask for",
        list: [
          "a correction, when something we say about your page or funnel is wrong;",
          "a picture, a quote or a person taken out: a name, a face, a testimonial, a personal detail;",
          "a whole teardown or study taken down.",
        ],
        paras: [
          "That covers copyright, trademarks, privacy and likeness. There’s no charge, and you don’t need an account.",
        ],
      },
      {
        h: "What to send",
        paras: [
          "Write to help@boringfunnels.com with: the library page, or the name of the study or teardown; who you are, and how you’re connected: the business, someone acting for it, or the person shown; what you’d like changed, and why; how to reach you.",
          "For a formal copyright notice, also name the work you own, say that you believe in good faith its use here isn’t authorized, that what you’ve sent is accurate, and that you own it or may act for the owner, and sign it (a typed name is fine).",
        ],
      },
      {
        h: "What happens next",
        paras: [
          "We reply within two working days. We correct or remove it when there’s good reason, and tell you what we did.",
          "A removal takes it out of the web library and out of what coding agents get from the library from then on. Copies a buyer’s agent saved into a project before then are beyond our reach; our terms tell buyers never to publish them.",
        ],
      },
    ],
  },
};
