let keyshotXRBalon;

function initKeyShotXRBalon() {
    let nameOfDiv = "balon";
    let folderName = "balon";
    let viewPortWidth = 720;
    let viewPortHeight = 480;
    let backgroundColor = "#FFFFFF";
    let uCount = 18;
    let vCount = 1;
    let uWrap = true;
    let vWrap = false;
    let uMouseSensitivity = -0.05;
    let vMouseSensitivity = 1;
    let uStartIndex = 9;
    let vStartIndex = 0;
    let minZoom = 1;
    let maxZoom = 1;
    let rotationDamping = 0.96;
    let downScaleToBrowser = true;
    let addDownScaleGUIButton = false;
    let downloadOnInteraction = false;
    let imageExtension = "jpg";
    let showLoading = true;
    let loadingIcon = "ks_logo.png"; // Set to empty string for default icon.
    let allowFullscreen = true; // Double-click in desktop browsers for fullscreen.
    let uReverse = false;
    let vReverse = false;
    let hotspots = {};
    let isIBooksWidget = false;

    keyshotXRBalon = new keyshotXR(nameOfDiv, folderName, viewPortWidth, viewPortHeight, backgroundColor, uCount, vCount, uWrap, vWrap, uMouseSensitivity, vMouseSensitivity, uStartIndex, vStartIndex, minZoom, maxZoom, rotationDamping, downScaleToBrowser, addDownScaleGUIButton, downloadOnInteraction, imageExtension, showLoading, loadingIcon, allowFullscreen, uReverse, vReverse, hotspots, isIBooksWidget);
}

initKeyShotXRBalon()