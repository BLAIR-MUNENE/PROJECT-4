const artists = [
  {
    id: 1,
    name: "Julian Voss",
    title: "Sculptor",
    img: "🗿",
    genres: ["Contemporary", "Stone"],
    fee: "$1,200",
    rating: "4.9",
    reviews: 42,
    desc: "Julian is a master of heavy textures and monumental forms.",
  },
  {
    id: 2,
    name: "Aria Bloom",
    title: "Digital Artist",
    img: "🎨",
    genres: ["NFT", "Vaporwave"],
    fee: "$800",
    rating: "5.0",
    reviews: 104,
    desc: "Aria bridges the gap between dreams and reality with neon digital canvases.",
  },
  {
    id: 3,
    name: "Marco Rivera",
    title: "Photographer",
    img: "📷",
    genres: ["Portrait", "Monochrome"],
    fee: "$1,500",
    rating: "4.8",
    reviews: 67,
    desc: "Marco captures the soul through the lens with raw energy.",
  },
  {
    id: 4,
    name: "Sarah Chen",
    title: "Oil Painter",
    img: "🖌️",
    genres: ["Realism", "Classical"],
    fee: "$2,200",
    rating: "5.0",
    reviews: 18,
    desc: "Sarah's technique mirrors the Old Masters with a modern twist.",
  },
  {
    id: 5,
    name: "Dax Sterling",
    title: "Graphic Designer",
    img: "💻",
    genres: ["Minimalism", "Vector"],
    fee: "$600",
    rating: "4.7",
    reviews: 89,
    desc: "Dax helps brands speak without saying a word.",
  },
  {
    id: 6,
    name: "Elena K.",
    title: "Illustrator",
    img: "✏️",
    genres: ["Folk", "Childhood"],
    fee: "$750",
    rating: "4.9",
    reviews: 55,
    desc: "Elena's illustrations are whimsical and nostalgic.",
  },
];

let selectedRole = "client";

function getFooterHTML() {
  return `
            <footer class="modern-footer">
                <div class="footer-content">
                    <div class="footer-section">
                        <h3>The Platform</h3>
                        <ul>
                            <li><a href="#">How it works</a></li>
                            <li><a href="#">Artist Guidelines</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Protection Policy</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Community</h3>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Artist Blog</a></li>
                            <li><a href="#">Community Forum</a></li>
                            <li><a href="#">Report a concern</a></li>
                        </ul>
                    </div>
                    <div class="footer-section">
                        <h3>Stay Inspired</h3>
                        <p style="font-size: 14px; color: #666; line-height: 1.5; margin-bottom: 20px;">Join 50k+ curators receiving the weekly 'Artist Spotlight' newsletter.</p>
                        <div style="display: flex; gap: 10px;">
                            <input type="email" placeholder="Email address" style="padding: 12px; border: 1px solid #333; background: #111; color: #fff; border-radius: 4px; flex-grow: 1;">
                            <button style="background: #fff; color: #000; border: none; padding: 10px 20px; border-radius: 4px; font-weight: 700; cursor: pointer;">Join</button>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div>© 2024 ARTIST CONNECT INC. ALL RIGHTS RESERVED.</div>
                    <div style="display: flex; gap: 20px;">
                        <a href="#" style="color: #555; text-decoration: none;">Privacy</a>
                        <a href="#" style="color: #555; text-decoration: none;">Terms</a>
                        <a href="#" style="color: #555; text-decoration: none;">Instagram</a>
                    </div>
                </div>
            </footer>
            `;
}

function populateTrending() {
  const carousel = document.getElementById("trendingCarousel");
  if (!carousel) return;
  carousel.innerHTML = "";
  artists.slice(0, 4).forEach((artist) => {
    const card = document.createElement("div");
    card.className = "trending-card";
    card.onclick = () => openOverlay(artist);
    card.innerHTML = `
                    <div class="trending-img">${artist.img}</div>
                    <div class="trending-info">
                        <h4>${artist.name}</h4>
                        <p class="meta">${artist.title} • ${artist.genres[0]}</p>
                        <div class="price-row">
                            <span class="rating">★ ${artist.rating}</span>
                            <span style="font-weight: 800;">from ${artist.fee}</span>
                        </div>
                    </div>
                `;
    carousel.appendChild(card);
  });
}

