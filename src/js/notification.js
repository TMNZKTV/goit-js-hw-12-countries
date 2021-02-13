import "@pnotify/core/dist/PNotify.css";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import { alert, success, error, defaultModules } from "@pnotify/core";
import * as PNotifyMobile from "@pnotify/mobile/dist/PNotifyMobile.js";
import "@pnotify/core/dist/BrightTheme.css";
import fetchCountries from "./fetch-Countries";

const myError = () =>
  error({
    text: "Too many matches found! Please enter a more specific query!",
  });
myError.delay = 3000;

export default myError;
