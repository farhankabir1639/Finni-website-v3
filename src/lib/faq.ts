import { PLAY_STORE_URL } from "./links";

// Homepage FAQ — shared by the visible FAQ section and the FAQPage JSON-LD.
// Plain module (no "use client") so a Server Component can read it too.
export const HOME_FAQ: { q: string; a: string }[] = [
  {
    q: "What is Finni?",
    a: "Finni is a personal finance app that works like texting a friend. You log spending in plain language by voice or text, and Finni automatically categorizes it, shows you what's safe to spend, and sends gentle nudges before you overspend. It's free on Android (Google Play), with iOS coming soon.",
  },
  {
    q: "How does Finni work?",
    a: 'Just tell Finni what you spent in everyday language — for example, "I spent $12 on lunch." Finni logs and categorizes it instantly, keeps a complete history of your spending, and turns it into clear insights and personalized budget recommendations. No forms, no manual categories, no spreadsheets.',
  },
  {
    q: "Is Finni free?",
    a: "Yes. Finni is free to download on Google Play and free to start using — no credit card required.",
  },
  {
    q: "Is my financial data private and secure?",
    a: "Yes. Your financial data is encrypted and stored securely, and Finni never sells your personal information.",
  },
  {
    q: "What platforms is Finni available on?",
    a: "Finni is available now on Android via Google Play. An iOS version is coming soon.",
  },
  {
    q: "Can Finni help me budget and reach savings goals?",
    a: "Yes. Finni analyzes your spending to give personalized budget recommendations and lets you set savings goals it tracks automatically, so you can see your progress without any manual work.",
  },
  {
    q: "Where can I download Finni?",
    a: `Finni is available on the Google Play Store at ${PLAY_STORE_URL}. iOS is coming soon.`,
  },
];
