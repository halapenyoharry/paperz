---
type: zpaper
title: "Three gates: Texas after the 2026 election, read as the graph of who can block whom"
version: 1.1
date: 2026-11-04
audience: Texans who watched the state change hands, and anyone who wants the state-house picture the national maps left out
license: CC0-1.0
tags: [texas, elections, state-legislatures, veto-players, legislative-rules, redistricting, coalition-bargaining, campaign-finance, cannabis-policy, religion-and-voting, systems-topology, human-ai-collaboration, living-document]
lineage: [veto-player-theory, commitment-theory, collective-action, topothink]
links: ["[[dont-found-anything]]", "[[topothink]]"]
summary: "On November 3, 2026, Texas went from one veto player to three: a Democratic House, a Republican Senate and a Democratic governor, with no party holding two-thirds anywhere. Only bills with votes from both parties can now become law, and the lieutenant governor, the most powerful office in the state, holds whatever power nineteen Republican senators choose to leave it in January. A living zpaper, built to be revised as the canvass, the rules vote and two special elections arrive."
references:
  - "Burka, Paul. 'Out of Control.' Texas Monthly, Mar. 1997."
  - "Ramsey, Ross. 'Analysis: What Patrick Proposes Didn't Work for Bullock.' The Texas Tribune, 25 Apr. 2014."
  - "Samuels, Alex. 'Texas Senate Changes Rules So Republicans Can Still Bring Bills to Floor Without Democratic Support.' The Texas Tribune, 13 Jan. 2021."
  - "Schelling, Thomas C. The Strategy of Conflict. Harvard University Press, 1960."
  - "Senate Research Center. Bill Analysis, S.J.R. 41. 75th Texas Legislature, 1997."
  - "Tsebelis, George. Veto Players: How Political Institutions Work. Princeton University Press, 2002."
---

# Three gates

## Texas after the 2026 election, read as the graph of who can block whom

---

> btw, democracy and the rule of law reigns in the US I was worried.
>
> couldn't goodwin offer chaimanships in exchange?
>
> I may have you write an article with this context on the state of affairs in texas after the election, wouldn't that be interesting? espeically if we could have visuals like they are showing for national elections and govenors but harder to find for state houses.

*Three messages from the day after the count, in the order they were sent. The paper takes them in reverse: the pictures first, then the leverage, then what the relief was about.*

---

## Introduction

