/* ==========================================================================
   SUPER MOBILES - CUDDALORE
   Interactive JavaScript Application
   ========================================================================== */

const BHARATH_PHONE = "919876543210";

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    setupMobileNav();
});

// --- QUICK REPAIR BOOKING MODAL & WHATSAPP ---
function quickBook(serviceName) {
    openBookingModal(serviceName);
}

function openBookingModal(serviceName = "General Repair Inspection") {
    const modal = document.getElementById("bookingModal");
    if (modal) {
        document.getElementById("modalServiceText").textContent = serviceName;
        modal.classList.add("active");
    }
}

function closeBookingModal() {
    const modal = document.getElementById("bookingModal");
    if (modal) {
        modal.classList.remove("active");
    }
}

function submitModalWhatsApp() {
    const name = document.getElementById("modalName").value.trim() || "Customer";
    const phone = document.getElementById("modalPhone").value.trim() || "Not provided";
    const service = document.getElementById("modalServiceText").textContent;

    const text = `Hi Bharath! I want to book a mobile repair slot at Super Mobiles Cuddalore:%0A%0A👤 *Name:* ${name}%0A📞 *Phone:* ${phone}%0A🔧 *Requested Service:* ${service}%0A%0AWhen can I visit your shop in Imperial Road?`;
    
    window.open(`https://wa.me/${BHARATH_PHONE}?text=${text}`, "_blank");
    closeBookingModal();
}

// --- CONTACT FORM SUBMISSION ---
function handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("custName").value.trim();
    const phone = document.getElementById("custPhone").value.trim();
    const brand = document.getElementById("formBrand").value.trim();
    const model = document.getElementById("formModel").value.trim();
    const issue = document.getElementById("formIssue").value.trim();

    const text = `Hi Bharath (Super Mobiles)!%0A%0ANew Repair Booking Request:%0A👤 *Customer Name:* ${name}%0A📞 *Mobile Number:* ${phone}%0A📱 *Device:* ${brand} ${model}%0A💬 *Issue Description:* ${issue}`;

    window.open(`https://wa.me/${BHARATH_PHONE}?text=${text}`, "_blank");
    
    alert("Thank you! Opening WhatsApp to send your booking directly to Bharath...");
    e.target.reset();
}

// --- MOBILE NAVIGATION TOGGLE & SCROLL ---
function setupMobileNav() {
    const toggleBtn = document.getElementById("mobileToggle");
    const navMenu = document.getElementById("navMenu");
    const backdrop = document.getElementById("navBackdrop");
    const closeBtn = document.getElementById("navCloseBtn");
    
    if (toggleBtn && navMenu) {
        toggleBtn.addEventListener("click", () => {
            const willOpen = !navMenu.classList.contains("active");
            if (willOpen) {
                openNavMenu();
            } else {
                closeNavMenu();
            }
        });

        if (closeBtn) {
            closeBtn.addEventListener("click", closeNavMenu);
        }

        if (backdrop) {
            backdrop.addEventListener("click", closeNavMenu);
        }

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                closeNavMenu();
            });
        });

        // Close on ESC key
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape" && navMenu.classList.contains("active")) {
                closeNavMenu();
            }
        });
    }
}

function openNavMenu() {
    const navMenu = document.getElementById("navMenu");
    const backdrop = document.getElementById("navBackdrop");
    if (navMenu) navMenu.classList.add("active");
    if (backdrop) backdrop.classList.add("active");
    document.body.classList.add("no-scroll");
}

function closeNavMenu() {
    const navMenu = document.getElementById("navMenu");
    const backdrop = document.getElementById("navBackdrop");
    if (navMenu) navMenu.classList.remove("active");
    if (backdrop) backdrop.classList.remove("active");
    document.body.classList.remove("no-scroll");
}

function scrollToSection(id) {
    const target = document.getElementById(id);
    if (target) {
        target.scrollIntoView({ behavior: "smooth" });
    }
}

