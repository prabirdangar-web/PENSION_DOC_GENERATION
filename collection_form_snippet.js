<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Pension / Superannuation Data Collection Form</title>
<style>
  :root{--navy:#1b3a5c;--navy-dark:#0f2a45;--navy-mid:#244b73;--gold:#b0803a;--gold-d:#8f651f;--line:#d5dae0;--ink:#1c2430;--muted:#5f6b78;--ok:#2e7d4f;--danger:#b3372e;--bg:#eef1f5;--card:#fff;--soft:#f6f8fb;}
  *{box-sizing:border-box;}
  html{scroll-behavior:smooth;}
  body{margin:0;font-family:"Segoe UI",system-ui,-apple-system,Arial,sans-serif;background:var(--bg);color:var(--ink);-webkit-font-smoothing:antialiased;}
  header{background:linear-gradient(135deg,var(--navy-dark),var(--navy-mid));color:#fff;padding:26px 22px 40px;text-align:center;position:relative;}
  header::after{content:"";position:absolute;left:0;right:0;bottom:0;height:4px;background:linear-gradient(90deg,var(--gold),#d9ad62,var(--gold));}
  .crest{width:54px;height:54px;border-radius:50%;margin:0 auto 10px;background:rgba(255,255,255,.12);border:2px solid rgba(255,255,255,.35);display:flex;align-items:center;justify-content:center;font-size:26px;}
  header h1{margin:0 0 6px;font-size:21px;font-weight:700;letter-spacing:.2px;}
  header p{margin:0 auto;max-width:640px;font-size:13px;color:#c5d4e3;line-height:1.5;}
  .progress{position:sticky;top:0;z-index:20;background:rgba(255,255,255,.96);backdrop-filter:blur(6px);border-bottom:1px solid var(--line);padding:8px 18px;display:flex;align-items:center;gap:12px;}
  .progress .bar{flex:1;height:8px;background:#e3e8ee;border-radius:99px;overflow:hidden;}
  .progress .bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--gold),#d9ad62);border-radius:99px;transition:width .3s;}
  .progress span{font-size:12px;font-weight:700;color:var(--navy);min-width:92px;text-align:right;}
  .wrap{max-width:1040px;margin:22px auto;padding:0 16px 120px;}
  fieldset{border:none;border-radius:12px;padding:0 0 20px;margin:0 0 20px;background:var(--card);min-width:0;box-shadow:0 1px 3px rgba(16,35,60,.08),0 6px 18px rgba(16,35,60,.05);overflow:hidden;}
  legend{float:left;width:100%;padding:13px 20px;margin:0 0 18px;font-size:15px;font-weight:700;color:var(--navy);background:linear-gradient(90deg,#f1f5fa,#fff);border-bottom:1px solid var(--line);display:flex;align-items:center;gap:10px;}
  legend + *{clear:both;}
  fieldset > *:not(legend){margin-left:20px;margin-right:20px;}
  .secno{width:26px;height:26px;border-radius:50%;background:var(--navy);color:#fff;font-size:13px;display:inline-flex;align-items:center;justify-content:center;flex:0 0 26px;}
  .form-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:16px 20px;}
  label{display:block;font-size:12px;color:#44505e;margin-bottom:5px;font-weight:600;}
  input[type=text],input[type=number],input[type=date],select,textarea{
    width:100%;padding:10px 11px;border:1.5px solid #cfd6de;border-radius:8px;font-size:14px;font-family:inherit;background:#fff;color:var(--ink);transition:border-color .15s,box-shadow .15s;min-height:40px;
  }
  select{appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%231b3a5c' stroke-width='2'/></svg>");background-repeat:no-repeat;background-position:right 12px center;padding-right:32px;}
  textarea{resize:vertical;min-height:64px;}
  input:hover,select:hover,textarea:hover{border-color:#a9b4c0;}
  input:focus,select:focus,textarea:focus{outline:none;border-color:var(--gold);box-shadow:0 0 0 3px rgba(176,128,58,.2);}
  input.bad,select.bad{border-color:var(--danger);box-shadow:0 0 0 3px rgba(179,55,46,.15);}
  .hint{font-size:11px;color:#7a8592;margin-top:4px;line-height:1.4;}
  .note{font-size:12.5px;color:var(--muted);margin:0 20px 14px;background:var(--soft);border-left:3px solid var(--gold);padding:8px 12px;border-radius:0 6px 6px 0;}
  .full{grid-column:1/-1;}
  .actions{position:fixed;left:0;right:0;bottom:0;background:rgba(255,255,255,.97);backdrop-filter:blur(6px);border-top:1px solid var(--line);padding:12px 22px;display:flex;gap:10px;justify-content:center;z-index:30;box-shadow:0 -4px 14px rgba(16,35,60,.08);}
  .btn{cursor:pointer;border:none;border-radius:8px;padding:12px 34px;font-size:15px;font-weight:700;transition:.15s;}
  .btn-primary{background:linear-gradient(180deg,var(--gold),var(--gold-d));color:#fff;box-shadow:0 2px 6px rgba(143,101,31,.35);}
  .btn-primary:hover{filter:brightness(1.08);transform:translateY(-1px);}
  .btn-primary:disabled{opacity:.6;cursor:default;transform:none;}
  .btn-ghost{background:#fff;color:var(--navy);border:1.5px solid var(--line);}
  .status{max-width:1040px;margin:14px auto 0;padding:12px 16px;border-radius:8px;font-size:13.5px;display:none;font-weight:600;}
  .status.ok{background:#e2f3e8;color:var(--ok);display:block;border:1px solid #b9dfc7;}
  .status.err{background:#fbe6e4;color:var(--danger);display:block;border:1px solid #f0c1bc;}
  .required::after{content:" *";color:var(--danger);}
  .hp{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden;}
  .off{opacity:.45;}
  .off input,.off select,.off textarea,input:disabled,select:disabled,textarea:disabled,input[readonly]{background:#eef0f2;cursor:not-allowed;}
  fieldset.off{background:#f6f7f8;}
  .rowgrid{display:grid;gap:8px 12px;align-items:end;margin-bottom:10px;}
  .edu{grid-template-columns:190px 1.1fr 1.3fr 105px 80px 1.1fr;}
  .svc{grid-template-columns:230px 1.6fr 160px 1.2fr;}
  .rowhead{font-size:11px;font-weight:700;color:var(--navy);text-transform:uppercase;letter-spacing:.4px;border-bottom:2px solid var(--line);padding-bottom:6px;align-items:end;}
  .degree{font-size:13px;font-weight:700;color:var(--navy);padding-bottom:11px;}
  .cell{min-width:0;}
  .mlabel{display:none;font-size:11px;color:var(--muted);font-weight:600;margin-bottom:3px;}
  /* success dialog */
  .overlay{position:fixed;inset:0;background:rgba(10,24,40,.6);display:none;align-items:center;justify-content:center;z-index:100;padding:16px;}
  .overlay.show{display:flex;}
  .dialog{background:#fff;border-radius:16px;padding:30px 28px;max-width:420px;width:100%;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,.35);}
  .dialog .tick{width:64px;height:64px;border-radius:50%;background:#e2f3e8;color:var(--ok);font-size:34px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;}
  .dialog h2{margin:0 0 6px;color:var(--navy);font-size:20px;}
  .dialog p{margin:0 0 12px;color:var(--muted);font-size:13.5px;line-height:1.5;}
  .dialog .ref{background:var(--soft);border:1px dashed #b8c3d0;border-radius:8px;padding:8px;font-family:Consolas,monospace;font-size:13px;color:var(--navy);margin-bottom:16px;word-break:break-all;}
  @media(max-width:760px){
    header{padding:20px 14px 34px;} header h1{font-size:18px;}
    .rowhead{display:none;}
    .edu,.svc{grid-template-columns:1fr 1fr;padding:12px 0;border-bottom:1px dashed var(--line);}
    .degree{grid-column:1/-1;padding-bottom:0;}
    .mlabel{display:block;}
    .cell.empty{display:none;}
    fieldset > *:not(legend){margin-left:14px;margin-right:14px;}
    .btn{width:100%;} .progress span{min-width:70px;font-size:11px;}
  }
</style>
</head>
<body>
<header>
  <div class="crest">🏫</div>
  <h1>Pension / Superannuation Data Collection Form</h1>
  <p>Please fill in your school's details and your own details accurately, in BLOCK LETTERS where possible. Fields marked <b>*</b> are compulsory. Fields that do not apply to you switch off automatically.</p>
</header>
<div class="progress"><div class="bar"><i id="progFill"></i></div><span id="progTxt">0% filled</span></div>

<div class="wrap">
  <div id="topStatus" class="status"></div>
  <form id="pensionForm" onsubmit="return false"></form>
</div>

<div class="hp" aria-hidden="true"><label>Website <input type="text" id="hpWebsite" tabindex="-1" autocomplete="off"></label></div>

<div class="actions">
  <button class="btn btn-primary" id="btnSubmit" type="button">Submit Details</button>
</div>

<div class="overlay" id="doneOverlay">
  <div class="dialog">
    <div class="tick">✓</div>
    <h2>Submitted successfully</h2>
    <p>Thank you. Your pension details have reached the school office. No further action is needed.</p>
    <div class="ref">Reference: <span id="refId">-</span></div>
    <button class="btn btn-primary" id="btnDone" type="button">OK</button>
  </div>
</div>

<script>
// Live Web App URL (Apps Script deployment that writes to the TFHS Pension Collection sheet)
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyvcaz2-XtfF3lmuAM7jW23_41ammx2CXchN0Q4e8B4bahj-loepPuGkyC4eg68MdZcFw/exec";

const DESIGNATIONS = ["ASSISTANT TEACHER","CLERK","GR-D STAFF","HEADMASTER","HEADMISTRESS","AHM","LIBRARIAN","TEACHER-IN-CHARGE"];
const GRADE_PAYS = ["1700","1800","2600","2900","3900","4100","4400","4700","4800","5400"];
const CHARGE_CAUSES = ["Superannuation Retirement From Service","Resignation from the Post of Teacher-In-Charge / H.M.","Others"];
const ADMIN_STATUSES = ["President [M.C.]","Member Secretary [Ad-hoc Committee]","Administrator","Secretary [M.C.]"];
const HOI_DESIGNATIONS = ["HEADMASTER","HEADMISTRESS","TEACHER-IN-CHARGE"];
const EMAIL_DEFAULT = "@gmail.com";

/* ---------- field groups that switch on/off ---------- */
const CHARGE_FIELDS  = ["chargeHandOverCause","chargeHandOverToName","chargeHandOverToPost","chargeHandOverDate","ticChargeFrom"];
const SPOUSE_SERVICE = ["spouseOffice","spouseDept","spouseDoj","spouseDesignation"];

/* ---------- simple sections (generic grid) ---------- */
const SECTIONS = [
  { title:"School Information", fields:[
    {id:"schoolName", label:"School Name", type:"text", required:true},
    {id:"schoolAddress", label:"School Address", type:"textarea"},
    {id:"schoolSubDiv", label:"Sub-Division", type:"text"},
    {id:"schoolRecognisedDate", label:"School Recognised W.E.F.", type:"date"},
    {id:"schoolMail", label:"School e-Mail ID", type:"text", email:true, hint:"Type your ID before @gmail.com (change the domain if different)."},
    {id:"hoiMobile", label:"HOI Mobile No.", type:"text"},
    {id:"currentUserId", label:"Current User ID (School, e-Pension)", type:"text"},
    {id:"diseCode", label:"DISE / UDISE Code of School", type:"text"},
    {id:"treasury", label:"Treasury", type:"text"},
    {id:"hoiStatus", label:"Present HOI Status", type:"select", options:DESIGNATIONS},
    {id:"adminStatus", label:"Administrative Status (M.C. post)", type:"select", options:ADMIN_STATUSES}
  ]},
  { title:"Employee Details", fields:[
    {id:"staffName", label:"Name of the Staff", type:"text", required:true},
    {id:"gender", label:"Sex", type:"select", options:["MALE","FEMALE"]},
    {id:"designation", label:"Designation", type:"select", options:DESIGNATIONS},
    {id:"employeeCode", label:"Employee Code", type:"text"},
    {id:"applicationId", label:"Application ID", type:"text"},
    {id:"employeeMobile", label:"Employee Mobile No.", type:"text"},
    {id:"dob", label:"Date of Birth", type:"date"},
    {id:"lastGradePay", label:"Last Grade Pay", type:"select", options:GRADE_PAYS}
  ]},
  { title:"Educational Qualifications", layout:"edu" },
  { title:"Service History", layout:"service", fields:[
    {id:"medicalLeave", label:"Medical Leave Enjoyed (days)", type:"number"},
    {id:"halfPayLeave", label:"Half Pay Leave (days)", type:"number"},
    {id:"extraOrdinaryLeave", label:"Extra Ordinary Leave (days)", type:"number"},
    {id:"specialLeave", label:"Special Leave (days)", type:"number"},
    {id:"hraOverdrawn", label:"HRA / Salary Overdrawn, if any (Rs.)", type:"number"},
    {id:"challanNoDate", label:"Challan No. & Date (if refunded)", type:"text"}
  ]},
  { title:"Pay & Pension Inputs", fields:[
    {id:"lastBasicPay", label:"Last (Final) Basic Pay (Rs.)", type:"number", hint:"The final basic pay used for pension/gratuity — i.e. AFTER the last applicable 1st-July increment, if any."},
    {id:"lastButBasicPay", label:"Basic Pay Before Last Increment (Rs.)", type:"number", hint:"The basic pay as currently drawn, BEFORE the 1st-July increment referenced below."},
    {id:"existingIncrementDate", label:"Existing Increment Date (as on date for Pay Cert)", type:"date", hint:"The 1st-July date on which the Basic Pay below was already confirmed/drawn."},
    {id:"existingIncrementAmount", label:"Basic Pay As On That Date (Rs.)", type:"number", hint:"Leave blank to reuse 'Basic Pay Before Last Increment' above."},
    {id:"lastIncrementDate", label:"Date of Last/Next 1st-July Increment", type:"date", hint:"Leave blank or equal to the increment-before date if no increment falls due before retirement."},
    {id:"daPercent", label:"D.A. @ (%)", type:"number"},
    {id:"hraMode", label:"HRA Type", type:"select", options:["PERCENT","FIXED"], hint:"Choose PERCENT to enter a rate below, or FIXED to enter a flat amount."},
    {id:"hraPercentValue", label:"HRA Rate (%), if PERCENT", type:"number"},
    {id:"hraFixedAmount", label:"Fixed HRA Amount (Rs.), if FIXED", type:"number"},
    {id:"commutationOpted", label:"Commutation Pension [Yes / No]", type:"select", options:["YES","NO"]},
    {id:"commutationPercent", label:"Commutation (%) if Yes", type:"number", attrs:'min="1" max="100" step="any" placeholder="e.g. 40"', hint:"Enter the whole percentage — type 40 for 40% (not 0.4)."},
    {id:"ppoNo", label:"PPO No.", type:"text"},
    {id:"ppoMemo", label:"PPO Memo No. & Date", type:"text"},
    {id:"pfGross", label:"PF Gross (Rs.)", type:"number"}
  ]},
  { title:"Spouse Details", fields:[
    {id:"spouseName", label:"Spouse Name", type:"text"},
    {id:"spouseRelation", label:"Spouse Relation", type:"select", options:["WIFE","HUSBAND"]},
    {id:"spouseStatus", label:"Spouse Status", type:"select", options:["IN SERVICE","HOUSEWIFE","UN MARRIED","NOT IN SERVICE"]},
    {id:"spouseOffice", label:"Spouse Office Name & Address (if in service)", type:"textarea"},
    {id:"spouseDept", label:"Spouse Department (if in service)", type:"text"},
    {id:"spouseDoj", label:"Spouse Date of Joining (if in service)", type:"date"},
    {id:"spouseDesignation", label:"Spouse Designation (if in service)", type:"text"},
    {id:"spouseDob", label:"Spouse Date of Birth", type:"date"},
    {id:"selfSpouseAddress", label:"Self / Spouse Residential Address", type:"textarea"},
    {id:"spouseBankName", label:"Spouse Bank Name", type:"text"},
    {id:"spouseBranchName", label:"Spouse Bank Branch", type:"text"},
    {id:"spouseAccountNo", label:"Spouse Account No.", type:"text"}
  ]},
  { title:"Children (Nominees)", fields:[
    {id:"child1Name", label:"Child 1 - Name", type:"text"},
    {id:"child1Relation", label:"Child 1 - Relation", type:"select", options:["SON","DAUGHTER"]},
    {id:"child1Dob", label:"Child 1 - Date of Birth", type:"date"},
    {id:"child1GratuityShare", label:"Child 1 - Gratuity Share % (optional)", type:"number", hint:"Leave blank to split evenly among children entered."},
    {id:"child2Name", label:"Child 2 - Name", type:"text"},
    {id:"child2Relation", label:"Child 2 - Relation", type:"select", options:["SON","DAUGHTER"]},
    {id:"child2Dob", label:"Child 2 - Date of Birth", type:"date"},
    {id:"child2GratuityShare", label:"Child 2 - Gratuity Share % (optional)", type:"number"},
    {id:"child3Name", label:"Child 3 - Name", type:"text"},
    {id:"child3Relation", label:"Child 3 - Relation", type:"select", options:["SON","DAUGHTER"]},
    {id:"child3Dob", label:"Child 3 - Date of Birth", type:"date"},
    {id:"child3GratuityShare", label:"Child 3 - Gratuity Share % (optional)", type:"number"}
  ]},
  { title:"Charge Hand-over / Administrative", id:"chargeSection", note:"Applicable only if the employee is Headmaster / Headmistress / Teacher-in-Charge. Otherwise this part stays inactive.", fields:[
    {id:"chargeHandOverCause", label:"Reason for Charge Hand-over", type:"select", options:CHARGE_CAUSES},
    {id:"chargeHandOverToName", label:"Incoming Officer - Name", type:"text"},
    {id:"chargeHandOverToPost", label:"Incoming Officer - Post", type:"select", options:DESIGNATIONS},
    {id:"chargeHandOverDate", label:"Charge Hand-over Date of Execution", type:"date"},
    {id:"ticChargeFrom", label:"T.I.C. Charge From (existing user-id date)", type:"date"},
    {id:"cpcName", label:"CPC Name / Address (Circle Project Co-ordinator)", type:"text"}
  ]}
];

/* ---------- education: one degree per line ---------- */
const EDU_ROWS = [
  {label:"Madhyamik",                      subject:"eduMadhyamikSubject", board:"eduMadhyamikBoard", year:"eduMadhyamikYear", pct:"eduMadhyamikPct", remarks:"eduMadhyamikRemarks", boardLabel:"Board / Council"},
  {label:"Higher Secondary",               subject:"eduHsSubject",        board:"eduHsBoard",        year:"eduHsYear",        pct:"eduHsPct",        remarks:"eduHsRemarks",        boardLabel:"Board / Council"},
  {label:"Graduate (B.A/B.Sc/B.Com)",      subject:"eduGradSubject",      board:"eduGradBoard",      year:"eduGradYear",      pct:"eduGradPct",      remarks:"eduGradRemarks",      boardLabel:"University"},
  {label:"Post Graduate (M.A/M.Sc/M.Com)", subject:"eduPGSubject",        board:"eduPGBoard",        year:"eduPGYear",        pct:"eduPGPct",        remarks:"eduPGRemarks",        boardLabel:"University"},
  {label:"B.Ed / Equivalent",              subject:"eduBEdSubject",       board:"eduBEdBoard",       year:"eduBEdYear",       pct:"eduBEdPct",       remarks:"eduBEdRemarks",       boardLabel:"University"}
];

/* ---------- renderers ---------- */
function fieldHtml(f){
  const req = f.required ? ' required' : '';
  const reqClass = f.required ? ' class="required"' : '';
  let control = "";
  if(f.type === "select"){
    control = `<select id="${f.id}"${req}><option value="">-- select --</option>${f.options.map(o=>`<option value="${o}">${o}</option>`).join("")}</select>`;
  } else if(f.type === "textarea"){
    control = `<textarea id="${f.id}"${req}></textarea>`;
  } else {
    control = `<input type="${f.type}" id="${f.id}"${req} ${f.attrs||""}>`;
  }
  const hint = f.hint ? `<div class="hint">${f.hint}</div>` : "";
  const cls = "fld" + (f.type === "textarea" ? " full" : "");
  return `<div class="${cls}"><label${reqClass}>${f.label}</label>${control}${hint}</div>`;
}

function cell(label, inner){
  return inner ? `<div class="cell"><span class="mlabel">${label}</span>${inner}</div>` : `<div class="cell empty"></div>`;
}

function eduHtml(){
  const head = `<div class="rowgrid edu rowhead"><div>Degree</div><div>Subject</div><div>Board / University</div><div>Year of Passing</div><div>%</div><div>Remarks</div></div>`;
  const rows = EDU_ROWS.map(r => `
    <div class="rowgrid edu">
      <div class="degree">${r.label}</div>
      ${cell("Subject", r.subject ? `<input type="text" id="${r.subject}">` : "")}
      ${cell(r.boardLabel, `<input type="text" id="${r.board}">`)}
      ${cell("Year of Passing", `<input type="number" id="${r.year}" min="1950" max="2100" placeholder="YYYY">`)}
      ${cell("%", `<input type="number" id="${r.pct}" step="any" min="0" max="100">`)}
      ${cell("Remarks", r.remarks ? `<input type="text" id="${r.remarks}">` : "")}
    </div>`).join("");
  return head + rows;
}

function serviceHtml(sec){
  const postOpts = `<option value="">-- select --</option>` + DESIGNATIONS.map(o=>`<option value="${o}">${o}</option>`).join("");
  return `
    <div class="form-grid" style="margin-bottom:12px">
      <div class="fld"><label class="required">Number of previous schools (before this school)</label>
        <select id="prevCount" data-skip="1">
          <option value="">-- select --</option>
          <option value="0">0 — No previous school (this is my only school)</option>
          <option value="1">1 — One previous school</option>
          <option value="2">2 — Two previous schools</option>
        </select>
      </div>
    </div>
    <p class="note">Row 1 is always your <b>current school</b>. Previous-school rows become active only as per the number selected above.</p>
    <div class="rowgrid svc rowhead"><div>School</div><div>Name of School</div><div>Date of Joining</div><div>Post Held</div></div>

    <div class="rowgrid svc">
      <div class="degree">1. Current school (this school)</div>
      ${cell("Name of School", `<input type="text" id="curSchoolName" data-skip="1" readonly>`)}
      ${cell("DOJ in this school", `<input type="date" id="dojThisSchool">`)}
      ${cell("Post Held", `<input type="text" id="curPostShow" data-skip="1" readonly placeholder="(as per Designation)">`)}
    </div>
    <div class="rowgrid svc">
      <div class="degree">Previous school — earliest</div>
      ${cell("Name of School", `<input type="text" id="prevSchool1">`)}
      ${cell("Date of Joining (first service)", `<input type="date" id="dojFirst">`)}
      ${cell("Post Held", `<select id="prevSchoolPost1">${postOpts}</select>`)}
    </div>
    <div class="rowgrid svc">
      <div class="degree">Previous school — second (just before this school)</div>
      ${cell("Name of School", `<input type="text" id="prevSchool2">`)}
      ${cell("Date of Joining", `<input type="date" id="dojPrevSchool2">`)}
      ${cell("Post Held", `<select id="prevSchoolPost2">${postOpts}</select>`)}
    </div>

    <div class="form-grid" style="margin-top:14px">
      ${sec.fields.map(fieldHtml).join("")}
    </div>`;
}

function render(){
  const form = document.getElementById("pensionForm");
  form.innerHTML = SECTIONS.map((sec, idx) => {
    let body;
    if(sec.layout === "edu") body = eduHtml();
    else if(sec.layout === "service") body = serviceHtml(sec);
    else body = `${sec.note ? `<p class="note">${sec.note}</p>` : ""}<div class="form-grid">${sec.fields.map(fieldHtml).join("")}</div>`;
    return `<fieldset${sec.id ? ` id="${sec.id}"` : ""}><legend><span class="secno">${idx+1}</span>${sec.title}</legend>${body}</fieldset>`;
  }).join("");
  $("schoolMail").value = EMAIL_DEFAULT;
  applyRules();
}

/* ---------- helpers ---------- */
function $(id){ return document.getElementById(id); }

function setOn(ids, on){
  ids.forEach(id => {
    const el = $(id); if(!el) return;
    el.disabled = !on;
    if(!on) el.value = "";
    const w = el.closest(".fld,.cell");
    if(w) w.classList.toggle("off", !on);
  });
}

// date that is either typed by the user (manual) or mirrors the current-school DOJ (auto)
function setAutoDate(id, manual, cur){
  const el = $(id), w = el.closest(".cell");
  if(manual){
    if(el.dataset.auto === "1"){ el.value = ""; el.dataset.auto = ""; }
    el.readOnly = false; w.classList.remove("off");
  } else {
    el.value = cur; el.dataset.auto = "1"; el.readOnly = true; w.classList.add("off");
  }
}

/* ---------- conditional rules ---------- */
function applyRules(){
  // 1. Service history / previous schools
  const n = $("prevCount").value;
  const has1 = (n === "1" || n === "2"), has2 = (n === "2");
  const cur = $("dojThisSchool").value;
  $("curSchoolName").value = $("schoolName").value;
  $("curPostShow").value = $("designation").value;
  setOn(["prevSchool1","prevSchoolPost1"], has1);
  setOn(["prevSchool2","prevSchoolPost2"], has2);
  // no previous school -> first joining = DOJ here; only one previous -> 2nd joining = DOJ here
  setAutoDate("dojFirst", has1, cur);
  setAutoDate("dojPrevSchool2", has2, cur);

  // 2. Commutation % only when YES
  setOn(["commutationPercent"], $("commutationOpted").value === "YES");

  // 3. Spouse service details only when IN SERVICE
  setOn(SPOUSE_SERVICE, $("spouseStatus").value === "IN SERVICE");

  // 4. Charge hand-over only for HM / HMistress / TIC
  const isHoi = HOI_DESIGNATIONS.includes($("designation").value);
  setOn(CHARGE_FIELDS, isHoi);
  $("chargeSection").classList.toggle("off", !isHoi);
}

/* ---------- data / status ---------- */
function collect(){
  const data = {};
  document.querySelectorAll("#pensionForm input, #pensionForm select, #pensionForm textarea").forEach(el => {
    if(el.dataset.skip || !el.id) return;
    data[el.id] = (el.value || "").trim();
  });
  if(data.schoolMail === EMAIL_DEFAULT) data.schoolMail = "";   // untouched default = blank
  return data;
}

function showStatus(msg, kind){
  const el = $("topStatus");
  el.className = "status " + (kind === "ok" ? "ok" : "err");
  el.textContent = msg;
  window.scrollTo({top:0, behavior:"smooth"});
}

function fail(msg, id){
  showStatus(msg, "err");
  if(id && $(id)) $(id).focus();
}

/* ---------- events ---------- */
const formEl = $("pensionForm");
formEl.addEventListener("input", applyRules);
formEl.addEventListener("change", applyRules);

// e-mail: keep "@gmail.com" pre-loaded, cursor placed before it
formEl.addEventListener("focusin", e => {
  if(e.target.id === "schoolMail" && e.target.value === EMAIL_DEFAULT){
    setTimeout(() => e.target.setSelectionRange(0, 0), 0);
  }
});
formEl.addEventListener("blur", e => {
  if(e.target.id === "schoolMail" && e.target.value.trim() === "") e.target.value = EMAIL_DEFAULT;
}, true);

$("btnSubmit").addEventListener("click", async () => {
  document.querySelectorAll(".bad").forEach(x => x.classList.remove("bad"));
  const data = collect();
  const mark = id => { const el = $(id); if(el) el.classList.add("bad"); };

  if(!data.staffName){ mark("staffName"); return fail("Please enter your Name of the Staff before submitting.", "staffName"); }
  if($("prevCount").value === ""){ mark("prevCount"); return fail("Please select the number of previous schools (select 0 if none).", "prevCount"); }

  if(data.schoolMail && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.schoolMail)){
    mark("schoolMail"); return fail("Please enter a valid School e-Mail ID (e.g. name@gmail.com).", "schoolMail");
  }
  if(data.commutationOpted === "YES"){
    const c = parseFloat(data.commutationPercent);
    if(isNaN(c) || c <= 0 || c > 100){ mark("commutationPercent"); return fail("Please enter the Commutation % as a whole number, e.g. 40.", "commutationPercent"); }
    if(c < 1){ mark("commutationPercent"); return fail("Commutation % looks like a fraction. Enter 40 for 40% (not 0.4).", "commutationPercent"); }
  }

  const btn = $("btnSubmit");
  btn.disabled = true; btn.textContent = "Submitting…";
  try{
    // text/plain avoids the CORS pre-flight that Apps Script cannot answer
    const res = await fetch(WEB_APP_URL, {
      method: "POST",
      headers: {"Content-Type": "text/plain;charset=utf-8"},
      body: JSON.stringify({data: data, website: $("hpWebsite").value || ""})
    });
    const out = await res.json();
    if(!out.ok) throw new Error(out.error || "The server did not accept the submission");
    $("refId").textContent = out.submissionId || "-";
    $("doneOverlay").classList.add("show");
    $("topStatus").className = "status";
    render();                       // clear the form ONLY after the server confirmed
    updateProgress();
  }catch(err){
    showStatus("Submission failed: " + (err.message || err) + ". Your entries are still on this page — please check your internet connection and tap Submit again.", "err");
  }finally{
    btn.disabled = false; btn.textContent = "Submit Details";
  }
});

$("btnDone").addEventListener("click", () => { $("doneOverlay").classList.remove("show"); window.scrollTo({top:0,behavior:"smooth"}); });

/* ---------- progress bar ---------- */
function updateProgress(){
  const els = [...document.querySelectorAll("#pensionForm input, #pensionForm select, #pensionForm textarea")]
    .filter(el => el.id && !el.dataset.skip && !el.disabled && !el.readOnly);
  if(!els.length) return;
  const filled = els.filter(el => (el.value||"").trim() && !(el.id==="schoolMail" && el.value===EMAIL_DEFAULT)).length;
  const pct = Math.round(filled*100/els.length);
  $("progFill").style.width = pct + "%";
  $("progTxt").textContent = pct + "% filled";
}
formEl.addEventListener("input", updateProgress);
formEl.addEventListener("change", updateProgress);

render();
updateProgress();
</script>
</body>
</html>
