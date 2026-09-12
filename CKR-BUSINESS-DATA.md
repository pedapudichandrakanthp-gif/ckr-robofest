Absolutely. I understand the direction now.

The website is **not an investor pitch disguised as a website**. It should look like **Chandrakanth Robofest (CKR)** is already a premium, professional robot-event entertainment company, with the investor naturally discovering the business model, packages, pricing, availability, operations, and growth opportunity.

The 🎉💐🥳🎈 you typed is a **design direction**: celebration, happiness, flowers, parties, weddings, birthdays, grand occasions—not literal emojis in the UI.

Below is the **master Codex prompt sequence** I recommend. Use them **one at a time**, allowing Codex to inspect the existing project and finish each phase before moving to the next.

---

# MASTER BUILD PLAN

### Project name

**Chandrakanth Robofest**

### Short brand

**CKR**

### Positioning

**Premium Robot Entertainment & Event Experiences**

### Primary market

**Anakapalle → Visakhapatnam → North Andhra → Andhra Pradesh**

### Website objective

The finished website must simultaneously function as:

1. A professional business website
2. A customer-facing robot catalogue
3. An event-experience showcase
4. A transparent package/pricing system
5. An availability and booking system
6. A future real-business platform
7. An investor demonstration of the business model
8. An admin-managed content/business system

---

# PROMPT 0 — GIVE THIS TO CODEX FIRST

This establishes the complete project vision.

```text
You are the lead product architect, senior Next.js engineer, UI/UX designer, brand designer, and business-product strategist for this project.

We are building a production-quality website for a planned robot entertainment business.

BUSINESS NAME:
Chandrakanth Robofest

BRAND:
CKR

BUSINESS CATEGORY:
Premium Robot Entertainment & Event Experiences

LOCATION:
Anakapalle, Andhra Pradesh, India

INITIAL SERVICE AREA:
Anakapalle
Visakhapatnam
Vizianagaram
Srikakulam
and surrounding Andhra Pradesh locations.

CORE BUSINESS IDEA:
Chandrakanth Robofest provides robots for events and occasions.

Potential experiences include:
- Robot dance performances
- Robot greetings
- Grand robot entrances
- Action/movement shows
- Interactive robot demonstrations
- Photo experiences
- Birthday experiences
- Wedding experiences
- Corporate events
- School and college events
- Exhibitions
- Mall activations
- Brand promotions
- Grand openings
- Future multi-robot experiences

IMPORTANT BUSINESS POSITIONING:
The website must look like a professional operating company website, NOT like a startup pitch deck and NOT like a student project.

The website should make a customer think:
"I can actually book this company for my event."

The website should make an investor think:
"This is a structured business with a clear product, pricing model, operating model, booking system, revenue model and expansion opportunity."

The investor section should exist naturally as part of the business website rather than dominating the customer experience.

DESIGN DIRECTION:
The visual language should communicate celebration, happiness, premium events, weddings, birthdays, flowers, decoration, entertainment, excitement and memorable occasions.

The celebration direction is inspired by:
🎉 💐 🥳 🎈

DO NOT DISPLAY THESE EMOJIS AS PART OF THE BRAND/UI.

Instead communicate the feeling through:
- elegant celebratory imagery
- flowers
- confetti-like visual motion used very subtly
- premium event photography
- soft festive shapes
- elegant gradients
- sophisticated typography
- warm celebratory visual composition
- cinematic robot imagery
- premium event atmosphere

DO NOT make the site childish.
DO NOT make it look like a gaming website.
DO NOT make it look like a generic AI SaaS dashboard.
DO NOT overuse neon cyberpunk effects.
DO NOT use excessive glassmorphism.
DO NOT make it look cheap.

DESIGN FEEL:
Premium event company + modern technology company + robotics + celebration.

Think:
luxury event experience
combined with
advanced robotics.

BRAND INITIALS:
CKR should have a sophisticated logo treatment.

The logo should be usable as:
- desktop logo
- mobile logo
- favicon
- social media profile
- invoice/quotation branding
- future merchandise

Do not invent a complicated logo without a coherent brand system.

WEBSITE PRINCIPLE:
The website should be content-driven and database-driven.

Do not hard-code:
- robot names
- robot prices
- package prices
- package features
- availability
- locations
- add-ons
- gallery items
- testimonials
- FAQs

These must eventually be editable from the admin panel.

TECHNOLOGY:
Use the existing project's technology if already established.

Preferred stack:
- Next.js
- TypeScript
- Tailwind CSS
- modern component architecture
- Supabase
- Supabase Auth
- Supabase Storage
- PostgreSQL
- responsive design
- accessible UI
- SEO-friendly architecture

Before changing the project:
1. Inspect the entire repository.
2. Understand the current architecture.
3. Identify existing dependencies.
4. Identify existing Supabase configuration.
5. Identify reusable components.
6. Do not unnecessarily rewrite working code.
7. Preserve good existing work.
8. Create a clear implementation plan before major changes.

CORE CUSTOMER JOURNEY:

Instagram/social media
→ Website
→ Explore robots
→ Explore experiences
→ Compare packages
→ Check availability
→ Select date/time
→ Request booking
→ Receive confirmation
→ Event
→ Review

CORE INVESTOR JOURNEY:

Website
→ Understand company
→ Understand experiences
→ See packages
→ Understand customer workflow
→ Understand revenue model
→ Understand operating model
→ Understand scalability
→ View investment opportunity
→ Contact

IMPORTANT:
This is initially a business demonstration/prototype.

We may use licensed manufacturer/demo robot media temporarily.

Do NOT falsely claim:
- RoboFest already owns robots that have not been purchased.
- RoboFest has completed events that have not happened.
- Fake customer testimonials.
- Fake booking numbers.
- Fake revenue.
- Fake market leadership claims.

Where appropriate use labels such as:
"Robot Demonstration"
"Illustrative"
"Launching Soon"
"Example Package"
"Coming Soon"

The architecture must allow us to replace all demonstration media with our own event videos in the future without redesigning the site.

Build this as a serious production foundation, not a static mockup.
```

