// ---------------------------------------------------------------
// Data — day: 0=Sun 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat
// ---------------------------------------------------------------
const POOLS = [
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

function fmt(hhmm){
  const [h,m] = hhmm.split(":").map(Number);
  const period = h < 12 ? "AM" : "PM";
  let h12 = h % 12; if (h12===0) h12=12;
  return m===0 ? `${h12}${period}` : `${h12}:${String(m).padStart(2,"0")}${period}`;
}

let selectedDay = null; // null = live mode; 0-6 = browsing that day's schedule

function renderDayTabs(){
  const el = document.getElementById("day-tabs");
  el.innerHTML = "";

  const nowBtn = document.createElement("button");
  nowBtn.className = "day-tab" + (selectedDay === null ? " active" : "");
  nowBtn.textContent = "Now";
  nowBtn.onclick = () => { selectedDay = null; render(); };
  el.appendChild(nowBtn);

  DAY_NAMES.forEach((name, idx) => {
    const btn = document.createElement("button");
    btn.className = "day-tab" + (selectedDay === idx ? " active" : "");
    btn.textContent = name;
    btn.onclick = () => { selectedDay = idx; render(); };
    el.appendChild(btn);
  });
}

function renderBoard(places){
  const board = document.createElement("div");
  board.className = "board";
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

    const row = document.createElement("div");
    row.className = "row" + (activeSession ? " is-open" : "");

    let pillHtml, windowHtml;
    if (activeSession){
      pillHtml = `<span class="pill open">${isLiveMode ? "Open now" : "Open"}</span>`;
      windowHtml = `<span class="window"><b>${fmt(activeSession.start)}–${fmt(activeSession.end)}</b></span>`;
    } else if (isLiveMode && nextSession){
      const soon = daysAhead === 0 && (toMinutes(nextSession.start) - mins) <= 90;
      const when = daysAhead === 0 ? "Today" : (daysAhead === 1 ? "Tomorrow" : DAY_NAMES[nextSession.day]);
      pillHtml = `<span class="pill ${soon ? "soon" : "closed"}">${soon ? "Opening soon" : "Closed"}</span>`;
      windowHtml = `<span class="window"><b>${when} ${fmt(nextSession.start)}–${fmt(nextSession.end)}</b></span>`;
    } else if (!isLiveMode && daySessions.length){
      pillHtml = `<span class="pill closed">Closed now</span>`;
      const list = daySessions.map(s => `${fmt(s.start)}–${fmt(s.end)}`).join(", ");
      windowHtml = `<span class="window">${list}</span>`;
    } else if (place.sessions.length === 0) {
      pillHtml = `<span class="pill closed">Unverified</span>`;
      windowHtml = `<span class="window">—</span>`;
    } else {
      pillHtml = `<span class="pill closed">Closed</span>`;
      windowHtml = `<span class="window">—</span>`;
    }

    row.innerHTML = `
      <div>
        <div class="place-name">${place.name}</div>
        <div class="place-meta"><a href="${place.url}" target="_blank" rel="noopener">${place.address} · ${place.desc}</a></div>
      </div>
      <div class="status">
        ${pillHtml}
        ${windowHtml}
      </div>
    `;
    board.appendChild(row);
  });

  return board;
}

function render(){
  const now = new Date();
  const day = now.getDay();

  document.getElementById("now-str").textContent =
    `${DAY_NAMES[day]} ${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`;

  renderDayTabs();

  const boardsEl = document.getElementById("boards");
  boardsEl.innerHTML = "";

  const CATEGORIES = [
    { title: "🏊 Family Swim", places: POOLS },
    { title: "📚 Library", places: LIBRARIES },
  ];

  CATEGORIES.forEach(cat => {
    const heading = document.createElement("div");
    heading.className = "section-title";
    heading.textContent = cat.title;
    boardsEl.appendChild(heading);
    boardsEl.appendChild(renderBoard(cat.places));
  });
}

render();
setInterval(render, 30000);
