// ============================================================
//  PROFILE INTELLIGENCE SYSTEM — DATA FILE
//  Edit this file to add, modify, or delete entries.
//  The tool.html file never needs to be touched.
// ============================================================
//
//  HOW TO ADD A COMPETITION / PROGRAM / JOURNAL ENTRY
//  Copy any existing block, paste it at the end of the array
//  (before the closing ]);  and fill in your values.
//
//  FIELD GUIDE — COMPETITIONS & PROGRAMS (DATA array)
//  ─────────────────────────────────────────────────
//  f        : Field category. Must be one of:
//               "Mathematics"
//               "Computer Science & AI"
//               "Natural Sciences"
//               "Social Sciences & Economics"
//               "Humanities & Writing"
//               "Engineering & Robotics"
//               "Business & Entrepreneurship"
//               "Visual Arts & Music"
//               "Environmental Science"
//               "Medicine & Neuroscience"
//               "Law, Policy & Government"
//               "New Age & Cross-Field"
//
//  n        : Full name of the opportunity (string)
//
//  t        : Type. One of:
//               "Competition"  "Program"  "Journal"
//               "Organization" "Platform"
//
//  g        : Grade (admissions impact). Number:
//               1 = SUMMA      — changes admission outcomes
//               2 = MAGNA      — strongly differentiates
//               3 = CUM LAUDE  — positive signal
//               4 = ADEQUATE   — minimal signal alone
//
//  na       : true if this is a "New Age" credential
//             (non-traditional, low saturation, high upside)
//             false otherwise
//
//  countries: Array. Use ["ALL"] if open globally.
//             Otherwise ["US"], ["IN"], ["SG"], ["UK"]
//             or combinations like ["IN","SG","UK"]
//
//  dl       : Deadline as readable string, e.g. "Nov–Jan"
//             Use "Rolling" if no fixed deadline.
//             Use "Ongoing" for platforms.
//
//  dlm      : Deadline month as number (1=Jan … 12=Dec)
//             Use 0 if rolling/ongoing (won't appear in calendar)
//
//  sat      : Pool saturation level. Number:
//               1 = FRESH      — rare, <5% of strong pools
//               2 = LOW        — uncommon, still differentiating
//               3 = MODERATE   — present, outcome matters
//               4 = HIGH       — very common, need top placement
//               5 = SATURATED  — doesn't differentiate alone
//
//  ivy      : Ivy League AO recognition. Number:
//               1 = Widely known by most Ivy AOs
//               2 = Known to informed / regional AOs
//               3 = Rarely known
//
//  oxb      : Oxbridge AO/tutor recognition. Same 1–3 scale.
//
//  d        : Short description (1–2 sentences, plain English)
//
//  url      : Official website URL (starts with https://)
//
//  note     : (Optional) AO insight — what admissions officers
//             actually think when they see this. Leave out the
//             key entirely if you have nothing to add.
//
// ============================================================

