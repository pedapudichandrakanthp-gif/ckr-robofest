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
  hero: {
    id: 'home-hero-showcase',
    type: 'video',
    ...emptyMedia,
    src: '/videos/hero/ckr-hero.mp4',
    posterSrc: '/images/hero/hero-poster.jpg',
    alt: 'Cinematic showcase of robot entertainment experience',
    label: 'Illustrative Media',
    credit: 'Robot entertainment concept showcase',
    source: 'CKR media library',
  },
  experiences: {
    robotDance: {
      id: 'experience-robot-dance',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/robot-dance.jpg',
      alt: 'Abstract visual placeholder for a robot dance event experience',
      label: 'Illustrative Media',
    },
    robotGreeting: {
      id: 'experience-robot-greeting',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/robot-greeting.jpg',
      alt: 'Abstract visual placeholder for a robot greeting event experience',
      label: 'Illustrative Media',
    },
    actionShow: {
      id: 'experience-action-show',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/action-show.jpg',
      alt: 'Abstract visual placeholder for a controlled robot action show',
      label: 'Illustrative Media',
    },
    photoExperience: {
      id: 'experience-photo-experience',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/photo-experience.jpg',
      alt: 'Abstract visual placeholder for a supervised robot photo experience',
      label: 'Illustrative Media',
    },
    interactive: {
      id: 'experience-interactive',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/interactive.jpg',
      alt: 'Abstract visual placeholder for a supervised interactive robot demonstration',
      label: 'Illustrative Media',
    },
    grandEntrance: {
      id: 'experience-grand-entrance',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/grand-entrance.jpg',
      alt: 'Abstract visual placeholder for a grand robot entrance concept',
      label: 'Illustrative Media',
    },
    robotHost: {
      id: 'experience-robot-host',
      type: 'image',
      ...emptyMedia,
      src: '/images/experiences/robot-host.jpg',
      alt: 'Abstract visual placeholder for a robot host event moment',
      label: 'Illustrative Media',
    },
  },
  events: {
    weddings: {
      id: 'event-weddings',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/weddings.jpg',
      alt: 'Abstract visual placeholder for robot entertainment at weddings',
      label: 'Illustrative Media',
    },
    birthdays: {
      id: 'event-birthdays',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/birthdays.jpg',
      alt: 'Abstract visual placeholder for robot entertainment at birthdays',
      label: 'Illustrative Media',
    },
    corporate: {
      id: 'event-corporate',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/corporate.jpg',
      alt: 'Abstract visual placeholder for robot entertainment at corporate events',
      label: 'Illustrative Media',
    },
    schools: {
      id: 'event-schools',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/schools.jpg',
      alt: 'Abstract visual placeholder for robot demonstrations at schools and colleges',
      label: 'Illustrative Media',
    },
    exhibitions: {
      id: 'event-exhibitions',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/exhibitions.jpg',
      alt: 'Abstract visual placeholder for robot displays at exhibitions and malls',
      label: 'Illustrative Media',
    },
    brand: {
      id: 'event-brand-activations',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/brand-activations.jpg',
      alt: 'Abstract visual placeholder for robot entertainment at brand activations',
      label: 'Illustrative Media',
    },
    grandOpenings: {
      id: 'event-grand-openings',
      type: 'image',
      ...emptyMedia,
      src: '/images/events/grand-openings.jpg',
      alt: 'Abstract visual placeholder for robot entertainment at grand openings',
      label: 'Illustrative Media',
    },
  },
} as const;
