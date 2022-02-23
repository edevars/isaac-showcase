let keyshotXRCilindro;

function initKeyShotXRCilindro() {
    let nameOfDiv = "cilindros";
    let folderName = "cilindros";
    let viewPortWidth = 602;
    let viewPortHeight = 602;
    let backgroundColor = "#FFFFFF";
    let uCount = 10;
    let vCount = 5;
    let uWrap = true;
    let vWrap = false;
    let uMouseSensitivity = -0.0277778;
    let vMouseSensitivity = 0.0625;
    let uStartIndex = 5;
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

    keyshotXRCilindro = new keyshotXR(nameOfDiv, folderName, viewPortWidth, viewPortHeight, backgroundColor, uCount, vCount, uWrap, vWrap, uMouseSensitivity, vMouseSensitivity, uStartIndex, vStartIndex, minZoom, maxZoom, rotationDamping, downScaleToBrowser, addDownScaleGUIButton, downloadOnInteraction, imageExtension, showLoading, loadingIcon, allowFullscreen, uReverse, vReverse, hotspots, isIBooksWidget);
}

initKeyShotXRCilindro();