---

# PROMPT 1 — BRAND + DESIGN SYSTEM

After Codex finishes inspecting the project:

```text
Now create the complete Chandrakanth Robofest / CKR visual design system.

BRAND:
Chandrakanth Robofest
CKR

Create a premium celebration-meets-robotics visual identity.

The celebration theme should communicate:
joy
events
weddings
birthdays
flowers
celebration
memorable moments
premium entertainment

Do NOT use literal celebration emojis anywhere in the website.

COLOR DIRECTION:
Create a sophisticated palette rather than excessive neon.

Use:
- premium dark/neutral foundation where appropriate
- elegant light sections
- sophisticated festive accent colors
- restrained metallic/warm accents
- strong contrast for CTAs

The website must support light and dark sections naturally if appropriate, but do not create an unnecessary theme toggle unless it improves the product.

TYPOGRAPHY:
Use a premium modern typeface system.
Strong display typography for major headings.
Highly readable body typography.
Excellent mobile typography.

LOGO:
Create a clean CKR wordmark/monogram treatment.
The brand name must be:
Chandrakanth Robofest

The abbreviation:
CKR

The logo must work in:
- navigation
- footer
- favicon
- mobile
- social media
- invoices

DESIGN LANGUAGE:
- premium
- elegant
- festive
- technological
- cinematic
- trustworthy
- modern
- spacious

MOTION:
Use subtle, purposeful animation.
Examples:
- smooth section reveals
- elegant hover transitions
- image movement
- subtle celebratory particles where appropriate
- premium page transitions
- robot-related micro-interactions

Avoid:
- excessive bouncing
- childish animations
- constant spinning
- distracting effects
- animation that hurts performance

Create reusable design tokens/components so the visual system is consistent across the entire application.

Do not merely create a landing page.
Create the reusable design foundation for the complete product.
```

---

# PROMPT 2 — COMPLETE WEBSITE INFORMATION ARCHITECTURE

