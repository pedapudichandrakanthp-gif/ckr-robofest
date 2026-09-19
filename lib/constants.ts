import { homeMedia } from '@/lib/media';

export const eventTypes = [
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Elegant robotic entertainment for your special day',
    media: {
      asset: homeMedia.events.weddings,
      composition: 'mandap-glow',
    },
  },
  {
    id: 'birthdays',
    title: 'Birthdays',
    description: 'Memorable robot experiences for celebrations',
    media: {
      asset: homeMedia.events.birthdays,
      composition: 'celebration-orbit',
    },
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Professional robotics for business functions',
    media: {
      asset: homeMedia.events.corporate,
      composition: 'stage-grid',
    },
  },
  {
    id: 'schools',
    title: 'Schools & Colleges',
    description: 'Educational and entertaining robot demonstrations',
    media: {
      asset: homeMedia.events.schools,
      composition: 'learning-arc',
    },
  },
  {
    id: 'exhibitions',
    title: 'Exhibitions & Malls',
    description: 'Engaging robotic displays for public venues',
    media: {
      asset: homeMedia.events.exhibitions,
      composition: 'public-showcase',
    },
  },
  {
    id: 'brand',
    title: 'Brand Activations',
    description: 'Interactive experiences for product launches',
    media: {
      asset: homeMedia.events.brand,
      composition: 'brand-reveal',
    },
  },
  {
    id: 'grand-openings',
    title: 'Grand Openings',
    description: 'Dramatic robot reveals for new businesses',
    media: {
      asset: homeMedia.events.grandOpenings,
      composition: 'ribbon-spotlight',
    },
  },
] as const;

export const experiences = [
  {
    id: 'robot-dance',
    title: 'Robot Dance',
    description: 'Choreographed robot performance concepts for celebration moments and stage-focused event flow. Dance capabilities depend on the selected robot.',
    idealEvents: ['weddings', 'birthdays', 'corporate', 'schools'],
    media: {
      asset: homeMedia.experiences.robotDance,
      mood: 'performance-stage',
    },
  },
  {
    id: 'robot-greeting',
    title: 'Robot Greeting',
    description: 'Welcoming arrivals and prepared messages, planned around the selected robot and guest flow.',
    idealEvents: ['weddings', 'corporate', 'grand-openings'],
    media: {
      asset: homeMedia.experiences.robotGreeting,
      mood: 'welcome-entrance',
    },
  },
  {
    id: 'action-show',
    title: 'Action Show',
    description: 'Controlled choreographed movement demonstrations designed for controlled performance areas and suitable venues. Movement capabilities depend on the selected robot.',
    idealEvents: ['birthdays', 'schools', 'exhibitions'],
    media: {
      asset: homeMedia.experiences.actionShow,
      mood: 'motion-show',
    },
  },
  {
    id: 'photo-experience',
    title: 'Photo Experience',
    description: 'Controlled guest interaction for memorable photos. Interaction capabilities depend on the selected robot and event safety requirements.',
    idealEvents: ['weddings', 'birthdays', 'corporate'],
    media: {
      asset: homeMedia.experiences.photoExperience,
      mood: 'photo-moment',
    },
  },
  {
    id: 'interactive',
    title: 'Interactive Experience',
    description: 'Supervised demonstrations where interaction is shaped by robot capability and event safety needs.',
    idealEvents: ['schools', 'exhibitions', 'brand'],
    media: {
      asset: homeMedia.experiences.interactive,
      mood: 'guest-interaction',
    },
  },
  {
    id: 'grand-entrance',
    title: 'Grand Entrance',
    description: 'A dramatic robot arrival concept for special occasions, launches, and celebration highlights.',
    idealEvents: ['weddings', 'grand-openings', 'corporate'],
    media: {
      asset: homeMedia.experiences.grandEntrance,
      mood: 'grand-reveal',
    },
  },
  {
    id: 'robot-host',
    title: 'Robot Host',
    description: 'Prepared announcements and host-style moments where supported by the chosen robot and setup.',
    idealEvents: ['corporate', 'exhibitions', 'brand'],
    media: {
      asset: homeMedia.experiences.robotHost,
      mood: 'host-spotlight',
    },
  },
] as const;

