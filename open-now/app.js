// ---------------------------------------------------------------
// Data — day: 0=Sun 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat
// ---------------------------------------------------------------
const POOLS = [
  {
    name: "Albany Aquatic Center",
    address: "1311 Portland Ave, Albany",
    desc: "Family/Rec Swim (Indoor Pool) · Week of Aug 10–16",
    url: "https://www.albanyaquaticcenter.com/pool-schedule",
    sessions: [
      { day:1, start:"16:30", end:"20:00" },
      { day:2, start:"16:30", end:"20:00" },
      { day:3, start:"16:30", end:"20:00" },
      { day:4, start:"16:30", end:"20:00" },
      { day:5, start:"16:45", end:"20:00" },
      { day:6, start:"13:30", end:"16:00" },
      { day:0, start:"13:30", end:"16:00" },
      // Indoor pool only. Outdoor pool has no separately-listed
      // Family/Rec Swim block. Sept 13 / Sept 20 one-off changes
      // (Solano Stroll, Albany Triathlon) are not modeled here.
    ]
  },
  {
    name: "El Cerrito Swim Center",
    address: "7007 Moeser Ln, El Cerrito",
    desc: "rECswim (Family Swim)",
    url: "https://www.elcerrito.gov/150/Swim-Center",
    sessions: [
      { day:1, start:"12:30", end:"15:00" },
      { day:2, start:"12:30", end:"15:00" },
      { day:3, start:"12:30", end:"15:00" },
      { day:4, start:"12:30", end:"15:00" },
      { day:5, start:"12:30", end:"15:00" },
      { day:6, start:"13:00", end:"16:00" },
      { day:0, start:"13:00", end:"16:00" },
    ]
  },
  {
    name: "King Pool",
    address: "1700 Hopkins St, Berkeley",
    desc: "Family Swim (Shallow) · Fall sched. 8/10–10/11",
    url: "https://berkeleyca.gov/community-recreation/parks-recreation/facilities/pools-and-aquatic-programs/king-pool",
    sessions: [
      { day:1, start:"08:00", end:"12:30" },
      { day:1, start:"18:00", end:"20:00" },
      { day:2, start:"08:00", end:"12:30" },
      { day:2, start:"18:30", end:"20:00" },
      { day:3, start:"08:00", end:"12:30" },
      { day:3, start:"18:00", end:"20:00" },
      { day:4, start:"08:00", end:"12:30" },
      { day:4, start:"18:30", end:"20:00" },
      { day:5, start:"08:00", end:"12:30" },
      { day:5, start:"18:00", end:"20:00" },
      { day:6, start:"08:00", end:"12:00" },
      { day:0, start:"12:00", end:"13:30" },
    ]
  },
  {
    name: "Richmond Plunge",
    address: "1 E Richmond Ave, Richmond",
    desc: "Family Rec Swim (Shallow Rec)",
    url: "https://www.richmondca.gov/2140/Richmond-Plunge",
    sessions: [
      { day:6, start:"13:30", end:"15:30" },
      // Weekdays are mostly lap swim / masters, not family swim.
    ]
  },
  {
    name: "West Campus Pool",
    address: "2100 Browning St, Berkeley",
    desc: "Family Swim (Shallow) · Fall sched. 8/10–10/11",
    url: "https://berkeleyca.gov/community-recreation/parks-recreation/facilities/pools-and-aquatic-programs/west-campus-pool",
    sessions: [
      { day:1, start:"07:00", end:"10:00" },
      { day:2, start:"07:00", end:"10:00" },
      { day:3, start:"07:00", end:"10:00" },
      { day:4, start:"07:00", end:"10:00" },
      { day:5, start:"07:00", end:"10:00" },
      { day:6, start:"16:30", end:"18:30" },
      { day:0, start:"08:00", end:"10:00" },
    ]
  },
];