```text
Now build the complete public-facing information architecture for Chandrakanth Robofest.

Create these primary sections/pages:

1. Home
2. Our Robots
3. Experiences
4. Events
5. Packages
6. Availability
7. How It Works
8. Gallery
9. About
10. FAQ
11. Contact
12. Business / Investment
13. Book Now

NAVIGATION:

Logo:
Chandrakanth Robofest / CKR

Navigation:
Home
Robots
Experiences
Packages
Availability
Gallery
About

Secondary:
FAQ
Contact
Business

Primary CTA:
BOOK NOW

Mobile navigation must be excellent.

HOME PAGE ORDER:

Hero
↓
What We Do
↓
Experiences
↓
Featured Robots
↓
Packages
↓
How It Works
↓
Event Categories
↓
Gallery
↓
Service Area
↓
Why CKR
↓
Business opportunity / subtle investor CTA
↓
Booking CTA
↓
Footer

Do not make every section look like a card grid.
Use varied editorial layouts.

The website must feel like a real premium business.

Create proper page metadata and SEO architecture.

Use semantic HTML.

Make every page responsive from mobile through large desktop screens.
```

---

# PROMPT 3 — HOME PAGE

```text
Now implement the complete Chandrakanth Robofest homepage.

The homepage must immediately communicate:

WHAT:
Robot entertainment.

WHO:
Chandrakanth Robofest / CKR.

WHERE:
Anakapalle, Visakhapatnam and Andhra Pradesh.

FOR WHOM:
Weddings, birthdays, corporate events, schools, colleges, exhibitions, malls, brands and celebrations.

HERO:

Headline concept:

"BRING THE FUTURE TO YOUR CELEBRATION."

Supporting message:

"Premium robot entertainment and interactive experiences for unforgettable events."

Primary CTA:
BOOK A ROBOT

Secondary CTA:
EXPLORE EXPERIENCES

Tertiary:
CHECK AVAILABILITY

Use a large high-quality robot video/image area.

The current media may be demonstration/manufacturer media.

Clearly label demonstration content where necessary.

Do not falsely imply ownership or previous CKR events.

Add an elegant celebration atmosphere around the robot without making the design childish.

Immediately below hero create a capability strip:

Robot Dance
Greetings
Action Shows
Interactive Experiences
Photo Moments

Then build:

WHAT WE DO

Explain the actual business clearly.

EXPERIENCES:
Wedding
Birthday
Corporate
School
College
Exhibition
Mall
Brand Activation
Grand Opening

FEATURED ROBOTS:
Dynamic database-driven robot cards.

PACKAGES:
Standard
Medium
Premium
Signature / Custom

Show starting prices from database.

Add:
"Prices may vary by robot, duration, location and customization."

HOW IT WORKS:
Choose
Book
Prepare
Experience

GALLERY:
Use database-driven media.

SERVICE AREA:
Anakapalle
Visakhapatnam
Vizianagaram
Srikakulam
Andhra Pradesh

WHY CKR:
Professional operation
Planned experiences
Transparent packages
Safety-first operation
Local service
Customized experiences

FINAL CTA:
"MAKE YOUR EVENT UNFORGETTABLE."

Buttons:
BOOK NOW
CHECK AVAILABILITY

Do not overfill the homepage.
Prioritize visual hierarchy and conversion.
```

---

# PROMPT 4 — ROBOTS PAGE

```text
Build the complete Our Robots section.

This must function like a professional product catalogue.

Robot cards must come from the database.

Each robot should support:

name
model
category
manufacturer
description
height
weight
battery/runtime
dance capability
walking capability
greeting capability
action-show capability
interaction capability
photo experience
operator requirement
availability status
demo video
gallery
technical specifications
rental availability
status

Possible categories:

Humanoid
Robot Dog
Interactive Robot
Entertainment Robot
Future Robot

Do not hard-code a specific robot as "owned" unless explicitly configured as owned in the database.

Support statuses:

Demonstration
Available
Coming Soon
Under Maintenance
Unavailable

Robot detail page should include:

Hero media
Robot description
Key capabilities
Experience suitability
Technical specifications
Available experiences
Demo video
Safety notes
Booking CTA

CTA:
"CHECK AVAILABILITY"

Do not make technical specifications more important than customer experience.

The customer needs to understand:
"What can this robot do at my event?"

not just:
"How many degrees of freedom does it have?"

Create both business-friendly and technical information.
```

---

# PROMPT 5 — EXPERIENCES PAGE