const DATA = [

  // ── MATHEMATICS ───────────────────────────────────────────

  {
    f: "Mathematics",
    n: "AMC 10/12 → AIME → USAMO/USAJMO",
    t: "Competition",
    g: 1, na: false, countries: ["US"],
    dl: "Nov (AMC) / Jan (AIME)", dlm: 11,
    sat: 3, ivy: 1, oxb: 3,
    d: "The canonical US math olympiad pathway. USAMO selection (~500/yr) is one of the world's most recognised pre-college math signals.",
    url: "https://maa.org/student-programs/amc/",
    note: "USAMO qualification triggers attention from every Ivy AO."
  },

  {
    f: "Mathematics",
    n: "RMO → INMO → IMOTC → IMO (India)",
    t: "Competition",
    g: 1, na: false, countries: ["IN"],
    dl: "Oct (RMO) / Jan (INMO)", dlm: 10,
    sat: 2, ivy: 1, oxb: 2,
    d: "India's official math olympiad pathway run by HBCSE/TIFR. Regional → INMO (~30 students) → Training Camp → IMO Team (6).",
    url: "https://olympiads.hbcse.tifr.res.in/which-olympiads/mathematics/",
    note: "INMO qualification is Summa-level. IMO team = globally extraordinary."
  },

  {
    f: "Mathematics",
    n: "SMO — Open Special Round (Singapore)",
    t: "Competition",
    g: 1, na: false, countries: ["SG"],
    dl: "May–Jun", dlm: 5,
    sat: 2, ivy: 1, oxb: 2,
    d: "Singapore Mathematical Olympiad Open Special Round selects Singapore's IMO team.",
    url: "https://www.nussms.org/smo",
    note: "SMO Open top placement is the clearest math signal for SG applicants."
  },

  {
    f: "Mathematics",
    n: "UKMT Senior → BMO1 → BMO2 → IMO",
    t: "Competition",
    g: 1, na: false, countries: ["UK"],
    dl: "Nov (SMC) / Dec (BMO1)", dlm: 11,
    sat: 2, ivy: 2, oxb: 1,
    d: "UK Mathematics Trust pathway: SMC → BMO1 → BMO2 → IMO shortlist. BMO2 top 100 is exceptional.",
    url: "https://www.ukmt.org.uk/competitions/senior",
    note: "BMO2 is the clear differentiating signal. Oxbridge maths departments know this intimately."
  },

  {
    f: "Mathematics",
    n: "MIT PRIMES / PRIMES-USA",
    t: "Program",
    g: 1, na: false, countries: ["ALL"],
    dl: "Dec application", dlm: 12,
    sat: 1, ivy: 1, oxb: 2,
    d: "MIT's year-long mentored research programme producing publishable original mathematics. PRIMES-USA open internationally.",
    url: "https://math.mit.edu/research/highschool/primes/index.php",
    note: "A PRIMES publication is one of the rarest credentials possible globally."
  },

  {
    f: "Mathematics",
    n: "Research Science Institute (RSI) at MIT",
    t: "Program",
    g: 1, na: false, countries: ["ALL"],
    dl: "Dec application", dlm: 12,
    sat: 1, ivy: 1, oxb: 2,
    d: "MIT-hosted 6-week summer research for 100 of the world's top HS juniors. ~2.5% acceptance. Open internationally.",
    url: "https://www.cee.org/programs/research-science-institute",
    note: "Among the two most prestigious pre-college programs globally. Universally recognised by every Ivy AO."
  },

  {
    f: "Mathematics",
    n: "Canada/USA Mathcamp",
    t: "Program",
    g: 1, na: false, countries: ["ALL"],
    dl: "Feb–Mar application", dlm: 2,
    sat: 1, ivy: 1, oxb: 2,
    d: "Intensive 5-week residential math program for ages 13–18. ~10% acceptance. Open globally.",
    url: "https://www.mathcamp.org",
    note: "One of the three most prestigious residential math programs globally."
  },

  {
    f: "Mathematics",
    n: "Ross Mathematics Program",
    t: "Program",
    g: 1, na: false, countries: ["ALL"],
    dl: "Mar–Apr application", dlm: 3,
    sat: 1, ivy: 1, oxb: 2,
    d: "8-week residential number theory program at Ohio State. Proof-based exploration from first principles. Founded 1957.",
    url: "https://rossprogram.org"
  },

  {
    f: "Mathematics",
    n: "European Girls' Mathematical Olympiad (EGMO)",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "National selection Oct–Feb", dlm: 10,
    sat: 1, ivy: 1, oxb: 1,
    d: "International olympiad for female-identifying students. National team selection in US, India, Singapore, and UK.",
    url: "https://www.egmo.org",
    note: "For female math students: EGMO team selection is as strong as USAMO qualification."
  },

  {
    f: "Mathematics",
    n: "HMMT — Harvard-MIT Math Tournament",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Nov + Feb", dlm: 11,
    sat: 3, ivy: 2, oxb: 2,
    d: "Prestige individual + team tournament run by Harvard/MIT students. Open to international teams. February tournament is harder.",
    url: "https://www.hmmt.org"
  },

  {
    f: "Mathematics",
    n: "PUMAC — Princeton University Math Competition",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Nov", dlm: 11,
    sat: 2, ivy: 2, oxb: 2,
    d: "One of the most prestigious university-run math tournaments. Top finish is recognized directly by Princeton AOs.",
    url: "https://pumac.princeton.edu"
  },

  {
    f: "Mathematics",
    n: "International Mathematical Modeling Challenge (IM²C)",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Mar–Apr", dlm: 3,
    sat: 1, ivy: 2, oxb: 2,
    d: "Teams apply math to an open-ended real-world problem. Outstanding designation globally recognised. Runs in US, India, Singapore, UK.",
    url: "https://www.immchallenge.org"
  },

  {
    f: "Mathematics",
    n: "Math Prize for Girls at MIT",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Sep", dlm: 9,
    sat: 2, ivy: 2, oxb: 2,
    d: "Top math competition for female-identifying students, run at MIT. Open internationally. Top 20 finish is exceptional.",
    url: "https://mathprize.atfoundation.org"
  },

  // ── COMPUTER SCIENCE & AI ─────────────────────────────────

  {
    f: "Computer Science & AI",
    n: "USACO — Platinum / Finalist",
    t: "Competition",
    g: 1, na: false, countries: ["US"],
    dl: "Dec / Jan / Feb", dlm: 12,
    sat: 3, ivy: 1, oxb: 2,
    d: "The US gold standard for algorithmic CS. Platinum division signals elite ability to every Ivy AO.",
    url: "https://usaco.org",
    note: "Platinum is a clear differentiator. Gold without Platinum context is Grade 3."
  },

  {
    f: "Computer Science & AI",
    n: "IOITC → IOI (India Informatics)",
    t: "Competition",
    g: 1, na: false, countries: ["IN"],
    dl: "Dec (ZCO) / Jan (INOI)", dlm: 12,
    sat: 1, ivy: 1, oxb: 2,
    d: "India's informatics olympiad: ZIO/ZCO → INOI → IOITC Training Camp → IOI Team. IOITC invitees are India's top ~25 programmers under 18.",
    url: "https://www.iarcs.org.in/inoi/",
    note: "IOITC selection is Summa-level."
  },

  {
    f: "Computer Science & AI",
    n: "NOI Singapore → IOI",
    t: "Competition",
    g: 1, na: false, countries: ["SG"],
    dl: "Oct–Feb", dlm: 10,
    sat: 1, ivy: 1, oxb: 2,
    d: "National Olympiad in Informatics run by NUS. Top performers represent Singapore at IOI.",
    url: "https://noisg.comp.nus.edu.sg"
  },

  {
    f: "Computer Science & AI",
    n: "British Informatics Olympiad (BIO)",
    t: "Competition",
    g: 1, na: false, countries: ["UK"],
    dl: "Jan", dlm: 1,
    sat: 1, ivy: 2, oxb: 1,
    d: "UK's national programming competition. Top 6 represent the UK at IOI. Final Round (top 20) is a strong signal.",
    url: "https://www.olympiad.org.uk"
  },

  {
    f: "Computer Science & AI",
    n: "MIT THINK Scholars Program",
    t: "Program",
    g: 1, na: false, countries: ["US"],
    dl: "Nov–Jan", dlm: 11,
    sat: 1, ivy: 1, oxb: 2,
    d: "MIT awards ~10 HS teams funding ($1K) to build STEM projects. Exceptionally selective. MIT-branded.",
    url: "https://think.mit.edu"
  },

  {
    f: "Computer Science & AI",
    n: "iGEM High School Track",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Oct (Giant Jamboree)", dlm: 6,
    sat: 1, ivy: 1, oxb: 2,
    d: "International Genetically Engineered Machine — HS teams design synthetic biology projects. Gold Medal at Giant Jamboree is a serious credential. Open globally.",
    url: "https://igem.org",
    note: "Best-in-Track award is extraordinary. The process (research + wiki + presentation) is as valuable as the outcome."
  },

  {
    f: "Computer Science & AI",
    n: "Codeforces — Expert (1600+) or Master",
    t: "Platform",
    g: 2, na: true, countries: ["ALL"],
    dl: "Ongoing", dlm: 0,
    sat: 1, ivy: 2, oxb: 2,
    d: "Codeforces rating is the most credible algorithmic contest benchmark globally. Expert (1600+), Master (2100+), Grandmaster (2400+). Independently verifiable.",
    url: "https://codeforces.com",
    note: "International Master or Grandmaster as a HS student is near-Summa. Rating is publicly verifiable."
  },

  {
    f: "Computer Science & AI",
    n: "GitHub — OSS Contributions (1K+ Stars)",
    t: "Platform",
    g: 2, na: true, countries: ["ALL"],
    dl: "Ongoing", dlm: 0,
    sat: 2, ivy: 2, oxb: 2,
    d: "Maintaining a public repo with 1,000+ stars or meaningful merged contributions to major OSS projects. Independently verifiable.",
    url: "https://github.com",
    note: "5K+ stars = genuinely extraordinary. Verifiable in 60 seconds by any AO."
  },

  {
    f: "Computer Science & AI",
    n: "Kaggle — Expert / Master / Grandmaster",
    t: "Platform",
    g: 2, na: true, countries: ["ALL"],
    dl: "Ongoing", dlm: 0,
    sat: 2, ivy: 2, oxb: 2,
    d: "Top-1% finishes or Expert/Master/Grandmaster rank in ML competitions. Global leaderboard is independently verifiable.",
    url: "https://www.kaggle.com/progression"
  },

  {
    f: "Computer Science & AI",
    n: "MIT Battlecode AI Competition",
    t: "Competition",
    g: 2, na: true, countries: ["ALL"],
    dl: "Jan", dlm: 1,
    sat: 1, ivy: 2, oxb: 2,
    d: "MIT's annual AI competition where teams build autonomous agents. Open globally. Top-16 finish is highly impressive.",
    url: "https://battlecode.org"
  },

  {
    f: "Computer Science & AI",
    n: "Congressional App Challenge",
    t: "Competition",
    g: 2, na: false, countries: ["US"],
    dl: "Nov", dlm: 11,
    sat: 3, ivy: 2, oxb: 3,
    d: "Each US congressional district selects a winning app displayed in the US Capitol.",
    url: "https://www.congressionalappchallenge.us"
  },

  {
    f: "Computer Science & AI",
    n: "FIRST Robotics — Dean's List Award",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "Mar–Apr", dlm: 3,
    sat: 1, ivy: 1, oxb: 2,
    d: "The highest individual honour in all of FIRST Robotics globally. Only 10 students worldwide per year.",
    url: "https://www.firstinspires.org/robotics/frc/dean-s-list",
    note: "Dean's List is dramatically stronger than Chairman's Award for individual recognition."
  },

  // ── NATURAL SCIENCES ──────────────────────────────────────

  {
    f: "Natural Sciences",
    n: "Regeneron Science Talent Search (STS)",
    t: "Competition",
    g: 1, na: false, countries: ["US"],
    dl: "Oct–Nov application", dlm: 10,
    sat: 3, ivy: 1, oxb: 2,
    d: "The Nobel Prize of high school science. Top 40 finalists receive $25K–$250K. Scholar (top 300) is itself an elite signal.",
    url: "https://www.societyforscience.org/regeneron-sts/",
    note: "Finalist status is near-automatic admission-conversation level."
  },

  {
    f: "Natural Sciences",
    n: "Regeneron ISEF — Grand Award",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "May", dlm: 5,
    sat: 3, ivy: 1, oxb: 2,
    d: "World's largest pre-college science fair. Grand Award ($50K+) is Summa-level. Any ISEF finalist demonstrates exceptional independent research capacity.",
    url: "https://www.societyforscience.org/isef/"
  },

  {
    f: "Natural Sciences",
    n: "IRIS National Science Fair → ISEF (India)",
    t: "Competition",
    g: 1, na: false, countries: ["IN"],
    dl: "Aug–Oct", dlm: 8,
    sat: 1, ivy: 1, oxb: 2,
    d: "India's ISEF-affiliated national fair run with DST support. IRIS national winner represents India at ISEF.",
    url: "https://www.irisnationals.in"
  },

  {
    f: "Natural Sciences",
    n: "Singapore Science & Engineering Fair (SSEF)",
    t: "Competition",
    g: 1, na: false, countries: ["SG"],
    dl: "Oct–Jan", dlm: 10,
    sat: 1, ivy: 1, oxb: 2,
    d: "Singapore's ISEF-affiliated national fair. Gold Award winners represent Singapore at ISEF.",
    url: "https://www.science.edu.sg/for-schools/competitions/singapore-science-and-engineering-fair"
  },

  {
    f: "Natural Sciences",
    n: "Indian National Olympiads — INPhO/INChO/INBO/INAO",
    t: "Competition",
    g: 1, na: false, countries: ["IN"],
    dl: "Nov / Jan", dlm: 11,
    sat: 2, ivy: 1, oxb: 2,
    d: "Run by HBCSE/TIFR. Each science has a pathway to OCSC training camp and international team.",
    url: "https://olympiads.hbcse.tifr.res.in",
    note: "OCSC camp selection is clearly Summa for Indian applicants."
  },

  {
    f: "Natural Sciences",
    n: "USABO / USAPhO / USNCO",
    t: "Competition",
    g: 1, na: false, countries: ["US"],
    dl: "Jan (USABO) / Jan (F=ma) / Mar (USNCO)", dlm: 1,
    sat: 3, ivy: 1, oxb: 2,
    d: "Three premier US science olympiads in Biology, Physics, and Chemistry. Camp or team selection = extraordinary.",
    url: "https://www.aapt.org/Programs/PhysicsOlympiads/"
  },

  {
    f: "Natural Sciences",
    n: "UK Science Olympiads — BPhO / RSC Chem / UK BIO",
    t: "Competition",
    g: 2, na: false, countries: ["UK"],
    dl: "Nov (BPhO) / Mar (RSC)", dlm: 11,
    sat: 2, ivy: 2, oxb: 1,
    d: "British Physics Olympiad, RSC Chemistry Olympiad (Gold), UK Biology Olympiad. Top tier feeds IPhO, IChO, IBO.",
    url: "https://www.bpho.org.uk"
  },

  {
    f: "Natural Sciences",
    n: "Singapore Science Olympiad Teams",
    t: "Competition",
    g: 1, na: false, countries: ["SG"],
    dl: "Jan–Apr", dlm: 1,
    sat: 1, ivy: 1, oxb: 2,
    d: "Singapore's national science olympiads managed through MOE. Team member = Summa-level (~4–6 students per discipline nationally).",
    url: "https://www.science.edu.sg/for-schools/competitions"
  },

  {
    f: "Natural Sciences",
    n: "Summer Science Program (SSP)",
    t: "Program",
    g: 1, na: false, countries: ["ALL"],
    dl: "Jan–Feb", dlm: 1,
    sat: 2, ivy: 1, oxb: 2,
    d: "5-week residential research at US universities. Astrophysics or biochemistry research. ~15% acceptance. Open internationally.",
    url: "https://summerscience.org"
  },

  {
    f: "Natural Sciences",
    n: "KVPY — Kishore Vaigyanik Protsahan Yojana",
    t: "Program",
    g: 1, na: false, countries: ["IN"],
    dl: "Sep application", dlm: 9,
    sat: 1, ivy: 1, oxb: 2,
    d: "India's most prestigious national science scholarship for basic sciences. Monthly stipend + summer research placement.",
    url: "https://kvpy.iisc.ac.in",
    note: "KVPY Fellow status is Summa-level for Indian science applicants. Universally recognised by US AOs familiar with India."
  },

  {
    f: "Natural Sciences",
    n: "International Olympiad on Astronomy & Astrophysics (IOAA)",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "National Oct / Jul (intl)", dlm: 10,
    sat: 1, ivy: 1, oxb: 1,
    d: "International astronomy & astrophysics olympiad. National team member is Summa-level.",
    url: "https://www.ioaastrophysics.org",
    note: "Far less saturated than IPhO/IChO. Strong signal for astrophysics-track applicants."
  },

  {
    f: "Natural Sciences",
    n: "International Earth Science Olympiad (IESO)",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "National varies / Aug", dlm: 8,
    sat: 1, ivy: 1, oxb: 2,
    d: "International competition in geology, oceanography, and meteorology. National team member is Summa-level.",
    url: "https://www.ieso-info.org"
  },

  {
    f: "Natural Sciences",
    n: "IASc Summer Research Fellowship (India)",
    t: "Program",
    g: 1, na: false, countries: ["IN"],
    dl: "Nov–Dec", dlm: 11,
    sat: 1, ivy: 1, oxb: 2,
    d: "Three Indian Academies jointly offer fellowships placing students in IISc, IIT, and IISER labs.",
    url: "https://www.ias.ac.in/SRFPInfo.html",
    note: "A co-authored paper from an IISc/IIT lab is among the strongest Indian research credentials possible."
  },

  {
    f: "Natural Sciences",
    n: "A*STAR Research Attachment Programme",
    t: "Program",
    g: 1, na: false, countries: ["SG"],
    dl: "Varies by lab", dlm: 0,
    sat: 1, ivy: 1, oxb: 2,
    d: "Agency for Science, Technology and Research places exceptional Singapore students in world-class research labs.",
    url: "https://www.a-star.edu.sg"
  },

  {
    f: "Natural Sciences",
    n: "Nuffield Research Placement (UK)",
    t: "Program",
    g: 2, na: false, countries: ["UK"],
    dl: "Nov–Jan", dlm: 11,
    sat: 3, ivy: 3, oxb: 2,
    d: "Places Year 12 students in university, industry, or research labs for 4–6 weeks.",
    url: "https://www.nuffieldresearchplacements.org",
    note: "Nuffield alone is Grade 3. Nuffield + JEI/ISEF publication = Grade 1–2."
  },

  {
    f: "Natural Sciences",
    n: "Davidson Fellows Scholarship",
    t: "Program",
    g: 1, na: false, countries: ["US"],
    dl: "Feb application", dlm: 2,
    sat: 1, ivy: 1, oxb: 2,
    d: "Recognises extraordinary original work by US students under 18 in STEM and humanities. $10K–$50K.",
    url: "https://www.davidsonfellows.org/programs/davidson-fellows/"
  },

  {
    f: "Natural Sciences",
    n: "Science Mentorship Programme (SMP) — A*STAR/NUS",
    t: "Program",
    g: 2, na: false, countries: ["SG"],
    dl: "Apr–Jun", dlm: 4,
    sat: 2, ivy: 2, oxb: 2,
    d: "Connects Singapore students with A*STAR and NUS researchers for year-long mentored research.",
    url: "https://www.science.edu.sg/for-schools/programmes/science-mentorship-programme"
  },

  {
    f: "Natural Sciences",
    n: "GENIUS Olympiad",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Jan–Mar", dlm: 1,
    sat: 1, ivy: 2, oxb: 2,
    d: "International HS project competition on environmental issues at SUNY Oswego. Science, Technology, Business, Arts, Humanities categories.",
    url: "https://www.geniusolympiad.org"
  },

  // ── SOCIAL SCIENCES & ECONOMICS ──────────────────────────

  {
    f: "Social Sciences & Economics",
    n: "John Locke Global Essay Prize",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "Jun 30 (submission)", dlm: 4,
    sat: 2, ivy: 1, oxb: 1,
    d: "World's most prestigious humanities essay competition. 63,000+ entries from 150+ countries. Judged by Oxford, Cambridge, Harvard, Princeton faculty. 0.6% win rate.",
    url: "https://www.johnlockeinstitute.com/essay-competition",
    note: "Category winner or shortlisted is a very strong signal. Over half of alumni enrolled at top Ivy/Oxbridge institutions."
  },

  {
    f: "Social Sciences & Economics",
    n: "US Economics Olympiad (USAEO) → IEO",
    t: "Competition",
    g: 1, na: false, countries: ["US"],
    dl: "Feb–Mar", dlm: 2,
    sat: 1, ivy: 1, oxb: 2,
    d: "Selects the US team for the International Economics Olympiad. National finalist placement is exceptional.",
    url: "https://usaeo.org"
  },

  {
    f: "Social Sciences & Economics",
    n: "International Economics Olympiad (IEO)",
    t: "Competition",
    g: 1, na: true, countries: ["IN","SG","UK"],
    dl: "Feb–Apr", dlm: 2,
    sat: 1, ivy: 1, oxb: 2,
    d: "National team selection combining economics, financial literacy, and creative thinking. India, Singapore, and UK each field teams.",
    url: "https://ieo.world",
    note: "IEO team member = Summa for economics applicants from any participating country."
  },

  {
    f: "Social Sciences & Economics",
    n: "Fed Challenge (US Federal Reserve)",
    t: "Competition",
    g: 2, na: false, countries: ["US"],
    dl: "Spring", dlm: 3,
    sat: 2, ivy: 2, oxb: 3,
    d: "Teams analyse the US economy and present monetary policy recommendations before real Federal Reserve economists.",
    url: "https://www.federalreserveeducation.org/programs/high-school-programs/fed-challenge"
  },

  {
    f: "Social Sciences & Economics",
    n: "Bank of England Schools Competition (UK)",
    t: "Competition",
    g: 2, na: false, countries: ["UK"],
    dl: "Feb–May", dlm: 2,
    sat: 2, ivy: 2, oxb: 1,
    d: "Teams present monetary policy analysis before Bank of England economists. National finalist = credible economics signal.",
    url: "https://www.bankofengland.co.uk/education",
    note: "Direct engagement with BoE economists carries institutional weight."
  },

  {
    f: "Social Sciences & Economics",
    n: "Wharton Global HS Investment Competition",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Spring", dlm: 3,
    sat: 2, ivy: 2, oxb: 2,
    d: "Teams manage simulated portfolios and present investment theses before Wharton faculty. Open globally.",
    url: "https://globalyouth.wharton.upenn.edu/investment-competition/"
  },

  {
    f: "Social Sciences & Economics",
    n: "Harvard Political Review Essay Competition",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Rolling", dlm: 0,
    sat: 2, ivy: 2, oxb: 2,
    d: "International essay competition. Winning essays published in Harvard Political Review. Open to HS students.",
    url: "https://harvardpolitics.com"
  },

  // ── HUMANITIES & WRITING ──────────────────────────────────

  {
    f: "Humanities & Writing",
    n: "The Concord Review",
    t: "Journal",
    g: 1, na: false, countries: ["ALL"],
    dl: "Rolling (4 issues/year)", dlm: 0,
    sat: 2, ivy: 1, oxb: 1,
    d: "The only academic journal publishing history research papers by HS students. ~5% acceptance. Published in 38 countries.",
    url: "https://www.tcr.org",
    note: "One of the most durable humanities credentials available. Every Ivy and Oxbridge AO recognises this."
  },

  {
    f: "Humanities & Writing",
    n: "John Locke Global Essay Prize",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "Jun 30", dlm: 4,
    sat: 2, ivy: 1, oxb: 1,
    d: "63,000+ entries. Philosophy, Politics, History, Law, Economics, Psychology, Theology, Public Policy categories.",
    url: "https://www.johnlockeinstitute.com/essay-competition"
  },

  {
    f: "Humanities & Writing",
    n: "Scholastic Art & Writing — Gold Portfolio",
    t: "Competition",
    g: 1, na: false, countries: ["US"],
    dl: "Dec–Jan", dlm: 12,
    sat: 3, ivy: 1, oxb: 3,
    d: "Gold Portfolio is the highest Scholastic honour, recognised at Carnegie Hall nationally.",
    url: "https://www.artandwriting.org",
    note: "Gold Key ≠ Gold Portfolio. The Portfolio distinction is what truly differentiates."
  },

  {
    f: "Humanities & Writing",
    n: "YoungArts Foundation — National Finalist",
    t: "Program",
    g: 1, na: false, countries: ["US"],
    dl: "Oct application", dlm: 10,
    sat: 2, ivy: 1, oxb: 2,
    d: "National recognition in 10 creative disciplines. Finalists attend YoungArts Week in Miami. Feeds into US Presidential Scholar in the Arts.",
    url: "https://youngarts.org"
  },

  {
    f: "Humanities & Writing",
    n: "International Linguistics Olympiad (IOL)",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "National varies / Jul", dlm: 3,
    sat: 1, ivy: 1, oxb: 1,
    d: "The international olympiad in linguistics. National team member is Summa-level. No prior linguistics knowledge required.",
    url: "https://ioling.org",
    note: "Extraordinarily rare in any pool. Strong for linguistics, cognitive science, CS, or humanities."
  },

  {
    f: "Humanities & Writing",
    n: "International Philosophy Olympiad (IPO)",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "National varies / May", dlm: 2,
    sat: 1, ivy: 1, oxb: 1,
    d: "International philosophy essay competition. Students write in a second language on an open philosophical question.",
    url: "https://philosophy-olympiad.org"
  },

  {
    f: "Humanities & Writing",
    n: "Polyphony Lit — Published Author",
    t: "Platform",
    g: 2, na: true, countries: ["ALL"],
    dl: "Rolling", dlm: 0,
    sat: 2, ivy: 2, oxb: 2,
    d: "Selective international literary magazine for HS students. Peer-reviewed by student editors from 300+ schools. Publication is independently verifiable.",
    url: "https://polyphonylit.org"
  },

  {
    f: "Humanities & Writing",
    n: "Bennington Young Writers Awards",
    t: "Competition",
    g: 2, na: false, countries: ["US"],
    dl: "Feb", dlm: 2,
    sat: 2, ivy: 2, oxb: 2,
    d: "Prestigious US writing competition for grades 9–12. Poetry, fiction, nonfiction. Winners receive $1K cash. Free to enter.",
    url: "https://www.bennington.edu/young-writers-awards"
  },

  {
    f: "Humanities & Writing",
    n: "Norman Mailer Award for Student Writing",
    t: "Competition",
    g: 2, na: false, countries: ["US"],
    dl: "Mar", dlm: 3,
    sat: 2, ivy: 2, oxb: 2,
    d: "Annual competition recognising nonfiction, fiction, poetry, journalism by HS students. Judged by NCTE.",
    url: "https://normanmailersociety.org/award-programs/norman-mailer-awards/student-writing-award/"
  },

  {
    f: "Humanities & Writing",
    n: "UKLO — Gold / International Round",
    t: "Competition",
    g: 2, na: false, countries: ["UK"],
    dl: "Feb", dlm: 2,
    sat: 2, ivy: 2, oxb: 1,
    d: "UK Linguistics Olympiad. Gold Award + international round selection is a strong signal.",
    url: "https://www.uklo.org"
  },

  {
    f: "Humanities & Writing",
    n: "Published Op-Ed in Major National Outlet",
    t: "Platform",
    g: 2, na: true, countries: ["ALL"],
    dl: "Rolling", dlm: 0,
    sat: 1, ivy: 2, oxb: 2,
    d: "A bylined piece in NYT, Guardian, The Hindu, Straits Times, The Atlantic etc. is publicly verifiable and signals real intellectual voice.",
    url: "https://www.nytimes.com/section/opinion",
    note: "Harder than most competitions. Outlet prestige + student age together create the signal."
  },

  {
    f: "Humanities & Writing",
    n: "International History Olympiad (IHO)",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "National varies", dlm: 0,
    sat: 1, ivy: 1, oxb: 1,
    d: "Global olympiad in history and social studies. National team selection is highly selective. Essays and source analysis tested.",
    url: "https://www.historyolympiad.com",
    note: "Extremely rare in any pool. Perfect complement to Concord Review for history applicants."
  },

  // ── ENGINEERING & ROBOTICS ────────────────────────────────

  {
    f: "Engineering & Robotics",
    n: "FIRST Robotics — Dean's List Award",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "Mar–Apr", dlm: 3,
    sat: 1, ivy: 1, oxb: 2,
    d: "The highest individual honour in all of FIRST Robotics globally. Only 10 students per year worldwide.",
    url: "https://www.firstinspires.org/robotics/frc/dean-s-list"
  },

  {
    f: "Engineering & Robotics",
    n: "MIT Beaver Works Summer Institute (BWSI)",
    t: "Program",
    g: 1, na: false, countries: ["ALL"],
    dl: "Feb–Mar", dlm: 2,
    sat: 1, ivy: 1, oxb: 2,
    d: "MIT Lincoln Laboratory 4-week intensive STEM program. Autonomous vehicles, quantum computing, AI. ~5–10% acceptance. Open internationally.",
    url: "https://beaverworks.ll.mit.edu/CMS/bw/bwsi"
  },

  {
    f: "Engineering & Robotics",
    n: "Lemelson-MIT InvenTeams Grant",
    t: "Program",
    g: 2, na: false, countries: ["US"],
    dl: "Oct application", dlm: 10,
    sat: 1, ivy: 2, oxb: 2,
    d: "MIT awards up to $10K to teams of US HS students to invent real-world solutions. MIT-branded.",
    url: "https://lemelson.mit.edu/programs/inventeams"
  },

  {
    f: "Engineering & Robotics",
    n: "Arkwright Engineering Scholarship (UK)",
    t: "Program",
    g: 2, na: false, countries: ["UK"],
    dl: "Oct–Nov", dlm: 10,
    sat: 1, ivy: 2, oxb: 1,
    d: "Highly selective national scholarship identifying the UK's future engineering leaders. Awarded by the Smallpeice Trust.",
    url: "https://www.arkwright.org.uk/scholarship"
  },

  {
    f: "Engineering & Robotics",
    n: "US Provisional Patent / PCT Application",
    t: "Platform",
    g: 2, na: true, countries: ["ALL"],
    dl: "Rolling", dlm: 0,
    sat: 1, ivy: 2, oxb: 2,
    d: "Filing a provisional US patent or PCT application as a HS student is publicly verifiable, rare, and signals genuine invention.",
    url: "https://www.uspto.gov/patents/apply",
    note: "Patent number is publicly searchable at USPTO."
  },

  {
    f: "Engineering & Robotics",
    n: "CanSat Competition (ESA / AAS)",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Feb–Jun", dlm: 2,
    sat: 1, ivy: 2, oxb: 2,
    d: "Teams design, build and launch a satellite in a can. ESA (Europe) and AAS (US) run parallel competitions. Strong aerospace signal.",
    url: "https://www.esa.int/Education/CanSat"
  },

  {
    f: "Engineering & Robotics",
    n: "Conrad Challenge",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Nov–Jan", dlm: 11,
    sat: 2, ivy: 2, oxb: 2,
    d: "NASA and DoD-sponsored innovation competition. STEM and social innovation tracks. Open globally.",
    url: "https://www.conradchallenge.org"
  },

  // ── BUSINESS & ENTREPRENEURSHIP ───────────────────────────

  {
    f: "Business & Entrepreneurship",
    n: "Ashoka Young Changemakers",
    t: "Organization",
    g: 1, na: false, countries: ["ALL"],
    dl: "Rolling", dlm: 0,
    sat: 1, ivy: 1, oxb: 2,
    d: "Ashoka selects exceptional young social entrepreneurs creating systemic change. Globally recognised.",
    url: "https://www.ashoka.org/en-us/program/young-changemakers"
  },

  {
    f: "Business & Entrepreneurship",
    n: "Junior Achievement Company — International Final",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "National varies / Jun", dlm: 5,
    sat: 1, ivy: 1, oxb: 2,
    d: "Students create and run genuine student companies. National winner competes at international final. JA active in US, UK, India, Singapore.",
    url: "https://jausa.ja.org/programs/ja-company-program",
    note: "Running a real company with verified revenue is the signal. International finalist is Grade 1."
  },

  {
    f: "Business & Entrepreneurship",
    n: "Diamond Challenge (Univ. of Delaware)",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Jan–Feb", dlm: 1,
    sat: 2, ivy: 2, oxb: 2,
    d: "Global entrepreneurship competition. Social enterprise and business innovation tracks. University faculty judges.",
    url: "https://www.diamondchallenge.org"
  },

  {
    f: "Business & Entrepreneurship",
    n: "DECA ICDC — Top Finalist",
    t: "Competition",
    g: 2, na: false, countries: ["US"],
    dl: "Apr", dlm: 4,
    sat: 3, ivy: 2, oxb: 3,
    d: "DECA International Career Development Conference. Top-20 finish in advanced Finance or Entrepreneurship events.",
    url: "https://www.deca.org/high-school-programs/",
    note: "ICDC top finish only — general DECA chapter participation is Grade 4."
  },

  {
    f: "Business & Entrepreneurship",
    n: "Young Enterprise — National Final (UK)",
    t: "Competition",
    g: 2, na: false, countries: ["UK"],
    dl: "May–Jun", dlm: 5,
    sat: 2, ivy: 2, oxb: 2,
    d: "UK's leading young business competition. Teams run real student companies and compete nationally.",
    url: "https://www.young-enterprise.org.uk"
  },

  {
    f: "Business & Entrepreneurship",
    n: "App / Product with Verifiable Metrics",
    t: "Platform",
    g: 2, na: true, countries: ["ALL"],
    dl: "Rolling", dlm: 0,
    sat: 2, ivy: 2, oxb: 2,
    d: "A student-built app or product with measurable traction (App Store ranking, Product Hunt launch, revenue).",
    url: "https://www.producthunt.com",
    note: "Revenue > user count. 10K users = strong. Revenue + growth = near-Summa."
  },

  // ── VISUAL ARTS & MUSIC ───────────────────────────────────

  {
    f: "Visual Arts & Music",
    n: "YoungArts Foundation — National Finalist",
    t: "Program",
    g: 1, na: false, countries: ["US"],
    dl: "Oct", dlm: 10,
    sat: 2, ivy: 1, oxb: 2,
    d: "National recognition across 10 creative disciplines. Top YoungArts + Presidential Scholar in the Arts = highest dual arts credential in the US.",
    url: "https://youngarts.org/apply/"
  },

  {
    f: "Visual Arts & Music",
    n: "Juilliard Pre-College Programme Admission",
    t: "Program",
    g: 1, na: false, countries: ["ALL"],
    dl: "Dec–Jan", dlm: 12,
    sat: 1, ivy: 1, oxb: 2,
    d: "Acceptance into Juilliard Pre-College is itself a Summa-level music credential. Acceptance rates are extremely low.",
    url: "https://www.juilliard.edu/pre-college"
  },

  {
    f: "Visual Arts & Music",
    n: "State All-State Orchestra / Band / Choir (US)",
    t: "Competition",
    g: 2, na: false, countries: ["US"],
    dl: "Oct–Nov", dlm: 10,
    sat: 3, ivy: 2, oxb: 3,
    d: "All-State ensemble selection in competitive states (NY, TX, CA, IL). First-chair at All-State in a competitive state is near-Summa.",
    url: "https://www.nyssma.org/events/all-state/"
  },

  {
    f: "Visual Arts & Music",
    n: "ABRSM / Trinity — Grade 8 Distinction + Diploma",
    t: "Competition",
    g: 2, na: false, countries: ["UK","IN","SG"],
    dl: "Year-round", dlm: 0,
    sat: 3, ivy: 2, oxb: 2,
    d: "ABRSM or Trinity Grade 8 Distinction followed by DipABRSM or ARSM diploma is a recognised classical music credential.",
    url: "https://www.abrsm.org/en-gb/exams-and-awards/diplomas/",
    note: "Grade 8 Distinction alone is Grade 3. Diploma-level performance is the meaningful signal."
  },

  // ── ENVIRONMENTAL SCIENCE ─────────────────────────────────

  {
    f: "Environmental Science",
    n: "Stockholm Junior Water Prize",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "National varies / Aug", dlm: 8,
    sat: 1, ivy: 1, oxb: 2,
    d: "Global competition for water-related science research. National winners represent their country at World Water Week in Stockholm.",
    url: "https://www.siwi.org/prizes/stockholm-junior-water-prize/"
  },

  {
    f: "Environmental Science",
    n: "GENIUS Olympiad",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Jan–Mar", dlm: 1,
    sat: 1, ivy: 2, oxb: 2,
    d: "International HS project competition on environmental issues at SUNY Oswego. Open globally.",
    url: "https://www.geniusolympiad.org"
  },

  {
    f: "Environmental Science",
    n: "Jane Goodall Roots & Shoots — Global Youth Award",
    t: "Organization",
    g: 2, na: false, countries: ["ALL"],
    dl: "Rolling", dlm: 0,
    sat: 2, ivy: 2, oxb: 2,
    d: "Global youth leadership network. Top projects featured globally. Active in US, India, Singapore, UK.",
    url: "https://www.rootsandshoots.org"
  },

  {
    f: "Environmental Science",
    n: "Royal Society Partnership Grant Research (UK)",
    t: "Program",
    g: 2, na: false, countries: ["UK"],
    dl: "Rolling", dlm: 0,
    sat: 1, ivy: 2, oxb: 1,
    d: "The Royal Society funds school-university research partnerships. Student involvement with publishable outputs is a rare UK credential.",
    url: "https://royalsociety.org/grants-schemes-awards/grants/partnership-grants/"
  },

  // ── MEDICINE & NEUROSCIENCE ───────────────────────────────

  {
    f: "Medicine & Neuroscience",
    n: "Simons Summer Research Programme (Stony Brook)",
    t: "Program",
    g: 1, na: false, countries: ["ALL"],
    dl: "Jan–Feb", dlm: 1,
    sat: 2, ivy: 1, oxb: 2,
    d: "7-week immersive research at Stony Brook with faculty mentors. ~50 students globally. Publications common.",
    url: "https://www.stonybrook.edu/commcms/simons/"
  },

  {
    f: "Medicine & Neuroscience",
    n: "International Brain Bee Championship",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Regional varies / Apr", dlm: 4,
    sat: 1, ivy: 2, oxb: 2,
    d: "Global neuroscience competition. 50+ national champions compete internationally. Sponsored by Society for Neuroscience.",
    url: "https://thebrainbee.org"
  },

  {
    f: "Medicine & Neuroscience",
    n: "Society for Neuroscience — Neuroscience Research Prize",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Mar–Apr", dlm: 3,
    sat: 1, ivy: 2, oxb: 2,
    d: "Annual competition judged by SfN. Open globally. Finalist or winner is extraordinary.",
    url: "https://www.sfn.org/initiatives/core-initiatives/neuroscience-research-prize"
  },

  {
    f: "Medicine & Neuroscience",
    n: "Nanyang Research Programme (NRP) — NTU",
    t: "Program",
    g: 2, na: false, countries: ["SG"],
    dl: "Mar–Apr", dlm: 3,
    sat: 1, ivy: 2, oxb: 2,
    d: "NTU's flagship research programme placing JC/IP students in faculty labs. NRP Gold Award nationally recognised.",
    url: "https://www.ntu.edu.sg/nrp"
  },

  {
    f: "Medicine & Neuroscience",
    n: "JSHS — Junior Science and Humanities Symposium",
    t: "Competition",
    g: 2, na: false, countries: ["US"],
    dl: "Dec–Jan", dlm: 12,
    sat: 2, ivy: 2, oxb: 3,
    d: "DoD-sponsored national research symposium. National finalists eligible for $12K scholarship.",
    url: "https://www.jshs.org"
  },

  {
    f: "Medicine & Neuroscience",
    n: "DNA Day Essay Contest (ASHG)",
    t: "Competition",
    g: 2, na: false, countries: ["ALL"],
    dl: "Mar", dlm: 3,
    sat: 1, ivy: 2, oxb: 2,
    d: "American Society of Human Genetics annual essay contest on genetics themes. Winner internationally recognised.",
    url: "https://www.ashg.org/discover-genetics/k-12-education/dna-day/"
  },

  // ── LAW, POLICY & GOVERNMENT ──────────────────────────────

  {
    f: "Law, Policy & Government",
    n: "US Senate Youth Programme (USSENATEYPP)",
    t: "Program",
    g: 1, na: false, countries: ["US"],
    dl: "Oct–Nov", dlm: 10,
    sat: 2, ivy: 1, oxb: 2,
    d: "Only 104 students selected nationally (2 per state). A week in Washington meeting Senate leadership and Cabinet members.",
    url: "https://www.ussenateypp.org",
    note: "Selection alone is Summa-level. Universally recognised by Ivy AOs."
  },

  {
    f: "Law, Policy & Government",
    n: "National Speech & Debate — TOC Octofinalist+",
    t: "Competition",
    g: 1, na: false, countries: ["US"],
    dl: "Apr (TOC)", dlm: 4,
    sat: 3, ivy: 1, oxb: 2,
    d: "Tournament of Champions bid competition in Policy, LD, or PF debate. TOC Octofinalist or better is a top-tier signal.",
    url: "https://www.speechanddebate.org/tournaments/tournament-of-champions/",
    note: "TOC bids matter enormously. General debate participation does not differentiate at Ivy level."
  },

  {
    f: "Law, Policy & Government",
    n: "UK Youth Parliament — Member (MYP)",
    t: "Organization",
    g: 2, na: false, countries: ["UK"],
    dl: "Rolling", dlm: 0,
    sat: 2, ivy: 2, oxb: 1,
    d: "Elected MYPs speak in the House of Commons chamber. MYP with an active legislative record is a credible civic credential.",
    url: "https://www.ukyouthparliament.org.uk"
  },

  {
    f: "Law, Policy & Government",
    n: "Atlas Fellowship",
    t: "Program",
    g: 2, na: true, countries: ["ALL"],
    dl: "Rolling", dlm: 0,
    sat: 1, ivy: 2, oxb: 2,
    d: "Highly selective global fellowship for exceptional rationalist thinkers. $50K+ prize. Open globally.",
    url: "https://www.atlasfellowship.org",
    note: "Early-mover advantage is real — far fewer students have this than USSENATEYPP."
  },

  {
    f: "Law, Policy & Government",
    n: "ESU Mace — National Debate Competition (UK)",
    t: "Competition",
    g: 2, na: false, countries: ["UK"],
    dl: "Spring", dlm: 3,
    sat: 2, ivy: 2, oxb: 1,
    d: "English-Speaking Union's premier UK schools debating competition. National finalist is recognised.",
    url: "https://www.esu.org/programmes/schools-competitions/the-mace/"
  },

  {
    f: "Law, Policy & Government",
    n: "Boys State / Boys Nation",
    t: "Program",
    g: 2, na: false, countries: ["US"],
    dl: "Jun–Jul", dlm: 6,
    sat: 2, ivy: 2, oxb: 3,
    d: "Boys/Girls State selects 2 delegates per state for Boys/Girls Nation. Delegates meet the President.",
    url: "https://www.legion.org/boysnation/"
  },

  // ── NEW AGE & CROSS-FIELD ─────────────────────────────────

  {
    f: "New Age & Cross-Field",
    n: "Cold-Lab Research → Publication Co-authorship",
    t: "Program",
    g: 1, na: true, countries: ["ALL"],
    dl: "Rolling (cold-email)", dlm: 0,
    sat: 1, ivy: 1, oxb: 1,
    d: "Cold-emailing professors, securing a lab position, and earning co-authorship on a published paper is the highest-ceiling strategy globally.",
    url: "https://www.biorxiv.org",
    note: "Has produced Summa profiles at scale across all four countries."
  },

  {
    f: "New Age & Cross-Field",
    n: "Breakthrough Junior Challenge",
    t: "Competition",
    g: 1, na: true, countries: ["ALL"],
    dl: "Jun–Sep", dlm: 6,
    sat: 2, ivy: 1, oxb: 2,
    d: "Global competition to create a short science or math explainer video. Global winner receives $400K scholarship.",
    url: "https://breakthroughprize.org/YoungScientists"
  },

  {
    f: "New Age & Cross-Field",
    n: "International Young Physicists' Tournament (IYPT)",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "National varies / Jul", dlm: 10,
    sat: 1, ivy: 1, oxb: 1,
    d: "Physics World Cup — teams present and defend solutions to 17 open physics problems. Combines research, oral defense, teamwork.",
    url: "https://iypt.org"
  },

  {
    f: "New Age & Cross-Field",
    n: "International Geography Olympiad (iGeo)",
    t: "Competition",
    g: 1, na: false, countries: ["ALL"],
    dl: "National varies / Aug", dlm: 7,
    sat: 1, ivy: 1, oxb: 1,
    d: "International olympiad in geography combining fieldwork, data analysis, and physical geography. National team member is Summa-level.",
    url: "https://www.geoolympiad.org"
  },

  {
    f: "New Age & Cross-Field",
    n: "arXiv Preprint — Original STEM Research",
    t: "Platform",
    g: 2, na: true, countries: ["ALL"],
    dl: "Rolling", dlm: 0,
    sat: 1, ivy: 2, oxb: 2,
    d: "Submitting original research to arXiv is permanently date-stamped, freely accessible, and globally citable.",
    url: "https://arxiv.org",
    note: "Co-authorship with a PI significantly elevates impact."
  },

  {
    f: "New Age & Cross-Field",
    n: "Substack / Newsletter — 10K+ Subscribers",
    t: "Platform",
    g: 2, na: true, countries: ["ALL"],
    dl: "Rolling", dlm: 0,
    sat: 2, ivy: 2, oxb: 2,
    d: "A student-authored newsletter with substantial following is measurable proof of intellectual leadership.",
    url: "https://substack.com",
    note: "1K = adequate. 10K = strong. 50K+ = extraordinary."
  },

  {
    f: "New Age & Cross-Field",
    n: "Emergent Ventures Youth Grant",
    t: "Program",
    g: 2, na: true, countries: ["ALL"],
    dl: "Rolling", dlm: 0,
    sat: 1, ivy: 2, oxb: 2,
    d: "Tyler Cowen's fast grants for original ideas in tech, policy, or culture. No bureaucracy. Open globally.",
    url: "https://www.mercatus.org/emergent-ventures",
    note: "Grant receipt = rare verifiable external validation of intellectual originality."
  },

  {
    f: "New Age & Cross-Field",
    n: "TEDx — Licensed Event Organiser",
    t: "Platform",
    g: 2, na: true, countries: ["ALL"],
    dl: "Rolling", dlm: 0,
    sat: 2, ivy: 2, oxb: 2,
    d: "Becoming a licensed TEDx organiser and running your own event is substantially stronger than giving a talk.",
    url: "https://www.ted.com/tedx/organize"
  },

  {
    f: "New Age & Cross-Field",
    n: "Polygence / Lumiere → Peer-Reviewed Publication",
    t: "Program",
    g: 3, na: true, countries: ["ALL"],
    dl: "Rolling", dlm: 0,
    sat: 4, ivy: 3, oxb: 3,
    d: "Mentored research platforms. The platform itself is now Grade 4. Value is entirely in the peer-reviewed published output.",
    url: "https://www.polygence.org",
    note: "Platform alone = Grade 4. Platform + JEI/domain journal publication = Grade 2."
  },

]; // ← END OF DATA ARRAY. Add new entries ABOVE this line.


