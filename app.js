/* ===============================
   IMPORTANT LINKS (your version)
   =============================== */
// ✅ Map each unit name to its Google Calendar ID
const UNIT_CALENDAR_MAP = {
  "Brighton Guesthouse (Walk to Park & Light Rail)": "210d8d49602fce82ff65c72b13cfacae64e56e7c48a8d8568d68aee05d5b787d@group.calendar.google.com",
  "Brighton Retreat (Walk to Park & Light Rail)": "4184bf25a277b6aacc0438e990ab05c940bce88d8e0a943c96534d17df851620@group.calendar.google.com",
  "Brighton House (Walk to Park & Light Rail)": "c65038ce678dcc93a21777c1c5e009ca84e37356b433f9f00f0af93427b4fc8f@group.calendar.google.com",

  "Rainier Guesthouse (Walk to Park & Light Rail)": "4bc30b8807d63d7efaea92ddc94d46aa514f2a7125a6defddc269ccb27754473@group.calendar.google.com",

  "Judkins Guesthouse (Close to Downtown)": "ad4bd250e26e90763c40849161126211419cdad68433e838d6be573d91fdbcbe@group.calendar.google.com",
  "Judkins Retreat (Close to Downtown)": "dce3a2435c46c98f52c06c17ffca335348bdec10b58af39fd70f687e7c4fe79a@group.calendar.google.com",
  "Judkins House (Close to Downtown)": "af539e474e1271738094f56e46bde439f0d28dfc630b6785eb3ba454a008e7d5@group.calendar.google.com",

  "Central Bellevue Guesthouse (Close to Downtown)": "7c7da1fccb6ed537595ee32dc2b3ef7dd2b18687dec78b9ffeecdcbd97805940@group.calendar.google.com",
  "Central Bellevue Retreat (Close to Downtown)": "7412a5775bdb473709701a6de95bcbe8bbd8432474f1e77201dbadb249698fde@group.calendar.google.com",
  "Central Bellevue House (Close to Downtown)": "primary" // fallback for now
};
function getCalendarIdForSelectedUnit() {
  const unit = getPropertyName();
  return UNIT_CALENDAR_MAP[unit] || "primary";
}

function syncCalendarIdUI() {
  const el = document.getElementById("calendarIdInput");
  if (!el) return;
  el.value = getCalendarIdForSelectedUnit();
}

const IMPORTANT_LINKS = {
  coHostTrainingManual: "https://tinyurl.com/te6578w4",
  cleanerChecklist: "https://tinyurl.com/4d9bc5na",
  inventory: "https://tinyurl.com/4by5ymap",
  guestTemplates: "https://tinyurl.com/ztz7zz9j",
  evolveWorkflow: "https://tinyurl.com/yfhky5jx",
  evolveAllUnits: "https://book.evolve.com/seabelstays",
  evolveDirect: {
      "All Units": "https://book.evolve.com/seabelstays",
      "Brighton Guesthouse (Walk to Park & Light Rail)": "https://evolve.com/vacation-rentals/527534",
      "Brighton Retreat (Walk to Park & Light Rail)": "https://evolve.com/vacation-rentals/527533",
      "Rainier Guesthouse (Walk to Restaurants & Light Rail)": "https://evolve.com/vacation-rentals/527594",
      "Judkins Guesthouse (Close to Downtown)": "https://evolve.com/vacation-rentals/527597",
      "Judkins Retreat (Close to Downtown)": "https://evolve.com/vacation-rentals/527598",
      "Central Bellevue Guesthouse (Close to Downtown)": "https://evolve.com/vacation-rentals/527600",
      "Central Bellevue Retreat (Close to Downtown)": "https://evolve.com/vacation-rentals/527599",
    },
  welcomeMessages: {
      "Brighton Guesthouse (Walk to Park & Light Rail)": "https://sites.google.com/view/seabelstays-pnw-briu/welcome-message",
      "Brighton Retreat (Walk to Park & Light Rail)": "https://sites.google.com/view/seabelstays-pnw-bril/welcome-message",
      "Brighton House (Walk to Park & Light Rail)": "https://sites.google.com/view/seabelstays-pnw-brih/welcome-message",
      "Rainier Guesthouse (Walk to Park & Light Rail)": "https://sites.google.com/view/seabelstays-pnw-raiu/welcome-message",
      "Judkins Guesthouse (Close to Downtown)": "https://sites.google.com/view/seabelstays-pnw-judu/welcome-message",
      "Judkins Retreat (Close to Downtown)": "https://sites.google.com/view/seabelstays-pnw-judl/welcome-message",
      "Judkins House (Close to Downtown)": "https://sites.google.com/view/seabelstays-pnw-judh/welcome-message",
      "Central Bellevue Guesthouse (Close to Downtown)": "https://sites.google.com/view/seabelstays-pnw-beln/welcome-message",
      "Central Bellevue Retreat (Close to Downtown)": "https://sites.google.com/view/seabelstays-pnw-bels/welcome-message",
      "Central Bellevue House (Close to Downtown)": "https://sites.google.com/view/seabelstays-pnw-belh/welcome-message",
    },
  faqs: {
    "Brighton": "https://sites.google.com/view/seabelstays-pnw-brightonhouse/house-manual",
    "Rainier": "https://sites.google.com/view/seabelstays-pnw-rainierhouse/house-manual",
    "Judkins": "https://sites.google.com/view/seabelstays-pnw-judkinshouse/house-manual",
    "Central Bellevue": "https://book.evolve.com/seabelstays",
  },
  checkinInstructions: {
      "Brighton Guesthouse (Walk to Park & Light Rail)": "https://tinyurl.com/5x7rwtf3",
      "Brighton Retreat (Walk to Park & Light Rail)": "https://tinyurl.com/2sp2n82z",
      "Brighton House (Walk to Park & Light Rail)": "https://tinyurl.com/kd34ycnt",
      "Rainier Guesthouse (Walk to Park & Light Rail)": "https://tinyurl.com/4va8d5us",
      "Judkins Guesthouse (Close to Downtown)": "https://tinyurl.com/3ap7s4sx",
      "Judkins Retreat (Close to Downtown)": "https://tinyurl.com/55ps862j",
      "Judkins House (Close to Downtown)": "https://tinyurl.com/2um8p2jr",
      "Central Bellevue Guesthouse (Close to Downtown)": "https://tinyurl.com/2t7jzutw",
      "Central Bellevue Retreat (Close to Downtown)": "https://tinyurl.com/3bkx47bp",
      "Central Bellevue House (Close to Downtown)": "https://tinyurl.com/3wjjp9z9",
    },
    
  houseManuals: {
      "Brighton House (Walk to Park & Light Rail)": "https://sites.google.com/view/seabelstays-pnw-brightonhouse/house-manual",
      "Rainier Guesthouse (Walk to Park & Light Rail)": "https://sites.google.com/view/seabelstays-pnw-rainierhouse/house-manual",
      "Judkins House (Close to Downtown)": "https://sites.google.com/view/seabelstays-pnw-judkinshouse/house-manual",
      "Central Bellevue House (Close to Downtown)": "https://sites.google.com/view/seabelstays-pnw-brightonhouse/house-manual"
   
   
   
   
    },
  signature: {
    name: "Daniel J.",
    title: "Host/Property Manager",
    brand: "SeaBelStays - Your PNW Retreat",
    bookDirect: "https://book.evolve.com/seabelstays",
    phone: "253-434-5788",
    email: "seabelstaysoffice@gmail.com",
    whatsapp: "+1-425-494-1245",
  }
};