const LIBRARIES = [
  {
    name: "Albany Library",
    address: "1247 Marin Ave, Albany",
    desc: "Alameda County Library",
    url: "https://aclibrary.org/locations/alb",
    sessions: [
      { day:1, start:"12:00", end:"18:00" },
      { day:2, start:"12:00", end:"20:00" },
      { day:3, start:"12:00", end:"20:00" },
      { day:4, start:"10:00", end:"18:00" },
      // Closed Fridays.
      { day:6, start:"10:00", end:"17:00" },
      { day:0, start:"13:00", end:"17:00" },
    ]
  },
  {
    name: "El Cerrito Library",
    address: "6510 Stockton Ave, El Cerrito",
    desc: "Contra Costa County Library",
    url: "https://ccclib.org/locations/11/",
    sessions: [
      // Closed Mondays and Sundays.
      { day:2, start:"10:00", end:"20:00" },
      { day:3, start:"10:00", end:"20:00" },
      { day:4, start:"10:00", end:"20:00" },
      { day:5, start:"09:00", end:"17:00" },
      { day:6, start:"09:00", end:"17:00" },
    ]
  },
  {
    name: "Berkeley Central Library",
    address: "2090 Kittredge St, Berkeley (Downtown)",
    desc: "Berkeley Public Library",
    url: "https://www.berkeleypubliclibrary.org/locations/central-library",
    sessions: [
      { day:1, start:"12:00", end:"20:00" },
      { day:2, start:"10:00", end:"20:00" },
      { day:3, start:"10:00", end:"18:00" },
      { day:4, start:"10:00", end:"18:00" },
      { day:5, start:"10:00", end:"18:00" },
      { day:6, start:"10:00", end:"18:00" },
      // Closed Sundays.
    ]
  },
  {
    name: "Berkeley North Branch",
    address: "1170 The Alameda, Berkeley",
    desc: "Berkeley Public Library",
    url: "https://www.berkeleypubliclibrary.org/locations/north-branch",
    sessions: [
      { day:1, start:"10:00", end:"18:00" },
      { day:2, start:"10:00", end:"20:00" },
      { day:3, start:"10:00", end:"20:00" },
      { day:4, start:"12:00", end:"20:00" },
      { day:5, start:"10:00", end:"18:00" },
      { day:6, start:"10:00", end:"18:00" },
      { day:0, start:"10:00", end:"18:00" },
    ]
  },
];

// ---------------------------------------------------------------
const DAY_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function toMinutes(hhmm){
  const [h,m] = hhmm.split(":").map(Number);
  return h*60+m;
}

// Matches the NOW dashboard's timeLabel(): "10am", "12:30pm".
function fmt(hhmm){
  const [h,m] = hhmm.split(":").map(Number);
  const period = h < 12 ? "am" : "pm";
  let h12 = h % 12; if (h12===0) h12=12;
  return m===0 ? `${h12}${period}` : `${h12}:${String(m).padStart(2,"0")}${period}`;
}

// The program name only — drop the trailing schedule-period note.
function programName(place){
  return place.desc.split("·")[0].trim();
}

let selectedDay = null; // null = live mode; 0-6 = browsing that day's schedule

function renderDayTabs(){
  const el = document.getElementById("day-tabs");
  el.innerHTML = "";

  const nowBtn = document.createElement("button");
  nowBtn.className = selectedDay === null ? "active" : "";
  nowBtn.textContent = "Now";
  nowBtn.onclick = () => { selectedDay = null; render(); };
  el.appendChild(nowBtn);

  DAY_NAMES.forEach((name, idx) => {
    const btn = document.createElement("button");
    btn.className = selectedDay === idx ? "active" : "";
    btn.textContent = name;
    btn.onclick = () => { selectedDay = idx; render(); };
    el.appendChild(btn);
  });
}