```text
Build a premium Experiences page.

Experiences are WHAT THE ROBOT DOES.

Create:

Robot Dance
Robot Greetings
Grand Entrance
Action Show
Interactive Experience
Photo Experience
Robot Host
Custom Performance

Each experience should have:

title
description
ideal events
duration options
included capabilities
media
booking CTA

Example:

ROBOT DANCE

"Bring a choreographed robotic performance to the centre of your celebration."

Ideal for:
Weddings
Birthdays
College events
Corporate events
Stage shows

ROBOT GREETINGS

The robot welcomes guests or delivers a prepared message.

GRAND ENTRANCE

A dramatic robot arrival designed for weddings, birthdays, launches and special occasions.

ACTION SHOW

Programmed movement and robotic demonstrations.

PHOTO EXPERIENCE

Guests interact with the robot in a controlled environment.

ROBOT HOST

Pre-programmed announcements and greetings where technically supported.

Do not promise capabilities that depend on an unselected robot.

Clearly connect experiences to available robots.
```

---

# PROMPT 6 — PACKAGES + PRICING

```text
Build the Packages page as a genuine commercial pricing page.

Packages:

STANDARD
MEDIUM
PREMIUM
SIGNATURE / CUSTOM

Initial illustrative pricing:

STANDARD
₹9,999

MEDIUM
₹14,999

PREMIUM
₹24,999

SIGNATURE
Custom Quote

IMPORTANT:
These are proposed launch prices and must be stored in the database so they can be changed from the admin panel.

Do not present them as verified market prices.

STANDARD:
Up to 30 minutes
Robot appearance
1 dance performance
Greeting
Photo opportunity
Professional operator
Basic setup

MEDIUM:
Up to 60 minutes
2–3 performances
Dance
Greetings
Interactive demonstration
Photo experience
Customized event message
Operator
Setup and pack-down
Local transportation according to service policy

PREMIUM:
Up to 2 hours
Grand entrance
Multiple performances
3–4 dance routines
Customized greeting
Action show
Guest interaction
Photo experience
Dedicated operator
Event coordination
Setup and pack-down
Transportation according to service area

SIGNATURE:
Custom quotation
Corporate
Brand activation
Large weddings
Exhibitions
Malls
Multi-robot experiences
Custom choreography
Extended duration

Add comparison functionality.

Show:
duration
performances
dance
greeting
action show
interaction
photo experience
custom message
operator
transportation
customization

Clearly explain:
Final price can vary based on robot, location, duration, date, transportation and customization.

Add:
"Check Availability"
"Book Now"
"Request Custom Quote"

Do not create fake discounts or fake urgency.
```

---

# PROMPT 7 — AVAILABILITY + BOOKING

```text
Build the real availability and booking experience.

This is a core business feature.

CUSTOMER FLOW:

Select event type
→ Select robot
→ Select package
→ Select date
→ Select preferred time
→ Enter location
→ Select add-ons
→ See estimated price
→ Submit booking request

Availability states:

AVAILABLE
REQUEST CONFIRMATION
BOOKED
BLOCKED
MAINTENANCE

Do not allow double booking.

The system must understand that one robot cannot be at two locations simultaneously.

Allow buffer time between events for:
travel
setup
pack-down
charging
technical preparation

Create booking records with:

booking ID
customer
phone
email
event type
event date
start time
end time
venue
city
robot
package
add-ons
estimated amount
status
notes
created_at

Booking statuses:

Inquiry
Quote Sent
Awaiting Advance
Confirmed
In Preparation
Completed
Cancelled

Before final booking:
Show a booking summary.

Example:

Robot:
Humanoid Performance Robot

Package:
Premium

Date:
25 September

Time:
7:30 PM – 9:30 PM

Location:
Anakapalle

Package price:
₹24,999

Travel:
₹X

Add-ons:
₹X

Estimated total:
₹XX,XXX

Use "Estimated" until manually confirmed.

Do not implement real payment processing unless explicitly requested.
For the first version use:
Request Booking
WhatsApp
Call

The website should make clear that availability requires confirmation.
```

---

# PROMPT 8 — ADD-ONS + QUOTE CALCULATOR