const BOOKING_SOURCES = ["Airbnb","Vrbo","Google","Booking.com","Expedia","HomeToGo","Hopper Homes","HVN","VacationRenter","Savvy"];

const UNIT_ADDRESS_MAP = {
  BRIGHTON: "7511 45th Ave S, Seattle, WA 98118",
  RAINIER: "6720 40th Ave S, Seattle, WA 98118",
  JUDKINS: "1520 25th Ave S, Seattle, WA 98144",
  BELLEVUE: "735 143rd Pl SE, Bellevue, WA 98007",
};

function getUnitAddress(propertyName) {
  if (/Rainier/i.test(propertyName)) return UNIT_ADDRESS_MAP.RAINIER;
  if (/Judkins/i.test(propertyName)) return UNIT_ADDRESS_MAP.JUDKINS;
  if (/Bellevue/i.test(propertyName)) return UNIT_ADDRESS_MAP.BELLEVUE;
  return UNIT_ADDRESS_MAP.BRIGHTON;
}

function $(id){ return document.getElementById(id); }

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function toast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => t.classList.remove("show"), 1700);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    toast("Copied!");
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
    toast("Copied!");
  }
}

function usePlaceholders() {
  const el = $("usePlaceholders");
  return el ? el.checked : true;
}

function getPropertyName() {
  return $("propertySelect").value;
}

function getGuestFirstName() {
  if (usePlaceholders()) return "{Guest’s First Name}";
  const raw = ($("guestFirstName").value || "").trim();
  if (!raw) return "{Guest’s First Name}";
  return raw.split(/\s+/)[0];
}

function parseDate(value) {
  if (!value) return null;
  const d = new Date(value + "T12:00:00");
  return Number.isNaN(d.getTime()) ? null : d;
}

function formatMonthDay(d) {
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(d);
  const day = String(d.getDate()).padStart(2, "0");
  return `${month} ${day}`;
}

function formatRange(checkIn, checkOut) {
  const inD = parseDate(checkIn);
  const outD = parseDate(checkOut);
  if (!inD || !outD) return "MONTH DD - MONTH DD, YYYY";
  const year = outD.getFullYear();
  return `${formatMonthDay(inD)} - ${formatMonthDay(outD)}, ${year}`;
}

function getDateRange() {
  if (usePlaceholders()) return "MONTH DD - MONTH DD, YYYY";
  return formatRange($("checkInDate").value, $("checkOutDate").value);
}

function refreshDatePreview() {
  const el = $("datePreview");
  if (!el) return;
  el.value = formatRange($("checkInDate").value, $("checkOutDate").value);
}

function subject_followUp(propertyName) {
  return `Follow up on your booking with “${propertyName}”, ${getDateRange()}`;
}
function subject_aboutBookingArrival(propertyName) {
  return `About your booking with “${propertyName}”, ${getDateRange()}: Arrival Questions & House Rules`;
}
function subject_additionalId(propertyName) {
  return `Additional ID needed for your booking with “${propertyName}”, ${getDateRange()}`;
}
function subject_actionRequired(propertyName) {
  return `Action Required: Secure Your Booking with “${propertyName}”, ${getDateRange()}`;
}
function subject_alternateId(propertyName) {
  return `Alternate ID options for your booking with “${propertyName}”, ${getDateRange()}`;
}
function subject_checkin(propertyName) {
  return `Check-in Instructions for your stay at “${propertyName}”, ${getDateRange()}`;
}

function signatureText(propertyName) {
  const address = getUnitAddress(propertyName);
  return [
    IMPORTANT_LINKS.signature.name,
    IMPORTANT_LINKS.signature.title,
    propertyName,
    IMPORTANT_LINKS.signature.brand,
    `Book Direct & Save: ${IMPORTANT_LINKS.signature.bookDirect}`,
    `📍 ${address}`,
    `📞 Voice/Text: ${IMPORTANT_LINKS.signature.phone}`,
    `📧 Email: ${IMPORTANT_LINKS.signature.email}`,
    `💬 WhatsApp: ${IMPORTANT_LINKS.signature.whatsapp}`
  ].join("\n");
}


function getFaqLink(propertyName){
  if (/Rainier/i.test(propertyName)) return IMPORTANT_LINKS.faqs.Rainier;
  if (/Judkins/i.test(propertyName)) return IMPORTANT_LINKS.faqs.Judkins;
  if (/Bellevue/i.test(propertyName)) return IMPORTANT_LINKS.faqs["Central Bellevue"];
  return IMPORTANT_LINKS.faqs.Brighton;
}

function getWelcomeLink(propertyName){
  return IMPORTANT_LINKS.welcomeMessages[propertyName] || IMPORTANT_LINKS.evolveAllUnits;
}

function getCheckinLink(propertyName){
  return IMPORTANT_LINKS.checkinInstructions[propertyName] || IMPORTANT_LINKS.evolveAllUnits;
}

