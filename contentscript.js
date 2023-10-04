// Get the Secure DNS setting.
const secureDnsSetting = chrome.storage.sync.get("secureDns");

// Inject a button into the page to toggle the Secure DNS setting.
const button = document.createElement("button");
button.textContent = secureDnsSetting.secureDns ? "Disable Secure DNS" : "Enable Secure DNS";
button.addEventListener("click", () => {
  chrome.storage.sync.set({ secureDns: !secureDnsSetting.secureDns });
  window.location.reload();
});
document.body.appendChild(button);