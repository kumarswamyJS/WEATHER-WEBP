// style/style.js - Single reusable JS file

// Theme toggle
const toggle = document.getElementById("theme-toggle");
const logo = document.getElementById("logoimg");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
  logo.src = "./assets/logo-dark.png";
} else {
  logo.src = "/assets/logo.png";
}

toggle.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
    logo.src = "./assets/logo-dark.png";
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
    logo.src = "/assets/logo.png";
  }
});

const cities = [
  // 🇮🇳 Major Indian Metros
  "Ahmedabad",
  "Bengaluru",
  "Chandigarh",
  "Chennai",
  "Delhi",
  "Hyderabad",
  "Kolkata",
  "Mumbai",
  "Pune",

  // 🇮🇳 Tier-2 / Well-Known Indian Cities
  "Agra",
  "Ajmer",
  "Aligarh",
  "Allahabad (Prayagraj)",
  "Amritsar",
  "Aurangabad",
  "Bareilly",
  "Bhopal",
  "Bhubaneswar",
  "Coimbatore",
  "Dehradun",
  "Dhanbad",
  "Durgapur",
  "Faridabad",
  "Ghaziabad",
  "Gorakhpur",
  "Guntur",
  "Guwahati",
  "Hubli",
  "Indore",
  "Jabalpur",
  "Jaipur",
  "Jalandhar",
  "Jammu",
  "Jamshedpur",
  "Jhansi",
  "Jodhpur",
  "Kanpur",
  "Kochi",
  "Kottayam",
  "Kozhikode",
  "Lucknow",
  "Ludhiana",
  "Madurai",
  "Mangalore",
  "Meerut",
  "Moradabad",
  "Mysuru",
  "Nagpur",
  "Nashik",
  "Noida",
  "Patna",
  "Raipur",
  "Rajkot",
  "Ranchi",
  "Salem",
  "Solapur",
  "Surat",
  "Thiruvananthapuram",
  "Tiruchirappalli",
  "Tirupati",
  "Tirunelveli",
  "Udaipur",
  "Vadodara",
  "Varanasi",
  "Vellore",
  "Vijayawada",
  "Visakhapatnam",
  "Warangal",

  // 🇮🇳 Other Important & Popular Indian Cities
  "Agartala",
  "Aizawl",
  "Alappuzha",
  "Ambala",
  "Anantapur",
  "Ankleshwar",
  "Balasore",
  "Ballia",
  "Banda",
  "Baramati",
  "Baran",
  "Bareilly",
  "Bathinda",
  "Belgaum",
  "Bettiah",
  "Bhagalpur",
  "Bharuch",
  "Bhavnagar",
  "Bhiwani",
  "Bidar",
  "Bilaspur",
  "Bokaro",
  "Burdwan",
  "Cuttack",
  "Darbhanga",
  "Datia",
  "Dewas",
  "Dibrugarh",
  "Dimapur",
  "Dindigul",
  "Erode",
  "Etawah",
  "Firozabad",
  "Gaya",
  "Ghazipur",
  "Gokak",
  "Gopalpur",
  "Guna",
  "Guntur",
  "Haldwani",
  "Haridwar",
  "Hisar",
  "Hoshiarpur",
  "Imphal",
  "Itanagar",
  "Jaisalmer",
  "Jalgaon",
  "Jalna",
  "Jhunjhunu",
  "Junagadh",
  "Kakinada",
  "Kalyan",
  "Kanchipuram",
  "Kannur",
  "Karimnagar",
  "Karnal",
  "Katihar",
  "Kharagpur",
  "Kolhapur",
  "Korba",
  "Kota",
  "Kottarakkara",
  "Kottayam",
  "Kurukshetra",
  "Latur",
  "Madhubani",
  "Malappuram",
  "Mandya",
  "Mathura",
  "Muzaffarpur",
  "Nagercoil",
  "Nanded",
  "Nandyal",
  "Nellore",
  "Palakkad",
  "Pali",
  "Panchkula",
  "Panipat",
  "Pondicherry",
  "Puri",
  "Rae Bareli",
  "Ratlam",
  "Rewa",
  "Rohtak",
  "Roorkee",
  "Rourkela",
  "Sagar",
  "Saharanpur",
  "Sambalpur",
  "Sangli",
  "Satna",
  "Shimla",
  "Sikar",
  "Siliguri",
  "Sirsa",
  "Sonipat",
  "Srinagar",
  "Tezpur",
  "Thanjavur",
  "Thrissur",
  "Tinsukia",
  "Tiruvannamalai",
  "Tuticorin",
  "Ujjain",
  "Valsad",
  "Vapi",
  "Wardha",
  "Yavatmal",

  // 🇮🇳 Tourist / Heritage / Religious Spots
  "Agra",
  "Amarnath",
  "Ayodhya",
  "Badami",
  "Bodh Gaya",
  "Chikmagalur",
  "Darjeeling",
  "Dwarka",
  "Gangtok",
  "Gir",
  "Goa",
  "Gulmarg",
  "Hampi",
  "Haridwar",
  "Kedarnath",
  "Khajuraho",
  "Kodaikanal",
  "Konark",
  "Kullu",
  "Kanyakumari",
  "Kohima",
  "Lakshadweep",
  "Leh",
  "Mahabalipuram",
  "Manali",
  "Mount Abu",
  "Mussoorie",
  "Nainital",
  "Nalanda",
  "Ooty",
  "Pahalgam",
  "Pushkar",
  "Rameswaram",
  "Ranikhet",
  "Rishikesh",
  "Sanchi",
  "Shirdi",
  "Shimla",
  "Sundarbans",
  "Vaishno Devi",
  "Varanasi",
  "Vrindavan",
  "Somnath",

  // 🇮🇳 All Major Cities of Karnataka
  "Bagalkot",
  "Ballari",
  "Belagavi",
  "Bengaluru",
  "Bidar",
  "Chamarajanagar",
  "Chikkaballapur",
  "Chikkamagaluru",
  "Chitradurga",
  "Dakshina Kannada",
  "Davangere",
  "Dharwad",
  "Gadag",
  "Hassan",
  "Haveri",
  "Hubballi",
  "Kalaburagi (Gulbarga)",
  "Kolar",
  "Koppal",
  "Mandya",
  "Mangaluru",
  "Mysuru",
  "Raichur",
  "Ramanagara",
  "Shivamogga (Shimoga)",
  "Tumakuru (Tumkur)",
  "Udupi",
  "Uttara Kannada (Karwar)",
  "Vijayapura (Bijapur)",
  "Yadgir",
  "Sirsi",
  "Madikeri (Coorg)",
  "Hospet",
  "Karwar",
  "Bhadravati",
  "Sagara",
  "Tiptur",
  "Arsikere",
  "Nanjangud",
  "Channapatna",
  "Sira",
  "Kundapura",
  "Bhatkal",
  "Gokarna",
  "Dandeli",
  "Basavakalyan",
  "Sindhanur",
  "Gangavathi",
];

