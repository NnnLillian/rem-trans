const doc = window.document,
	dom = doc.documentElement || doc.body,
	events = "orientationchange" in window ? "orientationchange" : "resize",
	designWidth = 720,
	designHeight = 0,
	defaultDeviceWidth = 320,
	defaultDeviceHeight = 640,
	_autoRefreash = true,
	sizeType = 1;

const setSize = (force = true) => {
	if (!_autoRefreash && !force) return;

	let pageWidth = dom.clientWidth || defaultDeviceWidth,
		pageHeight = dom.clientHeight || defaultDeviceHeight;

	if (pageWidth > designWidth) {
		pageWidth = designWidth;
	}

	dom.style.fontSize = (pageWidth / designWidth) * 100 + "px";
};


export {setSize}