import { emptyContent } from "./constants";

export const withFallback = (content = {}) => {
  return {
    ...emptyContent,
    ...content,
    hero: { ...emptyContent.hero, ...(content.hero || {}) },
    about: { ...emptyContent.about, ...(content.about || {}) },
    contact: { ...emptyContent.contact, ...(content.contact || {}) },
    churchPhotography: Array.isArray(content.churchPhotography)
      ? content.churchPhotography
      : emptyContent.churchPhotography,
    eventPhotography: Array.isArray(content.eventPhotography)
      ? content.eventPhotography
      : emptyContent.eventPhotography,
    organizationalWork: Array.isArray(content.organizationalWork)
      ? content.organizationalWork
      : emptyContent.organizationalWork,
  };
};

