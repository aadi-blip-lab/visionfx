import "./uploader.js";

import { registerEffect } from "./renderer.js";

import exposure from "../effects/exposure.js";
import brightness from "../effects/brightness.js";
import contrast from "../effects/contrast.js";
import saturation from "../effects/saturation.js";

registerEffect(exposure);
registerEffect(brightness);
registerEffect(contrast);
registerEffect(saturation);

import "./ui/sidebar.js";