/* Template generator */
function buildMessagePack(labelKey) {
  const unit = getPropertyName();
  const guest = getGuestFirstName();
  const dates = getDateRange();

  const welcomeLink = getWelcomeLink(unit);
  const faqLink = getFaqLink(unit);
  const checkinLink = getCheckinLink(unit);
  
  const baseFooter = "\n\n" + signatureText(unit);

  if (labelKey === "WELCOME") {
    const body =
`Dear ${guest}, 
This is Daniel, Host/Property Manager of SeaBelStays Vacation Rentals. I am reaching out regarding your upcoming reservation with us at ${unit} in Seattle, WA from ${dates}. 
Please take a moment to go through our Welcome Message here: ${welcomeLink} and fulfill the ID requirement at your earliest convenience. Accepted forms of ID include a driver’s license, state ID, military ID, student ID, or travel documents like a passport or visa. You can simply attach the images to a text or an email. Make sure to mention the property name and the booking dates in your message. 
* Note: ID requirement will be waived for guests with an average rating of 4.5 stars or higher on AirBnB, VRBO or other popular booking platforms. Please send us a screenshot or link to your traveler profile for ID waiver consideration.  
Most common inquiries are answered in our FAQs: ${faqLink}
If you still have any questions, please do not hesitate to contact us. 
Thank you and look forward to hearing from you soon!
${baseFooter}`;

    return { sms: body, email: { subject: subject_followUp(unit), body } };
  }

  if (labelKey === "BOTH_IDS") {
    const body =
`Hi ${guest}, 
Thank you for submitting the requested IDs. If you haven’t done so, please answer a few quick questions below to help us get to know your group better. We'd also like to invite you to review the House Rules and Sleeping Arrangements to ensure our accommodations align with your expectations.
Arrival Questions

1.Who will be staying at the property?
2.Will you bring any pets or service animals?
3.Where are you traveling from?
4.What are your plans in the area?
5.Are you fine with our house rules?
6.What time will you arrive?
7.What is your check-out time?
8.How many cars will you park?
9.Do you have any special requests?
10.May we have your preferred email and phone number for check-in instructions?

House Rules
ID Verification – Guests must submit a proof of photo ID electronically to check in. (Note: ID requirement waived for guests with an average rating of 4.5 stars or higher on AirBnB, VRBO or other popular booking platforms).
Non-smoking property – No smoking, vaping, e-cigarettes, alcohol, drugs, or marijuana.
Registered guests only – Only individuals approved by the host may enter the premises.
Visiting hours: 9:00 AM - 6:00 PM (max visit duration: 4 hours).
Quiet hours: 10:00 PM - 6:00 AM.
All ages welcome – Primary bookers must be 21+.
No parties, events, or pets allowed.
No commercial photography or filming.
Noise-free rooms cannot be guaranteed.
No open flames inside or on the premises.
Room service is available upon request, not daily.
Not equipped or compliant with accessibility standards.
Guests and visitors are not considered long-term tenants.
Basic guest etiquette and respect for the space are expected.
Outdoor surveillance cameras monitor public areas (parking lot & porch).
Occasional property access may be required for maintenance, safety checks, or cleaning (with prior notice).
Check-in: Anytime after 3:00 PM | Check-out: By 11:00 AM (unless otherwise arranged).
Within 2 days of your arrival, I will reach out to provide the detailed check-in instructions, which include the full address, floor layout, parking arrangement and access codes.
From now until then, if you have any questions, please refer to our FAQs here: {Property FAQs link} or contact us directly.
Thank you again, and we can’t wait to welcome you!
Warm regards, 
${baseFooter}`;

    return { sms: body, email: { subject: subject_aboutBookingArrival(unit), body } };
  }

  if (labelKey === "SECOND_ID") {
    const body =
`Hi ${guest}, 
Thank you for submitting your ID. May I also have a proof of ID from another adult in the group please? Accepted forms of ID include a driver’s license, state ID, military ID, student ID, or travel documents like a passport or visa. You can simply attach the images to a text or an email. Make sure to mention the property name and the booking dates in your message.

Email: seabelstaysoffice@gmail.com
SMS/Text: 253-434-5788
WhatsApp: +1-425-494-1245

* Note: ID requirement will be waived for guests with an average rating of 4.5 stars or higher on AirBnB, VRBO or other popular booking platforms. Please send us a screenshot or link to your traveler profile for ID waiver consideration.  
Thank you for your cooperation!
${baseFooter}`;

    return { sms: body, email: { subject: subject_additionalId(unit), body } };
  }

  if (labelKey === "ID_REMINDER") {
    const body =
`Dear ${guest},
Your stay at ${unit}” from ${dates} is approaching. To ensure a smooth check-in, please complete the following step to secure your booking within the next 48 hours. Failure to do so may result in the cancellation of your reservation, and we cannot guarantee the availability of the rental upon your arrival. If you no longer wish to keep this reservation, please cancel it promptly to avoid any unnecessary charges. If you already fulfilled the ID request, please ignore this reminder. We will share check-in details soon!
At your earliest convenience, please submit a proof of photo ID for the primary booker and another adult in your group, using one of the following methods. Accepted forms of ID include a driver’s license, state ID, military ID, student ID, or travel documents like a passport or visa. Make sure to mention the property name and the booking dates in your message. 
* Note: ID requirement will be waived for guests with an average rating of 4.5 stars or higher on AirBnB, VRBO or other popular booking platforms. Please send us a screenshot or link to your traveler profile for ID waiver consideration.  
Email: seabelstaysoffice@gmail.com
SMS/Text: 253-434-5788
WhatsApp: +1-425-494-1245
Thank you for your cooperation! 
Best regards, 
${baseFooter}`;

    return { sms: body, email: { subject: subject_actionRequired(unit), body } };
  }

  if (labelKey === "ID_ALTERNATE") {
    const body =
`Hi ${guest},
If you're not comfortable sharing your government-issued ID, please provide the following information for the primary booker and another adult in your group:
- Full name
- Date of birth
- Driver’s license or passport number
- City, state, and country
- A recent profile photo
Alternatively, if you have an account with Airbnb, VRBO or other popular booking platforms, please send me the link to your traveler’s profile. That should be sufficient as proof of ID.
Thank you!
${baseFooter}`;

    return { sms: body, email: { subject: subject_alternateId(unit), body } };
  }

  if (labelKey === "CHECKIN") {
    const body =
`Hi ${guest},
Thank you for getting back to us and sharing more information about your group!
Please find below the link to your detailed check-in instructions and visuals: ${checkinLink}
The front entrance PIN is the last 4 digits of the phone number used to make the reservation. The PIN ({Insert Number}) will be active during your stay from 3:00 PM of the check-in day until 11:00AM of the check-out day (unless arranged otherwise).
Upon arrival, if you have any difficulty finding or accessing the property, please reach out to us. 
The House Manual & How to Check-out can also be accessed here: ${faqLink}
Thank you and have a wonderful stay. If you need anything, we are just a phone call or text away! 
${baseFooter}`;

    return { sms: body, email: { subject: subject_checkin(unit), body } };
  }

  return { sms:"", email:{ subject:"", body:"" } };
}

