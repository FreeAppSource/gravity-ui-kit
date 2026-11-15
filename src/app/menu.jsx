import React from 'react';
import { Stack } from 'expo-router';
import SketchScreen from '../sketch/SketchScreen';

// menu — "Menu" drawer artboard (260x812) from the Sketch design, shown over the previous screen.
export default function MenuScreen() {
  return (
    <>
      <Stack.Screen options={{ presentation: 'transparentModal', animation: 'fade' }} />
      <SketchScreen slug="menu" drawer />
    </>
  );
}
