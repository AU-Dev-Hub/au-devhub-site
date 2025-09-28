# Data Contribution Guide 📊

Welcome to the AU Dev Hub data contribution guide! This folder contains the structured data files that power our community features. Follow this guide to contribute member profiles and events safely and correctly.

## 📁 Folder Structure

```
data/
├── README.md           # This guide
├── network.json        # Community member profiles
├── events.json         # Learning events and workshops
├── templates/          # Template files for easy contribution
│   ├── member-template.json
│   └── event-template.json
└── schemas/            # JSON schemas for validation
    ├── member-schema.json
    └── event-schema.json
```

## 🚀 Quick Start

### Adding Your Profile to the Community

1. **Copy the member template** from `templates/member-template.json`
2. **Fill in your information** (see Member Template section below)
3. **Add your entry** to the `members` array in `network.json`
4. **Test locally** by running the development server
5. **Submit a Pull Request** with your changes

### Adding an Event

1. **Copy the event template** from `templates/event-template.json`
2. **Fill in event details** (see Event Template section below)
3. **Add your entry** to the `events` array in `events.json`
4. **Test locally** by running the development server
5. **Submit a Pull Request** with your changes

---

## 👥 Community Members (`network.json`)

### Member Template

```json
{
  "id": 999,
  "name": "Your Full Name",
  "department": "Your Department",
  "role": "Your Development Role",
  "bio": "A brief description about yourself, your interests, and what you're working on. Keep it under 200 characters for best display.",
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourusername"
}
```

### Field Guidelines

| Field | Required | Description | Examples |
|-------|----------|-------------|----------|
| `id` | ✅ Yes | Unique number (use next available number) | `34`, `35`, `36` |
| `name` | ✅ Yes | Your full name as you want it displayed | `"Ahmed Khan"`, `"Sara Ali"` |
| `department` | ✅ Yes | Your academic department | `"Computer Science"`, `"Cyber Security"`, `"Software Engineering"`, `"Data Science"` |
| `role` | ✅ Yes | Your development focus/role | `"Full Stack Developer"`, `"Frontend Developer"`, `"Backend Developer"`, `"Mobile App Developer"`, `"Data Analyst"`, `"UI/UX Designer"` |
| `bio` | ✅ Yes | Brief description (150-200 chars) | `"Passionate about React and Node.js. Love helping beginners learn coding!"` |
| `github` | ✅ Yes | Your GitHub profile URL | `"https://github.com/yourusername"` |
| `linkedin` | ✅ Yes | Your LinkedIn profile URL | `"https://linkedin.com/in/yourusername"` |
| `avatar` | ❌ No | Will be auto-generated from GitHub | Leave this field out - it's automatic! |

### Adding Your Profile - Step by Step

1. **Find the next ID number**:
   - Open `network.json`
   - Look at the last member's `id`
   - Use the next number (e.g., if last is 33, use 34)

2. **Fill out your information**:
   ```json
   {
     "id": 34,
     "name": "Your Name",
     "department": "Computer Science",
     "role": "Full Stack Developer",
     "bio": "Love building web apps with React and Express. Always excited to learn new technologies and help fellow students!",
     "github": "https://github.com/yourusername",
     "linkedin": "https://linkedin.com/in/yourusername"
   }
   ```

3. **Add to the members array**:
   - Add a comma after the last member's closing brace `},`
   - Paste your member object
   - Make sure the JSON is valid (use a JSON validator if needed)

4. **Test your changes**:
   ```bash
   npm run dev
   # Visit http://localhost:8080/networking
   # Your profile should appear with your GitHub profile picture!
   ```

### Profile Picture

Your profile picture will automatically be fetched from your GitHub profile! Just make sure your GitHub URL is correct and you have a profile picture set on GitHub.

---

## 📅 Events (`events.json`)

### Event Template

```json
{
  "id": 999,
  "title": "Your Event Title",
  "date": "2024-01-15",
  "time": "6:00 PM - 8:00 PM",
  "description": "Detailed description of what the event is about, what participants will learn, and who should attend.",
  "link": "https://your-event-link.com",
  "type": "upcoming",
  "location": "Room 101, CS Building",
  "instructor": "Your Name",
  "tags": ["React", "JavaScript", "Web Development"],
  "difficulty": "Beginner",
  "capacity": 30
}
```

### Field Guidelines

| Field | Required | Description | Examples |
|-------|----------|-------------|----------|
| `id` | ✅ Yes | Unique number (use next available) | `15`, `16`, `17` |
| `title` | ✅ Yes | Event name | `"React Workshop for Beginners"` |
| `date` | ✅ Yes | Date in YYYY-MM-DD format | `"2024-02-15"` |
| `time` | ✅ Yes | Time range | `"2:00 PM - 4:00 PM"`, `"6:30 PM - 8:30 PM"` |
| `description` | ✅ Yes | Detailed event description | `"Learn React basics, components, and state management"` |
| `link` | ✅ Yes | Registration/info link | `"https://forms.google.com/..."` |
| `type` | ✅ Yes | Event status | `"upcoming"` or `"past"` |
| `location` | ❌ No | Event venue | `"CS Lab 1"`, `"Online"`, `"Main Auditorium"` |
| `instructor` | ❌ No | Event instructor/speaker | `"Dr. Ahmed Khan"`, `"Sara Ali"` |
| `tags` | ❌ No | Technology tags | `["Python", "AI", "Machine Learning"]` |
| `difficulty` | ❌ No | Difficulty level | `"Beginner"`, `"Intermediate"`, `"Advanced"` |
| `capacity` | ❌ No | Max participants | `25`, `50`, `100` |