```text
Create a configurable event quote builder.

Customer can select:

Robot
Package
Duration
Event type
Location
Date
Additional performance
Custom greeting
Custom choreography
Additional hour
Additional robot
Brand customization
Photo experience
Travel

The calculation engine must be database-driven.

Never hard-code pricing logic throughout components.

Create a central pricing service.

Show:

Base package
Add-ons
Travel
Estimated subtotal
Applicable taxes/fees if configured
Estimated total

Use clear terminology:
"Estimated Price"

Do not claim tax-inclusive/exclusive status unless configured.

Admin must be able to change:
package price
add-on price
travel charges
duration rules
availability
without editing code.
```

---

# PROMPT 9 — EVENT-SPECIFIC PAGES

```text
Create dedicated experience pages for:

Weddings
Birthdays
Corporate Events
Schools
Colleges
Exhibitions
Malls
Brand Activations
Grand Openings

Each page must explain:

Why a robot works for this event
What the robot can do
Recommended experiences
Recommended package
Possible duration
Example event flow
Venue requirements
Safety considerations
Gallery/demo media
Booking CTA

Example wedding flow:

Robot arrival
→ Grand entrance
→ Greeting
→ Dance performance
→ Couple interaction
→ Photo experience
→ Final performance

Example birthday:

Surprise entrance
→ Birthday greeting
→ Dance
→ Action performance
→ Child/family photo experience
→ Final celebration

Do not make claims that depend on a robot we do not own.

Use configurable capabilities.
```

---

# PROMPT 10 — HOW IT WORKS + EVENT PROCESS

```text
Build a polished How It Works page.

Explain the full operational process:

01
Choose your experience

02
Select robot and package

03
Check date availability

04
Submit booking request

05
CKR confirms details

06
Pre-event coordination

07
Robot arrives with trained operator

08
Safety/setup check

09
Performance

10
Pack-down and completion

Also create:

"Before Your Event"

Venue requirements
Performance space
Floor requirements
Power requirements where applicable
Outdoor limitations
Weather restrictions
Crowd-control requirements
Access/parking requirements

"After Booking"

Customer receives:
booking confirmation
event checklist
contact information
arrival coordination
final confirmation

Make this look like a real professional operating procedure.
```

---

# PROMPT 11 — GALLERY + VIDEO SYSTEM

```text
Build a professional media/gallery system.

Categories:

Robot Demonstrations
Robot Dance
Weddings
Birthdays
Corporate
Schools
Colleges
Exhibitions
Behind the Scenes
Customer Moments

Each media item must support:

title
description
media type
video/image
source
license status
robot
event category
published status
date
alt text

IMPORTANT:
We currently may use manufacturer/demo footage.

Support media labels:

DEMO
ILLUSTRATIVE
ROBOFEST EVENT
CUSTOMER EVENT
BEHIND THE SCENES

Do not allow demonstration footage to visually appear as a completed CKR customer event.

Create a subtle "Robot Demonstration" label where required.

Future workflow:
Admin uploads real CKR event videos and changes the media category.

No code changes should be required.

Optimize videos for performance.
Use lazy loading.
Use poster images.
Do not autoplay sound.
Use accessible video controls.
```

---

# PROMPT 12 — ABOUT + TRUST

```text
Create the About page.

Position Chandrakanth Robofest as an emerging professional robotic entertainment business based in Anakapalle, Andhra Pradesh.

Do not claim:
India's #1
Andhra Pradesh's #1
largest
most trusted
or other unsupported superlatives.

Use honest positioning:

"Bringing robotic entertainment experiences to celebrations, businesses and events."

Sections:

Who We Are
Our Mission
Our Vision
What We Offer
Our Service Area
Safety & Professional Operation
Future Vision

Add:
"Launching in Andhra Pradesh"

if appropriate.

Create a separate Safety section/page explaining:

trained operator
controlled performance area
supervised guest interaction
equipment inspection
emergency procedures
weather restrictions
venue requirements
safe transportation

This should communicate professionalism.
```

---

# PROMPT 13 — BUSINESS / INVESTOR PAGE

This is the most important investor-specific prompt.