function populateArtists(data = artists) {
  const grid = document.getElementById("artistGrid");
  if (!grid) return;
  grid.innerHTML = "";
  data.forEach((artist) => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => openOverlay(artist);
    card.innerHTML = `
                    <div class="card-img-box">${artist.img}</div>
                    <div class="card-info">
                        <h1>${artist.name}</h1>
                        <div>${artist.genres.map((g) => `<span class="genre-tag">${g}</span>`).join("")}</div>
                        <p class="fee">${artist.fee}</p>
                    </div>
                `;
    grid.appendChild(card);
  });
}

function setRole(role, elm) {
  selectedRole = role;
  document
    .querySelectorAll(".role-option")
    .forEach((opt) => opt.classList.remove("active"));
  elm.classList.add("active");

  // Logic to update organization field based on role
  const orgLabel = document.getElementById("orgLabel");
  const orgInput = document.getElementById("orgInput");

  if (role === "client") {
    orgLabel.innerText = "Organization Name";
    orgInput.placeholder = "e.g. Acme Event Planning";
  } else {
    orgLabel.innerText = "Artist Alias / Studio Name";
    orgInput.placeholder = "e.g. Neon Horizon Designs";
  }
}

function handleSignUp() {
  openPage("Home", document.getElementById("defaultOpen"));
  alert("Welcome to Artist Connect! Please verify your email.");
}

function openPage(pageName, elmnt) {
  const tabs = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabs.length; i++) tabs[i].style.display = "none";
  const links = document.querySelectorAll(".tablink");
  links.forEach((l) => l.classList.remove("active"));

  const target = document.getElementById(pageName);
  target.style.display = pageName === "Chat" ? "flex" : "block";

  if (elmnt && elmnt.classList.contains("tablink")) {
    elmnt.classList.add("active");
  }
  window.scrollTo(0, 0);
}

function filterArtists() {
  const val = document.getElementById("artistSearch").value.toLowerCase();
  const filtered = artists.filter(
    (a) =>
      a.name.toLowerCase().includes(val) ||
      a.title.toLowerCase().includes(val) ||
      a.genres.join("").toLowerCase().includes(val),
  );
  populateArtists(filtered);
}

function openModal() {
  document.getElementById("loginModal").style.display = "flex";
}
function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

function openOverlay(artist) {
  document.getElementById("overlayName").innerText = artist.name;
  document.getElementById("overlayImg").innerText = artist.img;
  document.getElementById("overlayFee").innerText =
    `Est. Booking: ${artist.fee}`;
  document.getElementById("overlayDesc").innerText = artist.desc;
  document.getElementById("overlayGenres").innerHTML = artist.genres
    .map(
      (g) =>
        `<span class="genre-tag" style="background: #000; color: #fff;">${g}</span>`,
    )
    .join("");
  document.getElementById("detailOverlay").style.display = "flex";
}

function closeOverlay() {
  document.getElementById("detailOverlay").style.display = "none";
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  if (!input.value.trim()) return;
  const bubble = document.createElement("div");
  bubble.className = "bubble sent";
  bubble.innerText = input.value;
  document.getElementById("chatMessages").appendChild(bubble);
  input.value = "";
  const container = document.getElementById("chatMessages");
  container.scrollTop = container.scrollHeight;
}

function startChatFromOverlay() {
  closeOverlay();
  openPage("Chat", document.querySelectorAll(".tablink")[2]);
}

// Initialize Footers and Content
document.getElementById("homeFooterPlaceholder").innerHTML = getFooterHTML();
document.getElementById("artistFooterPlaceholder").innerHTML = getFooterHTML();
populateTrending();
populateArtists();
