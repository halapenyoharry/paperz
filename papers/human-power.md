---
type: zpaper
slug: human-power
title: "Human power and flywheels"
subtitle: "How much energy one body produces in a lifetime, and why a spinning wheel breaks or leaks before it can hold it"
version: 1.0
date: 2026-11-28
audience: anyone curious how much mechanical work a human body can generate, what thermal fuels it equals, and why storing decades of pedaling in one flywheel runs into two hard physical walls
license: CC0-1.0
tags: [thermodynamics, mechanics, energy-storage, flywheels, human-power, cognitive-budget, systems-topology, human-ai-collaboration]
lineage: [classical-mechanics, exercise-physiology, aerospace-energy-storage, topological-accounting]
links: ["[[the-twenty-watt-watch]]", "[[the-smoke-loop]]", "[[the-contracted-edge]]"]
summary: "Pedaling at 100 watts for 12 hours a day over 40 years produces 63.07 gigajoules (17,520 kWh), roughly equal to 10.5 barrels of crude oil or 497 gallons of gasoline. Storing all of that work inside a spinning flywheel runs into two hard constraints: centrifugal hoop stress depends strictly on material specific strength (which shatters a 1,000 kg, 2 m carbon wheel spun to 50,000 RPM at 58 times its tensile limit), and even a 0.1 percent per hour standby leak caps the steady-state charge at 50 kilowatt-hours within four months."
references:
  - "Bolund, Björn, Hans Bernhoff, and Mats Leijon. 'Flywheel energy and power storage systems.' Renewable and Sustainable Energy Reviews, vol. 11, no. 2, 2007, pp. 235-258."
  - "Dever, Timothy P., et al. Assessment of Technologies for Noncryogenic Hybrid Electric Propulsion. NASA Glenn Research Center, Jan. 2015."
  - "Genta, Giancarlo. Kinetic Energy Storage: Theory and Practice of Advanced Flywheel Systems. Butterworth-Heinemann, 1985."
  - "Jensen, Ralph H., and Timothy P. Dever. G2 Flywheel Module Design. NASA Glenn Research Center, Aug. 2006."
  - "Toray Composite Materials America. TORAYCA T1000G Carbon Fiber Data Sheet. TorayCMA, 2024."
  - "U.S. Energy Information Administration. 'Energy Units and Calculators Explained.' EIA, 2026."
  - "Wilkie, D. R. 'Man as a Source of Mechanical Power.' Ergonomics, vol. 3, no. 1, 1960, pp. 1-8."
  - "Wilson, David Gordon, and Theodor Schmidt. Bicycling Science. 4th ed., The MIT Press, 2020."
---

# Human power and flywheels

## How much energy one body produces in a lifetime, and why a spinning wheel breaks or leaks before it can hold it

---