```text
Build a polished "Business" / "Investment" page.

IMPORTANT:
This page must NOT look like a PowerPoint presentation.

It should look like a real business information page inside an operating company website.

Headline:

"Building the Future of Event Entertainment"

Explain the business model:

Chandrakanth Robofest provides robotic entertainment as a service.

Revenue streams:

1. Wedding robot experiences
2. Birthday entertainment
3. Corporate events
4. School programs
5. College events
6. Exhibitions
7. Mall activations
8. Brand promotions
9. Grand openings
10. Multi-robot experiences
11. Future robot rentals to event companies

Explain the model:

Acquire/lease robotic equipment
→ Maintain fleet
→ Market experiences
→ Receive bookings
→ Deploy trained operators
→ Generate event revenue
→ Reinvest into fleet
→ Expand service area

Create:

MARKET OPPORTUNITY

Do not use unsupported market-size claims.

Explain the opportunity qualitatively and use verified market evidence only when properly sourced.

Create:

REVENUE MODEL

Show example package pricing:
Standard ₹9,999
Medium ₹14,999
Premium ₹24,999
Signature Custom

Label all projections as:
"Illustrative business projection"

Create a configurable financial model.

Inputs:
average booking value
monthly bookings
operating cost/event
monthly fixed cost
robot acquisition cost
marketing cost
maintenance
transportation
operator cost

Outputs:
monthly gross revenue
monthly operating costs
estimated contribution
annualized revenue
estimated break-even period

Do not fabricate actual business performance.

Create:

SCALING MODEL

Phase 1:
Anakapalle + Visakhapatnam

Phase 2:
North Andhra

Phase 3:
Andhra Pradesh

Phase 4:
Multi-city expansion

Explain why additional robots increase potential capacity.

Create:

USE OF INVESTMENT

Robot acquisition
spare batteries
transport cases
maintenance
insurance
marketing
working capital
technology
operator training

Create:

INVESTMENT OPPORTUNITY

Do not state that investment is publicly available unless configured.

Use:
"Interested in discussing the business?"

CTA:
"REQUEST BUSINESS INFORMATION"

Create an investor enquiry form:

Name
Company
Email
Phone
Investment interest
Message

Store leads securely.

The page should demonstrate business sophistication without pretending the company has already achieved projections.
```

---

# PROMPT 14 — ADMIN DASHBOARD

```text
Now build the complete secure admin dashboard.

Admin sections:

Dashboard
Calendar
Bookings
Customers
Robots
Packages
Add-ons
Pricing
Availability
Service Areas
Gallery
Testimonials
FAQs
Business Metrics
Expenses
Investor Leads
Settings

DASHBOARD:

Bookings today
Upcoming bookings
Pending enquiries
Confirmed bookings
Monthly revenue
Monthly expenses
Average booking value
Robot utilization
Upcoming events

CALENDAR:

Day
Week
Month

Show robot-specific schedules.

Prevent double booking.

ROBOTS:

Create/edit/delete
Name
Model
Status
Capabilities
Specifications
Media
Rental price
Internal acquisition cost
Maintenance status

PACKAGES:

Create/edit
Name
Price
Duration
Features
Included services
Available robots
Active/inactive

ADD-ONS:

Name
Price
Rules
Active/inactive

PRICING:

All pricing must be centrally configurable.

GALLERY:

Upload media
Set category
Set label
Set robot
Publish/unpublish

BOOKINGS:

View
Edit
Confirm
Cancel
Mark completed
Add notes
Generate internal booking information

INVESTOR LEADS:

View
Status
Notes
Follow-up

SECURITY:

Use Supabase Auth.
Admin-only routes.
Never expose service-role keys to the client.
Validate all server-side mutations.
Protect sensitive financial information.

Do not create insecure client-side admin authentication.
```

---

# PROMPT 15 — CUSTOMER CRM

```text
Build a lightweight CRM for CKR.

Customer records:

name
phone
email
location
event history
booking history
total bookings
total revenue
notes
created_at

Customer statuses:

Lead
Enquiry
Customer
Repeat Customer
Partner

Add event history.

A customer should be able to have multiple bookings.

Do not store unnecessary sensitive personal information.

Create search and filtering.

Allow admin to open:
Customer
→ previous events
→ bookings
→ amounts
→ notes
```

---

# PROMPT 16 — PARTNER SYSTEM

This will be extremely useful for your actual business.