function generatorBlock(labelKey, labelTitle) {
  const pack = buildMessagePack(labelKey);
  return {
    title: `Template Generator — ${labelTitle}`,
    body: [
      "SMS + Email generated automatically based on Unit + Guest + Dates.",
      "Use “Use placeholders” toggle if you want placeholders."
    ],
    html: `
      <div class="template-tabs">
        <div class="tab-head">
          <button class="tab-btn active" data-tab="sms">SMS</button>
          <button class="tab-btn" data-tab="email">Email</button>
          <div class="tab-spacer"></div>
          <button class="mini-btn" data-copy="${escapeHtml(pack.sms)}">Copy SMS</button>
          <button class="mini-btn" data-copy="${escapeHtml(pack.email.subject)}">Copy Subject</button>
          <button class="mini-btn" data-copy="${escapeHtml(pack.email.body)}">Copy Email Body</button>
        </div>

        <div class="tab-body">
          <div class="tab-panel show" data-panel="sms">
            <div class="template-box">${escapeHtml(pack.sms)}</div>
          </div>

          <div class="tab-panel" data-panel="email">
            <div class="template-box"><strong>Subject:</strong> ${escapeHtml(pack.email.subject)}</div>
            <div class="template-box" style="margin-top:10px;">${escapeHtml(pack.email.body)}</div>
          </div>
        </div>
      </div>
    `
  };
}

/* Workflow */
const WORKFLOW = [
  {
    row: "single",
    cards: [
      {
        id: "new-booking",
        title: "New Booking from Evolve",
        badge: [["accent","Trigger"]],
        summary: `Booking arrives from: ${BOOKING_SOURCES.join(", ")}.`,
        details: () => ({
          blocks: [
            { title: "Trigger", body: [
              "A new reservation is created/received in Evolve.",
              `Sources include: ${BOOKING_SOURCES.join(", ")}.`
            ]},
            { title: "Personalization (current)", body: [
              `Guest: ${getGuestFirstName()}`,
              `Dates: ${getDateRange()}`,
              `Unit: ${getPropertyName()}`
            ]}
          ]
        })
      }
    ]
  },
  {
    row: "branch2",
    cards: [
      {
        id: "welcome-text-only",
        title: "WELCOME MESSAGE (Text) — Phone only",
        badge: [["warn","Decision"]],
        summary: `Send SMS: Welcome Message.`,
        details: () => ({ blocks: [ generatorBlock("WELCOME","WELCOME MESSAGE") ] })
      },
      {
        id: "welcome-text-email",
        title: "WELCOME MESSAGE (Text + Email) — Phone + Email",
        badge: [["accent","Decision"]],
        summary: `Send SMS + Email: Welcome Message.`,
        details: () => ({ blocks: [ generatorBlock("WELCOME","WELCOME MESSAGE") ] })
      }
    ]
  },
  {
    row: "branch3",
    cards: [
      {
        id: "both-ids",
        title: "BOTH IDS RECEIVED",
        badge: [["ok","ID status"]],
        summary: `Reply confirming both IDs received.`,
        details: () => ({ blocks: [ generatorBlock("BOTH_IDS","BOTH IDS RECEIVED") ] })
      },
      {
        id: "one-id",
        title: "2ND ID REQUEST",
        badge: [["warn","ID status"]],
        summary: `Ask guest for the second ID.`,
        details: () => ({ blocks: [ generatorBlock("SECOND_ID","2ND ID REQUEST") ] })
      },
      {
        id: "refuses-id",
        title: "ID ALTERNATE",
        badge: [["danger","Exception"]],
        summary: `Offer alternate verification options.`,
        details: () => ({ blocks: [ generatorBlock("ID_ALTERNATE","ID ALTERNATE") ] })
      }
    ]
  },
  {
    row: "single",
    cards: [
      {
        id: "5-day-reminder",
        title: "ID REMINDER (within 5 days of arrival)",
        badge: [["warn","Time-based"]],
        summary: `Reminder if IDs not received.`,
        details: () => ({ blocks: [ generatorBlock("ID_REMINDER","ID REMINDER") ] })
      }
    ]
  },
  {
    row: "single",
    cards: [
      {
        id: "2-day-checkin",
        title: "CHECK-IN DETAILS (within 2 days of arrival)",
        badge: [["accent","Time-based"]],
        summary: `Send check-in instructions.`,
        details: () => ({ blocks: [ generatorBlock("CHECKIN","CHECK-IN DETAILS") ] })
      }
    ]
  }
];

function renderBlocks(blocks) {
  return blocks.map((blk) => {
    const hasCustomHtml = typeof blk.html === "string" && blk.html.length > 0;

    const bodyHtml = Array.isArray(blk.body)
      ? `<ul>${blk.body.map(x => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`
      : (blk.body ? `<p>${escapeHtml(blk.body)}</p>` : "");

    return `
      <div class="block">
        <div class="block-title"><strong>${escapeHtml(blk.title)}</strong></div>
        ${bodyHtml}
      </div>
      ${hasCustomHtml ? blk.html : ""}
    `;
  }).join("");
}

function renderCard(card) {
  const badges = (card.badge || []).map(([tone, label]) =>
    `<span class="badge ${escapeHtml(tone)}">${escapeHtml(label)}</span>`
  ).join("");

  return `
    <article class="card" data-card-id="${escapeHtml(card.id)}">
      <div class="head" role="button" tabindex="0" aria-expanded="false">
        <div>
          <h3>${escapeHtml(card.title)}</h3>
          <p class="summary">${escapeHtml(card.summary)}</p>
        </div>
        <div class="badges">${badges}</div>
      </div>
      <div class="details"></div>
    </article>
  `;
}

