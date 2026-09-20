export type MediaType = 'image' | 'video';

export type MediaSourceKind =
  | 'ckr-original'
  | 'manufacturer-demo'
  | 'approved-stock'
  | 'illustrative';

export type MediaAsset = {
  id: string;
  type: MediaType;
  src: string | null;
  posterSrc?: string | null;
  alt: string;
  label?: string;
  credit?: string;
  source?: string;
  sourceKind: MediaSourceKind;
};

const emptyMedia = {
  src: null,
  posterSrc: null,
  sourceKind: 'illustrative',
} satisfies Pick<MediaAsset, 'src' | 'posterSrc' | 'sourceKind'>;

export const homeMedia = {
  hero: [
    {
      id: 'home-hero-01',
      type: 'video',
      ...emptyMedia,
      src: '/videos/hero/hero-01.mp4',
      posterSrc: '/images/hero/hero-02.jpg',
      alt: 'Cinematic showcase of robot entertainment experience',
      credit: 'Robot entertainment concept showcase',
      source: 'CKR media library',
    },
    {
      id: 'home-hero-02',
      type: 'image',
      ...emptyMedia,
      src: '/images/hero/hero-02.jpg',
      alt: 'Robot entertainment at premium events',
      credit: 'Robot entertainment concept showcase',
      source: 'CKR media library',
    },
    {
      id: 'home-hero-03',
      type: 'video',
      ...emptyMedia,
      src: '/videos/hero/hero-03.mp4',
      posterSrc: '/images/hero/hero-04.jpg',
      alt: 'Interactive robot experience demonstration',
      credit: 'Robot entertainment concept showcase',
      source: 'CKR media library',
    },
    {
      id: 'home-hero-04',
      type: 'image',
      ...emptyMedia,
      src: '/images/hero/hero-04.jpg',
      alt: 'Robot performance at celebration events',
      credit: 'Robot entertainment concept showcase',
      source: 'CKR media library',
    },
    {
      id: 'home-hero-05',
      type: 'image',
      ...emptyMedia,
      src: '/images/hero/hero-05.jpg',
      alt: 'Premium robot entertainment for memorable events',
      credit: 'Robot entertainment concept showcase',
      source: 'CKR media library',
    },
  ],
  experiences: {
    robotDance: {
      id: 'experience-robot-dance',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/robot-dance.jpg',
      alt: 'Robot dance event experience',
    },
    robotGreeting: {
      id: 'experience-robot-greeting',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/robot-greeting.jpg',
      alt: 'Robot greeting event experience',
    },
    actionShow: {
      id: 'experience-action-show',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/action-show.jpg',
      alt: 'Controlled robot action show',
    },
    photoExperience: {
      id: 'experience-photo-experience',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/photo-experience.jpg',
      alt: 'Supervised robot photo experience',
    },
    interactive: {
      id: 'experience-interactive',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/interactive.jpg',
      alt: 'Supervised interactive robot demonstration',
    },
    grandEntrance: {
      id: 'experience-grand-entrance',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/grand-entrance.jpg',
      alt: 'Grand robot entrance concept',
    },
    robotHost: {
      id: 'experience-robot-host',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/robot-host.jpg',
      alt: 'Robot host event moment',
    },
  },
  events: {
    weddings: {
      id: 'event-weddings',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/weddings.jpg',
      alt: 'Robot entertainment at weddings',
    },
    birthdays: {
      id: 'event-birthdays',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/birthdays.jpg',
      alt: 'Robot entertainment at birthdays',
    },
    corporate: {
      id: 'event-corporate',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/corporate.jpg',
      alt: 'Robot entertainment at corporate events',
    },
    schools: {
      id: 'event-schools',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/schools.jpg',
      alt: 'Robot demonstrations at schools and colleges',
    },
    exhibitions: {
      id: 'event-exhibitions',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/exhibitions.jpg',
      alt: 'Robot displays at exhibitions and malls',
    },
    brand: {
      id: 'event-brand-activations',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/brand-activations.jpg',
      alt: 'Robot entertainment at brand activations',
    },
    grandOpenings: {
      id: 'event-grand-openings',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/grand-openings.jpg',
      alt: 'Robot entertainment at grand openings',
    },
  },
} as const;