<svg data-hp-toy="1" data-pp-not-text="true" viewBox="0 0 820 468" width="100%" role="img" aria-label="Interactive flywheel simulator comparing energy storage, hoop stress, and rotor burst limits across materials, spin speed, and rotor mass" style="display:block;max-width:820px;margin:0 auto;user-select:none;-webkit-user-select:none">
  <defs>
    <clipPath id="hp-chart-clip"><rect x="456" y="106" width="324" height="110" rx="4"/></clipPath>
  </defs>
  <g style="font-family:var(--font-body);font-size:11.5px;font-variant-numeric:tabular-nums" fill="var(--color-text)">
    <text x="24" y="24" style="font-size:12.5px;font-weight:500">Flywheel rotor (r = 2 m solid disk)</text>
    <text x="436" y="24" style="font-size:12.5px;font-weight:500">Pick material, speed, and mass</text>
    <g data-hp="playbtn" role="button" tabindex="0" aria-label="Play or pause rotor spin" style="cursor:pointer">
      <rect x="740" y="8" width="56" height="22" rx="11" fill="var(--color-surface)" stroke="var(--color-accent)" stroke-width="1.2"/>
      <text data-hp="playlbl" x="768" y="22.5" text-anchor="middle" fill="var(--color-accent-300)" style="font-size:11px;font-weight:500">Pause</text>
    </g>
    <rect x="24" y="42" width="394" height="334" rx="8" fill="var(--color-surface)" stroke="var(--color-divider)"/>
    <rect x="436" y="42" width="360" height="334" rx="8" fill="var(--color-surface)" stroke="var(--color-divider)"/>
    <circle data-hp="glow" cx="221" cy="184" r="94" fill="none" stroke="var(--color-accent-300)" stroke-width="7" opacity="0.28"/>
    <g data-hp="wheel" opacity="1">
      <circle data-hp="rim" cx="221" cy="184" r="82" fill="var(--color-bg)" stroke="var(--color-accent)" stroke-width="10"/>
      <circle cx="221" cy="184" r="74" fill="none" stroke="var(--color-divider)" stroke-width="1"/>
      <line x1="221" y1="184" x2="299.0" y2="184.0" stroke="var(--color-accent-300)" stroke-width="2" opacity="0.72"/>
      <line x1="221" y1="184" x2="260.0" y2="251.5" stroke="var(--color-accent-300)" stroke-width="2" opacity="0.72"/>
      <line x1="221" y1="184" x2="182.0" y2="251.5" stroke="var(--color-accent-300)" stroke-width="2" opacity="0.72"/>
      <line x1="221" y1="184" x2="143.0" y2="184.0" stroke="var(--color-accent-300)" stroke-width="2" opacity="0.72"/>
      <line x1="221" y1="184" x2="182.0" y2="116.5" stroke="var(--color-accent-300)" stroke-width="2" opacity="0.72"/>
      <line x1="221" y1="184" x2="260.0" y2="116.5" stroke="var(--color-accent-300)" stroke-width="2" opacity="0.72"/>
      <circle cx="221" cy="184" r="14" fill="var(--color-surface)" stroke="var(--color-accent-300)" stroke-width="2"/>
      <circle cx="221" cy="184" r="4.5" fill="var(--color-accent-200)"/>
    </g>
    <g data-hp="shatter" opacity="0" style="pointer-events:none">
      <path d="M 300.7,190.4 A 80 80 0 0 1 266.4,249.9 L 250.5,226.8 A 52 52 0 0 0 272.8,188.2 Z" transform="translate(22.5,13.0) rotate(-9 221 184)" fill="var(--color-surface)" stroke="#e05252" stroke-width="2"/>
      <path d="M 255.3,256.3 A 80 80 0 0 1 186.7,256.3 L 198.7,231.0 A 52 52 0 0 0 243.3,231.0 Z" transform="translate(0.0,26.0) rotate(9 221 184)" fill="var(--color-surface)" stroke="#e05252" stroke-width="2"/>
      <path d="M 175.6,249.9 A 80 80 0 0 1 141.3,190.4 L 169.2,188.2 A 52 52 0 0 0 191.5,226.8 Z" transform="translate(-22.5,13.0) rotate(-9 221 184)" fill="var(--color-surface)" stroke="#e05252" stroke-width="2"/>
      <path d="M 141.3,177.6 A 80 80 0 0 1 175.6,118.1 L 191.5,141.2 A 52 52 0 0 0 169.2,179.8 Z" transform="translate(-22.5,-13.0) rotate(9 221 184)" fill="var(--color-surface)" stroke="#e05252" stroke-width="2"/>
      <path d="M 186.7,111.7 A 80 80 0 0 1 255.3,111.7 L 243.3,137.0 A 52 52 0 0 0 198.7,137.0 Z" transform="translate(-0.0,-26.0) rotate(-9 221 184)" fill="var(--color-surface)" stroke="#e05252" stroke-width="2"/>
      <path d="M 266.4,118.1 A 80 80 0 0 1 300.7,177.6 L 272.8,179.8 A 52 52 0 0 0 250.5,141.2 Z" transform="translate(22.5,-13.0) rotate(9 221 184)" fill="var(--color-surface)" stroke="#e05252" stroke-width="2"/>
    </g>
    <g data-hp="burstbadge" opacity="0" style="pointer-events:none">
      <rect x="131" y="156" width="180" height="56" rx="8" fill="var(--color-bg)" stroke="#e05252" stroke-width="1.8"/>
      <text x="221" y="180" text-anchor="middle" fill="#e05252" style="font-size:14px;font-weight:600;letter-spacing:.04em">ROTOR BURST</text>
      <text data-hp="burstsub" x="221" y="198" text-anchor="middle" fill="var(--color-neutral-300)" style="font-size:11px">58.0x burst limit</text>
    </g>
    <line x1="40" y1="296" x2="402" y2="296" stroke="var(--color-divider)" stroke-width="1"/>
    <text x="42" y="316" fill="var(--color-neutral-400)" style="font-size:10.5px">Rim speed</text>
    <text data-hp="speedval" x="42" y="332" fill="var(--color-text)" style="font-size:12px;font-weight:500">942 m/s (M 2.7)</text>
    <text x="226" y="316" fill="var(--color-neutral-400)" style="font-size:10.5px">Hoop stress (thin rim ceiling)</text>
    <text data-hp="stressval" x="226" y="332" fill="var(--color-accent-300)" style="font-size:12px;font-weight:500">1403 / 3000 MPa (47%)</text>
    <text x="42" y="352" fill="var(--color-neutral-400)" style="font-size:10.5px">Stored energy</text>
    <text data-hp="energyval" x="42" y="368" fill="var(--color-text)" style="font-size:12px;font-weight:500">222.0 MJ (61.7 kWh)</text>
    <text x="226" y="352" fill="var(--color-neutral-400)" style="font-size:10.5px">At 100 W x 12 h/day</text>
    <text data-hp="chargeval" x="226" y="368" fill="#e6a23c" style="font-size:12px;font-weight:500">51 d pedal (>50 kWh leak cap)</text>
    <g data-hp-mat="0" role="button" tabindex="0" aria-pressed="false" style="cursor:pointer">
      <rect x="454" y="56" width="76" height="28" rx="6" fill="var(--color-bg)" stroke="var(--color-divider)" stroke-width="1.2"/>
      <text x="492" y="74" text-anchor="middle" fill="var(--color-neutral-400)" style="font-size:11px;font-weight:500">Steel</text>
    </g>
    <g data-hp-mat="1" role="button" tabindex="0" aria-pressed="false" style="cursor:pointer">
      <rect x="536" y="56" width="80" height="28" rx="6" fill="var(--color-bg)" stroke="var(--color-divider)" stroke-width="1.2"/>
      <text x="576" y="74" text-anchor="middle" fill="var(--color-neutral-400)" style="font-size:11px;font-weight:500">Titanium</text>
    </g>
    <g data-hp-mat="2" role="button" tabindex="0" aria-pressed="true" style="cursor:pointer">
      <rect x="622" y="56" width="78" height="28" rx="6" fill="var(--color-accent)" fill-opacity="0.2" stroke="var(--color-accent)" stroke-width="1.2"/>
      <text x="661" y="74" text-anchor="middle" fill="var(--color-accent-200)" style="font-size:11px;font-weight:500">Carbon</text>
    </g>
    <g data-hp-mat="3" role="button" tabindex="0" aria-pressed="false" style="cursor:pointer">
      <rect x="706" y="56" width="74" height="28" rx="6" fill="var(--color-bg)" stroke="var(--color-divider)" stroke-width="1.2"/>
      <text x="743" y="74" text-anchor="middle" fill="var(--color-neutral-400)" style="font-size:11px;font-weight:500">Bare fiber</text>
    </g>
    <text x="456" y="101" fill="var(--color-neutral-400)" style="font-size:10.5px">Centrifugal hoop stress σ = ρ(ωr)² vs. burst ceiling</text>
    <rect x="456" y="106" width="324" height="110" rx="5" fill="var(--color-bg)" stroke="var(--color-divider)"/>
    <line data-hp="burstline" x1="460" y1="143.0" x2="776" y2="143.0" stroke="#e05252" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.85"/>
    <text x="466" y="139.0" fill="#e05252" style="font-size:9.8px">Burst ceiling (100% tensile limit)</text>
    <line data-hp="burstrpmline" x1="667.9" y1="108" x2="667.9" y2="214" stroke="#e05252" stroke-width="1" stroke-dasharray="2 3" opacity="0.55"/>
    <text data-hp="burstrpmlbl" x="672.9" y="206" fill="#e05252" style="font-size:9.8px">burst 6,579 RPM</text>
    <g clip-path="url(#hp-chart-clip)">
      <path data-hp="curve" d="M 460.0,212.0 L 466.3,211.9 L 472.6,211.7 L 479.0,211.4 L 485.3,211.0 L 491.6,210.4 L 497.9,209.7 L 504.2,208.9 L 510.6,207.9 L 516.9,206.8 L 523.2,205.6 L 529.5,204.3 L 535.8,202.8 L 542.2,201.2 L 548.5,199.5 L 554.8,197.7 L 561.1,195.7 L 567.4,193.6 L 573.8,191.4 L 580.1,189.0 L 586.4,186.5 L 592.7,183.9 L 599.0,181.2 L 605.4,178.3 L 611.7,175.3 L 618.0,172.2 L 624.3,168.9 L 630.6,165.5 L 637.0,162.0 L 643.3,158.4 L 649.6,154.6 L 655.9,150.8 L 662.2,146.7 L 668.6,142.6 L 674.9,138.3 L 681.2,133.9 L 687.5,129.4 L 693.8,124.8 L 700.2,120.0 L 706.5,115.1 L 712.8,112.0 L 719.1,112.0 L 725.4,112.0 L 731.8,112.0 L 738.1,112.0 L 744.4,112.0 L 750.7,112.0 L 757.0,112.0 L 763.4,112.0 L 769.7,112.0 L 776.0,112.0" fill="none" stroke="var(--color-accent)" stroke-width="2"/>
      <circle data-hp="chartdot" cx="602.2" cy="179.7" r="4.5" fill="var(--color-accent-200)" stroke="var(--color-accent)" stroke-width="1.8"/>
    </g>
    <text x="458" y="242" fill="var(--color-neutral-300)" style="font-size:11px;font-weight:500">Spin speed</text>
    <text data-hp="rpmval" x="776" y="242" text-anchor="end" fill="var(--color-accent-300)" style="font-size:11px;font-weight:500">4,500 RPM</text>
    <rect x="462" y="253" width="312" height="6" rx="3" fill="var(--color-bg)" stroke="var(--color-divider)"/>
    <rect data-hp="rpmfill" x="462" y="253" width="140.4" height="6" rx="3" fill="var(--color-accent)"/>
    <circle data-hp="rpmknob" cx="602.4" cy="256" r="7.5" fill="var(--color-bg)" stroke="var(--color-accent)" stroke-width="2.2"/>
    <rect data-hp="rpmhit" x="454" y="243" width="328" height="26" rx="4" fill="transparent" role="slider" tabindex="0" aria-label="Spin speed in RPM" aria-valuemin="0" aria-valuemax="10000" aria-valuenow="4500" style="cursor:ew-resize;touch-action:none;outline:none"/>
    <text x="458" y="294" fill="var(--color-neutral-300)" style="font-size:11px;font-weight:500">Rotor mass</text>
    <text data-hp="massval" x="776" y="294" text-anchor="end" fill="var(--color-accent-300)" style="font-size:11px;font-weight:500">1.0 t</text>
    <rect x="462" y="305" width="312" height="6" rx="3" fill="var(--color-bg)" stroke="var(--color-divider)"/>
    <rect data-hp="massfill" x="462" y="305" width="91.8" height="6" rx="3" fill="var(--color-accent)"/>
    <circle data-hp="massknob" cx="553.8" cy="308" r="7.5" fill="var(--color-bg)" stroke="var(--color-accent)" stroke-width="2.2"/>
    <rect data-hp="masshit" x="454" y="295" width="328" height="26" rx="4" fill="transparent" role="slider" tabindex="0" aria-label="Rotor mass from 100 kg to 250 tonnes" aria-valuemin="100" aria-valuemax="250000" aria-valuenow="1000" style="cursor:ew-resize;touch-action:none;outline:none"/>
    <g data-hp="draftbtn" role="button" tabindex="0" aria-label="Test draft wheel at 50,000 RPM and 1,000 kg" style="cursor:pointer">
      <rect x="454" y="334" width="204" height="28" rx="6" fill="var(--color-bg)" stroke="#e05252" stroke-width="1.2"/>
      <text x="556" y="352" text-anchor="middle" fill="#e05252" style="font-size:11px;font-weight:500">Test draft (1 t @ 50,000 RPM)</text>
    </g>
    <g data-hp="resetbtn" role="button" tabindex="0" aria-label="Reset wheel to safe Carbon spin" style="cursor:pointer">
      <rect x="668" y="334" width="112" height="28" rx="6" fill="var(--color-bg)" stroke="var(--color-divider)" stroke-width="1.2"/>
      <text x="724" y="352" text-anchor="middle" fill="var(--color-neutral-300)" style="font-size:11px;font-weight:500">Reset (4.5k RPM)</text>
    </g>
    <line x1="28" y1="406" x2="54" y2="406" stroke="var(--color-accent)" stroke-width="2.4"/>
    <text x="62" y="410" fill="var(--color-neutral-400)" style="font-size:11.5px">Safe rim hoop stress σ = ρ(ωr)² below material burst ceiling</text>
    <line x1="28" y1="429" x2="54" y2="429" stroke="#e05252" stroke-width="2" stroke-dasharray="4 3"/>
    <text x="62" y="433" fill="var(--color-neutral-400)" style="font-size:11.5px">Thin-rim tensile burst wall (independent of wheel mass or radius)</text>
    <text x="28" y="454" fill="var(--color-neutral-500)" style="font-size:11px">Solid uniform disk E = 1/4 m(ωr)²; 40-yr lifetime goal = 63.1 GJ (17,520 kWh)</text>
  </g>
  <foreignObject width="1" height="1"><img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="" style="width:0;height:0;opacity:0;pointer-events:none" onload="(function(img){ var svg = img.closest('svg'); if (!svg || svg.__hpBooted) return; svg.__hpBooted = true; var R = 2.0, G = 9.81, P_DAY = 4320000, LEAK_J = 180000000; var RPM_SLIDER_MAX = 10000, GX0 = 460, GX1 = 776, GY0 = 112, GY1 = 212, SLX0 = 462, SLX1 = 774; var RX = 221, RY = 184; var MATS = [ { name: 'Alloy steel 4340', short: 'Steel', rho: 7850, sig: 1100 }, { name: 'Titanium Ti-6Al-4V', short: 'Titanium', rho: 4430, sig: 900 }, { name: 'Carbon / epoxy', short: 'Carbon', rho: 1580, sig: 3000 }, { name: 'Bare T1000G fiber', short: 'Bare fiber', rho: 1800, sig: 6370 } ]; function q(s) { return svg.querySelector(s); } var elWheel = q('[data-hp=wheel]'), elRim = q('[data-hp=rim]'), elGlow = q('[data-hp=glow]'); var elShatter = q('[data-hp=shatter]'), elBurstBadge = q('[data-hp=burstbadge]'), elBurstSub = q('[data-hp=burstsub]'); var elSpeedVal = q('[data-hp=speedval]'), elStressVal = q('[data-hp=stressval]'); var elEnergyVal = q('[data-hp=energyval]'), elChargeVal = q('[data-hp=chargeval]'); var elCurve = q('[data-hp=curve]'), elChartDot = q('[data-hp=chartdot]'), elBurstLine = q('[data-hp=burstline]'); var elBurstRpmLine = q('[data-hp=burstrpmline]'), elBurstRpmLbl = q('[data-hp=burstrpmlbl]'); var elRpmVal = q('[data-hp=rpmval]'), elMassVal = q('[data-hp=massval]'); var elRpmFill = q('[data-hp=rpmfill]'), elRpmKnob = q('[data-hp=rpmknob]'), elRpmHit = q('[data-hp=rpmhit]'); var elMassFill = q('[data-hp=massfill]'), elMassKnob = q('[data-hp=massknob]'), elMassHit = q('[data-hp=masshit]'); var elDraftBtn = q('[data-hp=draftbtn]'), elResetBtn = q('[data-hp=resetbtn]'); var elPlayBtn = q('[data-hp=playbtn]'), elPlayLbl = q('[data-hp=playlbl]'); var matBtns = svg.querySelectorAll('[data-hp-mat]'); var reduce = window.matchMedia &amp;&amp; window.matchMedia('(prefers-reduced-motion: reduce)').matches; var st = { matIdx: 2, rpm: 4500, massKg: 1000, spinning: !reduce, angle: 0 }; var saved = window.__hpWheelState; if (saved &amp;&amp; Date.now() - saved.ts &lt; 300000) { st.matIdx = saved.matIdx; st.rpm = saved.rpm; st.massKg = saved.massKg; st.spinning = saved.spinning; } function saveState() { window.__hpWheelState = { matIdx: st.matIdx, rpm: st.rpm, massKg: st.massKg, spinning: st.spinning, ts: Date.now() }; } function fmtMass(kg) { return kg &gt;= 1000 ? (kg / 1000).toFixed(kg &gt;= 10000 ? 0 : 1) + ' t' : Math.round(kg) + ' kg'; } function fmtEnergy(j) { if (j &gt;= 1e9) return (j / 1e9).toFixed(2) + ' GJ'; if (j &gt;= 1e6) return (j / 1e6).toFixed(1) + ' MJ'; return Math.round(j / 1e3) + ' kJ'; } function fmtCharge(j) { var days = j / P_DAY; if (days &gt;= 730) return (days / 365).toFixed(1) + ' yr pedal'; if (days &gt;= 2) return Math.round(days) + ' d pedal'; return (days * 12).toFixed(1) + ' hr pedal'; } function render() { var mat = MATS[st.matIdx]; var omega = (st.rpm * 2 * Math.PI) / 60; var v = omega * R; var sigmaMPa = (mat.rho * v * v) / 1e6; var ratio = sigmaMPa / mat.sig; var energyJ = 0.25 * st.massKg * v * v; var kWh = energyJ / 3.6e6; var burst = ratio &gt; 1.0001; var vBurst = Math.sqrt((mat.sig * 1e6) / mat.rho); var rpmBurst = (vBurst / R) * 60 / (2 * Math.PI); for (var i = 0; i &lt; matBtns.length; i++) { var on = i === st.matIdx; var rect = matBtns[i].querySelector('rect'); var txt = matBtns[i].querySelector('text'); matBtns[i].setAttribute('aria-pressed', on ? 'true' : 'false'); if (rect) { rect.setAttribute('fill', on ? 'var(--color-accent)' : 'var(--color-bg)'); rect.setAttribute('fill-opacity', on ? '0.2' : '1'); rect.setAttribute('stroke', on ? 'var(--color-accent)' : 'var(--color-divider)'); } if (txt) txt.setAttribute('fill', on ? 'var(--color-accent-200)' : 'var(--color-neutral-400)'); } elSpeedVal.textContent = (v &gt;= 1000 ? (v / 1000).toFixed(2) + ' km/s' : Math.round(v) + ' m/s') + ' (M ' + (v / 343).toFixed(1) + ')'; elStressVal.textContent = Math.round(sigmaMPa) + ' / ' + mat.sig + ' MPa (' + (ratio &gt;= 10 ? ratio.toFixed(0) + 'x' : Math.round(ratio * 100) + '%') + ')'; elStressVal.setAttribute('fill', burst ? '#e05252' : ratio &gt; 0.75 ? '#e6a23c' : 'var(--color-accent-300)'); elEnergyVal.textContent = fmtEnergy(energyJ) + ' (' + (kWh &gt;= 100 ? Math.round(kWh).toLocaleString() : kWh.toFixed(1)) + ' kWh)'; var cStr = fmtCharge(energyJ); if (energyJ &gt; LEAK_J) cStr += ' (&gt;50 kWh leak cap)'; elChargeVal.textContent = cStr; elChargeVal.setAttribute('fill', energyJ &gt; LEAK_J ? '#e6a23c' : 'var(--color-neutral-300)'); elWheel.setAttribute('opacity', burst ? '0.16' : '1'); elRim.setAttribute('stroke', burst ? '#e05252' : ratio &gt; 0.75 ? '#e6a23c' : 'var(--color-accent)'); elGlow.setAttribute('stroke', burst ? '#e05252' : ratio &gt; 0.75 ? '#e6a23c' : 'var(--color-accent-300)'); elGlow.setAttribute('opacity', burst ? '0.7' : Math.min(0.85, 0.12 + ratio * 0.65).toFixed(2)); elShatter.setAttribute('opacity', burst ? '1' : '0'); elBurstBadge.setAttribute('opacity', burst ? '1' : '0'); if (burst) { elBurstSub.textContent = ratio &gt;= 2 ? ratio.toFixed(1) + 'x burst limit' : Math.round(ratio * 100) + '% burst limit'; } var sigPlotMax = mat.sig * 1.45; var pts = []; for (var p = 0; p &lt;= 48; p++) { var rp = (p / 48) * RPM_SLIDER_MAX; var wp = (rp * 2 * Math.PI) / 60; var sp = (mat.rho * wp * wp * R * R) / 1e6; var px = GX0 + (rp / RPM_SLIDER_MAX) * (GX1 - GX0); var py = GY1 - Math.min(1.0, sp / sigPlotMax) * (GY1 - GY0); pts.push((p === 0 ? 'M ' : 'L ') + px.toFixed(1) + ',' + py.toFixed(1)); } elCurve.setAttribute('d', pts.join(' ')); var curX = GX0 + Math.min(1.0, st.rpm / RPM_SLIDER_MAX) * (GX1 - GX0); var curY = GY1 - Math.min(1.0, sigmaMPa / sigPlotMax) * (GY1 - GY0); elChartDot.setAttribute('cx', curX.toFixed(1)); elChartDot.setAttribute('cy', curY.toFixed(1)); elChartDot.setAttribute('fill', burst ? '#e05252' : 'var(--color-accent-200)'); elChartDot.setAttribute('stroke', burst ? '#fff' : 'var(--color-accent)'); var bx = GX0 + Math.min(1.0, rpmBurst / RPM_SLIDER_MAX) * (GX1 - GX0); elBurstRpmLine.setAttribute('x1', bx.toFixed(1)); elBurstRpmLine.setAttribute('x2', bx.toFixed(1)); var lblX = bx &gt; GX1 - 54 ? bx - 5 : bx + 5; elBurstRpmLbl.setAttribute('x', lblX.toFixed(1)); elBurstRpmLbl.setAttribute('text-anchor', bx &gt; GX1 - 54 ? 'end' : 'start'); elBurstRpmLbl.textContent = 'burst ' + Math.round(rpmBurst).toLocaleString() + ' RPM'; var uRpm = Math.max(0, Math.min(1, st.rpm / RPM_SLIDER_MAX)); var rxPos = SLX0 + uRpm * (SLX1 - SLX0); elRpmFill.setAttribute('width', (rxPos - SLX0).toFixed(1)); elRpmFill.setAttribute('fill', burst ? '#e05252' : 'var(--color-accent)'); elRpmKnob.setAttribute('cx', rxPos.toFixed(1)); elRpmKnob.setAttribute('stroke', burst ? '#e05252' : 'var(--color-accent)'); elRpmVal.textContent = Math.round(st.rpm).toLocaleString() + ' RPM' + (st.rpm &gt; RPM_SLIDER_MAX ? ' (draft)' : ''); elRpmVal.setAttribute('fill', burst ? '#e05252' : 'var(--color-accent-300)'); elRpmHit.setAttribute('aria-valuenow', Math.round(st.rpm)); var uMass = Math.max(0, Math.min(1, Math.log(st.massKg / 100) / Math.log(2500))); var mxPos = SLX0 + uMass * (SLX1 - SLX0); elMassFill.setAttribute('width', (mxPos - SLX0).toFixed(1)); elMassKnob.setAttribute('cx', mxPos.toFixed(1)); elMassVal.textContent = fmtMass(st.massKg); elMassHit.setAttribute('aria-valuenow', Math.round(st.massKg)); elPlayLbl.textContent = st.spinning ? 'Pause' : 'Play'; } for (var m = 0; m &lt; matBtns.length; m++) { (function(idx){ function pick(e) { e.preventDefault(); e.stopPropagation(); st.matIdx = idx; if (st.rpm &gt; RPM_SLIDER_MAX) st.rpm = 4500; saveState(); render(); } matBtns[idx].addEventListener('click', pick); matBtns[idx].addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') pick(e); }); })(m); } function clientXToFrac(clientX) { var rect = svg.getBoundingClientRect(); if (!rect.width) return 0; var svgX = ((clientX - rect.left) / rect.width) * 820; return Math.max(0, Math.min(1, (svgX - SLX0) / (SLX1 - SLX0))); } function bindSlider(hitEl, onFrac) { var drag = false; hitEl.addEventListener('pointerdown', function(e) { drag = true; try { hitEl.setPointerCapture(e.pointerId); } catch (_) {} onFrac(clientXToFrac(e.clientX)); saveState(); render(); e.preventDefault(); e.stopPropagation(); }); hitEl.addEventListener('pointermove', function(e) { if (!drag) return; onFrac(clientXToFrac(e.clientX)); saveState(); render(); e.preventDefault(); e.stopPropagation(); }); function done(e) { if (!drag) return; drag = false; try { hitEl.releasePointerCapture(e.pointerId); } catch (_) {} } hitEl.addEventListener('pointerup', done); hitEl.addEventListener('pointercancel', done); hitEl.addEventListener('touchstart', function(e) { e.stopPropagation(); }, { passive: true }); hitEl.addEventListener('touchmove', function(e) { if (drag) { e.preventDefault(); e.stopPropagation(); } }, { passive: false }); } bindSlider(elRpmHit, function(u) { st.rpm = Math.round((u * RPM_SLIDER_MAX) / 50) * 50; }); bindSlider(elMassHit, function(u) { st.massKg = 100 * Math.pow(2500, u); }); elRpmHit.addEventListener('keydown', function(e) { var step = e.shiftKey ? 500 : 100; if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { st.rpm = Math.min(RPM_SLIDER_MAX, st.rpm + step); saveState(); render(); e.preventDefault(); } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { st.rpm = Math.max(0, Math.min(RPM_SLIDER_MAX, st.rpm) - step); saveState(); render(); e.preventDefault(); } }); elMassHit.addEventListener('keydown', function(e) { if (e.key === 'ArrowRight' || e.key === 'ArrowUp') { st.massKg = Math.min(250000, st.massKg * (e.shiftKey ? 1.5 : 1.15)); saveState(); render(); e.preventDefault(); } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') { st.massKg = Math.max(100, st.massKg / (e.shiftKey ? 1.5 : 1.15)); saveState(); render(); e.preventDefault(); } }); function setDraft(e) { e.preventDefault(); e.stopPropagation(); st.matIdx = 2; st.massKg = 1000; st.rpm = 50000; saveState(); render(); } elDraftBtn.addEventListener('click', setDraft); elDraftBtn.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') setDraft(e); }); function resetAll(e) { e.preventDefault(); e.stopPropagation(); st.matIdx = 2; st.massKg = 1000; st.rpm = 4500; st.spinning = !reduce; saveState(); render(); } elResetBtn.addEventListener('click', resetAll); elResetBtn.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') resetAll(e); }); function togglePlay(e) { e.preventDefault(); e.stopPropagation(); st.spinning = !st.spinning; saveState(); render(); } elPlayBtn.addEventListener('click', togglePlay); elPlayBtn.addEventListener('keydown', function(e) { if (e.key === 'Enter' || e.key === ' ') togglePlay(e); }); var lastTs = 0; function tick(ts) { if (!svg.isConnected) return; if (!lastTs) lastTs = ts; var dt = Math.min(0.05, (ts - lastTs) / 1000); lastTs = ts; if (st.spinning &amp;&amp; st.rpm &gt; 0) { var mat = MATS[st.matIdx]; var omega = (st.rpm * 2 * Math.PI) / 60; var burst = (mat.rho * omega * omega * R * R) / 1e6 &gt; mat.sig; if (!burst) { var degPerSec = Math.min(480, st.rpm * 0.085); st.angle = (st.angle + degPerSec * dt) % 360; elWheel.setAttribute('transform', 'rotate(' + st.angle.toFixed(1) + ' ' + RX + ' ' + RY + ')'); } } requestAnimationFrame(tick); } render(); requestAnimationFrame(tick); })(this);"/></foreignObject>