function renderFlow() {
  const flow = $("flow");
  flow.innerHTML = WORKFLOW.map(group => {
    const cardsHtml = group.cards.map(renderCard).join("");
    return `<div class="row ${group.row}">${cardsHtml}</div>`;
  }).join("");

  flow.querySelectorAll(".card .head").forEach(head => {
    head.addEventListener("click", () => toggleCard(head.closest(".card")));
    head.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleCard(head.closest(".card"));
      }
    });
  });

  flow.addEventListener("click", (e) => {
    const copyBtn = e.target.closest("button[data-copy]");
    if (copyBtn) return copyText(copyBtn.getAttribute("data-copy") || "");

    const tabBtn = e.target.closest(".tab-btn");
    if (!tabBtn) return;

    const wrap = tabBtn.closest(".template-tabs");
    const tab = tabBtn.getAttribute("data-tab");

    wrap.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b === tabBtn));
    wrap.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("show", p.getAttribute("data-panel") === tab));
  });
}

function fillCardDetails(cardEl) {
  const cardId = cardEl.getAttribute("data-card-id");
  const card = WORKFLOW.flatMap(g => g.cards).find(c => c.id === cardId);
  if (!card) return;

  const detailsEl = cardEl.querySelector(".details");
  const payload = card.details ? card.details() : { blocks: [] };
  detailsEl.innerHTML = `<div class="detail-grid">${renderBlocks(payload.blocks || [])}</div>`;
}

function toggleCard(cardEl, forceExpand = null) {
  const head = cardEl.querySelector(".head");
  const expanded = cardEl.classList.contains("expanded");
  const willExpand = forceExpand !== null ? forceExpand : !expanded;

  if (willExpand && !expanded) fillCardDetails(cardEl);

  cardEl.classList.toggle("expanded", willExpand);
  head.setAttribute("aria-expanded", String(willExpand));
}

function expandAll(expand) {
  document.querySelectorAll(".card").forEach(c => toggleCard(c, expand));
}

function refreshExpandedCards() {
  document.querySelectorAll(".card.expanded").forEach(fillCardDetails);
}

function setHref(id, href) {
  const el = $(id);
  if (el) el.href = href;
}

function initLinksPanel() {
  setHref("linkCoHost", IMPORTANT_LINKS.coHostTrainingManual);
  setHref("linkCleanerChecklist", IMPORTANT_LINKS.cleanerChecklist);
  setHref("linkInventory", IMPORTANT_LINKS.inventory);
  setHref("linkTemplates", IMPORTANT_LINKS.guestTemplates);
  setHref("linkEvolveWorkflow", IMPORTANT_LINKS.evolveWorkflow);
  setHref("linkAllUnits", IMPORTANT_LINKS.evolveAllUnits);

  const list = $("evolveDirectList");
  list.innerHTML = Object.entries(IMPORTANT_LINKS.evolveDirect)
    .map(([name, url]) => `<a target="_blank" rel="noopener" href="${escapeHtml(url)}">${escapeHtml(name)}</a>`)
    .join("");
}

function updatePropertyLinks(propertyName) {
  setHref("linkWelcome", IMPORTANT_LINKS.welcomeMessages[propertyName] || IMPORTANT_LINKS.evolveAllUnits);

  let faqs = IMPORTANT_LINKS.faqs["Brighton"];
  if (/Rainier/i.test(propertyName)) faqs = IMPORTANT_LINKS.faqs["Rainier"];
  else if (/Judkins/i.test(propertyName)) faqs = IMPORTANT_LINKS.faqs["Judkins"];
  else if (/Bellevue/i.test(propertyName)) faqs = IMPORTANT_LINKS.faqs["Central Bellevue"];
  setHref("linkFaqs", faqs);

  setHref("linkCheckin", IMPORTANT_LINKS.checkinInstructions[propertyName] || IMPORTANT_LINKS.evolveAllUnits);
  setHref("linkManual", IMPORTANT_LINKS.houseManuals[propertyName] || faqs);

  $("quickCopyBox").textContent = [
    `Guest: ${getGuestFirstName()}`,
    `Dates: ${getDateRange()}`,
    `Unit: ${propertyName}`,
    `Address: ${getUnitAddress(propertyName)}`
  ].join("\n");
}

function initPropertySelector() {
  const sel = $("propertySelect");
  const properties = Object.keys(IMPORTANT_LINKS.welcomeMessages);

  sel.innerHTML = properties.map(p => `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`).join("");
  const defaultProp = properties.find(p => /Brighton Guesthouse/i.test(p)) || properties[0];
  sel.value = defaultProp;

  sel.addEventListener("change", () => { updatePropertyLinks(getPropertyName()); refreshExpandedCards(); });
  $("guestFirstName").addEventListener("input", () => { updatePropertyLinks(getPropertyName()); refreshExpandedCards(); });
  $("checkInDate").addEventListener("change", () => { refreshDatePreview(); updatePropertyLinks(getPropertyName()); refreshExpandedCards(); });
  $("checkOutDate").addEventListener("change", () => { refreshDatePreview(); updatePropertyLinks(getPropertyName()); refreshExpandedCards(); });
  $("usePlaceholders").addEventListener("change", () => { refreshDatePreview(); updatePropertyLinks(getPropertyName()); refreshExpandedCards(); });

  refreshDatePreview();
  updatePropertyLinks(getPropertyName());
}

function initControls() {
  const exp = () => expandAll(true);
  const col = () => expandAll(false);

  $("expandAllBtn").addEventListener("click", exp);
  $("collapseAllBtn").addEventListener("click", col);
  $("expandAllBtn2").addEventListener("click", exp);
  $("collapseAllBtn2").addEventListener("click", col);

  $("copySignatureBtn").addEventListener("click", () => copyText(signatureText(getPropertyName())));
  $("copyGreetingBtn").addEventListener("click", () => copyText(`Hi ${getGuestFirstName()},`));
  $("copyDatesBtn").addEventListener("click", () => copyText(getDateRange()));
  $("copyUnitBtn").addEventListener("click", () => copyText(getPropertyName()));
}

/* ===========================
   BOOKINGS + TAGGING SECTION
   =========================== */

const STATUS = {
  ID_REQUESTED: "ID REQUESTED",
  SECOND_ID_REQUESTED: "2ID REQUESTED",
  ID_REMINDER: "REMINDER",
  ID_ALTERNATE: "ALTERNATIVE ID",
  CANCELLED: "CANCELLED BOOKING",
  CONFIRMED: "CONFIRMED BOOKING",
};

const BOOKING_STORE_KEY = "SBS_BOOKINGS_V2";