```text
Build a Partner Management module.

Potential partners:

Event planners
Wedding planners
Decorators
DJs
Photographers
Banquet halls
Hotels
Schools
Colleges
Advertising agencies
Malls

Partner fields:

business name
contact person
phone
email
location
category
commission type
commission amount
status
notes

Partner statuses:

Prospect
Contacted
Active
Inactive

Track:
lead source
booking referrals
commission
booking revenue

Create a public:
"Partner With CKR"

page/form.

Do not publicly display partner commission information.
```

---

# PROMPT 17 — SEO + LOCAL BUSINESS

```text
Optimize Chandrakanth Robofest for local search.

Primary geographic focus:

Anakapalle
Visakhapatnam
Andhra Pradesh

Relevant search intent:

robot rental Anakapalle
robot rental Visakhapatnam
robot for wedding Vizag
robot for birthday Vizag
robot dance event Vizag
robot entertainment Andhra Pradesh
humanoid robot event Andhra Pradesh
robot dog event Vizag
robot entertainment for weddings
robot entertainment for corporate events

Do NOT keyword-stuff.

Create:
title metadata
description metadata
Open Graph metadata
Twitter/social metadata
canonical URLs
robots configuration
sitemap
structured data where appropriate

Create LocalBusiness/Service structured data only where accurate.

Do not claim a physical office address unless configured.

Optimize images and videos.

Create clean URLs:

/robots
/robots/[slug]
/experiences
/experiences/[slug]
/packages
/events/[slug]
/availability
/gallery
/about
/business
/contact
/book
```

---

# PROMPT 18 — MOBILE + PERFORMANCE

```text
Perform a complete mobile-first optimization pass.

Target users are likely to discover CKR through Instagram, WhatsApp and mobile search.

Requirements:

Excellent mobile navigation
Sticky BOOK NOW CTA
Fast initial load
Optimized video
Responsive images
Lazy loading
Accessible buttons
Readable pricing cards
Easy WhatsApp interaction
Easy phone interaction
Simple booking form

Test:

360px
390px
430px
768px
1024px
1280px
1440px
1920px

Prevent:
horizontal scrolling
layout shifts
oversized video
tiny text
unreachable buttons
broken animations

Respect prefers-reduced-motion.

Optimize Core Web Vitals.

Do not sacrifice performance for decorative effects.
```

---

# PROMPT 19 — LEGAL + TRUST PAGES

```text
Create the following pages:

/terms
/privacy
/cancellation
/safety
/booking-policy

Do not invent legal claims.

Create professional placeholder policy content that clearly identifies areas requiring final business/legal review before production launch.

Booking policy should explain:

availability
confirmation
advance payment if later enabled
cancellation
rescheduling
travel
weather
technical failure
venue requirements
customer responsibilities
robot safety

Do not present legal advice as legal advice.

Ensure forms include appropriate consent where required.
```

---

# PROMPT 20 — FINAL "REAL BUSINESS" AUDIT

This is the prompt I especially recommend running after everything else.

```text
Perform a complete production and business-readiness audit of Chandrakanth Robofest.

Pretend you are BOTH:

1. A real customer looking to book a robot for a wedding.
2. An investor evaluating the business.

CUSTOMER TEST:

Can I understand the business within 10 seconds?

Can I see what robots are offered?

Can I understand what the robots do?

Can I understand Standard, Medium and Premium packages?

Can I see pricing?

Can I check availability?

Can I request a booking?

Can I understand what is included?

Can I understand additional charges?

Can I understand service areas?

Can I contact CKR easily?

INVESTOR TEST:

Can I understand the business model?

Can I understand the revenue streams?

Can I understand package economics?

Can I understand operating workflow?

Can I understand how robot utilization affects revenue?

Can I understand scaling?

Can I understand investment use?

Can I distinguish actual information from projections?

TRUST TEST:

Are any fake testimonials present?

Are any fake customer events presented as real?

Are any unowned robots presented as owned?

Are any unsupported claims such as "No.1" present?

Are any fake revenue numbers presented as actual?

Are demo videos clearly identified?

Are legal/safety limitations addressed?

TECHNICAL TEST:

Check TypeScript.

Check build.

Check lint.

Check all routes.

Check server/client boundaries.

Check Supabase queries.

Check RLS.

Check authentication.

Check admin protection.

Check forms.

Check error handling.

Check loading states.

Check empty states.

Check mobile responsiveness.

Check accessibility.

Check SEO.

Check metadata.

Check performance.

Check image/video optimization.

Check security.

Fix every issue you find.

Do not simply report problems.
Fix them where safe.

At the end provide a concise production-readiness report containing:

Completed
Needs business information
Needs robot information
Needs real media
Needs legal review
Needs final pricing
Needs deployment configuration
```

