// contentfulRenderFunctions.js

import * as cms from '@botonic/plugin-contentful';
import { msgsToBotonic } from '@botonic/react';

const converter = new cms.BotonicMsgConverter();

export function renderText(text) {
  const msg = converter.text(text);
  return msgsToBotonic(msg);
}

export function renderCarousel(carousel) {
  const msg = converter.carousel(carousel);
  return msgsToBotonic(msg);
}

export function renderStartUp(startUp) {
  const msg = converter.startUp(startUp);
  return msgsToBotonic(msg);
}