// ============================================================
//  JOURNALS DATA
//  Same approach — add entries above the closing ];
//
//  FIELD GUIDE — JOURNALS (JOURNALS array)
//  ────────────────────────────────────────
//  n        : Full journal name
//  abbr     : Common abbreviation / short name
//  tier     : 1=Elite HS  2=Strong HS  3=Scopus/WoS (needs PI)  4=Preprint
//  subjects : Subject areas as a readable string
//  fields   : Array of field categories (same list as DATA.f above)
//  cost     : Cost as a readable string e.g. "Free" or "$1,350 APC"
//  costNum  : Cost as a number (0 if free) — used for filtering
//  acceptance: Acceptance rate as string e.g. "~25%"
//  turnaround: Time to decision e.g. "3–5 months"
//  indexed  : Indexing databases e.g. "Scopus Q1, PubMed, WoS"
//  ivyRec   : 1=Widely known  2=Known to informed AOs  3=Rarely known
//  oxbRec   : Same 1–3 scale for Oxbridge
//  openTo   : Who can submit (string)
//  accepts  : What they accept (string)
//  blind    : Peer review type (string)
//  predatory: true if journal has predatory/questionable practices
//  url      : Official URL
//  note     : (Optional) AO insight
// ============================================================

const JOURNALS = [

  // ── TIER 1 — ELITE HS JOURNALS ───────────────────────────

  {
    n: "Journal of Emerging Investigators", abbr: "JEI", tier: 1,
    subjects: "Biology, Chemistry, Physics, Environmental Science",
    fields: ["Natural Sciences","Medicine & Neuroscience","Environmental Science"],
    cost: "Free", costNum: 0,
    acceptance: "~25%", turnaround: "7–8 months",
    indexed: "Google Scholar",
    ivyRec: 1, oxbRec: 2,
    openTo: "HS students globally",
    accepts: "Original hypothesis-driven research only — no lit reviews",
    blind: "Single-blind (grad student reviewers)", predatory: false,
    url: "https://www.emerginginvestigators.org",
    note: "Harvard graduate student reviewers. Gold standard for HS life sciences. Every Ivy AO recognises this. Long turnaround — start 8 months ahead."
  },

  {
    n: "The Concord Review", abbr: "TCR", tier: 1,
    subjects: "History (all periods, all regions)",
    fields: ["Humanities & Writing","Social Sciences & Economics"],
    cost: "~$40", costNum: 40,
    acceptance: "~5%", turnaround: "3–5 months (quarterly)",
    indexed: "Library catalogues internationally",
    ivyRec: 1, oxbRec: 1,
    openTo: "HS students globally (38 countries)",
    accepts: "History research essays 5,000–10,000 words, original thesis required",
    blind: "Editorial review", predatory: false,
    url: "https://www.tcr.org",
    note: "Founded 1987. The only journal dedicated to HS history papers. Every Ivy and Oxbridge AO recognises this. Strongest humanities publication signal available."
  },

  {
    n: "Columbia Junior Science Journal", abbr: "CJSJ", tier: 1,
    subjects: "Natural sciences, engineering, social sciences",
    fields: ["Natural Sciences","Engineering & Robotics","Medicine & Neuroscience"],
    cost: "Free", costNum: 0,
    acceptance: "~20%", turnaround: "3–5 months",
    indexed: "Google Scholar",
    ivyRec: 1, oxbRec: 2,
    openTo: "HS students globally",
    accepts: "Original research, review articles",
    blind: "Double-blind (Columbia undergrad editorial board)", predatory: false,
    url: "https://www.columbiajsj.com",
    note: "Columbia branding + selectivity makes this very credible. Strong for STEM research with social science angles."
  },

  {
    n: "Voices in Bioethics", abbr: "VIB", tier: 1,
    subjects: "Bioethics, medical ethics, policy, philosophy of medicine",
    fields: ["Medicine & Neuroscience","Law, Policy & Government","Humanities & Writing"],
    cost: "Free", costNum: 0,
    acceptance: "~20%", turnaround: "2–4 months",
    indexed: "Columbia Libraries, Google Scholar",
    ivyRec: 1, oxbRec: 2,
    openTo: "HS and undergraduate students",
    accepts: "Essays, commentary, research in bioethics",
    blind: "Editorial (Columbia Law School faculty oversight)", predatory: false,
    url: "https://voicesinbioethics.net",
    note: "Columbia Law School-affiliated. Powerful for pre-med + philosophy + law applicants."
  },

  {
    n: "Young Scientists Journal", abbr: "YSJ", tier: 1,
    subjects: "All STEM disciplines",
    fields: ["Natural Sciences","Medicine & Neuroscience","Computer Science & AI"],
    cost: "Free", costNum: 0,
    acceptance: "~30%", turnaround: "2–4 months",
    indexed: "Google Scholar, ISSN",
    ivyRec: 2, oxbRec: 2,
    openTo: "Students aged 12–20 globally",
    accepts: "Original research, reviews, blog articles",
    blind: "Peer review by students + academics", predatory: false,
    url: "https://www.ysjournal.com",
    note: "Founded 2006 at The King's School Canterbury. Strong credibility in UK."
  },

  {
    n: "Harvard International Review", abbr: "HIR", tier: 1,
    subjects: "International affairs, politics, economics, policy",
    fields: ["Social Sciences & Economics","Law, Policy & Government","Humanities & Writing"],
    cost: "Free", costNum: 0,
    acceptance: "~15%", turnaround: "3–5 months",
    indexed: "Not Scopus (prestige-based)",
    ivyRec: 1, oxbRec: 2,
    openTo: "HS and undergraduate students",
    accepts: "Policy essays, analytical pieces, opinion",
    blind: "Student editorial board (Harvard undergrads)", predatory: false,
    url: "https://hir.harvard.edu",
    note: "Published in a Harvard journal is immediately recognisable by Ivy AOs. Strong for policy and IR applicants."
  },

  {
    n: "Polyphony Lit", abbr: "PLit", tier: 1,
    subjects: "Poetry, fiction, creative nonfiction",
    fields: ["Humanities & Writing","Visual Arts & Music"],
    cost: "Free", costNum: 0,
    acceptance: "~20%", turnaround: "2–4 months",
    indexed: "Not indexed (literary credibility)",
    ivyRec: 2, oxbRec: 2,
    openTo: "HS students globally",
    accepts: "Poetry, fiction, creative nonfiction",
    blind: "Peer-reviewed by student editors (300+ schools)", predatory: false,
    url: "https://polyphonylit.org",
    note: "Peer-review by editors from 300+ schools globally creates the signal, not indexing. Publication here + Concord Review = strong dual writing portfolio."
  },

  // ── TIER 2 — STRONG HS JOURNALS ──────────────────────────

  {
    n: "Journal of High School Science", abbr: "JHSS", tier: 2,
    subjects: "STEM, STEAM (all subjects)",
    fields: ["Natural Sciences","Engineering & Robotics","Computer Science & AI","Mathematics"],
    cost: "$35", costNum: 35,
    acceptance: "~30%", turnaround: "3–4 months (quarterly)",
    indexed: "Google Scholar, ISSN",
    ivyRec: 2, oxbRec: 2,
    openTo: "HS students",
    accepts: "Original research, review articles, STEAM projects",
    blind: "Single-blind (science professional reviewers)", predatory: false,
    url: "https://jhss.scholasticahq.com",
    note: "Good for STEAM projects that span multiple disciplines."
  },

  {
    n: "International Journal of High School Research", abbr: "IJHSR", tier: 2,
    subjects: "All STEM, behavioural and social sciences",
    fields: ["Natural Sciences","Social Sciences & Economics","Engineering & Robotics"],
    cost: "Free", costNum: 0,
    acceptance: "~40%", turnaround: "2–4 months",
    indexed: "EBSCO, Google Scholar",
    ivyRec: 2, oxbRec: 2,
    openTo: "HS students globally",
    accepts: "Original research, review articles",
    blind: "Single-blind", predatory: false,
    url: "https://ijhsr.terrajournals.org",
    note: "EBSCO indexing makes this searchable in major library databases."
  },

  {
    n: "Journal of Student Research", abbr: "JSR", tier: 2,
    subjects: "All disciplines (multidisciplinary)",
    fields: ["Natural Sciences","Social Sciences & Economics","Medicine & Neuroscience"],
    cost: "~$50", costNum: 50,
    acceptance: "~40%", turnaround: "3–6 months",
    indexed: "Google Scholar, ISSN",
    ivyRec: 2, oxbRec: 2,
    openTo: "HS, undergraduate, graduate",
    accepts: "Research articles, case studies, AP/IB research projects",
    blind: "Double-blind", predatory: false,
    url: "https://www.jofsr.org",
    note: "One of the few journals explicitly accepting AP/IB research projects."
  },

  {
    n: "Oxford Journal of Student Scholarship", abbr: "OJSS", tier: 2,
    subjects: "All academic fields",
    fields: ["Natural Sciences","Social Sciences & Economics","Humanities & Writing","Engineering & Robotics"],
    cost: "Free", costNum: 0,
    acceptance: "40–50%", turnaround: "2–4 months",
    indexed: "Google Scholar",
    ivyRec: 2, oxbRec: 2,
    openTo: "HS and undergraduate students",
    accepts: "Original research, reviews, interdisciplinary work",
    blind: "Double-blind with detailed reviewer feedback", predatory: false,
    url: "https://ojss.web.ox.ac.uk",
    note: "Oxford-affiliated name carries recognition. Detailed feedback valuable for developing research writing."
  },

  {
    n: "Columbia Undergraduate Law Review (HS Essays)", abbr: "CULR", tier: 2,
    subjects: "Law, policy, legal analysis",
    fields: ["Law, Policy & Government","Social Sciences & Economics"],
    cost: "Free", costNum: 0,
    acceptance: "~20%", turnaround: "2–4 months",
    indexed: "HeinOnline, Google Scholar",
    ivyRec: 1, oxbRec: 2,
    openTo: "HS and undergraduate students",
    accepts: "Legal analysis essays, policy memos",
    blind: "Student editorial board (Columbia undergrads)", predatory: false,
    url: "https://www.columbialawreview.org",
    note: "Publishing in a Columbia law journal is a direct institutional signal for Ivy AOs. Strong for pre-law profiles."
  },

  {
    n: "Curieux Academic Journal", abbr: "CAJ", tier: 2,
    subjects: "All disciplines",
    fields: ["Natural Sciences","Social Sciences & Economics","Mathematics","Humanities & Writing"],
    cost: "Free", costNum: 0,
    acceptance: "~25%", turnaround: "1–3 months",
    indexed: "Google Scholar",
    ivyRec: 2, oxbRec: 3,
    openTo: "HS students globally",
    accepts: "Original research, reviews, essays",
    blind: "Peer review", predatory: false,
    url: "https://www.curieux.us"
  },

  {
    n: "Stanford Undergraduate Research Journal", abbr: "SURJ", tier: 2,
    subjects: "All disciplines",
    fields: ["Natural Sciences","Social Sciences & Economics","Humanities & Writing","Engineering & Robotics","Mathematics"],
    cost: "Free", costNum: 0,
    acceptance: "~30%", turnaround: "3–5 months",
    indexed: "Google Scholar",
    ivyRec: 2, oxbRec: 2,
    openTo: "HS and undergraduate students (verify current eligibility)",
    accepts: "Original research and review articles",
    blind: "Peer review", predatory: false,
    url: "https://surj.stanford.edu",
    note: "Stanford-branded. Verify current HS submission eligibility on their website before submitting."
  },

  {
    n: "Journal of Youth in Science", abbr: "JYS", tier: 2,
    subjects: "STEM disciplines",
    fields: ["Natural Sciences","Engineering & Robotics","Medicine & Neuroscience"],
    cost: "Free", costNum: 0,
    acceptance: "~35%", turnaround: "2–4 months",
    indexed: "Google Scholar",
    ivyRec: 2, oxbRec: 3,
    openTo: "Students under 25",
    accepts: "Original research, reviews",
    blind: "Peer review", predatory: false,
    url: "https://www.jysinc.org"
  },

  {
    n: "Research Archive of Rising Scholars", abbr: "RARS", tier: 2,
    subjects: "Multidisciplinary",
    fields: ["Natural Sciences","Social Sciences & Economics","Humanities & Writing","Mathematics"],
    cost: "Free", costNum: 0,
    acceptance: "~35%", turnaround: "1–3 months",
    indexed: "Google Scholar",
    ivyRec: 2, oxbRec: 3,
    openTo: "HS students globally",
    accepts: "Original research, literature reviews",
    blind: "Peer review", predatory: false,
    url: "https://www.risingscholars.org"
  },

  // ── TIER 3 — SCOPUS/WoS INDEXED (PI co-authorship needed) ─

  {
    n: "PLOS ONE", abbr: "PLOS ONE", tier: 3,
    subjects: "All sciences and social sciences",
    fields: ["Natural Sciences","Medicine & Neuroscience","Environmental Science","Social Sciences & Economics"],
    cost: "$1,350 APC", costNum: 1350,
    acceptance: "~70%", turnaround: "3–6 months",
    indexed: "Scopus Q1, PubMed, WoS",
    ivyRec: 2, oxbRec: 2,
    openTo: "All researchers (PI co-authorship required for HS)",
    accepts: "Original research (scientific soundness criterion — broad acceptance)",
    blind: "Single-blind", predatory: false,
    url: "https://journals.plos.org/plosone",
    note: "Q1 Scopus. PI typically covers APC. Accepts on soundness not novelty — good for HS students with genuine methods. Co-authorship with PI = Summa-level signal."
  },

  {
    n: "Scientific Reports (Nature Portfolio)", abbr: "Sci Rep", tier: 3,
    subjects: "Natural sciences, engineering, medicine",
    fields: ["Natural Sciences","Medicine & Neuroscience","Engineering & Robotics"],
    cost: "$1,990 APC", costNum: 1990,
    acceptance: "~55%", turnaround: "3–5 months",
    indexed: "Scopus Q1, WoS, PubMed",
    ivyRec: 2, oxbRec: 2,
    openTo: "All researchers (PI co-authorship recommended)",
    accepts: "Original research",
    blind: "Single-blind", predatory: false,
    url: "https://www.nature.com/srep",
    note: "Nature-branded — most recognisable branding in science publishing. 'Nature' in the authorship line is immediately recognisable by any AO."
  },

  {
    n: "Journal of Open Source Software", abbr: "JOSS", tier: 3,
    subjects: "Open-source software of scientific interest",
    fields: ["Computer Science & AI","Natural Sciences","Mathematics"],
    cost: "Free", costNum: 0,
    acceptance: "~70%", turnaround: "1–4 months",
    indexed: "Scopus Q1, DOAJ, WoS",
    ivyRec: 2, oxbRec: 2,
    openTo: "Any software author (HS students qualify)",
    accepts: "Peer-reviewed software papers (must have real documented codebase)",
    blind: "Open review (all reviews public on GitHub)", predatory: false,
    url: "https://joss.theoj.org",
    note: "FREE and Scopus Q1 — extremely rare combination. CS students with a genuine OSS tool (500+ users) + JOSS paper = very strong signal."
  },

  {
    n: "IEEE Access", abbr: "IEEE Access", tier: 3,
    subjects: "Engineering, computer science, physical sciences",
    fields: ["Computer Science & AI","Engineering & Robotics","Natural Sciences"],
    cost: "$1,395 APC", costNum: 1395,
    acceptance: "~60%", turnaround: "2–4 months",
    indexed: "Scopus Q1, WoS",
    ivyRec: 2, oxbRec: 2,
    openTo: "All researchers (PI co-authorship recommended for HS)",
    accepts: "Original research",
    blind: "Single-blind", predatory: false,
    url: "https://ieeeaccess.ieee.org",
    note: "IEEE branding is highly recognisable for engineering and CS applicants. Any AO seeing 'IEEE' understands the quality bar immediately."
  },

  {
    n: "SAGE Open", abbr: "SAGE Open", tier: 3,
    subjects: "Social sciences, humanities, STEM",
    fields: ["Social Sciences & Economics","Humanities & Writing","Law, Policy & Government"],
    cost: "~$695 APC", costNum: 695,
    acceptance: "~55%", turnaround: "3–5 months",
    indexed: "Scopus Q3, WoS ESCI",
    ivyRec: 2, oxbRec: 2,
    openTo: "All researchers",
    accepts: "Original research, reviews",
    blind: "Double-blind", predatory: false,
    url: "https://journals.sagepub.com/home/sgo",
    note: "SAGE brand is credible. Good for social science and economics research at the lowest APC among indexed journals."
  },

  {
    n: "Heliyon (Elsevier)", abbr: "Heliyon", tier: 3,
    subjects: "All scientific disciplines",
    fields: ["Natural Sciences","Medicine & Neuroscience","Social Sciences & Economics","Engineering & Robotics"],
    cost: "~$1,600 APC", costNum: 1600,
    acceptance: "~65%", turnaround: "3–6 months",
    indexed: "Scopus Q2, WoS, PubMed",
    ivyRec: 2, oxbRec: 2,
    openTo: "All researchers",
    accepts: "Original research (soundness criterion only)",
    blind: "Single-blind", predatory: false,
    url: "https://www.cell.com/heliyon",
    note: "Elsevier-branded. Like PLOS ONE, judges on soundness not novelty. Good for students with solid research from lab placements."
  },

  {
    n: "MDPI Mathematics", abbr: "Mathematics", tier: 3,
    subjects: "Pure and applied mathematics",
    fields: ["Mathematics","Computer Science & AI"],
    cost: "~$1,800 APC", costNum: 1800,
    acceptance: "~50%", turnaround: "4–8 weeks",
    indexed: "Scopus Q2, WoS",
    ivyRec: 2, oxbRec: 2,
    openTo: "All researchers",
    accepts: "Original research, reviews",
    blind: "Single-blind", predatory: false,
    url: "https://www.mdpi.com/journal/mathematics",
    note: "Rapid turnaround. Good for applied math results from students working with mentors. Only submit genuine research."
  },

  // ── TIER 4 — PREPRINT PLATFORMS ───────────────────────────

  {
    n: "arXiv", abbr: "arXiv", tier: 4,
    subjects: "Mathematics, CS, physics, quantitative biology, statistics, economics",
    fields: ["Mathematics","Computer Science & AI","Natural Sciences","Engineering & Robotics"],
    cost: "Free", costNum: 0,
    acceptance: "Moderated (screened, not rejected)", turnaround: "1–2 days",
    indexed: "Permanently citable (arXiv ID)",
    ivyRec: 2, oxbRec: 2,
    openTo: "All researchers (new users need endorsement from existing arXiv author)",
    accepts: "Research papers in supported subject areas",
    blind: "Not peer-reviewed", predatory: false,
    url: "https://arxiv.org",
    note: "Gold standard preprint for STEM. Permanently citable, date-stamped, instantly verifiable. Co-authorship with PI elevates enormously."
  },

  {
    n: "bioRxiv", abbr: "bioRxiv", tier: 4,
    subjects: "Biology, life sciences (all sub-fields)",
    fields: ["Natural Sciences","Medicine & Neuroscience","Environmental Science"],
    cost: "Free", costNum: 0,
    acceptance: "Moderated", turnaround: "1–3 days",
    indexed: "PubMed links, Google Scholar",
    ivyRec: 2, oxbRec: 2,
    openTo: "All researchers",
    accepts: "Original research in life sciences",
    blind: "Not peer-reviewed", predatory: false,
    url: "https://www.biorxiv.org",
    note: "Standard pre-publication deposit for biology. Co-authorship with a university PI = very strong admissions signal."
  },

  {
    n: "SSRN", abbr: "SSRN", tier: 4,
    subjects: "Economics, law, finance, management, social sciences, humanities",
    fields: ["Social Sciences & Economics","Law, Policy & Government","Humanities & Writing","Business & Entrepreneurship"],
    cost: "Free", costNum: 0,
    acceptance: "No gatekeeping", turnaround: "2–5 days",
    indexed: "Google Scholar; download stats publicly visible",
    ivyRec: 2, oxbRec: 2,
    openTo: "All researchers",
    accepts: "Working papers, research papers, essays",
    blind: "Not peer-reviewed", predatory: false,
    url: "https://www.ssrn.com",
    note: "Most widely-used preprint for economics and law. Download count is publicly visible — 500+ downloads on a HS paper is a meaningful signal."
  },

  {
    n: "Zenodo (CERN)", abbr: "Zenodo", tier: 4,
    subjects: "Any research output — data, code, papers, datasets",
    fields: ["Natural Sciences","Computer Science & AI","Engineering & Robotics","Mathematics","Environmental Science"],
    cost: "Free", costNum: 0,
    acceptance: "Open (moderation for appropriateness)", turnaround: "Immediate",
    indexed: "DOI assigned (permanent), Google Scholar",
    ivyRec: 2, oxbRec: 2,
    openTo: "All researchers",
    accepts: "Any scholarly output including datasets and code",
    blind: "Not peer-reviewed", predatory: false,
    url: "https://zenodo.org",
    note: "CERN-operated. Free DOI for any research output. Good for depositing code, datasets, or papers when no specific preprint server applies."
  },

  {
    n: "PhilPapers", abbr: "PhilPapers", tier: 4,
    subjects: "Philosophy, logic, ethics, metaphysics, philosophy of mind",
    fields: ["Humanities & Writing","Law, Policy & Government"],
    cost: "Free", costNum: 0,
    acceptance: "Moderated index", turnaround: "2–5 days",
    indexed: "PhilPapers specialist index",
    ivyRec: 2, oxbRec: 2,
    openTo: "All researchers",
    accepts: "Philosophy papers",
    blind: "Not peer-reviewed", predatory: false,
    url: "https://philpapers.org",
    note: "Standard repository for philosophy papers. Uploading here signals familiarity with academic norms. Very strong for Oxbridge philosophy applicants."
  },

  {
    n: "PsyArXiv", abbr: "PsyArXiv", tier: 4,
    subjects: "Psychology, cognitive science, social neuroscience",
    fields: ["Medicine & Neuroscience","Social Sciences & Economics"],
    cost: "Free", costNum: 0,
    acceptance: "Open (OSF moderated)", turnaround: "1–2 days",
    indexed: "Google Scholar, APA links",
    ivyRec: 2, oxbRec: 2,
    openTo: "All researchers",
    accepts: "Psychological research, preregistrations",
    blind: "Not peer-reviewed", predatory: false,
    url: "https://psyarxiv.com"
  },

  {
    n: "OSF Preprints", abbr: "OSF", tier: 4,
    subjects: "All disciplines",
    fields: ["Natural Sciences","Social Sciences & Economics","Medicine & Neuroscience","Humanities & Writing"],
    cost: "Free", costNum: 0,
    acceptance: "Open", turnaround: "Immediate",
    indexed: "Google Scholar",
    ivyRec: 2, oxbRec: 2,
    openTo: "All researchers",
    accepts: "Any scholarly output",
    blind: "Not peer-reviewed", predatory: false,
    url: "https://osf.io/preprints/",
    note: "Good for preregistering research before conducting it — creates a date-stamped public record proving your research plan predated your results."
  },

]; // ← END OF JOURNALS ARRAY. Add new entries ABOVE this line.
