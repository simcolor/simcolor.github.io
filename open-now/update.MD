# Updating the schedule data

This file explains how to refresh the `POOLS` and `LIBRARIES` arrays in
`app.js`. Read this before touching that file.

## Quick checklist

1. For each source below, fetch the URL and find the row for the specific
   program named in "Look for" — not lap swim, masters, water walk, or any
   other program sharing the same table.
2. Convert times to 24-hour `"HH:MM"` strings.
3. Map days with `day: 0=Sun 1=Mon 2=Tue 3=Wed 4=Thu 5=Fri 6=Sat`.
4. Update only the `sessions` array for that place. Leave `name`, `address`,
   `desc`, and `url` alone unless the source itself changed (e.g. a pool
   posts a new schedule PDF at a new URL).
5. Update the `desc` field's date range (e.g. "Fall sched. 8/10–10/11") to
   match whatever period the new source covers.
6. Keep the `//` comments in each place's `sessions` block — they record
   *why* something is excluded (e.g. "weekdays are lap swim, not family
   swim"). If a check reconfirms the same exclusion, leave the comment. If
   it's no longer true, update or remove it.
7. Commit with a message that names the source and the date you checked,
   e.g. `git commit -m "Update King/West Campus Pool: Winter sched, checked 2026-10-09"`.

## Data schema

```js
{
  name: "Venue Name",
  address: "Street, City",
  desc: "Program name · any date-range note",
  url: "https://...",           // the page this data came from
  sessions: [
    { day: 1, start: "16:30", end: "20:00" },  // Mon 4:30–8:00pm
    // ...
  ]
}
```

If a place's hours are truly unverified, leave `sessions: []` and put a
`//` comment explaining what's missing and why — don't guess.

## Sources

### Pools (POOLS array) — check ~weekly, or whenever the posted schedule's date range ends

| Venue | Source URL | Program to look for | Update cadence |
|---|---|---|---|
| El Cerrito Swim Center | https://www.elcerrito.gov/150/Swim-Center | "rECswim" / "Family Swim" | Seasonal — page states effective dates (e.g. "Beginning 6/17") |
| King Pool | https://berkeleyca.gov/community-recreation/parks-recreation/facilities/pools-and-aquatic-programs/king-pool | "Family Swim (Shallow)" table | Whenever the linked schedule period (shown at top of page, e.g. "Aug 10-Oct 11") ends |
| West Campus Pool | https://berkeleyca.gov/community-recreation/parks-recreation/facilities/pools-and-aquatic-programs/west-campus-pool | "Family Swim (Shallow)" table | Same as King Pool — Berkeley posts both on the same cycle |
| Albany Aquatic Center | https://www.albanyaquaticcenter.com/pool-schedule (schedule is posted as an image/PDF, not plain text — may need the user to screenshot or forward the PDF) | "Family/Rec Swim" row, **Indoor Pool** table only | **Weekly** — Albany posts a new week-by-week schedule |

Known gaps, don't silently fix by guessing:
- **Albany outdoor pool** has no separately-listed Family/Rec Swim program.
  Leave it unmodeled unless a future schedule clarifies it.
- **Richmond Plunge** was removed on purpose — it isn't a pool this
  household uses, and its posted schedule had drifted. Don't add it back
  unless asked.
- **One-off closures** (holidays, special events, e.g. "9/20: closed AM for
  Albany Triathlon") are not modeled — the schema only supports a weekly
  recurring pattern, not date-specific overrides. If these become a
  recurring pain point, that's a schema change (see "Possible future
  work" below), not something to hack into the current data.

### Libraries (LIBRARIES array) — check occasionally, hours rarely change

| Venue | Source URL | Update cadence |
|---|---|---|
| Albany Library | https://aclibrary.org/locations/alb | Rarely — mainly watch for holiday closures |
| El Cerrito Library | https://ccclib.org/locations/11/ | Rarely |
| Berkeley Central Library | https://www.berkeleypubliclibrary.org/locations/central-library | Rarely |
| Berkeley North Branch | https://www.berkeleypubliclibrary.org/locations/north-branch | Rarely |

Library hours are simple open/closed — no sub-program to filter for, just
copy the posted weekly hours straight into `sessions` as one block per open
day (see existing entries for the pattern).

## Possible future work

Not needed now, but worth knowing about if this keeps coming up:

- **Date-specific overrides** (holidays, one-off closures/openings) would
  need a second data shape, e.g. `exceptions: [{ date: "2026-09-20",
  sessions: [...] }]`, checked before the weekly pattern. Only worth
  building if the weekly-pattern gaps start actually causing wasted trips.
- **Albany's image-based schedule** is the most fragile source — if this
  becomes annoying every week, the more durable fix is asking Albany
  Aquatic Center directly whether they publish (or would publish) the
  schedule as plain text/HTML instead of an image.
