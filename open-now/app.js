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

// "45m", "1h 20m", "4h" — the countdown under the hours. Past two hours the
// minutes stop mattering, so they're rounded away.
function relTime(mins){
  if (mins < 60) return `${mins}m`;
  if (mins >= 120) return `${Math.round(mins/60)}h`;
  const m = mins % 60;
  return m === 0 ? "1h" : `1h ${m}m`;
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

// How early a place counts as opening "Soon" — drives the amber colour.
const SOON_MINUTES = 90;

// Everything a row needs to know about one place: which of today's windows
// are behind, current, and ahead, and what to say about the next change.
function evaluate(place, ctx){
  const { realDay, mins, browsingDay, isLiveMode } = ctx;

  const daySessions = place.sessions
    .filter(s => s.day === browsingDay)
    .sort((a,b)=>toMinutes(a.start)-toMinutes(b.start));

  let activeSession = null;
  if (browsingDay === realDay){
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

  // Status is a claim about right now, so browsing another day has none.
  let statusClass = "", statusText = "";
  if (isLiveMode){
    if (place.sessions.length === 0){
      statusClass = "closed"; statusText = "Hours unknown";
    } else if (activeSession){
      statusClass = "open"; statusText = "Open now";
    } else if (nextSession && daysAhead === 0
               && (toMinutes(nextSession.start) - mins) <= SOON_MINUTES){
      statusClass = "soon"; statusText = "Opening soon";
    } else {
      statusClass = "closed"; statusText = "Closed";
    }
  }

  return { place, daySessions, activeSession, nextSession, daysAhead,
           statusClass, statusText };
}

// The right-hand column: one line per window today, dimming the ones that have
// already finished, plus a countdown to whatever happens next.
function hoursColumn(ev, ctx){
  const { isLiveMode, mins, realDay, browsingDay } = ctx;
  const { place, daySessions, activeSession, nextSession, daysAhead } = ev;
  const isToday = browsingDay === realDay;

  let windows;
  if (place.sessions.length === 0){
    windows = [`<span class="now-window past">Hours not verified</span>`];
  } else if (daySessions.length){
    windows = daySessions.map(s => {
      // `up` is the one window the countdown refers to — it alone takes the
      // amber when the place is about to open.
      let cls = "later";
      if (isToday){
        if (s === activeSession) cls = "now";
        else if (mins >= toMinutes(s.end)) cls = "past";
        else if (s === nextSession) cls = "up";
      }
      return `<span class="now-window ${cls}">${fmt(s.start)}–${fmt(s.end)}</span>`;
    });
  } else {
    windows = [`<span class="now-window shut">${isLiveMode ? "Closed today" : "Closed"}</span>`];
  }

  let note = "";
  if (isLiveMode){
    if (activeSession){
      note = `closes in ${relTime(toMinutes(activeSession.end) - mins)}`;
    } else if (nextSession && daysAhead === 0){
      note = `opens in ${relTime(toMinutes(nextSession.start) - mins)}`;
    } else if (nextSession){
      const when = daysAhead === 1 ? "tomorrow" : DAY_NAMES[nextSession.day];
      note = `opens ${when} ${fmt(nextSession.start)}`;
    }
  }

  return windows.join("") + (note ? `<span class="now-note">${note}</span>` : "");
}

function renderSection(label, places){
  const section = document.createElement("section");
  section.className = "now-section";
  section.innerHTML = `<h2>${label}</h2><div class="now-rule"></div>`;

  const now = new Date();
  const ctx = {
    realDay: now.getDay(),
    mins: now.getHours()*60 + now.getMinutes(),
    browsingDay: selectedDay === null ? now.getDay() : selectedDay,
    isLiveMode: selectedDay === null,
  };

  // The authored order is never disturbed — the list is short enough that a
  // fixed position per venue is easier to read than one that re-sorts itself.
  const rows = places.map(place => evaluate(place, ctx));

  rows.forEach(ev => {
    const place = ev.place;

    // Colour alone carries the status now, so spell it out for screen readers.
    const aria = ev.statusText ? ` aria-label="${ev.statusText}"` : "";

    const row = document.createElement("div");
    row.className = ev.statusClass ? `now-row ${ev.statusClass}` : "now-row";
    row.innerHTML = `
      <div class="now-facility">
        <strong><a href="${place.url}" target="_blank" rel="noopener" title="${programName(place)} · ${place.address}">${place.name}</a></strong>
      </div>
      <div class="now-hours"${aria}>${hoursColumn(ev, ctx)}</div>
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

  // The heading carries the program name, since the rows no longer do.
  const CATEGORIES = [
    { label: "Libraries", places: LIBRARIES },
    { label: "Pools (Family Swim)", places: POOLS },
  ];

  CATEGORIES.forEach(cat => {
    boardsEl.appendChild(renderSection(cat.label, cat.places));
  });
}

render();
setInterval(render, 30000);