function renderSection(label, places, kind){
  const section = document.createElement("section");
  section.className = "now-section";
  section.innerHTML = `<h2>${label}</h2><div class="now-rule"></div>`;

  const now = new Date();
  const realDay = now.getDay();
  const mins = now.getHours()*60 + now.getMinutes();
  const browsingDay = selectedDay === null ? realDay : selectedDay;
  const isLiveMode = selectedDay === null;

  places.forEach(place => {
    const daySessions = place.sessions
      .filter(s => s.day === browsingDay)
      .sort((a,b)=>toMinutes(a.start)-toMinutes(b.start));

    let activeSession = null;
    if (isLiveMode || browsingDay === realDay){
      for (const s of daySessions){
        if (mins >= toMinutes(s.start) && mins < toMinutes(s.end)){
          activeSession = s; break;
        }
      }
    }

    let nextSession = null, daysAhead = 0;
    if (isLiveMode && !activeSession){
      for (let d = 0; d <= 7; d++){
        const checkDay = (realDay + d) % 7;
        const candidates = place.sessions
          .filter(s => s.day === checkDay)
          .filter(s => d > 0 || toMinutes(s.start) > mins)
          .sort((a,b)=>toMinutes(a.start)-toMinutes(b.start));
        if (candidates.length){ nextSession = candidates[0]; daysAhead = d; break; }
      }
    }

    // The line under the name: today's windows, phrased like the NOW
    // dashboard — "Open 10am–6pm" for libraries, "<program> 4:30pm–8pm"
    // for pools, "Closed today" when nothing is scheduled.
    let detail;
    if (place.sessions.length === 0){
      detail = "Hours not verified";
    } else if (daySessions.length){
      const windows = daySessions.map(s => `${fmt(s.start)}–${fmt(s.end)}`).join(", ");
      detail = kind === "library" ? `Open ${windows}` : `${programName(place)} ${windows}`;
    } else {
      detail = isLiveMode ? "Closed today" : "Closed";
    }

    // Nothing left today — say when it next opens, so a closed row is
    // still useful to read.
    if (isLiveMode && !activeSession && nextSession && !daySessions.length){
      const when = daysAhead === 1 ? "tomorrow" : DAY_NAMES[nextSession.day];
      detail += ` · next ${when} ${fmt(nextSession.start)}`;
    }

    // Open/Closed is a statement about right now, so it only belongs in
    // live mode — when browsing another day the hours line says it all.
    let statusHtml = "";
    if (isLiveMode){
      let statusClass = "closed", statusText = "Closed";
      if (activeSession){
        statusClass = "open"; statusText = "Open";
      } else if (nextSession && daysAhead === 0
                 && (toMinutes(nextSession.start) - mins) <= 90){
        statusClass = "soon"; statusText = "Soon";
      }
      statusHtml = `<span class="now-status ${statusClass}">${statusText}</span>`;
    }

    const row = document.createElement("div");
    row.className = "now-row";
    row.innerHTML = `
      <div class="now-facility">
        <strong><a href="${place.url}" target="_blank" rel="noopener" title="${place.address}">${place.name}</a></strong>
        <span>${detail}</span>
      </div>
      ${statusHtml}
    `;
    section.appendChild(row);
  });

  return section;
}

function render(){
  const now = new Date();

  const dateEl = document.getElementById("now-date");
  dateEl.dateTime = now.toISOString();
  dateEl.textContent = selectedDay === null
    ? new Intl.DateTimeFormat(undefined, {
        weekday: "long", month: "long", day: "numeric",
      }).format(now)
    : `${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][selectedDay]} schedule`;

  renderDayTabs();

  const boardsEl = document.getElementById("boards");
  boardsEl.innerHTML = "";

  const CATEGORIES = [
    { label: "Libraries", places: LIBRARIES, kind: "library" },
    { label: "Pools", places: POOLS, kind: "pool" },
  ];

  CATEGORIES.forEach(cat => {
    boardsEl.appendChild(renderSection(cat.label, cat.places, cat.kind));
  });
}

render();
setInterval(render, 30000);