</svg>

*Figure 1. Interactive flywheel simulator for a 2-meter radius solid disk. Pick a material, drag the speed and mass sliders, or test the original thought-experiment wheel (1,000 kg at 50,000 RPM) to watch rim speed, centrifugal hoop stress, stored energy, and pedaling time update live against the material burst ceiling.*

---

> "A trained cyclist produces approximately 75-100 watts sustained over hours... Over 12 hours a day for 40 years: 17,520 kWh total, or 63 billion Joules (63 GJ). A carbon-fiber flywheel (mass: 1000 kg, radius: 2 m) spinning at 50,000 RPM stores approximately 2.7 GJ... Flywheels lose energy to friction, even with magnetic bearings in vacuum. High-quality systems lose ~0.1% per hour."

*A physics notebook page from a world-building folder (`physics_of_the_wheel.md`), set down to test whether one human life of physical labor could fill a mechanical battery. As a casual check for a story, the note worked. Tested strictly as physics, checking one flywheel number exposed two silent breaks in the model.*

---

## Introduction

How much usable mechanical work does a single human body hold over a whole working life? Put a healthy adult on bicycle pedals at a steady, sustainable 100 watts for 12 hours every day over 40 years, and the total shaft output comes to **63.07 gigajoules** (17,520 kilowatt-hours). Expressed in familiar fuels, forty years of hard daily labor equals roughly 10.5 barrels of crude oil or 497 gallons of gasoline ([U.S. EIA](https://www.eia.gov/energyexplained/units-and-calculators/)).

Can you trap that lifetime of labor inside one spinning flywheel and hand the wheel forward at the end? The physical calculation reveals two unforgiving walls, plus an easy factor-of-ten slip in the starting draft. First, a 1,000-kilogram, 2-meter-radius rotor spun to 50,000 revolutions per minute stores **27.42 gigajoules**, ten times more than the 2.7 gigajoules written in the notebook, yet its outer rim travels at 10.47 kilometers per second (Mach 30.5) and tears itself apart at roughly 58 times the tensile strength of carbon/epoxy composite ([Genta](https://shop.elsevier.com/books/kinetic-energy-storage/genta/978-0-408-01396-3); [TorayCMA](https://www.toraycma.com/wp-content/uploads/T1000G-Data-Sheet_02.16.2024.pdf)). Second, even an unrealistically quiet flywheel losing just 0.1 percent of its charge per hour hits a hard steady-state ceiling after roughly four months, flatlining at **50 kilowatt-hours** (0.29 percent of 63.07 gigajoules), after which the remaining 39.7 years of pedaling do nothing except pay the leak.

---

## Primary sources & lineage

Before walking through the numbers, this zpaper anchors each physical ceiling in eight primary sources across exercise physiology, mechanical flywheel design, aerospace composite data, and energy unit standards.

- **Wilkie, D. R.** ["Man as a Source of Mechanical Power."](https://doi.org/10.1080/00140136008930462) (1960; *Ergonomics*, vol. 3, no. 1, pp. 1-8).  
  *Core premise*: Quantifies the duration-versus-power frontier for human muscle, contrasting multi-horsepower bursts lasting under a second against aerobic continuous mechanical limits on the order of 100 to 200 watts.  
  *Role in this zpaper*: Grounds why 75 to 100 watts is a realistic steady physiological ceiling across long daily shifts rather than an arbitrary round number.

- **Wilson, David Gordon, and Theodor Schmidt.** [*Bicycling Science*](https://mitpress.mit.edu/9780262538404/bicycling-science/) (2020; 4th ed., The MIT Press).  
  *Core premise*: Establishes bicycle transmission efficiency, human metabolic efficiency (roughly 20 to 25 percent from food chemical energy to mechanical crank work), and power-duration curves.  
  *Role in this zpaper*: Converts 63.07 gigajoules of shaft work back into daily food calories and explains why biological maintenance dwarfs stored mechanical work.

- **Genta, Giancarlo.** [*Kinetic Energy Storage: Theory and Practice of Advanced Flywheel Systems*](https://shop.elsevier.com/books/kinetic-energy-storage/genta/978-0-408-01396-3) (1985; Butterworth-Heinemann).  
  *Core premise*: Derives the structural limit of rotating rotors, showing that maximum specific energy obeys `e_max = K (σ / ρ)`, where `K` is a dimensionless shape factor, `σ` is allowable working tensile stress, and `ρ` is density.  
  *Role in this zpaper*: Supplies the exact thin-rim (`K = 0.5`) and uniform-disk (`K = 0.606` for Poisson ratio `ν = 0.3`) burst equations driving Figure 1 and Section 2.

- **Bolund, Björn, Hans Bernhoff, and Mats Leijon.** ["Flywheel energy and power storage systems."](https://ideas.repec.org/a/eee/rensus/v11y2007i2p235-258.html) (2007; *Renewable and Sustainable Energy Reviews*, vol. 11, no. 2, pp. 235-258).  
  *Core premise*: Surveys modern vacuum-housed magnetic-bearing rotors alongside standby losses from eddy currents, residual aerodynamic windage, and power electronics.  
  *Role in this zpaper*: Frames why fractional-percent hourly losses persist in real machines even without mechanical contact bearings.

- **Jensen, Ralph H., and Timothy P. Dever.** [*G2 Flywheel Module Design*](https://ntrs.nasa.gov/api/citations/20060028492/downloads/20060028492.pdf) (2006; NASA Glenn Research Center, NTRS 20060028492).  
  *Core premise*: Documents a physical 60,000 RPM aerospace composite flywheel storing 525 watt-hours (1.89 megajoules) at 1 kilowatt continuous rating using magnetic bearings.  
  *Role in this zpaper*: Demonstrates why 50,000 to 60,000 RPM requires a small compact radius (centimeters, not two meters) to keep rim velocity below composite failure.

- **Dever, Timothy P., et al.** [*Assessment of Technologies for Noncryogenic Hybrid Electric Propulsion*](https://ntrs.nasa.gov/api/citations/20150000747/downloads/20150000747.pdf) (2015; NASA Glenn Research Center, NTRS 20150000747).  
  *Core premise*: Assesses system-level aerospace carbon-fiber flywheel specific energies (accounting for burst containment, magnetic bearings, and motor-generators) at roughly 25 to 50 watt-hours per kilogram.  
  *Role in this zpaper*: Separates idealized filament energy density from full-module mass when sizing storage for gigajoule loads.

- **Toray Composite Materials America.** [*TORAYCA T1000G Carbon Fiber Data Sheet*](https://www.toraycma.com/wp-content/uploads/T1000G-Data-Sheet_02.16.2024.pdf) (2024; TorayCMA).  
  *Core premise*: Lists typical uniaxial tensile strength of 6,370 MPa and fiber density of 1.80 g/cm³ for commercial high-strength T1000G aerospace carbon fiber.  
  *Role in this zpaper*: Anchors the upper composite burst curves in Figure 1 and Section 2 with real datasheet values rather than generic estimates.

- **U.S. Energy Information Administration.** ["Energy Units and Calculators Explained."](https://www.eia.gov/energyexplained/units-and-calculators/) (2026; EIA, with [BTU reference](https://www.eia.gov/energyexplained/units-and-calculators/british-thermal-units.php)).  
  *Core premise*: Standardizes U.S. thermal energy conversion factors: 1 barrel of crude oil = 5.689 million Btu (6.002 GJ), 1 gallon of gasoline = 120,214 Btu (126.84 MJ), and 1 Btu = 1,055.06 J.  
  *Role in this zpaper*: Translates a 40-year human mechanical output directly into everyday chemical fuel volumes.

---

## 1. Forty years at the pedals

A single sustained hundred-watt shift looks deceptively modest, roughly the electrical draw of a bright incandescent bulb or an idle desktop workstation. Held for 12 hours a day, that output produces 4.32 megajoules (1.20 kilowatt-hours) each evening. Multiplied across 365 days a year for 40 years (14,600 days), the integral reaches **17,520 kilowatt-hours**, or **63.072 gigajoules**, matching the 63 GJ figure in the original notebook ([Wilkie](https://doi.org/10.1080/00140136008930462); [Wilson and Schmidt](https://mitpress.mit.edu/9780262538404/bicycling-science/)).

Where that work becomes humbling is the metabolic denominator. Human skeletal muscle converts chemical food energy into crank work at a gross efficiency of roughly 22 to 25 percent ([Wilson and Schmidt](https://mitpress.mit.edu/9780262538404/bicycling-science/)). At 24 percent efficiency, delivering 4.32 megajoules to the drivetrain burns 18.0 megajoules (4,302 kilocalories) of extra food on top of basal metabolism (~1,800 kilocalories/day), requiring roughly 6,100 kilocalories every single day for four decades. Even when captured cleanly at the shaft, 63.07 gigajoules equals just **10.51 barrels of crude oil** or **497 gallons of gasoline** ([U.S. EIA](https://www.eia.gov/energyexplained/units-and-calculators/)).

<svg viewBox="0 0 820 340" width="100%" role="img" aria-label="Comparison of 63.1 GJ human lifetime pedaling energy to crude oil, gasoline, and brain power alongside log-scale rotor masses required to hold 63.1 GJ safely" style="display:block;max-width:820px;margin:0 auto">
  <g style="font-family:var(--font-body);font-size:11.5px;font-variant-numeric:tabular-nums" fill="var(--color-text)">
    <text x="24" y="23" style="font-size:12.5px;font-weight:500">1. What 40 years of pedaling (63.1 GJ) equals</text>
    <text x="424" y="23" style="font-size:12.5px;font-weight:500">2. Safe rotor mass to hold 63.1 GJ (log scale)</text>
    <rect x="24" y="38" width="376" height="274" rx="8" fill="var(--color-surface)" stroke="var(--color-divider)"/>
    <rect x="424" y="38" width="372" height="274" rx="8" fill="var(--color-surface)" stroke="var(--color-divider)"/>
    <text x="42" y="78" fill="var(--color-text)" style="font-size:11.5px;font-weight:500">40 yrs pedaling (100 W × 12 h/d)</text>
    <rect x="42" y="85" width="336" height="16" rx="4" fill="var(--color-bg)" stroke="var(--color-divider)"/>
    <rect x="42" y="85" width="311.6" height="16" rx="4" fill="var(--color-accent)" opacity="0.92"/>
    <text x="50" y="96.5" fill="var(--color-bg)" style="font-size:10px;font-weight:600">63.1 GJ (17,520 kWh)</text>
    <text x="42" y="134" fill="var(--color-text)" style="font-size:11.5px;font-weight:500">10.5 barrels of crude oil (EIA)</text>
    <rect x="42" y="141" width="336" height="16" rx="4" fill="var(--color-bg)" stroke="var(--color-divider)"/>
    <rect x="42" y="141" width="311.3" height="16" rx="4" fill="var(--color-neutral-500)" opacity="0.68"/>
    <text x="50" y="152.5" fill="var(--color-bg)" style="font-size:10px;font-weight:600">63.0 GJ (5.689 MMBtu/bbl)</text>
    <text x="42" y="190" fill="var(--color-text)" style="font-size:11.5px;font-weight:500">497 gallons of gasoline (EIA)</text>
    <rect x="42" y="197" width="336" height="16" rx="4" fill="var(--color-bg)" stroke="var(--color-divider)"/>
    <rect x="42" y="197" width="311.3" height="16" rx="4" fill="var(--color-neutral-500)" opacity="0.68"/>
    <text x="50" y="208.5" fill="var(--color-bg)" style="font-size:10px;font-weight:600">63.0 GJ (120,214 Btu/gal)</text>
    <text x="42" y="246" fill="var(--color-text)" style="font-size:11.5px;font-weight:500">40 yrs human brain (20 W × 24 h/d)</text>
    <rect x="42" y="253" width="336" height="16" rx="4" fill="var(--color-bg)" stroke="var(--color-divider)"/>
    <rect x="42" y="253" width="124.7" height="16" rx="4" fill="var(--color-neutral-500)" opacity="0.68"/>
    <text x="50" y="264.5" fill="var(--color-bg)" style="font-size:10px;font-weight:600">25.2 GJ metabolic baseline</text>
    <line x1="546.0" y1="62" x2="546.0" y2="278" stroke="var(--color-divider)" stroke-width="0.8" opacity="0.55"/>
    <text x="546.0" y="294" text-anchor="middle" fill="var(--color-neutral-400)" style="font-size:10px">10 t</text>
    <line x1="612.7" y1="62" x2="612.7" y2="278" stroke="var(--color-divider)" stroke-width="0.8" opacity="0.55"/>
    <text x="612.7" y="294" text-anchor="middle" fill="var(--color-neutral-400)" style="font-size:10px">100 t</text>
    <line x1="679.4" y1="62" x2="679.4" y2="278" stroke="var(--color-divider)" stroke-width="0.8" opacity="0.55"/>
    <text x="679.4" y="294" text-anchor="middle" fill="var(--color-neutral-400)" style="font-size:10px">1k t</text>
    <line x1="746.2" y1="62" x2="746.2" y2="278" stroke="var(--color-divider)" stroke-width="0.8" opacity="0.55"/>
    <text x="746.2" y="294" text-anchor="middle" fill="var(--color-neutral-400)" style="font-size:10px">10k t</text>
    <text x="538" y="86" text-anchor="end" fill="var(--color-neutral-300)" style="font-size:10.8px">Mild steel (A36)</text>
    <rect x="546" y="74" width="203.8" height="16" rx="3" fill="var(--color-neutral-400)" opacity="0.68"/>
    <text x="744.8" y="85.5" text-anchor="end" fill="var(--color-bg)" style="font-size:9.8px;font-weight:600">11,317 t</text>
    <text x="538" y="119" text-anchor="end" fill="var(--color-neutral-300)" style="font-size:10.8px">Alloy steel (4340)</text>
    <rect x="546" y="107" width="160.8" height="16" rx="3" fill="var(--color-neutral-400)" opacity="0.68"/>
    <text x="701.8" y="118.5" text-anchor="end" fill="var(--color-bg)" style="font-size:9.8px;font-weight:600">2,572 t</text>
    <text x="538" y="152" text-anchor="end" fill="var(--color-neutral-300)" style="font-size:10.8px">Titanium (Ti-6Al-4V)</text>
    <rect x="546" y="140" width="150.1" height="16" rx="3" fill="var(--color-neutral-400)" opacity="0.68"/>
    <text x="691.1" y="151.5" text-anchor="end" fill="var(--color-bg)" style="font-size:9.8px;font-weight:600">1,774 t</text>
    <text x="538" y="185" text-anchor="end" fill="var(--color-neutral-300)" style="font-size:10.8px">E-glass / epoxy</text>
    <rect x="546" y="173" width="124.0" height="16" rx="3" fill="var(--color-neutral-400)" opacity="0.68"/>
    <text x="665.0" y="184.5" text-anchor="end" fill="var(--color-bg)" style="font-size:9.8px;font-weight:600">721 t</text>
    <text x="538" y="218" text-anchor="end" fill="var(--color-neutral-300)" style="font-size:10.8px">Carbon / epoxy</text>
    <rect x="546" y="206" width="85.3" height="16" rx="3" fill="var(--color-accent)" opacity="0.95"/>
    <text x="626.3" y="217.5" text-anchor="end" fill="var(--color-bg)" style="font-size:9.8px;font-weight:600">190 t</text>
    <text x="538" y="251" text-anchor="end" fill="var(--color-neutral-300)" style="font-size:10.8px">Bare T1000G filament</text>
    <rect x="546" y="239" width="67.3" height="16" rx="3" fill="var(--color-neutral-400)" opacity="0.68"/>
    <text x="608.3" y="250.5" text-anchor="end" fill="var(--color-bg)" style="font-size:9.8px;font-weight:600">102 t</text>
    <text x="28" y="330" fill="var(--color-neutral-400)" style="font-size:10.8px">Note: 63.1 GJ shaft work burns ~10.5M extra food kcal at 24% gross cycling efficiency.</text>
    <text x="424" y="330" fill="var(--color-neutral-400)" style="font-size:10.8px">Sized at 35% of thin-rim burst energy (~2.9x stress safety factor).</text>
  </g>
</svg>

*Figure 2. Left: 40 years of continuous 100 W pedaling (12 hours/day) measured against EIA chemical fuel equivalents and 40 years of continuous 20 W human brain metabolism (25.23 GJ). Right: flywheel rotor mass required to hold all 63.07 GJ at 35 percent of thin-rim burst energy (~2.9x stress safety margin).*

**Compare that body-scale number to the brain inside the rider.** As examined in [[the-twenty-watt-watch]], the human brain runs continuously at roughly 20 watts, day and night, awake or asleep. Across those same 40 years, 20 continuous watts sums to **25.23 gigajoules**, forty percent as much energy as 12 hours a day of hard leg labor, spent strictly maintaining neural order against entropy. And viewed through [[the-contracted-edge]], modern convenience routinely hides that conversion factor: ten and a half barrels of crude oil compress an entire working lifetime of human muscle into the trunk volume of a compact car.

---

## 2. Two ways the draft flywheel breaks

The notebook tested storing that 63 GJ lifetime output in a carbon-fiber wheel with mass `m = 1,000 kg` and radius `r = 2 m` spinning at 50,000 RPM, estimating its stored energy at 2.7 GJ. Checking both the kinetic energy equation and the structural stress equation turns up two separate problems.

First, a straightforward arithmetic slip undercounted the energy by a factor of ten. At 50,000 RPM, angular velocity is `ω = 50,000 × 2π / 60 = 5,236 rad/s`. For a solid uniform disk (`I = ½ m r² = 2,000 kg·m²`), kinetic energy `E = ½ I ω²` equals **27.42 gigajoules** (or 54.83 GJ for a pure thin-rim ring with `I = m r²`), not 2.7 GJ.

Second, and far more fatal, spinning a 2-meter radius wheel to 50,000 RPM pushes its outer rim to velocity `v = ω r = 10,472 m/s` (**10.47 km/s**, faster than low Earth orbital velocity, or **Mach 30.5** in air). Click **Test draft (1 t @ 50,000 RPM)** in Figure 1 above and the wheel shatters immediately. Why? Because centrifugal hoop tension in a thin rotating ring equals `σ_θ = ρ v²`, independent of rotor mass or radius ([Genta](https://shop.elsevier.com/books/kinetic-energy-storage/genta/978-0-408-01396-3)). Rearranging gives a pure material ceiling for both rim speed and specific energy:

`v_burst = √(σ / ρ)`  and  `e_max = E / m = K (σ / ρ)`

Because kinetic energy scales with `v²` and stress also scales with `v²`, **making a wheel heavier or wider never raises its burst speed.** For a thin rim (`K = 0.5`) wound from high-strength aerospace carbon/epoxy (60 percent Toray T1000G fiber by volume: composite hoop strength ~3,000 MPa, composite density ~1,580 kg/m³), `v_burst = 1,378 m/s`, limiting a 2-meter rotor to **6,579 RPM** ([TorayCMA](https://www.toraycma.com/wp-content/uploads/T1000G-Data-Sheet_02.16.2024.pdf)). At 50,000 RPM, centrifugal stress reaches **173,266 MPa**, roughly **58 times** the composite's breaking limit. NASA Glenn's G2 flywheel achieves 60,000 RPM safely not by defying material limits, but by shrinking radius to centimeters rather than meters ([Jensen and Dever](https://ntrs.nasa.gov/api/citations/20060028492/downloads/20060028492.pdf)).

To store all **63.07 gigajoules** safely at 35 percent of thin-rim burst energy (~2.9x stress safety factor), you do not speed up a one-tonne wheel; you scale rotor mass up until specific energy fits inside the material ceiling:
- **Mild steel (A36, 250 MPa)**: bursts at 178 m/s (852 RPM at 2 m), holds 4 Wh/kg at burst, requiring **11,317 tonnes** safely.
- **Alloy steel (4340, 1,100 MPa)**: bursts at 374 m/s (1,787 RPM at 2 m), holds 19 Wh/kg at burst, requiring **2,572 tonnes** safely.
- **Titanium (Ti-6Al-4V, 900 MPa)**: bursts at 451 m/s (2,152 RPM at 2 m), holds 28 Wh/kg at burst, requiring **1,774 tonnes** safely.
- **E-glass / epoxy (1,000 MPa)**: bursts at 707 m/s (3,376 RPM at 2 m), holds 69 Wh/kg at burst, requiring **721 tonnes** safely.
- **Carbon / epoxy (T1000G 60%, 3,000 MPa)**: bursts at 1,378 m/s (6,579 RPM at 2 m), holds 264 Wh/kg at burst, requiring **190 tonnes** safely.
- **Complete aerospace module (with housing, vacuum, bearings)**: NASA's ~25 to 50 Wh/kg system envelope puts full hardware mass near **350 to 700 tonnes** ([Dever et al.](https://ntrs.nasa.gov/api/citations/20150000747/downloads/20150000747.pdf)).

---

## 3. Why a fractional leak caps forty years at four months

Suppose you replace the one-tonne wheel with 190 tonnes of safe carbon-fiber rotor so nothing ever bursts. Now test the second assumption from the notebook: a vacuum-housed magnetic-bearing flywheel losing just **0.1 percent of its stored energy per hour** ([Bolund, Bernhoff, and Leijon](https://ideas.repec.org/a/eee/rensus/v11y2007i2p235-258.html)).

Notice the structural difference between human input and standby drag. Pedaling adds energy at a fixed average rate, `P_avg = 50 W` (100 W averaged across 12 hours of work and 12 hours of rest). Friction and magnetic eddy currents drain energy at a rate *proportional* to how much energy is already in the wheel: `P_loss = λ E`, where `λ = 0.001 / 3,600 s⁻¹` gives a characteristic time constant `τ = 1 / λ = 41.7 days`. Stored energy obeys the linear differential equation:

`dE / dt = P_avg - λ E`  so  `E(t) = (P_avg / λ)(1 - e^(-λt))`

The moment `E(t)` climbs high enough that 0.1 percent per hour equals 50 watts, net accumulation drops to zero permanently:

`E_eq = P_avg / λ = 50 W × 3,600,000 s = 180 MJ = 50.0 kWh`

**Fifty kilowatt-hours is 0.29 percent of 63.07 gigajoules.** Reaching 95 percent of that ceiling (`3τ`) takes just **125 days**. From day 125 onward through year 40, the rider works 12 hours every single day solely to hold steady against standby leakage, much like the thermodynamic spinlock loops traced in [[the-smoke-loop]] and [[the-twenty-watt-watch]].

<svg viewBox="0 0 820 330" width="100%" role="img" aria-label="Energy stored over 40 years of continuous 100 W pedaling for 12 hours a day across four standby leak rates showing the 50 kWh steady-state cap at 0.1 percent per hour" style="display:block;max-width:820px;margin:0 auto">
  <g style="font-family:var(--font-body);font-size:11.5px;font-variant-numeric:tabular-nums" fill="var(--color-text)">
    <text x="24" y="23" style="font-size:12.5px;font-weight:500">Standby leak tax across 40 years of pedaling (P_avg = 50 W continuous)</text>
    <rect x="24" y="38" width="772" height="252" rx="8" fill="var(--color-surface)" stroke="var(--color-divider)"/>
    <line x1="86" y1="268" x2="774" y2="268" stroke="var(--color-divider)" stroke-width="1"/>
    <line x1="86" y1="60" x2="86" y2="268" stroke="var(--color-divider)" stroke-width="1"/>
    <line x1="86" y1="268.0" x2="774" y2="268.0" stroke="var(--color-divider)" stroke-width="0.7" opacity="0.5"/>
    <text x="78" y="271.5" text-anchor="end" fill="var(--color-neutral-400)" style="font-size:10.5px">0 GJ</text>
    <line x1="86" y1="220.0" x2="774" y2="220.0" stroke="var(--color-divider)" stroke-width="0.7" opacity="0.5"/>
    <text x="78" y="223.5" text-anchor="end" fill="var(--color-neutral-400)" style="font-size:10.5px">15 GJ</text>
    <line x1="86" y1="172.0" x2="774" y2="172.0" stroke="var(--color-divider)" stroke-width="0.7" opacity="0.5"/>
    <text x="78" y="175.5" text-anchor="end" fill="var(--color-neutral-400)" style="font-size:10.5px">30 GJ</text>
    <line x1="86" y1="124.0" x2="774" y2="124.0" stroke="var(--color-divider)" stroke-width="0.7" opacity="0.5"/>
    <text x="78" y="127.5" text-anchor="end" fill="var(--color-neutral-400)" style="font-size:10.5px">45 GJ</text>
    <line x1="86" y1="76.0" x2="774" y2="76.0" stroke="var(--color-divider)" stroke-width="0.7" opacity="0.5"/>
    <text x="78" y="79.5" text-anchor="end" fill="var(--color-neutral-400)" style="font-size:10.5px">60 GJ</text>
    <line x1="86.0" y1="60" x2="86.0" y2="268" stroke="var(--color-divider)" stroke-width="0.7" opacity="0.5"/>
    <text x="86.0" y="283" text-anchor="middle" fill="var(--color-neutral-400)" style="font-size:10.5px">0 yr</text>
    <line x1="258.0" y1="60" x2="258.0" y2="268" stroke="var(--color-divider)" stroke-width="0.7" opacity="0.5"/>
    <text x="258.0" y="283" text-anchor="middle" fill="var(--color-neutral-400)" style="font-size:10.5px">10 yr</text>
    <line x1="430.0" y1="60" x2="430.0" y2="268" stroke="var(--color-divider)" stroke-width="0.7" opacity="0.5"/>
    <text x="430.0" y="283" text-anchor="middle" fill="var(--color-neutral-400)" style="font-size:10.5px">20 yr</text>
    <line x1="602.0" y1="60" x2="602.0" y2="268" stroke="var(--color-divider)" stroke-width="0.7" opacity="0.5"/>
    <text x="602.0" y="283" text-anchor="middle" fill="var(--color-neutral-400)" style="font-size:10.5px">30 yr</text>
    <line x1="774.0" y1="60" x2="774.0" y2="268" stroke="var(--color-divider)" stroke-width="0.7" opacity="0.5"/>
    <text x="774.0" y="283" text-anchor="middle" fill="var(--color-neutral-400)" style="font-size:10.5px">40 yr</text>
    <path d="M 86,268 L 774,66.2" fill="none" stroke="var(--color-neutral-400)" stroke-width="1.6" stroke-dasharray="5 4"/>
    <path d="M 86.0,268.0 L 94.6,265.5 L 103.2,263.2 L 111.8,260.9 L 120.4,258.7 L 129.0,256.7 L 137.6,254.7 L 146.2,252.8 L 154.8,251.0 L 163.4,249.2 L 172.0,247.6 L 180.6,246.0 L 189.2,244.5 L 197.8,243.0 L 206.4,241.6 L 215.0,240.3 L 223.6,239.0 L 232.2,237.8 L 240.8,236.6 L 249.4,235.5 L 258.0,234.4 L 266.6,233.4 L 275.2,232.4 L 283.8,231.4 L 292.4,230.5 L 301.0,229.7 L 309.6,228.8 L 318.2,228.1 L 326.8,227.3 L 335.4,226.6 L 344.0,225.9 L 352.6,225.2 L 361.2,224.6 L 369.8,224.0 L 378.4,223.4 L 387.0,222.8 L 395.6,222.3 L 404.2,221.8 L 412.8,221.3 L 421.4,220.8 L 430.0,220.4 L 438.6,220.0 L 447.2,219.6 L 455.8,219.2 L 464.4,218.8 L 473.0,218.4 L 481.6,218.1 L 490.2,217.8 L 498.8,217.4 L 507.4,217.1 L 516.0,216.8 L 524.6,216.6 L 533.2,216.3 L 541.8,216.1 L 550.4,215.8 L 559.0,215.6 L 567.6,215.4 L 576.2,215.1 L 584.8,214.9 L 593.4,214.7 L 602.0,214.6 L 610.6,214.4 L 619.2,214.2 L 627.8,214.0 L 636.4,213.9 L 645.0,213.7 L 653.6,213.6 L 662.2,213.5 L 670.8,213.3 L 679.4,213.2 L 688.0,213.1 L 696.6,213.0 L 705.2,212.9 L 713.8,212.8 L 722.4,212.7 L 731.0,212.6 L 739.6,212.5 L 748.2,212.4 L 756.8,212.3 L 765.4,212.2 L 774.0,212.1" fill="none" stroke="var(--color-accent)" stroke-width="2.2"/>
    <path d="M 86.0,268.0 L 94.6,266.0 L 103.2,264.6 L 111.8,263.8 L 120.4,263.2 L 129.0,262.9 L 137.6,262.7 L 146.2,262.5 L 154.8,262.4 L 163.4,262.4 L 172.0,262.3 L 180.6,262.3 L 189.2,262.3 L 197.8,262.3 L 206.4,262.3 L 215.0,262.2 L 223.6,262.2 L 232.2,262.2 L 240.8,262.2 L 249.4,262.2 L 258.0,262.2 L 266.6,262.2 L 275.2,262.2 L 283.8,262.2 L 292.4,262.2 L 301.0,262.2 L 309.6,262.2 L 318.2,262.2 L 326.8,262.2 L 335.4,262.2 L 344.0,262.2 L 352.6,262.2 L 361.2,262.2 L 369.8,262.2 L 378.4,262.2 L 387.0,262.2 L 395.6,262.2 L 404.2,262.2 L 412.8,262.2 L 421.4,262.2 L 430.0,262.2 L 438.6,262.2 L 447.2,262.2 L 455.8,262.2 L 464.4,262.2 L 473.0,262.2 L 481.6,262.2 L 490.2,262.2 L 498.8,262.2 L 507.4,262.2 L 516.0,262.2 L 524.6,262.2 L 533.2,262.2 L 541.8,262.2 L 550.4,262.2 L 559.0,262.2 L 567.6,262.2 L 576.2,262.2 L 584.8,262.2 L 593.4,262.2 L 602.0,262.2 L 610.6,262.2 L 619.2,262.2 L 627.8,262.2 L 636.4,262.2 L 645.0,262.2 L 653.6,262.2 L 662.2,262.2 L 670.8,262.2 L 679.4,262.2 L 688.0,262.2 L 696.6,262.2 L 705.2,262.2 L 713.8,262.2 L 722.4,262.2 L 731.0,262.2 L 739.6,262.2 L 748.2,262.2 L 756.8,262.2 L 765.4,262.2 L 774.0,262.2" fill="none" stroke="var(--color-accent-300)" stroke-width="1.8" opacity="0.85"/>
    <path d="M 86.0,268.0 L 94.6,267.4 L 103.2,267.4 L 111.8,267.4 L 120.4,267.4 L 129.0,267.4 L 137.6,267.4 L 146.2,267.4 L 154.8,267.4 L 163.4,267.4 L 172.0,267.4 L 180.6,267.4 L 189.2,267.4 L 197.8,267.4 L 206.4,267.4 L 215.0,267.4 L 223.6,267.4 L 232.2,267.4 L 240.8,267.4 L 249.4,267.4 L 258.0,267.4 L 266.6,267.4 L 275.2,267.4 L 283.8,267.4 L 292.4,267.4 L 301.0,267.4 L 309.6,267.4 L 318.2,267.4 L 326.8,267.4 L 335.4,267.4 L 344.0,267.4 L 352.6,267.4 L 361.2,267.4 L 369.8,267.4 L 378.4,267.4 L 387.0,267.4 L 395.6,267.4 L 404.2,267.4 L 412.8,267.4 L 421.4,267.4 L 430.0,267.4 L 438.6,267.4 L 447.2,267.4 L 455.8,267.4 L 464.4,267.4 L 473.0,267.4 L 481.6,267.4 L 490.2,267.4 L 498.8,267.4 L 507.4,267.4 L 516.0,267.4 L 524.6,267.4 L 533.2,267.4 L 541.8,267.4 L 550.4,267.4 L 559.0,267.4 L 567.6,267.4 L 576.2,267.4 L 584.8,267.4 L 593.4,267.4 L 602.0,267.4 L 610.6,267.4 L 619.2,267.4 L 627.8,267.4 L 636.4,267.4 L 645.0,267.4 L 653.6,267.4 L 662.2,267.4 L 670.8,267.4 L 679.4,267.4 L 688.0,267.4 L 696.6,267.4 L 705.2,267.4 L 713.8,267.4 L 722.4,267.4 L 731.0,267.4 L 739.6,267.4 L 748.2,267.4 L 756.8,267.4 L 765.4,267.4 L 774.0,267.4" fill="none" stroke="#e05252" stroke-width="2.2"/>
    <text x="768" y="79" text-anchor="end" fill="var(--color-neutral-300)" style="font-size:10.5px">0% leak: 63.1 GJ linear ramp</text>
    <text x="768" y="205" text-anchor="end" fill="var(--color-accent-300)" style="font-size:10.5px">0.001%/hr: 17.45 GJ at 40 yr (cap 18.0 GJ)</text>
    <text x="768" y="253" text-anchor="end" fill="var(--color-neutral-300)" style="font-size:10.5px">0.01%/hr: 1.80 GJ cap (500 kWh)</text>
    <text x="768" y="264" text-anchor="end" fill="#e05252" style="font-size:10.5px">0.1%/hr: 0.18 GJ cap (50 kWh)</text>
    <rect x="108" y="66" width="272" height="114" rx="6" fill="var(--color-bg)" stroke="var(--color-divider)"/>
    <text x="120" y="83" fill="#e05252" style="font-size:10.5px;font-weight:500">Zoom: first year at 0.1%/hr standby loss</text>
    <line x1="152" y1="102.0" x2="362" y2="102.0" stroke="#e05252" stroke-width="1" stroke-dasharray="3 3" opacity="0.7"/>
    <text x="148" y="105.0" text-anchor="end" fill="var(--color-neutral-400)" style="font-size:9.5px">50 kWh</text>
    <text x="148" y="159" text-anchor="end" fill="var(--color-neutral-400)" style="font-size:9.5px">0</text>
    <text x="152" y="168" text-anchor="middle" fill="var(--color-neutral-400)" style="font-size:9.5px">day 0</text>
    <text x="223.9" y="168" text-anchor="middle" fill="var(--color-neutral-300)" style="font-size:9.5px">125 d (95%)</text>
    <text x="362" y="168" text-anchor="end" fill="var(--color-neutral-400)" style="font-size:9.5px">365 d</text>
    <path d="M 152.0,156.0 L 157.3,145.4 L 162.5,136.8 L 167.8,130.0 L 173.0,124.5 L 178.3,120.1 L 183.5,116.5 L 188.8,113.7 L 194.0,111.4 L 199.3,109.5 L 204.5,108.0 L 209.8,106.9 L 215.0,105.9 L 220.3,105.1 L 225.5,104.5 L 230.8,104.0 L 236.0,103.6 L 241.3,103.3 L 246.5,103.0 L 251.8,102.8 L 257.0,102.7 L 262.3,102.5 L 267.5,102.4 L 272.8,102.4 L 278.0,102.3 L 283.3,102.2 L 288.5,102.2 L 293.8,102.1 L 299.0,102.1 L 304.3,102.1 L 309.5,102.1 L 314.8,102.1 L 320.0,102.0 L 325.3,102.0 L 330.5,102.0 L 335.8,102.0 L 341.0,102.0 L 346.3,102.0 L 351.5,102.0 L 356.8,102.0 L 362.0,102.0" fill="none" stroke="#e05252" stroke-width="2"/>
    <circle cx="223.9" cy="104.7" r="3.2" fill="#e05252"/>
    <text x="28" y="314" fill="var(--color-neutral-400)" style="font-size:11px">Steady-state limit E_eq = P_avg / λ: once leak power matches 50 W input, decades of extra pedaling add zero net energy.</text>
  </g>
</svg>

*Figure 3. Charge curves over 40 years of pedaling (`P_avg = 50 W`) across four standby loss rates. At 0.1%/hr, energy saturates at 50 kWh (0.18 GJ) within four months; even 100x tighter losses (0.001%/hr, an 11.4-year decay constant) still cap storage under 18 GJ.*

Even cutting standby loss by a factor of ten (0.01 percent per hour, `τ = 417 days`) caps lifetime storage at **500 kilowatt-hours** (1.80 GJ, or 2.85 percent of the pedaled work). Only ultra-low-loss cryogenic superconducting bearings holding leak rates near or below **0.0001 percent per hour** (`τ > 100 years`) preserve most of a human lifetime's mechanical work in kinetic form. Over decades, the best mechanical "flywheel" is often a chemical battery or synthesized fuel tank, where standby self-discharge approaches zero per year rather than tenths of a percent per hour.

---

## 4. Honest scoping and the story boundary

None of these limits break the premise of storing work in spin for a poetic myth; in fact, knowing the physics sharpens what a story chooses to change. **If the goal is literally to trap 40 years of pedaling**, the wheel must either hold hundreds of tonnes of carbon rim or sit on virtually zero-loss superconducting bearings. **If the loss rate stays at 0.1 percent per hour**, stopping for sleep no longer drains a 63 GJ vault; rather, the vault never filled past 50 kilowatt-hours in the first place, which turns continuous pedaling into an even starker Sisyphus trap: every stroke keeps one tiny charge alive against immediate decay.

Checking the math also leaves the underlying fictional world and characters untouched. Real mechanics, textbook equations, Toray datasheet limits, and EIA fuel factors belong in the commons without revealing any plot, voice, or narrative craft built atop them.

---

## 5. The short version

Forty years of sustained 100-watt pedaling for 12 hours a day sums to **63.07 gigajoules** (17,520 kilowatt-hours), the thermal energy of **10.5 barrels of crude oil** or **497 gallons of gasoline**. Trying to store that energy inside a 1,000-kilogram, 2-meter carbon flywheel at 50,000 RPM runs into a misread decimal (**27.42 GJ**, not 2.7 GJ) and **58 times** the rotor's tensile breaking stress at Mach 30.5. Scaling safely to **190 tonnes** of composite avoids bursting, yet at a 0.1 percent per hour standby leak the wheel still saturates at **50 kilowatt-hours** in four months, turning the remaining 39.7 years of labor into pure replacement of heat.

---

## Works Cited

- Bolund, Björn, Hans Bernhoff, and Mats Leijon. ["Flywheel energy and power storage systems."](https://ideas.repec.org/a/eee/rensus/v11y2007i2p235-258.html) *Renewable and Sustainable Energy Reviews*, vol. 11, no. 2, Feb. 2007, pp. 235-258. *IDEAS / Elsevier*.
- Dever, Timothy P., et al. [*Assessment of Technologies for Noncryogenic Hybrid Electric Propulsion*](https://ntrs.nasa.gov/api/citations/20150000747/downloads/20150000747.pdf). NASA Glenn Research Center, NASA/TP-2015-218805, Jan. 2015. *NASA Technical Reports Server*.
- Genta, Giancarlo. [*Kinetic Energy Storage: Theory and Practice of Advanced Flywheel Systems*](https://shop.elsevier.com/books/kinetic-energy-storage/genta/978-0-408-01396-3). Butterworth-Heinemann, 1985. *Elsevier Shop*.
- Jensen, Ralph H., and Timothy P. Dever. [*G2 Flywheel Module Design*](https://ntrs.nasa.gov/api/citations/20060028492/downloads/20060028492.pdf). NASA Glenn Research Center, NASA/TM-2006-214242, Aug. 2006. *NASA Technical Reports Server*.
- Toray Composite Materials America. [*TORAYCA T1000G Carbon Fiber Data Sheet*](https://www.toraycma.com/wp-content/uploads/T1000G-Data-Sheet_02.16.2024.pdf). Toray Composite Materials America, Inc., Feb. 2024.
- U.S. Energy Information Administration. ["Energy Units and Calculators Explained"](https://www.eia.gov/energyexplained/units-and-calculators/) and ["British Thermal Units (Btu)."](https://www.eia.gov/energyexplained/units-and-calculators/british-thermal-units.php) U.S. Department of Energy, 2026.
- Wilkie, D. R. ["Man as a Source of Mechanical Power."](https://doi.org/10.1080/00140136008930462) *Ergonomics*, vol. 3, no. 1, Jan. 1960, pp. 1-8.
- Wilson, David Gordon, and Theodor Schmidt. [*Bicycling Science*](https://mitpress.mit.edu/9780262538404/bicycling-science/). 4th ed., The MIT Press, 2020.

---

## Contribution

**Human:** The original physics exploration (`physics_of_the_wheel.md`) asking what one lifetime of human labor produces in joules and whether a spinning flywheel could hold it; the boundary rule separating private fiction plots from public non-fiction explorations in `paperz`; and the request to turn that non-fiction calculation into a playable `paperz` entry.

**Machine:** Checking the draft's kinetic energy arithmetic and hoop-stress limits, deriving the standby leak steady-state ceiling, building the interactive flywheel scrubber and computed figures, and verifying primary literature, material datasheets, and EIA conversion factors.

**Neither, exactly:** The unexpected double inversion surfaced by checking both physical equations side by side: fixing a ten-fold arithmetic mistake first made the draft wheel look larger than intended, only to prove the wheel bursts 58 times over, while fixing the burst limit by scaling rotor mass still left 39.7 years of labor capped at 125 days of storage unless leakage drops by orders of magnitude.

*Donated to the commons.*
