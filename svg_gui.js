import { svgPositionSet, ensureTransform, svgPositionGet } from "https://github.com/AlexeyBoiko/DgrmJS/blob/e6d6a13c6294e79058f605ff1609c3f08ee5cf27/src/diagram/infrastructure/svg-utils.js";



/**
 * @param {SVGGraphicsElement} svgEl
 * @param {Point} fixedPoint
 *                this point will not change position while scale
 * @param {number} scale
 * @param {number} nextScale
 */

export function svgScale(svgEl, fixedPoint, scale, nextScale) {
    const position = svgPositionGet(svgEl);
 
    svgPositionSet(svgEl, {
        x: nextScale / scale * (position.x - fixedPoint.x) +     
           fixedPoint.x,
        y: nextScale / scale * (position.y - fixedPoint.y) + 
           fixedPoint.y
    });
 
    ensureTransform(svgEl, SVGTransform.SVG_TRANSFORM_SCALE)
        .setScale(nextScale, nextScale);
}

// 'svg' is type of {SVGSVGElement}
let scale = 1;
// mouse wheel, trackpad pitch
svg.addEventListener('wheel', /** @param {WheelEvent} evt */ evt => {
    evt.preventDefault();
 
 
    // calc nextScale
 
    const delta = evt.deltaY || evt.deltaX;
    const scaleStep = Math.abs(delta) < 50
        ? 0.05  // touchpad pitch
        : 0.25; // mouse wheel
 
    const scaleDelta = delta < 0 ? scaleStep : -scaleStep;
    const nextScale = scale + scaleDelta; // 'scale' is prev scale
 
 
    // calc fixedPoint
    const fixedPoint = { x: evt.clientX, y: evt.clientY };
 
 
    // scale
    // 'svgEl' is element to scale
    svgScale(svgEl, fixedPoint, scale, nextScale);
    scale = nextScale;
});

// calc nextScale
 
// distance between fingers
const distanceNew = Math.hypot(
    firstFinger.x - secondFinger.x,
    firstFinger.y - secondFinger.y);
 
// 'distance' is previous distance between fingers
// 'scale' is previous scale
const nextScale = scale / distance * distanceNew;
 
 
// calc fixedPoint
const fixedPoint = {
    x: (firstFinger.x + secondFinger.x) / 2,
    y: (firstFinger.y + secondFinger.y) / 2
};
 
 
// scale
// 'svgEl' is element to scale
svgScale(svgEl, fixedPoint, scale, nextScale);
scale = nextScale;
 
// don't forget to also move the canvas behind your fingers