export const packages = [
  {
    id: 'standard',
    name: 'Standard',
    price: 9999,
    duration: 'Up to 30 minutes',
    features: [
      'Robot appearance',
      '1 dance performance',
      'Greeting',
      'Photo opportunity',
      'Operator supervision',
      'Basic setup',
    ],
    popular: false,
  },
  {
    id: 'medium',
    name: 'Medium',
    price: 14999,
    duration: 'Up to 60 minutes',
    features: [
      '2-3 performances',
      'Dance routines',
      'Greetings',
      'Interactive demonstration',
      'Photo experience',
      'Customized event message',
      'Operator supervision',
      'Setup and pack-down',
      'Local transportation',
    ],
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 24999,
    duration: 'Up to 2 hours',
    features: [
      'Grand entrance',
      'Multiple performances',
      '3-4 dance routines',
      'Customized greeting',
      'Action show',
      'Guest interaction',
      'Photo experience',
      'Dedicated operator',
      'Event coordination',
      'Setup and pack-down',
      'Transportation',
    ],
    popular: false,
  },
  {
    id: 'signature',
    name: 'Signature',
    price: null,
    duration: 'Custom',
    features: [
      'Corporate events',
      'Brand activations',
      'Large weddings',
      'Exhibitions',
      'Malls',
      'Multi-robot experiences',
      'Custom choreography',
      'Extended duration',
    ],
    popular: false,
  },
] as const;

export const serviceAreas = [
  {
    id: 'anakapalle',
    name: 'Anakapalle',
    primary: true,
  },
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam',
    primary: true,
  },
  {
    id: 'vizianagaram',
    name: 'Vizianagaram',
    primary: false,
  },
  {
    id: 'srikakulam',
    name: 'Srikakulam',
    primary: false,
  },
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    primary: false,
  },
] as const;

export const processSteps = [
  {
    step: 1,
    title: 'Tell us about your event',
    description: 'Share your event details, preferences, and requirements',
  },
  {
    step: 2,
    title: 'Choose your experience',
    description: 'Select from planned robot options, packages, and experience types',
  },
  {
    step: 3,
    title: 'Confirm availability',
    description: 'Check robot availability and receive a detailed quote',
  },
  {
    step: 4,
    title: 'We prepare and perform',
    description: 'CKR coordinates the selected robot, operator and event setup',
  },
] as const;

export const safetyFeatures = [
  {
    id: 'trained-operator',
    title: 'Trained Operator',
    description: 'Planned operator-supported performances with professional supervision',
  },
  {
    id: 'controlled-area',
    title: 'Controlled Performance Area',
    description: 'Designated safe zones for robot operation as per venue requirements',
  },
  {
    id: 'venue-assessment',
    title: 'Venue Assessment',
    description: 'Pre-event evaluation of space and requirements for robot setup',
  },
  {
    id: 'supervised-interaction',
    title: 'Supervised Interaction',
    description: 'All guest interactions will be monitored for safety',
  },
  {
    id: 'equipment-inspection',
    title: 'Equipment Inspection',
    description: 'Regular maintenance and safety checks before each event',
  },
  {
    id: 'safe-transport',
    title: 'Safe Transport',
    description: 'Professional handling and secure transportation to venue',
  },
] as const;

export const robotsUnderConsideration = [
  {
    id: 'unitree-g1',
    name: 'Unitree G1',
    description: 'Advanced humanoid robot designed for dynamic movement and interactive capabilities. Suitable for dance performances, greetings, and controlled action demonstrations.',
    suitableExperiences: ['Robot Dance', 'Robot Greeting', 'Action Show', 'Grand Entrance'],
    status: 'Under Evaluation',
    capabilities: 'Dynamic movement, gesture recognition, balance control',
  },
  {
    id: 'unitree-go2',
    name: 'Unitree Go2',
    description: 'Quadruped robot with excellent stability and interactive features. Ideal for greetings, photo experiences, and supervised guest interactions.',
    suitableExperiences: ['Robot Greeting', 'Photo Experience', 'Interactive Experience'],
    status: 'Under Evaluation',
    capabilities: 'Stable locomotion, voice interaction, object recognition',
  },
  {
    id: 'limx-luna',
    name: 'LimX Luna',
    description: 'Specialized humanoid robot with emphasis on smooth, elegant movement. Perfect for dance performances, grand entrances, and hosting duties.',
    suitableExperiences: ['Robot Dance', 'Grand Entrance', 'Robot Host'],
    status: 'Under Evaluation',
    capabilities: 'Fluid motion, natural gestures, advanced balance',
  },
] as const;
