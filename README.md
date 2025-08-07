# RTL Estate - Real Estate Website

A responsive real estate website built with pure HTML, CSS, and JavaScript featuring RTL (Right-to-Left) language support.

## Features

- 🏡 Responsive property listings
- 🔄 RTL/LTR text direction toggle
- 📱 Mobile-friendly design
- 🎨 Modern UI with smooth animations
- 🔍 Property search and filtering
- 👤 User and admin dashboards
- 📧 Contact forms
- 🏠 Multiple homepage layouts

## Getting Started

### Option 1: Open Directly in Browser
1. Simply open `index.html` in your web browser
2. Navigate through the website using the navigation menu

### Option 2: Use a Local Server (Recommended)
For better development experience and to avoid CORS issues:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js (if installed):
```bash
# Install a simple HTTP server globally
npm install -g http-server

# Run the server
http-server
```

#### Using PHP (if installed):
```bash
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## File Structure

```
rtl-estate/
├── index.html              # Main homepage (Classic design)
├── index2.html             # Alternative homepage (Modern design)
├── about.html              # About page
├── contact.html            # Contact page
├── property-details.html   # Property details page
├── user-dashboard.html     # User dashboard
├── admin-dashboard.html    # Admin dashboard
├── login.html              # Login page
├── coming-soon.html        # Coming soon page
├── 404.html               # 404 error page
├── style.css              # Main stylesheet
├── main.js                # Main JavaScript functionality
├── rtl-toggle.js          # RTL toggle functionality
├── counter.js             # Counter animations
├── javascript.svg         # JavaScript icon
└── README.md              # This file
```

## Features Breakdown

### RTL Support
- Toggle between Left-to-Right (LTR) and Right-to-Left (RTL) text directions
- Automatic layout adjustments for RTL languages
- Persistent user preference using localStorage

### Responsive Design
- Mobile-first approach
- Responsive grid layouts
- Touch-friendly navigation
- Optimized for all screen sizes

### Interactive Elements
- Property search and filtering
- Smooth scroll navigation
- Mobile menu toggle
- Form validation
- Loading animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development

This is a static website that doesn't require any build process or dependencies. Simply edit the HTML, CSS, or JavaScript files and refresh your browser to see changes.

### Key Files:
- **style.css**: Contains all styling including responsive design and RTL support
- **main.js**: Main functionality for navigation, property filtering, and interactions
- **rtl-toggle.js**: RTL/LTR direction switching functionality

## License

This project is open source and available under the [MIT License](LICENSE).