---

# One additional prompt I strongly recommend

After the website is working, give Codex this:

## PROMPT 21 — "MAKE IT LOOK LIKE A REAL COMPANY"

```text
Now conduct a visual/product-quality review of the entire Chandrakanth Robofest website.

Do NOT add more features unless necessary.

Instead improve the existing experience so it feels like a real premium company that is already prepared to accept customers.

Focus on:

visual hierarchy
brand consistency
premium typography
spacing
image quality
video presentation
pricing clarity
trust
conversion
mobile usability
navigation
micro-interactions
empty states
loading states
error states
forms
booking experience
business credibility

The design should communicate:

CELEBRATION
PREMIUM ENTERTAINMENT
ROBOTICS
TRUST
PROFESSIONALISM

Do not make it:
childish
overly futuristic
cyberpunk
AI-template-like
over-animated
generic

A visitor should feel:

"These people provide a professional event service."

An investor should feel:

"This is a properly structured business platform."

Make only meaningful improvements.
Do not introduce unnecessary complexity.
```

---

# The final website should look like this

```text
                 CKR
       CHANDRAKANTH ROBOFEST

   ROBOTS • EVENTS • EXPERIENCES


        BRING THE FUTURE
       TO YOUR CELEBRATION

 Premium robotic entertainment
 for unforgettable occasions.

       [ BOOK NOW ]
   [ CHECK AVAILABILITY ]


──────────────────────────────

       WHAT WE DO

  ROBOT DANCE
  GREETINGS
  ACTION SHOWS
  INTERACTION
  PHOTO EXPERIENCE


──────────────────────────────

       OUR ROBOTS

  HUMANOID       ROBOT DOG
  PERFORMANCE    EXPERIENCE


──────────────────────────────

     CHOOSE YOUR EXPERIENCE

 Weddings | Birthdays | Corporate
 Schools | Colleges | Exhibitions
 Malls | Brand Activations


──────────────────────────────

         PACKAGES

 STANDARD       MEDIUM       PREMIUM
 ₹9,999         ₹14,999      ₹24,999

       SIGNATURE
       CUSTOM QUOTE


──────────────────────────────

       AVAILABILITY

     SELECT DATE + TIME

     AVAILABLE
     REQUEST
     BOOKED


──────────────────────────────

       HOW IT WORKS

   CHOOSE → BOOK → PREPARE → EXPERIENCE


──────────────────────────────

          GALLERY

     ROBOT DEMONSTRATIONS
        REAL EVENTS
       (future content)


──────────────────────────────

       WHY CHOOSE CKR

 Professional
 Safe
 Transparent
 Local
 Custom Experiences


──────────────────────────────

        ABOUT CKR

 Robotic entertainment
 for Andhra Pradesh


──────────────────────────────

      BUSINESS

 How the business works
 Revenue model
 Expansion
 Investment opportunity


──────────────────────────────

       MAKE YOUR EVENT
       UNFORGETTABLE

          [ BOOK NOW ]


──────────────────────────────

 CHANDRAKANTH ROBOFEST
 Anakapalle • Andhra Pradesh

 WhatsApp | Call | Email
```

## One key decision

**Do not build the robot purchase decision into the website yet.**

The website should be **robot-agnostic at the architecture level**.

Today:

> Demonstration Robot A

Later:

> CKR Humanoid Robot — Model X

Later still:

> CKR Humanoid + Robot Dog

The customer-facing experience stays the same.

That is important because you're still evaluating **Luna, G1, Walker C1, R1, Go2, etc.** The website shouldn't have to be rebuilt when the investment decision is made.

And when you upload your downloaded/demo videos, the CMS should let you mark them **“Robot Demonstration”**. When your actual CKR events begin, you simply upload the real videos and mark them **“CKR Event”**—the site automatically transitions from the investor prototype into the actual operating business website.

**This is the architecture I would use for the project.**