const searchInput = document.getElementById("city-search");
const suggestionsContainer = document.getElementById("search-suggestions");

if (searchInput && suggestionsContainer) {
  function filterCities(input) {
    return cities.filter((city) =>
      city.toLowerCase().includes(input.toLowerCase())
    );
  }

  function showSuggestions(suggestions) {
    suggestionsContainer.innerHTML = "";

    if (suggestions.length > 0) {
      suggestionsContainer.style.display = "block";

      suggestions.forEach((city) => {
        const div = document.createElement("div");
        div.className = "search-suggestion";
        div.tabIndex = 0; // For accessibility
        div.textContent = city;
        div.setAttribute("role", "option"); // ARIA for accessibility
        div.setAttribute("aria-selected", "false");

        div.addEventListener("click", () => {
          searchInput.value = city;
          suggestionsContainer.style.display = "none";
          searchInput.closest("form").submit();
        });

        suggestionsContainer.appendChild(div);
      });
    } else {
      suggestionsContainer.style.display = "none";
    }
  }

  searchInput.addEventListener("input", () => {
    const input = searchInput.value.trim();
    if (input.length > 1) {
      const filteredCities = filterCities(input);
      showSuggestions(filteredCities.slice(0, 5));
    } else {
      suggestionsContainer.style.display = "none";
    }
  });

  searchInput.addEventListener("focus", () => {
    const input = searchInput.value.trim();
    if (input.length > 1) {
      const filteredCities = filterCities(input);
      showSuggestions(filteredCities.slice(0, 5));
    }
  });

  document.addEventListener("click", (e) => {
    if (
      !searchInput.contains(e.target) &&
      !suggestionsContainer.contains(e.target)
    ) {
      suggestionsContainer.style.display = "none";
    }
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const firstSuggestion =
        suggestionsContainer.querySelector(".search-suggestion");
      if (firstSuggestion) firstSuggestion.focus();
    }
  });

  suggestionsContainer.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = e.target.nextElementSibling;
      if (next) next.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = e.target.previousElementSibling;
      if (prev) {
        prev.focus();
      } else {
        searchInput.focus();
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      e.target.click();
    }
  });
}

// Contact form submission (for contact page)
const form = document.getElementById("contactForm");
const popup = document.getElementById("message-popup");
const contactContent = document.querySelector(".contact-content");

if (form && popup && contactContent) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    contactContent.classList.add("loading");

    try {
      const res = await fetch("/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        showPopup("✅ Mail sent successfully!", "success");
        form.reset();
      } else {
        showPopup("❌ Failed to send mail. Try again.", "error");
      }
    } catch (err) {
      showPopup("⚠️ Server error. Please try again later.", "error");
    } finally {
      contactContent.classList.remove("loading");
    }
  });



// Geolocation (for location permission page)
window.addEventListener("DOMContentLoaded", () => {
  const locationForm = document.getElementById("location");
  if (locationForm && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else if (locationForm) {
    alert("Geolocation not supported.");
  }

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    document.getElementById("lon").value = lon;
    document.getElementById("lat").value = lat;

    document.querySelector(".container").classList.add("loading");

    locationForm.submit();
  }

  function showError(error) {
    const messages = {
      1: "Permission denied.",
      2: "Location unavailable.",
      3: "Request timed out.",
    };
    alert(messages[error.code] || "Unknown error.");
  }
});

  function showPopup(message, type) {
    popup.textContent = message;
    popup.className = type === "success" ? "popup success" : "popup error";
    popup.setAttribute("role", "alert"); 

    setTimeout(() => {
      popup.style.opacity = "0";
      setTimeout(() => {
        popup.textContent = "";
        popup.className = "hidden";
        popup.style.opacity = "1";
      }, 500);
    }, 3000);
  }
}
