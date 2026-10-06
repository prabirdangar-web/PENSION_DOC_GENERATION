/* =====================================================================
   ADD THIS TO THE STAFF COLLECTION FORM (pension_data_collection/index.html)
   Replace the old "Download JSON" / "Export" action with this.
   ===================================================================== */

// 1) Paste your deployed Web App URL here (ends with /exec)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyvcaz2-XtfF3lmuAM7jW23_41ammx2CXchN0Q4e8B4bahj-loepPuGkyC4eg68MdZcFw/exec";

// 2) Call submitToSheet(recordObject) from your Submit button.
//    recordObject = the same object the form used to download as JSON
//    (keys such as staffName, designation, employeeCode, dob, ...).
async function submitToSheet(record) {
  const btn = document.getElementById("btnSubmit");        // change to your button id
  if (btn) { btn.disabled = true; btn.textContent = "Submitting..."; }
  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      // text/plain avoids the CORS pre-flight that Apps Script cannot answer
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ data: record, website: "" })   // "website" = honeypot, keep empty
    });
    const out = await res.json();
    if (!out.ok) throw new Error(out.error || "Submission failed");
    alert("Thank you! Your pension data has been submitted successfully.");
    return true;
  } catch (err) {
    alert("Could not submit: " + err.message + "\nPlease check your internet and try again.");
    return false;
  } finally {
    if (btn) { btn.disabled = false; btn.textContent = "Submit"; }
  }
}
