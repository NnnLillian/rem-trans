const DESIGN_WIDTH = 720; // 设计稿宽度
const DESIGN_HEIGHT = 1440; // 设计稿高度
const BASE_WIDTH = 320;   // 默认宽度
const BASE_HEIGHT = 640;  // 默认高度
const REM_RATIO = 100;    // 固定换算比例 100
let autoRefresh = true;   // 是否自动刷新

// 判断设备屏幕宽高比和方向
const isPortrait = (): boolean => window.innerWidth < window.innerHeight;

// 设置页面大小
const setSize = (force: boolean = true): void => {
  if (!autoRefresh && !force) return;

  const finalBaseWidth = isPortrait() ? BASE_WIDTH : BASE_HEIGHT;
  const finalBaseHeight = isPortrait() ? BASE_HEIGHT : BASE_WIDTH;

  // 获取页面宽高，如果clientWidth为空，则使用默认值
  const pageWidth = document.documentElement.clientWidth || finalBaseWidth;
  const pageHeight = document.documentElement.clientHeight || finalBaseHeight;

  // 判断当前方向，如果是横屏，使用 DESIGN_HEIGHT，否则使用 DESIGN_WIDTH
  const finalDesignWidth = isPortrait() ? DESIGN_WIDTH : DESIGN_HEIGHT;

  // 计算屏幕的宽高比
  const aspectRatio = pageWidth / pageHeight;

  // 如果竖屏且屏幕宽高比大于 2/3 或页面宽度大于设计稿宽度，限制页面宽度为 DESIGN_WIDTH
  const finalWidth = pageWidth > finalDesignWidth || (isPortrait() && aspectRatio > 2 / 3)
    ? finalDesignWidth
    : pageWidth;

  // 设置页面字体大小，根据页面宽度与设计稿宽度的比例，乘以 REM_RATIO
  document.documentElement.style.fontSize = (finalWidth / finalDesignWidth) * REM_RATIO + "px";
};

// 监听屏幕旋转事件（`orientationchange`）或窗口大小变化事件（`resize`）
const handleResize = () => setSize(false); // 重新计算页面大小

// 初始设置页面大小
setSize();

// 监听屏幕方向变化
window.addEventListener('orientationchange', handleResize);

// 监听窗口大小变化
window.addEventListener('resize', handleResize);

// 导出设置函数
export { setSize };
