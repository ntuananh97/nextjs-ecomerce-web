import { Skin, TLayout, TMode } from "@/types/layouts"

type TThemeConfigs = {
    templateName: string;
    layout: TLayout;
    mode: TMode;
  skin: Skin

}

const themeConfigs: TThemeConfigs = {
    templateName: 'LapTrinhThatde' /* App Name */,
    layout: 'vertical' /* vertical | horizontal */,
    mode: 'light' as TMode /* light | dark | semi-dark /*! Note: semi-dark value will only work for Vertical Layout */,
  skin: 'default' /* default | bordered */,

}

export default themeConfigs