function loadBookings() {
  try { return JSON.parse(localStorage.getItem(BOOKING_STORE_KEY) || "[]"); }
  catch { return []; }
}
function saveBookings(list) {
  localStorage.setItem(BOOKING_STORE_KEY, JSON.stringify(list));
}
function uid() {
  return "b_" + Math.random().toString(16).slice(2) + "_" + Date.now().toString(16);
}
function safeDate(v) {
  const d = parseDate(v);
  return d ? d : null;
}

function notifyUser(title, message) {
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      new Notification(title, { body: message });
      return;
    }
    if (Notification.permission !== "denied") {
      Notification.requestPermission().then(p => {
        if (p === "granted") new Notification(title, { body: message });
        else alert(`${title}\n\n${message}`);
      });
      return;
    }
  }
  alert(`${title}\n\n${message}`);
}

function persistBookingPatch(id, patch) {
  const list = loadBookings();
  const idx = list.findIndex(x => x.id === id);
  if (idx === -1) return;
  list[idx] = { ...list[idx], ...patch };
  saveBookings(list);
}

function scheduleReminderForBooking(b) {
  if (b.status !== "ID_REMINDER") return;
  const checkIn = safeDate(b.checkIn);
  if (!checkIn) return;

  const target = new Date(checkIn);
  target.setDate(target.getDate() - 5);
  target.setHours(9, 0, 0, 0);

  const now = new Date();
  const ms = target.getTime() - now.getTime();

  if (ms <= 0) {
    if (!b.reminderSent) {
      notifyUser("ID Reminder", `Send ID reminder to ${b.guest} for ${b.unit} (${b.checkIn} → ${b.checkOut}).`);
      persistBookingPatch(b.id, { reminderSent: true });
    }
    return;
  }

  window.__reminders = window.__reminders || {};
  if (window.__reminders[b.id]) clearTimeout(window.__reminders[b.id]);

  window.__reminders[b.id] = setTimeout(() => {
    notifyUser("ID Reminder", `Send ID reminder to ${b.guest} for ${b.unit} (${b.checkIn} → ${b.checkOut}).`);
    persistBookingPatch(b.id, { reminderSent: true });
    renderBookings();
  }, ms);
}

function scheduleAllReminders() {
  const list = loadBookings();
  list.forEach(scheduleReminderForBooking);
}

function statusPillClass(statusKey){
  if (statusKey === "ID_REQUESTED") return "pill idreq";
  if (statusKey === "SECOND_ID_REQUESTED") return "pill second";
  if (statusKey === "ID_REMINDER") return "pill rem";
  if (statusKey === "ID_ALTERNATE") return "pill alt";
  if (statusKey === "CANCELLED") return "pill cancel";
  if (statusKey === "CONFIRMED") return "pill conf";
  return "pill";
}

function rowHighlightClass(statusKey){
  if (statusKey === "ID_REQUESTED") return "hl-idreq";
  if (statusKey === "SECOND_ID_REQUESTED") return "hl-second";
  if (statusKey === "ID_REMINDER") return "hl-rem";
  if (statusKey === "CANCELLED") return "hl-cancel";
  if (statusKey === "CONFIRMED") return "hl-conf";
  return "";
}

function statusOptionsHTML(current) {
  return Object.keys(STATUS).map(k => {
    const sel = (k === current) ? "selected" : "";
    return `<option value="${escapeHtml(k)}" ${sel}>${escapeHtml(STATUS[k])}</option>`;
  }).join("");
}

function updateMetricsAndChart(list){
  const counts = {
    total: list.length,
    ID_REQUESTED: 0,
    SECOND_ID_REQUESTED: 0,
    ID_REMINDER: 0,
    ID_ALTERNATE: 0,
    CANCELLED: 0,
    CONFIRMED: 0
  };
  list.forEach(b => { if (counts[b.status] !== undefined) counts[b.status]++; });

  $("mTotal").textContent = counts.total;
  $("mIdReq").textContent = counts.ID_REQUESTED;
  $("m2IdReq").textContent = counts.SECOND_ID_REQUESTED;
  $("mReminder").textContent = counts.ID_REMINDER;
  $("mConfirmed").textContent = counts.CONFIRMED;
  $("mCancelled").textContent = counts.CANCELLED;

  const max = Math.max(1, counts.total);

  const barSpec = [
    ["ID REQUESTED", "ID_REQUESTED", "rgba(122,162,255,.75)"],
    ["2ID REQUESTED", "SECOND_ID_REQUESTED", "rgba(255,220,120,.80)"],
    ["REMINDER", "ID_REMINDER", "rgba(255,220,120,.85)"],
    ["ALT ID", "ID_ALTERNATE", "rgba(255,255,255,.55)"],
    ["CONFIRMED", "CONFIRMED", "rgba(92,255,185,.75)"],
    ["CANCELLED", "CANCELLED", "rgba(255,107,122,.80)"],
  ];

  $("statusBars").innerHTML = barSpec.map(([label, key, color]) => {
    const v = counts[key];
    const pct = Math.round((v / max) * 100);
    return `
      <div class="bar-row">
        <div class="bar-label">${escapeHtml(label)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%; background:${color};"></div></div>
        <div class="bar-value">${v}</div>
      </div>
    `;
  }).join("");
}


function daysUntil(dateStr){
  if (!dateStr) return null;
  const d = new Date(dateStr + "T00:00:00");
  if (isNaN(d.getTime())) return null;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diff = Math.round((d.getTime() - today.getTime()) / (1000*60*60*24));
  return diff;
}

function computeNextAction(b){
  const du = daysUntil(b.checkIn);
  const status = b.status;

  if (status === "CANCELLED") return { label: "Cancelled", tone: "done", urgent: false, priority: 99 };
  if (status === "CONFIRMED") return { label: "Confirmed", tone: "done", urgent: false, priority: 90 };

  // Time-based nudges
  if (du !== null && du <= 2) {
    return { label: "Send CHECK‑IN DETAILS", tone: "urgent", urgent: true, priority: 0 };
  }
  if (du !== null && du <= 5 && (status === "ID_REQUESTED" || status === "SECOND_ID_REQUESTED")) {
    return { label: "Send ID REMINDER", tone: "soon", urgent: true, priority: 1 };
  }

  // Status-based nudges
  if (status === "ID_REMINDER") return { label: "Follow up now", tone: "urgent", urgent: true, priority: 0 };
  if (status === "SECOND_ID_REQUESTED") return { label: "Waiting 2nd ID", tone: "soon", urgent: false, priority: 2 };
  if (status === "ID_REQUESTED") return { label: "Waiting IDs", tone: "soon", urgent: false, priority: 3 };
  if (status === "ID_ALTERNATE") return { label: "Request alt info", tone: "soon", urgent: false, priority: 4 };

  return { label: "Review", tone: "", urgent: false, priority: 5 };
}