---

## ✅ Validation & Testing

### Before Submitting

1. **JSON Validation**:
   - Use [JSONLint](https://jsonlint.com/) to validate your JSON
   - Make sure all commas, brackets, and quotes are correct

2. **Local Testing**:
   ```bash
   # Start development server
   npm run dev
   
   # Check your changes at:
   # http://localhost:8080/networking (for member profiles)
   # http://localhost:8080/events (for events)
   ```

3. **Required Fields**:
   - Make sure all required fields are filled
   - Double-check URLs are valid and accessible
   - Verify your GitHub profile has a profile picture

### Common Issues & Solutions

❌ **JSON Syntax Error**
```json
// Wrong - missing comma
{"id": 1, "name": "John"}
{"id": 2, "name": "Jane"}

// Correct - comma between objects
{"id": 1, "name": "John"},
{"id": 2, "name": "Jane"}
```

❌ **Missing Required Fields**
```json
// Wrong - missing required fields
{"id": 34, "name": "John"}

// Correct - all required fields
{
  "id": 34,
  "name": "John Doe",
  "department": "Computer Science",
  "role": "Full Stack Developer",
  "bio": "Passionate developer and mentor",
  "github": "https://github.com/johndoe",
  "linkedin": "https://linkedin.com/in/johndoe"
}
```

❌ **Invalid GitHub URL**
```json
// Wrong - incomplete URL
"github": "github.com/username"

// Correct - full URL
"github": "https://github.com/username"
```

---

## 🔄 Contribution Workflow

### Step 1: Fork & Clone
```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/AU-Dev-Hub/au-devhub-site.git
cd Website
```

### Step 2: Create Branch
```bash
# Create a new branch for your contribution
git checkout -b add-my-profile

# Or for events
git checkout -b add-react-workshop
```

### Step 3: Make Changes
- Edit `data/network.json` (for profiles)
- Edit `data/events.json` (for events)
- Follow the templates and guidelines above

### Step 4: Test Locally
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit the site and verify your changes
```

### Step 5: Commit & Push
```bash
# Add your changes
git add data/

# Commit with descriptive message
git commit -m "Add my profile to community network"

# Push to your fork
git push origin add-my-profile
```

### Step 6: Create Pull Request
- Go to the original repository on GitHub
- Click "New Pull Request"
- Select your branch
- Fill out the PR template
- Submit for review

---

## 📝 Examples

### Example Member Addition
```json
{
  "id": 34,
  "name": "Fatima Ahmed",
  "department": "Data Science",
  "role": "Machine Learning Engineer",
  "bio": "Building AI models and exploring deep learning. Love participating in Kaggle competitions and mentoring junior students in Python.",
  "github": "https://github.com/fatima-ahmed",
  "linkedin": "https://linkedin.com/in/fatima-ahmed-ds"
}
```

### Example Event Addition
```json
{
  "id": 15,
  "title": "Python for Data Science Workshop",
  "date": "2024-02-20",
  "time": "3:00 PM - 6:00 PM",
  "description": "Comprehensive workshop covering pandas, numpy, and matplotlib for data analysis. Perfect for beginners wanting to start their data science journey.",
  "link": "https://forms.google.com/python-workshop-signup",
  "type": "upcoming",
  "location": "Computer Lab 2",
  "instructor": "Dr. Maria Khan",
  "tags": ["Python", "Data Science", "Pandas", "NumPy"],
  "difficulty": "Beginner",
  "capacity": 25
}
```

---

## ❓ FAQ

**Q: Do I need to add an avatar field?**
A: No! Profile pictures are automatically fetched from your GitHub profile.

**Q: What if my GitHub doesn't have a profile picture?**
A: Add a profile picture to your GitHub account, or a default placeholder will be used.

**Q: Can I add multiple roles?**
A: Choose your primary role. You can mention other skills in your bio.

**Q: How do I find the next available ID?**
A: Look at the last member/event in the JSON file and use the next number.

**Q: What if my changes break the site?**
A: Always test locally first. If issues persist, ask for help in the Discord community.

**Q: Can I edit someone else's profile?**
A: Only edit your own profile unless you have explicit permission.

---

## 🆘 Getting Help

- **Discord Community**: [Join our server](https://discord.gg/CzKTwxP7qr)
- **GitHub Issues**: Open an issue for bugs or questions
- **Email**: sudoyasir@gmail.com

## 🎉 Thank You!

Thank you for contributing to the AU Dev Hub community! Your participation helps create a vibrant, supportive environment for all student developers.

---

*Last updated: September 29, 2025*