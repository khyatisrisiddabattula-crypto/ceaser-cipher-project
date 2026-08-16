# Pink Cipher Suite

Create a complete, beautiful, modern Caesar Cipher Encryption & Decryption web application.

Project Requirements

Build the project using ONLY these three files:

index.html

style.css

script.js

The project must be a fully functional frontend project and should be easy to connect and sync directly with GitHub.

Main Theme

The project is called:

CAESAR CIPHER

Subtitle:

Encode. Decode. Protect Your Message.

Create a visually impressive cybersecurity/cryptography-inspired interface.

Color Theme

Use a pink and white color palette, inspired by my existing project:

https://khyatisrisiddabattula-crypto.github.io/vulnerable-login-page-project/

Do NOT copy the existing design. Create a completely new and unique UI.

Use:

Soft pink

Hot pink

Rose pink

White

Very light pink backgrounds

Dark pink/magenta for important text

Subtle gradients

Avoid excessive dark/black colors.

Design Style

Create a premium modern UI with:

Glassmorphism cards

Soft pink gradient background

Rounded corners

Beautiful shadows

Smooth hover animations

Gradient buttons

Subtle glowing effects

Clean typography

Responsive layout

Modern cybersecurity aesthetic

Small decorative cipher/lock/letter elements in the background

Smooth transitions throughout the application

The page should look like a professional college cybersecurity project rather than a basic HTML assignment.

Header

Create a beautiful navigation/header section.

Display:

🔐 CAESAR CIPHER

Navigation items:

Home

Encrypt

Decrypt

About

Add a small status indicator:

● SYSTEM READY

Use pink glowing effects for the status indicator.

Hero Section

Create a large centered hero section.

Heading:

Caesar Cipher

Subheading:

A classic encryption technique for transforming messages using a simple shift.

Add two buttons:

Start Encrypting

Learn How It Works

Add a decorative circular/rotating cipher animation near the hero section.

Main Cipher Tool

Create a large glassmorphism card containing the actual cipher functionality.

Include:

Input Message

Label:

Enter Your Message

Use a large textarea with placeholder:

Type your message here...

Shift Key

Create a number input or slider.

Label:

Shift Value

Allow values from:

0 to 25

Show the current shift value dynamically.

Mode Selection

Create two attractive buttons/tabs:

🔒 Encrypt

🔓 Decrypt

The selected mode should have a pink gradient background.

Action Button

Create a large button:

ENCRYPT MESSAGE

When Decrypt mode is selected, dynamically change it to:

DECRYPT MESSAGE

Output

Display a separate output card:

Encrypted / Decrypted Result

Show the processed text inside a visually attractive output area.

Add buttons:

Copy Result

Clear

Show a small success notification when the result is copied.

Caesar Cipher Functionality

Implement the actual Caesar Cipher algorithm in script.js.

Encryption:

Shift every alphabetical character forward by the selected shift value.

Example:

Input:
HELLO

Shift:
3

Output:
KHOOR

Decryption should shift characters backward.

Important behavior:

Preserve uppercase letters.

Preserve lowercase letters.

Do not modify numbers.

Do not modify spaces.

Do not modify punctuation.

Support negative shifts internally if necessary.

Handle shift values greater than 25 correctly using modulo 26.

Empty input should display a friendly validation message.

The application must work completely without a backend.

Visual Encryption Animation

When the user encrypts/decrypts a message:

Add a smooth loading/processing animation for a short moment.

Display a subtle pink glow around the output card.

Animate the result appearing.

Do not make the animation slow or annoying.

Cipher Visualization

Add a section showing:

Alphabet Shift Visualization

Display something similar to:

A B C D E F G H I J K L M ...

and underneath:

D E F G H I J K L M N O P ...

Update the second alphabet dynamically according to the selected shift value.

Make this section visually attractive with pink highlighted letters.

Statistics

Below the cipher tool, show three small cards:

Characters
Display the number of characters in the input.

Letters
Display the number of alphabetical characters.

Shift
Display the currently selected shift value.

Update these values dynamically while the user types or changes the shift.

How It Works Section

Create a beautiful explanation section titled:

How Caesar Cipher Works

Explain in simple terms:

Select a shift value.

Each letter is moved by that number of positions.

Letters wrap around after Z.

The shifted text becomes the encrypted message.

Decryption reverses the process.

Add a simple visual example:

A → D

B → E

C → F

for a shift of 3.

Security Information Section

Create a small section titled:

Is Caesar Cipher Secure?

Explain:

"Caesar Cipher is an educational classical encryption technique. Because there are only 26 possible shifts, it can be easily broken using brute force and should not be used to protect real sensitive information."

Make this section visually distinct but still consistent with the pink theme.

Features Section

Create four feature cards:

⚡ Fast Encryption
Instantly transform messages.

🔐 Simple Cryptography
Understand the fundamentals of substitution ciphers.

🎯 Interactive
Change the shift and see the transformation immediately.

📱 Responsive
Works beautifully on desktop, tablet, and mobile.

Footer

Create a clean pink/white footer.

Display:

CAESAR CIPHER

Educational Cryptography Project

Add:

Built with HTML • CSS • JavaScript

CSS Requirements

Make the CSS highly unique.

Do NOT use a plain template design.

Use:

CSS gradients

Glassmorphism

backdrop-filter

Soft shadows

Pink glow effects

Animated background elements

Smooth transitions

Button hover effects

Card hover animations

Responsive media queries

Custom scrollbar

Modern typography

Floating decorative elements

Subtle entrance animations

Create a sophisticated pink-and-white visual identity.

Use CSS variables at the beginning of style.css so colors are easy to modify.

Responsive Design

The website must work properly on:

Desktop

Laptop

Tablet

Mobile

On smaller screens:

Stack cards vertically.

Make buttons full width where appropriate.

Make the textarea responsive.

Keep the navigation usable.

Prevent horizontal scrolling.

JavaScript Requirements

Put ALL functionality in script.js.

Implement:

Caesar encryption

Caesar decryption

Shift slider/input

Dynamic mode switching

Dynamic button text

Character counter

Letter counter

Alphabet visualization

Copy-to-clipboard

Clear button

Validation messages

Notifications

Processing animation

Responsive interactions

Do not use a backend or database.

Do not use React.

Do not use Tailwind.

Use plain HTML, CSS and JavaScript only.

GitHub Requirement

Keep the project structure exactly:

index.html
style.css
script.js


Make sure all paths between the three files are correct.

The application must work correctly when deployed through GitHub Pages.

Do not use local file paths.

Do not put CSS or JavaScript inside index.html; keep them in their respective files.

Final Quality

Before finishing:

Test encryption.

Test decryption.

Test shift values 0–25.

Test lowercase and uppercase.

Test spaces and punctuation.

Test the copy button.

Test the clear button.

Test mobile responsiveness.

Check that there are no JavaScript console errors.

Check that all buttons work.

Make sure the page looks polished and professional.

The final result should feel like a modern pink cybersecurity/cryptography dashboard, with a completely original design rather than a generic Caesar Cipher webpage.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ceaser-cipher-project.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/99f6ece5-c282-443e-b819-83ae5ed80888).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