function updateDashboard(list){
  const needs = list.filter(b => computeNextAction(b).urgent && b.status !== "CONFIRMED" && b.status !== "CANCELLED").length;
  const soon = list.filter(b => {
    const du = daysUntil(b.checkIn);
    return du !== null && du <= 2 && b.status !== "CONFIRMED" && b.status !== "CANCELLED";
  }).length;
  const ids = list.filter(b => b.status === "ID_REQUESTED" || b.status === "SECOND_ID_REQUESTED").length;
  const ok = list.filter(b => b.status === "CONFIRMED").length;

  if ($("dNeeds")) $("dNeeds").textContent = String(needs);
  if ($("dSoon")) $("dSoon").textContent = String(soon);
  if ($("dIds")) $("dIds").textContent = String(ids);
  if ($("dOk")) $("dOk").textContent = String(ok);
}

function runDailyNag(list){
  // Gentle daily "nag" at 9:00 AM while the page is open.
  const now = new Date();
  const key = `sbs_nag_${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`;
  const already = localStorage.getItem(key) === "1";
  if (already) return;

  const hour = now.getHours();
  if (hour < 9) return;

  const urgentCount = list.filter(b => computeNextAction(b).urgent && b.status !== "CONFIRMED" && b.status !== "CANCELLED").length;
  if (urgentCount <= 0) return;

  notifyUser("Bookings need attention", `You have ${urgentCount} booking(s) that need action today.`);
  localStorage.setItem(key, "1");
}


function renderBookings() {
  const tbody = $("trackerTbody");
  const q = ($("trackerSearch")?.value || "").toLowerCase().trim();
  const f = $("trackerStatusFilter")?.value || "ALL";

  let list = loadBookings();

  updateMetricsAndChart(list);
  updateDashboard(list);
  runDailyNag(list);

  // Priority sort (ADHD-friendly): urgent → soon → others
  list = list.map(b => ({ ...b, __next: computeNextAction(b) }));
  list.sort((a,b) => {
    if (a.__next.priority !== b.__next.priority) return a.__next.priority - b.__next.priority;
    const ad = (a.checkIn||"").localeCompare(b.checkIn||"");
    if (ad !== 0) return ad;
    return (a.guest||"").localeCompare(b.guest||"");
  });

  if (q) {
    list = list.filter(b =>
      (b.guest || "").toLowerCase().includes(q) ||
      (b.unit || "").toLowerCase().includes(q)
    );
  }
  if (f !== "ALL") list = list.filter(b => b.status === f);

  // Dashboard quick filters
  const dashMode = window.__dashMode || null;
  if (dashMode && (q && q.trim() && q.trim() !== "" && q.trim() !== "" && q.trim() !== "")) {
    // If user typed a real query, disable dash mode.
    if (q.trim() !== "") window.__dashMode = null;
  }
  if (dashMode === "WAITING_IDS") list = list.filter(b => b.status === "ID_REQUESTED" || b.status === "SECOND_ID_REQUESTED");
  if (dashMode === "NEEDS_ACTION") list = list.filter(b => (b.__next?.urgent) && b.status !== "CONFIRMED" && b.status !== "CANCELLED");
  if (dashMode === "ARRIVING_SOON") list = list.filter(b => {
    const du = daysUntil(b.checkIn);
    return du !== null && du <= 2 && b.status !== "CONFIRMED" && b.status !== "CANCELLED";
  });

  tbody.innerHTML = list.map(b => `
    <tr class="${rowHighlightClass(b.status)} ${b.__next && b.__next.urgent ? "needs-action" : ""}" data-id="${escapeHtml(b.id)}">
      <td><strong>${escapeHtml(b.guest)}</strong></td>
      <td>${escapeHtml(b.unit)}</td>
      <td>${escapeHtml(b.checkIn || "")}</td>
      <td>${escapeHtml(b.checkOut || "")}</td>
      <td>
        <div style="display:flex; gap:10px; align-items:center; flex-wrap:wrap;">
          <span class="${statusPillClass(b.status)}">${escapeHtml(STATUS[b.status] || b.status)}</span>
          <select class="status-select" data-action="status">
            ${statusOptionsHTML(b.status)}
          </select>
        </div>
      </td>
      <td>
        <span class="next-pill ${b.__next.tone}">${escapeHtml(b.__next.label)}</span>
      </td>
      <td>
        <span class="next-pill ${b.__next.tone}">${escapeHtml(b.__next.label)}</span>
      </td>
      <td>
        <div class="row-actions">
          <button class="mini-btn" data-action="load">Load</button>
          <button class="mini-btn" data-action="calendar">Calendar</button>
          <button class="mini-btn" data-action="delete">Delete</button>
        </div>
      </td>
    </tr>
  `).join("");
}

function getCurrentInputsBooking() {
  const unit = getPropertyName();
  const guest = (usePlaceholders() ? "{Guest’s First Name}" : getGuestFirstName());
  const checkIn = $("checkInDate")?.value || "";
  const checkOut = $("checkOutDate")?.value || "";
  return { unit, guest, checkIn, checkOut };
}

function addBookingFromInputs() {
  const { unit, guest, checkIn, checkOut } = getCurrentInputsBooking();
  if (!unit || !checkIn || !checkOut) {
    toast("Fill Unit + Check-in + Check-out first.");
    return;
  }

  const b = {
    id: uid(),
    guest,
    unit,
    checkIn,
    checkOut,
    status: "ID_REQUESTED",
    reminderSent: false,
    createdAt: Date.now(),
    calendarEventId: null
  };

  const list = loadBookings();
  list.push(b);
  saveBookings(list);

  renderBookings();
  toast("Booking saved.");
}

function loadBookingToInputs(b) {
  $("guestFirstName").value = (b.guest || "").replaceAll("{Guest’s First Name}", "");
  $("checkInDate").value = b.checkIn || "";
  $("checkOutDate").value = b.checkOut || "";
  $("propertySelect").value = b.unit || $("propertySelect").value;

  refreshDatePreview();
  updatePropertyLinks(getPropertyName());
  refreshExpandedCards();
}