For roughly three decades the government of Texas had a single shape. Republicans held the governor's office, both chambers of the legislature and every statewide seat ([Texas Public Radio, "Goodwin defeats Patrick"](https://www.tpr.org/2026-11-03/vikki-goodwin-defeats-dan-patrick-in-texas-lieutenant-governor-race)), and a bill the party's leaders wanted could travel from committee to signature without one Democratic vote ([Samuels](https://www.texastribune.org/2021/01/13/texas-senate-republicans/)). On November 3, 2026, the shape changed. Democrats won the governor's race, the lieutenant governor's race, the attorney general's office, the comptroller's office and an open seat in the United States Senate, and on unofficial returns they took the Texas House. Republicans kept the Texas Senate.

The national maps colored in the statewide flips and stopped there. The larger change happened a level down, in the relations between offices, and it has an exact form. Texas now has three institutions that can each refuse a bill: a Democratic House, a Republican Senate and a Democratic governor. Neither party holds the two-thirds needed to override any of them. Political scientists call institutions like these veto players, and their number, together with how far apart they sit, sets how much a government can change ([Tsebelis](https://press.princeton.edu/node/61737)). **Texas went from one veto player to three in a single night.**

This zpaper draws that structure, counts the seats inside it and follows it outward, to the January vote that will decide what the new lieutenant governor can do, to the bargain she might offer for her powers, to the religious arithmetic of the governor's race, the hemp fight, the money, and the argument Republicans are now having with each other. It is written to be revised. The returns are unofficial, the Senate has not adopted its rules, two Senate seats are about to empty, and each of those events will move a number on this page. Section 10 names them.

---

## Primary sources & lineage

This zpaper rests on two theoretical works and three primary records. Each supplies one premise.

- **Tsebelis, George.** [*Veto Players: How Political Institutions Work*](https://press.princeton.edu/node/61737) (2002; Princeton University Press).  
  *Core premise*: A political system's capacity for change depends on how many actors must agree to it, how far apart their preferences sit, and how cohesive each actor is internally.  
  *Role in this zpaper*: Supplies the model. Texas is read as three veto players, with the cohesion of one of them, the Senate Republican caucus, as the variable that matters most in 2027.

- **Schelling, Thomas C.** [*The Strategy of Conflict*](https://www.porchlightbooks.com/products/strategy-of-conflict-thomas-c-schelling-9780674840317) (1960; Harvard University Press).  
  *Core premise*: A promise or a threat moves the other side only when it is credible, and the surest way to make it credible is to remove your own ability to back out.  
  *Role in this zpaper*: Explains why any bargain the lieutenant governor offers for her powers has to be written into the rules it buys.

- **Texas Secretary of State.** [*Election Results, November 3, 2026*](https://electionresults.sos.state.tx.us/results.html) (unofficial returns).  
  *Core premise*: The count as of November 4 at 4:59 p.m., with every polling location reporting, on which every legislative and judicial seat total here depends. Version 1.1 tallies its 150 House races district by district.  
  *Role in this zpaper*: Source of the House, Senate and court counts. Unofficial until the canvass.

- **National exit poll, Texas results** ([NBC News and partner organizations](https://www.nbcnews.com/politics/2026-elections/exit-polls), 2026).  
  *Core premise*: In-person Election Day interviews combined with mail, phone and online surveys of early and mail voters, describing who voted and how, not why.  
  *Role in this zpaper*: The religious decomposition of the governor's race in Section 6.

- **The Texas Constitution and the Senate's rules**, as summarized by the [Senate Research Center](https://capitol.texas.gov/tlodocs/75R/analysis/html/SJ00041I.htm) and contemporaneous reporting.  
  *Core premise*: Which supermajorities the constitution fixes, which powers the Senate grants itself each session, and who draws the legislature's maps when the legislature cannot.  
  *Role in this zpaper*: The gates themselves.

---

## 1. The count

By the morning after, Democrats were on their way to winning every statewide office in Texas, including the first Democratic governorship since Ann Richards ([*Houston Chronicle*, "Brutal loss"](https://www.houstonchronicle.com/news/houston-texas/trending/article/midterm-republicans-reaction-texas-abbott-paxton-22511689.php)). Gina Hinojosa beat Greg Abbott 52.8 percent to 45.7 ([MultiState](https://www.multistate.us/elections/governor-race/texas-2026)), and James Talarico beat Ken Paxton for the Senate seat 55.1 to 43.0, the widest margin among the statewide races ([Texas Secretary of State](https://electionresults.sos.state.tx.us/results.html)). Vikki Goodwin unseated Dan Patrick, becoming the first Democrat elected lieutenant governor since Bob Bullock ([CBS Texas](https://www.cbsnews.com/texas/news/texas-lieutenant-governor-election-results-2026/)) and the first woman to hold the office ([KXAN](https://www.kxan.com/news/your-local-election-hq/goodwin-to-become-first-woman-in-texas-history-to-hold-lt-gov-office/)). Republicans lost the attorney general's office to Nathan Johnson ([Truthdig](https://www.truthdig.com/articles/blue-texas-lone-star-state-ends-decades-of-gop-dominance/)), Sarah Eckhardt beat Don Huffines for comptroller ([*Chron*](https://www.chron.com/politics/article/texas-republicans-react-blue-wave-2026-22511533.php)), and Jon Rosenthal took the Railroad Commission seat from Bo French ([CBS Texas, live results](https://cbsnews.com/texas/live-updates/texas-midterm-elections-2026)).

The statewide flips are what everyone saw. The legislature is what governs. Republicans went into the election holding the Texas House 88 seats to 62 ([*San Antonio Report*](https://sanantonioreport.org/meet-the-candidates-running-for-the-texas-legislature-in-2026/)). A district-by-district tally of the Secretary of State's returns gives Democrats 83 seats and Republicans 67, seven past the 76 that make a majority ([Texas Secretary of State](https://electionresults.sos.state.tx.us/results.html)). Democrats flipped twenty-one Republican seats, sixteen held by incumbents and five open, and lost none of their own; the defeated included three committee chairs, Gary Gates, Angie Chen Button and Lacey Hull ([Mitchell](https://thetexan.news/elections/2026/regime-change-democrats-take-the-texas-house-ending-republicans-two-decade-reign/article_8633636a-c402-4903-85b3-aae93edcd393.html)). Five races were decided by less than half a percentage point of the two-party vote. Republicans held HD 61 and HD 26 by 134 votes each and HD 67 by 203, and Democrats took HD 126 by 265 and HD 14 by 315. Recounts in all five could not change which party controls the chamber. Republicans have held the House, the Senate and the governor's office together since 2003 ([Nexstar](https://www.yahoo.com/news/politics/articles/democrat-held-house-gop-senate-171602643.html)), and that arrangement ends in January. Senfronia Thompson of Houston announced for speaker on election night, endorsed by the Democratic caucus chair, Gene Wu; the current speaker, Dustin Burrows, a Republican, won the gavel in 2025 with mostly Democratic votes ([Mitchell](https://thetexan.news/elections/2026/regime-change-democrats-take-the-texas-house-ending-republicans-two-decade-reign/article_8633636a-c402-4903-85b3-aae93edcd393.html)).

<svg viewBox="0 0 760 330" width="100%" role="img" aria-label="Two grids of 150 dots. Left, the 2025 Texas House: 62 Democrats and 88 Republicans. Right, the House to be seated in January 2027 on unofficial returns: 83 Democrats and 67 Republicans." style="display:block;max-width:720px;margin:0 auto">
<defs><pattern id="tg-house-ad" patternUnits="userSpaceOnUse" x="37.5" y="75.5" width="21" height="21"><circle cx="10.5" cy="10.5" r="7.2" fill="#6f9ceb"/></pattern><pattern id="tg-house-ar" patternUnits="userSpaceOnUse" x="37.5" y="75.5" width="21" height="21"><circle cx="10.5" cy="10.5" r="7.2" fill="#e2766f"/></pattern><pattern id="tg-house-bd" patternUnits="userSpaceOnUse" x="407.5" y="75.5" width="21" height="21"><circle cx="10.5" cy="10.5" r="7.2" fill="#6f9ceb"/></pattern><pattern id="tg-house-br" patternUnits="userSpaceOnUse" x="407.5" y="75.5" width="21" height="21"><circle cx="10.5" cy="10.5" r="7.2" fill="#e2766f"/></pattern></defs>
<text x="40" y="34" text-anchor="start" style="font-family:var(--font-body);font-size:11px;font-weight:400;letter-spacing:.08em;text-transform:uppercase" fill="var(--color-neutral-400)">2025 session</text>
<text x="40" y="58" text-anchor="start" style="font-family:var(--font-body);font-size:17px;font-weight:500" fill="var(--color-text)">62 D  /  88 R</text>
<rect x="37.5" y="75.5" width="315" height="84" fill="url(#tg-house-ad)"/>
<rect x="37.5" y="159.5" width="42" height="21" fill="url(#tg-house-ad)"/>
<rect x="79.5" y="159.5" width="273" height="21" fill="url(#tg-house-ar)"/>
<rect x="37.5" y="180.5" width="315" height="105" fill="url(#tg-house-ar)"/>
<circle cx="48" cy="191" r="7.2" fill="#e2766f" stroke="var(--color-text)" stroke-width="1.4"/>
<text x="410" y="34" text-anchor="start" style="font-family:var(--font-body);font-size:11px;font-weight:400;letter-spacing:.08em;text-transform:uppercase" fill="var(--color-neutral-400)">Seated January 2027, unofficial</text>
<text x="410" y="58" text-anchor="start" style="font-family:var(--font-body);font-size:17px;font-weight:500" fill="var(--color-text)">83 D  /  67 R</text>
<rect x="407.5" y="75.5" width="315" height="105" fill="url(#tg-house-bd)"/>
<rect x="407.5" y="180.5" width="168" height="21" fill="url(#tg-house-bd)"/>
<rect x="575.5" y="180.5" width="147" height="21" fill="url(#tg-house-br)"/>
<rect x="407.5" y="201.5" width="315" height="84" fill="url(#tg-house-br)"/>
<circle cx="418" cy="191" r="7.2" fill="#6f9ceb" stroke="var(--color-text)" stroke-width="1.4"/>
<text x="380" y="312" text-anchor="middle" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">outlined dot: seat 76, the majority line</text>
</svg>

*Figure 1. The Texas House as 150 seats, before and after. Each dot is a seat, and the outlined dot is seat 76, where the majority begins. The post-election count is a district-by-district tally of the Secretary of State's unofficial returns and becomes final at the canvass.*

The Senate moved less, and it moved first. In a special runoff on January 31, Taylor Rehmet won District 9 in Tarrant County, a district Donald Trump had carried by seventeen points, with about 57 percent of the vote ([*Washington Examiner*](https://www.washingtonexaminer.com/?p=4442237); [*The Shorthorn*](https://www.theshorthorn.com/news/a-democrat-flipped-a-red-state-senate-district-what-does-it-mean-for-the-midterms/article_0b5917eb-52ab-42c5-a196-382f5dcd5de0.html)). November was the rematch for a full four-year term ([Exter](https://teachthevote.atpe.org/Our-Blog/Latest-Posts/Special-election-results-dramatic-party-flip-SD-9)), and on the returns he held it. Republicans keep 19 of the Senate's 31 seats ([Serrano](https://www.yahoo.com/news/politics/articles/gop-state-senators-could-emerge-110000433.html)).

The courts turned further than the legislature did. On the returns, Democrats won all four Supreme Court of Texas seats on the ballot, defeating Chief Justice Jimmy Blacklock and Justices James Sullivan, Kyle Hawkins and Brett Busby, which leaves Republicans a 5 to 4 majority on the nine-member court. Democrats also won all three Court of Criminal Appeals seats on the ballot, leaving that court at six Republicans and three Democrats.

The sharpest judicial result came on a court most voters had never heard of. The legislature created the Fifteenth Court of Appeals in 2023 and gave it statewide jurisdiction over appeals in cases brought by or against the state ([KSAT](https://www.ksat.com/news/texas/2024/06/11/abbott-appoints-first-judges-to-new-appeals-court-for-cases-involving-state-government-businesses/)) and over constitutional challenges to state statutes ([Jones Day](https://www.jonesday.com/en/insights/2024/06/the-changing-landscape-for-business-disputes-in-texas-justices-named-to-inaugural-business-dispute-appellate-court)). Supporters argued the state's cases deserved a court with statewide reach and specialized precedent; opponents called it a way to move those cases away from judges elected as Democrats ([*Texas Lawbook*](https://texaslawbook.net/15th-coa-bill-nears-enactment/)). Its three founding justices, Republicans appointed by Abbott, took over a docket that had belonged to an all-Democratic Austin appeals court ([Bloomberg Law](https://news.bloomberglaw.com/litigation/texas-courts-unexpected-jurisdiction-invites-shopping-deluge)), and they faced statewide voters for the first time this November ([Federalist Society](https://fedsoc.org/scdw/texas-supreme-court-upholds-the-first-new-appellate-court-in-nearly-sixty-years)). The returns show Democrats winning all three seats. Whatever the court's purpose, its electorate is the whole state, and the whole state is the electorate that just turned. **A rule can route cases to a node; it cannot choose who the voters put there.**

---

## 2. The office the Senate confers

Texas gives its lieutenant governor more legislative power than almost any state does, and very little of that power is in the constitution. The constitution makes the lieutenant governor president of the Senate. The senators supply the rest, voting at the start of each session on rules that let the office appoint committees and their chairs, refer bills, and decide what reaches the floor ([*Daily Texan*](https://thedailytexan.com/2026/11/04/democrat-vikki-goodwin-wins-lieutenant-governorship-legislature-remains-uncalled/); [FOX 4](https://www.fox4news.com/news/five-major-takeaways-from-texas-2026-midterm-election-results)). Because those powers live in the rules, a simple majority can move them, for instance to a majority leader the Republican caucus elects for itself ([Progress Texas](https://progresstexas.substack.com/p/can-texas-senate-gop-strip-a-lt-gov)). Before the election, reporting indicated that Republican senators were weighing exactly that if Goodwin won ([CBS Texas](https://www.cbsnews.com/texas/news/texas-lieutenant-governor-election-results-2026/)). The day after, the *Quorum Report*, citing sources, said Senate Republicans planned to meet that Wednesday to discuss reorganizing the chamber and stripping Goodwin of some of her powers ([Jones](https://www.fox4news.com/news/republican-lawmaker-suggests-abbott-strip-governors-emergency-powers-before-hinojosa-takes-office)). Charles Schwertner, reelected in District 5, posted that Republicans would "hold the line"; the *Texas Tribune* asked fourteen Republican senators for interviews, and none had answered by that evening ([Serrano](https://www.yahoo.com/news/politics/articles/gop-state-senators-could-emerge-110000433.html)).

The floor threshold shows how those rules behave over time. For decades, bringing a bill up for a vote took two-thirds of the Senate, 21 of 31 ([*Texas Tribune*, "The Brief"](https://api.texastribune.org/2010/11/10/the-brief-top-texas-news-for-nov-10-2010/)). The 2011 session opened with 19 Republican senators, two short of it ([*Texas Tribune*](https://www.texastribune.org/?p=75848)). In 2015, with 20 Republicans, Patrick led the change to three-fifths, which is 19 votes ([*The Texan*](https://thetexan.news/lt-gov-dan-patrick-aims-to-bolster-gop-strength-by-redefining-supermajority/); [*Burnet Bulletin*](https://www.burnetbulletin.com/node/3686)). In 2021 the caucus fell to 18, and the Senate voted 18 to 13, on party lines, to lower the threshold to five-ninths, which in a full chamber is 18 ([Samuels](https://www.texastribune.org/2021/01/13/texas-senate-republicans/)).

<svg viewBox="0 0 760 340" width="100%" role="img" aria-label="Four Texas Senate sessions showing Republican seats and the votes needed to bring a bill to the floor. 2011: 19 seats, 21 needed. 2015: 20 seats, 19 needed. 2021: 18 seats, 18 needed. 2027: 19 seats, threshold to be set in January." style="display:block;max-width:720px;margin:0 auto">
<line x1="90" y1="250.0" x2="720" y2="250.0" stroke="var(--color-divider)" stroke-width="1"/>
<text x="78" y="254.0" text-anchor="end" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">16</text>
<line x1="90" y1="216.7" x2="720" y2="216.7" stroke="var(--color-divider)" stroke-width="1"/>
<text x="78" y="220.66666666666669" text-anchor="end" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">17</text>
<line x1="90" y1="183.3" x2="720" y2="183.3" stroke="var(--color-divider)" stroke-width="1"/>
<text x="78" y="187.33333333333334" text-anchor="end" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">18</text>
<line x1="90" y1="150.0" x2="720" y2="150.0" stroke="var(--color-divider)" stroke-width="1"/>
<text x="78" y="154.0" text-anchor="end" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">19</text>
<line x1="90" y1="116.7" x2="720" y2="116.7" stroke="var(--color-divider)" stroke-width="1"/>
<text x="78" y="120.66666666666669" text-anchor="end" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">20</text>
<line x1="90" y1="83.3" x2="720" y2="83.3" stroke="var(--color-divider)" stroke-width="1"/>
<text x="78" y="87.33333333333331" text-anchor="end" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">21</text>
<line x1="90" y1="50.0" x2="720" y2="50.0" stroke="var(--color-divider)" stroke-width="1"/>
<text x="78" y="54.0" text-anchor="end" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">22</text>
<circle cx="170" cy="150.0" r="7" fill="#e2766f"/>
<line x1="152" y1="83.3" x2="188" y2="83.3" stroke="var(--color-accent)" stroke-width="3"/>
<text x="170" y="276" text-anchor="middle" style="font-family:var(--font-body);font-size:13px;font-weight:500" fill="var(--color-text)">2011</text>
<text x="170" y="294" text-anchor="middle" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">two-thirds</text>
<circle cx="330" cy="116.7" r="7" fill="#e2766f"/>
<line x1="312" y1="150.0" x2="348" y2="150.0" stroke="var(--color-accent)" stroke-width="3"/>
<text x="330" y="276" text-anchor="middle" style="font-family:var(--font-body);font-size:13px;font-weight:500" fill="var(--color-text)">2015</text>
<text x="330" y="294" text-anchor="middle" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">three-fifths</text>
<circle cx="490" cy="183.3" r="7" fill="#e2766f"/>
<line x1="472" y1="183.3" x2="508" y2="183.3" stroke="var(--color-accent)" stroke-width="3"/>
<text x="490" y="276" text-anchor="middle" style="font-family:var(--font-body);font-size:13px;font-weight:500" fill="var(--color-text)">2021</text>
<text x="490" y="294" text-anchor="middle" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">five-ninths</text>
<circle cx="650" cy="150.0" r="7" fill="#e2766f"/>
<text x="650" y="206.66666666666663" text-anchor="middle" style="font-family:var(--font-body);font-size:17px;font-weight:500" fill="var(--color-accent)">?</text>
<text x="650" y="276" text-anchor="middle" style="font-family:var(--font-body);font-size:13px;font-weight:500" fill="var(--color-text)">2027</text>
<text x="650" y="294" text-anchor="middle" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">set in January</text>
<circle cx="100" cy="322" r="6" fill="#e2766f"/>
<text x="112" y="326" text-anchor="start" style="font-family:var(--font-body);font-size:11.5px;font-weight:400" fill="var(--color-neutral-400)">Republican senators</text>
<line x1="260" y1="322" x2="284" y2="322" stroke="var(--color-accent)" stroke-width="3"/>
<text x="294" y="326" text-anchor="start" style="font-family:var(--font-body);font-size:11.5px;font-weight:400" fill="var(--color-neutral-400)">votes needed to bring a bill to the floor</text>
</svg>

*Figure 2. Republican senators and the votes needed to bring a bill to the floor, by session. The 2027 threshold will be set by the rules vote in January.*

**Each time the threshold moved, it moved to the size of the majority.** That is the pattern January inherits. The office's agenda power is whatever the chamber confers, and the chamber has shown, session after session, that it will resize its own rules to fit whoever holds sixteen votes. There is precedent for the specific case, too. In 1997, after Republicans took the Senate majority under Bullock, a Democrat, Paul Burka reported in *Texas Monthly* that Bullock's grip on the chamber had all but vanished, though his formal powers were untouched ([Burka](https://www.texasmonthly.com/politics/out-of-control-2/)), and Republicans had considered stripping those powers outright ([Progress Texas](https://progresstexas.substack.com/p/can-texas-senate-gop-strip-a-lt-gov)).

Two vacancies sharpen the count. Johnson leaves the Senate to become attorney general, and Eckhardt, whose Senate term runs into 2029 ([*Daily Texan*, "Eckhardt"](https://thedailytexan.com/2026/03/06/sarah-eckhardt-speaks-at-lbj-school-discusses-race-for-comptroller/)), leaves it to become comptroller. Neither district was on this year's ballot ([Texas Secretary of State](https://electionresults.sos.state.tx.us/results.html)). If both seats are still empty when the Senate convenes, 29 senators will vote on the rules, 19 Republicans and 10 Democrats, and fifteen is a majority of 29. A rules package that keeps the office's powers would then need every Democrat and five Republicans. The calendar adds one more condition. The legislature convenes on January 12, a week before Hinojosa is sworn in on January 19 ([Jones](https://www.fox4news.com/news/republican-lawmaker-suggests-abbott-strip-governors-emergency-powers-before-hinojosa-takes-office)), and Texas inaugurates its governor and lieutenant governor together, so the Senate's first days open with Patrick still in the chair. Whether the rules come up in that week or wait for Goodwin is the majority's first decision.

<svg viewBox="0 0 760 420" width="100%" role="img" aria-label="Thirty-one Senate seats. Fifteen were not on the 2026 ballot: 8 Republican and 7 Democratic, two of the Democratic seats vacating. Sixteen were on the ballot: 11 Republican and 5 Democratic. Below, the opening-day count of 29 seated senators, where 15 is a majority: 10 Democrats plus 5 Republicans." style="display:block;max-width:720px;margin:0 auto">
<text x="40" y="34" text-anchor="start" style="font-family:var(--font-body);font-size:11px;font-weight:400;letter-spacing:.08em;text-transform:uppercase" fill="var(--color-neutral-400)">Not on the 2026 ballot, 15</text>
<circle cx="50" cy="60" r="9" fill="#6f9ceb"/>
<circle cx="76" cy="60" r="9" fill="#6f9ceb"/>
<circle cx="102" cy="60" r="9" fill="#6f9ceb"/>
<circle cx="128" cy="60" r="9" fill="#6f9ceb"/>
<circle cx="154" cy="60" r="9" fill="#6f9ceb"/>
<circle cx="180" cy="60" r="9" fill="none" stroke="#6f9ceb" stroke-width="1.6" stroke-dasharray="3 3"/>
<circle cx="206" cy="60" r="9" fill="none" stroke="#6f9ceb" stroke-width="1.6" stroke-dasharray="3 3"/>
<circle cx="232" cy="60" r="9" fill="#e2766f"/>
<circle cx="50" cy="86" r="9" fill="#e2766f"/>
<circle cx="76" cy="86" r="9" fill="#e2766f"/>
<circle cx="102" cy="86" r="9" fill="#e2766f"/>
<circle cx="128" cy="86" r="9" fill="#e2766f"/>
<circle cx="154" cy="86" r="9" fill="#e2766f"/>
<circle cx="180" cy="86" r="9" fill="#e2766f"/>
<circle cx="206" cy="86" r="9" fill="#e2766f"/>
<text x="410" y="34" text-anchor="start" style="font-family:var(--font-body);font-size:11px;font-weight:400;letter-spacing:.08em;text-transform:uppercase" fill="var(--color-neutral-400)">On the 2026 ballot, 16</text>
<circle cx="420" cy="60" r="9" fill="#6f9ceb" stroke="var(--color-text)" stroke-width="1.4"/>
<circle cx="446" cy="60" r="9" fill="#6f9ceb"/>
<circle cx="472" cy="60" r="9" fill="#6f9ceb"/>
<circle cx="498" cy="60" r="9" fill="#6f9ceb"/>
<circle cx="524" cy="60" r="9" fill="#6f9ceb"/>
<circle cx="550" cy="60" r="9" fill="#e2766f"/>
<circle cx="576" cy="60" r="9" fill="#e2766f"/>
<circle cx="602" cy="60" r="9" fill="#e2766f"/>
<circle cx="420" cy="86" r="9" fill="#e2766f"/>
<circle cx="446" cy="86" r="9" fill="#e2766f"/>
<circle cx="472" cy="86" r="9" fill="#e2766f"/>
<circle cx="498" cy="86" r="9" fill="#e2766f"/>
<circle cx="524" cy="86" r="9" fill="#e2766f"/>
<circle cx="550" cy="86" r="9" fill="#e2766f"/>
<circle cx="576" cy="86" r="9" fill="#e2766f"/>
<circle cx="602" cy="86" r="9" fill="#e2766f"/>
<text x="40" y="136" text-anchor="start" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">dashed: seats left by Johnson (AG) and Eckhardt (comptroller)</text>
<text x="410" y="136" text-anchor="start" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">outlined: District 9, held by Rehmet since January</text>
<line x1="40" y1="166" x2="720" y2="166" stroke="var(--color-divider)" stroke-width="1"/>
<text x="40" y="198" text-anchor="start" style="font-family:var(--font-body);font-size:11px;font-weight:400;letter-spacing:.08em;text-transform:uppercase" fill="var(--color-neutral-400)">Opening day, if both seats are still empty: 29 seated, 15 is a majority</text>
<circle cx="46.0" cy="236" r="8.5" fill="#6f9ceb" opacity="1"/>
<circle cx="69.3" cy="236" r="8.5" fill="#6f9ceb" opacity="1"/>
<circle cx="92.6" cy="236" r="8.5" fill="#6f9ceb" opacity="1"/>
<circle cx="115.9" cy="236" r="8.5" fill="#6f9ceb" opacity="1"/>
<circle cx="139.2" cy="236" r="8.5" fill="#6f9ceb" opacity="1"/>
<circle cx="162.5" cy="236" r="8.5" fill="#6f9ceb" opacity="1"/>
<circle cx="185.8" cy="236" r="8.5" fill="#6f9ceb" opacity="1"/>
<circle cx="209.1" cy="236" r="8.5" fill="#6f9ceb" opacity="1"/>
<circle cx="232.4" cy="236" r="8.5" fill="#6f9ceb" opacity="1"/>
<circle cx="255.7" cy="236" r="8.5" fill="#6f9ceb" opacity="1"/>
<circle cx="279.0" cy="236" r="8.5" fill="#e2766f" opacity="1"/>
<circle cx="302.3" cy="236" r="8.5" fill="#e2766f" opacity="1"/>
<circle cx="325.6" cy="236" r="8.5" fill="#e2766f" opacity="1"/>
<circle cx="348.9" cy="236" r="8.5" fill="#e2766f" opacity="1"/>
<circle cx="372.2" cy="236" r="8.5" fill="#e2766f" opacity="1"/>
<circle cx="395.5" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<circle cx="418.8" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<circle cx="442.1" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<circle cx="465.4" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<circle cx="488.7" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<circle cx="512.0" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<circle cx="535.3" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<circle cx="558.6" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<circle cx="581.9" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<circle cx="605.2" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<circle cx="628.5" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<circle cx="651.8" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<circle cx="675.1" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<circle cx="698.4" cy="236" r="8.5" fill="#e2766f" opacity="0.35"/>
<path d="M 36.0 258 L 36.0 266 L 382.2 266 L 382.2 258" fill="none" stroke="var(--color-accent)" stroke-width="1.5"/>
<text x="209.1" y="288" text-anchor="middle" style="font-family:var(--font-body);font-size:12px;font-weight:400" fill="var(--color-text)">ten Democrats and the five Republicans Goodwin would need</text>
<text x="558.6" y="288" text-anchor="middle" style="font-family:var(--font-body);font-size:12px;font-weight:400" fill="var(--color-neutral-500)">the other fourteen</text>
<text x="40" y="340" text-anchor="start" style="font-family:var(--font-body);font-size:12px;font-weight:400" fill="var(--color-neutral-400)">Under the floor rule of recent sessions, five-ninths of the members present</text>
<text x="40" y="360" text-anchor="start" style="font-family:var(--font-body);font-size:12px;font-weight:400" fill="var(--color-neutral-400)">bring a bill up: 18 of a full 31, 17 of 29. Republicans clear it alone either way.</text>
<text x="40" y="392" text-anchor="start" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">Seat counts from unofficial returns.</text>
</svg>

*Figure 3. The Senate's 31 seats, split by whether they were on the 2026 ballot, and the opening-day count if both Democratic vacancies remain unfilled. The figure's lower note gives the five-ninths arithmetic for a full chamber and for 29.*

---

## 3. Three gates

The veto-player model rests on one observation. A policy changes only when every actor whose consent is required prefers the change to the status quo, so the set of reachable changes shrinks as those actors multiply and as their preferences move apart ([Tsebelis](https://press.princeton.edu/node/61737)). Under unified Republican control, Texas had one veto player in practice, the party's leadership, whose agreement was enough. In January it will have three, and they sit on opposite sides of the state's main divides.

<svg viewBox="0 0 760 280" width="100%" role="img" aria-label="Three boxes in a row: the House, 83 Democrats to 67 Republicans; the Senate, 19 Republicans to 12 Democrats; the governor, a Democrat. A bill must pass all three. Overriding a veto takes 100 House votes and 21 Senate votes, which neither party holds." style="display:block;max-width:720px;margin:0 auto">
<rect x="30" y="60" width="190" height="120" rx="10" fill="var(--color-surface)" stroke="#6f9ceb" stroke-width="1.6"/>
<text x="125" y="96" text-anchor="middle" style="font-family:var(--font-body);font-size:11px;font-weight:400;letter-spacing:.08em;text-transform:uppercase" fill="var(--color-neutral-400)">Texas House</text>
<text x="125" y="130" text-anchor="middle" style="font-family:var(--font-body);font-size:18px;font-weight:500" fill="var(--color-text)">83 D  /  67 R</text>
<text x="125" y="160" text-anchor="middle" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">two-thirds: 100 of 150</text>
<rect x="285" y="60" width="190" height="120" rx="10" fill="var(--color-surface)" stroke="#e2766f" stroke-width="1.6"/>
<text x="380" y="96" text-anchor="middle" style="font-family:var(--font-body);font-size:11px;font-weight:400;letter-spacing:.08em;text-transform:uppercase" fill="var(--color-neutral-400)">Texas Senate</text>
<text x="380" y="130" text-anchor="middle" style="font-family:var(--font-body);font-size:18px;font-weight:500" fill="var(--color-text)">19 R  /  12 D</text>
<text x="380" y="160" text-anchor="middle" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">two-thirds: 21 of 31</text>
<rect x="540" y="60" width="190" height="120" rx="10" fill="var(--color-surface)" stroke="#6f9ceb" stroke-width="1.6"/>
<text x="635" y="96" text-anchor="middle" style="font-family:var(--font-body);font-size:11px;font-weight:400;letter-spacing:.08em;text-transform:uppercase" fill="var(--color-neutral-400)">Governor</text>
<text x="635" y="130" text-anchor="middle" style="font-family:var(--font-body);font-size:18px;font-weight:500" fill="var(--color-text)">Hinojosa (D)</text>
<text x="635" y="160" text-anchor="middle" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">signs or vetoes</text>
<line x1="225" y1="120" x2="277" y2="120" stroke="var(--color-accent)" stroke-width="1.6"/>
<path d="M 277 114 L 285 120 L 277 126 Z" fill="var(--color-accent)"/>
<line x1="480" y1="120" x2="532" y2="120" stroke="var(--color-accent)" stroke-width="1.6"/>
<path d="M 532 114 L 540 120 L 532 126 Z" fill="var(--color-accent)"/>
<text x="380" y="34" text-anchor="middle" style="font-family:var(--font-body);font-size:12px;font-weight:400;letter-spacing:.06em;text-transform:uppercase" fill="var(--color-neutral-400)">A bill becomes law only by passing every gate</text>
<text x="380" y="222" text-anchor="middle" style="font-family:var(--font-body);font-size:13px;font-weight:400" fill="var(--color-text)">Neither party holds two-thirds of either chamber, so no gate can be forced open.</text>
<text x="380" y="248" text-anchor="middle" style="font-family:var(--font-body);font-size:12px;font-weight:400" fill="var(--color-neutral-400)">Proposing a constitutional amendment takes the same two-thirds, 100 and 21, before the voters ever see it.</text>
</svg>

*Figure 4. The three gates a Texas bill now has to pass. Overriding a veto takes two-thirds of each chamber, and neither party holds two-thirds of either.*

The constitution fixes the numbers that make the structure binding. Overriding a governor's veto takes two-thirds of both chambers, and so does proposing a constitutional amendment, before the voters ever see it. Democrats hold 83 House seats and would need 17 Republicans to reach 100; in the Senate they would need nine more to reach 21. Republicans, for their part, cannot override a Democratic governor in either chamber. **No gate can be forced, so every law passed in 2027 will be a law that members of both parties voted for.**

Redistricting is the plainest case. Texas drew a new congressional map in 2025, in the middle of the decade, at Trump's urging ([FOX 29](https://www.fox29.com/election/supreme-court-reinforces-ruling-allowing-redrawn-texas-congressional-map)), and in April the Supreme Court cleared it, 6 to 3, for use through the cycle after the 2030 census ([San Angelo LIVE!](https://sanangelolive.com/news/politics/2026-04-27/us-supreme-court-upholds-texas-redrawn-congressional-map)). Texas moved first. California answered with Proposition 50, whose sponsors removed its trigger clause before the vote so that the new California map would stand regardless of what happened to the Texas one ([CBS News](https://www.cbsnews.com/news/texas-redistricting-court-ruling-california-prop-50)). Another Republican redraw, which many expected after this election, would now need a Democratic House and a Democratic governor to agree to it; a Democratic redraw would need a Republican Senate. Neither party can move the 2025 map alone, so it is likely to stand until 2031.

The 2031 maps for the legislature itself run through a different channel. The constitution requires the legislature to redraw its own districts in the first regular session after the census, and if it fails, the Legislative Redistricting Board draws them: the lieutenant governor, the House speaker, the attorney general, the comptroller and the land commissioner. The board has no authority over congressional districts ([Senate Research Center](https://capitol.texas.gov/tlodocs/75R/analysis/html/SJ00041I.htm)). With the chambers divided, failure is plausible; the legislature adjourned without passing its own plans as recently as 2001 ([Loyola Law School](https://redistricting.lls.edu/?p=123)). The board in 2031 will be whoever wins those offices in 2030, plus whomever the House chooses as speaker. For every senator in the current Republican majority, the shape of the next district may be decided by statewide offices Democrats now hold, which puts 2030 into that senator's arithmetic today.

---

## 4. The bargain

The obvious move for Goodwin, raised the day after the count, is to trade chairmanships for votes on the rules. Texas has run versions of this before, and the history shows what the trade can buy and what it costs to refuse it.

When Bullock took office in 1991, he gave none of the Senate's Republicans a chair. They answered by using the rules against him, slowing the chamber's business until he conceded the mistake and made peace with their leader midway through the session ([Ramsey](https://www.texastribune.org/2014/04/25/analysis-what-patrick-proposes-didnt-work-bullock/)). By 1997, with Republicans in the majority, they held six of the Senate's fifteen chairmanships under him. In 1999 Rick Perry, a Republican, inherited a Senate split 16 to 15 and gave nine chairs to his own party and six to Democrats ([Ramsey](https://www.texastribune.org/2014/04/25/analysis-what-patrick-proposes-didnt-work-bullock/)). The practice thinned under Patrick. In 2023 the Senate had fourteen Republican chairs and one Democratic chair ([Texas Policy Research](https://www.texaspolicyresearch.com/?p=1069)).

The arithmetic is small. With all 31 seats filled, Goodwin needs four Republicans to join twelve Democrats. With one seat empty, four Republicans produce a 15 to 15 tie, and the lieutenant governor votes only to break ties. With both seats empty, she needs five.

The harder problem is that chairs are not scarce for Republicans. If the caucus takes over the agenda, its own leader hands out the chairs, and each Republican senator can expect one either way. **Goodwin's offer has to beat the caucus's offer to the same senator.** That points her toward the members a caucus allocation would pass over, the mavericks and the moderates, and toward currencies beyond titles: bill referrals that favor their priorities, and some protection from their own leadership.

Against that sits discipline. In May, Thomas Massie lost his Kentucky primary to a challenger Trump picked to remove him, in the most expensive House primary on record ([PBS NewsHour](https://www.pbs.org/newshour/politics/massies-loss-leaves-no-doubt-about-trumps-power-over-the-gop)), one of a series of Republicans defeated after angering the president ([*Lawrence Journal-World*](https://www2.ljworld.com/news/national/2026/may/19/us-rep-thomas-massie-loses-kentucky-gop-primary-in-another-victory-for-trump/)). In Texas the local enforcer was Patrick, whose endorsements in Senate primaries were a large part of how he held the chamber ([*Texas Tribune*](https://www.yahoo.com/news/politics/articles/democrat-vikki-goodwin-declares-victory-045217937.html)). He lost.

Timing decides who is exposed. The Republicans who won this week serve four-year terms and next face voters in 2030, though several felt the environment anyway: Bob Hall held District 2 with 51.4 percent of the two-party vote, and Dennis Paul won the open District 11 with 51.5 ([Texas Secretary of State](https://electionresults.sos.state.tx.us/results.html)). The holdovers were elected in 2024, their terms run into early 2029, and they will be on the ballot in 2028, in whatever environment this election turns out to have opened. Rehmet's January win in a district Trump carried by seventeen points shows how far that environment can reach. If Goodwin's four or five votes exist, the 2028 cohort is where they are most likely to be found.

The last problem is credibility, and Schelling described its general form in 1960. A promise moves the other side only when the one making it cannot take it back, and the reliable way to make a promise binding is to give up the ability to break it ([Schelling](https://www.porchlightbooks.com/products/strategy-of-conflict-thomas-c-schelling-9780674840317)). A promise of chairs made before the rules vote is worth nothing the day after. A rule that writes the allocation into the chamber's own procedure, chairs in proportion to party strength, would hand Republicans most of the gavels, close to Perry's 1999 split, and would leave the lieutenant governor no way to renege. **The bargain that can work is the one written into the rules it buys.**

---

## 5. The window

Until January 12 the outgoing legislature still exists, with Republicans holding 88 House seats and the Senate, and until January 19 Abbott is governor, the only official who can call it back into session. On election night Representative Brian Harrison, a Republican, urged Abbott to do that and to restrict the governor's emergency powers before Hinojosa inherits them, including the power to suspend or modify statutes. Abbott, he said, should keep her from inheriting "effectively all the powers of a dictator in the state of Texas" ([Jones](https://www.fox4news.com/news/republican-lawmaker-suggests-abbott-strip-governors-emergency-powers-before-hinojosa-takes-office)). Harrison had filed a similar bill in 2022, with Abbott in office, and it did not advance. Nathan Johnson, the attorney general-elect, called the statement irresponsible and said such a move could harm the Republican Party's reputation for a generation ([Jones](https://www.fox4news.com/news/republican-lawmaker-suggests-abbott-strip-governors-emergency-powers-before-hinojosa-takes-office)). No response from Abbott had been reported by that evening.

A special session would run through a gate this paper has not yet drawn. The Texas Constitution requires two-thirds of each chamber to be present to do business, so in the outgoing House, where Democrats hold 62 seats, 51 absences stop it. House Democrats used that in the summer of 2025, leaving the state to deny the chamber the members it needed to pass the mid-decade map ([San Angelo LIVE!](https://sanangelolive.com/news/politics/2026-04-27/us-supreme-court-upholds-texas-redrawn-congressional-map)). The legislature answered by passing House Bill 18, written to bar lawmakers who break quorum from raising money while they are gone and to fine them up to $5,000 for each donation they accept ([Schneider, "Quorum breaks"](https://www.tpr.org/2025-09-03/texas-legislature-passes-bill-to-punish-quorum-breaks)). In April a House committee voted 6 to 5, along party lines, to impose about $422,000 in fines and reimbursements on more than fifty Democrats for the 2025 walkout ([Schneider, "Penalties"](https://www.kut.org/texas/2026-04-11/texas-house-committee-slaps-democrats-with-nearly-422k-in-penalties-for-2025-quorum-break)). A lame-duck session would test whether Democrats would pay that price again.

In January the same arithmetic turns over. Republicans will hold 67 seats in the new House, more than the 51 needed to deny it a quorum, and whatever penalties against the minority of 2025 remain in force will bind the minority of 2027, which is the party that wrote them. How much remains depends on two things this paper has not yet confirmed: whether House Bill 18 was signed, and which fines the new House writes into its own rules. **A rule attaches to a position, and positions change hands.** The Fifteenth Court of Appeals showed the same thing in Section 1, from the judicial side.

---

## 6. Who voted, by faith

The observation behind this section came earlier in the same week: a religion is its people more than its doctrine. Doctrine can be revised for centuries while the gathering holds, and when the gathering stops, the religion stops with it; [[dont-found-anything]] traced the gap that religions grow from. An election is one of the few places those gathered people are counted all at once, and the exit poll counts them by faith.

The national exit poll reports each group's share of the electorate and how the group voted, which is enough to compute how much of the margin each group supplied: the share times the group's own margin. Protestants and other Christians were 48 percent of the governor's electorate and went 60 to 38 for Abbott, worth about 10.6 points to him. Voters with no religion were 21 percent and went 75 to 23 for Hinojosa, worth about 10.9 points to her ([NBC News, "Texas Governor"](https://www.nbcnews.com/politics/2026-elections/texas-governor-results)). **The unaffiliated canceled the Protestant lean almost exactly**, and the margin came from Catholics, who went 56 to 43 for Hinojosa and supplied about 2.5 points, and from voters of other faiths, who went 64 to 35 and supplied about 3.2.

<svg viewBox="0 0 760 330" width="100%" role="img" aria-label="Diverging bars of each religious group's net contribution to the governor's race margin, computed as share of the electorate times the group's margin. No religion, 10.9 points toward Hinojosa. Something else, 3.2. Catholic, 2.5. Protestant or other Christian, 10.6 toward Abbott." style="display:block;max-width:720px;margin:0 auto">
<text x="368" y="40" text-anchor="end" style="font-family:var(--font-body);font-size:11px;font-weight:400;letter-spacing:.08em;text-transform:uppercase" fill="var(--color-neutral-400)">toward Abbott</text>
<text x="392" y="40" text-anchor="start" style="font-family:var(--font-body);font-size:11px;font-weight:400;letter-spacing:.08em;text-transform:uppercase" fill="var(--color-neutral-400)">toward Hinojosa</text>
<rect x="380" y="70" width="283.9" height="28" rx="3" fill="#6f9ceb"/>
<text x="673.9" y="89" text-anchor="start" style="font-family:var(--font-body);font-size:14px;font-weight:500" fill="var(--color-text)">+10.9</text>
<text x="368" y="82" text-anchor="end" style="font-family:var(--font-body);font-size:12.5px;font-weight:400" fill="var(--color-text)">No religion</text>
<text x="368" y="98" text-anchor="end" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">21% of voters, Hinojosa 75, Abbott 23</text>
<rect x="380" y="122" width="82.9" height="28" rx="3" fill="#6f9ceb"/>
<text x="472.9" y="141" text-anchor="start" style="font-family:var(--font-body);font-size:14px;font-weight:500" fill="var(--color-text)">+3.2</text>
<text x="368" y="134" text-anchor="end" style="font-family:var(--font-body);font-size:12.5px;font-weight:400" fill="var(--color-text)">Something else</text>
<text x="368" y="150" text-anchor="end" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">11% of voters, Hinojosa 64, Abbott 35</text>
<rect x="380" y="174" width="64.2" height="28" rx="3" fill="#6f9ceb"/>
<text x="454.2" y="193" text-anchor="start" style="font-family:var(--font-body);font-size:14px;font-weight:500" fill="var(--color-text)">+2.5</text>
<text x="368" y="186" text-anchor="end" style="font-family:var(--font-body);font-size:12.5px;font-weight:400" fill="var(--color-text)">Catholic</text>
<text x="368" y="202" text-anchor="end" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">19% of voters, Hinojosa 56, Abbott 43</text>
<rect x="105.4" y="226" width="274.6" height="28" rx="3" fill="#e2766f"/>
<text x="95.4" y="245" text-anchor="end" style="font-family:var(--font-body);font-size:14px;font-weight:500" fill="var(--color-text)">-10.6</text>
<text x="392" y="238" text-anchor="start" style="font-family:var(--font-body);font-size:12.5px;font-weight:400" fill="var(--color-text)">Protestant or other Christian</text>
<text x="392" y="254" text-anchor="start" style="font-family:var(--font-body);font-size:11px;font-weight:400" fill="var(--color-neutral-500)">48% of voters, Hinojosa 38, Abbott 60</text>
<line x1="380" y1="56" x2="380" y2="272" stroke="var(--color-neutral-400)" stroke-width="1"/>
<text x="380" y="300" text-anchor="middle" style="font-family:var(--font-body);font-size:12px;font-weight:400" fill="var(--color-neutral-400)">The four groups sum to +6.0 toward Hinojosa. The counted margin was about +7.1.</text>
</svg>

*Figure 5. Each religious group's net contribution to the governor's race margin, computed as the group's share of the electorate times its margin, from preliminary exit poll figures. The four groups sum to about six points against a counted margin of about seven; the difference is rounding, the one percent of Jewish voters left out of the figure, and the poll's reweighting.*

Catholics leaned the same way in the Senate race, 58 to 40 for Talarico ([NBC News, "Texas Senate"](https://www.nbcnews.com/politics/2026-elections/texas-senate-results)), while Catholics nationally split almost evenly ([NBC News, "2026 Exit Polls"](https://www.nbcnews.com/politics/2026-elections/exit-polls)). Four cautions apply. The figures are preliminary and will be reweighted as the count is finalized. Subgroup numbers carry wider error than the toplines. A large share of Texas Catholics are Latino, so this cut cannot separate faith from ethnicity. And an exit poll records who voted which way, never why.

---

## 7. Hemp, the issue that crosses the aisle

Patrick made a near-total ban on hemp-derived THC his cause. When Abbott vetoed the ban, Patrick made clear he would keep fighting for it even if it cost him his office ([KUT](https://www.kut.org/politics/2026-10-30/texas-lieutenant-governor-race-hemp-cannabis-thc-election-2026)), and Abbott later ordered a ban on smokable hemp by executive order ([Texas Public Radio](https://www.tpr.org/government-politics/2026-10-30/democrats-ride-thc-ban-backlash-in-race-for-lieutenant-governor)). Goodwin campaigned in hemp shops and drew support from owners and customers who do not usually vote Democratic ([KUT](https://www.kut.org/politics/2026-10-30/texas-lieutenant-governor-race-hemp-cannabis-thc-election-2026)). She favors regulation over prohibition, with age limits, testing and labeling ([Texas Public Radio, *The Source*](https://www.tpr.org/podcast/the-source/2026-10-12/goodwin-challenges-patrick-on-schools-thc-and-data-centers)), and has proposed taxing hemp products to pay for health coverage for low-income Texans ([*High Times*](https://hightimes.com/news/the-midterms-were-very-good-for-legal-weed-heres-everything-that-changed/)).

The issue matters structurally because it is one of the few where the Senate gate might open. In a poll commissioned by the hemp industry, Republican primary voters opposed the ban 47 to 37 ([*San Antonio Current*](https://www.sacurrent.com/cannabis/poll-more-texas-gop-primary-voters-oppose-lt-gov-dan-patricks-hemp-ban-than-support-it-37718921/)), and on Tuesday Houston voters made misdemeanor marijuana possession the lowest enforcement priority for local police, 72 to 28 ([Marijuana Moment](https://www.marijuanamoment.net/houston-voters-approve-measure-to-reduce-marijuana-arrests-making-them-the-lowest-possible-enforcement-priority/)). A Republican senator can vote for a regulated hemp market without crossing the plurality of his own primary voters.

The federal definition is changing at the same time. Congress redefined hemp in 2025, and under the current schedule synthetic cannabinoids lose hemp status on November 12, while on December 11 a total-THC standard and a cap of 0.4 milligrams of THC per container take effect ([Vicente LLP](https://vicentellp.com/insights/federal-hemp-definition-change-delay/)). After that, most intoxicating hemp products fall outside the federal definition whatever Texas decides, and a state "regulated hemp market" loses its federal basis. The durable path becomes a state cannabis program, which is a statute that must pass all three gates, or a statewide vote, which in Texas means a constitutional amendment proposed by 100 House members and 21 senators. The Texas exit poll results reviewed for this paper include no question on hemp or marijuana, and the topline does not show the issue either. If Goodwin's hemp campaign won her votes the rest of the ticket lacked, she should have run ahead of it. Of the five Democrats who won the top statewide races, she finished fourth by margin: 6.1 points over Patrick, against Talarico's 12.1, Hinojosa's 7.1 and Johnson's 6.4, and ahead of Eckhardt's 5.2 ([Texas Secretary of State](https://electionresults.sos.state.tx.us/results.html)). A topline cannot separate an issue from a candidate, and Goodwin was a vastly outspent challenger against a long-serving incumbent ([*Texas Tribune*](https://www.yahoo.com/news/politics/articles/democrat-vikki-goodwin-declares-victory-045217937.html)), so the result does not show the issue did nothing; it shows that whatever the issue did is not visible at this resolution. Coverage the next morning listed THC regulation, with property tax relief and data center oversight, as the likeliest ground for bills both parties could pass ([Gainey](https://www.kut.org/politics/2026-11-05/texas-democrats-hinojosa-goodwyn-2027-legislature-policy-challenges)).

---

## 8. The list

Talarico's campaign raised more than $70 million after he entered the race in September 2025, including a record $30 million in the second quarter ([*Christian Post*](https://assets.christianpost.com/news/talarico-campaign-announces-record-30m-fundraising-haul.html)), and 97 percent of the donations were $100 or less ([KRLD](https://www.audacy.com/krld/news/local/james-talarico-raises-record-30-million-for-texas-senate-bid)). By April his donors numbered more than 540,000, spread across 246 of Texas's 254 counties ([KUT, "Talarico"](https://www.kut.org/politics/2026-04-15/austins-james-talarico-raises-record-breaking-27-million-in-first-quarter-for-u-s-senate-bid)). The money is spent. **The list is the asset**: half a million people who have each given at least once, reachable by one email from a sitting senator who can point them at other candidates.

Texas makes that unusually direct. It is one of at least eleven states with no limits on individual contributions to state candidates ([McGee](https://www.texastribune.org/?p=133735)), so the list can fund a 2028 state Senate race directly, with no super PAC in between. The same rule let eleven individuals and households give $1 million or more apiece to Abbott and Beto O'Rourke in 2022 ([*Dallas Morning News*, "No limits"](https://dallasnews.com/news/politics/2022/10/14/no-limits-the-11-individuals-households-who-gave-1m-to-texas-gov-abbott-orourke)), and Texas Republicans have relied on seven-figure checks from in-state donors for years. Democrats are entering a system the other side has long dominated.

The rules about that system have a history of their own. In 2025 the House passed a bill to cap contributions from out-of-state donors to Texas candidates, 118 to 21 ([*Dallas Morning News*, "Caps"](https://sportsday.dallasnews.com/news/politics/2025/05/14/bill-imposing-caps-on-out-of-state-campaign-contributions-passes-texas-house)). It was a priority of the state Republican Party ([McGee](https://www.texastribune.org/?p=133735)), Democrats including Rafael Anchía and Diego Bernal voted for it, and after the Senate referred it to its State Affairs committee in May 2025, no further action is recorded ([FastDemocracy](https://fastdemocracy.com/bill/tx/89/bills/TXB00076998)). With national money now flowing toward Texas Democrats, both parties' incentives on that bill have reversed. Republicans have new reasons to want it, and it cannot pass unless a Democratic House and a Democratic governor agree to cap money that now helps their side. Which Democrats still support it will show who held the position as principle.

---

## 9. Two diagnoses

Republicans have not agreed on what happened. Patrick conceded in a statement that read, "It was a fair election, and I accept the majority will of the voters," and pointed to affordability, gas prices, data centers and transmission lines ([*Chron*](https://www.chron.com/politics/article/texas-republicans-react-blue-wave-2026-22511533.php)). The state party's chair, D'rinda Randall, promised the party would "reflect honestly, learn from our setbacks, and come back stronger" ([*Houston Chronicle*, "Brutal loss"](https://www.houstonchronicle.com/news/houston-texas/trending/article/midterm-republicans-reaction-texas-abbott-paxton-22511689.php)), and its vice chair, David Covey, said voters had rejected the Republican status quo ([CNN](https://edition.cnn.com/2026/11/04/politics/texas-democrats-win-breakthrough-chased-for-decades)). Representative Chip Roy said the party had lacked a winning message ([*Houston Chronicle*, "Brutal loss"](https://www.houstonchronicle.com/news/houston-texas/trending/article/midterm-republicans-reaction-texas-abbott-paxton-22511689.php)).

Others read the same night the opposite way. Trump said Abbott lost because he had "become a RINO in the last six months" of his career ([*Laredo Morning Times*](https://www.lmtonline.com/news/article/texas-democrats-senate-governor-reaction-22512176.php)). Huffines blamed Abbott and Patrick and attacked "mushy middle" voters ([WBAP](https://www.wbap.com/2026/11/04/who-are-the-republicans-now-a-post-midterm-reckoning/)). *The Federalist* argued that the party's establishment had held its own base in contempt and that evangelical voters stayed home ([*The Federalist*](https://thefederalist.com/2026/11/04/tuesdays-blue-tsunami-proves-texas-problem-was-never-candidate-quality/)). Ron DeSantis called losing Texas an "extinction-level event" for the party ([*San Antonio Current*, "Blame game"](https://www.sacurrent.com/news/texas-news/texas-gop-plays-the-blame-game-after-tuesdays-historic-election-bloodbath/)). One measurement cuts across both readings: about two-thirds of voters in the Senate race told the AP's voter poll that Paxton lacked the character to serve ([PBS NewsHour, "Paxton"](https://www.pbs.org/newshour/politics/watch-republican-ken-paxton-speaks-after-losing-texas-senate-race)).

The two readings cannot both drive the party. One says Republicans lost by not being conservative enough; the other says voters rejected incumbents and the status quo. Whichever wins the internal argument will set what 2028 primary voters demand of Republican senators, and that is the variable behind Section 4. If the first reading wins, any deal with Goodwin gets more expensive for the senator who makes it. If the second wins, deals get cheaper. One early signal came the morning after, when State Senator Lois Kolkhorst called for unity ([*Houston Chronicle*, "Brutal loss"](https://www.houstonchronicle.com/news/houston-texas/trending/article/midterm-republicans-reaction-texas-abbott-paxton-22511689.php)). Another came from Huffines, who said it would be "almost impossible to win this state back" ([CNN](https://edition.cnn.com/2026/11/04/politics/texas-democrats-win-breakthrough-chased-for-decades)). A senator who believes that has every reason to make arrangements now.

---

## 10. What will change this paper

Version 1.1, written the day after version 1.0, made four changes. A district-by-district tally of the Secretary of State's returns corrected the House from 78 Democratic seats to 83, which moves Figures 1 and 4 and the override arithmetic in Section 3. Section 2 added the Senate Republicans' first post-election meeting and the calendar that opens the session under the outgoing lieutenant governor. Section 5, on the window before January, is new. Section 7 added Goodwin's statewide margin.

This is a dated picture of a structure with dated events scheduled against it, and each event will revise a number above. The state canvass will turn the unofficial House, Senate and court counts into official ones, and until it does, the 78 to 72 House and every judicial result here are provisional. On November 12 and December 11 the federal hemp redefinition takes effect in two stages, and Section 7 will need to describe the market that remains. When the legislature convenes in January, the Senate will adopt its rules, and that vote will settle Sections 2 and 4: whether the lieutenant governor keeps her powers, what the floor threshold becomes, and whether anyone traded for anything. The governor will set special elections for the seats Johnson and Eckhardt leave, and those dates decide whether the rules vote happens with 29 senators or 31. The 2028 elections will test the holdover cohort, the 2030 elections will choose most of the Legislative Redistricting Board, and the 2031 session will draw the maps or fail to. Version 1.1 added two dates of its own: whatever Abbott decides about a special session before January 19, and the House's election of a speaker when it convenes. Each revision will show in this paper's commit history, which is the reason to write it here.

---

## 11. The short version

On November 3 Texas changed shape as well as party. One veto player became three, a Democratic House, a Republican Senate and a Democratic governor, and no party holds the two-thirds needed to force any of them, so every law in 2027 will need members of both parties. The lieutenant governor holds only the power nineteen Republican senators leave her in a January rules vote; Goodwin needs four or five of them to keep it, and the one bargain that can buy them is a bargain written into the rules themselves. Until January the outgoing Republican majority still holds both chambers and the governor's office, and the only brake on a lame-duck session is a quorum Democrats can deny, at a price the 2025 penalties set. The congressional map Texas drew first, in 2025, now stands until 2031 because neither party can move it alone, and the legislature's own maps after that may be drawn by statewide officials elected in 2030. The relief in the first message of this paper was about procedure: votes cast, counted under rules set beforehand, with the count deciding who governs. That held. What it produced is a government that can act only by agreement.

---

## Works Cited

- "Abbott Appoints First Judges to New Appeals Court for Cases Involving State Government, Businesses." [*KSAT*](https://www.ksat.com/news/texas/2024/06/11/abbott-appoints-first-judges-to-new-appeals-court-for-cases-involving-state-government-businesses/), 11 June 2024.
- "Austin's James Talarico Raises Record-Breaking $27 Million in First Quarter for U.S. Senate Bid." [*KUT News*](https://www.kut.org/politics/2026-04-15/austins-james-talarico-raises-record-breaking-27-million-in-first-quarter-for-u-s-senate-bid), 15 Apr. 2026.
- "Bill Imposing Caps on Out-of-State Campaign Contributions Passes Texas House." [*The Dallas Morning News*](https://sportsday.dallasnews.com/news/politics/2025/05/14/bill-imposing-caps-on-out-of-state-campaign-contributions-passes-texas-house), 14 May 2025.
- "Blue Texas: Lone Star State Ends Decades of GOP Dominance." [*Truthdig*](https://www.truthdig.com/articles/blue-texas-lone-star-state-ends-decades-of-gop-dominance/), 4 Nov. 2026.
- "The Brief: Nov. 10, 2010." [*The Texas Tribune*](https://api.texastribune.org/2010/11/10/the-brief-top-texas-news-for-nov-10-2010/), 10 Nov. 2010.
- "'Brutal Loss': Texas Republicans Express Fear, Frustration as Texas Turns Blue in Huge Upset." [*Houston Chronicle*](https://www.houstonchronicle.com/news/houston-texas/trending/article/midterm-republicans-reaction-texas-abbott-paxton-22511689.php), 4 Nov. 2026.
- Burka, Paul. ["Out of Control."](https://www.texasmonthly.com/politics/out-of-control-2/) *Texas Monthly*, Mar. 1997.
- *The Burnet Bulletin*. [Letter to the editor on the Senate floor rule.](https://www.burnetbulletin.com/node/3686) 2021.
- "Can Texas Senate GOP Strip a Lt. Gov. Vikki Goodwin of Power? And More." [*Progress Texas*](https://progresstexas.substack.com/p/can-texas-senate-gop-strip-a-lt-gov), Oct. 2026.
- "The Changing Landscape for Business Disputes in Texas: Justices Named to Inaugural Business Dispute Appellate Court." [*Jones Day*](https://www.jonesday.com/en/insights/2024/06/the-changing-landscape-for-business-disputes-in-texas-justices-named-to-inaugural-business-dispute-appellate-court), June 2024.
- "A Democrat Flipped a Red State Senate District. What Does It Mean for the Midterms?" [*The Shorthorn*](https://www.theshorthorn.com/news/a-democrat-flipped-a-red-state-senate-district-what-does-it-mean-for-the-midterms/article_0b5917eb-52ab-42c5-a196-382f5dcd5de0.html), Feb. 2026.
- "Democrat Taylor Rehmet Flips Red Texas State Senate Seat in Stunning Upset." [*Washington Examiner*](https://www.washingtonexaminer.com/?p=4442237), Feb. 2026.
- "Democrat Vikki Goodwin Declares Victory over Dan Patrick to Become Texas Lieutenant Governor." [*The Texas Tribune*, via Yahoo News](https://www.yahoo.com/news/politics/articles/democrat-vikki-goodwin-declares-victory-045217937.html), 4 Nov. 2026.
- "Democrat Vikki Goodwin Upsets Incumbent Dan Patrick in Texas Lieutenant Governor Race." [*CBS Texas*](https://www.cbsnews.com/texas/news/texas-lieutenant-governor-election-results-2026/), 4 Nov. 2026.
- "Democrat Vikki Goodwin Wins Lieutenant Governorship, Legislature Remains Uncalled." [*The Daily Texan*](https://thedailytexan.com/2026/11/04/democrat-vikki-goodwin-wins-lieutenant-governorship-legislature-remains-uncalled/), 4 Nov. 2026.
- "Democrats Ride THC Ban Backlash in Race for Lieutenant Governor." [*KUT News*](https://www.kut.org/politics/2026-10-30/texas-lieutenant-governor-race-hemp-cannabis-thc-election-2026), 30 Oct. 2026.
- "Democrats Ride THC Ban Backlash in Race for Lieutenant Governor." [*Texas Public Radio*](https://www.tpr.org/government-politics/2026-10-30/democrats-ride-thc-ban-backlash-in-race-for-lieutenant-governor), 30 Oct. 2026.
- Exter, Monty. ["Special Election Results in a Dramatic Party Flip in Texas Senate District 9."](https://teachthevote.atpe.org/Our-Blog/Latest-Posts/Special-election-results-dramatic-party-flip-SD-9) *Teach the Vote*, ATPE, 2 Feb. 2026.
- "Federal Hemp Update: Definition Change Delayed to December 11." [*Vicente LLP*](https://vicentellp.com/insights/federal-hemp-definition-change-delay/), 2026.
- "15th COA Bill Nears Enactment." [*The Texas Lawbook*](https://texaslawbook.net/15th-coa-bill-nears-enactment/), 2023.
- "Five Major Takeaways from Texas' 2026 Midterm Election Results." [*FOX 4 News*](https://www.fox4news.com/news/five-major-takeaways-from-texas-2026-midterm-election-results), 4 Nov. 2026.
- Gainey, Blaise. ["Texas Democrats Want to Reshape Schools, Healthcare and Taxes. Can They Deliver?"](https://www.kut.org/politics/2026-11-05/texas-democrats-hinojosa-goodwyn-2027-legislature-policy-challenges) *KUT News*, The Texas Newsroom, 5 Nov. 2026.
- "Goodwin Challenges Patrick on Schools, THC and Data Centers." [*The Source*, Texas Public Radio](https://www.tpr.org/podcast/the-source/2026-10-12/goodwin-challenges-patrick-on-schools-thc-and-data-centers), 12 Oct. 2026.
- "HB 3592, 89th Legislature." [*FastDemocracy*](https://fastdemocracy.com/bill/tx/89/bills/TXB00076998), accessed 4 Nov. 2026.
- "Houston Voters Approve Measure to Reduce Marijuana Arrests, Making Them the 'Lowest Possible Enforcement Priority.'" [*Marijuana Moment*](https://www.marijuanamoment.net/houston-voters-approve-measure-to-reduce-marijuana-arrests-making-them-the-lowest-possible-enforcement-priority/), 3 Nov. 2026.
- "James Talarico Raises Record $30 Million for Texas Senate Bid." [*KRLD News Radio*, Audacy](https://www.audacy.com/krld/news/local/james-talarico-raises-record-30-million-for-texas-senate-bid), July 2026.
- Jones, Amelia. ["Republican Lawmaker Suggests Abbott Strip Governor's Emergency Powers before Hinojosa Takes Office."](https://www.fox4news.com/news/republican-lawmaker-suggests-abbott-strip-governors-emergency-powers-before-hinojosa-takes-office) *FOX 4 News*, 4 Nov. 2026.
- "Lt. Gov. Dan Patrick Aims to Bolster GOP Strength by Redefining Supermajority." [*The Texan*](https://thetexan.news/lt-gov-dan-patrick-aims-to-bolster-gop-strength-by-redefining-supermajority/), 2020.
- "Massie's Loss Leaves No Doubt about Trump's Power over the GOP." [*PBS NewsHour*](https://www.pbs.org/newshour/politics/massies-loss-leaves-no-doubt-about-trumps-power-over-the-gop), May 2026.
- McGee, Kate. ["Bill to Limit Out-of-State Donations to Texas Candidates Gets House Approval."](https://www.texastribune.org/?p=133735) *The Texas Tribune*, 14 May 2025.
- "Meet the Candidates Running for the Texas Legislature in 2026." [*San Antonio Report*](https://sanantonioreport.org/meet-the-candidates-running-for-the-texas-legislature-in-2026/), 2026.
- "The Midterms Were Very Good for Legal Weed. Here's Everything That Changed." [*High Times*](https://hightimes.com/news/the-midterms-were-very-good-for-legal-weed-heres-everything-that-changed/), 4 Nov. 2026.
- Mitchell, Isaiah. ["Regime Change: Democrats Take the Texas House, Ending Republicans' Two-Decade Reign."](https://thetexan.news/elections/2026/regime-change-democrats-take-the-texas-house-ending-republicans-two-decade-reign/article_8633636a-c402-4903-85b3-aae93edcd393.html) *The Texan*, 4 Nov. 2026.
- "No Limits: The 11 Individuals, Households Who Gave $1M to Texas Gov. Abbott, O'Rourke." [*The Dallas Morning News*](https://dallasnews.com/news/politics/2022/10/14/no-limits-the-11-individuals-households-who-gave-1m-to-texas-gov-abbott-orourke), 14 Oct. 2022.
- "Poll: More Texas GOP Primary Voters Oppose Lt. Gov. Dan Patrick's Hemp Ban Than Support It." [*San Antonio Current*](https://www.sacurrent.com/cannabis/poll-more-texas-gop-primary-voters-oppose-lt-gov-dan-patricks-hemp-ban-than-support-it-37718921/), 2025.
- Ramsey, Ross. ["Analysis: What Patrick Proposes Didn't Work for Bullock."](https://www.texastribune.org/2014/04/25/analysis-what-patrick-proposes-didnt-work-bullock/) *The Texas Tribune*, 25 Apr. 2014.
- Samuels, Alex. ["Texas Senate Changes Rules So Republicans Can Still Bring Bills to Floor Without Democratic Support."](https://www.texastribune.org/2021/01/13/texas-senate-republicans/) *The Texas Tribune*, 13 Jan. 2021.
- "Sarah Eckhardt Speaks at LBJ School, Discusses Race for Comptroller." [*The Daily Texan*](https://thedailytexan.com/2026/03/06/sarah-eckhardt-speaks-at-lbj-school-discusses-race-for-comptroller/), 6 Mar. 2026.
- Schelling, Thomas C. [*The Strategy of Conflict*](https://www.porchlightbooks.com/products/strategy-of-conflict-thomas-c-schelling-9780674840317). Harvard University Press, 1960. *Porchlight Book Company* (1981 edition with a new preface).
- Schneider, Andrew. [Report on the legislature's passage of House Bill 18.](https://www.tpr.org/2025-09-03/texas-legislature-passes-bill-to-punish-quorum-breaks) *Texas Public Radio*, 3 Sept. 2025.
- Schneider, Andrew. ["Texas House Committee Slaps Democrats with Nearly $422K in Penalties for 2025 Quorum Break."](https://www.kut.org/texas/2026-04-11/texas-house-committee-slaps-democrats-with-nearly-422k-in-penalties-for-2025-quorum-break) *KUT News*, 11 Apr. 2026.
- "See 2026 Texas Midterm Election Results from Key Local Races." [*CBS Texas*](https://cbsnews.com/texas/live-updates/texas-midterm-elections-2026), 4 Nov. 2026.
- Senate Research Center. ["Bill Analysis, S.J.R. 41."](https://capitol.texas.gov/tlodocs/75R/analysis/html/SJ00041I.htm) 75th Texas Legislature, 1997.
- Serrano, Alejandro. ["GOP State Senators Could Emerge as Last Protectors of Party Power in Texas."](https://www.yahoo.com/news/politics/articles/gop-state-senators-could-emerge-110000433.html) *The Texas Tribune*, via Yahoo News, 5 Nov. 2026.
- "Supreme Court Reinforces Ruling Allowing Redrawn Texas Congressional Map." [*FOX 29*](https://www.fox29.com/election/supreme-court-reinforces-ruling-allowing-redrawn-texas-congressional-map), 27 Apr. 2026.
- "Talarico Campaign Receives Record $30M Fundraising Haul; Paxton Posts $9M Quarter." [*The Christian Post*](https://assets.christianpost.com/news/talarico-campaign-announces-record-30m-fundraising-haul.html), July 2026.
- "Texas." [*All About Redistricting*, Loyola Law School](https://redistricting.lls.edu/?p=123), accessed 4 Nov. 2026.
- "Texas Court's Wider Authority Invites Shopping, Deluge." [*Bloomberg Law*](https://news.bloomberglaw.com/litigation/texas-courts-unexpected-jurisdiction-invites-shopping-deluge), 2025.
- "Texas Democrats Pull Off the Breakthrough They've Chased for Decades." [*CNN*](https://edition.cnn.com/2026/11/04/politics/texas-democrats-win-breakthrough-chased-for-decades), 4 Nov. 2026.
- "Texas GOP Plays the Blame Game after Tuesday's Historic Election Bloodbath." [*San Antonio Current*](https://www.sacurrent.com/news/texas-news/texas-gop-plays-the-blame-game-after-tuesdays-historic-election-bloodbath/), 4 Nov. 2026.
- "Texas Governor Election Results 2026: Gina Hinojosa Wins." [*MultiState*](https://www.multistate.us/elections/governor-race/texas-2026), 2026.
- "Texas Governor Results 2026." [*NBC News*](https://www.nbcnews.com/politics/2026-elections/texas-governor-results), 2026.
- "Texas Officials React after Democrats Record Sweep in National Races." [*Laredo Morning Times*](https://www.lmtonline.com/news/article/texas-democrats-senate-governor-reaction-22512176.php), 4 Nov. 2026.
- *Texas Policy Research*. [Analysis of Texas Senate committee chairmanships by session.](https://www.texaspolicyresearch.com/?p=1069) Accessed 4 Nov. 2026.
- "Texas Republicans Turn on Each Other after Historic Blue Wave." [*Chron*](https://www.chron.com/politics/article/texas-republicans-react-blue-wave-2026-22511533.php), 4 Nov. 2026.
- Texas Secretary of State. ["Election Results: Tuesday, November 3, 2026."](https://electionresults.sos.state.tx.us/results.html) Unofficial returns, updated 4 Nov. 2026.
- "Texas Senate Results 2026." [*NBC News*](https://www.nbcnews.com/politics/2026-elections/texas-senate-results), 2026.
- *The Texas Tribune*. [Analysis of the Senate two-thirds rule.](https://www.texastribune.org/?p=75848) 2010.
- Tsebelis, George. [*Veto Players: How Political Institutions Work*](https://press.princeton.edu/node/61737). Princeton University Press, 2002.
- "Tuesday's Blue Tsunami Proves Texas' Problem Was Never 'Candidate Quality.'" [*The Federalist*](https://thefederalist.com/2026/11/04/tuesdays-blue-tsunami-proves-texas-problem-was-never-candidate-quality/), 4 Nov. 2026.
- "2026 Exit Polls." [*NBC News*](https://www.nbcnews.com/politics/2026-elections/exit-polls), 2026.
- "U.S. Rep. Thomas Massie Loses Kentucky GOP Primary in Another Victory for Trump." [*Lawrence Journal-World*](https://www2.ljworld.com/news/national/2026/may/19/us-rep-thomas-massie-loses-kentucky-gop-primary-in-another-victory-for-trump/), 19 May 2026.
- "U.S. Supreme Court Upholds Texas' Redrawn Congressional Map." [*San Angelo LIVE!*](https://sanangelolive.com/news/politics/2026-04-27/us-supreme-court-upholds-texas-redrawn-congressional-map), 27 Apr. 2026.
- "Vikki Goodwin Defeats Dan Patrick in Texas Lieutenant Governor Race." [*Texas Public Radio*](https://www.tpr.org/2026-11-03/vikki-goodwin-defeats-dan-patrick-in-texas-lieutenant-governor-race), 3 Nov. 2026.
- "Vikki Goodwin to Become First Woman in Texas History to Hold Lt. Gov. Office." [*KXAN*](https://www.kxan.com/news/your-local-election-hq/goodwin-to-become-first-woman-in-texas-history-to-hold-lt-gov-office/), 4 Nov. 2026.
- "WATCH: Republican Ken Paxton Speaks after Losing Texas Senate Race." [*PBS NewsHour*](https://www.pbs.org/newshour/politics/watch-republican-ken-paxton-speaks-after-losing-texas-senate-race), 4 Nov. 2026.
- "What a Democrat-Held House, GOP Senate Could Mean for Texas' 2027 Legislative Session." [*Nexstar*, via Yahoo News](https://www.yahoo.com/news/politics/articles/democrat-held-house-gop-senate-171602643.html), 4 Nov. 2026.
- "What Happens to California's Redistricting after Texas' Congressional Maps Were Struck Down in Court?" [*CBS News*](https://www.cbsnews.com/news/texas-redistricting-court-ruling-california-prop-50), Nov. 2025.
- "Who Are the Republicans Now? A Post-Midterm Reckoning." [*WBAP*](https://www.wbap.com/2026/11/04/who-are-the-republicans-now-a-post-midterm-reckoning/), 4 Nov. 2026.

---

## Contribution

**Human:** the questions that set the session's direction across election week: whether Americans stayed out of the streets because they trusted the vote; the observation that protest no longer moved Republican officeholders, with Thomas Massie as the exception; the idea of states holding a second, defensive map in reserve; the challenge to the machine's evenhandedness, which named its false balance as part of the problem; the compiled Secretary of State returns for the House, Senate and courts; the question of whether Goodwin could trade chairmanships for her powers; the reading that Republican senators face real headwinds and that Democrats now have national funding they lacked before Talarico; the observation that a religion is its people, the edges rather than the vertices; the call for state-house visuals; the decision that this belongs in paperz as a living document; and, the next day, the pointer back to the Secretary of State's results table that produced version 1.1.

**Machine:** research and verification across more than fifty sources; the veto-player framing; the rules-vote arithmetic and its vacancy cases; the reading of the floor threshold's history; the religious decomposition of the governor's race; the Schelling argument for writing chairs into the rules; the five figures; and drafting under the human's prose-craft rules; in version 1.1, the district-by-district House tally, the section on the window before January, and the margin comparison in Section 7.

**Neither, exactly:** two corrections shaped the paper before it was written, and they ran in opposite directions. Partway through the session the machine had described mid-decade redistricting as symmetric escalation, and the human said its neutrality felt like part of the problem. The machine agreed the description had dropped a fact, the order in which the states moved, and committed to staying neutral between parties without staying neutral between keeping rules and breaking them; Section 3 says who moved first because of that exchange. The second correction went the other way, and then partly back. The seat breakdown the human brought in listed twenty-one flipped House districts beside a stated sixteen flips and a total of 78, and it labeled District 9 a November flip. The cross-check caught both problems, and version 1.0 resolved the first one the wrong way, keeping the 78. Version 1.1 tallied all 150 districts from the Secretary of State's table. The human's list was right in twenty of its twenty-one districts, naming District 26, which Republicans held by 134 votes, where District 118 belonged, and the House is 83 to 67. Each side caught an error the other had let through, the machine added one of its own while fixing them, and the commit history is where that stays visible.

*Donated to the commons.*