/* GOOGLE CALENDAR (unchanged logic) */
let gapiInited = false;
let gisInited = false;
let tokenClient = null;

function injectScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.defer = true;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

async function initGoogleClients() {
  const apiKey = $("gcalApiKey")?.value?.trim();
  const clientId = $("gcalClientId")?.value?.trim();
  if (!apiKey || !clientId) {
    toast("Enter Google API Key + OAuth Client ID (in settings).");
    return false;
  }

  if (!window.gapi) await injectScript("https://apis.google.com/js/api.js");
  if (!window.google?.accounts) await injectScript("https://accounts.google.com/gsi/client");

  await new Promise((resolve) => {
    gapi.load("client", async () => {
      await gapi.client.init({
        apiKey,
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
      });
      gapiInited = true;
      resolve();
    });
  });

  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: clientId,
    scope: "https://www.googleapis.com/auth/calendar.events",
    callback: () => {},
  });
  gisInited = true;

  return true;
}

async function connectGoogleCalendar() {
  const ok = await initGoogleClients();
  if (!ok) return;

  tokenClient.callback = (resp) => {
    if (resp.error) {
      console.error(resp);
      toast("Google auth failed.");
      return;
    }
    toast("Google Calendar connected.");
  };

  tokenClient.requestAccessToken({ prompt: "consent" });
}

function checkoutEventPayload(b) {
  const calendarId = $("gcalCalendarId")?.value?.trim() || "primary";
  const checkout = safeDate(b.checkOut);
  if (!checkout) return null;

  const start = new Date(checkout);
  start.setHours(11, 30, 0, 0);

  const end = new Date(start);
  end.setHours(end.getHours() + 2);

  return {
    calendarId,
    resource: {
      summary: `${b.unit} – ${b.guest}`,
      description: `Created by JK CLEANING SERVICES LLC.\nStatus: ${STATUS[b.status] || b.status}\nBooking: ${b.checkIn} → ${b.checkOut}`,
      location: getUnitAddress(b.unit),
      start: { dateTime: start.toISOString() },
      end: { dateTime: end.toISOString() },
    }
  };
}

async function createCleanerEventIfConfirmed(b) {
  if (b.status !== "CONFIRMED") return;

  if (!gapiInited || !gisInited || !gapi.client.getToken()) {
    toast("Connect Google Calendar first.");
    return;
  }

  const payload = checkoutEventPayload(b);
  if (!payload) { toast("Missing/invalid check-out date."); return; }
  if (b.calendarEventId) { toast("Calendar event already created."); return; }

  try {
    const res = await gapi.client.calendar.events.insert(payload);
    const eventId = res?.result?.id;
    if (eventId) {
      persistBookingPatch(b.id, { calendarEventId: eventId });
      toast("Cleaner event created.");
      renderBookings();
    } else toast("Event insert returned no ID.");
  } catch (e) {
    console.error(e);
    toast("Failed to create event.");
  }
}


function initDashboardQuickFilters(){
  const el = $("trackerDashboard");
  if (!el) return;
  el.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-dash]");
    if (!btn) return;
    const mode = btn.getAttribute("data-dash");

    // reset
    $("trackerSearch").value = "";
    $("trackerStatusFilter").value = "ALL";

    if (mode === "CONFIRMED") $("trackerStatusFilter").value = "CONFIRMED";
    if (mode === "WAITING_IDS") {
      // show both ID_REQUESTED and SECOND_ID_REQUESTED by using search hack token
      $("trackerSearch").value = " "; // triggers render, we filter manually below
      // We'll handle in renderBookings by allowing ALL and then match types
    }
    // For NEEDS_ACTION & ARRIVING_SOON we leave status=ALL and use search token too
    if (mode === "NEEDS_ACTION" || mode === "ARRIVING_SOON") $("trackerSearch").value = " ";

    // store mode so renderBookings can apply additional filter
    window.__dashMode = mode;
    renderBookings();
    document.getElementById("bookingTracker")?.scrollIntoView({behavior:"smooth", block:"start"});
  });
}


function initBookingTracker() {
  renderBookings();
  scheduleAllReminders();
  initDashboardQuickFilters();

  $("saveBookingBtn").addEventListener("click", addBookingFromInputs);
  $("trackerSearch").addEventListener("input", renderBookings);
  $("trackerStatusFilter").addEventListener("change", renderBookings);

  $("notifyTestBtn").addEventListener("click", () => {
    notifyUser("Test Reminder", "This is how your 5-day ID reminder notification will look.");
  });

  $("connectGoogleBtn").addEventListener("click", connectGoogleCalendar);

  $("trackerTbody").addEventListener("change", async (e) => {
    const row = e.target.closest("tr[data-id]");
    if (!row) return;
    const id = row.getAttribute("data-id");
    const action = e.target.getAttribute("data-action");
    if (action !== "status") return;

    const newStatus = e.target.value;
    persistBookingPatch(id, { status: newStatus });

    const updated = loadBookings().find(x => x.id === id);
    if (newStatus === "ID_REMINDER" && updated) scheduleReminderForBooking(updated);
    if (newStatus === "CONFIRMED" && updated) await createCleanerEventIfConfirmed(updated);

    toast(`Status updated: ${STATUS[newStatus] || newStatus}`);
    renderBookings();
  });

  $("trackerTbody").addEventListener("click", async (e) => {
    const btn = e.target.closest("button[data-action]");
    if (!btn) return;

    const row = btn.closest("tr[data-id]");
    if (!row) return;

    const id = row.getAttribute("data-id");
    const action = btn.getAttribute("data-action");
    const list = loadBookings();
    const b = list.find(x => x.id === id);
    if (!b) return;

    if (action === "delete") {
      saveBookings(list.filter(x => x.id !== id));
      renderBookings();
      toast("Deleted.");
      return;
    }

    if (action === "load") {
      loadBookingToInputs(b);
      toast("Loaded to inputs.");
      return;
    }

    if (action === "calendar") {
      if (b.status !== "CONFIRMED") {
        toast("Set status to CONFIRMED BOOKING to create calendar event.");
        return;
      }
      await createCleanerEventIfConfirmed(b);
      return;
    }
  });
}

/* Boot */
(function boot(){
  initLinksPanel();
  initPropertySelector();
  renderFlow();
  initControls();
  initBookingTracker();
})();